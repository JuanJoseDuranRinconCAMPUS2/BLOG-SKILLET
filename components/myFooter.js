import config from "../storage/config.js";

export default{
   

    Show(){
        config.dataMyHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("myFooter")));
        const ws = new Worker("storage/wsMyHeader.js", {type: "module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "listFooterContent", data: this.footer});
        ws.postMessage({module: "listFooter", data: this.footer})
        id = ["#footer", "#footer"]
        ws.addEventListener("message", (e)=>{
            
        let doc = new DOMParser().parseFromString(e.data, "text/html");

        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==0) ? ws.terminate(): count++;
        });
            
        },
}