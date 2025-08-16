const div = document.querySelector('div')

div.addEventListener("click", function(){
   alert("Hola! Soy el div")
});

function saludar(e){
   e.stopPropagation();
   alert("Hola!");
}