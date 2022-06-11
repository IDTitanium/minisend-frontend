<template>
  <div class="col-md-2 p-0 sidebar cy-sidebar hide-on-print">
    <v-navigation-drawer
      v-model="drawer"
      :mobile-break-point="1200"
      app
      class="mx-0 px-0 dark-bg"
      :class="{
        'navigation-drawer-collapsed': sidebarCollapsed,
        'sidebar-hovered': sidebarHovered,
      }"
    >
      <div class="d-flex flex-column h-100" @mouseleave="unsetSidebarHovered()">
        <!-- Logo and collapse button on desktops only -->
        <div class="logo">
          <div class="flex-nowrap d-flex py-4">
            <div class="brand-logo grow pl-5">
              <router-link to="/">
                <!-- White Paypecker logo -->
                <svg width="57" height="50" viewBox="0 0 57 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_2_7)">
                    <path d="M5.63636 15.4545H12.3636L28.1818 54.0909H28.7273L44.5455 15.4545H51.2727V62H46V26.6364H45.5455L31 62H25.9091L11.3636 26.6364H10.9091V62H5.63636V15.4545Z" fill="#14C1CC"/>
                    <path d="M5.63636 15.4545V14.4545H4.63636V15.4545H5.63636ZM12.3636 15.4545L13.2891 15.0757L13.0348 14.4545H12.3636V15.4545ZM28.1818 54.0909L27.2564 54.4698L27.5107 55.0909H28.1818V54.0909ZM28.7273 54.0909V55.0909H29.3984L29.6527 54.4698L28.7273 54.0909ZM44.5455 15.4545V14.4545H43.8743L43.62 15.0757L44.5455 15.4545ZM51.2727 15.4545H52.2727V14.4545H51.2727V15.4545ZM51.2727 62V63H52.2727V62H51.2727ZM46 62H45V63H46V62ZM46 26.6364H47V25.6364H46V26.6364ZM45.5455 26.6364V25.6364H44.8755L44.6206 26.256L45.5455 26.6364ZM31 62V63H31.67L31.9248 62.3804L31 62ZM25.9091 62L24.9843 62.3804L25.2391 63H25.9091V62ZM11.3636 26.6364L12.2885 26.256L12.0336 25.6364H11.3636V26.6364ZM10.9091 26.6364V25.6364H9.90909V26.6364H10.9091ZM10.9091 62V63H11.9091V62H10.9091ZM5.63636 62H4.63636V63H5.63636V62ZM5.63636 16.4545H12.3636V14.4545H5.63636V16.4545ZM11.4382 15.8334L27.2564 54.4698L29.1073 53.712L13.2891 15.0757L11.4382 15.8334ZM28.1818 55.0909H28.7273V53.0909H28.1818V55.0909ZM29.6527 54.4698L45.4709 15.8334L43.62 15.0757L27.8018 53.712L29.6527 54.4698ZM44.5455 16.4545H51.2727V14.4545H44.5455V16.4545ZM50.2727 15.4545V62H52.2727V15.4545H50.2727ZM51.2727 61H46V63H51.2727V61ZM47 62V26.6364H45V62H47ZM46 25.6364H45.5455V27.6364H46V25.6364ZM44.6206 26.256L30.0752 61.6196L31.9248 62.3804L46.4703 27.0168L44.6206 26.256ZM31 61H25.9091V63H31V61ZM26.8339 61.6196L12.2885 26.256L10.4388 27.0168L24.9843 62.3804L26.8339 61.6196ZM11.3636 25.6364H10.9091V27.6364H11.3636V25.6364ZM9.90909 26.6364V62H11.9091V26.6364H9.90909ZM10.9091 61H5.63636V63H10.9091V61ZM6.63636 62V15.4545H4.63636V62H6.63636Z" fill="black"/>
                    </g>
                    <g filter="url(#filter1_d_2_7)">
                    <path d="M5.63636 30.4545H12.3636L28.1818 69.0909H28.7273L44.5455 30.4545H51.2727V77H46V41.6364H45.5455L31 77H25.9091L11.3636 41.6364H10.9091V77H5.63636V30.4545Z" fill="#14C1CC"/>
                    <path d="M5.63636 30.4545V29.4545H4.63636V30.4545H5.63636ZM12.3636 30.4545L13.2891 30.0757L13.0348 29.4545H12.3636V30.4545ZM28.1818 69.0909L27.2564 69.4698L27.5107 70.0909H28.1818V69.0909ZM28.7273 69.0909V70.0909H29.3984L29.6527 69.4698L28.7273 69.0909ZM44.5455 30.4545V29.4545H43.8743L43.62 30.0757L44.5455 30.4545ZM51.2727 30.4545H52.2727V29.4545H51.2727V30.4545ZM51.2727 77V78H52.2727V77H51.2727ZM46 77H45V78H46V77ZM46 41.6364H47V40.6364H46V41.6364ZM45.5455 41.6364V40.6364H44.8755L44.6206 41.256L45.5455 41.6364ZM31 77V78H31.67L31.9248 77.3804L31 77ZM25.9091 77L24.9843 77.3804L25.2391 78H25.9091V77ZM11.3636 41.6364L12.2885 41.256L12.0336 40.6364H11.3636V41.6364ZM10.9091 41.6364V40.6364H9.90909V41.6364H10.9091ZM10.9091 77V78H11.9091V77H10.9091ZM5.63636 77H4.63636V78H5.63636V77ZM5.63636 31.4545H12.3636V29.4545H5.63636V31.4545ZM11.4382 30.8334L27.2564 69.4698L29.1073 68.712L13.2891 30.0757L11.4382 30.8334ZM28.1818 70.0909H28.7273V68.0909H28.1818V70.0909ZM29.6527 69.4698L45.4709 30.8334L43.62 30.0757L27.8018 68.712L29.6527 69.4698ZM44.5455 31.4545H51.2727V29.4545H44.5455V31.4545ZM50.2727 30.4545V77H52.2727V30.4545H50.2727ZM51.2727 76H46V78H51.2727V76ZM47 77V41.6364H45V77H47ZM46 40.6364H45.5455V42.6364H46V40.6364ZM44.6206 41.256L30.0752 76.6196L31.9248 77.3804L46.4703 42.0168L44.6206 41.256ZM31 76H25.9091V78H31V76ZM26.8339 76.6196L12.2885 41.256L10.4388 42.0168L24.9843 77.3804L26.8339 76.6196ZM11.3636 40.6364H10.9091V42.6364H11.3636V40.6364ZM9.90909 41.6364V77H11.9091V41.6364H9.90909ZM10.9091 76H5.63636V78H10.9091V76ZM6.63636 77V30.4545H4.63636V77H6.63636Z" fill="black"/>
                    </g>
                    <g filter="url(#filter2_d_2_7)">
                    <path d="M5.63636 15.4545H12.3636L28.1818 54.0909H28.7273L44.5455 15.4545H51.2727V62H46V26.6364H45.5455L31 62H25.9091L11.3636 26.6364H10.9091V62H5.63636V15.4545Z" fill="#14C1CC"/>
                    <path d="M5.63636 15.4545V14.4545H4.63636V15.4545H5.63636ZM12.3636 15.4545L13.2891 15.0757L13.0348 14.4545H12.3636V15.4545ZM28.1818 54.0909L27.2564 54.4698L27.5107 55.0909H28.1818V54.0909ZM28.7273 54.0909V55.0909H29.3984L29.6527 54.4698L28.7273 54.0909ZM44.5455 15.4545V14.4545H43.8743L43.62 15.0757L44.5455 15.4545ZM51.2727 15.4545H52.2727V14.4545H51.2727V15.4545ZM51.2727 62V63H52.2727V62H51.2727ZM46 62H45V63H46V62ZM46 26.6364H47V25.6364H46V26.6364ZM45.5455 26.6364V25.6364H44.8755L44.6206 26.256L45.5455 26.6364ZM31 62V63H31.67L31.9248 62.3804L31 62ZM25.9091 62L24.9843 62.3804L25.2391 63H25.9091V62ZM11.3636 26.6364L12.2885 26.256L12.0336 25.6364H11.3636V26.6364ZM10.9091 26.6364V25.6364H9.90909V26.6364H10.9091ZM10.9091 62V63H11.9091V62H10.9091ZM5.63636 62H4.63636V63H5.63636V62ZM5.63636 16.4545H12.3636V14.4545H5.63636V16.4545ZM11.4382 15.8334L27.2564 54.4698L29.1073 53.712L13.2891 15.0757L11.4382 15.8334ZM28.1818 55.0909H28.7273V53.0909H28.1818V55.0909ZM29.6527 54.4698L45.4709 15.8334L43.62 15.0757L27.8018 53.712L29.6527 54.4698ZM44.5455 16.4545H51.2727V14.4545H44.5455V16.4545ZM50.2727 15.4545V62H52.2727V15.4545H50.2727ZM51.2727 61H46V63H51.2727V61ZM47 62V26.6364H45V62H47ZM46 25.6364H45.5455V27.6364H46V25.6364ZM44.6206 26.256L30.0752 61.6196L31.9248 62.3804L46.4703 27.0168L44.6206 26.256ZM31 61H25.9091V63H31V61ZM26.8339 61.6196L12.2885 26.256L10.4388 27.0168L24.9843 62.3804L26.8339 61.6196ZM11.3636 25.6364H10.9091V27.6364H11.3636V25.6364ZM9.90909 26.6364V62H11.9091V26.6364H9.90909ZM10.9091 61H5.63636V63H10.9091V61ZM6.63636 62V15.4545H4.63636V62H6.63636Z" fill="black"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_2_7" x="1.63637" y="15.4545" width="53.6364" height="54.5455" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_7"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_7" result="shape"/>
                    </filter>
                    <filter id="filter1_d_2_7" x="1.63637" y="30.4545" width="53.6364" height="54.5455" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_7"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_7" result="shape"/>
                    </filter>
                    <filter id="filter2_d_2_7" x="1.63637" y="15.4545" width="53.6364" height="54.5455" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="4"/>
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_7"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_7" result="shape"/>
                    </filter>
                    </defs>
                    </svg>
              </router-link>
            </div>
            <div class="d-flex justify-end align-center pl-4 pr-5">
              <v-btn
                @click="toggleSidebarCollapse"
                icon
                width="30px"
                class="expand-button"
                height="30px"
              >
                <svg
                  class="toggle-sidebar-icon"
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.29744 1.18546C7.48299 1.3709 7.48299 1.67065 7.29744 1.85608L2.41274 6.73791L7.29743 11.6197C7.48297 11.8052 7.48297 12.1049 7.29742 12.2904C7.11188 12.4758 6.81194 12.4758 6.6264 12.2904L1.40619 7.07321C1.31365 6.98072 1.26713 6.85931 1.26713 6.73788C1.26713 6.61645 1.31365 6.49504 1.40619 6.40255L6.62642 1.18543C6.81197 1.00001 7.1119 1.00002 7.29744 1.18546Z"
                    fill="#3399FF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.29744 1.18546C7.48299 1.3709 7.48299 1.67065 7.29744 1.85608L2.41274 6.73791L7.29743 11.6197C7.48297 11.8052 7.48297 12.1049 7.29742 12.2904C7.11188 12.4758 6.81195 12.4758 6.6264 12.2904L1.40619 7.07321C1.31365 6.98072 1.26713 6.85931 1.26713 6.73788C1.26713 6.61645 1.31365 6.49504 1.40619 6.40255L6.62642 1.18543C6.81197 1.00001 7.1119 1.00002 7.29744 1.18546V1.18546Z"
                    stroke="#3399FF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.861 1.18546C14.0466 1.3709 14.0466 1.67066 13.861 1.8561L8.97634 6.73791L13.861 11.6197C14.0466 11.8052 14.0466 12.1049 13.861 12.2904C13.6755 12.4758 13.3755 12.4758 13.19 12.2904L7.96979 7.07322C7.87725 6.98074 7.83073 6.85933 7.83073 6.73789C7.83073 6.61646 7.87725 6.49505 7.96979 6.40257L13.19 1.18544C13.3756 1.00003 13.6755 1.00002 13.861 1.18546Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.861 1.18546C14.0466 1.3709 14.0466 1.67066 13.861 1.8561L8.97634 6.73791L13.861 11.6197C14.0466 11.8052 14.0466 12.1049 13.861 12.2904C13.6755 12.4758 13.3755 12.4758 13.19 12.2904L7.96979 7.07322C7.87725 6.98074 7.83073 6.85933 7.83073 6.73789C7.83073 6.61646 7.87725 6.49505 7.96979 6.40257L13.19 1.18544C13.3756 1.00003 13.6755 1.00002 13.861 1.18546V1.18546Z"
                    stroke="white"
                  />
                </svg>
              </v-btn>
            </div>
          </div>
        </div>

        <div class="hide-on-desktop">
          <!-- User info -- mobile -->
          <div class="user-info-mobile px-5">
            <div class="d-flex align-center text-left space-between">
              <v-list class="w-100">
                <v-list-item class>
                  <v-list-item-avatar class>
                    <div class>
                      <span class="rounded-letter">{{
                        fullName.substring(0, 1)
                      }}</span>
                    </div>
                  </v-list-item-avatar>
                  <v-list-item-content class>
                    <v-list-item-title>
                      <span class="full-name">{{
                        fullName
                      }}</span>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <span class="company-name">
                        {{companyName }}
                      </span>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <div class="align-right hamburger">
                <font-awesome-icon
                  icon="align-right"
                  @click.stop="drawer = !drawer"
                  class="text-white"
                ></font-awesome-icon>
              </div>
            </div>
          </div>

          <!-- Extra mobile menu items -->
          <slot name="mobile-menu-items"></slot>
        </div>

        <div class="menu-list flex-lg-grow-1" @mouseenter="setSidebarHovered()">
          <slot name="menu-list"></slot>
        </div>

        <!-- Logout on mobile only -->
        <hr class="hide-on-desktop dark-border-accent" />
      </div>
    </v-navigation-drawer>

    <slot name="dialogs"></slot>
  </div>
</template>
<script>
import { eventBus } from "@/eventBus";

export default {
  data() {
    return {
      sidebarCollapsed:
        localStorage.getItem("sidebarCollapsed") == "true" || false,
      sidebarHovered: false,
      drawer: true,
      mini: "",
      companyName: 'minisend',
      fullName: "Idris Lawal"
    };
  },
  created() {
    this.handleResize();

    eventBus.$on("toggle-side-bar", () => {
      this.drawer = !this.drawer;
    });
    eventBus.$on("sidebar-collapse-toggled", () => {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    });
  },
  methods: {
    setSidebarHovered() {
      this.sidebarHovered = true;
    },
    unsetSidebarHovered() {
      this.sidebarHovered = false;
    },
    toggleSidebarCollapse() {
      this.unsetSidebarHovered();
      eventBus.$emit("sidebar-collapse-toggled");
    },
    logout() {
      this.$store.dispatch("auth/logout");
    },
    handleResize() {
      if (window.innerWidth <= 700) {
        this.mini = true;
        return;
      }
      this.mini = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.logo {
  height: 65px;
}
</style>
