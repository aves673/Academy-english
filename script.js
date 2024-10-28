document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('FormularioForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Validação dos campos
        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const endereco = form.endereco.value.trim(); // Corrigido: "endereço" para "endereco"
        const mensagem = form.mensagem.value.trim();
        const telefone = form.telefone.value.trim();

        // Validação básica
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Validação do formato do email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um email válido.');
            return;
        }

        // Simulação de envio (substituir por uma chamada real à API, se necessário)

        // Feedback ao usuário
        alert(`Obrigado pelo seu contato, ${nome}! Sua mensagem foi enviada.`);
        
        // Resetando o formulário
        form.reset();
    });
});
