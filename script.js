let slides = document.querySelectorAll(".slide");
let current = 0;

function nextSlide() {
  slides[current].classList.remove("active");
  current++;
  if(current<slides.length) slides[current].classList.add("active");
  if(current===slides.length-1) setTimeout(showSurprise,1000);
}

function prevSlide(){
  slides[current].classList.remove("active");
  if(current>0) current--;
  slides[current].classList.add("active");
}

// Play music when YES clicked
function playMusic() {
  let music = document.getElementById("bgMusic");
  music.play();
}

// Move NO button randomly
function moveNo() {
  let noBtn = document.querySelector(".heart-img.no");

  let x = Math.random() * (window.innerWidth - 120);
  let y = Math.random() * (window.innerHeight - 120);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}





// Flip for mobile
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.querySelector('.flip-inner').classList.toggle('flipped');
  });
});



function checkAnswer(step, correct) {
  let input = document.getElementById("q" + step).value.toLowerCase().trim();

  if(input === correct) {
    let steps = document.querySelectorAll(".quiz-step");
    steps[step - 1].classList.remove("active");

    if(step < steps.length){
      steps[step].classList.add("active");
    } else {
      alert("💖 We won in our love life! You know everything 😍");
      nextSlide();
    }

  } else {
    alert("😝 Wrong answer! Try again love ❤️");
  }
}






function toggleLetter(el) {
  el.classList.toggle("open");

  let sparkleContainer = el.querySelector(".sparkles");

  for (let i = 0; i < 7; i++) {
    let s = document.createElement("span");
    s.innerHTML = "✨";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = "50%";

    sparkleContainer.appendChild(s);

    setTimeout(() => s.remove(), 1000);
  }
}


<!--------------------------------------------------------------------->

// Jar Letters Logic
let currentLetter = 0;
const letters = document.querySelectorAll('.jar-container .letter');
const jarImg = document.getElementById('jarImg');
const jarSound = document.getElementById('jarSound');
const sparkleContainer = document.querySelector('.sparkle-container');

function createSparkle(x, y) {
  const s = document.createElement('div');
  s.classList.add('sparkle');
  s.style.left = x + 'px';
  s.style.top = y + 'px';
  s.innerHTML = '✨';
  sparkleContainer.appendChild(s);
  setTimeout(() => s.remove(), 1200);
}

jarImg.addEventListener('click', () => {
  if(currentLetter < letters.length){
    letters[currentLetter].classList.add('show');

    jarSound.currentTime = 0;
    jarSound.play();

    for(let i=0;i<5;i++){
      createSparkle(Math.random()*150, Math.random()*60);
    }
  }
});

letters.forEach((letter) => {
  letter.addEventListener('click', (e) => {
    e.stopPropagation();
    letter.classList.remove('show');
    currentLetter++;
    if(currentLetter >= letters.length) currentLetter = 0;
  });
});



<!--------------------------------------------------------------------->


/* Quiz */
function checkStep(step){
  let answers = {1:"2025-06-15",2:"2025-06-16",3:"2025-01-19",4:"08-07",5:"16"};
  let input = document.getElementById("ans"+step).value.trim();
  if(input===answers[step]){
    document.getElementById("step"+step).classList.remove("active");
    if(step<5) document.getElementById("step"+(step+1)).classList.add("active");
    else { alert("💖 We won in our love life 😍🎉"); nextSlide(); }
  } else alert("😝 Wrong answer! Try again love 💕");
}




<!--------------------------------------------------------------------->


function yesLove() {
  document.getElementById("popup").style.display = "flex";
}

function noLove() {
  alert("💔 No is not allowed 😘");
}

/* 💥 OK CLICK */
function startFireworks() {

  document.getElementById("popup").style.display = "none";

  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");

  canvas.style.display = "block";

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function Particle(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 3;
    this.color = "hsl(" + Math.random() * 360 + ",100%,60%)";
    this.vx = (Math.random() - 0.5) * 6;
    this.vy = (Math.random() - 0.5) * 6;
  }

  function createFirework() {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height / 2;

    for (let i = 0; i < 60; i++) {
      particles.push(new Particle(x, y));
    }
  }

  function animate() {
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.radius *= 0.97;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      if (p.radius < 0.2) particles.splice(i, 1);
    });

    requestAnimationFrame(animate);
  }

  setInterval(createFirework, 400);
  animate();

  /* 💖 AFTER 3 SEC → NEXT PAGE + VIDEO */
  setTimeout(() => {

    canvas.style.display = "none";

    // 👉 go to next slide
    nextSlide();

    // 👉 play next video
    document.getElementById("bgVideoNext").play();

  }, 3000);
}



function playMyVideo() {
  const video = document.getElementById("myVideo");
  video.play();
}




