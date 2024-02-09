let sentences = [
    {
        "sentence": "Ich _ traurig",
        "missingWord": "bin",
        "translation": "I am sad"
    },
    {
        "sentence": "Sie _ glücklich",
        "missingWord": "ist",
        "translation": "She is happy"
    },
    {
        "sentence": "Er _ groß",
        "missingWord": "ist",
        "translation": "He is tall"
    },
    {
        "sentence": "Sie _ Freunde",
        "missingWord": "sind",
        "translation": "They are friends"
    },
    {
        "sentence": "Wir _ in den Park",
        "missingWord": "gehen",
        "translation": "We go to the park"
    },
    {
        "sentence": "Sie _ klug",
        "missingWord": "ist",
        "translation": "She is smart"
    },
    {
        "sentence": "Es _ draußen",
        "missingWord": "regnet",
        "translation": "It is raining outside"
    },
    {
        "sentence": "Du _ heute glücklich",
        "missingWord": "bist",
        "translation": "You are happy today"
    },
    {
        "sentence": "Ich _ müde",
        "missingWord": "bin",
        "translation": "I am tired"
    },
    {
        "sentence": "Er _ Arzt",
        "missingWord": "ist",
        "translation": "He is a doctor"
    },
    {
        "sentence": "Sie _ Fußball",
        "missingWord": "spielen",
        "translation": "They play football"
    },
    {
        "sentence": "Wir _ Pizza",
        "missingWord": "essen",
        "translation": "We eat pizza"
    }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let shuffledSentences = [];
for (let i = 0; i < sentences.length; i++) {
    for (let j = 0; j < (i % 3 === 0 ? 2 : 1); j++) {
        shuffledSentences.push(sentences[i]);
    }
}

shuffleArray(shuffledSentences);

displayedSentences = getRandomSentences(24);

let currentIndex = 0;
let score = 0;

if (displayedSentences.length > 0) {
    displayCurrentSentence();
} else {
    document.getElementById('sentenceContainer').innerText = 'Coming soon';
    document.getElementById('answerForm').style.display = 'none';
}

document.getElementById('answerForm').addEventListener('submit', checkAnswer);

function displayCurrentSentence() {
    const germanSentenceContainer = document.getElementById('germanSentenceContainer');
    const englishSentenceContainer = document.getElementById('englishSentenceContainer');
    const currentSentence = displayedSentences[currentIndex];
    const germanSentenceWithBlank = currentSentence.sentence.replace(/_/, '<span class="blank">&nbsp;</span>');
    germanSentenceContainer.innerHTML = germanSentenceWithBlank;
    englishSentenceContainer.textContent = currentSentence.translation; // Используем поле translation
}

function getRandomSentences(numSentences) {
    let randomSentences = [];
    let tempArray = [];
    let questionsCount = {};

    while (tempArray.length < numSentences) {
        if (shuffledSentences.length === 0) {
            shuffledSentences = [...sentences];
            questionsCount = {};
        }

        let randomIndex = Math.floor(Math.random() * shuffledSentences.length);
        let selectedSentence = shuffledSentences[randomIndex];

        if (!questionsCount[selectedSentence.sentence]) {
            questionsCount[selectedSentence.sentence] = 0;
        }

        if (tempArray.length === 0 || (tempArray.length > 0 && tempArray[tempArray.length - 1].sentence !== selectedSentence.sentence)) {
            tempArray.push(selectedSentence);
            questionsCount[selectedSentence.sentence]++;

            if (questionsCount[selectedSentence.sentence] >= 2) {
                shuffledSentences = shuffledSentences.filter(question => question.sentence !== selectedSentence.sentence);
            }
        }
    }

    randomSentences = tempArray;
    return randomSentences;
}

function checkAnswer(event) {
    event.preventDefault();
    const userAnswer = document.getElementById('userAnswer').value;
    if (!userAnswer) {
        return;
    }
    if (userAnswer === displayedSentences[currentIndex].missingWord) {
        score++;
        updateScoreCounter();
        currentIndex++;
        if (currentIndex < displayedSentences.length) {
            displayCurrentSentence();
        } else {
            showToast('К сожалению, ваши задания закончились.', 'error');
            document.getElementById('sentenceContainer').innerText = 'Coming soon';
            document.getElementById('answerForm').style.display = 'none';
        }
    } else {
        showToast('Попробуйте еще раз!', 'warning');
    }
    document.getElementById('userAnswer').value = '';
}

function updateScoreCounter() {
    let totalQuestions = shuffledSentences.length;
    let answeredQuestions = currentIndex + 1;
    document.getElementById('score').innerText = `${answeredQuestions}/${totalQuestions}`;
}

function showToast(message, type) {
    Swal.fire({
        text: message,
        icon: type === 'error' ? 'error' : 'warning',
        position: 'top',
        showConfirmButton: true,
        timer: 3000
    });
}