// Récupère les tâches depuis le stockage local lors du chargement de la page
var addToDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('toDoContainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
  //verifier si l'input n'est pas vide
  if(inputField.value != ""){
    //si l'input n'est pas vide,créer un paragraphe
    var paragraph = document.createElement('p') 
  }
  //valorisé ce paragraphe avec le contenu de l'input
  paragraph.innerText = inputField.value ;

  //style le paragraphe
  paragraph.classList.add('paragraphe_style');

  //insérer la paragraphe dans l'element toDoContainer
  toDoContainer.appendChild(paragraph);

  //vide l'input quand le paragraph est ajoute
  inputField.value = "";

  //barré la paragraphe quand on clique dessus
  paragraph.addEventListener('click',function(){
    paragraph.classList.add('paragraph_click');
  })

  //suprimé la tâche quand on double click sur le tâche
  paragraph.addEventListener('dblclick',function(){
   toDoContainer.removeChild(paragraph);
})
}

function result(){
  let inputField = document.getElementById('inputField');
  let paragraph = document.getElementById('paragraph');

  sessionStorage.setItem('input',inputField);
  sessionStorage.getItem('paragraphe',paragraph);
}