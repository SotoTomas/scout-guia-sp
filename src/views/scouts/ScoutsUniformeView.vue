<template>
  <div style="padding-top: 80px;">
    <section class="section">
      <div class="container">
        <span class="tag" style="background:rgba(27,77,142,0.3);color:var(--color-scout-yellow);margin-bottom:16px;">Uniforme Scout</span>
        <h1 class="section-title">El <em style="font-style:italic;color:var(--color-scout-yellow)">Uniforme</em></h1>
        <p class="section-subtitle" style="margin-top:16px;margin-bottom:3rem;">El uniforme es parte de la identidad scout. Conocé dónde va cada insignia, parche y distintivo.</p>

        <div class="uniforme-layout">
          <div class="uniforme-diagram">
            <div class="diagram-body">
              <div class="diagram-placeholder">
                <svg width="120" height="200" viewBox="0 0 120 200" fill="none">
                  <rect x="30" y="10" width="60" height="80" rx="8" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.03)"/>
                  <rect x="5" y="15" width="25" height="60" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.03)"/>
                  <rect x="90" y="15" width="25" height="60" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.03)"/>
                  <rect x="35" y="90" width="50" height="100" rx="4" stroke="currentColor" stroke-width="1.5" fill="rgba(255,255,255,0.03)"/>
                  <circle cx="50" cy="35" r="6" fill="var(--color-scout-yellow)" opacity="0.7"/>
                  <circle cx="70" cy="35" r="4" fill="var(--color-scout-light)" opacity="0.7"/>
                  <rect x="38" y="50" width="20" height="12" rx="2" fill="var(--color-scout-green)" opacity="0.5"/>
                  <text x="60" y="145" text-anchor="middle" fill="rgba(255,255,255,0.15)" font-size="9">UNIFORME</text>
                </svg>
                <p class="diagram-note">Diagrama de ubicación de insignias</p>
              </div>
              <div class="insignias-legend">
                <div v-for="ins in insignias" :key="ins.nombre" class="insignia-item">
                  <span class="insignia-dot" :style="{ background: ins.color }"></span>
                  <div>
                    <strong>{{ ins.nombre }}</strong>
                    <p>{{ ins.ubicacion }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="uniforme-info">
            <div class="info-card">
              <h3>¿Dónde se consigue?</h3>
              <p>El uniforme oficial de Scouts de Argentina puede adquirirse en la sede del grupo o en tiendas oficiales de la Asociación.</p>
            </div>
            <div class="info-card">
              <h3>Historia del Uniforme</h3>
              <p>El uniforme scout tiene sus raíces en 1907 con Robert Baden-Powell. A lo largo de los años fue evolucionando, pero siempre mantuvo su espíritu de igualdad e identidad compartida.</p>
              <p style="margin-top:12px;">En Argentina, el uniforme actual fue adoptado en la década del 90, con actualizaciones periódicas para mantenerlo funcional y representativo.</p>
            </div>
            <div class="info-card">
              <h3>Pañuelo</h3>
              <p>El pañuelo identifica al grupo. El de nuestra comunidad tiene los colores azul y blanco en honor a nuestras raíces.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const insignias = [
  { nombre: 'Flor de Lis', ubicacion: 'Bolsillo izquierdo del pecho', color: '#fbc02d' },
  { nombre: 'Distintivo de Grupo', ubicacion: 'Manga izquierda, parte superior', color: '#2a6cc4' },
  { nombre: 'Distintivo de Rama', ubicacion: 'Manga izquierda, debajo del grupo', color: '#2e7d32' },
  { nombre: 'Nombre del Scout', ubicacion: 'Encima del bolsillo derecho', color: '#e0e0e0' },
  { nombre: 'Parche de Progresión', ubicacion: 'Bolsillo derecho', color: '#c62828' },
  { nombre: 'Distintivo Nacional', ubicacion: 'Manga derecha, parte superior', color: '#1565c0' },
]
</script>

<style scoped>
.uniforme-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.diagram-body {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: 40px;
  border: 1px solid rgba(255,255,255,0.06);
}

.diagram-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  margin-bottom: 32px;
  color: var(--color-white-dim);
}

.diagram-note {
  font-size: 0.8rem;
  color: var(--color-white-dim);
  opacity: 0.5;
}

.insignias-legend {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.insignia-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.insignia-dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 4px;
}

.insignia-item strong {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 2px;
}

.insignia-item p {
  font-size: 0.8rem;
  color: var(--color-white-dim);
}

.uniforme-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-card {
  padding: 28px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.06);
}

.info-card h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--color-scout-yellow);
}

.info-card p {
  font-size: 0.9rem;
  color: var(--color-white-dim);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .uniforme-layout { grid-template-columns: 1fr; }
}
</style>
