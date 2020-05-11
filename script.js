function carregar(){
    var agora = new Date();
    var hora = agora.getHours();

    hora = 2;

    var hour = window.document.getElementById('horatxt');
    var img = window.document.getElementById('imagem');

    hour.innerHTML = `Agora são ${hora} horas.`;

    if(hora > 6 && hora < 12){
        img.src = '_imagens/morning.png';
        window.document.body.style.background = '#e2cd9f';
    }
    else if(hora >= 12 && hora < 18){
        img.src = '_imagens/evening.png';
        window.document.body.style.background = '#ff8c00';
    }
    else{
        img.src = '_imagens/night.png';
        window.document.body.style.background = 'black';
    } 
}