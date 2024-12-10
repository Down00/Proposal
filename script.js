const intro = document.getElementById('intro');
const secondIntro = document.getElementById('second-intro');
const question = document.getElementById('question');
const finalButtons = document.getElementById('final-buttons');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const singleYesBtn = document.getElementById('single-yes-btn');
const singleNoBtn = document.getElementById('single-no-btn');
const message = document.getElementById('message');
const heart = document.getElementById('heart');
const cryingGif = document.getElementById('crying-gif');
const particlesContainer = document.getElementById('particles');

// First intro fade-out, then show "Are you single?"
setTimeout(() => {
  intro.style.display = 'none';
  secondIntro.style.display = 'block';
}, 3000); // Wait 3 seconds

// Handle "Yes" click for "Are you single?"
singleYesBtn.addEventListener('click', () => {
  secondIntro.style.display = 'none';
  question.style.display = 'block';
  finalButtons.style.display = 'flex';
});

// Handle "No" click for "Are you single?"
singleNoBtn.addEventListener('click', () => {
  // Hide "Are you single?" and buttons
  secondIntro.style.opacity = '0';
  
  // Show crying GIF
  cryingGif.style.display = 'block';
  cryingGif.innerHTML = '<img src="https://media.tenor.com/Mw5q8hX6NnIAAAAj/bubu-dudu-bubu.gif" alt="Crying" />';
  
  // After 2 seconds, hide crying GIF and bring back text/buttons
  setTimeout(() => {
    cryingGif.style.display = 'none';
    secondIntro.style.opacity = '1';
  }, 2000); // 2 seconds
});

yesBtn.addEventListener('click', () => {
  // Hide "Can you be my gf?" text
  question.style.display = 'none';

  // Update message content and style
  message.textContent = 'SM Bicutan entrance at 4pm';
  message.style.display = 'block';

  // Show the heart GIF
  heart.style.display = 'block';

  // Hide the buttons
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';

  // Generate particles for a celebratory effect (optional)
  generateParticles();
});


// Particle Effect
function generateParticles() {
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particlesContainer.appendChild(particle);

    const x = Math.random() * window.innerWidth;
    const delay = Math.random() * 2 + 's';
    const size = Math.random() * 5 + 5;

    particle.style.left = x + 'px';
    particle.style.animationDuration = delay;

    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    setTimeout(() => {
      particle.remove();
    }, parseFloat(delay) * 1000);
  }
}