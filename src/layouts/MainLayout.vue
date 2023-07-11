<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <q-btn flat icon="shopping_cart">
          <q-badge color="red" floating>
            {{ cart.cart }}
          </q-badge>
        </q-btn>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list padding seperator bordered>
        <q-item to="/" exact>
          <q-item-section avatar>
            <q-icon name="home"></q-icon>
          </q-item-section>
          <q-item-section>Home Page </q-item-section>
        </q-item>
        <q-item @click="trigger" to="/category" exact>
          <q-item-section avatar>
            <q-icon name="category"></q-icon>
          </q-item-section>
          <q-item-section>Category </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="dark_mode"></q-icon>
          </q-item-section>
          <q-item-section @click="toggleDarkMode">
            Toggle Dark Mode</q-item-section
          >
        </q-item>
        <q-expansion-item icon="person" expand-separator label="My Account">
          <q-list>
            <q-item to="/profile"></q-item>
          </q-list>
        </q-expansion-item>
      </q-list>
      <!-- <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list> -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- <ajaxBar /> -->
  </q-layout>
</template>

<script setup>
import { defineComponent, ref } from "vue";
// import EssentialLink from "components/EssentialLink.vue";
import { useQuasar } from "quasar";
import { inject } from "vue";
import { cart } from "../reactive.js";
const cartCount = inject("contextValue");
const $q = useQuasar();
const leftDrawerOpen = ref(false);

function toggleDarkMode() {
  $q.dark.toggle();
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const bar = ref(null);

function trigger() {
  const barRef = bar.value;
  barRef.start();

  setTimeout(() => {
    const barRef = bar.value;
    if (barRef) {
      barRef.stop();
    }
  }, Math.random() * 3000 + 1000);
}

// export default defineComponent({
//   name: "MainLayout",

//   components: {
//     // EssentialLink,
//   },
//   methods: {

//   },
//   setup() {
//

//     return {
//       essentialLinks: linksList,
//       leftDrawerOpen,
//       toggleLeftDrawer() {
//
//       },
//     };
//   },
// });
</script>
