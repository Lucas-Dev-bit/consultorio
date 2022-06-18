function subirTela(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function BotaoScroll(){
    if(window.scrollY === 0){
        document.querySelector('.subirTela').style.display = 'none';
    }else{
        document.querySelector('.subirTela').style.display = 'block';
    }
}

window.addEventListener('scroll', BotaoScroll);