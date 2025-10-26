import React, { useEffect, useRef } from 'react';

const Hero = React.forwardRef<HTMLElement>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray: Particle[] = [];
    const numberOfParticles = 100;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor(x: number, y: number, size: number, speedX: number, speedY: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
      }
      draw() {
        ctx!.fillStyle = '#64ffda';
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
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
                    ctx!.strokeStyle = `rgba(100, 255, 218, ${opacityValue})`;
                    ctx!.lineWidth = 0.5;
                    ctx!.beginPath();
                    ctx!.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx!.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx!.stroke();
                }
            }
        }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
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

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };
  }, []);

  return (
    <section ref={ref} id="home" className="min-h-screen flex items-center justify-center home-bg relative overflow-hidden">
        <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
        <div className="container mx-auto px-6 z-10 text-center relative">
            <div className="max-w-3xl mx-auto animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-slate-light mb-4">
                    Mithun Barath M R.
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-slate">
                    I build things for the web and AI.
                </h2>
            </div>
        </div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;