<template>
  <div class="movement-page">
    <section class="section">
      <div class="container">
        <header class="movement-intro">
          <span class="tag">Scouts de Argentina</span>
          <h1 class="section-title">Formularios <em>Scout</em></h1>
          <p class="section-subtitle">Todos los formularios necesarios para la inscripción y participación en el grupo.</p>
        </header>

        <div class="formularios-grid">
          <div v-for="form in formularios" :key="form.id" class="form-card" v-reveal>
            <div class="form-card__icon">
              <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </div>
            <div class="form-card__info">
              <h3>{{ form.nombre }}</h3>
              <p>{{ form.descripcion }}</p>
              <span class="form-card__type">{{ form.tipo }}</span>
            </div>
            <FormDownload :url="form.url" :name="form.nombre" label="Descargar PDF" />
          </div>
        </div>

        <div class="formularios-nota">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p>Si tenés dudas sobre qué formulario completar, <RouterLink to="/#contacto">escribinos</RouterLink> y te ayudamos.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import FormDownload from '@/components/shared/FormDownload.vue'

const formularios = [
  { id: 1, nombre: 'Ficha de Inscripción', descripcion: 'Formulario de ingreso para nuevos miembros scout. Incluye datos personales y de contacto familiar.', tipo: 'PDF', url: '/pdfs/scouts-inscripcion.pdf' },
  { id: 2, nombre: 'Autorización de Actividades', descripcion: 'Autorización general para participar en actividades del grupo durante el año.', tipo: 'PDF', url: '/pdfs/scouts-autorizacion.pdf' },
  { id: 3, nombre: 'Autorización de Campamento', descripcion: 'Formulario específico para autorizar la participación en campamentos y salidas de más de un día.', tipo: 'PDF', url: '/pdfs/scouts-campamento.pdf' },
  { id: 4, nombre: 'Ficha Médica', descripcion: 'Información de salud del miembro: alergias, medicación, grupo sanguíneo y contactos de emergencia.', tipo: 'PDF', url: '/pdfs/scouts-medica.pdf' },
  { id: 5, nombre: 'Autorización de Imagen', descripcion: 'Consentimiento para el uso de fotos y videos en comunicaciones del grupo.', tipo: 'PDF', url: '/pdfs/scouts-imagen.pdf' },
]
</script>
