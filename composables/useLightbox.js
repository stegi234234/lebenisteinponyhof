import { ref, computed, onMounted, onUnmounted } from 'vue'; // computed hinzugefügt

// Keine expliziten Interface-Definitionen in reinem JavaScript nötig
// const isVisible = ref<boolean>(false); // Typ entfernt
const isVisible = ref(false);
// const currentGallery = ref<LightboxItem[]>([]); // Typ entfernt
const currentGallery = ref([]);
const currentIndex = ref(0);

const currentSrc = computed(() => currentGallery.value[currentIndex.value]?.src || '');
const currentCaption = computed(() => currentGallery.value[currentIndex.value]?.caption || '');

export function useLightbox() {
    const open = (src, caption) => { // Typen entfernt
        currentGallery.value = [{ src, caption }];
        currentIndex.value = 0;
        isVisible.value = true;
        if (process.client) document.body.style.overflow = 'hidden';
    };

    const openGallery = (items, startIndex = 0) => { // Typen entfernt
        if (!items || items.length === 0) return;
        currentGallery.value = items;
        currentIndex.value = Math.max(0, Math.min(startIndex, items.length - 1));
        isVisible.value = true;
        if (process.client) document.body.style.overflow = 'hidden';
    };

    const close = () => {
        isVisible.value = false;
        if (process.client) document.body.style.overflow = '';
        currentGallery.value = [];
        currentIndex.value = 0;
    };

    const next = () => {
        if (currentGallery.value.length > 1) {
            currentIndex.value = (currentIndex.value + 1) % currentGallery.value.length;
        }
    };

    const prev = () => {
        if (currentGallery.value.length > 1) {
            currentIndex.value = (currentIndex.value - 1 + currentGallery.value.length) % currentGallery.value.length;
        }
    };

    return {
        isVisible,
        currentSrc,
        currentCaption,
        currentGallery, // Hinzugefügt, damit LightboxModal.vue darauf zugreifen kann für isGallery
        open,
        openGallery,
        close,
        next,
        prev
    };
}