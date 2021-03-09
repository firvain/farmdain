<template>
  <v-app>
    <v-app-bar app color="primary" dark flat>
      <div class="d-flex align-center">
        <v-img
          alt="FarmDain Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/sacred-cow.svg')"
          transition="scale-transition"
          width="40"
        />

        <v-toolbar-title shrink-on-scroll dark>FarmDain</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
      <v-btn v-if="!isLogged" :to="{ path: '/login' }" text>
        <span v-if="$vuetify.breakpoint.mdAndUp" class="mr-2">{{
          $t("user.login")
        }}</span>
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
      <v-btn v-if="isLogged" @click="logout" text>
        <span class="mr-2">{{ $t("user.logout") }}</span>
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
      <v-btn @click="setLanguage" text>
        <v-icon v-if="this.$i18n.locale === 'en'">$UkFlag</v-icon>
        <v-icon v-else>$GreekFlag</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-model="tab" show-arrows center-active align-with-title>
          <v-tab v-for="(tab, index) in tabs" :key="index" :to="tab.path">
            {{ tab.text }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
    <AppFooter app />
  </v-app>
</template>

<script>
import AppFooter from "./components/AppFooter";
// import Home from "./views/Home.vue";
export default {
  name: "App",

  components: {
    // Home,
    AppFooter
  },
  data() {
    return {
      tab: null
    };
  },
  computed: {
    isLogged() {
      return this.$store.state.isLoggedIn;
    },
    tabs() {
      return [
        { path: "/", text: this.$t("appbar.tabs.home") },
        { path: "/project", text: this.$t("appbar.tabs.project") },
        { path: "/partners", text: this.$t("appbar.tabs.partners") },
        { path: "/news", text: this.$t("appbar.tabs.news") },
        { path: "/files", text: this.$t("appbar.tabs.files") },
        { path: "/contact", text: this.$t("appbar.tabs.contact") }
      ];
    }
  },
  methods: {
    setLanguage() {
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "el";

        this.$forceUpdate();
      } else {
        this.$i18n.locale = "en";
        this.$forceUpdate();
      }
    },
    logout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=GFS+Neohellenic:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap");

$body-font-family: "Open Sans", sans-serif;
$title-font: "Open Sans", sans-serif;
.v-application {
  font-family: $body-font-family, sans-serif !important;
  .title {
    // To pin point specific classes of some components
    font-family: $title-font, sans-serif !important;
  }
}
.v-btn {
  text-transform: none !important;
}
</style>
