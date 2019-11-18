var footer = document.querySelector("footer");
var navbar = document.getElementById("navbarHeader");
var hamburger = document.querySelector("button.navbar-toggler");
var card = document.getElementsByClassName("card")[0] ;
var edit = card.getElementsByClassName("btn")[1];
var card2 = document.getElementsByClassName("card")[1];
var edit2 = card2.getElementsByClassName("btn")[1];
var link = document.querySelector("link");
var image = document.querySelectorAll("img.card-img-top");
var view = document.querySelectorAll("button.btn-success");

// fonction 1 //

var number = 1;

footer.addEventListener("click", Fonction);

function Fonction(){
  console.log("clique numéro "+ number);
  number = number + 1
};

// fonction 2 //

function Collapse(){
  navbar.classList.toggle("collapse");
};

hamburger.addEventListener("click", Collapse);

// fonction 3 //

function Edit(){
  card.style.color = "red";
}

edit.addEventListener("click", Edit);

// fonction 4 //

function Edit2(){

if (card2.style.color === "green"){
  card2.style.color = "" ;
} else {
  card2.style.color = "green";
};

};

edit2.addEventListener("click", Edit2);

// fonction 5 //

function Disabled(){

if (link.disabled === true){
  link.disabled = false;
} else {
  link.disabled = true;
};

};

navbar.ondblclick = Disabled;

// fonction 6 //

var pict = image && view;

pict.forEach(b => {
b.addEventListener("mouseover", View2);
console.log(b);

function View2(){

if (b.style.width === "20%"){
  b.style.width = "" ;
} else {
  b.style.width = "20%";
};

}

});




