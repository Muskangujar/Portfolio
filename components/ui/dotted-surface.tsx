'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export function DottedSurface({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { theme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const sceneRef = useRef<{
		scene: THREE.Scene;
		camera: THREE.PerspectiveCamera;
		renderer: THREE.WebGLRenderer;
		points: THREE.Points;
		animationId: number;
	} | null>(null);

	useEffect(() => setMounted(true), []);

	useEffect(() => {
		if (!mounted || !containerRef.current) return;

		const SEPARATION = 80;
		const AMOUNTX = 60;
		const AMOUNTY = 60;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			1,
			10000,
		);
		camera.position.z = 1000;
		camera.position.y = 400;

		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		containerRef.current.appendChild(renderer.domElement);

		const numParticles = AMOUNTX * AMOUNTY;
		const positions = new Float32Array(numParticles * 3);
		const colors = new Float32Array(numParticles * 3);

		const isDark = theme === 'dark';
		const colorValue = isDark ? 1 : 0; // High contrast: White (Dark) / Black (Light)

		let i = 0;
		for (let ix = 0; ix < AMOUNTX; ix++) {
			for (let iy = 0; iy < AMOUNTY; iy++) {
				positions[i * 3] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
				positions[i * 3 + 1] = 0;
				positions[i * 3 + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

				colors[i * 3] = colorValue;
				colors[i * 3 + 1] = colorValue;
				colors[i * 3 + 2] = colorValue;

				i++;
			}
		}

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
		geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

		const material = new THREE.PointsMaterial({
			size: 2,
			vertexColors: true,
			transparent: true,
			opacity: isDark ? 0.6 : 0.45,
		});

		const points = new THREE.Points(geometry, material);
		scene.add(points);

		let count = 0;
		let animationId = 0;

		const animate = () => {
			animationId = requestAnimationFrame(animate);
			
			const positions = geometry.attributes.position.array as Float32Array;
			let i = 0;
			for (let ix = 0; ix < AMOUNTX; ix++) {
				for (let iy = 0; iy < AMOUNTY; iy++) {
					positions[i * 3 + 1] =
						Math.sin((ix + count) * 0.3) * 80 + Math.sin((iy + count) * 0.5) * 80;
					i++;
				}
			}
			geometry.attributes.position.needsUpdate = true;
			
			renderer.render(scene, camera);
			count += 0.1;
		};

		animate();

		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener('resize', handleResize);

		sceneRef.current = {
			scene,
			camera,
			renderer,
			points,
			animationId
		};

		return () => {
			window.removeEventListener('resize', handleResize);
			if (sceneRef.current) {
				cancelAnimationFrame(sceneRef.current.animationId);
				sceneRef.current.renderer.dispose();
				if (containerRef.current) {
					containerRef.current.removeChild(sceneRef.current.renderer.domElement);
				}
			}
		};
	}, [theme, mounted]);

	if (!mounted) return null;

	return (
		<div
			ref={containerRef}
			className={cn('fixed inset-0 z-0 pointer-events-none', className)}
			{...props}
		/>
	);
}
