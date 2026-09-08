// ==UserScript==
// @name         DiepNoAds
// @version      2026-09-08
// @description  Removing ads from 2d ball game
// @author       VeilaVnh
// @match        https://diep.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=diep.io
// ==/UserScript==

(()=>{
  'use strict';
  const a = document.getElementById("ad-holders"); if (a) a.remove();

  const c = document.getElementById("canvas");
  const resize = (_) => { if (c) c.setAttribute("height", document.body.scrollHeight); };
  resize(); addEventListener("resize", resize);

  document.addEventListener("DOMContentLoaded", () => {
    const o = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.type === "attributes" && c.attributes.height != document.body.scrollHeight) resize();
      });
    });
    o.observe(c, { attributes: true });
  });
})();
