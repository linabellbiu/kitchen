/**
 * @作者： 丁亚辉
 * @日期： 2019/11/25 19:40
 */
const nodeMailer = require('nodemailer')

// 设置邮箱配置
const transporter = nodeMailer.createTranspoter({
  host: 'smtp.qq.com', // 邮箱服务的主机，如smtp.qq.com
  port: '465', // 对应的端口号
  secureConnection: true, // 使用了 SSL
  // 开启安全连接
  secure: true,
  // secureConnection:false,
  // 用户信息
  auth: {
    user: '2294211995',
    pass: 'dingyahui7'
  }
})
export default {
  sentMail: function (msg) {
    transporter.sendMail(msg, (error, info = {}) => {
      if (error) {
        return console.log(error)
      }
      console.log('Message sent')
    })
  }
}
