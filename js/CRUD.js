//Chama o formulário para ser respondio
var btn_respond = document.getElementById('btn-respond');

btn_respond.addEventListener('click', function () {

    none('retangolo')

    not_none('formulario')

    not_none('voltar')
})

//Salva o formulário respondido pelo usuario
var btn_enviar_formu = document.getElementById('btn-enviar-formu');

btn_enviar_formu.addEventListener('click', function (e) {

    e.preventDefault();

    var p = Salvar_Crud();

    if(p==true){
        setTimeout(function(){
    
            alert('Dados salvos')
            
        },3500)
    }

})

//Função que salva todos os valores digitados pelo user
function Salvar_Crud(){

    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var curso = document.getElementById('curso').value;
    var nome_mae = document.getElementById('nome_mae').value;
    var nome_pai = document.getElementById('nome_pai').value;
    var cidade = document.getElementById('cidade').value;
    
    if (nome == '' | idade == '' | curso == 'Selecione o Curso:' | nome_mae == '' | nome_pai == '' | cidade == '') {
        alert("Há campos vazios!")
        return false
    }
    else if (nome == ',' | idade == ',' | curso == 'Selecione o Curso:' | nome_mae == ',' | nome_pai == ',' | cidade == ',') {
        alert('Sem virgolas')
        return false
    } else {

        carregar()
    
        localStorage.setItem(`CRUD:${(localStorage.getItem('estado:').split(','))[1]}`, `Nome:;${nome};Nome da Mãe:;${nome_mae};Nome do Pai:;${nome_pai};Cidade:;${cidade};Curso:;${curso};Idade:;${idade}`)
    
        setTimeout(function () {
    
            not_none('retangolo')
    
            none('formulario')
    
    
            btn_ver_perfil()
    
            document.getElementById('nome').value = '';
            document.getElementById('idade').value = '';
            document.getElementById('curso').value = 'Selecione o Curso:';
            document.getElementById('nome_mae').value = '';
            document.getElementById('nome_pai').value = '';
            document.getElementById('cidade').value = '';
    
        }, 3500)

        return true
    }

}
//Atualiza o formi
var btn_atualizar = document.getElementById('atualizar-btn')

btn_atualizar.addEventListener('click',function(e){
    e.preventDefault()
    
    var p = Salvar_Crud();

    if(p==true){
        setTimeout(function(){
    
            alert('Dados atualizado')
            
        },3500)
    }
    
})

//Butão que chama a perte de atualizar
var btn_delfor = document.getElementById('btn-atzfor');

btn_delfor.addEventListener('click', function () {
    
    var nome = document.getElementById('nome');
    var idade = document.getElementById('idade');
    var curso = document.getElementById('curso');
    var nome_mae = document.getElementById('nome_mae');
    var nome_pai = document.getElementById('nome_pai');
    var cidade = document.getElementById('cidade');
    
    none('retangolo')
    
    not_none('formulario')
    
    var l = localStorage.getItem(`CRUD:${(localStorage.getItem('estado:').split(','))[1]}`).split(';')
    
    nome.value = l[1]
    nome_mae.value = l[3]
    nome_pai.value = l[5]
    cidade.value = l[7]
    curso.value = l[9]
    idade.value = l[11]
    
    none('btn-enviar-formu')
    
    not_none('atualizar-btn')
    
    not_none('voltar')

})

//Deletar
var btn_delfor = document.getElementById('btn-delfor');

btn_delfor.addEventListener('click', function () {

    localStorage.removeItem(`CRUD:${(localStorage.getItem('estado:').split(','))[1]}`)
    
    carregar()
    
    setTimeout(() => {
    
        alert('Crud deletado')
    
        retornar_inicio()
    
    }, 3500)
})

//Ver as informações do formulário
var btn_verfor = document.getElementById('btn-verfor');

btn_verfor.addEventListener('click', function () {

    var nome = document.getElementById('nome');
    var idade = document.getElementById('idade');
    var curso = document.getElementById('curso');
    var nome_mae = document.getElementById('nome_mae');
    var nome_pai = document.getElementById('nome_pai');
    var cidade = document.getElementById('cidade');

    nome.classList.add('ver')
    idade.classList.add('ver')
    curso.classList.add('ver')
    nome_mae.classList.add('ver')
    nome_pai.classList.add('ver')
    cidade.classList.add('ver')

    none('retangolo')

    not_none('formulario')

    var l = localStorage.getItem(`CRUD:${(localStorage.getItem('estado:').split(','))[1]}`).split(';')

    nome.placeholder = l[1]
    nome_mae.placeholder = l[3]
    nome_pai.placeholder = l[5]
    cidade.placeholder = l[7]
    curso.value = l[9]
    idade.placeholder = l[11]

    none('btn-enviar-formu')

    not_none('voltar')

})


//Butão pra voltar a página das informações do user
const volt = document.getElementById('voltar');

volt.addEventListener('click', function (c) {
    c.preventDefault();

    none('voltar')

    none('formulario')

    not_none('btn-enviar-formu')

    none('atualizar-btn')

    btn_ver_perfil()

})