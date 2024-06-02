import{a as p,i as w}from"./assets/vendor-ae6d56ab.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("mode-switcher"),t=document.getElementById("show-menu"),o=document.getElementById("close-menu"),c=document.querySelector(".menu-nav");if(e){const n=l=>{l.preventDefault(),document.body.classList.toggle("dark");const d=document.body.classList.contains("dark")?"dark":"light";localStorage.setItem("color-mode",d)};e.addEventListener("click",n)}(()=>{var n=document.querySelector(".loader-overlay");n&&n.classList.add("is-hidden")})();const r=n=>{n.preventDefault(),document.querySelector(".header-menu").classList.add("is-open"),document.body.style.overflow="hidden"};t.addEventListener("click",r);const i=n=>{n.preventDefault(),document.querySelector(".header-menu").classList.remove("is-open"),document.body.style.overflow="inherit"};o.addEventListener("click",i);const m=n=>{n.preventDefault();const l=n.target.closest(".menu-list-link");if(l){const d=l.getAttribute("href"),g=document.querySelector(d);document.querySelector(".header-menu").classList.remove("is-open"),document.body.style.overflow="inherit",g&&window.scrollTo({top:g.offsetTop,behavior:"smooth"})}};c.addEventListener("click",m)});const b=async e=>(await p.get(e)).data,v=document.querySelector(".js-my-projects-list"),M=document.querySelector(".js-my-projects-load-more"),S=document.querySelector(".js-my-projects-load-more-btn"),k=".js-my-projects-list-item:last-child",P="./my-projects.json",I=3;let y=0,f=L(),h=!1,u=[];const q=async()=>{if(u.length===0)try{u=await b(P)}catch(o){alert(o.message)}const e=x(u);if(!e||e.length===0){j();return}const t=B(e);v.insertAdjacentHTML("beforeend",t),setTimeout(function(){window.scrollBy({top:f.getBoundingClientRect().bottom,left:0,behavior:"smooth"}),f=L()},50),e.length<I&&(h=!0),h&&j()};S.addEventListener("click",q);function L(){return v.querySelector(k)}function x(e){let t=e.filter(({pageNum:o})=>o===y);return t.length===0?!1:(y+=1,t)}function B(e){return e.map(({name:t,number:o,stack:c,link:s})=>`
    <li class="my-projects-list-item js-my-projects-list-item">
      <img
        class="my-projects-img"
        srcset="
            ./img/my-projects/my-projects-img--mobile--${o}.jpg 320w,
            ./img/my-projects/my-projects-img--mobile--${o}@2x.jpg 640w,
            ./img/my-projects/my-projects-img--tablet--${o}.jpg 704w,
            ./img/my-projects/my-projects-img--tablet--${o}@2x.jpg 1408w,
            ./img/my-projects/my-projects-img--desktop--${o}.jpg 1008w,
            ./img/my-projects/my-projects-img--desktop--${o}@2x.jpg 2016w
          "
        sizes="(min-width: 1280px) 1008px, (min-width: 768px) 704px, (min-width: 360px) 320px, (max-width: 359px) calc(100vw - 40px)"
        src="./img/my-projects/my-projects-img--mobile--${o}.jpg"
        alt="${t}"
        width="320"
      />
      <div class="my-projects-stack">${c}</div>
      <div class="my-projects-name-link">
        <h3 class="my-projects-name">${t}</h3>
        <a class="my-projects-link" href="${s}" target="_blank">
          Visit
          <svg class="my-projects-link-icon icon-arrow-up-right" width="24" height="24">
            <use href="./img/sprite.svg#icon-arrow-up-right"></use>
          </svg>
        </a>
      </div>
    </li>`).join("")}function j(){M.classList.add("is-hidden")}p.defaults.baseURL="https://portfolio-js.b.goit.study/api";const $=document.getElementById("contact_form"),C=document.getElementById("customer_email"),a=document.getElementById("modal"),O=a.querySelector(".modal-close-btn"),T=e=>{const t=e.target,o=document.getElementById("error_message");/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t.value)?(o.textContent="",t.classList.remove("input-error")):(o.textContent="Invalid email, try again.",t.classList.add("input-error"))},A=e=>{e.preventDefault();const t=e.currentTarget,o=t.elements,c=o.customer_email.value.trim(),s=o.customer_message.value.trim(),r={email:c,comment:s};p.post("/requests",r).then(i=>{const{title:m,message:n}=i.data;a.querySelector(".modal-title").innerHTML=m,a.querySelector(".modal-message").innerHTML=n,_(),t.reset()}).catch(i=>{w.error({message:i.message})})};C.addEventListener("blur",T);$.addEventListener("submit",A);O.addEventListener("click",E);window.addEventListener("click",e=>{e.target==a&&E()});function _(){a.classList.add("is-open"),document.body.style.overflow="hidden"}function E(){a.classList.remove("is-open"),document.body.style.overflow=""}
//# sourceMappingURL=commonHelpers.js.map
