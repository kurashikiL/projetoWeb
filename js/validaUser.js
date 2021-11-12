var logado = false;

function cadastrar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    var conf_senha = document.getElementById('confirmar-senha').value;

    if(login == "" || senha=="" || conf_senha==""){
        alert("Campos Vazios")
    }
    else{
        if(senha == conf_senha){
            window.localStorage.setItem('login', login);
            window.localStorage.setItem('senha', senha);
            window.location.href = "login.html";
        }
        else{
            alert("As senhas não batem")
        }
    }
}

// check if stored data from register-form is equal to entered data in the   login-form
function logar() {

    var storedLogin = window.localStorage.getItem('login');
    var storedSenha = window.localStorage.getItem('senha');

    var userLogin = document.getElementById('userLogin');
    var userSenha = document.getElementById('userSenha');

    if(userLogin.value !== storedLogin || userSenha.value !== storedSenha) {
        alert('Usuário ou Senha Inválidos');
    }else {
        window.location.href = "../index.html";
    }
}
