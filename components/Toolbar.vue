<template>
	<div>
		<v-toolbar fixed dense app>
			<v-toolbar-side-icon @click="$store.commit('drawer/toggle')"/>
			<v-toolbar-title class="main-toolbar--title">
				<v-layout column wrap fill-height justify-center>
					<div class="title ma-0 pa-0">Title</div>
					<div class="caption font-weight- ma-0 pa-0">
						<v-breadcrumbs divider="/" :items="$store.state.breadcrumbs.items" class="px-0 py-0">
							<template v-slot:item="props">
								<a v-if="props.item.url === '/'" href="/"><v-icon size="16px" color="primary">mdi-home</v-icon></a>
								<a v-else :href="props.item.url" class="breadcrumb-link caption text-capitalize" :class="[props.item.disabled && 'disabled']">{{ props.item.text.replace(/-/g, ' ').toUpperCase() }}</a>
							</template>
						</v-breadcrumbs>
					</div>
				</v-layout>
			</v-toolbar-title>
			<v-spacer></v-spacer>

			<v-layout row wrap fill-height justify-end align-center class="main-search--wrapper" :class="{ 'active': searchActive }">
				<v-text-field
					id="search"
					placeholder="Search"
					solo flat hide-details
					background-color=""
					append-icon="mdi-magnify"
					class="main-search--field d-block ma-0 pa-0"
					@focus="searchActive = true"
					@blur="searchActive = false"
				></v-text-field>
			</v-layout>
			<v-btn flat icon color="primary" >
				<v-badge
					overlap
					color="accent"
				>
					<template v-slot:badge>
						<span>6</span>
					</template>
					<v-icon>mdi-bell</v-icon>
				</v-badge>
			</v-btn>
		</v-toolbar>
	</div>
</template>

<script>
export default {
	name: 'Toolbar',
	data() {
		return {
			searchActive: false
		}
	}
}
</script>

<style>
.main-search--wrapper {
	max-width: 260px;
}
.main-search--field {
	max-width: 200px;
}
.main-search--field .v-input__slot {
	margin: 0
}
.main-search--field.v-text-field.v-text-field--solo .v-input__control {
	min-height: 36px
}
.main-search--wrapper.active .main-search--field {
	max-width: 260px;
}
.main-search--wrapper, .main-search--field {
	transition: background .2s,flex .2s,opacity .2s,width .2s,-webkit-box-flex .2s,-ms-flex .2s !important
}
.main-toolbar--title {
	height: 48px
}
.main-toolbar--title .title {
	font-size: 17px !important;
}
</style>
