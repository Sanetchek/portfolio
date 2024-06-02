import{a as l,i as L}from"./assets/vendor-ae6d56ab.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("mode-switcher");if(t){const e=c=>{c.preventDefault(),document.body.classList.toggle("dark");const o=document.body.classList.contains("dark")?"dark":"light";localStorage.setItem("color-mode",o)};t.addEventListener("click",e)}(()=>{var e=document.querySelector(".loader-overlay");e&&e.classList.add("is-hidden")})()});const v=async t=>(await l.get(t)).data,g=document.querySelector(".js-my-projects-list"),w=document.querySelector(".js-my-projects-load-more"),E=document.querySelector(".js-my-projects-load-more-btn"),b=".js-my-projects-list-item:last-child",P="./my-projects.json",x=3;let m=0,d=y(),p=!1,a=[];const I=async()=>{if(a.length===0)try{a=await v(P)}catch(e){alert(e.message)}const t=M(a);if(!t||t.length===0){u();return}const s=S(t);g.insertAdjacentHTML("beforeend",s),setTimeout(function(){window.scrollBy({top:d.getBoundingClientRect().bottom,left:0,behavior:"smooth"}),d=y()},50),t.length<x&&(p=!0),p&&u()};E.addEventListener("click",I);function y(){return g.querySelector(b)}function M(t){let s=t.filter(({pageNum:e})=>e===m);return s.length===0?!1:(m+=1,s)}function S(t){return t.map(({name:s,number:e,stack:c,link:o})=>`
    <li class="my-projects-list-item js-my-projects-list-item">
      <img
        class="my-projects-img"
        srcset="
            ./img/my-projects/my-projects-img--mobile--${e}.jpg 320w,
            ./img/my-projects/my-projects-img--mobile--${e}@2x.jpg 640w,
            ./img/my-projects/my-projects-img--tablet--${e}.jpg 704w,
            ./img/my-projects/my-projects-img--tablet--${e}@2x.jpg 1408w,
            ./img/my-projects/my-projects-img--desktop--${e}.jpg 1008w,
            ./img/my-projects/my-projects-img--desktop--${e}@2x.jpg 2016w
          "
        sizes="(min-width: 1280px) 1008px, (min-width: 768px) 704px, (min-width: 360px) 320px, (max-width: 359px) calc(100vw - 40px)"
        src="./img/my-projects/my-projects-img--mobile--${e}.jpg"
        alt="${s}"
        width="320"
      />
      <div class="my-projects-stack">${c}</div>
      <div class="my-projects-name-link">
        <h3 class="my-projects-name">${s}</h3>
        <a class="my-projects-link" href="${o}" target="_blank">
          Visit
          <svg class="my-projects-link-icon icon-arrow-up-right" width="24" height="24">
            <use href="./img/sprite.svg#icon-arrow-up-right"></use>
          </svg>
        </a>
      </div>
    </li>`).join("")}function u(){w.classList.add("is-hidden")}l.defaults.baseURL="https://portfolio-js.b.goit.study/api";const $=document.getElementById("contact_form"),k=document.getElementById("customer_email"),i=document.getElementById("modal"),B=i.querySelector(".modal-close-btn"),q=t=>{const s=t.target,e=document.getElementById("error_message");/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s.value)?(e.textContent="",s.classList.remove("input-error")):(e.textContent="Invalid email, try again.",s.classList.add("input-error"))},C=t=>{t.preventDefault();const s=t.currentTarget,e=s.elements,c=e.customer_email.value.trim(),o=e.customer_message.value.trim(),r={email:c,comment:o};l.post("/requests",r).then(n=>{const{title:j,message:h}=n.data;i.querySelector(".modal-title").innerHTML=j,i.querySelector(".modal-message").innerHTML=h,O(),s.reset()}).catch(n=>{L.error({message:n.message})})};k.addEventListener("blur",q);$.addEventListener("submit",C);B.addEventListener("click",f);window.addEventListener("click",t=>{t.target==i&&f()});function O(){i.classList.add("is-open"),document.body.style.overflow="hidden"}function f(){i.classList.remove("is-open"),document.body.style.overflow=""}
//# sourceMappingURL=commonHelpers.js.map
