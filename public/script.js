document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
 
    form.addEventListener('submit', async (event) => {
       event.preventDefault();
 
       const nome = form.querySelector('#nome').value.trim();
       const email = form.querySelector('#email').value.trim();
       const idade = form.querySelector('#idade').value.trim();
 
       if (!nome || !email || !idade) {
          alert('Por favor, preencha todos os campos.');
          return;
       }
 
       try {
          const response = await fetch('/processar-formulario', {
             method: 'POST',
             headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
             },
             body: new URLSearchParams({ nome, email, idade }),
          });
 
          if (response.ok) {
             window.location.href = '/resultado.html';
          } else {
             alert('Erro no cadastro. Tente novamente.');
          }
       } catch (error) {
          console.error('Erro na requisição:', error);
       }
    });
 });
 