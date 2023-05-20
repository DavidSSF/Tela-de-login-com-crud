//Butão da navbar para criar o cadastror
const btn_Criar_inicio = document.getElementById('btn-Criar-inicio');

btn_Criar_inicio.addEventListener('click', (e) => {

    e.preventDefault();

    none('inicio')

    document.getElementById('criar').style.display = '';

    btn_Criar_inicio.style.display = 'none';

    if (document.getElementById('btn-Entrar-inicio').style.display == 'none') {

        not_none('btn-Entrar-inicio')

        none('entrar')

    }

})

//Butão da navbar para criar o cadastror
const btn_Criar = document.getElementById('btn-Criar-conta');

btn_Criar.addEventListener('click', () => {

    const nome = document.getElementById('nomeUs-Criar').value;

    const senha = document.getElementById('Senha-Criar').value;

    const csenha = document.getElementById('CSenha-Criar').value;


    carregar()

    setTimeout(() => {

        if (nome != '' && senha != '' && csenha != '' && senha == csenha) {

            let v = 0;

            for (let i = 0, len = localStorage.length; i < len; i++) {

                let key = localStorage.key(i);

                if (nome == key.substring(0, key.length - 1)) {
                    v = 1
                }
            }
            if (v == 0) {
                localStorage.setItem(nome + '@', senha);

                alert('Conta Criada')

                retornar_inicio()

            } else {

                alert("Conta já existente")

            }

        } else {

            alert("Impossível criar a conta")

        }
    }, 3500)
})