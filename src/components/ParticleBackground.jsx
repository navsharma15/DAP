import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const mouse = {
      x: null,
      y: null,
      radius: 250 // Radius of cursor lens effect
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    let particles = [];
    let cols = 0;
    let rows = 0;
    const spacing = 35; // Denser grid for better lens effect

    class Particle {
      constructor(x, y) {
        this.baseX = x;
        this.baseY = y;
        this.currentX = x;
        this.currentY = y;
        
        // Very small default dots
        this.baseRadius = 0.8;
        this.radius = this.baseRadius;
        this.targetRadius = this.baseRadius;
        
        // Faint base opacity
        this.baseOpacity = 0.25;
        this.opacity = this.baseOpacity;
        this.targetOpacity = this.baseOpacity;
      }

      update() {
        // Unique Cursor Effect: 3D Lens / Bubble
        if (mouse.x !== null) {
          const dx = this.baseX - mouse.x;
          const dy = this.baseY - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // Sine wave curve creates a rounded "bubble" distortion
            const bubble = Math.sin(force * Math.PI); 
            
            // Dots scale up and brighten
            this.targetRadius = this.baseRadius + bubble * 2.5; 
            this.targetOpacity = this.baseOpacity + bubble * 0.75;
            
            // Push dots gently outward to complete the 3D sphere illusion
            this.targetX = this.baseX + (dx / distance) * bubble * 15;
            this.targetY = this.baseY + (dy / distance) * bubble * 15;
          } else {
            this.targetRadius = this.baseRadius;
            this.targetOpacity = this.baseOpacity;
            this.targetX = this.baseX;
            this.targetY = this.baseY;
          }
        } else {
          this.targetRadius = this.baseRadius;
          this.targetOpacity = this.baseOpacity;
          this.targetX = this.baseX;
          this.targetY = this.baseY;
        }

        // Smooth spring animations toward targets
        this.radius += (this.targetRadius - this.radius) * 0.15;
        this.opacity += (this.targetOpacity - this.opacity) * 0.15;
        this.currentX += (this.targetX - this.currentX) * 0.15;
        this.currentY += (this.targetY - this.currentY) * 0.15;
      }

      draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.currentX, this.currentY, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148, 166, 121, ${this.opacity})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      cols = Math.ceil(canvas.width / spacing) + 1;
      rows = Math.ceil(canvas.height / spacing) + 1;
      
      // Center the grid perfectly
      const offsetX = (canvas.width - (cols - 1) * spacing) / 2;
      const offsetY = (canvas.height - (rows - 1) * spacing) / 2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          particles.push(new Particle(offsetX + c * spacing, offsetY + r * spacing));
        }
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resize);
    resize(); // Initialize on mount

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ONLY dots (no lines)
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(ctx);
      }
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-[#4f633c]"
    />
  );
};

export default ParticleBackground;
