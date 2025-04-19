// script.js
  // il tuo codice qui

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerMenu");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const closeSidebar = document.getElementById("closeSidebar");

  // Sidebar toggle
  hamburger.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.style.display = "block";
  });

  closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.style.display = "none";
  });

  // Placeholder trending chart
  const chartContainer = document.getElementById("trendingChart");
  const chartLabels = document.getElementById("chartLabels");
  const data = [60, 90, 45, 70, 85, 30, 100];
  const labels = ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"];

  data.forEach((value, i) => {
    const bar = document.createElement("div");
    bar.className = "chart-bar";
    bar.style.left = `${i * 50 + 10}px`;
    bar.style.height = `${value}%`;
    bar.style.width = "40px";
    bar.style.margin = "0 5px";
    bar.style.display = "inline-block";
    chartContainer.appendChild(bar);

    const label = document.createElement("div");
    label.className = "chart-label";
    label.textContent = labels[i];
    chartLabels.appendChild(label);
  });

  // Placeholder recent comments
  const recentComments = document.getElementById("recentComments");
  const comments = [
    {
      user: "GamerX",
      game: "Elden Ring",
      time: "1h fa",
      content: "Questo gioco è pazzesco, combattimenti epici!"
    },
    {
      user: "PixelHero",
      game: "The Witcher 3",
      time: "3h fa",
      content: "Ho appena finito il DLC, capolavoro!"
    },
    {
      user: "NoobMaster69",
      game: "Fortnite",
      time: "5h fa",
      content: "Chi vuole fare una partita stanotte?"
    }
  ];

  comments.forEach(comment => {
    const div = document.createElement("div");
    div.className = "comment";
    div.innerHTML = `
      <div class="comment-header">
        <span class="comment-user">${comment.user}</span>
        <span class="comment-time">${comment.time}</span>
      </div>
      <div class="comment-game">${comment.game}</div>
      <div class="comment-content">${comment.content}</div>
    `;
    recentComments.appendChild(div);
  });

  // Carosello giochi demo
  function createGameCard(title, genre, image) {
    const card = document.createElement("div");
    card.className = "game-card";
    card.innerHTML = `
      <img src="${image}" alt="${title}" class="game-image" />
      <div class="game-info">
        <div class="game-title">${title}</div>
        <div class="game-rating">
          <div class="stars">⭐⭐⭐⭐⭐</div>
          <span>5.0</span>
        </div>
        <div class="game-genre">${genre}</div>
      </div>
    `;
    return card;
  }

  const topRated = document.getElementById("topRatedGames");
  const newReleases = document.getElementById("newReleasesGames");

  const sampleGames = [
    { title: "Cyberpunk 2077", genre: "RPG", image: "/pics/cyberpunk.jpg" },
    { title: "God of War", genre: "Azione", image: "/pics/godofwar.jpg" },
    { title: "Ghost of Tsushima", genre: "Avventura, Azione", image: "/pics/ghostoftsushima1.jpg" },
    { title: "The Last of Us", genre: "Horror, Avventura", image: "/pics/thelastofus1.jpg" }
  ];

  sampleGames.forEach(game => {
    topRated.appendChild(createGameCard(game.title, game.genre, game.image));
    newReleases.appendChild(createGameCard(game.title, game.genre, game.image));
  });

  // Filtro interattivo base (log stampa valori selezionati)
  const applyFiltersBtn = document.querySelector(".filter-actions .button-primary");
  applyFiltersBtn.addEventListener("click", () => {
    const genre = document.getElementById("genre").value;
    const platform = document.getElementById("platform").value;
    const rating = document.getElementById("rating").value;
    const year = document.getElementById("year").value;

    console.log("Filtri applicati:", { genre, platform, rating, year });
    alert(`Filtri selezionati:\nGenere: ${genre || 'Tutti'}\nPiattaforma: ${platform || 'Tutte'}\nVoto: ${rating || 'Qualsiasi'}\nAnno: ${year || 'Qualsiasi'}`);
  });

  // Bottone Reimposta
  document.querySelector(".filter-actions .button-secondary").addEventListener("click", () => {
    document.getElementById("genre").value = "";
    document.getElementById("platform").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("year").value = "";
  });

  // Modale login/registrazione
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-modal">&times;</span>
      <h2>Accesso</h2>
      <form class="auth-form">
        <input type="email" placeholder="Email" required>
        <input type="password" placeholder="Password" required>
        <button class="button button-primary" type="submit">Accedi</button>
      </form>
    </div>
  `;
  document.body.appendChild(modal);

  const closeModal = modal.querySelector(".close-modal");
  const authForm = modal.querySelector(".auth-form");

  document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById("loginBtn");
    const modal = document.getElementById("modal"); // Assicurati che il modal esista

    if (loginBtn && modal) {
        loginBtn.addEventListener("click", () => {
            modal.style.display = "flex";
        });
    } else {
        console.error("Elementi non trovati!");
    }
});


  registerBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    modal.querySelector("h2").textContent = "Registrazione";
    modal.querySelector(".button-primary").textContent = "Registrati";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  authForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Funzionalità demo. Accesso simulato!");
    modal.style.display = "none";
  });
});
