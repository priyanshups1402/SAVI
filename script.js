// Typewriter Effect ke liye function
function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        document.getElementById("message").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true" class="cursor">|</span>';
        
        // Typing speed (30ms - fast but readable)
        setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
        }, 30);
    } else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
    }
}

function startExperience() {
    const audio = document.getElementById("bgMusic");
    const playBtn = document.getElementById("playBtn");
    const messageElement = document.getElementById("message");
    const fullText = messageElement.innerText;

    // 1. Play Music
    audio.play().catch(error => {
        console.log("Audio play failed: ", error);
    });

    // 2. Clear initial text for typewriter effect
    messageElement.innerText = "";
    
    // 3. Scroll smoothly to photos
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });

    // 4. Start Heart Animation
    setInterval(createHeart, 300);

    // 5. Start Typewriter effect
    setTimeout(() => {
        typeWriter(fullText, 0);
    }, 1000);

    // 6. Hide Play Button
    playBtn.style.opacity = "0";
    setTimeout(() => { playBtn.style.display = "none"; }, 500);
}

// Falling Hearts Animation Logic
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-5vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.opacity = Math.random();
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "1000";
    heart.style.transition = "transform 5s linear, opacity 5s linear";
    
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(110vh) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}
