import config from "../storage/config.js";

export default{
   
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`;
    },

    Show(){
        config.dataMyHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("myBanner")));
        const ws = new Worker("storage/wsMyHeader.js", {type: "module"});
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