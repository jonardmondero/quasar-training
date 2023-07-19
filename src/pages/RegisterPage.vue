<template>
  <div>
    <q-page>
      <!-- log in form -->
      <div class="row">
        <div class="col-12 col-md-12 col-lg-12">
          <q-form @submit="register" class="fixed-center">
            <q-card style="width: 400px">
              <q-card-section>
                <div class="text-h4 text-bold text-center">Register Here</div>
              </q-card-section>
              <q-card-section>
                <q-input filled v-model="formData.name" label="Name" />
                <q-separator class="q-my-lg" />
                <q-input
                  filled
                  v-model="formData.email"
                  class="q-mt-md"
                  label="email"
                />
                <q-input
                  filled
                  class="q-mt-md"
                  v-model="formData.password"
                  type="password"
                  label="Password"
                />
                <q-item-section>
                  <q-btn
                    type="submit"
                    label="Submit"
                    color="primary"
                    class="q-mt-md"
                  />
                  <router-link to="/" class="q-mt-lg text-center"
                    >Return to Log in...</router-link
                  >
                </q-item-section>
              </q-card-section>
            </q-card>
          </q-form>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { api } from "../boot/axios";

const formData = reactive({
  name: "",
  email: "",
  password: "",
});
const name = ref();
const username = ref();
const password = ref();
import { SessionStorage } from "quasar";
async function register() {
  await api
    .post("/registerUser", formData)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>
