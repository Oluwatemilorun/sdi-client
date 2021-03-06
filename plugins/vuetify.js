/*
 ** vuetify module configuration
 ** https://github.com/nuxt-community/vuetify-module
 */

import Vue from "vue";
import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";

import "@mdi/font/css/materialdesignicons.min.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";

let theme = {
	primary: colors.cyan.lighten1,
	secondary: colors.cyan.lighten2,
	tertiary: colors.orange.darken4,
	accent: colors.pink.accent2,
	info: colors.teal.lighten1,
	warning: colors.amber.base,
	error: colors.deepOrange.accent4,
	success: colors.green.accent3
}

Vue.use(Vuetify, {
	theme,
	iconfont: "mdi"
});