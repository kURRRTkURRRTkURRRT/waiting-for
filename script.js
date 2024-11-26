// Countdown-Logik
const countdownText = document.querySelector(".countdown-text");
const startDate = new Date("November 26, 2024");
const endDate = new Date("December 21, 2024");
const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

// Berechne, wie viele Striche entfernt werden sollen
function updateCountdown() {
  const today = new Date();
  const daysElapsed = Math.min(
    Math.ceil((today - startDate) / (1000 * 60 * 60 * 24)),
    totalDays
  );

  const remainingBars = "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬".slice(
    0,
    totalDays - daysElapsed
  );

  countdownText.textContent = `⚠️⏳🤐${remainingBars}☎️💔`;
}

// Initiale Berechnung und tägliche Aktualisierung
updateCountdown();
setInterval(updateCountdown, 24 * 60 * 60 * 1000);
