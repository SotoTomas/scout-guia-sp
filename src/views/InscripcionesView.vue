<template>
  <div style="padding-top: 80px;">
    <section class="section">
      <div class="container">
        <span class="tag insc-tag">Inscripciones</span>
        <h1 class="section-title">Sumate a la <em>comunidad</em></h1>
        <p class="section-subtitle" style="margin-top:16px;margin-bottom:4rem;">
          Completá el formulario y nos ponemos en contacto para darte la bienvenida.
        </p>

        <div class="insc-layout">
          <!-- Formulario -->
          <div class="insc-form-wrapper">
            <div v-if="!enviado">
              <h2 class="insc-form-title">Formulario de Inscripción</h2>

              <!-- Paso indicador -->
              <div class="steps">
                <div v-for="(s, i) in pasos" :key="i" class="step" :class="{ 'step--active': paso === i, 'step--done': paso > i }">
                  <span class="step__num">{{ paso > i ? '✓' : i + 1 }}</span>
                  <span class="step__label">{{ s }}</span>
                </div>
              </div>

              <!-- Paso 1: Datos del miembro -->
              <div v-if="paso === 0" class="form-paso">
                <h3>Datos del nuevo miembro</h3>
                <div class="form-grid">
                  <div class="form-group">
                    <label>Nombre *</label>
                    <input v-model="form.nombre" type="text" placeholder="Nombre" required />
                  </div>
                  <div class="form-group">
                    <label>Apellido *</label>
                    <input v-model="form.apellido" type="text" placeholder="Apellido" required />
                  </div>
                  <div class="form-group">
                    <label>Fecha de nacimiento *</label>
                    <input v-model="form.fechaNac" type="date" required />
                  </div>
                  <div class="form-group">
                    <label>Género</label>
                    <select v-model="form.genero">
                      <option value="">Seleccionar</option>
                      <option>Masculino</option>
                      <option>Femenino</option>
                      <option>No binario</option>
                      <option>Prefiero no decir</option>
                    </select>
                  </div>
                </div>
                <div class="form-group" style="margin-top:12px;">
                  <label>Movimiento de interés *</label>
                  <div class="radio-group">
                    <label class="radio-label radio-label--scout">
                      <input type="radio" v-model="form.movimiento" value="scouts" />
                      <span class="radio-dot radio-dot--scout"></span>
                      Scouts de Argentina
                    </label>
                    <label class="radio-label radio-label--guia">
                      <input type="radio" v-model="form.movimiento" value="guias" />
                      <span class="radio-dot radio-dot--guia"></span>
                      Guías Argentinas
                    </label>
                    <label class="radio-label">
                      <input type="radio" v-model="form.movimiento" value="nosesabe" />
                      <span class="radio-dot"></span>
                      No sé aún
                    </label>
                  </div>
                </div>
                <button class="btn-next" @click="paso = 1" :disabled="!paso0Valido">Siguiente →</button>
              </div>

              <!-- Paso 2: Datos del responsable -->
              <div v-if="paso === 1" class="form-paso">
                <h3>Datos del responsable familiar</h3>
                <div class="form-grid">
                  <div class="form-group">
                    <label>Nombre completo *</label>
                    <input v-model="form.respNombre" type="text" placeholder="Nombre del responsable" required />
                  </div>
                  <div class="form-group">
                    <label>Relación con el miembro</label>
                    <select v-model="form.relacion">
                      <option value="">Seleccionar</option>
                      <option>Madre / Padre</option>
                      <option>Tutor/a legal</option>
                      <option>Otro familiar</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Teléfono de contacto *</label>
                    <input v-model="form.telefono" type="tel" placeholder="Ej: 11 1234-5678" required />
                  </div>
                  <div class="form-group">
                    <label>Correo electrónico *</label>
                    <input v-model="form.email" type="email" placeholder="correo@ejemplo.com" required />
                  </div>
                </div>
                <div class="form-nav">
                  <button class="btn-back" @click="paso = 0">← Anterior</button>
                  <button class="btn-next" @click="paso = 2" :disabled="!paso1Valido">Siguiente →</button>
                </div>
              </div>

              <!-- Paso 3: Confirmación -->
              <div v-if="paso === 2" class="form-paso">
                <h3>Confirmá los datos</h3>
                <div class="resumen">
                  <div class="resumen-group">
                    <span class="resumen-label">Miembro</span>
                    <p>{{ form.nombre }} {{ form.apellido }}</p>
                    <p>{{ form.fechaNac }} · {{ form.genero || '—' }}</p>
                    <p>Movimiento: <strong>{{ form.movimiento || 'A definir' }}</strong></p>
                  </div>
                  <div class="resumen-group">
                    <span class="resumen-label">Responsable</span>
                    <p>{{ form.respNombre }} ({{ form.relacion || '—' }})</p>
                    <p>{{ form.telefono }}</p>
                    <p>{{ form.email }}</p>
                  </div>
                </div>
                <div class="form-group" style="margin:20px 0;">
                  <label>Consultas adicionales</label>
                  <textarea v-model="form.consulta" rows="3" placeholder="Alguna alergia, necesidad especial, o cualquier cosa que quieras contarnos..."></textarea>
                </div>
                <div class="form-group" style="margin-bottom:20px;">
                  <label class="check-label">
                    <input type="checkbox" v-model="form.acepta" />
                    Acepto el uso de datos para la gestión del grupo y actividades
                  </label>
                </div>
                <div class="form-nav">
                  <button class="btn-back" @click="paso = 1">← Anterior</button>
                  <button class="btn-submit" @click="enviar" :disabled="!form.acepta || enviando">
                    {{ enviando ? 'Enviando...' : 'Enviar inscripción ✓' }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Éxito -->
            <div v-else class="insc-success">
              <span class="success-icon">🎉</span>
              <h2>¡Bienvenido/a a la comunidad!</h2>
              <p>Recibimos tu solicitud. Nos ponemos en contacto en los próximos días para coordinar la primera visita.</p>
              <RouterLink to="/" class="btn-home">Volver al inicio</RouterLink>
            </div>
          </div>

          <!-- Info lateral -->
          <div class="insc-info">
            <div class="info-block">
              <h3>¿Cuándo nos reunimos?</h3>
              <p>Las actividades son los <strong>sábados</strong> en la sede del grupo, de 14 a 18 hs aproximadamente. Algunos domingos también hay salidas especiales.</p>
            </div>
            <div class="info-block">
              <h3>¿Cuánto cuesta?</h3>
              <p>El grupo funciona con una cuota mensual accesible que cubre los materiales y actividades. Nadie queda afuera por razones económicas: consultanos.</p>
            </div>
            <div class="info-block">
              <h3>¿Qué necesito llevar?</h3>
              <ul>
                <li>Las primeras visitas son de prueba sin compromiso</li>
                <li>No se necesita uniforme para comenzar</li>
                <li>Ropa cómoda y ganas de pasarla bien</li>
              </ul>
            </div>
            <div class="info-block info-block--cta">
              <h3>¿Preferís hablar primero?</h3>
              <p>Escribinos y te contamos todo sin compromiso.</p>
              <a href="/#contacto" class="btn-contact">Contactarnos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const paso = ref(0)
const enviando = ref(false)
const enviado = ref(false)

const pasos = ['Miembro', 'Responsable', 'Confirmar']

const form = ref({
  nombre: '', apellido: '', fechaNac: '', genero: '', movimiento: '',
  respNombre: '', relacion: '', telefono: '', email: '',
  consulta: '', acepta: false
})

const paso0Valido = computed(() => form.value.nombre && form.value.apellido && form.value.fechaNac)
const paso1Valido = computed(() => form.value.respNombre && form.value.telefono && form.value.email)

async function enviar() {
  enviando.value = true
  await new Promise(r => setTimeout(r, 1200))
  enviando.value = false
  enviado.value = true
}
</script>

<style scoped>
.insc-tag {
  background: rgba(232,197,71,0.1);
  color: var(--color-accent-gold);
  margin-bottom: 16px;
}

.section-title em { font-style: italic; color: var(--color-accent-gold); }

.insc-layout {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 3rem;
  align-items: start;
}

.insc-form-wrapper {
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: 40px;
  border: 1px solid rgba(255,255,255,0.06);
}

.insc-form-title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 28px;
}

/* Steps */
.steps {
  display: flex;
  gap: 0;
  margin-bottom: 32px;
}

.step {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  position: relative;
}

.step:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: calc(100% - 80px);
  height: 1px;
  background: rgba(255,255,255,0.1);
  left: 80px;
}

.step--done::after { background: var(--color-accent-gold); }

.step__num {
  width: 28px; height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  background: rgba(255,255,255,0.08);
  color: var(--color-white-dim);
  flex-shrink: 0;
  transition: all var(--transition-normal);
}

.step--active .step__num { background: var(--color-accent-gold); color: #1a1a2e; }
.step--done .step__num { background: var(--color-accent-gold); color: #1a1a2e; }

.step__label {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--color-white-dim);
}

.step--active .step__label { color: var(--color-white); }

/* Form */
.form-paso h3 {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--color-white);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.form-group label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--color-white-dim);
}

.form-group input,
.form-group select,
.form-group textarea {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: var(--radius-md);
  padding: 10px 14px;
  color: var(--color-white);
  font-family: var(--font-body);
  font-size: 0.9rem;
  transition: border-color var(--transition-fast);
  resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-accent-gold);
}

.form-group input::placeholder,
.form-group textarea::placeholder { color: rgba(255,255,255,0.2); }

.form-group select option { background: #1e1d35; }

/* Radio */
.radio-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 4px;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--color-white-dim);
  cursor: pointer;
}

.radio-label input { display: none; }

.radio-dot {
  width: 16px; height: 16px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.2);
  transition: all var(--transition-fast);
  flex-shrink: 0;
}

.radio-label:has(input:checked) .radio-dot {
  border-color: var(--color-accent-gold);
  background: var(--color-accent-gold);
  box-shadow: 0 0 8px rgba(232,197,71,0.4);
}

.radio-dot--scout { border-color: var(--color-scout-light); }
.radio-dot--guia  { border-color: var(--color-guia-light); }

/* Buttons */
.btn-next, .btn-submit {
  margin-top: 24px;
  padding: 12px 28px;
  background: var(--color-accent-gold);
  color: #1a1a2e;
  border-radius: var(--radius-md);
  font-weight: 700;
  font-size: 0.95rem;
  transition: background var(--transition-fast);
  font-family: var(--font-body);
}

.btn-next:hover:not(:disabled),
.btn-submit:hover:not(:disabled) { background: #f0d060; }

.btn-next:disabled, .btn-submit:disabled { opacity: 0.4; cursor: not-allowed; }

.form-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
}

.btn-back {
  font-size: 0.875rem;
  color: var(--color-white-dim);
  font-family: var(--font-body);
  transition: color var(--transition-fast);
}

.btn-back:hover { color: var(--color-white); }

/* Resumen */
.resumen {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 24px;
  background: rgba(255,255,255,0.03);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.06);
}

  
.resumen-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-accent-gold);
  margin-bottom: 8px;
}

.resumen-group p {
  font-size: 0.875rem;
  color: var(--color-white-dim);
  margin-bottom: 4px;
}

.resumen-group strong { color: var(--color-white); }

/* Check */
.check-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.85rem;
  color: var(--color-white-dim);
  cursor: pointer;
}

.check-label input { margin-top: 2px; accent-color: var(--color-accent-gold); }

/* Success */
.insc-success {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  gap: 16px;
}

.success-icon { font-size: 4rem; }

.insc-success h2 {
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 900;
}

.insc-success p {
  font-size: 1rem;
  color: var(--color-white-dim);
  max-width: 380px;
  line-height: 1.7;
}

.btn-home {
  margin-top: 8px;
  padding: 12px 28px;
  background: var(--color-accent-gold);
  color: #1a1a2e;
  border-radius: var(--radius-md);
  font-weight: 700;
}

/* Info sidebar */
.insc-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-block {
  padding: 24px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.06);
}

.info-block h3 {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: var(--color-accent-gold);
}

.info-block p {
  font-size: 0.875rem;
  color: var(--color-white-dim);
  line-height: 1.6;
}

.info-block ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.info-block li {
  font-size: 0.875rem;
  color: var(--color-white-dim);
  padding-left: 16px;
  position: relative;
}

.info-block li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent-gold);
  font-size: 0.8rem;
}

.info-block--cta {
  background: linear-gradient(135deg, rgba(232,197,71,0.1), rgba(232,197,71,0.05));
  border-color: rgba(232,197,71,0.2);
}

.btn-contact {
  display: inline-block;
  margin-top: 12px;
  padding: 10px 22px;
  border: 1px solid var(--color-accent-gold);
  color: var(--color-accent-gold);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  transition: all var(--transition-fast);
}

.btn-contact:hover {
  background: var(--color-accent-gold);
  color: #1a1a2e;
}

@media (max-width: 960px) {
  .insc-layout { grid-template-columns: 1fr; }
  .insc-info { display: grid; grid-template-columns: 1fr 1fr; }
}

@media (max-width: 600px) {
  .form-grid { grid-template-columns: 1fr; }
  .resumen { grid-template-columns: 1fr; }
  .insc-info { grid-template-columns: 1fr; }
  .insc-form-wrapper { padding: 24px 20px; }
}
</style>
