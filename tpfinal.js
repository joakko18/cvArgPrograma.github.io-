
x = document.getElementById("caste")
y = document.getElementById("ingle")

function mail(){
    alert("colourful_flowers@hotmail.com")
}
function cambiarIdioma(){
    
    if(x.style.display === "block" && y.style.display === "none"){
        document.getElementById("botoncito").innerText = "cambiar idioma"
        x.style.display = "none"
        y.style.display = "block"
    }
    else{
        x.style.display = "block"
        y.style.display = "none"
        document.getElementById("botoncito").innerText = "change language"
    }
}



