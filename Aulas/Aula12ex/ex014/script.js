function carregar() { 
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora} horas </strong>.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'bomdia.png'
        document.body.style.backgroundColor = '#7D6A64'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'boatarde.png'
        document.body.style.backgroundColor = '#FAC7AF'
    } else {
        // BOA NOITE!
        img.src = 'boanoite.png'
        document.body.style.backgroundColor = '#4C4C4D'
    }
}