package main

import (
	_ "github.com/go-sql-driver/mysql"
	"github.com/jordan-wright/email"
	"log"
	"net/smtp"
	"testing"
)

func Test_mail(t *testing.T) {
	text := "酸菜大肠"
	em := email.NewEmail()
	em.From = "834971685@qq.com"
	em.To = []string{"834971685@qq.com"}
	em.Subject = "👶🏻宝宝饿了,今天想吃【" + text + "】"
	em.Text = []byte("今天想吃【" + text + "】")

	//设置服务器相关的配置
	err := em.Send("smtp.qq.com:587", smtp.PlainAuth("", "834971685@qq.com", "", "smtp.qq.com"))
	if err != nil {
		log.Fatal(err)
	}
	log.Println("send successfully ... ")
}
