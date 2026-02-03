window.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const container = document.getElementById("container");
  const music = document.getElementById("music");

  if (!yesBtn || !music) {
    console.error("JS non collegato correttamente");
    return;
  }

  yesBtn.addEventListener("click", () => {
    // Mostra il testo
    container.innerHTML = `
      <h1 class="final-text">Lo sapevo!</h1>
    `;

    // Avvia la musica
    music.currentTime = 0;
    music.play().catch(err => {
      console.error("Audio bloccato:", err);
    });

    // Fuochi
    for (let i = 0; i < 60; i++) {
      const spark = document.createElement("div");
      spark.className = "spark";
      spark.style.left = Math.random() * 100 + "vw";
      spark.style.top = Math.random() * 100 + "vh";
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 2000);
    }
  });

  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
});
