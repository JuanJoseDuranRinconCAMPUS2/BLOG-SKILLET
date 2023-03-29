import config from "../storage/config.js";


export default{
    
    Show(){
        config.dataMyHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("myPost")))
        const ws = new Worker("storage/wsMyHeader.js", {type: "module"});
        ws.postMessage({module: "listDiscografia", data: this.Discografia});

        ws.addEventListener("message", (e)=>{
          let doc = new DOMParser().parseFromString(e.data, "text/html");
          document.querySelector("#cardRock").append(...doc.body.children);
          ws.terminate();
        });

    }
}