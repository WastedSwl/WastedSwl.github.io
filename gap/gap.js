let score = 0;
let displayedSentences = [];
let initialTotalQuestions = 0;

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
  const germanSentenceContainer = document.getElementById("germanSentenceContainer");
  const englishSentenceContainer = document.getElementById("englishSentenceContainer");
  const currentSentence = displayedSentences[0];
  const words = currentSentence.sentence.split(" ");
  const blankIndex = words.indexOf("_");

  germanSentenceContainer.innerHTML = "";
  words.forEach((word, index) => {
    if (index === blankIndex) {
      const underscoreElement = document.createElement("span");
      underscoreElement.innerHTML = "_".repeat(currentSentence.missingWord.length).split('').join('&nbsp;') + " ";
      germanSentenceContainer.appendChild(underscoreElement);
    } else {
      const spanElement = document.createElement("span");
      spanElement.textContent = word + " ";
      if (index === blankIndex - 1 || index === blankIndex + 1) {
        spanElement.style.marginRight = "2px";
      }
      germanSentenceContainer.appendChild(spanElement);
    }
  });

  englishSentenceContainer.textContent = currentSentence.translation;
}

document.getElementById("answerForm").addEventListener("submit", checkAnswer);

function checkAnswer(event) {
  event.preventDefault();
  const userAnswer = document.getElementById("userAnswer").value;
  if (!userAnswer) {
    return;
  }
  const container = document.querySelector('.container');
  if (userAnswer.toLowerCase() === displayedSentences[0].missingWord.toLowerCase()) {
    score++;
    updateScoreCounter(score);
    container.classList.add('correct');
    setTimeout(() => {
      container.classList.remove('correct');
      getRandomSentenceFromServer();
    }, 2000);
  } else {
    container.classList.add('incorrect');
    setTimeout(() => {
      container.classList.remove('incorrect');
      showToast("Попробуйте еще раз!", "warning");
    }, 2000);
  }
  document.getElementById("userAnswer").value = "";
}

function updateScoreCounter(score) {
  let answeredQuestions = score + 1;
  document.getElementById("score").innerText = `${answeredQuestions}/${initialTotalQuestions}`;
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
