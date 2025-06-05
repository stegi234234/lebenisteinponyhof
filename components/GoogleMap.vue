<script setup lang="ts">
import { onMounted, ref } from 'vue'
const mapContainer = ref<HTMLElement | null>(null)
const config = useRuntimeConfig()

onMounted(() => {
  // Callback zum Initialisieren von Map + Marker
  const initMap = () => {
    const center = { lat: 48.765983, lng: 8.912499 }
    const map = new google.maps.Map(mapContainer.value!, {
      center,
      zoom: 15,
    })
    // Marker setzen
    new google.maps.Marker({
      position: center,
      map,
      title: 'Unser Standort: Renningen',
    })
  }

  // Script nur einmal laden
  if (typeof window.google === 'undefined') {
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${config.public.googleMapsKey}`
    script.async = true
    script.defer = true
    script.onload = initMap
    document.head.appendChild(script)
  } else {
    initMap()
  }
})
</script>

<template>
  <div ref="mapContainer" class="w-full h-80 rounded-lg shadow-md" />
</template>