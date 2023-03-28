export let wsMyBanner ={
    showImage(p1){
        return 
    },
    listBanner(p1){
     
         return `<h1 class="display-4 fst-italic" >${p1.titleBanner}</h1>
        <p class="lead my-3">${p1.pBanner}</p>
        <p class="lead mb-0"><a href="https://dayofdestiny.skillet.com/" target = "_blank" class="text-white fw-bold">Continuar...</a></p>`
    
    },
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data));
    
})