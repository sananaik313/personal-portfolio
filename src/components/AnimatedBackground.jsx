import { useEffect, useRef } from 'react';

/**
 * Light Rays + Perspective Grid Background
 * Recreates the premium dark tech aesthetic with:
 * - Perspective grid lines (floor/wall effect)
 * - Animated volumetric light ray beams
 * - Ambient glow sources
 */
const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let w, h;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Light ray configuration
    const rays = [
      { angle: -0.4, width: 0.18, speed: 0.0008, offset: 0, alpha: 0.12 },
      { angle: -0.15, width: 0.22, speed: 0.0012, offset: 1.2, alpha: 0.10 },
      { angle: 0.1, width: 0.15, speed: 0.0006, offset: 2.5, alpha: 0.14 },
      { angle: 0.35, width: 0.20, speed: 0.001, offset: 0.8, alpha: 0.09 },
      { angle: -0.6, width: 0.12, speed: 0.0015, offset: 3.1, alpha: 0.07 },
      { angle: 0.55, width: 0.16, speed: 0.0009, offset: 1.8, alpha: 0.08 },
      { angle: -0.05, width: 0.25, speed: 0.0005, offset: 4.0, alpha: 0.06 },
      { angle: 0.25, width: 0.14, speed: 0.0011, offset: 2.0, alpha: 0.11 },
    ];

    const drawGrid = () => {
      // --- Vertical grid lines with perspective ---
      const vanishY = h * 0.15; // vanishing point Y (near top)
      const vanishX = w * 0.65; // vanishing point X (slightly right of center)
      const gridLines = 30;
      const spread = w * 2.5;

      ctx.strokeStyle = 'rgba(56, 200, 255, 0.07)';
      ctx.lineWidth = 0.8;

      // Vertical lines radiating from vanishing point
      for (let i = -gridLines; i <= gridLines; i++) {
        const bottomX = vanishX + (i / gridLines) * spread;
        ctx.beginPath();
        ctx.moveTo(vanishX, vanishY);
        ctx.lineTo(bottomX, h);
        ctx.stroke();
      }

      // Horizontal lines with perspective spacing
      const horizLines = 20;
      for (let i = 1; i <= horizLines; i++) {
        // Perspective: lines get closer together near vanishing point
        const t = Math.pow(i / horizLines, 1.8);
        const y = vanishY + t * (h - vanishY);

        // Calculate the width of the grid at this y position
        const widthFactor = t * 2.5;
        const leftX = vanishX - (spread / 2) * widthFactor;
        const rightX = vanishX + (spread / 2) * widthFactor;

        ctx.globalAlpha = 0.4 + t * 0.6;
        ctx.strokeStyle = `rgba(56, 200, 255, ${0.03 + t * 0.05})`;
        ctx.beginPath();
        ctx.moveTo(leftX, y);
        ctx.lineTo(rightX, y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Vertical lines on the "wall" part (above the grid floor)
      const wallLines = 25;
      ctx.strokeStyle = 'rgba(56, 200, 255, 0.04)';
      ctx.lineWidth = 0.6;
      for (let i = 0; i <= wallLines; i++) {
        const x = (i / wallLines) * w;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, vanishY + h * 0.15);
        ctx.stroke();
      }

      // Horizontal wall lines
      const wallHorizLines = 8;
      for (let i = 0; i <= wallHorizLines; i++) {
        const y = (i / wallHorizLines) * (vanishY + h * 0.05);
        ctx.strokeStyle = `rgba(56, 200, 255, ${0.025 + (i / wallHorizLines) * 0.03})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    };

    const drawLightRays = (time) => {
      const originX = w * 0.65;
      const originY = h * 0.08;

      for (const ray of rays) {
        const pulse = Math.sin(time * ray.speed + ray.offset) * 0.5 + 0.5;
        const currentAlpha = ray.alpha * (0.5 + pulse * 0.5);

        if (currentAlpha < 0.01) continue;

        const angle = ray.angle + Math.sin(time * ray.speed * 0.5 + ray.offset) * 0.05;
        const beamWidth = ray.width * (0.8 + pulse * 0.4);

        // Create a gradient along the ray
        const rayLength = Math.max(w, h) * 1.8;
        const endX = originX + Math.sin(angle) * rayLength;
        const endY = originY + Math.cos(angle) * rayLength;

        const grad = ctx.createLinearGradient(originX, originY, endX, endY);
        grad.addColorStop(0, `rgba(100, 210, 255, ${currentAlpha * 1.5})`);
        grad.addColorStop(0.2, `rgba(56, 189, 248, ${currentAlpha})`);
        grad.addColorStop(0.5, `rgba(56, 189, 248, ${currentAlpha * 0.4})`);
        grad.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.save();
        ctx.translate(originX, originY);
        ctx.rotate(angle);

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-beamWidth * rayLength * 0.5, rayLength);
        ctx.lineTo(beamWidth * rayLength * 0.5, rayLength);
        ctx.closePath();

        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }
    };

    const drawGlowSources = (time) => {
      // Main glow source (upper right area)
      const glowPulse = Math.sin(time * 0.001) * 0.15 + 0.85;

      // Primary glow
      const grad1 = ctx.createRadialGradient(
        w * 0.65, h * 0.08, 0,
        w * 0.65, h * 0.08, w * 0.5
      );
      grad1.addColorStop(0, `rgba(100, 220, 255, ${0.25 * glowPulse})`);
      grad1.addColorStop(0.15, `rgba(56, 189, 248, ${0.12 * glowPulse})`);
      grad1.addColorStop(0.4, `rgba(56, 189, 248, ${0.04 * glowPulse})`);
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, w, h);

      // Secondary subtle glow (left area)
      const grad2 = ctx.createRadialGradient(
        w * 0.1, h * 0.5, 0,
        w * 0.1, h * 0.5, w * 0.4
      );
      grad2.addColorStop(0, `rgba(56, 189, 248, ${0.04 * glowPulse})`);
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);

      // Horizon glow
      const grad3 = ctx.createRadialGradient(
        w * 0.65, h * 0.15, 0,
        w * 0.65, h * 0.15, w * 0.7
      );
      grad3.addColorStop(0, `rgba(30, 144, 200, ${0.08 * glowPulse})`);
      grad3.addColorStop(0.3, `rgba(20, 100, 160, ${0.03 * glowPulse})`);
      grad3.addColorStop(1, 'transparent');
      ctx.fillStyle = grad3;
      ctx.fillRect(0, 0, w, h);
    };

    let time = 0;
    const animate = () => {
      time++;
      ctx.clearRect(0, 0, w, h);

      // 1. Draw the perspective grid
      drawGrid();

      // 2. Draw glow sources
      drawGlowSources(time);

      // 3. Draw animated light rays
      ctx.globalCompositeOperation = 'screen';
      drawLightRays(time);
      ctx.globalCompositeOperation = 'source-over';

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', () => {
      resize();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

export default AnimatedBackground;
