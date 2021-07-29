//information sur les images
let imageInfo=[{'filename':'img-1.jpg','name':'Soleil','type':'étoile'},{'filename':'img-2.jpg','name':'Jupiter','type':'planet'},{'filename':'img-3.jpg','name':'Saturne','type':'planet'},{'filename':'img-4.jpg','name':'Uranus','type':'planet'},{'filename':'img-5.jpg','name':'Nepturne','type':'planet'},{'filename':'img-6.jpg','name':'Tere','type':'planet'},{'filename':'img-7.jpg','name':'Vénus','type':'planet'},{'filename':'img-8.jpg','name':'Mars','type':'planet'},{'filename':'img-9.jpg','name':'Ganymède','type':'lune de Jupiter'},{'filename':'img-10.jpg','name':'Titan','type':'lune de Staturne'},{'filename':'img-11.jpg','name':'Mercure','type':'planet'},{'filename':'img-12.jpg','name':'Callisto','type':'lune de Jupiter'},{'filename':'img-13.jpg','name':'Io','type':'lune de Jupiter'},{'filename':'img-14.jpg','name':'Lune','type':'lune de la Terre'},{'filename':'img-15.jpg','name':'Europa','type':'lune de Jupiter'},{'filename':'img-16.jpg','name':'Triton','type':'lune de Neptune'},{'filename':'img-17.jpg','name':'Pluton','type':'planet'},{'filename':'img-18.jpg','name':'Titania','type':'lune d\'Uranus'},{'filename':'img-19.jpg','name':'Rhéa','type':'lune de Saturne'},{'filename':'img-20.jpg','name':'Obéron','type':'lune d\'Uranus'},{'filename':'img-21.jpg','name':'Japet','type':'lune de Saturne'}];
//choisir une image aleatoire
let imgAlea=imageInfo[Math.floor(Math.random()*imageInfo.length)];
//Get #pagecontnent element
let pageContent = document.getElementById('pageContent');
//application de background
pageContent.style.backgroundImage = `url(images/${imgAlea.filename})`;
//get #pictInfo div
let pictInfo = document.getElementById('pictInfo');
//modification des info
if(pictInfo){
    let nom=document.getElementById('nomIm');
    let type=document.getElementById('typeIm');
    nom.innerHTML=imgAlea.name;
    type.innerHTML=`( ${imgAlea.type} )`;
}