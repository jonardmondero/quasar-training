import { reactive } from "vue";
export const cart = reactive({
  cart: 0,
});
export const cartItems = reactive({
  cartItems: [],
});

export const userForm = reactive([]);

export const toggleDelete = reactive({
  toggle: false,
});
