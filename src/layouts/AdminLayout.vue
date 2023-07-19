<template>
  <q-layout view="lHh lpR fFf">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>

          Title
        </q-toolbar-title>
        <q-item class="text-h6 cursor-pointer"
          ><q-item-label @click="Logout">Logout</q-item-label></q-item
        >
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-item horizontal>
        <q-avatar class="q-mt-lg q-ml-md">
          <q-img
            src="../assets/image/portrait-man-laughing.jpg"
            avatar
            fit="scale-down"
          />
        </q-avatar>
        <q-item-section class="q-mt-md q-ml-lg">
          <q-item-label>Jonard Mondero</q-item-label>
        </q-item-section>
      </q-item>

      <q-list v-for="sideItem in sideItems" :key="sideItem.key" class="q-pl-lg">
        <q-item :to="sideItem.path">
          <q-item-section avatar space-between class="q-pr-lg">
            <q-icon :name="sideItem.icon"></q-icon>
          </q-item-section>
          <q-item-section> {{ sideItem.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { SessionStorage } from "quasar";
import { sideItems } from "../constants/constants.js";
import { useRouter } from "vue-router";
const leftDrawerOpen = ref(false);
const $router = useRouter();
function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
function Logout() {
  console.log("test");
  SessionStorage.clear();
  $router.push("/");
}
</script>
