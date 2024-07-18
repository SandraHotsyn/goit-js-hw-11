import{S as c,i as l}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();async function d(t,n=12){const s=`https://pixabay.com/api/?${new URLSearchParams({key:"44998752-61a12b7504481d46e62cdda30",q:t,image_type:"photo",orientation:"horizontal",safesearch:!1,per_page:n})}`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(!e.length)return e.hits}).catch(e=>console.log(e))}function u(){const t=document.getElementById("gallery");t.innerHTML=""}let a;function g(t){document.getElementById("gallery").insertAdjacentHTML("beforeend",t.map(r=>`
        <div class="gallery-item">
            <a href="${r.largeImageURL}">
                <img src="${r.webformatURL}" alt="${r.tags}" />
            </a>
            <div class="info">
                <p><strong>Likes:</strong><br>${r.likes}</p>
                <p><strong>Views:</strong><br>${r.views}</p>
                <p><strong>Comments:</strong><br>${r.comments}</p>
                <p><strong>Downloads:</strong><br>${r.downloads}</p>
            </div>
        </div>`).join("")),a?a.refresh():a=new c(".gallery a")}function f(){const t=document.getElementById("loader");t.style.display="inline-block"}function m(){const t=document.getElementById("loader");t.style.display="none"}function y(){l.warning({title:"Not found",message:"Sorry, there are no images matching search query. Please try again!",position:"topRight"})}function p(t){l.error({title:"Error",message:t.message,position:"topRight"})}document.getElementById("searchButton").addEventListener("click",async()=>{const t=document.getElementById("searchInput").value.trim();if(t==="")return;u(),f();const n=16;try{const r=await d(t,n);r.length===0?y():g(r)}catch(r){p(r)}finally{m()}});
//# sourceMappingURL=commonHelpers.js.map
