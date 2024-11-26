// Enhanced parallax effect with smooth easing
let currentX = 0
let currentY = 0
let aimX = 0
let aimY = 0

const content = document.querySelector('.content')

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  
  aimX = (clientX - centerX) / 50
  aimY = (clientY - centerY) / 50
})

// Smooth animation loop
function animate() {
  // Smooth easing
  currentX += (aimX - currentX) * 0.1
  currentY += (aimY - currentY) * 0.1
  
  // Apply transform with subtle rotation
  content.style.transform = `
    translate3d(${currentX}px, ${currentY}px, 0)
    rotateX(${-currentY * 0.2}deg)
    rotateY(${currentX * 0.2}deg)
  `
  
  requestAnimationFrame(animate)
}

// Start animation loop
animate()

// Reset position on mouse leave
document.addEventListener('mouseleave', () => {
  aimX = 0
  aimY = 0
})