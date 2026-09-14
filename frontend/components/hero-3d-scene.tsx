'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 8.5)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const purplePointLight = new THREE.PointLight(0xa855f7, 4, 50)
    purplePointLight.position.set(5, 5, 5)
    scene.add(purplePointLight)

    const violetPointLight = new THREE.PointLight(0x7c3aed, 3, 50)
    violetPointLight.position.set(-5, -5, 3)
    scene.add(violetPointLight)

    // Group for objects
    const mainGroup = new THREE.Group()
    scene.add(mainGroup)

    // 1. Central 3D Geometric Signage Box / Monolith (Physical Acrylic Matrix)
    const boxGeometry = new THREE.BoxGeometry(2.6, 2.6, 2.6)
    const boxEdges = new THREE.EdgesGeometry(boxGeometry)
    const boxLineMaterial = new THREE.LineBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.85,
    })
    const boxWireframe = new THREE.LineSegments(boxEdges, boxLineMaterial)
    mainGroup.add(boxWireframe)

    // Inner glowing core
    const innerCoreGeo = new THREE.IcosahedronGeometry(1.2, 1)
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x9333ea,
      emissive: 0x581c87,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    })
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat)
    mainGroup.add(innerCore)

    // Outer orbiting ring
    const ringGeo = new THREE.TorusGeometry(2.2, 0.02, 16, 100)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xd8b4fe,
      transparent: true,
      opacity: 0.4,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 3
    mainGroup.add(ring)

    const ring2 = new THREE.Mesh(ringGeo, ringMat)
    ring2.rotation.y = Math.PI / 3
    mainGroup.add(ring2)

    // 2. Floating Digital Particle Constellation
    const particlesCount = 200
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12
      positions[i + 1] = (Math.random() - 0.5) * 8
      positions[i + 2] = (Math.random() - 0.5) * 8
    }

    const particlesGeo = new THREE.BufferGeometry()
    particlesGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    )

    const particlesMat = new THREE.PointsMaterial({
      color: 0xc084fc,
      size: 0.05,
      transparent: true,
      opacity: 0.7,
    })
    const particleSystem = new THREE.Points(particlesGeo, particlesMat)
    scene.add(particleSystem)

    // Mouse Interaction
    let targetX = 0
    let targetY = 0
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5
      targetX = x * 1.5
      targetY = y * 1.5
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Resize Handler
    const handleResize = () => {
      if (!container) return
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationFrameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Smooth rotation with mouse dampening
      mainGroup.rotation.y += (targetX - mainGroup.rotation.y) * 0.05 + 0.005
      mainGroup.rotation.x += (-targetY - mainGroup.rotation.x) * 0.05 + 0.003
      mainGroup.rotation.z = Math.sin(elapsedTime * 0.5) * 0.1

      innerCore.rotation.y = -elapsedTime * 0.5
      innerCore.rotation.x = elapsedTime * 0.3

      ring.rotation.z = elapsedTime * 0.2
      ring2.rotation.z = -elapsedTime * 0.2

      particleSystem.rotation.y = elapsedTime * 0.04
      particleSystem.rotation.x = elapsedTime * 0.02

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[380px] lg:min-h-[520px] relative pointer-events-auto cursor-grab active:cursor-grabbing"
    />
  )
}
