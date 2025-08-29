document.getElementById('formIscrizione').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const corso = document.getElementById('corso').value;

  const messaggio = document.getElementById('messaggio');
  messaggio.textContent = `Iscrizione ricevuta per ${nome} (${email}) al corso di ${corso}.`;
});