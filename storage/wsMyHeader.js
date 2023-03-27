<<<<<<< HEAD
export let wsMyHeader ={
    listAlbums(p1){
        let plantilla = "";
        p1.forEach((val, id) => {
        plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`;
    });
    return plantilla;
}
}


self.addEventListener("message", (e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));

=======
export let wsMyHeader ={
    listAlbums(p1){
        let plantilla = "";
        p1.forEach((val, id) => {
        plantilla += `<a class="p-2 link-secondary" href="${val.href}">${val.name}</a>`;
    });
    return plantilla;
}
}


self.addEventListener("message", (e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));

>>>>>>> f383c661d612fffd693b35fe6e55f4d227c714cf
})