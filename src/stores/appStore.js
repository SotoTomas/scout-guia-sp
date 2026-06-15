import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  const currentTheme = ref('community') // 'community' | 'scout' | 'guia'
  const menuOpen = ref(false)

  const themeClass = computed(() => `theme-${currentTheme.value}`)

  function setTheme(theme) {
    currentTheme.value = theme
  }

  function toggleMenu() {
    menuOpen.value = !menuOpen.value
  }

  function closeMenu() {
    menuOpen.value = false
  }

  return { currentTheme, menuOpen, themeClass, setTheme, toggleMenu, closeMenu }
})

// ─── DATA ───────────────────────────────────────────────────────────────────

export const SCOUT_RAMAS = [
  {
    id: 'manada',
    nombre: 'Manada',
    edad: '7 a 10 años',
    color: '#fbc02d',
    colorText: '#1a1a2e',
    descripcion: 'Los más pequeños del movimiento scout. Jugando y aprendiendo, los lobatos descubren el mundo en comunidad.',
    icono: '🐺',
    actividades: ['Juegos en naturaleza', 'Manualidades', 'Primeros pasos en campamento', 'Canciones y rondas'],
  },
  {
    id: 'unidad',
    nombre: 'Unidad Scout',
    edad: '11 a 14 años',
    color: '#2e7d32',
    colorText: '#f0ebe0',
    descripcion: 'La aventura comienza en serio. Los scouts aprenden técnicas, trabajo en patrulla y servicio a la comunidad.',
    icono: '⚜️',
    actividades: ['Campamentos', 'Primeros auxilios', 'Orientación y mapas', 'Proyectos de servicio'],
  },
  {
    id: 'caminante',
    nombre: 'Caminantes',
    edad: '15 a 17 años',
    color: '#c62828',
    colorText: '#f0ebe0',
    descripcion: 'Jóvenes que se desafían a sí mismos. Travesías, liderazgo y un fuerte compromiso con los valores scout.',
    icono: '🔥',
    actividades: ['Travesías largas', 'Liderazgo de grupos', 'Voluntariado', 'Campismo avanzado'],
  },
  {
    id: 'rover',
    nombre: 'Rovers',
    edad: '18 a 21 años',
    color: '#1b4d8e',
    colorText: '#f0ebe0',
    descripcion: 'El servicio como estilo de vida. Los rovers son adultos jóvenes comprometidos con la sociedad y el movimiento.',
    icono: '🌍',
    actividades: ['Proyectos comunitarios', 'Formación de líderes', 'Eventos nacionales', 'Servicio internacional'],
  }
]

export const GUIA_RAMAS = [
  {
    id: 'pimpollitos',
    nombre: 'Pimpollitos',
    edad: '6 a 8 años',
    color: '#e91e63',
    colorText: '#f0ebe0',
    descripcion: 'Las más pequeñas descubren la amistad, la naturaleza y los primeros valores guías en un ambiente lúdico.',
    icono: '🌸',
    actividades: ['Juegos creativos', 'Arte y manualidades', 'Canciones', 'Pequeñas aventuras'],
  },
  {
    id: 'alitas',
    nombre: 'Alitas',
    edad: '9 a 11 años',
    color: '#03a9f4',
    colorText: '#f0ebe0',
    descripcion: 'Con curiosidad y entusiasmo, las alitas comienzan a volar. Aprenden habilidades nuevas cada semana.',
    icono: '🦋',
    actividades: ['Campamentos cortos', 'Técnicas básicas', 'Juegos al aire libre', 'Proyectos de grupo'],
  },
  {
    id: 'caravanas',
    nombre: 'Caravanas',
    edad: '12 a 14 años',
    color: '#ff6f00',
    colorText: '#f0ebe0',
    descripcion: 'El trabajo en equipo y la aventura son protagonistas. Las caravanas construyen su identidad guía.',
    icono: '⛺',
    actividades: ['Campamentos', 'Técnicas scout', 'Servicio comunitario', 'Actividades artísticas'],
  },
  {
    id: 'sol',
    nombre: 'Guías del Sol',
    edad: '15 a 17 años',
    color: '#f9a825',
    colorText: '#1a1a2e',
    descripcion: 'Liderazgo, servicio y crecimiento personal. Las guías del sol se preparan para ser referentes.',
    icono: '☀️',
    actividades: ['Liderazgo', 'Proyectos solidarios', 'Travesías', 'Formación personal'],
  },
  {
    id: 'mayores',
    nombre: 'Guías Mayores',
    edad: '18 años en adelante',
    color: '#6a1b9a',
    colorText: '#f0ebe0',
    descripcion: 'El compromiso pleno con los valores guías. Las mayores son líderes y referentes dentro y fuera del movimiento.',
    icono: '💜',
    actividades: ['Formación de líderes', 'Voluntariado', 'Proyectos nacionales', 'Comunidad adulta'],
  }
]

export const HITOS = [
  { año: 1981, titulo: 'Fundación', descripcion: 'Nace la Comunidad Scout-Guía San Pablo, uniendo por primera vez a ambos movimientos en el barrio.' },
  { año: 1989, titulo: 'Primera gran jamboree', descripcion: 'El grupo participa por primera vez en un evento nacional con más de 50 miembros.' },
  { año: 1995, titulo: 'Sede propia', descripcion: 'Se inaugura la sede definitiva en Fray Cayetano Rodríguez 100.' },
  { año: 2003, titulo: 'Reconocimiento nacional', descripcion: 'La Asociación Guías Argentinas y Scouts de Argentina reconocen al grupo como comunidad modelo.' },
  { año: 2011, titulo: '30 años juntos', descripcion: 'Gran celebración del 30° aniversario con ex-miembros de todo el país.' },
  { año: 2019, titulo: 'Renovación de sede', descripcion: 'Refacción completa del espacio con materiales donados por la comunidad.' },
  { año: 2024, titulo: 'Sitio web oficial', descripcion: 'Lanzamiento del nuevo sitio web para conectar a la comunidad en el mundo digital.' },
]
