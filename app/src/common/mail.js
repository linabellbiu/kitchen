var nodeMailer = require('nodemailer')
// var smtpTransport = require('nodemailer-smtp-transport')
var config = require('../../config')

const sentNodeMailer = nodeMailer.createTransport(config.email)

/**
 * @param {String} recipient 收件人
 * @param {String} subject 发送的主题
 * @param {String} html 发送的html内容
 */
var sendMail = function (mailOptions) {
  sentNodeMailer.sendMail({
    from: config.email.auth.user,
    to: mailOptions.to,
    subject: mailOptions.subject,
    html: mailOptions.html

  }, function (error, response) {
    if (error) {
      console.log(error)
    }
    console.log('发送成功')
  })
}

module.exports = sendMail
