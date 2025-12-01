import React, { useEffect, useRef } from 'react';

const SpaceSnowBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const particles: { x: number; y: number; z: number; size: number }[] = [];
    const particleCount = 400;
    const speed = 2;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width,
        y: (Math.random() - 0.5) * height,
        z: Math.random() * width,
        size: Math.random() * 2
      });
    }

    const render = () => {
      // Clear with trail effect for "warp" feel
      ctx.fillStyle = 'rgba(0, 35, 102, 0.4)'; // #002366 with opacity
      ctx.fillRect(0, 0, width, height);

      particles.forEach(p => {
        // Move particle towards viewer
        p.z -= speed;

        if (p.z <= 0) {
          p.z = width;
          p.x = (Math.random() - 0.5) * width;
          p.y = (Math.random() - 0.5) * height;
        }

        // Perspective projection
        const k = 250 / p.z; // Depth factor
        const px = p.x * k + width / 2;
        const py = p.y * k + height / 2;
        const sz = p.size * k;

        // Draw particle
        // Alpha based on depth
        const alpha = (1 - p.z / width);
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.arc(px, py, sz, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default SpaceSnowBackground;