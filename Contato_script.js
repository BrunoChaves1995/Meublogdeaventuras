document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContato");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // impede que a página recarregue

        // Capturando valores
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Validação simples
        if (!nome || !email || !mensagem) {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        // Mensagem de confirmação
        alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);

        // opcional: limpar formulário após envio
        form.reset();
    });
});



