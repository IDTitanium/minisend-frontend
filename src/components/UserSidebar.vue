<template>
  <SidebarLayout>
    <template v-slot:menu-list>
      <SidebarMenuList :menuList="menuList" />
    </template>
  </SidebarLayout>
</template>
<script>
import SidebarMenuList from "./SidebarMenuList.vue";
import SidebarLayout from "./SidebarLayout.vue";

export default {
  data() {
    return {};
  },
  components: {
    SidebarMenuList,
    SidebarLayout,
  },
  computed: {
    menuList() {
      return [
        {
          icon: "home",
          title: "Home",
          path: "/",
          exact: true,
          showInSidebar: true,
        },
        {
          icon: "suitcase",
          title: "Dashboard",
          path: "/dashboard",
          showInSidebar: true,
        },
      ];
    },
  },
};
</script>
<style lang="scss" scoped>
.location-name-mobile {
  font-size: 14px;
}
.location-address-mobile {
  font-size: 12px;
  opacity: 0.6;
}

.location-mobile {
  background-color: gray;
  font-size: 10px;
  letter-spacing: 0.03px;
  line-height: 14px;
}
.v-avatar.v-list-item__avatar.location-icon {
  margin: 0;
  height: unset !important;
  min-width: unset !important;
  width: 30px !important;
  display: inline-block;
  border-radius: unset;

  .svg-inline--fa.fa-w-20 {
    align-content: center;
    color: wheat;
    height: 12px !important;
    min-width: unset !important;
    width: 15px !important;
  }
}
.v-list:hover
  .v-avatar.v-list-item__avatar.location-icon
  .svg-inline--fa.fa-w-20 {
  color: lavender;
}
.location-info.v-list-item.theme--light {
  .v-list-item__icon {
    margin: 0;
    padding: 0;
    height: 100%;

    .svg-inline--fa {
      height: 12px;
      width: 12px;
      color: palegoldenrod;
    }
  }
}
.location-info .title.location-name {
  font-size: 14px !important;
  letter-spacing: 0.03px !important;
  line-height: 14px !important;
  color: white;
}
.theme--light.v-list-item .v-list-item__subtitle.location-address {
  margin-top: 5px;
  font-size: 12px !important;
  letter-spacing: 0.02px !important;
  line-height: 11px !important;
  color: white;
  opacity: 0.6;
}
hr.location-info-divider {
  border-top: 1px solid cornflowerblue;
  margin-top: 0;
}
.location-divider-mobile {
  border: 1px solid palegoldenrod !important;
}
.location-list {
  position: relative;
  height: 65px;
  border-bottom: 1px solid cornflowerblue !important;
}
.show-locations {
  position: absolute;
  left: 400px;
}
</style>
