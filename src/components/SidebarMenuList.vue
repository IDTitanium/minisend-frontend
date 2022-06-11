<template>
  <!-- Sidebar menu list -->
  <v-list class="py-0">
    <template v-for="(item, key) in activeMenuGroup">
      <div :key="key">
        <v-list-group
          :key="item.title"
          v-if="item.showInSidebar"
          prepend-icon
          append-icon
          no-action
          v-model="item.active"
          class="menu-list-item group"
          :class="highlightTitle[item.title] ? 'gin-bg' : ''"
        >
          <!-- MenuItems with SubMenu -->
          <template
            v-slot:activator
            class="menu-list-item"
            v-if="item.items != null"
          >
            <v-list-item
              class="item-title pl-5"
              v-model="item.active"
              :class="highlightTitle[item.title] ? 'highlight-title' : ''"
            >
              <v-list-item-content>
                <v-list-item-title>
                  <span class="menu-icon">
                    <font-awesome-icon
                      class
                      :icon="item.icon"
                    ></font-awesome-icon>
                  </span>
                  <span class="item-title">
                    {{ item.title }}
                  </span>
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-icon v-if="item.items != null">
                <font-awesome-icon
                  class="item-icon"
                  icon="caret-right"
                ></font-awesome-icon>
              </v-list-item-icon>
            </v-list-item>
          </template>

          <!-- MenuItems without SubMenu -->
          <template v-slot:activator class="menu-list-item" v-else>
            <v-list-item
              :to="item.path"
              :key="item.path"
              class="item-title pl-5"
              :class="
                highlightTitle[item.title] ? ['highlight-title', 'gin--bg'] : ''
              "
            >
              <v-list-item-content>
                <v-list-item-title>
                  <span class="menu-icon">
                    <font-awesome-icon :icon="item.icon"></font-awesome-icon>
                  </span>
                  <span class="item-title">
                    {{ item.title }}
                  </span>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>

          <!-- Content of SubMenu -->
          <template>
            <div class="dark-border-accent" v-if="item.items">
              <template v-for="subMenuItem in item.items">
                <!-- SubMenu with InnerMenu -->
                <template v-if="subMenuItem.items">
                  <v-list-group
                    :key="subMenuItem.title"
                    v-if="subMenuItem.showInSidebar"
                    prepend-icon
                    no-action
                    sub-group
                    v-model="subMenuItem.active"
                    class="menu-list-item group submenu-list-item"
                  >
                    <template v-slot:activator class="menu-list-item">
                      <v-list-item
                        class="item-title pl-8"
                        v-model="subMenuItem.active"
                        :class="
                          highlightTitle[subMenuItem.title]
                            ? 'highlight-title'
                            : ''
                        "
                      >
                        <v-list-item-icon
                          class="items-center mx-0"
                          v-if="subMenuItem.items != null"
                        >
                          <font-awesome-icon
                            class="submenu-item-icon"
                            icon="caret-right"
                          ></font-awesome-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>
                            <span class="subitem-title">
                              {{ subMenuItem.title }}
                            </span>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </template>

                    <!-- Content of InnerMenu -->
                    <template>
                      <div
                        class="py-2 dark-border-accent"
                        v-if="subMenuItem.items"
                      >
                        <template v-for="innerMenuItem in subMenuItem.items">
                          <v-list-item
                            :key="innerMenuItem.title"
                            v-if="
                              innerMenuItem !== null &&
                              innerMenuItem.showInSidebar
                            "
                            :to="innerMenuItem.path"
                            class="pl-16 innermenu-list-item"
                          >
                            <span v-if="innerMenuItem.isBeta" class="beta"
                              >beta</span
                            >

                            <v-list-item-content class="p-0">
                              <v-list-item-title>
                                <v-list-item-title
                                  class="subitem-title inner-menu-title"
                                >
                                  {{ innerMenuItem.title }}
                                </v-list-item-title>
                              </v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </template>
                      </div>
                    </template>
                  </v-list-group>
                </template>

                <!-- SubMenu without InnerMenu -->
                <template v-else>
                  <v-list-item
                    :key="subMenuItem.title"
                    v-if="subMenuItem !== null && subMenuItem.showInSidebar"
                    :to="subMenuItem.path"
                    class="subitem-title pl-14 submenu-list-item single-submenu-list-item"
                  >
                    <span v-if="subMenuItem.isBeta" class="beta">beta</span>

                    <v-list-item-content class="p-0">
                      <v-list-item-title>
                        <v-list-item-title
                          class="subitem-title"
                          id="submenu-item-title"
                        >
                          {{ subMenuItem.title }}
                        </v-list-item-title>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </template>
            </div>
          </template>
        </v-list-group>
      </div>
    </template>
  </v-list>
</template>
<script>
export default {
  data() {
    return {
      highlightTitle: {},
      route: document.location.href.split("//")[1],
      activeMenuGroup: [],
    };
  },
  props: {
    menuList: Array,
  },
  created() {
    if (!this.route) {
      return;
    }
    this.setActiveMenuGroup(this.route);
  },
  methods: {
    setHighlightTitle(menuItem, subMenuItem) {
      this.activeMenuGroup[menuItem].active = true;
      this.highlightTitle = {};
      this.highlightTitle[this.activeMenuGroup[menuItem].title] = true;

      if (subMenuItem) {
        const subMenuArray = this.activeMenuGroup[menuItem]["items"];
        subMenuArray[subMenuItem].active = true;
        this.highlightTitle[subMenuArray[subMenuItem].title] = true;
      }
    },
    setActiveMenuGroup(route) {
      this.activeMenuGroup = this.menuList;

      let routePath = route.split("/");
      routePath.shift();
      routePath = `/${routePath.join("/")}`;

      for (const menuItem in this.activeMenuGroup) {
          // Highlight Home route when active
          if (routePath == "/") {
            const homeMenuItem = this.activeMenuGroup.findIndex(
              (item) => item.title == "Home"
            );
            this.setHighlightTitle(homeMenuItem);
            return;
          }

          // MenuItems without subMenus
          if (this.activeMenuGroup[menuItem].path == routePath) {
            this.setHighlightTitle(menuItem);
            return;
          }
      }

      // If no match is found for a route on menu group
      this.highlightTitle = {};
    },
  },
  watch: {
    $route() {
      this.route = document.location.href.split("//")[1];
      this.setActiveMenuGroup(this.route);
    },
  },
};
</script>
<style lang="scss" scoped>
.beta {
  display: inline-block;
  position: absolute;
  left: 20px;
  font-size: 9px;
  color: white;
  background: turquoise;
  padding: 2px;
}
</style>
