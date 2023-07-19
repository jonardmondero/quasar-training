<template>
  <div>
    <q-page>
      <!-- log in form -->
      <div class="row">
        <div class="col-12 col-md-12 col-lg-12">
          <q-form @submit="login" class="fixed-center">
            <q-card style="width: 400px">
              <q-card-section>
                <div class="text-center">
                  <q-img
                    style="width: 50%"
                    class=" "
                    src="../assets/image/download.png"
                    fit="scale-down"
                    alt=""
                  />
                </div>

                <div class="text-h6 text-bold text-center">
                  Enter your account
                </div>
              </q-card-section>
              <q-card-section>
                <!-- <q-input
                 filled
                 label-color="dark"
                 item-aligned
                 clearable
                 color="black"
                 v-model="formData.email"
                 label="Username" /> -->
                <InputField
                  clearable
                  v-model="formData.email"
                  label="Email"
                  type="email"
                />
                <!-- <q-input
                  filled
                  label-color="black"
                  color="black"

                  item-aligned
                  class="q-mt-md"

                > -->
                <InputField
                  class="q-mt-md"
                  v-model="formData.password"
                  label="Password"
                  :type="isPwd ? 'password' : 'text'"
                >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </InputField>
                <!-- </q-input> -->
                <q-item-section>
                  <q-btn
                    rounded
                    type="submit"
                    label="Log in"
                    color="positive"
                    class="q-mt-lg"
                  />
                  <router-link to="/register" class="q-mt-lg text-center danger"
                    >Register here...</router-link
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
// import axios from "axios";
import { api } from "../boot/axios";
import InputField from "../components/InputFields.vue";
import { SessionStorage, useQuasar } from "quasar";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const $router = useRouter();
const q = useQuasar();

const isPwd = ref(true);
const formData = reactive({
  email: "",
  password: "",
});

async function login() {
  await api
    .post("/loginAccount", formData)
    .then(function (response) {
      console.log(response);

      if (response.status == 200) {
        //save token to session storage
        SessionStorage.set("token", response.data.token);
        SessionStorage.set("id", response.data.user.id);
        //redirect to home page
        $router.push("admin/dashboard");
        // console.log(SessionStorage);
      }
    })
    .catch(function (error) {
      q.notify({
        message: "Invalid credentials",
        position: "top-right",
        color: "red",
      });
      console.log(error);
    });
}
//login function with http request
</script>
