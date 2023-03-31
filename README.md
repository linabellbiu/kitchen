# kitchen

 一款Vue+Golang简单的点菜程序.
 记录日常的菜谱,不用纠结每天吃什么,可以上传食物,下单发送邮件提醒他今天想吃什么

## 开始
使用前请先安装 docker

### 初始化并运行
>注意: 初始化会清空数据库
```shell
./run init
```

### 启动或者重新编译镜像运行
```shell
./run up
```

### 点菜提醒功能
#### 配置docker-compose.yaml
在docker-compose.yaml文件中配置:`mail_from`,`mail_to`,`mail_token`
``` 
server:
    build:
      context: ./service
      dockerfile: Dockerfile
    container_name: kitchen-server
    restart: always
    volumes:
      - ./_store/more_static:/root/more_static
    environment:
      # 邮件发送人
      - mail_from=xxx@qq.com
      # 邮件收件人
      - mail_to=xxx@qq.com
      # 邮箱客户端授权码
      - mail_token=xxxxx
    depends_on:
      - mysql
      - nginx
    ports:
      - "8080:8080"
```

## 数据存储
>mysql 数据库会保存在当前目录下的`./_store/mysql-data/`,上传的图片 会保存在当前目录下的`./_store/more_static/`.  
可以通过修改`docker-compose.yaml`的文件挂载来改变数据的存储路径


## 配置
### docker-compose 配置文件
```yaml
version: "3"
services:
  mysql:
    container_name: kitchen-mysql
    image: mysql:latest
    restart: always
    ports:
      - "3306:3306"
    environment:
      MYSQL_ROOT_PASSWORD: 'k_kitchen_123456'
      MYSQL_DATABASE: 'kitchen'
    volumes:
      - ./_store/mysql-data:/var/lib/mysql
  nginx:
    container_name: kitchen-nginx
    restart: always
    image: nginx
    ports:
      - "80:80"
    environment:
      # 域名或者ip
      - NGINX_HOST=localhost
      # nginx监听请求端口
      - NGINX_PORT=80
      # api转发端口
      - SERVICE_API_PORT=8080
      # api路由
      - SERVICE_API_ROUTE=/api
      # 静态资源
      - NGINX_STATIC=/more_static
    volumes:
      # 静态文件目录
      - ./_store/more_static:/usr/share/nginx/more_static
      # 前端访问目录
      - ./app/dist:/usr/share/nginx/html
      # 用来配置nginx.conf的模版
      - ./conf:/etc/nginx/templates
  server:
    build:
      context: ./service
      dockerfile: Dockerfile
    container_name: kitchen-server
    restart: always
    volumes:
      - ./_store/more_static:/root/more_static
    environment:
      # 邮件发送人
      - mail_from=
      # 邮件收件人
      - mail_to=
      # 邮箱客户端授权码
      - mail_token=
    depends_on:
      - mysql
      - nginx
    ports:
      - "8080:8080"
```
