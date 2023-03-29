import config from "../storage/config.js";

export default{
    
    show(){
        config.dataMyHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("myAside")));
        const ws = new Worker("storage/wsMyHeader.js", {type: "module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "showAside", data: this.nav});
        ws.postMessage({module: "cards", data: this.nav});
        ws.postMessage({module: "list", data: this.nav});
        id = ["#nav"]
        ws.addEventListener("message", (e)=>{
        
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==0) ? ws.terminate(): count++;
        });
    }
};
