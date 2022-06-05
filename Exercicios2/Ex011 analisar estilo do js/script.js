function clique() {
    let res = document.getElementById('resultado')
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}`))
    let n2 = Number(window.prompt(`Qual foi a outra nota de ${nome}`))
    let media = (n1 + n2) / 2
        res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.<p>`
        res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.<p>`
        res.innerHTML += `<p>A média final será <mark>${(media)}</mark>.</p>`
    if (media > 5) {
        res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${media}</strong></p>`
    } else {
        res.innerHTML += `<p>A mensagem que temos é: Estude um pouco mais!</p>`
    }


}