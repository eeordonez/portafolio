import { list_webs } from "./data_web.js";




list_webs.forEach((cada_webs)=>{

    let eldiv = document.querySelector(".parte3");

    
    
    let div_web = document.createElement("div");
    div_web.innerHTML = `
       
        <div class="git_base">

        <img src="${cada_webs.Img}" alt="">
        <h2>${cada_webs.nombre}</h2>
        <p>${cada_webs.descripcion}</p>

        <div class="links">
        <a href="${cada_webs.git_page}" class="github git">Boton de gitpage  </a>
        <a href="${cada_webs.link_repo}" class="github repo">boton repositorio   </a>
        </div>
    
        
        </div>

    `;

    eldiv.appendChild(div_web);

})
