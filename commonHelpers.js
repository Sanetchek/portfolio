import{a as u}from"./assets/vendor-bdb8a163.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("mode-switcher");if(o){const t=c=>{c.preventDefault(),document.body.classList.toggle("dark");const e=document.body.classList.contains("dark")?"dark":"light";localStorage.setItem("color-mode",e)};o.addEventListener("click",t)}(()=>{var t=document.querySelector(".loader-overlay");t&&t.classList.add("is-hidden")})()});const y=async o=>(await u.get(o)).data,p=document.querySelector(".js-my-projects-list"),j=document.querySelector(".js-my-projects-load-more"),f=document.querySelector(".js-my-projects-load-more-btn"),h=".js-my-projects-list-item:last-child",w="./my-projects.json",L=3;let l=0,a=g(),m=!1,n=[];const v=async()=>{if(n.length===0)try{n=await y(w)}catch(t){alert(t.message)}const o=P(n);if(!o||o.length===0){d();return}const s=x(o);p.insertAdjacentHTML("beforeend",s),setTimeout(function(){window.scrollBy({top:a.getBoundingClientRect().bottom,left:0,behavior:"smooth"}),a=g()},50),o.length<L&&(m=!0),m&&d()};f.addEventListener("click",v);function g(){return p.querySelector(h)}function P(o){let s=o.filter(({pageNum:t})=>t===l);return s.length===0?!1:(l+=1,s)}function x(o){return o.map(({name:s,number:t,stack:c,link:e})=>`
    <li class="my-projects-list-item js-my-projects-list-item">
      <img
        class="my-projects-img"
        srcset="
            ./img/my-projects/my-projects-img--mobile--${t}.jpg 320w,
            ./img/my-projects/my-projects-img--mobile--${t}@2x.jpg 640w,
            ./img/my-projects/my-projects-img--tablet--${t}.jpg 704w,
            ./img/my-projects/my-projects-img--tablet--${t}@2x.jpg 1408w,
            ./img/my-projects/my-projects-img--desktop--${t}.jpg 1008w,
            ./img/my-projects/my-projects-img--desktop--${t}@2x.jpg 2016w
          "
        sizes="(min-width: 1280px) 1008px, (min-width: 768px) 704px, (min-width: 360px) 320px, (max-width: 359px) calc(100vw - 40px)"
        src="./img/my-projects/my-projects-img--mobile--${t}.jpg"
        alt="${s}"
        width="320"
      />
      <div class="my-projects-stack">${c}</div>
      <div class="my-projects-name-link">
        <h3 class="my-projects-name">${s}</h3>
        <a class="my-projects-link" href="${e}" target="_blank">
          Visit
          <svg class="my-projects-link-icon icon-arrow-up-right" width="24" height="24">
            <use href="./img/sprite.svg#icon-arrow-up-right"></use>
          </svg>
        </a>
      </div>
    </li>`).join("")}function d(){j.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
