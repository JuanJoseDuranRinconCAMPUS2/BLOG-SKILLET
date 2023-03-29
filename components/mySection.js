import config from "../storage/config.js";


export default{

    Show(){
        config.dataMyHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("mySection")));
        const ws = new Worker("storage/wsMyHeader.js", {type: "module"});

        let id = [];
        let count= 0;
        ws.postMessage({module: "listTitleSection", data: this.title});
        ws.postMessage({module: "listPeriods", data: this.Periods});
        ws.postMessage({module: "listTableDisco", data: this.title});
        ws.postMessage({module: "listDiscografiaTable", data: this.Discografia});
        ws.postMessage({module: "listTitlecuriosities", data: this.curiosities});
        ws.postMessage({module: "listFunFacts", data: this.curiosities});

        ws.addEventListener("message", (e)=>{
        id = ["#section", "#section", "#section", "#info", "#section", "#listFunFacts"]
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==0) ? ws.terminate(): count++;
        });
        
    },

           
    }
