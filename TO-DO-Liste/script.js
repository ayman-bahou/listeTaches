var listetaches = document.getElementById('listetaches');

function ajouterTache(){
    var newTacheElement=document.getElementById('newTache');
    var newTache=document.getElementById('newTache').value;
var li=document.createElement('li');
if (newTache===''){
    return;
}
li.innerHTML=newTache;
var btnModifier=document.createElement('button');

btnModifier.innerHTML='<ion-icon name="pencil-outline" class="modify"></ion-icon>';
btnModifier.onclick=function (){
    modifierTache(li);
}

var btnSupprimer=document.createElement('button');
btnSupprimer.innerHTML='<ion-icon name="trash-outline" class="delete"></ion-icon>';
btnSupprimer.onclick=function (){
    supprimerTache(li);
}
newTacheElement.value='';
li.appendChild(btnModifier);
li.appendChild(btnSupprimer);
listetaches.appendChild(li);

function modifierTache(tache){
    var tacheTextElement=tache.firstChild;
    var tacheText=tacheTextElement.textContent;
    var modifTache=prompt("Modifier la tache",tacheText);
    if(modifTache===null || modifTache===''){
        return;
    }
    tacheTextElement.textContent=modifTache;
}
function supprimerTache(tache){
    listetaches.removeChild(tache);
}











}