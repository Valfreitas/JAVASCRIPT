var n = 0
        var res = document.getElementById('resultado')
     
        function clique1() {
            n = n + 1
            res.innerHTML = `</p>O contador está com <mark>${n}</mark> cliques.</p>`
        }
        function clique2() {
            n = 0
            res.innerHTML = null
        }