export default{
    footer:[
        {
            dedicatoria: `Pagina hecha en honor a "Skillet" -Gracias por ser un gran apoyo personal por medio de vuestras canciones, de parte de todos los panheads gracias skillet por mantener vivo el rock`,
        },
        {
            dedicatoria: "@theFredCreations. Derechos reservados. Informacion brindadas por @wikipedia y @skillet. todo el credito del contenido audiovisual y visual a su respectivo creador @Skillet",
        },
        {
            dedicatoria: "24-marzo-2023",
        },
        {
            dedicatoria: "¡El rock sigue en nuestras venas!",
        },
        {
            dedicatoria: `Our future's here and now
                Here comes the countdown
                -Rise`
        }
    ],
    listFooter(){
        document.querySelector("#footer").insertAdjacentHTML("beforeend", 
        `
        <p>
            <a href="#">Vuelve al inicio</a>
        </p>
        `
         )
        },
    listFooterContent(){
        let plantilla = "";
        this.footer.forEach((val, id) => {
            plantilla += `
            <p>${val.dedicatoria}</p>
            `;
        });
        document.querySelector("#footer").insertAdjacentHTML("afterbegin", plantilla);
        },  
}