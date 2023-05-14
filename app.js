let btn = document.getElementById("btn")
let fav=document.getElementById("fav-button")
btn.onclick = ()=>{
    document.body.classList.toggle("dark-theme")
}
document.getElementById("fav").style.display="none"
fav.onclick=()=>{
    if(document.getElementById("fav").style.display==="none"){
        document.getElementById("fav").style.display="block"
    }
    else{
        document.getElementById("fav").style.display="none"
    }
}

const myFunction=()=>{
    document.location.href ="details.html"
}