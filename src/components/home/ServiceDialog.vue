<template>
  <dialog ref="dialog" class="service-dialog" :class="{ 'is-closing': closing }" aria-labelledby="service-title" aria-describedby="service-description" @cancel.prevent="close" @click="onBackdrop">
    <button type="button" class="service-dialog__close" aria-label="Cerrar detalle del servicio" autofocus @click="close"><AppIcon name="close" /></button>
    <div class="service-dialog__icon"><AppIcon :name="service.icon" :size="36" /></div>
    <span class="eyebrow">El servicio nos encuentra</span>
    <h2 id="service-title">{{ service.titulo }}</h2>
    <p id="service-description">{{ service.descripcion }}</p>
    <button type="button" class="btn btn-primary" @click="close">Volver a la comunidad <AppIcon /></button>
  </dialog>
</template>
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import AppIcon from '@/components/shared/AppIcon.vue'
defineProps({ service: { type: Object, required: true } })
const emit = defineEmits(['close'])
const dialog = ref(null)
const closing = ref(false)
let timer
let previousOverflow
let opener
onMounted(() => {
  opener = document.activeElement
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  // Native modal semantics provide focus containment and an inert background.
  dialog.value.showModal()
})
function close() {
  if (closing.value) return
  closing.value = true
  timer = window.setTimeout(() => {
    dialog.value?.close()
    emit('close')
  }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 180)
}
function onBackdrop(event) {
  if (event.target !== dialog.value) return
  const box = dialog.value.getBoundingClientRect()
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) close()
}
onBeforeUnmount(() => {
  window.clearTimeout(timer)
  document.body.style.overflow = previousOverflow
  dialog.value?.close()
  if (opener?.isConnected) opener.focus({ preventScroll: true })
})
</script>
<style scoped>
.service-dialog { position: fixed; inset: 0; margin: auto; width: min(560px, calc(100% - 32px)); max-height: calc(100dvh - 40px); padding: clamp(28px, 6vw, 48px); overflow-y: auto; background: var(--color-paper); color: var(--color-text); border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); animation: dialog-in 250ms var(--ease-out); transition: opacity 180ms var(--ease-out), transform 180ms var(--ease-out); }
.service-dialog::backdrop { background: #211a2dde; animation: backdrop-in 180ms var(--ease-out); }
.service-dialog.is-closing { opacity: 0; transform: translateY(12px) scale(.98); }
.service-dialog.is-closing::backdrop { animation: backdrop-out 180ms var(--ease-out) forwards; }
.service-dialog__close { position: absolute; right: 16px; top: 16px; display: grid; place-items: center; width: 44px; height: 44px; border-radius: 50%; background: var(--color-primary-light); }
.service-dialog__close:hover { background: #e2d6ee; }
.service-dialog__icon { display: grid; place-items: center; width: 76px; height: 76px; border-radius: 22px; color: var(--color-primary); background: var(--color-primary-light); margin-bottom: 32px; }
.service-dialog h2 { font: 700 clamp(1.8rem, 5vw, 2.5rem)/1.15 var(--font-display); letter-spacing: -.03em; margin-bottom: 20px; }
.service-dialog p { color: var(--color-text-muted); line-height: 1.8; margin-bottom: 32px; }
@keyframes dialog-in { from { opacity: 0; transform: translateY(16px) scale(.98); } to { opacity: 1; transform: none; } }
@keyframes backdrop-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes backdrop-out { from { opacity: 1; } to { opacity: 0; } }
</style>
