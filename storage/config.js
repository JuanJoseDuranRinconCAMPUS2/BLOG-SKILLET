export default{
    dataMyHeader(){
        localStorage.setItem("myHeader", JSON.stringify({
        title: {
            name : "Skillet",
            href : "https://es.wikipedia.org/wiki/Skillet_(%C3%A1lbum)"
        },
        ALBUMS : [
            {
                name : "Skillet",
                href : "https://es.wikipedia.org/wiki/Skillet_(%C3%A1lbum)"
            },
            {
                name : "Hey You, I Love Your Soul",
                href : "https://es.wikipedia.org/wiki/Hey_You,_I_Love_Your_Soul"
            },
            {
                name : "Invincible",
                href : "https://es.wikipedia.org/wiki/Invincible_(%C3%A1lbum_de_Skillet)"
            },
            {
                name : "Alien Youth",
                href : "https://es.wikipedia.org/wiki/Alien_Youth"
            },
            {
                name : "Collide",
                href : "https://es.wikipedia.org/wiki/Collide_(%C3%A1lbum_de_Skillet)"
            },
            {
                name : "Comatose",
                href : "https://es.wikipedia.org/wiki/Comatose_(%C3%A1lbum_de_Skillet)"
            },
            {
                name : "Awake",
                href : "https://es.wikipedia.org/wiki/Awake_(%C3%A1lbum_de_Skillet)"
            },
            {
                name : "Rise",
                href : "https://es.wikipedia.org/wiki/Rise_(%C3%A1lbum_de_Skillet)"
            },
            {
                name : "Unleashed",
                href : "https://es.wikipedia.org/wiki/Unleashed_(%C3%A1lbum_de_Skillet)"
            },
            {
                name : "Victorious",
                href : "https://es.wikipedia.org/wiki/Victorious_(%C3%A1lbum_de_Skillet)"
            },
            {
                name : "Dominion",
                href : "https://es.wikipedia.org/w/index.php?title=Dominion_(%C3%A1lbum_de_Skillet)&action=edit&redlink=1#"
            }
        ],
        }));

        localStorage.setItem("myBanner", JSON.stringify({
            banner: {
                titleBanner : "Skillet",
                pBanner : "Skillet es una banda de rock cristiano y metal cristiano originaria de Tennessee, fundada en 1996 y conformada por John y Korey Cooper, Seth Morrison y Jen Ledger. El grupo ha publicado once álbumes de estudio, el más reciente, Dominion, en el 2022. Dos de sus discos, Collide y Comatose recibieron nominación al Grammy. El sonido de la banda se ha descrito como rock alternativo, hard rock, y rock sinfónico, y ha sido caracterizada por elementos electrónicos"
             },
            image : "./img/skilletHeader.jpg",
       
        }));

        localStorage.setItem("myPost", JSON.stringify({
            Discografia  : [
                {
                    duracion : "38:37",
                    disco : "Skillet",
                    fecha : "29 de octubre de 1996",
                    canciones : 
                    `«ICan»
                    «Gasoline»
                    «Saturn»
                    «MyBeautifulRobe»
                    «PromiseBlender»
                    «Paint»
                    «SafeWit You»
                    «YouThought»
                    «Boundaries»
                    «Splinter» `,
                    href : "https://g.co/kgs/WA7x2o",
                    image : "./img/card1.jpg"
                },
                {
                    duracion : "47:15",
                    disco : "Hey You, I Love Your Soul",
                    fecha : "	21 de abril de 1998",
                    canciones : 
                    `«HeyYou, ILoveYourSoul»	
                    «Deeper»	
                    «Lockedin a Cage»	
                    «YourLove»	
                    «MoreFaithful»	
                    «Pour»	
                    «SuspendedInYou»	
                    «Take»	
                    «ComingDown»	
                    «Whirlwind»	
                    «DiveOverIn»	
                    «Scarecrow»		
                    `,
                    href : "https://g.co/kgs/KgbWsN",
                    image : "./img/card2.jpg"
                },
                {
                    duracion : "52:38",
                    disco : "Invincible",
                    fecha : " 1 de febrero de 2000",
                    canciones : 
                    `
                    «BestKeptSecret»
                    «YouTakeMyRightsAway»
                    «Invincible»
                    «Rest»
                    «You'rePowerful»
                    «ITrustYou»
                    «EachOther»
                    «TheFireBreathes»
                    «SayItLoud»
                    «TheOne»
                    «You'reInMyBrain»	
                    `,
                    href : "https://g.co/kgs/QZK2pf",
                    image : "./img/card3.jpg"
                },
                {
                    duracion : "53:14",
                    disco : "Alien Youth",
                    fecha : "28 de agosto de 2001",
                    canciones : 
                    `
                    «AlienYouth»	
                    «Vapor»	
                    «EarthInvasion»	
                    «YouAreMyHope»	
                    «EatingMeAway»	
                    «KillMe, HealMe»		
                    «OneRealThing»	
                    «Stronger»	
                    «Rippin' MeOff»	
                    «WillYouBeThere»	
                    «ComeMyWay»	
                    `,
                    href : "https://g.co/kgs/zNwnoi",
                    image : "./img/card4.jpg"
                },
                {
                    duracion : "44:08",
                    disco : "Collide",
                    fecha : "18 de noviembre de 2003",
                    canciones : 
                    `
                    «Forsaken»	
                    «Savior»	
                    «Collide»	
                    «A Little More»	
                    «My Obsession»	
                    «Fingernails»	
                    «Imperfection»	
                    «Under My Skin»	
                    «Energy»	
                    «Cycle Down»	
                    `,
                    href : "https://g.co/kgs/P7qic3",
                    image : "./img/card5.jpg"
                },
                {
                    duracion : "39:19",
                    disco : "Comatose",
                    fecha : "3 de octubre de 2006",
                    canciones : 
                    `
                    «Rebirthing»	
                    «TheLastNight»	
                    «YourstoHold»	
                    «BetterThanDrugs»	
                    «Comatose»	
                    «ThoseNights»	
                    «FallingInside the Black»	
                    «SayGoodbye»	
                    «Whispers in the Dark»	
                    `,
                    href : "https://g.co/kgs/PQUCyi",
                    image : "./img/card6.jpg"
                },
                {
                    duracion : "39:35",
                    disco : "Awake",
                    fecha : "25 de agosto de 2009",
                    canciones : 
                    `
                    «Hero»	
                    «Monster»	
                    «Don'tWakeMe»	
                    «Awake and Alive»	
                    «One Day Too Late»	
                    «Should've When You Could've»	
                    «Believe»	
                    «Forgiven»	
                    «Sometimes»	
                    «Never Surrender»	
                    «Lucy»	
                    `,
                    href : "https://g.co/kgs/hZ9Mux",
                    image : "./img/card7.jpg"
                },
                {
                    duracion : "46:02",
                    disco : "Rise",
                    fecha : "25 de junio de 2013",
                    canciones : 
                    `
                    «Rise»	
                    «Sick of It»	
                    «Good to be Alive»	
                    «Not Gonna Die»		
                    «American Noise»	
                    «Madness In Me»	
                    «Salvation»	
                    «Fire and Fury»	
                    «My Religion»	
                    «Hard to Find»	
                    «What I Believe»    
                    `,
                    href : "https://g.co/kgs/7DfUKr",
                    image : "./img/card8.jpg"
                },
                {
                    duracion : "42:55",
                    disco : "Unleashed",
                    fecha : "5 de agosto de 2016",
                    canciones : 
                    `
                    «Feel Invincible»	
                    «Back From the Dead»	
                    «Stars»	
                    «I Want to Live»	
                    «Undefeated»	
                    «Famous»	
                    «Lions»	
                    «Out of Hell»	
                    «Burn It Down»		
                    «The Resistance»	
                    `,
                    href : "https://g.co/kgs/kGJZ7t",
                    image : "./img/card9.jpg"
                },
                {
                    duracion : "45:00",
                    disco : "Victorious",
                    fecha : "2 de agosto de 2019",
                    canciones : 
                    `
                    «Legendary»	
                    «You Ain't Ready»	
                    «Victorious»	
                    «This Is the Kingdom»	
                    «Save Me»	
                    «Rise Up»	
                    «Terrify the Dark»	
                    «Never Going Back»	
                    «Reach»	
                    «Anchor»	
                    «Finish Line»	
                    «Back to Life»	
                    `,
                    href : "",
                    image : "./img/card10.png"
                },
                {
                    duracion : "45:35",
                    disco : "Dominion",
                    fecha : "January 14, 2022",
                    canciones : 
                    `
                    «Destiny»     
                    «Valley of Death»     
                    «Dominion»   
                    «Ignite»    
                    «White Horse»   
                    «Forever or the End»        
                    «Refuge»    
                    «Shout Your Freedom»    
                    «Destroyer»    
                    «Surviving the Game»        
                    `,
                    href : "",
                    image : "./img/card11.jpg"
                },
            ],
        }));
        
        localStorage.setItem("mySection", JSON.stringify({
            title: {
                name : "acerca de skillet",
                history : "Historia De Esta Gran Banda",
                section2 : "Discografia",
                paragraph3 : "Skillet ha tenido algunos cambios en su formación a lo largo de los años, pero ha continuado produciendo música de alta calidad y ha ganado el reconocimiento de muchos fans gracias a su estilo de rock potente y sus letras inspiradoras de fe y superación personal, con esto en mente miremos los distintos lanzamientos que ha tenido la banda hasta la fecha.",
                paragraph1 : "Skillet es una banda estadounidense de rock cristiano formada en 1996 en Memphis, Tennessee. La banda se compone de John Cooper como vocalista principal y bajista, Korey Cooper como guitarrista, tecladista y corista, Jen Ledger como baterista y corista, y Seth Morrison como guitarrista principal.",
                paragraph2 : "La banda se ha destacado por su mezcla de rock alternativo, metal y elementos electrónicos, así como por las letras de sus canciones que abordan temas como la fe, la lucha interna y la superación personal. Skillet también es conocido por sus emocionantes actuaciones en vivo y ha participado en numerosas giras nacionales e internacionales.",
            },
            Periods : [
                {
                    title : "1990s",
                    subtitle: "Los inicios del verdadero Rock Cristiano",
                    rockHistory : `Skillet se formó en Memphis, Tennessee en 1996 cuando John Cooper, y Ken Steorts decidieron formar una banda; poco después, Trey McClurkin se unió a la banda como baterista. Llevaban un mes juntos cuando ForeFront Records mostró interés en ellos para lanzar su disco homónimo.
                                    Durante 1997, Skillet compaginó su gira de presentación con la preparación del siguiente álbum, titulado Hey You, I Love Your Soul, lanzado en abril de 1998. Pronto se uniría a la formación Korey Cooper, la esposa de John, para tocar los teclados.
                                    Poco antes de que la banda comenzara la grabación de su tercer álbum, Steorts dejó la banda y fue sustituido por Kevin Haaland. Después del lanzamiento de Invincible, Trey McClurkin dejó la banda y fue reemplazado por la baterista Lori Peters.`
                },
                {
                    title : "2000s",
                    subtitle: "Nuevos Albums",
                    rockHistory : `Con poco tiempo entre giras, Skillet grabó su quinto álbum, Alien Youth, y fue lanzado el 28 de agosto del 2001. Antes de su lanzamiento, Haaland dejó la banda y Ben Kasica se hizo cargo de la guitarra.
                    En 2003, Collide fue lanzado por Ardent Records. A partir de este año Korey asume la guitarra rítmica. Collide llamó la atención de Lava Records, una división de Atlantic Records, compañía que luego compraría sus derechos y lo re-lanzó con una canción adicional, "Open Wounds". En el 2005 el álbum recibió una nominación al Grammy.
                    El álbum Comatose fue lanzado el 3 de octubre de 2006 debutando en el puesto número 55 en el Billboard 200 y número 4 en la lista de música cristiana. En enero de 2008, Lori Peters se retiró de la banda y se dedicó a entrenar a su reemplazo, Jen Ledger. En octubre la banda lanzó un CD/DVD llamado Comatose Comes Alive.
                    Skillet entró al estudio para grabar con el productor nominado al Grammy Howard Benson. El álbum, titulado Awake, fue lanzado el 25 de agosto de 2009. Se ubicó en el puesto #2 en el Billboard Top 200, vendiendo más de 100.000 unidades en su primera semana. Skillet obtuvo tres Premios Billboard y fue nominado a seis para la 41ª entrega de Dove Awards. Comatose fue certificado Oro por RIAA el 3 de noviembre.`
                },
                {
                    title : "2010s",
                    subtitle: "Cambios en la Banda",
                    rockHistory : `El 14 de febrero del 2011 Skillet anunció que Ben Kasica deja la banda, y, a partir del 16 de abril, Seth Morrison lo sustituye. John Cooper dijo a RadioU que la banda se dirigiría al estudio en octubre del 2012 para grabar con Howard Benson. El 12 de diciembre, Awake fue certificado disco de platino por RIAA. Cooper anunció que el nuevo álbum es titulado Rise, el cual, lanzado el 25 de junio del 2013, debutó en el puesto #4 del Billboard 200, vendiendo 90.000 copias en su primera semana. Skillet tocó "Rise" el 11 de julio en Conan. La banda ganó un Dove Award por "Sick of It." En el 2014 recibieron dos nominaciones en los Premios Billboard y ganaron dos en los Dove Awards.
                    El 12 de julio del 2016 la RIAA anunció que Rise ha sido honrado con la certificación de oro. El 5 de agosto la banda lanzó su noveno álbum, titulado Unleashed, el cual en su primera semana vendió 80.000 copias en los Estados Unidos, ocupando el puesto #3 del Billboard Top 200.
                    La banda obtuvo tres nominaciones en los Premios Billboard y tres en los Dove Awards del 2017. El 17 de noviembre el grupo lanzó Unleashed Beyond, la edición de lujo del álbum. Jen Ledger inició su proyecto como solista, lanzando un EP titulado LEDGER el 12 de abril de 2018. Skillet recibió dos nominaciones en los Dove Awards 2018, de las cuales ganó una. En septiembre, John Cooper anunció su nueva banda, Fight the Fury, la cual lanzó un EP titulado Still Breathing el 26 de octubre. El 4 de diciembre Unleashed fue certificado Oro.
                    El 7 de mayo de 2019, Skillet lanzó "Legendary" como el primer sencillo de su décimo álbum, Victorious. El 14 de junio, la banda lanzó dos canciones: "Save Me" y "Anchor". El 27 de julio lanzaron "You Ain't Ready". El álbum fue lanzado vía Atlantic Records el 2 de agosto. El 23 de septiembre, WWE reveló que "Legendary" será el tema musical para las siguientes temporadas de Raw.`
                },
                {
                    title : "2020s",
                    subtitle: "Vista en la Actualidad",
                    rockHistory : `En diciembre del 2020, John Cooper lanzó su primer libro, Awake & Alive to Truth: Finding Truth in the Chaos of a Relativistic World.
                    El 15 de septiembre del 2021, Skillet lanzó "Surviving the Game", el primer sencillo de su undécimo álbum de estudio, Dominion, el cual fue lanzado el 14 de enero de 2022`
                },
                ],
            tableDiscografia:[{
               theader:[
                    {name: "Disco"},
                    {name: "Canciones"},
                    {name: "Sello Discografico"},
                    {name: "Fecha de Publicacion"},
                ],
                skillet:[
                    {name:"Skillet"},
                    {name:
                        `«I Can»
                        «Gasoline»
                        «Saturn»
                        «My Beautiful Robe»
                        «Promise Blender»
                        «Paint»
                        «Safe With You»
                        «You Thought»
                        «Boundaries»
                        «Splinter»`},
                        {name:"Ardent / ForeFront"},
                        {name:"29-Oct-1996"},
                ],
                HeyYou:[
                    {name:"Hey You, I Love Your Soul"},
                    {name:
                        `
                        «Hey You, I Love Your Soul»	
                        «Deeper»	
                        «Locked in a Cage»	
                        «Your Love (Keeps Me Alive)»	
                        «More Faithful»	
                        «Pour»	
                        «Suspended In You»	
                        «Take»	
                        «Coming Down»	
                        «Whirlwind»	
                        «Dive Over In»	
                        «Scarecrow»	`},
                    {name:"Ardent / ForeFront"},
                    {name:"21-Abr-1998"},
                ],
                invincible:[
                    {
                        name:"Invincible",
                        href:"https://www.youtube.com/watch?v=szFEuLteARI&list=OLAK5uy_lbKfBbG0npkX3lwusQsVU6kYK-RMxqqBU" ,
                        name:
                        `
                        «Best Kept Secret»
                        «You Take My Rights Away»
                        «Invincible»
                        «Rest»
                        «Come On To The Future»
                        «You're Powerful»
                        «I Trust You»
                        «Each Other»
                        «The Fire Breathes»
                        «Say It Loud»«The One»
                        «You're In My Brain»
                        `,
                        name:"Ardent / ForeFront",
                        name:"01-Feb-2000",
                    },
                ],
                AlienYouth:[
                    {
                        name:"Alien Youth",
                        href:"https://www.youtube.com/watch?v=Rx1KtNdZHfU&list=OLAK5uy_kM8P7XZgPv3nOADxTo98e0gSD5jKvEqE8" ,
                        name:
                        `
                        «Alien Youth»	
                        «Vapor»	
                        «Earth Invasion»	
                        «You Are My Hope»	
                        «Eating Me Away»	
                        «Kill Me, Heal Me»	
                        «The Thirst Is Taking Over»	
                        «One Real Thing»	
                        «Stronger»	
                        «Rippin' Me Off»	
                        «Will You Be There (Falling Down)»	
                        «Come My Way»`,
                        name:"Ardent",
                        name:"28-Ago-2001",
                    },
                ],
                collide:[
                    {
                        name:"Collide",
                        name:
                        `
                        «Forsaken»	
                        «Savior»	
                        «Collide»	
                        «A Little More»	
                        «My Obsession»	
                        «Fingernails»	
                        «Imperfection»	
                        «Under My Skin»	
                        «Energy»	
                        «Cycle Down»`,
                        name:"Ardent / Lava / INO",
                        name:"18-Nov-2003",
                    },
                ],

                comatoes:[
                    {
                        name:"Comatose",
                        href:"https://www.youtube.com/watch?v=rZjpsT7VgNU&list=OLAK5uy_nXNOxDt1fmIk_b-meDt8B1G_xAw3d8BGk" ,
                        name:
                        `
                        «Rebirthing»	
                        «The Last Night»	
                        «Yours to Hold»	
                        «Better Than Drugs»	
                        «Comatose»	
                        «The Older I Get»	
                        «Those Nights»	
                        «Falling Inside the Black»	
                        «Say Goodbye»	
                        «Whispers in the Dark»	
                        «Looking for Angels»`,
                        name:"Ardent / Lava / Atlantic",
                        name:"03-Oct-2006",
                    },
                ],
                awake:[
                    {
                        name:"Awake",
                        href:"https://www.youtube.com/watch?v=uGcsIdGOuZY&list=OLAK5uy_nmyjdNq6hkdyEZRtjNJUDepfGpLaY38l4" ,
                        name:
                        `
                        «Hero»	
                        «Monster»	
                        «Don't Wake Me»	
                        «Awake and Alive»	
                        «One Day Too Late»	
                        «It's Not Me, It's You»	
                        «Should've When You Could've»	
                        «Believe»	
                        «Forgiven»	
                        «Sometimes»	
                        «Never Surrender»	
                        «Lucy»`,
                        name:"Ardent / Lava / Atlantic",
                        name:"25-Ago-2009	",
                    }
                ],
                rise:[
                    {
                        name:"Rise",
                        href:"https://www.youtube.com/watch?v=b3jQ0tFqG_0&list=OLAK5uy_n0Pa2IODGqaRNqY108ojVgy40Q2MYFeio" ,
                        name:
                        `
                        «Rise»	
                        «Sick of It»	
                        «Good to be Alive»	
                        «Not Gonna Die»	
                        «Circus for a Psycho»	
                        «American Noise»	
                        «Madness In Me»	
                        «Salvation»	
                        «Fire and Fury»	
                        «My Religion»	
                        «Hard to Find»	
                        «What I Believe»`,
                        selloDiscografico:"Atlantic",
                        añoPublicacion:"25-Jun-2013	",
                    }
                ],
                unleashed:[
                    {
                        name:"Unleashed",
                        href:"https://www.youtube.com/watch?v=Qzw6A2WC5Qo&list=OLAK5uy_kK9sxTcWdInY6i898PhFlc3xiyVjChyuc" ,
                        name:
                        `
                        «"Feel Invincible"»	
                        «"Back From the Dead"»	
                        «"Stars"»	
                        «"I Want to Live"»	
                        «"Undefeated"»	
                        «"Famous"»	
                        «"Lions"»	
                        «"Out of Hell"»	
                        «"Burn It Down"»	
                        «"Watching for Comets»	
                        «"Saviors of the World"»	
                        «"The Resistance"»`,
                        name:"Atlantic / Word",
                        name:"05-Ago-2016	",
                    }
                ],
                victorious:[
                    {
                        name:"Victorious",
                        href:"https://www.youtube.com/watch?v=DApP8dCZOdU&list=OLAK5uy_mxQzN8xvkN_Lz2WOq_WHLdesrhn9Rb-tw" ,
                        name:
                        `
                        «Legendary»	
                        «You Ain't Ready»	
                        «Victorious»	
                        «This Is the Kingdom»	
                        «Save Me»	
                        «Rise Up»	
                        «Terrify the Dark»	
                        «Never Going Back»	
                        «Reach»	
                        «Anchor»	
                        «Finish Line»	
                        «Back to Life»`,
                        name:"Atlantic",
                        name:"02-Ago-2019	",
                    }
                ],
                dominion: [
                    {
                        name:"Dominion",
                        href:"https://www.youtube.com/watch?v=7IpP6j7je5A&list=OLAK5uy_kGXzpr9CZ187ZtOebzomtMf9M52qrsYVU" ,
                        name:
                        `
                        «Destiny»     
                        «Valley of Death»     
                        «Dominion»   
                        «Ignite»    
                        «White Horse»   
                        «Forever or the End»    
                        «Standing in the Storm»     
                        «Refuge»    
                        «Shout Your Freedom»    
                        «Destroyer»    
                        «Surviving the Game»    
                        «Beyond Incredible»`,
                        name:"Atlantic",
                        name:"14-Ene-2022	",
                    }
                ],
                tflooter:[
                    {name: "Disco"},
                    {name: "Canciones"},
                    {name: "Sello Discografico"},
                    {name: "Fecha de Publicacion"},
                ],
            }],
           
            curiosities : {
                    title:"Curiosidades de Skillet",
                    subtitle:"Conozcamos mas sobre esta gran banda",
                    rocklive:"A continuacion veremos algunos datos curiosos acerca de esta banda, los mas importantes y significativos de la misma:",
                    funfacts: [
                        {
                            data:`El nombre "Skillet" se le ocurrió al vocalista John Cooper cuando estaba cocinando en una sartén (skillet en inglés) y pensó que sería un buen nombre para la banda.`,
                        },
                        {
                            data:`La guitarrista y tecladista Korey Cooper es la esposa de John Cooper. La pareja se conoció cuando Korey se unió a la banda en 1999 y se casaron en 2006.`,
                        },
                        {
                            data:`Además de ser músicos talentosos, los miembros de Skillet también son conocidos por su dedicación a la actividad física y el fitness. John y Korey Cooper son conocidos por su amor por el ejercicio y la vida saludable, y han compartido consejos y rutinas de ejercicio en las redes sociales.`,
                        },
                        {
                            data:`Skillet ha tenido varios cambios en su formación a lo largo de los años, con John Cooper como el único miembro que ha estado en la banda desde su formación en 1996.`,
                        },
                        {
                            data:`La canción "Monster" de Skillet es una de las más populares de la banda y ha sido utilizada en varios programas de televisión, películas y videojuegos, incluyendo "Transformers: Revenge of the Fallen" y "Saints Row: The Third".`,
                        },
                        {
                            data:`Skillet ha realizado varias colaboraciones con otros artistas cristianos, incluyendo Lacey Sturm de Flyleaf y Matty Mullins de Memphis May Fire.`,
                        },
                        {
                            data:`La baterista Jen Ledger también ha lanzado música como solista y ha colaborado con otros artistas, incluyendo una colaboración con el rapero Lecrae en la canción "Messengers".`,
                        },
                        {
                            data:`Los fans de skillet se denominan a ellos mismos como "panheads"`,
                        },
                    ],
                    paragraph: "Estos son solo algunos datos curiosos sobre Skillet. La banda tiene una larga trayectoria y hay mucho más por descubrir sobre ellos."
            },
        
        }));

        localStorage.setItem("myAside", JSON.stringify({
            nav:[
                { 
                    title:"Skillet celebra 25 años con la música",
                    paragranph:"Hace 25 años, tres miembros de diferentes y estilos musicales (John Cooper, Ken Steorts y Trey McClurkin) se reunieron para formar una banda. Comentaron que era como «tirar sus influencias musicales en una sartén», así que lo eligieron como nombre (skillet = sartén) y lanzaron su álbum debut skillet. A partir del sonido del grunge, es difícil imaginar que este pequeño grupo de rock se convertiría en una de las bandas más icónicas y exitosas de la música cristiana. Si bien solo el vocalista John Cooper permanece como miembro original en la banda, este álbum fue donde comenzó la magia."
                },
                { 
                    title:"Logros",
                    paragranph:"Hasta el momento, ha conseguido 8 GMA Dove Award, 1 Billboard Music Award, 1 Loudwire Music Award, 3 HM Award y 2 nominaciones al Grammy. La banda fue reconocida en 2016 por haber grabado el sencillo digital más grande en la historia de la música cristiana, ya que «Monster» había alcanzado la cifra de 2.6 millones en ventas. Fue Doble Certificado de Platino por la RIAA, fue la canción cristiana #1 en streaming y fue la canción de rock #8 en streaming de 2015. En 2019, Skillet anunció en su sitio que la RIAA había certificado «Monster» como Triple Platino y a «Hero» como Doble Platino."
                },
                {
                    title:"Miembros",
                    link:[
                        {
                            name:"John Cooper",
                            link:"https://es.wikipedia.org/wiki/John_Cooper_(cantante)"
                        },
                        {
                            name:"Korey Cooper",
                            link:"https://es.wikipedia.org/wiki/Korey_Cooper"
                        },
                        {
                            name:"Jen Ledger",
                            link:"https://es.wikipedia.org/wiki/Jen_Ledger"
                        },
                        {
                            name:"Seth Morrison",
                            link:"https://es.wikipedia.org/wiki/Seth_Morrison"
                        }
                      
                    ]
                },
                {
                    title:"Redes",
                    link:[
                        {
                            name:"PaginaOficial",
                            link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi9y6PCh_L9AhVvJUQIHSMRAZMQFnoECF4QAQ&url=https%3A%2F%2Fwww.skillet.com%2F%3Ffrontpage%3Dtrue&usg=AOvVaw1ShQQqBkYoD5yI0KphEX28"
                        },
                        {
                            name:"Youtube",
                            link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi9y6PCh_L9AhVvJUQIHSMRAZMQtwJ6BAggEAE&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCE8NoMFnai3tTuwdiQJ-78A&usg=AOvVaw2oO20bqKCwd9GOBv2gIY3u"
                        },
                        {
                            name:"Twitter",
                            link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi9y6PCh_L9AhVvJUQIHSMRAZMQ6F56BAhuEAE&url=https%3A%2F%2Ftwitter.com%2Fskilletmusic%3Fref_src%3Dtwsrc%255Egoogle%257Ctwcamp%255Eserp%257Ctwgr%255Eauthor&usg=AOvVaw189jIglZaAT7tDJsXki53m"
                        },
                        {
                            name:"Spotify",
                            link:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi9y6PCh_L9AhVvJUQIHSMRAZMQFnoECGEQAQ&url=https%3A%2F%2Fopen.spotify.com%2Fartist%2F49bzE5vRBRIota4qeHtQM8&usg=AOvVaw0SyrF2Lnh16mNB9hHJ5bLu"
                        }
                    ]
                },
            ],
        }));

        localStorage.setItem("myFooter", JSON.stringify({
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
        }))
    }
}