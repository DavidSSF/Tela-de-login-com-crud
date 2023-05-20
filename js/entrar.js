//Butão da navbar para entrar na conta
var btn_Entrar_inicio = document.getElementById('btn-Entrar-inicio');

btn_Entrar_inicio.addEventListener('click', (e) => {

    e.preventDefault();

    none('inicio')

    not_none('entrar')

    btn_Entrar_inicio.style.display = 'none';

    if (document.getElementById('btn-Criar-inicio').style.display == 'none') {

        not_none('btn-Criar-inicio')

        none('criar')

    }
});


//Butão que entra na conta
var btn_Entrar = document.getElementById('btn-Entrar');

btn_Entrar.addEventListener('click', (c) => {

    c.preventDefault();

    /* Entrar na conta */
    var nome = document.getElementById('nomeUs-Entrar').value;

    var senha = document.getElementById('Senha-Entrar').value;

    var check = document.getElementById('check');

    carregar()

    setTimeout(() => {

        var c = 0

        for (let i = 0, len = localStorage.length; i < len; i++) {
            let key = localStorage.key(i);

            let valor = localStorage.getItem(key);

            key = key.substring(0, key.length - 1);

            if (nome == key && senha == valor && check.checked) {

                localStorage.setItem('estado:', ['in', nome])

                c = 1

                retornar_inicio()

            } else if (nome == key && senha == valor) {

                c = 1

                localStorage.setItem('estado:', ['tp', nome])

                retornar_inicio()

            }
        } if (c == 0) {
            alert('Conta não encontrada!')
        }

    }, 3500)
})