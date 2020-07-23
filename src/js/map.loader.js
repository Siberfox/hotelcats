!(function() {
  function e() {
    const e = { skin: f.skin, pkg: f.pkg, version: l };
    /MSIE\x20(\d+\.\d+);/.test(navigator.userAgent) && parseInt(RegExp.$1, 10) < 9 && (e.ie8 = !0);
    const t = [];
    for (const n in e) {
      const o = e[n];
      o && t.push(`${n}=${o}`);
    }
    return t.length ? `?${t.join('&')}` : '';
  }
  function t() {
    s = !0;
    const e = document.createElement('script');
    e.setAttribute('type', 'text/javascript'),
      e.setAttribute('src', `${m}/js/${v}`),
      (e.onerror = function(e) {
        d(e);
      }),
      document.getElementsByTagName('head')[0].appendChild(e);
  }
  function n() {
    return new Promise(function(e, t) {
      function n() {
        document.addEventListener
          ? (document.removeEventListener('DOMContentLoaded', n, !1),
            window.removeEventListener('load', n, !1))
          : (document.detachEvent('onreadystatechange', n), window.detachEvent('onload', n)),
          i || ((i = !0), e());
      }
      function o() {
        if (!i) {
          try {
            document.documentElement.doScroll('left');
          } catch (e) {
            return void setTimeout(o, 50);
          }
          n();
        }
      }
      var i = !1;
      if (document.readyState !== 'loading') return n();
      if (document.addEventListener)
        document.addEventListener('DOMContentLoaded', n, !1),
          window.addEventListener('load', n, !1);
      else if (document.attachEvent) {
        document.attachEvent('onreadystatechange', n), window.attachEvent('onload', n);
        let r = !1;
        try {
          r = window.frameElement == null;
        } catch (a) {}
        document.documentElement.doScroll && r && o();
      }
    });
  }
  function o() {
    const e = `${m}/css/${v}`;
    const t = document.createElement('style');
    return (
      (t.type = 'text/css'),
      new Promise(function(n, o) {
        DG.ajax(e, {
          type: 'get',
          dataType: 'html',
          success(e) {
            const o = document.getElementsByTagName('head')[0];
            const i = 'http://maps.api.2gis.ru/2.0';
            m !== i && (e = e.replace(new RegExp(i, 'g'), m)),
              t.styleSheet
                ? (o.appendChild(t), (t.styleSheet.cssText = e))
                : (t.appendChild(document.createTextNode(e)), o.appendChild(t)),
              n();
          },
          error() {
            o();
          }
        });
      })
    );
  }
  function i() {
    const e = `${DG.config.protocol + DG.config.webApiServer}/${
      DG.config.webApiVersion
    }/region/list`;
    return new Promise(function(t) {
      DG.ajax(e, {
        type: DG.ajax.corsSupport ? 'get' : 'jsonp',
        data: {
          format: DG.ajax.corsSupport ? 'json' : 'jsonp',
          key: DG.config.webApiKey,
          fields: DG.config.regionListFields
        },
        timeout: DG.config.loadProjectListTimeout,
        success(e) {
          const n = e.result;
          n && n.items && n.items.length && (DG.projectsList = n.items), t();
        },
        error(e) {
          t();
        }
      });
    });
  }
  function r() {
    DG.extend(DG.config, {
      protocol: 'https:',
      baseUrl: '//maps.api.2gis.ru/2.0',
      webApiKey: 'rubnkm7490',
      geoclickerCatalogApiKey: 'ruxlih0718'
    }),
      DG.customConfig && DG.extend(DG.config, DG.customConfig);
  }
  function a() {
    return Promise.all([o(), i(), n()]);
  }
  function c() {
    DG.ready = !0;
  }
  function d() {
    for (let e = 0, t = u.length; e < t; e++) typeof u[e] === 'function' && u[e]();
  }
  var s = !1;
  var u = [];
  var l = 'v3.5.15';
  var m = 'https://maps.api.2gis.ru/2.0';
  var f = { pkg: 'basic' };
  const p = f.lazy === 'true';
  var v = e();
  (window.DG = window.DG || {}),
    (window.DG.ready = !1),
    (window.__dgApi__ = {
      callbacks: [
        [r, void 0],
        [a, void 0],
        [c, void 0]
      ],
      version: l
    });
  var g = (window.DG.then = function(e, n) {
    return DG.then !== g
      ? DG.then(e, n)
      : (window.__dgApi__.callbacks.push([e, n]), p && !s && t(), n && u.push(n), this);
  });
  p || t();
})();
