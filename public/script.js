document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
 
    form.addEventListener('submit', (event) => {
       const nome = form.querySelector('#nome').value.trim();
       const email = form.querySelector('#email').value.trim();
       const idade = form.querySelector('#idade').value.trim();
 
       if (!nome || !email || !idade) {
          event.preventDefault(); // Impede o envio do formulário se os campos estiverem vazios
          alert('Por favor, preencha todos os campos.');
       }
    });
 });
 