<template>
  <q-page class="flex flex-center">
    <q-input label="Username  "></q-input>
    <router-link to="/ajaxbar">Go to ajaxbar</router-link>
    <q-btn @click="toggleDarkMode">Toggle Dark Mode</q-btn>
  </q-page>
</template>

<script setup>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();
function toggleDarkMode() {
  $q.dark.toggle();
}
</script>
