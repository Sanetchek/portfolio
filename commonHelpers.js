import{a as u}from"./assets/vendor-bdb8a163.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y=document.getElementById("mode-switcher"),j=t=>{t.preventDefault(),document.body.classList.toggle("dark");const o=document.body.classList.contains("dark")?"dark":"light";localStorage.setItem("color-mode",o)},f=()=>{var t=document.querySelector(".loader-overlay");t&&t.classList.add("is-hidden")};y.addEventListener("change",j);document.addEventListener("DOMContentLoaded",f);const h=async t=>(await u.get(t)).data,p=document.querySelector(".js-my-projects-list"),w=document.querySelector(".js-my-projects-load-more"),L=document.querySelector(".js-my-projects-load-more-btn"),v=".js-my-projects-list-item:last-child",P="./my-projects.json",x=3;let l=0,a=g(),m=!1,n=[];const $=async()=>{if(n.length===0)try{n=await h(P)}catch(s){alert(s.message)}const t=E(n);if(!t||t.length===0){d();return}const o=b(t);p.insertAdjacentHTML("beforeend",o),setTimeout(function(){window.scrollBy({top:a.getBoundingClientRect().bottom,left:0,behavior:"smooth"}),a=g()},50),t.length<x&&(m=!0),m&&d()};L.addEventListener("click",$);function g(){return p.querySelector(v)}function E(t){let o=t.filter(({pageNum:s})=>s===l);return o.length===0?!1:(l+=1,o)}function b(t){return t.map(({name:o,number:s,stack:c,link:e})=>`
    <li class="my-projects-list-item js-my-projects-list-item">
      <img
        class="my-projects-img"
        srcset="
            ./img/my-projects/my-projects-img--mobile--${s}.jpg 320w,
            ./img/my-projects/my-projects-img--mobile--${s}@2x.jpg 640w,
            ./img/my-projects/my-projects-img--tablet--${s}.jpg 704w,
            ./img/my-projects/my-projects-img--tablet--${s}@2x.jpg 1408w,
            ./img/my-projects/my-projects-img--desktop--${s}.jpg 1008w,
            ./img/my-projects/my-projects-img--desktop--${s}@2x.jpg 2016w
          "
        sizes="(min-width: 1280px) 1008px, (min-width: 768px) 704px, (min-width: 360px) 320px, (max-width: 359px) calc(100vw - 40px)"
        src="./img/my-projects/my-projects-img--mobile--${s}.jpg"
        alt="${o}"
        width="320"
      />
      <div class="my-projects-stack">${c}</div>
      <div class="my-projects-name-link">
        <h3 class="my-projects-name">${o}</h3>
        <a class="my-projects-link" href="${e}" target="_blank">
          Visit
          <svg class="my-projects-link-icon icon-arrow-up-right" width="24" height="24">
            <use href="./img/sprite.svg#icon-arrow-up-right"></use>
          </svg>
        </a>
      </div>
    </li>`).join("")}function d(){w.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
