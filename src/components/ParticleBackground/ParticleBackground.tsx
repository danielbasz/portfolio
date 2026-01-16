'use client';

import { useEffect, useRef, useCallback } from 'react';
import styles from './ParticleBackground.module.scss';

interface Particle {
    x: number;
    y: number;
    originX: number;
    originY: number;
    size: number;
    color: string;
    vx: number;
    vy: number;
    isText: boolean;
}

interface ParticleBackgroundProps {
    text?: string;
    particleCount?: number;
    textParticleCount?: number;
    mouseRadius?: number;
    className?: string;
}

export default function ParticleBackground({
    text = 'Hi!',
    particleCount = 800,
    textParticleCount = 2000,
    mouseRadius = 120,
    className
}: ParticleBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const animationRef = useRef<number | undefined>(undefined);

    // Create particles from text
    const createTextParticles = useCallback((
        ctx: CanvasRenderingContext2D,
        width: number,
        height: number
    ): Particle[] => {
        const particles: Particle[] = [];

        // Set up text rendering
        const fontSize = Math.min(width * 0.25, 300);
        ctx.font = `bold ${fontSize}px Arial, sans-serif`;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'bottom';

        // Position text in lower-right area
        const textX = width - 20;
        const textY = height - height * 0.15;

        // Draw text to measure and sample pixels
        ctx.fillStyle = 'white';
        ctx.fillText(text, textX, textY);

        // Get image data
        const textWidth = ctx.measureText(text).width;
        const textHeight = fontSize;
        const startX = Math.max(0, textX - textWidth - 20);
        const startY = Math.max(0, textY - textHeight - 20);
        const sampleWidth = Math.min(width - startX, textWidth + 40);
        const sampleHeight = Math.min(height - startY, textHeight + 40);

        if (sampleWidth <= 0 || sampleHeight <= 0) return particles;

        const imageData = ctx.getImageData(startX, startY, sampleWidth, sampleHeight);
        const data = imageData.data;

        // Clear the canvas after sampling
        ctx.clearRect(0, 0, width, height);

        // Sample pixels and create particles where text exists
        const gap = Math.max(2, Math.floor(Math.sqrt((sampleWidth * sampleHeight) / textParticleCount)));

        // Neon color palette - cyan to magenta gradient
        const neonColors = [
            '#00ffff', // Cyan
            '#00e5ff', // Light cyan
            '#ff00ff', // Magenta
            '#ff66ff', // Light magenta
            '#00ff88', // Neon green
            '#ffffff', // White for sparkle
        ];

        for (let y = 0; y < sampleHeight; y += gap) {
            for (let x = 0; x < sampleWidth; x += gap) {
                const i = (y * sampleWidth + x) * 4;
                const alpha = data[i + 3];

                if (alpha > 128) {
                    const px = startX + x;
                    const py = startY + y;

                    // Pick a random neon color
                    const neonColor = neonColors[Math.floor(Math.random() * neonColors.length)];

                    particles.push({
                        x: px + (Math.random() - 0.5) * 4,
                        y: py + (Math.random() - 0.5) * 4,
                        originX: px,
                        originY: py,
                        size: Math.random() * 2.5 + 1,
                        color: neonColor,
                        vx: 0,
                        vy: 0,
                        isText: true
                    });
                }
            }
        }

        return particles;
    }, [text, textParticleCount]);

    // Create random background particles
    const createBackgroundParticles = useCallback((
        width: number,
        height: number
    ): Particle[] => {
        const particles: Particle[] = [];

        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;

            particles.push({
                x,
                y,
                originX: x,
                originY: y,
                size: Math.random() * 1.5 + 0.5,
                color: `rgba(255, 255, 255, ${0.1 + Math.random() * 0.4})`,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                isText: false
            });
        }

        return particles;
    }, [particleCount]);

    // Animation loop
    const animate = useCallback((ctx: CanvasRenderingContext2D, width: number, height: number) => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
        ctx.fillRect(0, 0, width, height);

        const { x: mouseX, y: mouseY } = mouseRef.current;

        particlesRef.current.forEach(particle => {
            // Calculate distance from mouse
            const dx = particle.x - mouseX;
            const dy = particle.y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouseRadius) {
                // Push particles away from mouse
                const force = (mouseRadius - distance) / mouseRadius;
                const angle = Math.atan2(dy, dx);
                const pushX = Math.cos(angle) * force * 8;
                const pushY = Math.sin(angle) * force * 8;

                particle.vx += pushX;
                particle.vy += pushY;
            }

            if (particle.isText) {
                // Text particles return to origin
                const returnForce = 0.05;
                particle.vx += (particle.originX - particle.x) * returnForce;
                particle.vy += (particle.originY - particle.y) * returnForce;

                // Damping
                particle.vx *= 0.92;
                particle.vy *= 0.92;
            } else {
                // Background particles float gently
                particle.vx *= 0.98;
                particle.vy *= 0.98;

                // Slight drift back to origin for background particles too
                particle.vx += (particle.originX - particle.x) * 0.001;
                particle.vy += (particle.originY - particle.y) * 0.001;
            }

            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Draw particle with glow effect for text particles
            if (particle.isText) {
                // Add neon glow
                ctx.shadowBlur = 15;
                ctx.shadowColor = particle.color;
            } else {
                ctx.shadowBlur = 0;
            }

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();

            // Reset shadow for next particle
            ctx.shadowBlur = 0;
        });

        animationRef.current = requestAnimationFrame(() => animate(ctx, width, height));
    }, [mouseRadius]);

    // Initialize
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            ctx.scale(dpr, dpr);

            // Recreate particles on resize
            const textParticles = createTextParticles(ctx, rect.width, rect.height);
            const bgParticles = createBackgroundParticles(rect.width, rect.height);
            particlesRef.current = [...textParticles, ...bgParticles];
        };

        resize();
        window.addEventListener('resize', resize);

        // Start animation
        const rect = canvas.getBoundingClientRect();
        animate(ctx, rect.width, rect.height);

        return () => {
            window.removeEventListener('resize', resize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [createTextParticles, createBackgroundParticles, animate]);

    // Mouse tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current = { x: -1000, y: -1000 };
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`${styles.particleCanvas} ${className || ''}`}
        />
    );
}
