export default{
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
    listDiscografia(){
        let plantilla = "";
        this.Discografia.forEach((val, id) => {
            plantilla += `
            <div class="col-md-6">
                <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="cards">
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary">${val.duracion}</strong>
                        <h3 class="mb-0">${val.disco}</h3>
                    <div class="mb-1 text-muted">${val.fecha}</div>
                    <p class="card-text mb-auto">${val.canciones}</p>
                    <a href="#tablita" class="stretched-link">Discografia</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img src="${val.image}" class="img-fluid responsiveImgC" alt="...">
                    </div>
                </div>
            </div>
            `;
        });
        document.querySelector("#cardRock").insertAdjacentHTML("beforeend", plantilla);
    }
}