<template>
  <q-page padding>
    <q-card flat>
      <q-card-section horizontal left>
        <q-img
          no-spinner
          fit="scale-down"
          loading="eager"
          class="q-pl-md q-ml-md q-mb-lg"
          ratio="4/3"
          :src="products.image"
        >
          <q-spinner
            v-if="products.image == null"
            class="align-center"
            color="primary"
            size="3em"
          />
        </q-img>
        <q-card-section class="m-ml-md text-weight-bolder text-h3" vertical>
          {{ products.title }}
          <q-card-section class="p-mt-lg text-h5" align="left" vertical>
            {{ products.description }}
          </q-card-section>
          <q-card-section class="text-h3" style="margin-top: 80px">
            {{ price }}
          </q-card-section>
          <q-card-section>
            <q-rating v-model="rate" readonly />
          </q-card-section>

          <!-- Button Add to Cart -->

          <!-- Quantity add Button -->
          <q-card-actions align="left" horizontal>
            <q-btn
              class="text-weight-bolder"
              color="primary"
              icon="add"
              @click="addQuantity"
            />
            <q-btn
              class="text-weight-bolder"
              color="red"
              icon="remove"
              @click="removeQuantity"
            />
            <!-- Add Quantity input -->
            <q-input
              filled
              item-aligned
              class="text-weight-bolder size-sm"
              color="primary"
              label="Quantity"
              v-model="quantity"
            />
          </q-card-actions>
          <q-card-actions align="left">
            <q-btn
              class="text-weight-bolder"
              color="primary"
              label="Add to Cart"
              @click="addToCart"
            />
          </q-card-actions>
        </q-card-section>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import axios from "axios";
import { cart } from "../reactive";
import { ref } from "vue";
import { useRouter } from "vue-router";
// import { provide } from "vue";
const products = ref([]);
const router = useRouter();
const price = ref();
const rate = ref(0);
let quantity = ref(0);

// add a function for addQuantity
function addQuantity() {
  quantity.value++;
}
function removeQuantity() {
  if (quantity.value > 0) {
    quantity.value--;
  }
}

function addToCart() {
  cart.cart = quantity.value;
  cart.cartItems = [
    products.value.id,
    products.value.image,
    products.value.title,
    quantity.value,
  ];
  console.log(cart.cartItems);
}
async function getProduct() {
  const response = await axios.get(
    "https://fakestoreapi.com/products/" + router.currentRoute.value.params.id
  );
  // console.log(router.currentRoute.value.params.id);
  products.value = response.data;
  price.value = "Price: $" + response.data.price;
  rate.value = response.data.rating.rate;
}

getProduct();

// Add to Cart function

// Add to Cart function
</script>

<style lang="scss" scoped></style>
