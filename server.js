const express = require('express');
const app = express();
const path = require('path');

// Impostare il motore di template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // La cartella dove si trovano i tuoi file .ejs

// Percorso per i file statici
app.use(express.static(path.join(__dirname, 'public'))); // Assicurati che 'public' sia il nome giusto per la cartella dei file statici

// Simuliamo un utente autenticato (questo va sostituito con logica di autenticazione reale)
const user = { username: "Mario" };  // Se l'utente è loggato, user è un oggetto, altrimenti è null o undefined


// Percorso per la pagina iniziale
app.get('/', (req, res) => {
  res.render('index', { user }); // Passa l'oggetto user alla vista
});

// Avvia il server
app.listen(3000, () => {
  console.log('Server in ascolto sulla porta 3000');
});

console.log('Public directory:', path.join(__dirname, 'public'));
