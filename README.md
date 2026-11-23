# 小游戏合集（Web 版）

两个 HTML5 小游戏的网页版，通过 GitHub Pages 发布，点开即玩：

- **一键成仙 · 欧皇之路**（`xiuxian/`）：放置抽卡，三合一升阶、秘宝图鉴、渡劫飞升。
- **合成大西瓜**（`suika/`）：物理合成，丢水果、两两合并，一路合到大西瓜。

存档保存在浏览器 localStorage 中。

## 广告位与收款入口（改 `config.js` 一个文件）

站点根目录的 `config.js` 集中管理广告与收款配置，默认全部留空
（留空时对应位置自动隐藏，不报错、不留空白）。

### 广告位

| 位置 | 尺寸 | 配置项 |
| --- | --- | --- |
| 落地页 + 两个游戏页顶部横幅 | 桌面 728x90 / 移动 320x50（自适应） | `ads.slots.bannerTop` |
| 落地页 + 两个游戏页底部横幅 | 同上 | `ads.slots.bannerBottom` |
| 插屏：西瓜游戏结束时、修仙每点 30 次抽卡时触发 | 全屏 | `ads.slots.interstitial` + 在 `ads.js` 的 `Ads.interstitial()` 里对接联盟插屏 API |

接入步骤：在广告联盟注册并创建广告单元 → 把代码填进 `config.js` 对应项 →
把 `ads.enabled` 改为 `true` → 重新发布。

### 支持作者

- 赞赏码：把二维码图片放进仓库（如 `assets/reward.png`），路径填 `support.qrcodeImage`。
- Ko-fi：主页链接填 `support.kofiUrl`。
- 爱发电：主页链接填 `support.afdianUrl`。

留空的入口会自动隐藏。

## 目录

```
index.html   落地页
config.js    广告 / 收款配置
ads.js       广告位加载器 + 插屏入口 + 支持区填充
xiuxian/     一键成仙
suika/       合成大西瓜
```
