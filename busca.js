const busca_usuario = () => {
    const nome = document.getElementById('nome').value;
    if(nome == ''){
        alert('nome obrigatorio')
    }

    try{
        const response = axios.get("http://192.168.1.26/api/cliente/nome/"+nome)
        alert(response.data.message)
    }catch(error){
        alert(error.response.status)
    }
}