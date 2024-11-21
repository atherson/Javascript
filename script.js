window.addEventListener("load", function () {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
    
    const themeSelector = document.getElementById("theme");
    if (themeSelector) {
        themeSelector.value = savedTheme;
        themeSelector.addEventListener("change", function () {
            const selectedTheme = this.value;
            localStorage.setItem("theme", selectedTheme);
            applyTheme(selectedTheme);
        });
    }
});

function saveName() {
    const nameInput = document.getElementById("name");
    if (nameInput.value==="") {
        alert("Please enter your name");
        localStorage.setItem("name", nameInput.value);
    }
        else if (nameInput.value!=="") {
            localStorage.setItem("name", nameInput.value);
            alert("Your name has been saved");
            alert('Welcome Back!! ' + localStorage.getItem("name"));

        }       
    }


function applyTheme(theme) {
    const typingTextElement = document.getElementById("typing-text");
    
    if (theme === "light") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        if (typingTextElement) typingTextElement.style.color = "black";
    } else if (theme === "dark") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        if (typingTextElement) typingTextElement.style.color = "white";
    }
}


function navigateTo(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
}


const texts = ["This is a typing animation", "JavaScript is Fun to use", "console.log('Hello World') which prints 'Hello World' on the console"];
const typingSpeed = 100;
const delayBetweenTexts = 2000;
let textIndex = 0; 
let charIndex = 0;


function typeText() {
    const typingTextElement = document.getElementById("typing-text");
    
    if (typingTextElement) {
       
        typingTextElement.textContent = texts[textIndex].substring(0, charIndex + 1);
        charIndex++;

        
        if (charIndex === texts[textIndex].length) {
            
            setTimeout(deleteText, delayBetweenTexts);
        } else {
           
            setTimeout(typeText, typingSpeed);
        }
    }
}

function deleteText() {
    const typingTextElement = document.getElementById("typing-text");

    if (typingTextElement) {
       
        typingTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;

        
        if (charIndex === 0) {
            
            textIndex = (textIndex + 1) % texts.length;
           
            setTimeout(typeText, typingSpeed);
        } else {
            
            setTimeout(deleteText, typingSpeed / 2); 
        }
    }
}


window.addEventListener("load", function () {
    if (document.getElementById("typing-text")) {
        typeText();
    }
});
    
    const eventDate = new Date("November 6, 3000 23:59:59").getTime();

    
    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const timeRemaining = eventDate - now;

        
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

       
        document.getElementById("countdown").textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

        
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").textContent = "The event has started!";
        }
    }, 1000);