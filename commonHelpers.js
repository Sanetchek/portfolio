import{A as x,a as L,i as M}from"./assets/vendor-53ac5476.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("mode-switcher"),t=document.getElementById("show-menu"),o=document.getElementById("close-menu"),i=document.querySelector(".menu-nav");if(s){const r=localStorage.getItem("color-mode");r&&(document.body.classList.add(r),s.checked=r==="dark");const n=p=>{p.preventDefault();const m=document.body.classList.contains("dark")?"light":"dark";document.body.classList.toggle("dark"),localStorage.setItem("color-mode",m),s.checked=m==="dark",console.log(s.checked)};s.addEventListener("change",n)}(()=>{var r=document.querySelector(".loader-overlay");r&&r.classList.add("is-hidden")})();const a=r=>{r.preventDefault(),document.querySelector(".header-menu").classList.add("is-open"),document.body.style.overflow="hidden"};t.addEventListener("click",a);const c=r=>{r.preventDefault(),document.querySelector(".header-menu").classList.remove("is-open"),document.body.style.overflow="inherit"};o.addEventListener("click",c);const d=r=>{r.preventDefault();const n=r.target.closest(".menu-list-link");if(n){const p=n.getAttribute("href"),m=document.querySelector(p);document.querySelector(".header-menu").classList.remove("is-open"),document.body.style.overflow="inherit",m&&window.scrollTo({top:m.offsetTop,behavior:"smooth"})}};i.addEventListener("click",d)});const q="/portfolio/assets/sprite-8f4e72b8.svg",I="/portfolio/assets/my-projects-img--mobile--4-31d24daa.jpg",N="/portfolio/assets/my-projects-img--mobile--4@2x-abe7e030.jpg",B="/portfolio/assets/my-projects-img--tablet--4-f8a741d2.jpg",P="/portfolio/assets/my-projects-img--tablet--4@2x-16fa0339.jpg",f="/portfolio/assets/my-projects-img--desktop--4@2x-9fc5d02b.jpg",J="/portfolio/assets/my-projects-img--mobile--5-8e1a0245.jpg",A="/portfolio/assets/my-projects-img--mobile--5@2x-41883134.jpg",C="/portfolio/assets/my-projects-img--tablet--5-e2a9e20f.jpg",$="/portfolio/assets/my-projects-img--tablet--5@2x-7f3f391a.jpg",g="/portfolio/assets/my-projects-img--desktop--5@2x-5e12eec8.jpg",O="/portfolio/assets/my-projects-img--mobile--6-2dbe8d4e.jpg",R="/portfolio/assets/my-projects-img--mobile--6@2x-4929e123.jpg",G="/portfolio/assets/my-projects-img--tablet--6-711b9e7f.jpg",T="/portfolio/assets/my-projects-img--tablet--6@2x-3046720b.jpg",b="/portfolio/assets/my-projects-img--desktop--6@2x-29495478.jpg",D="/portfolio/assets/my-projects-img--mobile--7-c03682c5.jpg",z="/portfolio/assets/my-projects-img--mobile--7@2x-b71ea98f.jpg",F="/portfolio/assets/my-projects-img--tablet--7-c2fc02a2.jpg",H="/portfolio/assets/my-projects-img--tablet--7@2x-b43215ac.jpg",j="/portfolio/assets/my-projects-img--desktop--7@2x-e039a12a.jpg",Z="/portfolio/assets/my-projects-img--mobile--8-cfef1cde.jpg",V="/portfolio/assets/my-projects-img--mobile--8@2x-c675f644.jpg",K="/portfolio/assets/my-projects-img--tablet--8-86185a94.jpg",U="/portfolio/assets/my-projects-img--tablet--8@2x-b45eb8bb.jpg",_="/portfolio/assets/my-projects-img--desktop--8@2x-5d2f4757.jpg",Q="/portfolio/assets/my-projects-img--mobile--9-717d9a04.jpg",W="/portfolio/assets/my-projects-img--mobile--9@2x-8afb4d8e.jpg",X="/portfolio/assets/my-projects-img--tablet--9-f38743d5.jpg",Y="/portfolio/assets/my-projects-img--tablet--9@2x-a99b4c64.jpg",y="/portfolio/assets/my-projects-img--desktop--9@2x-7997716e.jpg",ee="/portfolio/assets/my-projects-img--mobile--10-1f4f837b.jpg",te="/portfolio/assets/my-projects-img--mobile--10@2x-fbf841e1.jpg",oe="/portfolio/assets/my-projects-img--tablet--10-0240b31b.jpg",se="/portfolio/assets/my-projects-img--tablet--10@2x-fe60f37f.jpg",h="/portfolio/assets/my-projects-img--desktop--10@2x-77ff18b3.jpg",k=[{name:"Power pulse webservice",stack:"React, JavaScript, Node JS, Git",link:"https://sanetchek.github.io/portfolio/",image:{mobile:{default:I,retina:N},tablet:{default:B,retina:P},desktop:{default:f,retina:f}},pageNum:0},{name:"Mimino website",stack:"React, JavaScript, Node JS, Git",link:"https://sanetchek.github.io/portfolio/",image:{mobile:{default:J,retina:A},tablet:{default:C,retina:$},desktop:{default:g,retina:g}},pageNum:0},{name:"Vyshyvanka vibes Landing Page",stack:"React, JavaScript, Node JS, Git",link:"https://sanetchek.github.io/portfolio/",image:{mobile:{default:O,retina:R},tablet:{default:G,retina:T},desktop:{default:b,retina:b}},pageNum:0},{name:"Chego jewelry website",stack:"React, JavaScript, Node JS, Git",link:"https://sanetchek.github.io/portfolio/",image:{mobile:{default:D,retina:z},tablet:{default:F,retina:H},desktop:{default:j,retina:j}},pageNum:1},{name:"Energy flow webservice",stack:"React, JavaScript, Node JS, Git",link:"https://sanetchek.github.io/portfolio/",image:{mobile:{default:Z,retina:V},tablet:{default:K,retina:U},desktop:{default:_,retina:_}},pageNum:1},{name:"Fruitbox online store",stack:"React, JavaScript, Node JS, Git",link:"https://sanetchek.github.io/portfolio/",image:{mobile:{default:Q,retina:W},tablet:{default:X,retina:Y},desktop:{default:y,retina:y}},pageNum:1},{name:"Starlight studio landing page",stack:"React, JavaScript, Node JS, Git",link:"https://sanetchek.github.io/portfolio/",image:{mobile:{default:ee,retina:te},tablet:{default:oe,retina:se},desktop:{default:h,retina:h}},pageNum:2}],E=document.querySelector(".js-my-projects-list"),ae=document.querySelector(".js-my-projects-load-more"),re=document.querySelector(".js-my-projects-load-more-btn"),ie=".js-my-projects-list-item:last-child";let v=S(),u=0;const ce=3,ne=()=>{let s="";for(let t=0;t<ce;t++){const o=k[u];if(s+=le(o),u>=k.length-1){me();break}u++}E.insertAdjacentHTML("beforeend",s),window.scrollBy({top:v.getBoundingClientRect().bottom,left:0,behavior:"smooth"}),v=S()};re.addEventListener("click",ne);function S(){return E.querySelector(ie)}function le(s){const{name:t,image:o,stack:i,link:e}=s;return`<li class="my-projects-list-item js-my-projects-list-item">
      <img
        class="my-projects-img"
        srcset="
            ${o.mobile.default} 320w,
            ${o.mobile.retina} 640w,
            ${o.tablet.default} 704w,
            ${o.tablet.retina} 1408w,
            ${o.desktop.default} 1008w,
            ${o.desktop.retina} 2016w
          "
        sizes="(min-width: 1280px) 1008px, (min-width: 768px) 704px, (min-width: 360px) 320px, (max-width: 359px) calc(100vw - 40px)"
        src="${o.mobile.default}"
        alt="${t}"
        width="320"
      />
      <div class="my-projects-stack">${i}</div>
      <div class="my-projects-name-link">
        <h3 class="my-projects-name">${t}</h3>
        <a class="my-projects-link" href="${e}" target="_blank">
          Visit
          <svg class="my-projects-link-icon icon-arrow-up-right" width="24" height="24">
            <use href="${q}#icon-arrow-up-right"></use>
          </svg>
        </a>
      </div>
    </li>`}function me(){ae.classList.add("is-hidden")}document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".ac-trigger");s.forEach(t=>{t.addEventListener("click",()=>{const o=t.parentElement.parentElement,i=o.classList.contains("active");s.forEach(e=>e.querySelector("use").setAttribute("href","../img/sprite.svg#icon-drop-down")),document.querySelectorAll(".faq-list-item.ac").forEach(e=>e.classList.remove("active")),i||(o.classList.add("active"),t.querySelector("use").setAttribute("href","../img/sprite.svg#icon-drop-up"))})}),new x(".faq-list")});L.defaults.baseURL="https://portfolio-js.b.goit.study/api";const de=document.getElementById("contact_form"),pe=document.getElementById("customer_email"),l=document.getElementById("modal"),ue=l.querySelector(".modal-close-btn"),fe=s=>{const t=s.target,o=document.getElementById("error_message");/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(t.value)?(o.textContent="",t.classList.remove("input-error")):(o.textContent="Invalid email, try again.",t.classList.add("input-error"))},ge=s=>{s.preventDefault();const t=s.currentTarget,o=t.elements,i=o.customer_email.value.trim(),e=o.customer_message.value.trim(),a={email:i,comment:e};L.post("/requests",a).then(c=>{const{title:d,message:r}=c.data;l.querySelector(".modal-title").innerHTML=d,l.querySelector(".modal-message").innerHTML=r,be(),t.reset()}).catch(c=>{M.error({message:c.message})})};pe.addEventListener("blur",fe);de.addEventListener("submit",ge);ue.addEventListener("click",w);window.addEventListener("click",s=>{s.target==l&&w()});function be(){l.classList.add("is-open"),document.body.style.overflow="hidden"}function w(){l.classList.remove("is-open"),document.body.style.overflow=""}
//# sourceMappingURL=commonHelpers.js.map
