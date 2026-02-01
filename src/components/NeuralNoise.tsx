import { useEffect, useRef } from 'react'

const NeuralNoise = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Neural network nodes
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = []
    const nodeCount = 80

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      })
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(9, 9, 11, 0.1)' // fg-base with trail
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const mouse = mouseRef.current

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Mouse attraction
        const dx = mouse.x - node.x
        const dy = mouse.y - node.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 200) {
          const force = (200 - dist) / 200 * 0.02
          node.vx += dx * force * 0.01
          node.vy += dy * force * 0.01
        }

        // Update position
        node.x += node.vx
        node.y += node.vy

        // Damping
        node.vx *= 0.99
        node.vy *= 0.99

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))

        // Draw node with gold color
        const glowIntensity = dist < 200 ? (200 - dist) / 200 : 0.3
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 215, 0, ${0.3 + glowIntensity * 0.5})`
        ctx.fill()

        // Draw connections
        nodes.forEach((other, j) => {
          if (i >= j) return
          const odx = other.x - node.x
          const ody = other.y - node.y
          const odist = Math.sqrt(odx * odx + ody * ody)

          if (odist < 150) {
            const opacity = (1 - odist / 150) * 0.2
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      // Draw glow around mouse
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 150)
      gradient.addColorStop(0, 'rgba(255, 215, 0, 0.1)')
      gradient.addColorStop(1, 'rgba(255, 215, 0, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(mouse.x - 150, mouse.y - 150, 300, 300)

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: '#09090b' }}
    />
  )
}

export default NeuralNoise
