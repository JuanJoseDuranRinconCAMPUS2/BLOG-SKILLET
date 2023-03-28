export default{
    banner: {
            titleBanner : "Skillet",
            pBanner : "Skillet es una banda de rock cristiano y metal cristiano originaria de Tennessee, fundada en 1996 y conformada por John y Korey Cooper, Seth Morrison y Jen Ledger. El grupo ha publicado once álbumes de estudio, el más reciente, Dominion, en el 2022. Dos de sus discos, Collide y Comatose recibieron nominación al Grammy. El sonido de la banda se ha descrito como rock alternativo, hard rock, y rock sinfónico, y ha sido caracterizada por elementos electrónicos"
    },
    image : "./img/skilletHeader.jpg",
   
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`;
    },

    Show(){
        const ws = new Worker("storage/wsMyBanner.js", {type: "module"});

        let id = [];
        let count= 0;
        ws.postMessage({module: "showImage", data: this.image})
        ws.postMessage({module: "listBanner", data: this.banner});
        id = [".imgStyle", "#banner"]
        ws.addEventListener("message", (e)=>{
        
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==0) ? ws.terminate(): count++;
        });
        
    },
}