<template>
  <Teleport to="body">
    <Transition name="modal-overlay-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] overflow-y-auto flex items-center sm:items-center justify-center"
        aria-labelledby="interest-modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div
          class="fixed inset-0 bg-gray-500/75 dark:bg-black/60 transition-opacity"
          aria-hidden="true"
          @click="closeModal"
        ></div>

        <Transition name="modal-content-scale">
          <div
            v-if="isOpen"
            ref="modalContentRef"
            class="relative inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full m-4 p-6 pt-5"
          >
            <div class="flex justify-between items-center mb-4">
              <h3 id="interest-modal-title" class="text-lg font-semibold text-gray-900 dark:text-white">
                Interesse für "{{ offerName }}" vormerken
              </h3>
              <button
                @click="closeModal"
                class="p-1.5 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-color"
                aria-label="Modal schließen"
              >
                <i class="fas fa-times text-md"></i>
              </button>
            </div>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Wir informieren Sie unverbindlich per E-Mail, sobald dieses Angebot verfügbar ist oder neue Termine feststehen. Kein Spam, versprochen!
              </p>
              <div>
                <label for="interest-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ihr Name <span class="text-red-500">*</span></label>
                <input type="text" id="interest-name" v-model="formData.name" class="form-input" required>
              </div>
              <div>
                <label for="interest-email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Ihre E-Mail-Adresse <span class="text-red-500">*</span></label>
                <input type="email" id="interest-email" v-model="formData.email" class="form-input" required>
              </div>
              <div class="pt-2">
                <AppButton type="submit" variant="primary" size="lg" :fullWidth="true" :disabled="isSubmitting">
                   <template v-if="!isSubmitting">Interesse unverbindlich vormerken</template>
                   <template v-else><i class="fas fa-spinner fa-spin mr-2"></i> Sende...</template>
                </AppButton>
              </div>
              <p v-if="statusMessage" :class="statusType === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'" class="text-xs text-center mt-2">{{ statusMessage }}</p>
            </form>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive, watch, nextTick } from 'vue';
import AppButton from '~/components/AppButton.vue';
import { onClickOutside } from '@vueuse/core';

interface Props {
  isOpen: boolean;
  offerName: string;
}
interface Emits {
  (e: 'close'): void;
  (e: 'submitInterest', formData: { name: string; email: string }): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const formData = reactive({ name: '', email: '' });
const isSubmitting = ref(false);
const statusMessage = ref('');
const statusType = ref<'success' | 'error' | ''>('');
const modalContentRef = ref<HTMLElement | null>(null);

const closeModal = () => {
  emit('close');
};

onClickOutside(modalContentRef, closeModal, { ignore: [] });

watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    formData.name = '';
    formData.email = '';
    statusMessage.value = '';
    statusType.value = '';
    isSubmitting.value = false;
    nextTick(() => {
      modalContentRef.value?.querySelector('input,button')?.focus();
    });
  }
});

const handleSubmit = async () => {
  if (!formData.name || !formData.email) {
    statusMessage.value = 'Bitte füllen Sie beide Felder aus.';
    statusType.value = 'error';
    return;
  }
  isSubmitting.value = true;
  statusMessage.value = '';
  statusType.value = '';

  try {
    // Hier würde die eigentliche Sende-Logik stehen (z.B. API Call)
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simuliere API Call
    emit('submitInterest', { ...formData });
    statusMessage.value = 'Vielen Dank! Wir haben Ihr Interesse gespeichert.';
    statusType.value = 'success';
    setTimeout(closeModal, 3000);
  } catch (error) {
    statusMessage.value = 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.';
    statusType.value = 'error';
    console.error("Fehler beim Vormerken des Interesses:", error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.form-input {
  @apply block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-primary-color focus:border-primary-color focus:outline-none sm:text-sm;
}

.modal-overlay-fade-enter-active,
.modal-overlay-fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.modal-overlay-fade-enter-from,
.modal-overlay-fade-leave-to {
  opacity: 0;
}

.modal-content-scale-enter-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.modal-content-scale-leave-active {
  transition: all 0.2s ease-in;
}
.modal-content-scale-enter-from,
.modal-content-scale-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}
</style>