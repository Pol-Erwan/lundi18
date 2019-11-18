var footer = document.querySelector("footer");
var navbar = document.getElementById("navbarHeader");
var hamburger = document.querySelector("button.navbar-toggler");
var card = document.getElementsByClassName("card")[0] ;
var edit = card.getElementsByClassName("btn")[1];
var card2 = document.getElementsByClassName("card")[1];
var edit2 = card2.getElementsByClassName("btn")[1];
var link = document.querySelector("link");

var number = 1;

footer.addEventListener("click", Fonction);

function Fonction(){
  console.log("clique numéro "+ number);
  number = number + 1
};

function Collapse(){
  navbar.classList.toggle("collapse");
};

hamburger.addEventListener("click", Collapse);

function Edit(){
  card.style.color = "red";
}

edit.addEventListener("click", Edit);

function Edit2(){

if (card2.style.color === "green"){
  card2.style.color = "" ;
} else {
  card2.style.color = "green";
};

};

edit2.addEventListener("click", Edit2);

function Disabled(){

if (link.disabled === true){
  link.disabled = false;
} else {
  link.disabled = true;
};

};

navbar.ondblclick = Disabled;




