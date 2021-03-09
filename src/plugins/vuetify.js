import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import GreeKFlag from "../components/GreekFlag.vue";
import UkFlag from "../components/UkFlag.vue";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: "#43a047",
        secondary: "#0097a7",
        accent: "#8d6e63",
        error: "#f44336",
        warning: "#ff5722",
        info: "#2196f3",
        success: "#4caf50"
      }
    }
  },
  icons: {
    iconfont: "mdiSvg",
    values: {
      GreekFlag: {
        component: GreeKFlag
      },
      UkFlag: {
        component: UkFlag
      }
    }
  }
});
