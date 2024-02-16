let score = 0;
let displayedSentences = [];
let initialTotalQuestions = 0;

function getRandomSentenceFromServer() {
  fetch("/api/random-sentence")
    .then((response) => response.json())
    .then((data) => {
      displayedSentences = [data];
      initialTotalQuestions = data.totalQuestions;
      console.log(displayedSentences[0].missingWord.toLowerCase());
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

document.addEventListener("DOMContentLoaded", function () {
  getRandomSentenceFromServer();
});

function displayCurrentSentence() {
  const germanSentenceContainer = document.getElementById(
    "germanSentenceContainer"
  );
  const englishSentenceContainer = document.getElementById(
    "englishSentenceContainer"
  );
  const currentSentence = displayedSentences[0];
  const words = currentSentence.sentence.split(" ");

  germanSentenceContainer.innerHTML = "";
  words.forEach((word, index) => {
    if (word === "_") {
      const inputElement = document.createElement("input");
      inputElement.type = "text";
      inputElement.maxLength = "1";
      inputElement.className = "input-letter";
      inputElement.addEventListener("input", handleInput);
      germanSentenceContainer.append(inputElement);
    } else {
      const spanElement = document.createElement("span");
      spanElement.textContent = word + " ";
      germanSentenceContainer.append(spanElement);
    }
  });

  englishSentenceContainer.textContent = currentSentence.translation;

  const firstInput = germanSentenceContainer.querySelector(".input-letter");
  if (firstInput) {
    firstInput.focus();
  }
}

document.addEventListener("keydown", function (event) {
  const activeElement = document.activeElement;
  if (event.key === "Enter") {
    event.preventDefault();
    checkAnswer();
  }
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    const sibling =
      event.key === "ArrowLeft"
        ? activeElement.previousElementSibling
        : activeElement.nextElementSibling;
    if (sibling && sibling.tagName === "INPUT") {
      sibling.focus();
    }
  } else if (event.key === "Backspace" && event.target.value === "") {
    event.preventDefault();
    const sibling =
      event.key === "Backspace"
        ? activeElement.previousElementSibling
        : activeElement.nextElementSibling;
    if (sibling && sibling.tagName === "INPUT") {
      sibling.focus();
      sibling.value = "";
    }
  }
});

function handleInput(event) {
  const inputElement = event.target;
  if (inputElement.value.length === 1) {
    const nextInput = inputElement.nextElementSibling;
    if (nextInput && nextInput.tagName === "INPUT") {
      nextInput.focus();
    }
  }
}

document.getElementById("answerForm").addEventListener("submit", checkAnswer);

function collectInputValues() {
  const inputs = document.querySelectorAll(".input-letter");
  let answer = "";
  inputs.forEach((input) => {
    answer += input.value;
  });
  return answer;
}

function checkAnswer(event) {
  if (event) {
    event.preventDefault();
  }
  const userAnswer = collectInputValues();
  if (!userAnswer) {
    return;
  }
  const container = document.querySelector(".container");
  if (
    userAnswer.toLowerCase() === displayedSentences[0].missingWord.toLowerCase()
  ) {
    score++;
    updateScoreCounter(score);
    container.classList.add("correct");
    setTimeout(() => {
      container.classList.remove("correct");
      getRandomSentenceFromServer();
    }, 2000);
  } else {
    container.classList.add("incorrect");
    setTimeout(() => {
      container.classList.remove("incorrect");
      showToast("Попробуйте еще раз!", "warning");
    }, 2000);
  }
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
