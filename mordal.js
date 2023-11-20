let openBtu = document.getElementById("open");
let mordalBox = document.getElementById("mordal-contant");
let closeBut = document.getElementById("close");

openBtu.addEventListener('click' ,function()
{mordalBox.style.display = 'block';
});

closeBut.addEventListener('click' , function()
{ mordalBox.style.display = 'none';
});

window.addEventListener('click' , function(e)
{ if(e.target===mordalBox){
    mordalBox.style.display = 'none';
}
});