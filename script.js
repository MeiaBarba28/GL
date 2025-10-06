// Fundo animado com corações flutuando
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');
let hearts = [];
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
function randomHeart() {
  return {
    x: Math.random() * canvas.width,
    y: canvas.height + 20,
    size: 18 + Math.random() * 18,
    speed: 1 + Math.random() * 1.5,
    alpha: 0.7 + Math.random() * 0.3,
    dx: (Math.random() - 0.5) * 0.8
  };
}
function drawHeart(x, y, size, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - size/2, x - size, y - size/2, x - size, y);
  ctx.bezierCurveTo(x - size, y + size, x, y + size*1.4, x, y + size*2);
  ctx.bezierCurveTo(x, y + size*1.4, x + size, y + size, x + size, y);
  ctx.bezierCurveTo(x + size, y - size/2, x, y - size/2, x, y);
  ctx.closePath();
  ctx.fillStyle = '#e75480';
  ctx.fill();
  ctx.restore();
}
function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (hearts.length < 40) {
    hearts.push(randomHeart());
  }
  for (let i = 0; i < hearts.length; i++) {
    let h = hearts[i];
    drawHeart(h.x, h.y, h.size, h.alpha);
    h.y -= h.speed;
    h.x += h.dx;
    if (h.y < -40 || h.x < -40 || h.x > canvas.width + 40) {
      hearts[i] = randomHeart();
      hearts[i].y = canvas.height + 20;
    }
  }
  requestAnimationFrame(animateHearts);
}
animateHearts();

// Contador de tempo juntos
const startDate = new Date('2024-10-06T00:00:00'); // Altere para a data do início do namoro
function updateCounter() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}
setInterval(updateCounter, 1000);
updateCounter();
// Para adicionar fotos e vídeos, edite o HTML ou use JavaScript para inserir elementos em #photos e #videos
