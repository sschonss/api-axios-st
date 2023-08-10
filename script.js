document
  .getElementById("my-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const empresa = document.getElementById("empresa").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    try {
        const response = await axios.post("http://192.168.1.26/api/cliente", { 
            nome: nome,
            empresa: empresa,
            email: email,
            telefone: telefone,
            message: message
         });
          document.getElementById("response-content").innerHTML = response.data.message;
        
    } catch (error) {
        document.getElementById("response-content").innerHTML = 'Não encontrado';
      
    }
  });

const clearResponse = () => {
    document.getElementById("response-content").innerHTML = "";
}
