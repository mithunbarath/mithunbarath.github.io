document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  let animationFrameId;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particlesArray = [];
  const numberOfParticles = 100;

  class Particle {
    constructor(x, y, size, speedX, speedY) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speedX = speedX;
      this.speedY = speedY;
    }
    draw() {
      ctx.fillStyle = '#64ffda';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
    update() {
      if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
      if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
      this.x += this.speedX;
      this.y += this.speedY;
      this.draw();
    }
  }

  function init() {
    particlesArray = [];
    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 1.5 + 0.5;
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let speedX = Math.random() * 0.4 - 0.2;
      let speedY = Math.random() * 0.4 - 0.2;
      particlesArray.push(new Particle(x, y, size, speedX, speedY));
    }
  }

  function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
          for (let b = a; b < particlesArray.length; b++) {
              let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
                           + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
              if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                  opacityValue = 1 - (distance / 20000);
                  ctx.strokeStyle = `rgba(100, 255, 218, ${opacityValue})`;
                  ctx.lineWidth = 0.5;
                  ctx.beginPath();
                  ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                  ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                  ctx.stroke();
              }
          }
      }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
      particlesArray[i].update();
    }
    connect();
    animationFrameId = requestAnimationFrame(animate);
  }

  init();
  animate();

  const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
  };

  window.addEventListener('resize', handleResize);

  // Clean up function is not directly replicable, but the script will stop on page unload.
});
