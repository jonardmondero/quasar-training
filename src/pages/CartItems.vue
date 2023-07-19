<template>
  <q-dialog>
    <q-card>
      <q-list v-for="cartItemData in cartItem" :key="cartItemData.id">
        <q-item> </q-item>
      </q-list>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { cartItems } from "../reactive";
import { ref } from "vue";

const cartItem = ref([]);
cartItem.value = cartItems;
</script>

<style lang="scss" scoped></style>
