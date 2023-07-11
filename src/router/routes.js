const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/ajaxbar", component: () => import("pages/ajaxBar.vue") },
      { path: "/category", component: () => import("pages/pageCategory.vue") },
      { path: "/profile", component: () => import("pages/ProfilePage.vue") },
      {
        path: "/products/:id",
        component: () => import("pages/ProductsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
