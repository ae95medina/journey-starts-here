const h2 = document.createElement("h2");
h2.textContent = "*JavaScript has joined the chat*";
document.querySelector("body").appendChild(h2);

const p1 = document.createElement("p1");
p1.textContent = "Click anywhere on this webpage for a surprise!";
document.querySelector("body").appendChild(p1)

document.addEventListener("click", function(){
    document.body.style.backgroundColor = "lightblue";
  });