var hora = 24
if (hora < 0 || hora > 24) {
    console.log('Você precisa preencher a var hora com um número entre 00 e 24')
} else {
console.log (`Agora são exatamente ${hora} horas.`)
if (hora >= 6 && hora < 12 ) {
    console.log (`Bom dia!`)
} else if (hora >= 12 && hora < 18) {
    console.log(`Boa tarde`)
} else if (hora >= 18 && hora < 24) {
    console.log(`Boa noite`)
}else {
    console.log(`Boa madrugada!`)
}
}