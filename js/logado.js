//Butão que chama uma funcion que verifica se o form foi respondido, linpa os inputs, mas abri o perfil do user
var ver_perfil = document.getElementById('ver-perfil');

ver_perfil.addEventListener('click', (e) => {

    e.preventDefault();

    btn_ver_perfil()

})

//Sai da conta do user
var sair = document.getElementById('sair');

sair.addEventListener('click', (e) => {

    e.preventDefault();

    carregar()

    setTimeout(() => {

        none('inicio')

        ver_perfil.style.display = 'none';

        none('retangolo')

        sair.style.display = 'none';

        localStorage.setItem('estado:', ['out', 'out']);

        window.location.reload(true);

    }, 3500)
})

function btn_ver_perfil() {

    none('inicio')

    ver_perfil.style.display = 'none';

    not_none('retangolo')

    if (localStorage.getItem(`CRUD:${(localStorage.getItem('estado:').split(','))[1]}`) == null) {

        none('com-formu')

        not_none('btn-respond')

    } else {

        not_none('com-formu')

        none('btn-respond')

        not_none('btn-enviar-formu')

        var nome = document.getElementById('nome');
        var idade = document.getElementById('idade');
        var curso = document.getElementById('curso');
        var nome_mae = document.getElementById('nome_mae');
        var nome_pai = document.getElementById('nome_pai');
        var cidade = document.getElementById('cidade');

        nome.classList.remove('ver')
        idade.classList.remove('ver')
        curso.classList.remove('ver')
        nome_mae.classList.remove('ver')
        nome_pai.classList.remove('ver')
        cidade.classList.remove('ver')

        curso.selectedIndex = 0;

        document.getElementById('formulario').classList.remove('ver')

        nome.placeholder = '';
        idade.placeholder = '';
        nome_mae.placeholder = '';
        nome_pai.placeholder = '';
        cidade.placeholder = '';

    }

}