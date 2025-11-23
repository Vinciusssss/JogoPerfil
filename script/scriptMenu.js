function irPara(caminho) {
    const somClick = new Audio("efeitos/button_song.wav");
    somClick.currentTime = 0;
    somClick.play();

    setTimeout(() => {
        window.location.href = caminho;
    }, 100);
}