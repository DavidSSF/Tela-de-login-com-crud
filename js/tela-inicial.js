//funcions que auxiliam a tela inicial, e outas partes do código
log()

var return_inicio = document.getElementById('return_inicio');

return_inicio.addEventListener('click', () => {
    retornar_inicio()
})

function log() {
    try {

        if ((localStorage.getItem('estado:').split(','))[0] == 'in') {

            none('not-in')

            not_none('not-out')

        }
        else {

            localStorage.setItem('estado:', ['out', 'out']);

        }

    } catch (error) {
        localStorage.setItem('estado:', ['out', 'out'])
    }

}

function none(x) {

    document.getElementById(x).style.display = 'none';

}
function not_none(y) {

    document.getElementById(y).style.display = '';

}

function retornar_inicio() {

    document.getElementById('nomeUs-Criar').value = '';

    document.getElementById('Senha-Criar').value = '';

    document.getElementById('CSenha-Criar').value = '';

    document.getElementById('nomeUs-Entrar').value = '';

    document.getElementById('Senha-Entrar').value = '';

    document.getElementById('check').checked = false;

    document.getElementById('nome').value = '';

    document.getElementById('idade').value = '';

    document.getElementById('curso').value = 'Selecione o Curso:';

    document.getElementById('nome_mae').value = '';

    document.getElementById('nome_pai').value = '';

    document.getElementById('cidade').value = '';

    none('atualizar-btn')


    document.getElementById('inicio').style.display = '';

    none('entrar')

    none('criar')

    if ((localStorage.getItem('estado:').split(','))[0] == 'out') {

        not_none('btn-Criar-inicio')

        not_none('btn-Entrar-inicio')

    }
    else if ((localStorage.getItem('estado:').split(','))[0] == 'tp' || (localStorage.getItem('estado:').split(','))[0] == 'in') {

        none('not-in')

        not_none('not-out')

        not_none('ver-perfil')

        none('retangolo')

        none('formulario')
    }
}

//Criculo animado
function carregar() {

    var sum_load = document.getElementById('sum_load');

    var circulo = document.getElementById('circulo-load');

    var circulo_log = document.getElementById('circulo');

    var center_l = document.getElementById('center-l');

    circulo.style.display = 'block';

    sum_load.classList.add('opc')

    circulo_log.classList.add('opc')

    center_l.classList.add('opc')

    setTimeout(() => {

        circulo.style.display = 'none';

        sum_load.classList.remove('opc');

        circulo_log.classList.remove('opc')

        center_l.classList.remove('opc')

    }, 3000)
}