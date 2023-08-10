const busca_usuario = async () => {

    const nome = document.getElementById('nome').value;
    
    if (nome == '') {
        alert('nome obrigatorio')
        return
    }

    try {
        const response = await axios.get(
            "http://192.168.1.26/api/cliente/nome/" + nome
        );
        const dados = response.data.dados;

        alert('Empresa: ' + dados[0].empresa)
    }
    catch (error) {
        alert(error.response.data.message)
    }
    
}
