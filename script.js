const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const container = document.getElementById("container");
const music = document.getElementById("music");

yesBtn.addEventListener("click", () => {
  // Cambia tutto il contenuto
  container.innerHTML = `
    <h1 class="final-text">Lo sapevo!</h1>
  `;

  // Avvia la musica (dal ritornello)
  music.play();

  // Fuochi d'artificio
  for (let i = 0; i < 60; i++) {
    const spark = document.createElement("div");
    spark.classList.add("spark");
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
