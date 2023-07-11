<template>
  <q-page>
    <div class="row">
      <div
        class="q-pa-md row items-start q-gutter-md col-3"
        v-for="product in products"
        :key="product.id"
      >
        <q-card class="my-card q-gutter-none">
          <div class="">
            <q-img
              class="cursor-pointer q-pa-sm"
              avatar
              fit="contain"
              :src="product.image"
              spinner-size="16px"
              spinner-color="primary"
              @click="$router.push('/products/' + product.id)"
            />
          </div>

          <q-card-section>
            <div class="text-h6 text-bold text-center">
              {{ product.title }}
            </div>
            <div class="text-subtitle2 q-mt-md">{{ product.category }}</div>
          </q-card-section>
          <q-card-section class="q-pt-none text-justify">
            {{ product.description }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";

import axios from "axios";
// const image = ref();
const products = ref([]);
const filter = ref();
const getImage = async () => {
  const response = await axios.get("https://fakestoreapi.com/products", {
    title: filter,
  });
  products.value = response.data;
  console.log(products);
};
getImage();
</script>
