function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10 ) {
                //Criança
                img.setAttribute('src','bebemenino.png')
            } else if ( idade < 28 ) {
                //Jovem
                img.setAttribute('src','jovemmenino.png')
            } else if ( idade < 50 ) {
                //Adulto
                img.setAttribute('src','adultomenino.png')
            } else {
                //Idoso
                img.setAttribute('src','idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10 ) {
                // Criança
                img.setAttribute('src','bebemenina.png')
            } else if ( idade < 28 ) {
                //Jovem
                img.setAttribute('src','jovemmenina.png')
            } else if ( idade < 50 ) {
                //Adulto
                img.setAttribute('src','adultomenina.png')
            } else  {
                //Idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} de ${idade} idade.</p>`
        res.appendChild(img)
    }
}