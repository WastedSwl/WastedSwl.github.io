let sentences = [
    {
        "sentence": "Mein Lieblingsbuch _ ein Klassiker der Weltliteratur.",
        "missingWord": "ist",
        "translation": "My favorite book is a classic of world literature."
        },
        {
        "sentence": "Mein _ Eindruck von der Stadt war sehr positiv.",
        "missingWord": "erster",
        "translation": "My first impression of the city was very positive."
        },
        {
        "sentence": "Unser Besuch im Museum _ äußerst interessant.",
        "missingWord": "war",
        "translation": "Our visit to the museum was extremely interesting."
        },
        {
        "sentence": "In der Schule lerne _ gerne neue Dinge.",
        "missingWord": "ich",
        "translation": "I like learning new things in school."
        },
        {
        "sentence": "Paris _ bekannt für seine beeindruckende Architektur.",
        "missingWord": "ist",
        "translation": "Paris is known for its impressive architecture."
        },
        {
        "sentence": "Gestern _ ein sonniger Tag und ich genoss es, draußen zu sein.",
        "missingWord": "war",
        "translation": "Yesterday was a sunny day and I enjoyed being outside."
        },
        {
        "sentence": "Eine Tasse Tee am Abend entspannt _ immer.",
        "missingWord": "mich",
        "translation": "A cup of tea in the evening always relaxes me."
        },
        {
        "sentence": "Unser unvergesslicher Ausflug in die Berge bleibt mir _ in Erinnerung.",
        "missingWord": "immer",
        "translation": "Our unforgettable trip to the mountains always stays in my memory."
        },
        {
        "sentence": "Das Auslandssemester _ eine einzigartige Erfahrung für mich.",
        "missingWord": "war",
        "translation": "The semester abroad was a unique experience for me."
        },
        {
        "sentence": "Der Himmel _ am Abend besonders schön.",
        "missingWord": "war",
        "translation": "The sky was particularly beautiful in the evening."
        },
        {
        "sentence": "Der Unterricht in Geschichte _ besonders interessant.",
        "missingWord": "war",
        "translation": "The history lesson was particularly interesting."
        },
        {
        "sentence": "Den Kuchen habe _ gestern gebacken.",
        "missingWord": "ich",
        "translation": "I baked the cake yesterday."
        },
        {
        "sentence": "Ich liebe es, am Wochenende Zeit _ meiner Familie zu verbringen.",
        "missingWord": "mit",
        "translation": "I love spending time with my family on weekends."
        },
        {
        "sentence": "Meiner Meinung nach sollten wir mehr _ Umweltschutz sprechen.",
        "missingWord": "über",
        "translation": "In my opinion, we should talk more about environmental protection."
        },
        {
        "sentence": "Meine Kindheitserinnerungen _ voller Glücksmomente.",
        "missingWord": "sind",
        "translation": "My childhood memories are full of happy moments."
        },
        {
        "sentence": "Sie _ eine Auszeichnung für ihre Arbeit im Unternehmen.",
        "missingWord": "erhielt",
        "translation": "She received an award for her work at the company."
        },
        {
        "sentence": "Die Begegnung mit diesem Autor _ mein Denken nachhaltig.",
        "missingWord": "prägte",
        "translation": "Meeting this author shaped my thinking profoundly."
        },
        {
        "sentence": "Mich interessiert besonders die Kunst des 20. Jahrhunderts.",
        "missingWord": "mich",
        "translation": "I am particularly interested in 20th-century art."
        },
        {
        "sentence": "Wir müssen nachhaltige Lösungen _ die Umwelt finden.",
        "missingWord": "für",
        "translation": "We need to find sustainable solutions for the environment."
        },
        {
        "sentence": "Bis zum Wochenende muss ich noch einige Aufgaben _.",
        "missingWord": "erledigen",
        "translation": "I still have some tasks to complete by the weekend."
        },
        {
        "sentence": "Der Abschluss der Verhandlungen _ kurz bevor.",
        "missingWord": "steht",
        "translation": "The conclusion of the negotiations is imminent."
        },
        {
        "sentence": "Meiner Ansicht nach sollten wir das Projekt sofort _.",
        "missingWord": "starten",
        "translation": "In my view, we should start the project immediately."
        },
        {
        "sentence": "Die Ausbildung zum Facharbeiter dauert _ Jahre.",
        "missingWord": "drei",
        "translation": "The training for skilled workers takes three years."
        },
        {
        "sentence": "Gestern _ ich einen interessanten Artikel gelesen.",
        "missingWord": "habe",
        "translation": "Yesterday, I read an interesting article."
        },
        {
        "sentence": "Sie arbeitet hart, um ihre Ziele zu _.",
        "missingWord": "erreichen",
        "translation": "She works hard to achieve her goals."
        },
{"sentence": "Ich _ den ganzen Tag hart gearbeitet.",
"missingWord": "habe",
"translation": "I worked hard all day."
},
{
"sentence": "Zum Glück hatte ich genug Zeit, um alles rechtzeitig zu _.",
"missingWord": "erledigen",
"translation": "Fortunately, I had enough time to do everything on time."
},
{
"sentence": "Zum Geburtstag meiner Schwester haben wir eine Überraschungsparty _.",
"missingWord": "organisiert",
"translation": "We organized a surprise party for my sister's birthday."
},
{
"sentence": "Meiner Meinung nach sollten wir öfter solche Veranstaltungen _.",
"missingWord": "besuchen",
"translation": "In my opinion, we should attend such events more often."
},
{
"sentence": "Meine Mutter kocht _ besten.",
"missingWord": "am",
"translation": "My mother cooks the best."
},
{
"sentence": "Wir _ gestern eine neue Wohnung gefunden.",
"missingWord": "haben",
"translation": "We found a new apartment yesterday."
},
{
"sentence": "Wir alle müssen unseren Beitrag _ Umweltschutz leisten.",
"missingWord": "zum",
"translation": "We all have to contribute to environmental protection."
},
{
"sentence": "Eine gute Freundin zu haben, _ unbezahlbar.",
"missingWord": "ist",
"translation": "Having a good friend is priceless."
},
{
"sentence": "Die Überraschungsparty _ ein voller Erfolg.",
"missingWord": "war",
"translation": "The surprise party was a complete success."
},
{
"sentence": "Das Eintritt zum Konzert _ nicht billig.",
"missingWord": "war",
"translation": "The admission to the concert was not cheap."
},
{
"sentence": "Zurzeit lese ich gerne Bücher _ Geschichte.",
"missingWord": "über",
"translation": "Currently, I enjoy reading books about history."
},
{
"sentence": "Diese Frage _ nicht einfach zu beantworten.",
"missingWord": "ist",
"translation": "This question is not easy to answer."
},
{
"sentence": "Das Geschenk _ für meinen Geburtstag.",
"missingWord": "war",
"translation": "The gift was for my birthday."
},
{
"sentence": "Mitglieder haben Zugang _ exklusiven Angeboten.",
"missingWord": "zu",
"translation": "Members have access to exclusive offers."
},
{
"sentence": "Die Broschüre können Sie _ herunterladen.",
"missingWord": "kostenlos",
"translation": "You can download the brochure for free."
},
{
"sentence": "In der Stadt gibt es viele interessante Sehenswürdigkeiten _.",
"missingWord": "In",
"translation": "In the city, there are many interesting sights."
},
{
"sentence": "In meiner Freizeit spiele _ gerne Gitarre.",
"missingWord": "ich",
"translation": "In my leisure time, I enjoy playing the guitar."
},
{
"sentence": "Ich engagiere _ aktiv in unserer Gemeinde.",
"missingWord": "mich",
"translation": "I actively engage in our community."
},
{
"sentence": "Mich interessiert besonders die politische Situation _ Nahen Osten.",
"missingWord": "im",
"translation": "I am particularly interested in the political situation in the Middle East."
},
{
"sentence": "Ich koche _ neue Rezepte aus.",
"missingWord": "gerne",
"translation": "I like to cook new recipes."
},
{
"sentence": "In fernen Ländern gibt es oft exotische Gerichte _.",
"missingWord": "In",
"translation": "In distant countries, there are often exotic dishes."
},
{
"sentence": "In vielen Ländern herrscht derzeit politische Instabilität _.",
"missingWord": "countries",
"translation": "There is currently political instability in many countries."
},
{
"sentence": "Das Gymnasium, _ ich besuchte, hatte einen großen Campus.",
"missingWord": "das",
"translation": "The high school I attended had a large campus."
},
{
"sentence": "Das Essen _ Restaurant _ köstlich.",
"missingWord": "im",
"translation": "The food at the restaurant was delicious."
},
{
"sentence": "Ich habe heute Abend keine Zeit, etwas _ unternehmen.",
"missingWord": "zu",
"translation": "I don't have time to do anything tonight."
},
{
"sentence": "Ich besuchte letztes Jahr eine Ausstellung _ moderne Kunst.",
"missingWord": "über",
"translation": "Last year, I visited an exhibition on modern art."
},
{
"sentence": "Die Stadt _ eine Vielzahl kultureller Veranstaltungen an.",
"missingWord": "bot",
"translation": "The city offered a variety of cultural events."
},
{
"sentence": "Eine gute Ausbildung _ der Schlüssel _ Erfolg.",
"missingWord": "ist, zum",
"translation": "A good education is the key to success."
},
{
"sentence": "Die Stadt bietet eine vielfältige Auswahl _ Freizeitmöglichkeiten.",
"missingWord": "an",
"translation": "The city offers a diverse range of leisure activities."
},
{
"sentence": "Die Auswahl _ Restaurants _ der Stadt _ beeindruckend.",
"missingWord": "an, in, ist",
"translation": "The selection of restaurants in the city is impressive."
},
{
"sentence": "An der Universität habe _ viele interessante Menschen kennengelernt.",
"missingWord": "ich",
"translation": "At university, I met many interesting people."
},
{
"sentence": "Die Schule bietet eine breite Palette _ Fächern _.",
"missingWord": "an, an",
"translation": "The school offers a wide range of subjects."
},
{
"sentence": "Ich freue mich schon _ das nächste Treffen.",
"missingWord": "auf",
"translation": "I'm looking forward to the next meeting."
},
{
"sentence": "Ich bin der Meinung, dass wir das Projekt unterstützen _.",
"missingWord": "sollten",
"translation": "I am of the opinion that we should support the project."
},
{
"sentence": "Das Essen _ sehr lecker.",
"missingWord": "war",
"translation": "The food was very delicious."
},
{
"sentence": "Meine Eltern _ sehr stolz _ mich.",
"missingWord": "sind, auf",
"translation": "My parents are very proud of me."
},
{
"sentence": "Auf dem Tisch stand _ Vase _ frischen Blumen.",
"missingWord": "eine, mit",
"translation": "On the table, there was a vase with fresh flowers."
},
{
"sentence": "Die Leistung _ Teams _ beeindruckend.",
"missingWord": "des, war",
"translation": "The team's performance was impressive."
},
{
"sentence": "Die Unterstützung _ Familie bedeutet mir viel.",
"missingWord": "meiner",
"translation": "The support of my family means a lot to me."
},
{
"sentence": "Die Arbeit _ Garten macht mir Spaß.",
"missingWord": "im",
"translation": "Working in the garden is fun for me."
},
{
"sentence": "Ich habe gestern einen langen Spaziergang _.",
"missingWord": "gemacht",
"translation": "I went for a long walk yesterday."
},
{
"sentence": "Von dieser Idee _ ich sehr begeistert.",
"missingWord": "bin",
"translation": "I am very excited about this idea."
},
{
"sentence": "Meinem Freund habe _ zum Geburtstag ein Buch geschenkt.",
"missingWord": "ich",
"translation": "I gave a book to my friend for his birthday."
}
]

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
        if (Object.keys(questionsCount).length === sentences.length) {
            break; // Все предложения уже были выбраны три раза
        }

        let randomIndex = Math.floor(Math.random() * shuffledSentences.length);
        let selectedSentence = shuffledSentences[randomIndex];

        if (!questionsCount[selectedSentence.sentence]) {
            questionsCount[selectedSentence.sentence] =  0;
        }

        questionsCount[selectedSentence.sentence]++;

        if (questionsCount[selectedSentence.sentence] <=  3) {
            tempArray.push(selectedSentence);
        }

        if (questionsCount[selectedSentence.sentence] ===  3) {
            shuffledSentences = shuffledSentences.filter(question => question.sentence !== selectedSentence.sentence);
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

let initialTotalQuestions = sentences.length * 3; // Добавляем эту строку перед началом игры

function updateScoreCounter() {
    let answeredQuestions = currentIndex +  1;
    document.getElementById('score').innerText = `${answeredQuestions}/${initialTotalQuestions}`;
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

let totalElements = sentences.length;
console.log(`В массиве sentences ${totalElements} элементов.`);