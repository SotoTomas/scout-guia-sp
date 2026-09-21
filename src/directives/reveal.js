// One observer for every route; detach nodes after their first entrance.
let observer
const pending = new Set()

function reveal(element) {
  element.classList.remove('reveal-pending')
  element.classList.add('reveal-visible')
  // Remove the completed animation class so component hover transforms keep
  // working after the element has entered the viewport.
  element.addEventListener('animationend', () => element.classList.remove('reveal-visible'), { once: true })
  observer?.unobserve(element)
  pending.delete(element)
}

export default {
  mounted(element, { value = 0 }) {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (preference.matches || !('IntersectionObserver' in window)) return
    if (!observer) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) reveal(entry.target) })
      }, { threshold: 0.08 })
      preference.addEventListener('change', event => {
        if (event.matches) pending.forEach(reveal)
      })
    }
    element.style.setProperty('--reveal-delay', `${Math.min(Math.max(Number(value) || 0, 0), 160)}ms`)
    element.classList.add('reveal-pending')
    // Keyboard navigation must never land inside visually hidden content.
    element.addEventListener('focusin', () => reveal(element), { once: true })
    pending.add(element)
    observer.observe(element)
  },
  beforeUnmount(element) {
    observer?.unobserve(element)
    pending.delete(element)
  },
}
