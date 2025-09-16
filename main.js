document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#post-form");
    const inputTitle = document.querySelector("#post-title");
    const inputBody = document.querySelector("#post-body");
    const outputTitle = document.querySelector("#renderizador-titulo");
    const outputBody = document.querySelector("#renderizador-conteudo");

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    
    form.addEventListener("submit", event => {
        
        event.preventDefault();

        const data = {
            title: inputTitle.value,
            body: inputBody.value,
            userId: 1
        };

        const fetchConfig = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        fetch(apiUrl, fetchConfig)
            .then(response => response.json())
            .then(jsonResponse => {
                console.log("API respondeu:", jsonResponse);

                outputTitle.textContent = jsonResponse.title;
                outputBody.textContent = jsonResponse.body;
                
                inputTitle.value = "";
                inputBody.value = "";
            })
            .catch(error => {
                console.error("Falha na requisição:", error);
                outputTitle.textContent = "Erro ao postar. Tente novamente.";
                outputBody.textContent = "";
            });
    });

});