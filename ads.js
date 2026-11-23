/* =====================================================================
   广告位加载器（Web 版）—— 配合 config.js 使用。
   - 页面里的横幅位写成 <div class="ad-slot" data-ad-slot="bannerTop"></div>
     （bannerTop / bannerBottom），本脚本按 config 注入广告代码。
   - 某个广告位没有配置代码时，容器直接 display:none，不留空白、不报错。
   - 注入的代码里如果带 <script>，会逐个重建以保证执行。
   - 插屏入口：Ads.interstitial(name)，未配置时为空操作（返回 false）。
   - 落地页“支持作者”区：未配置的赞赏码图片 / 外链按钮自动隐藏。
   ===================================================================== */
(function () {
  var cfg = (window.SITE_CONFIG && window.SITE_CONFIG.ads) || {};
  var slots = cfg.slots || {};

  var st = document.createElement('style');
  st.textContent =
    '.ad-slot{width:100%;max-width:728px;min-height:90px;margin:8px auto;' +
    'display:flex;align-items:center;justify-content:center;overflow:hidden}' +
    '@media (max-width:760px){.ad-slot{max-width:320px;min-height:50px}}';
  (document.head || document.documentElement).appendChild(st);

  function injectCode(el, code) {
    el.innerHTML = code;
    var list = el.querySelectorAll('script');
    for (var i = 0; i < list.length; i++) {
      var old = list[i], s = document.createElement('script');
      for (var j = 0; j < old.attributes.length; j++) {
        s.setAttribute(old.attributes[j].name, old.attributes[j].value);
      }
      s.textContent = old.textContent;
      old.parentNode.replaceChild(s, old);
    }
  }

  function mountBanners() {
    var els = document.querySelectorAll('[data-ad-slot]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var code = cfg.enabled ? slots[el.getAttribute('data-ad-slot')] : '';
      if (!code) { el.style.display = 'none'; continue; }
      try { injectCode(el, code); } catch (e) { el.style.display = 'none'; }
    }
  }

  function mountSupport() {
    var sup = (window.SITE_CONFIG && window.SITE_CONFIG.support) || {};
    var qr = document.querySelector('[data-support="qrcode"]');
    if (qr) {
      if (sup.qrcodeImage) { qr.src = sup.qrcodeImage; }
      else {
        var wrap = qr.closest ? qr.closest('[data-support-wrap="qrcode"]') : null;
        if (wrap) wrap.style.display = 'none';
      }
    }
    var links = { kofi: sup.kofiUrl, afdian: sup.afdianUrl };
    for (var k in links) {
      var a = document.querySelector('[data-support="link-' + k + '"]');
      if (!a) continue;
      if (links[k]) { a.href = links[k]; } else { a.style.display = 'none'; }
    }
  }

  function mount() { mountBanners(); mountSupport(); }

  window.Ads = {
    /* 插屏广告入口。name 是触发点标识（'suika-gameover' / 'xiuxian-draw-30'）。
       未配置时直接返回 false，页面无任何变化。 */
    interstitial: function (name) {
      var code = cfg.enabled ? slots.interstitial : '';
      if (!code) return false;
      /* TODO: 在这里对接广告联盟的插屏 API，或把 config 里的插屏代码
         注入一个全屏 overlay 容器并展示。对接完成前保持空操作。 */
      return false;
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else { mount(); }
})();
