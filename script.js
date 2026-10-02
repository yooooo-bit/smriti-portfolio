/* =========================
   TYPING EFFECT
========================= */

const typingText =
    document.getElementById("typing-text");


const words = [

    "Cybersecurity Student",

    "Ethical Hacking Enthusiast",

    "Network Security Learner",

    "Future Security Professional"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const word =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            word.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            word.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingText.textContent =
            word.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex === words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 45 : 80
    );

}


typeEffect();



/* =========================
   TERMINAL
========================= */

const terminal =
    document.getElementById(
        "terminal-output"
    );


const terminalLines = [

    '<span class="terminal-green">smriti@kali</span>:~$ whoami',

    '<span class="terminal-muted">cybersecurity_student</span>',

    '<span class="terminal-green">smriti@kali</span>:~$ skills',

    '<span class="terminal-muted">Python | Linux | Networking | Ethical Hacking</span>',

    '<span class="terminal-green">smriti@kali</span>:~$ status',

    '<span class="terminal-green">[+] Systems ready</span>',

    '<span class="terminal-green">[+] Learning mode active</span>',

    '<span class="terminal-green">[+] Security mindset: ON</span>',

    '<span class="terminal-green">smriti@kali</span>:~$ <span class="terminal-blue">_</span>'

];


let terminalIndex = 0;


function addTerminalLine() {

    if (
        terminalIndex >=
        terminalLines.length
    ) {

        return;

    }


    const line =
        document.createElement("p");


    line.className =
        "terminal-line";


    line.innerHTML =
        terminalLines[terminalIndex];


    terminal.appendChild(line);


    terminalIndex++;


    setTimeout(
        addTerminalLine,
        500
    );

}


setTimeout(
    addTerminalLine,
    500
);



/* =========================
   SCROLL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(
    (element) => {

        observer.observe(element);

    }
);



/* =========================
   CURSOR GLOW
========================= */

const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );


document.addEventListener(
    "mousemove",
    (event) => {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }
);



/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.querySelector(
        ".menu-button"
    );


const navLinks =
    document.querySelector(
        ".nav-links"
    );


menuButton.addEventListener(
    "click",
    () => {

        navLinks.classList.toggle(
            "active"
        );

    }
);


document
    .querySelectorAll(
        ".nav-links a"
    )
    .forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    navLinks.classList.remove(
                        "active"
                    );

                }
            );

        }
    );