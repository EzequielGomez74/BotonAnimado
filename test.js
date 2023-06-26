const btn = document.querySelector(".btn");


btn.addEventListener("mousedown", function(){
    btn.innerText = "Clickeado";
});

btn.addEventListener("mouseover", function(){
    btn.innerText = "Hover ON";
});

btn.addEventListener("mouseout", function(){
    btn.innerText = "Hover OFF";
});