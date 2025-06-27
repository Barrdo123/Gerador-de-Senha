document.getElementById('gerar').addEventListener('click', function() {
    let comprimento = document.getElementById('comprimento').
        value;
    let tipo = document.getElementById('tipo').value

    let senha = gerarSenha(comprimento, tipo);
    document.getElementById('senha').textContent = senha;
    
});
function gerarSenha(comprimento, tipo) {
    let caracteres = ''
    switch (tipo){
        case "todos":
            caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&* ()_ + []{ }|;:,.<>?'; 
            break;

        case "letras":
            caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';   
            break;

        case "let_num":
            caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'           
            break;

        case "numeros":
            caracteres = '0123456789'
            break;

    }

    let senha = '';
            for (let i = 0; i < comprimento; i++) {
                let indice = Math.floor(Math.random() * caracteres.length);
                senha += caracteres[indice];
            }
            return senha;
}
