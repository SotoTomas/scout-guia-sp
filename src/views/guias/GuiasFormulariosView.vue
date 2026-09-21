<template>
  <div class="movement-page">
    <section class="section">
      <div class="container">
        <header class="movement-intro">
          <span class="tag">Guías Argentinas</span>
          <h1 class="section-title">Formularios <em>Guía</em></h1>
          <p class="section-subtitle">Todo lo que necesitás para inscribirte y participar en las actividades del grupo.</p>
        </header>

        <div class="formularios-grid">
          <div v-for="form in formularios" :key="form.id" class="form-card" v-reveal>
            <div class="form-card__icon">
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
              </svg>
            </div>
            <div class="form-card__info">
              <h3>{{ form.nombre }}</h3>
              <p>{{ form.descripcion }}</p>
              <span class="form-card__type">PDF</span>
            </div>
            <FormDownload :url="form.url" :name="form.nombre" label="Descargar" />
          </div>
        </div>

        <div class="formularios-nota">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p>¿Dudas? <RouterLink to="/#contacto">Escribinos</RouterLink> y te ayudamos a completar la documentación.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import FormDownload from '@/components/shared/FormDownload.vue'

const formularios = [
  { id: 1, nombre: 'Ficha de Inscripción Guía', descripcion: 'Formulario de ingreso para nuevas integrantes del movimiento guía.', url: '/pdfs/guias-inscripcion.pdf' },
  { id: 2, nombre: 'Autorización de Actividades', descripcion: 'Autorización anual para participar en actividades del grupo.', url: '/pdfs/guias-autorizacion.pdf' },
  { id: 3, nombre: 'Autorización de Campamento', descripcion: 'Formulario para salidas de más de un día y campamentos.', url: '/pdfs/guias-campamento.pdf' },
  { id: 4, nombre: 'Ficha Médica', descripcion: 'Información de salud, alergias, medicación y contactos de emergencia.', url: '/pdfs/guias-medica.pdf' },
  { id: 5, nombre: 'Autorización de Imagen', descripcion: 'Consentimiento para uso de fotos y videos en comunicaciones del grupo.', url: '/pdfs/guias-imagen.pdf' },
]
</script>
