const btnmias = document.getElementById("mais");
btnmias.setAttribute('onclick', 'addTF()');

const EXlista = document.querySelector('[bdeletelist]');
EXlista.setAttribute('onclick', 'deletaTF()');

// criando uma nova tarefa ao digitar e clicar no botão "+"
function addTF() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("tfdigitada").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.setAttribute('class', 'mdl-list__item');
  li.setAttribute('title', 'Marque essa Tarefa como Feita');

  // se não digitar nada e clicar no botão "+" não retorna nada, se adigitar adiciona tarefa =D
    if (inputValue == '') {
      return null
       } 
      else {
       document.getElementById("UL").appendChild(li);
      }
      
  // quando adicionar uma tarefa limpa o campo de digitação
  document.getElementById("tfdigitada").value = "";

  // criando o icone da lixeira
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("delete_forever");
  span.setAttribute('title', 'Excluir Tarefa');
  span.className = "lixeira material-icons";
  span.appendChild(txt);
  li.appendChild(span);

    for (i = 0; i < lixo.length; i++) {
      lixo[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
    //ablitando o botão de excluir tarefas feitas
    if (EXlista.hasAttribute("disabled")){
      EXlista.removeAttribute("disabled");
    }
}

// deletando todos os itens da Lista de Tarefas
function deletaTF () {
  while (tarefaf.firstChild){
    tarefaf.removeChild(tarefaf.firstChild);
  }
  let atb = document.createAttribute ("disabled")
  EXlista.setAttributeNode(atb);
}

// para treinar o "for" criei uma parametro para a lixeira deletar a tarefa
var lixo = document.getElementsByClassName("lixeira");
var i;
  for (i = 0; i < lixo.length; i++) {
    lixo[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
}

// adicionando uma marcação nas tarefas feitas 
var tarefaf = document.querySelector('ul');
  tarefaf.addEventListener('click', function (p) {
    if (p.target.tagName == 'LI') {
      p.target.classList.toggle('checked');
    }
  }, false);
