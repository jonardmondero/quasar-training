export const sideItems = [
  {
    key: 1,
    icon: "home",
    label: "Dashboard",
    path: "/",
  },

  {
    key: 2,
    icon: "group",
    label: "Friends",
    path: "/friends",
  },

  {
    key: 3,
    icon: "history",
    label: "Memories",
    path: "/history",
  },

  {
    key: 4,
    icon: "settings",
    label: "Settings",
    path: "/settings",
  },
];

export const columns = [
  {
    name: "id",
    required: true,
    label: "Id",
    field: "id",
  },
  {
    name: "name",
    required: true,
    label: "Name",
    field: "name",
    align: "center",
  },
  {
    name: "email",
    required: true,
    label: "Email",
    field: "email",
    align: "left",
  },
  { name: "actions", label: "ACTIONS", align: "center" },
];
