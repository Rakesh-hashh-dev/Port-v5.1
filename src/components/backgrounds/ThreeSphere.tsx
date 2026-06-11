import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeSphere() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Refined wireframe sphere
    const geometry = new THREE.IcosahedronGeometry(1.5, 4);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6D28D9,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
      shininess: 100
    });
    const sphere = new THREE.Mesh(geometry, material);
    group.add(sphere);

    // Core Glow
    const coreGeom = new THREE.SphereGeometry(0.5, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x3B82F6,
      transparent: true,
      opacity: 0.5
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    group.add(core);

    // Points
    const pointsGeometry = new THREE.IcosahedronGeometry(1.55, 4);
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.015,
      transparent: true,
      opacity: 0.6
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    group.add(points);

    const light = new THREE.PointLight(0x6D28D9, 2, 10);
    light.position.set(2, 2, 2);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 4;

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    // Pause rendering while the tab is hidden or the sphere is off-screen.
    let isTabVisible = document.visibilityState === 'visible';
    let isInView = true;
    const handleVisibility = () => {
      isTabVisible = document.visibilityState === 'visible';
    };
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isInView = entry.isIntersecting;
    });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId = 0;
    function animate() {
      animationFrameId = requestAnimationFrame(animate);

      if (!isTabVisible || !isInView) return;

      group.rotation.y += 0.002;
      group.rotation.x += 0.001;
      
      // Smooth mouse follow
      group.rotation.y += (mouseX * 0.2 - group.rotation.y) * 0.05;
      group.rotation.x += (mouseY * 0.2 - group.rotation.x) * 0.05;
      
      // Breathing effect
      const scale = 1 + Math.sin(Date.now() * 0.002) * 0.05;
      core.scale.set(scale, scale, scale);
      core.material.opacity = 0.4 + Math.sin(Date.now() * 0.002) * 0.1;
      
      renderer.render(scene, camera);
    }

    if (prefersReducedMotion) {
      // Render a single static frame; no animation loop or mouse tracking.
      renderer.render(scene, camera);
    } else {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('visibilitychange', handleVisibility);
      intersectionObserver.observe(container);
      animate();
    }

    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      intersectionObserver.disconnect();
      if (renderer.domElement && mountRef.current?.contains(renderer.domElement)) {
         mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      coreGeom.dispose();
      coreMat.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px]" />;
}
