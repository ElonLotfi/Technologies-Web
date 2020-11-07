import { Magretdecanard,Moulesfrites,Couscous,Blanquettedeveau,Côtedebœuf,Gigotdagneau,Bœufbourguignon,Raclette,Tomatesfarcies } from "./dishURL"

import { MagretdecanardDiscription,MoulesfritesDiscription,CouscousDiscription,BlanquettedeveauDiscription,CôtedebœufDiscription,GigotdagneauDiscription,BœufbourguignonDiscription,RacletteDiscription,TomatesfarciesDiscription } from "./dishDescription"


import {Fondantauchocolat,Crepes,Mousseauchocolat,ileflottante,Tarteauxpommes,Tiramisu,Profiteroles,Millefeuille,Tarteauxfraises} from "./DessertUrl"
import {FondantauchocolatDis,CrepesDis,MousseauchocolatDis,ileflottanteDis,TarteauxpommesDis,TiramisuDis,ProfiterolesDis,MillefeuilleDis,TarteauxfraisesDis} from "./DessertDisciption"


// Generer un menu aleatoirement depuis une liste definis
function generateMenu() {
    const name = [["Magret de canard",Magretdecanard,MagretdecanardDiscription], ["Moules-frites",Moulesfrites,MoulesfritesDiscription], ["Couscous",Couscous,CouscousDiscription], ["Blanquette de veau",Blanquettedeveau,BlanquettedeveauDiscription], ["Côte de bœuf",Côtedebœuf,CôtedebœufDiscription,CôtedebœufDiscription], ["Gigot d'agneau",Gigotdagneau,GigotdagneauDiscription], ["Bœuf bourguignon",Bœufbourguignon,BœufbourguignonDiscription],["Raclette",Raclette,RacletteDiscription],["Tomates farcies",Tomatesfarcies,TomatesfarciesDiscription]];
    const random = Math.floor(Math.random() * name.length);
    return name[random];

}
// Generer un dessert aleatoirement depuis une liste definis

function generateDessert() {
    const name = [["Fondant au chocolat",Fondantauchocolat,FondantauchocolatDis], ["Crêpes",Crepes,CrepesDis], ["Mousse au chocolat",Mousseauchocolat,MousseauchocolatDis], ["Île flottante",ileflottante,ileflottanteDis], ["Tarte aux pommes",Tarteauxpommes,TarteauxpommesDis], ["Tiramisu",Tiramisu,TiramisuDis], ["Profiteroles",Profiteroles,ProfiterolesDis],["Millefeuille",Millefeuille,MillefeuilleDis],["Tarte aux fraises",Tarteauxfraises,TarteauxfraisesDis]];
    const random = Math.floor(Math.random() * name.length);
    return name[random];

}


// Generer le prix de Menu
function generateMenuPrice() {

    return Math.floor(Math.random() * 30) + 11;

}




export const menuGenerator = {
    generateMenu,
    generateMenuPrice,
    generateDessert,
  
  
  };