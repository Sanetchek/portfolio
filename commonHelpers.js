import{a as D,A as G,S as z,b as h,i as q}from"./assets/vendor-82a02ed5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();D.init();document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("mode-switcher"),e=document.getElementById("show-menu"),o=document.getElementById("close-menu"),a=document.querySelector(".menu-nav"),s=document.querySelector(".menu-list"),r=document.getElementById("hero-link");if(i){const t=localStorage.getItem("color-mode");t&&(document.body.classList.add(t),i.checked=t==="dark");const n=l=>{l.preventDefault();const d=document.body.classList.contains("dark")?"light":"dark";document.body.classList.toggle("dark"),localStorage.setItem("color-mode",d),i.checked=d==="dark"};i.addEventListener("change",n)}(()=>{var t=document.querySelector(".loader-overlay");t&&t.classList.add("is-hidden")})();const f=t=>{t.preventDefault(),document.querySelector(".header-menu").classList.add("is-open"),document.body.style.overflow="hidden"};e.addEventListener("click",f);const g=t=>{t.preventDefault(),document.querySelector(".header-menu").classList.remove("is-open"),document.body.style.overflow="inherit"};o.addEventListener("click",g);const H=t=>{t.preventDefault(),t.target.classList.contains("menu-list-link")&&(document.querySelector(".header-menu").classList.remove("is-open"),document.body.style.overflow="inherit",j(t.target))};a.addEventListener("click",H),b("#about","#about-link"),b("#my-projects","#project-link"),b("#contacts","#contacts-link");function b(t,n){window.addEventListener("scroll",function(){let l=document.querySelector(t),d=document.querySelector(n);if(l&&d){let _=l.offsetTop,J=l.offsetHeight-100,k=window.scrollY+200;k>=_&&k<=_+J?(document.querySelectorAll(".menu-list-item").forEach(function(T){T.classList.remove("active")}),d.classList.add("active")):d.classList.remove("active")}})}function j(t){const n=t.getAttribute("href").substring(1),l=document.getElementById(n);if(l){const d=l.offsetTop-120;window.scrollTo({top:d,behavior:"smooth"})}}const A=t=>{t.preventDefault(),t.target.classList.contains("menu-list-link")&&j(t.target)},R=t=>{t.preventDefault(),j(t.currentTarget)};s.addEventListener("click",A),r.addEventListener("click",R)});const V="/portfolio/assets/sprite-ed0f59e7.svg",F="/portfolio/assets/my-projects-img--mobile--4-747207f1.jpg",Z="/portfolio/assets/my-projects-img--mobile--4@2x-85387293.jpg",K="/portfolio/assets/my-projects-img--tablet--4-b56fadfa.jpg",U="/portfolio/assets/my-projects-img--tablet--4@2x-e9f695b3.jpg",v="/portfolio/assets/my-projects-img--desktop--4@2x-b44a06a1.jpg",W="/portfolio/assets/my-projects-img--mobile--5-753fee7c.jpg",Y="/portfolio/assets/my-projects-img--mobile--5@2x-f8f95e0f.jpg",Q="/portfolio/assets/my-projects-img--tablet--5-6af657a9.jpg",X="/portfolio/assets/my-projects-img--tablet--5@2x-e28b6fad.jpg",w="/portfolio/assets/my-projects-img--desktop--5@2x-5752368d.jpg",ee="/portfolio/assets/my-projects-img--mobile--6-84f299c2.jpg",te="/portfolio/assets/my-projects-img--mobile--6@2x-ae0e0ae9.jpg",oe="/portfolio/assets/my-projects-img--tablet--6-764a4688.jpg",se="/portfolio/assets/my-projects-img--tablet--6@2x-cb4fae23.jpg",L="/portfolio/assets/my-projects-img--desktop--6@2x-feacabfe.jpg",ie="/portfolio/assets/my-projects-img--mobile--7-7e3839ae.jpg",re="/portfolio/assets/my-projects-img--mobile--7@2x-54d2874b.jpg",ae="/portfolio/assets/my-projects-img--tablet--7-bb6786ef.jpg",ne="/portfolio/assets/my-projects-img--tablet--7@2x-f6f54370.jpg",E="/portfolio/assets/my-projects-img--desktop--7@2x-548339fa.jpg",le="/portfolio/assets/my-projects-img--mobile--8-65ebe3b1.jpg",ce="/portfolio/assets/my-projects-img--mobile--8@2x-f04b4acb.jpg",de="/portfolio/assets/my-projects-img--tablet--8-1af7696e.jpg",pe="/portfolio/assets/my-projects-img--tablet--8@2x-3de257e4.jpg",S="/portfolio/assets/my-projects-img--desktop--8@2x-f2ade063.jpg",me="/portfolio/assets/my-projects-img--mobile--9-88bfe12d.jpg",ue="/portfolio/assets/my-projects-img--mobile--9@2x-7722736a.jpg",fe="/portfolio/assets/my-projects-img--tablet--9-7f202568.jpg",ge="/portfolio/assets/my-projects-img--tablet--9@2x-df0120f9.jpg",x="/portfolio/assets/my-projects-img--desktop--9@2x-cc0a4c8f.jpg",be="/portfolio/assets/my-projects-img--mobile--10-f7d446f2.jpg",je="/portfolio/assets/my-projects-img--mobile--10@2x-3652df25.jpg",ye="/portfolio/assets/my-projects-img--tablet--10-0c77b21e.jpg",he="/portfolio/assets/my-projects-img--tablet--10@2x-1197da34.jpg",M="/portfolio/assets/my-projects-img--desktop--10@2x-de2fe692.jpg",I=[{name:"Power pulse webservice",stack:"React, JavaScript, Node JS, Git",link:"https://sanetchek.github.io/portfolio/",image:{mobile:{default:F,retina:Z},tablet:{default:K,retina:U},desktop:{default:v,retina:v}},pageNum:0},{name:"Mimino website",stack:"React, JavaScript, Node JS, Git",link:"https://sanetchek.github.io/portfolio/",image:{mobile:{default:W,retina:Y},tablet:{default:Q,retina:X},desktop:{default:w,retina:w}},pageNum:0},{name:"Vyshyvanka vibes Landing Page",stack:"React, JavaScript, Node JS, Git",link:"https://sanetchek.github.io/portfolio/",image:{mobile:{default:ee,retina:te},tablet:{default:oe,retina:se},desktop:{default:L,retina:L}},pageNum:0},{name:"Chego jewelry website",stack:"React, JavaScript, Node JS, Git",link:"https://sanetchek.github.io/portfolio/",image:{mobile:{default:ie,retina:re},tablet:{default:ae,retina:ne},desktop:{default:E,retina:E}},pageNum:1},{name:"Energy flow webservice",stack:"React, JavaScript, Node JS, Git",link:"https://sanetchek.github.io/portfolio/",image:{mobile:{default:le,retina:ce},tablet:{default:de,retina:pe},desktop:{default:S,retina:S}},pageNum:1},{name:"Fruitbox online store",stack:"React, JavaScript, Node JS, Git",link:"https://sanetchek.github.io/portfolio/",image:{mobile:{default:me,retina:ue},tablet:{default:fe,retina:ge},desktop:{default:x,retina:x}},pageNum:1},{name:"Starlight studio landing page",stack:"React, JavaScript, Node JS, Git",link:"https://sanetchek.github.io/portfolio/",image:{mobile:{default:be,retina:je},tablet:{default:ye,retina:he},desktop:{default:M,retina:M}},pageNum:2}],C=document.querySelector(".js-my-projects-list"),_e=document.querySelector(".js-my-projects-load-more"),ke=document.querySelector(".js-my-projects-load-more-btn"),ve=".js-my-projects-list-item:last-child";let B=N(),y=0;const we=3,Le=()=>{let i="";for(let e=0;e<we;e++){const o=I[y];if(i+=Ee(o),y>=I.length-1){Se();break}y++}C.insertAdjacentHTML("beforeend",i),window.scrollBy({top:B.getBoundingClientRect().bottom,left:0,behavior:"smooth"}),B=N()};ke.addEventListener("click",Le);function N(){return C.querySelector(ve)}function Ee(i){const{name:e,image:o,stack:a,link:s}=i;return`<li class="my-projects-list-item js-my-projects-list-item">
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
        alt="${e}"
        width="320"
      />
      <div class="my-projects-stack">${a}</div>
      <div class="my-projects-name-link">
        <h3 class="my-projects-name">${e}</h3>
        <a class="my-projects-link" href="${s}" target="_blank">
          Visit
          <svg class="my-projects-link-icon icon-arrow-up-right" width="24" height="24">
            <use href="${V}#icon-arrow-up-right"></use>
          </svg>
        </a>
      </div>
    </li>`}function Se(){_e.classList.add("is-hidden")}document.addEventListener("DOMContentLoaded",()=>{new G(".faq-list")});const u=document.querySelector(".swiper-button-next"),m=document.querySelector(".swiper-button-prev"),P=document.querySelector(".swiper-wrapper"),xe=function(i){const e=[];return i.forEach(o=>{e.push(`
      <li class="swiper-slide">
        <p class="swiper-text">${o.review}"</p>
        <div class="swiper-author-wrapper">
          <img class="swiper-image" src="${o.avatar_url}" alt="author image">
          <p class="swiper-author">${o.author}</p>
        </div>
      </li>`)}),e.join("")},Me=async function(){await h.get("https://portfolio-js.b.goit.study/api/reviews").then(e=>e.data).then(e=>{P.innerHTML=xe(e)}).catch(e=>{q.show({title:"REVIEWS ERROR: ",titleColor:"white",titleSize:"15px",titleLineHeight:"150%",message:`${e.message}`,messageColor:"white",messageSize:"14px",messageLineHeight:"150%",backgroundColor:"#14c57c",zindex:0,close:!1,closeOnClick:!0,position:"bottomLeft",timeout:5e3,pauseOnHover:!0,progressBar:!0,transitionIn:"bounceInLeft",transitionOut:"fadeOut",transitionInMobile:"bounceInLeft",transitionOutMobile:"fadeOutDown"}),P.innerHTML='<p class="error-massege">Not found</p>',u.classList.add("is-hidden"),m.classList.add("is-hidden")})},O=new z(".swiper",{pagination:{el:".pagination",clickable:!0,renderBullet:Me()},breakpoints:{320:{slidesPerView:1,spaceBetween:15,slidesPerGroup:1,autoHeight:!0},768:{slidesPerView:1,spaceBetween:15,slidesPerGroup:1,autoHeight:!0},1280:{slidesPerView:2,spaceBetween:32,allowTouchMove:!1,slidesPerGroup:2,autoHeight:!1}},direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},speed:500,allowSlideNext:!0,on:{slideChange:function(){this.isEnd?u.setAttribute("disabled",""):u.removeAttribute("disabled",""),this.isBeginning?m.setAttribute("disabled",""):m.removeAttribute("disabled","")}}});m.setAttribute("disabled","");u.addEventListener("click",()=>{O.slideNext()});m.addEventListener("click",()=>{O.slidePrev()});h.defaults.baseURL="https://portfolio-js.b.goit.study/api";const Ie=document.getElementById("contact_form"),Be=document.getElementById("customer_email"),p=document.getElementById("modal"),Pe=p.querySelector(".modal-close-btn"),qe=i=>{const e=i.target,o=document.getElementById("error_message");/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.value)?(o.textContent="",e.classList.remove("input-error")):(o.textContent="Invalid email, try again.",e.classList.add("input-error"))},Ce=i=>{i.preventDefault();const e=i.currentTarget,o=e.elements,a=o.customer_email.value.trim(),s=o.customer_message.value.trim(),r={email:a,comment:s};h.post("/requests",r).then(c=>{const{title:f,message:g}=c.data;p.querySelector(".modal-title").innerHTML=f,p.querySelector(".modal-message").innerHTML=g,Ne(),e.reset()}).catch(c=>{q.error({message:c.message})})};Be.addEventListener("blur",qe);Ie.addEventListener("submit",Ce);Pe.addEventListener("click",$);window.addEventListener("click",i=>{i.target==p&&$()});function Ne(){p.classList.add("is-open"),document.body.style.overflow="hidden"}function $(){p.classList.remove("is-open"),document.body.style.overflow=""}
//# sourceMappingURL=commonHelpers.js.map
