function getRandomSentenceFromServer() {
  fetch("/api/random-sentence")
    .then((response) => response.json())
    .then((data) => {
      displayedSentences = [data];
      initialTotalQuestions = data.totalQuestions;
      if (displayedSentences.length > 0) {
        displayCurrentSentence();
      } else {
        document.getElementById("sentenceContainer").innerText = "Coming soon";
        document.getElementById("answerForm").style.display = "none";
      }
    })
    .catch((error) => {
      console.error("Error fetching random sentence:", error);
    });
}

getRandomSentenceFromServer();

function displayCurrentSentence() {
  const germanSentenceContainer = document.getElementById(
    "germanSentenceContainer"
  );
  const englishSentenceContainer = document.getElementById(
    "englishSentenceContainer"
  );
  const currentSentence = displayedSentences[0];
  const germanSentenceWithBlank = currentSentence.sentence.replace(
    /_/,
    '<span class="blank">&nbsp;</span>'
  );
  germanSentenceContainer.innerHTML = germanSentenceWithBlank;
  englishSentenceContainer.textContent = currentSentence.translation;
}

document.getElementById("answerForm").addEventListener("submit", checkAnswer);

function checkAnswer(event) {
  event.preventDefault();
  const userAnswer = document.getElementById("userAnswer").value;
  if (!userAnswer) {
    return;
  }
  console.log(displayedSentences);
  if (userAnswer === displayedSentences[0].missingWord) {
    score++;
    updateScoreCounter(score);
    getRandomSentenceFromServer();
  } else {
    showToast("Попробуйте еще раз!", "warning");
  }
  document.getElementById("userAnswer").value = "";
}

function updateScoreCounter(score) {
  let answeredQuestions = score + 1;
  document.getElementById(
    "score"
  ).innerText = `${answeredQuestions}/${initialTotalQuestions}`;
}

function showToast(message, type) {
  Swal.fire({
    text: message,
    icon: type === "error" ? "error" : "warning",
    position: "top",
    showConfirmButton: true,
    timer: 3000,
  });
}
