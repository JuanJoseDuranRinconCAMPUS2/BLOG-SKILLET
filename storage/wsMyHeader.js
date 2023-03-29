export let wsMyHeader ={
    listTitle(p1){ 
        return `<a class="blog-header-logo text-dark" href="${p1.href}" >${p1.name}</a>`
    },
    listAlbums(p1){
        let plantilla = "";
        p1.forEach((val, id) => {
        plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`;
    });
    return plantilla;
    },
    showImage(p1){
        return 
    },
    listBanner(p1){
     
         return `<h1 class="display-4 fst-italic" >${p1.titleBanner}</h1>
        <p class="lead my-3">${p1.pBanner}</p>
        <p class="lead mb-0"><a href="https://dayofdestiny.skillet.com/" target = "_blank" class="text-white fw-bold">Continuar...</a></p>`
    
    },

    listDiscografia(p1){
        let plantilla1 = "";
        p1.forEach((val, id) => {
            plantilla1 += `
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">${val.duracion}</strong>
                        <h3 class="mb-0">${val.disco}</h3>
                    <div class="mb-1 text-muted">${val.fecha}</div>
                    <p class="card-text mb-auto">${val.canciones}</p>
                    <a href="#tablita" class="stretched-link">Discografia</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img src="${val.image}" class="img-fluid responsiveImgC" alt="...">
                    </div>
                </div>
            </div>
            `;
        });
        return plantilla1;
    },
    listTitleSection(p1){
        
        return`
        <h3 class="pb-4 mb-4 fst-italic border-bottom">
          ${p1.name}
        </h3>
        <article class="blog-post" id="Content">
          <h2 class="blog-post-title">${p1.history}</h2>

          <p>${p1.paragraph1}</p>
          <hr>
          <p>${p1.paragraph2}</p>
        </article>
        `
        
    },
    
    listPeriods(p1){
        let plantilla2 = "";
        p1.forEach((val, id) => {
            plantilla2 += `
            <h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta">${val.subtitle}</p>
            <p>${val.rockHistory}</p>
            <hr>
            `;
        });
        return plantilla2
        },
        listTableDisco(p1){
      
            return`
            <article class="blog-post" id="tablaData">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1W0YS64vF9qgMVLuN76aqg?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <h2 class="blog-post-title">${p1.section2}</h2>
                <p class="blog-post-meta">Un vistazo a las producciones de la banda</p>

                <p>${p1.paragraph3}</p>
                
                

                <p>Para conocer mas sobre estos lanzamientos y sus respectivas canciones los invitamos a la pagina oficial de skillet</p>
            </article>
            `
            },
        
        listTableData(p1){
            let plantilla = p1.map((val, id)=>{
                return `<table class="table" id="tablita">
                <thead>
                <tr>
                    ${val.theader.map((val, id)=>{return `<th>${val.name}</th>`}).join("")}
                </tr>
                </thead>
                <tbody>
                    <tr>
                    ${val.skillet.map((val2, id2)=>{return `<th>${val2.name}</th>`}).join("")}
                    </tr>
                    <tr>
                    ${val.HeyYou.map((val2, id2)=>{return `<th>${val2.name}</th>`}).join("")}
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                    ${val.tflooter.map((val3, id3)=>{return `<th>${val3.name}</th>`}).join("")}
                    </tr>
                </tfoot>
                </table>`
            })
            return plantilla.join("")
        },
     
        listTitlecuriosities(p1){
     
                return`
                <article class="blog-post">
                    <h2 class="blog-post-title">${p1.title}</h2>
                    <p class="blog-post-meta">${p1.subtitle}</p>
                    <p>${p1.rocklive}</p>

                <ul id="listFunFacts">
                <div class="p-4">
                </div>
                <p>${p1.paragraph}</p>
                <nav class="blog-pagination" aria-label="Pagination">
                <a class="btn btn-outline-primary" href="https://dayofdestiny.skillet.com/" target = "_blank">Pagina Oficial</a>
                <a class="btn btn-outline-secondary" target = "_blank" href="https://music.youtube.com/watch?v=A_caUYHTHQs&feature=share" tabindex="-1" aria-disabled="true">Nico Borie</a>
                </nav>
                </ul>
                </article>
                `

                },
            listFunFacts(p1){
                let plantilla4 = "";
                p1.funfacts.forEach((val, id) => {
                    plantilla4 += `
                    <li>${val.data}</li>
                    `;
                });
            },   

            showAside(nav){
                
                const data = nav.map((val, id) => {
                    return(
                        (val.link)
                            ? this.list(val)
                            : this.cards(val)
                    )
                });
                return data;
            },
            cards(p1){
                return`
                <div class="p-4 mb-3 bg-light rounded">
                <h4 class="fst-italic">${p1.title}</h4>
                <p class="mb-0">${p1.paragranph}</p>
                </div>`
            },
            list(p1){
                return`
                    <div class="p-4">
                    <h4 class="fst-italic">${p1.title}</h4>
                    <ol class="list-unstyled mb-0">
                      ${p1.link.map((val, id) => `<li><a href="${val.link}" target = "_blank">${val.name}</a></li>`).join("")}
                    </ol>
                  </div>`
        
            },
            listFooter(p1){
                
                return`
                <p>
                    <a href="#">Vuelve al inicio</a>
                </p>
                `
                 
                },
            listFooterContent(p1){
                let plantilla5 = "";
                p1.forEach((val, id) => {
                    plantilla5 += `
                    <p>${val.dedicatoria}</p>
                    `;
                });
                return plantilla5
                }, 
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
    
})

