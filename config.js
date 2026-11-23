/* =====================================================================
   站点配置（Web 版）—— 广告位与收款入口都改这一个文件，改完重新发布即可。
   所有值默认留空：留空 = 对应位置自动隐藏、不报错、不留空白。
   不要在这里填任何虚假代码；只填你在广告联盟 / 收款平台真实申请到的内容。
   ===================================================================== */
window.SITE_CONFIG = {
  ads: {
    /* 总开关。拿到真实广告代码后改成 true，并填写下面三个广告位。 */
    enabled: false,
    slots: {
      /* TODO: 顶部横幅广告代码（桌面 728x90，移动端自适应 320x50）。
         在广告联盟（如 Google AdSense、Adsterra 等）创建横幅广告单元后，
         把它给的整段代码粘贴到这里。 */
      bannerTop: '',
      /* TODO: 底部横幅广告代码（尺寸同上）。 */
      bannerBottom: '',
      /* TODO: 插屏广告代码 / 调用标识。
         触发时机：西瓜游戏结束时、修仙每点 30 次抽卡按钮时，
         入口是 ads.js 的 Ads.interstitial(name)，在那里对接联盟的插屏 API。 */
      interstitial: ''
    }
  },
  support: {
    /* TODO: 赞赏码：把二维码图片放进本仓库（如 assets/reward.png），
       然后把相对路径填到这里，如 'assets/reward.png'。 */
    qrcodeImage: '',
    /* TODO: Ko-fi 主页链接，如 'https://ko-fi.com/你的用户名'。 */
    kofiUrl: '',
    /* TODO: 爱发电主页链接，如 'https://afdian.com/a/你的用户名'。 */
    afdianUrl: ''
  }
};
