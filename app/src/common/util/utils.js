/**
 * @author 水印红枫
 * @date 2020/1/3 15:00
 * @Description:
 */
export default {
  love: function (newTime, oldTime) {
    oldTime = new Date(oldTime)
    newTime = new Date(newTime)
    let y = newTime.getFullYear() - oldTime.getFullYear()
    let M = newTime.getMonth() - oldTime.getMonth()
    let d = newTime.getDate() - oldTime.getDate()
    let h = newTime.getHours() - oldTime.getHours()
    let m = newTime.getMinutes() - oldTime.getMinutes()
    let s = newTime.getSeconds() - oldTime.getSeconds()
    if (M <= 0) {
      y = y - 1
      M = M === 0 ? M : M + 12
    }
    if (d <= 0) {
      M = M - 1
      let date = '1,3,5,7,8,10,11'.indexOf(newTime.getMonth()) > 0 ? 31 : 30
      d = d === 0 ? d : d + date
    }
    if (h <= 0) {
      d = d - 1
      h = h === 0 ? h : h + 24
    }
    if (m <= 0) {
      h = h - 1
      m = m === 0 ? m : m + 60
    }
    if (s <= 0) {
      m = m - 1
      s = s === 0 ? s : s + 60
    }
    return y + '年' + M + '月' + d + '日' + h + '时' + m + '分' + s + '秒'
  }
}
