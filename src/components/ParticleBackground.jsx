import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    /* ── Mouse ── */
    const mouse = { x: null, y: null, radius: 180 };
    const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    /* ── Star particles ── */
    let stars = [];

    class Star {
      constructor(x, y, size, baseOpacity) {
        this.baseX = x; this.baseY = y;
        this.x = x;    this.y = y;
        this.size = size;
        this.baseOpacity = baseOpacity;
        this.opacity = baseOpacity;
        this.angle = Math.random() * Math.PI * 2;
        this.twinkleSpeed = Math.random() * 0.05 + 0.02;
      }

      update() {
        /* Twinkle */
        this.angle += this.twinkleSpeed;
        this.opacity = this.baseOpacity + Math.sin(this.angle) * 0.2;

        let fx = 0, fy = 0;

        /* Mouse repulsion */
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius && dist > 0) {
            const f = (mouse.radius - dist) / mouse.radius;
            fx -= (dx / dist) * f * 3;
            fy -= (dy / dist) * f * 3;
          }
        }

        /* Apply forces */
        this.x += fx;
        this.y += fy;

        /* Elastic return to base */
        this.x += (this.baseX - this.x) * 0.07;
        this.y += (this.baseY - this.y) * 0.07;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, this.opacity))})`;
        ctx.shadowBlur = this.size * 2.5;
        ctx.shadowColor = 'white';
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const initStars = () => {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 2000);
      for (let i = 0; i < count; i++) {
        stars.push(new Star(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 1.2 + 0.4,
          Math.random() * 0.5 + 0.2,
        ));
      }
    };

    /* ── Main loop ── */
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(s => { s.update(); s.draw(); });
    };

    const handleResize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };
    window.addEventListener('resize', handleResize);

    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-[#0B1220] to-[#0F172A]"
    />
  );
};

export default ParticleBackground;
