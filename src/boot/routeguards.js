import { SessionStorage } from 'quasar'
import { boot } from 'quasar/wrappers'
// import { useRouter } from 'vue-router';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({router}) => {

  router.beforeEach((to,from) => {
    const auth = SessionStorage.getItem("token");

    console.log(auth);
    if ( to.path.startsWith("/admin")  && !auth) {
      return {
        path: "/",
      };
    }
  });
})
