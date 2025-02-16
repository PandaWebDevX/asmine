document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded Successfully");

    const quizData = [
        { question: "What's the date we met?", answer: "17/02/2023" }, // Replace with actual
        { question: "What's my favorite food?", answer: "biryani" }, // Replace with actual
        
        { question: "What's my favorite color?", answer: "blue" }, // Replace with actual
        { question: "Where did we first talk on?", answer: "bottled" }, // New question
        { question: "What's my biggest dream?", answer: "to marry me and have kids" }, // New question
        { question: "how much i love you? ", answer: "beyound my imagination" } // New question
    ];

    let currentQuestion = 0;

    function loadQuestion() {
        if (currentQuestion < quizData.length) {
            document.getElementById("question").innerText = quizData[currentQuestion].question;
        } else {
            showFinalMessage();
        }
    }

    window.checkAnswer = function () {
        const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
        const correctAnswer = quizData[currentQuestion].answer.toLowerCase();
        const feedback = document.getElementById("feedback");

        if (userAnswer === correctAnswer) {
            feedback.innerHTML = "✅ Correct! 🥰";
            currentQuestion++;
            setTimeout(() => {
                document.getElementById("answer").value = "";
                feedback.innerHTML = "";
                loadQuestion();
            }, 1000);
        } else {
            feedback.innerHTML = "❌ Try again, my love! 😘";
        }
    };

    function showFinalMessage() {
        document.body.innerHTML = `
            <div id="final-popup">
                <h1>🎉 Congratulations, Yasmine! ❤️</h1>
                <p>You got all the answers right! You truly know me better than anyone! 🥰</p>
                <p>I love you so much! 💕</p>
                <div class="hearts-container"></div>
            </div>
        `;

        createFloatingHearts();
    }

    function createFloatingHearts() {
        const heartsContainer = document.querySelector(".hearts-container");
        for (let i = 0; i < 30; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 3 + "s";
            heartsContainer.appendChild(heart);
        }
    }

    loadQuestion();
});
