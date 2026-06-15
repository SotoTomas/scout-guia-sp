<template>
  <div style="padding-top: 80px;">
    <section class="section">
      <div class="container">
        <span class="tag" style="background:rgba(27,77,142,0.3);color:var(--color-scout-yellow);margin-bottom:16px;">Scouts de Argentina</span>
        <h1 class="section-title">Formularios <em style="font-style:italic;color:var(--color-scout-yellow)">Scout</em></h1>
        <p class="section-subtitle" style="margin-top:16px;margin-bottom:3rem;">Todos los formularios necesarios para la inscripción y participación en el grupo.</p>

        <div class="formularios-grid">
          <div v-for="form in formularios" :key="form.id" class="form-card">
            <div class="form-card__icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
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
            <a :href="form.url" class="form-card__download" download>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Descargar PDF
            </a>
          </div>
        </div>

        <div class="formularios-nota">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p>Si tenés dudas sobre qué formulario completar, <a href="/#contacto">escribinos</a> y te ayudamos.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const formularios = [
  { id: 1, nombre: 'Ficha de Inscripción', descripcion: 'Formulario de ingreso para nuevos miembros scout. Incluye datos personales y de contacto familiar.', tipo: 'PDF', url: '/pdfs/scouts-inscripcion.pdf' },
  { id: 2, nombre: 'Autorización de Actividades', descripcion: 'Autorización general para participar en actividades del grupo durante el año.', tipo: 'PDF', url: '/pdfs/scouts-autorizacion.pdf' },
  { id: 3, nombre: 'Autorización de Campamento', descripcion: 'Formulario específico para autorizar la participación en campamentos y salidas de más de un día.', tipo: 'PDF', url: '/pdfs/scouts-campamento.pdf' },
  { id: 4, nombre: 'Ficha Médica', descripcion: 'Información de salud del miembro: alergias, medicación, grupo sanguíneo y contactos de emergencia.', tipo: 'PDF', url: '/pdfs/scouts-medica.pdf' },
  { id: 5, nombre: 'Autorización de Imagen', descripcion: 'Consentimiento para el uso de fotos y videos en comunicaciones del grupo.', tipo: 'PDF', url: '/pdfs/scouts-imagen.pdf' },
]
</script>

<style scoped>
.formularios-grid {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 2rem;
}

.form-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px 28px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.06);
  transition: border-color var(--transition-fast);
}

.form-card:hover { border-color: rgba(27,77,142,0.4); }

.form-card__icon {
  width: 52px; height: 52px;
  border-radius: var(--radius-md);
  background: rgba(27,77,142,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-scout-yellow);
  flex-shrink: 0;
}

.form-card__info {
  flex: 1;
}

.form-card__info h3 {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 4px;
}

.form-card__info p {
  font-size: 0.875rem;
  color: var(--color-white-dim);
  line-height: 1.5;
  margin-bottom: 6px;
}

.form-card__type {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 2px 8px;
  background: rgba(27,77,142,0.2);
  color: var(--color-scout-yellow);
  border-radius: 4px;
}

.form-card__download {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--color-scout-primary);
  color: var(--color-white);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  transition: background var(--transition-fast);
  flex-shrink: 0;
}

.form-card__download:hover { background: var(--color-scout-light); }

.formularios-nota {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  background: rgba(255,255,255,0.03);
  border-radius: var(--radius-md);
  border: 1px solid rgba(255,255,255,0.06);
  color: var(--color-white-dim);
  font-size: 0.875rem;
}

.formularios-nota a { color: var(--color-scout-yellow); font-weight: 600; }
.formularios-nota svg { flex-shrink: 0; margin-top: 2px; }

@media (max-width: 600px) {
  .form-card { flex-wrap: wrap; }
  .form-card__download { width: 100%; justify-content: center; }
}
</style>
