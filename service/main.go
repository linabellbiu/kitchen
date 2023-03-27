package main

import (
	"database/sql"
	"fmt"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/google/uuid"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"log"
	"net/http"
	"strconv"
)

type Data struct {
	Food []*KMenu `json:"data"`
	Page int      `json:"page"`
	Size int      `json:"size"`
}

var DB *gorm.DB

func main() {
	r := gin.Default()
	r.Use(cors(), gin.Recovery()) //开启中间件 允许使用跨域请求
	r.GET("/api/getFood", GetFood)
	r.POST("/api/UploadImg", UploadImg)
	r.Static("/more_static", "./more_static")
	r.POST("/api/addFood", AddFood)

	r.Run("0.0.0.0:8080") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}

func UploadImg(ctx *gin.Context) {
	file, _ := ctx.FormFile("file")
	log.Println(file.Filename)

	u, _ := uuid.NewUUID()
	dst := "more_static/" + u.String() + ".jpg"
	err := ctx.SaveUploadedFile(file, dst)
	if err != nil {
		fmt.Println(err)
		return
	}

	ctx.JSON(http.StatusOK, struct {
		Msg  string `json:"msg"`
		Flag int    `json:"flag"`
	}{
		Flag: 1,
		Msg:  dst,
	})
}

func AddFood(ctx *gin.Context) {
	name := ctx.Query("name")
	img := ctx.Query("img")
	class, _ := strconv.Atoi(ctx.Query("class"))
	err := GetDBSession().Create(&KMenu{
		Name:  name,
		Img:   img,
		Index: class,
	}).Error
	if err != nil {
		return
	}
	ctx.JSON(http.StatusOK, struct {
		Msg  string `json:"msg"`
		Flag int    `json:"flag"`
	}{
		Flag: 1,
		Msg:  "添加成功",
	})
}

func GetFood(ctx *gin.Context) {
	page, _ := strconv.Atoi(ctx.Query("page"))
	size, _ := strconv.Atoi(ctx.Query("size"))
	class := ctx.Query("class")
	if page == 0 {
		page = 1
	}

	var data = make([]*KMenu, 0)
	db := GetDBSession().Model(&data).Where("is_del = 0")
	if class != "-1" {
		db.Where("index = ?", class)
	}
	err := db.Limit(size).Offset((page - 1) * size).Find(&data).Error
	if err != nil {
		return
	}
	ctx.JSON(http.StatusOK, Data{
		Food: data,
		Page: page,
		Size: size,
	},
	)
}

type KMenu struct {
	ID    int    `gorm:"column:id;primary_key;AUTO_INCREMENT" json:"id"`
	Name  string `gorm:"column:name;NOT NULL" json:"name"`
	Img   string `gorm:"column:img;NOT NULL" json:"img"`
	Index int    `gorm:"column:index;NOT NULL" json:"index"`
	IsDel int    `gorm:"column:is_del;default:0;NOT NULL" json:"is_del"`
}

func (m *KMenu) TableName() string {
	return "k_menu"
}

func init() {
	db, err := sql.Open("mysql", fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=utf8&parseTime=True&loc=Local", "root", "k_kitchen_123456", "mysql", "3306", "kitchen"))
	if err != nil {
		fmt.Println("数据库链接错误#1", err)
		return
	}
	DB, err = gorm.Open(mysql.New(mysql.Config{
		Conn: db,
	}), &gorm.Config{Logger: logger.Default.LogMode(logger.Info)})
	if err != nil {
		fmt.Println("数据库链接错误#3", err)
		return
	}
}

func GetDBSession() *gorm.DB {
	return DB.Session(&gorm.Session{PrepareStmt: true})
}

func cors() gin.HandlerFunc {
	return func(c *gin.Context) {
		method := c.Request.Method
		origin := c.Request.Header.Get("Origin") //请求头部
		if origin != "" {
			//接收客户端发送的origin （重要！）
			//Access-Control-Allow-Origin是必须的,他的值要么是请求Origin字段的值,要么是一个*, 表示接受任意域名的请求
			c.Writer.Header().Set("Access-Control-Allow-Origin", origin)
			//服务器支持的所有跨域请求的方法
			c.Header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE,UPDATE")
			//允许跨域设置可以返回其他子段，可以自定义字段
			//该字段可选。CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：Cache-Control、Content-Language、Content-Type、Expires、Last-Modified、Pragma。
			//如果想拿到其他字段，就必须在Access-Control-Expose-Headers里面指定。上面的例子指定，getResponseHeader('FooBar')可以返回FooBar字段的值。
			c.Header("Access-Control-Allow-Headers", "Authorization, Content-Length, X-CSRF-Token, Token, session")
			// 允许浏览器（客户端）可以解析的头部 （重要）
			c.Header("Access-Control-Expose-Headers", "Content-Length, Access-Control-Allow-Origin, Access-Control-Allow-Headers")
			//设置缓存时间
			//该字段可选，用来指定本次预检请求的有效期，单位为秒。有效期是20天（1728000秒），即允许缓存该条回应1728000秒（即20天），在此期间，不用发出另一条预检请求。
			c.Header("Access-Control-Max-Age", "172800")
			//允许客户端传递校验信息比如 cookie (重要)
			c.Header("Access-Control-Allow-Credentials", "true")
		}

		//允许类型校验
		if method == "OPTIONS" {
			c.JSON(http.StatusOK, "ok!")
		}

		defer func() {
			if err := recover(); err != nil {
				log.Printf("Panic info is: %v", err)
			}
		}()

		c.Next()
	}
}
