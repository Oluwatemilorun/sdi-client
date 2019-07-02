<template>
	<v-layout row wrap>
		<v-flex xs12>
			<v-tabs
				dark
				slider-color="primary"
			>
				<v-tab v-for="(tab, index) in settingsTabItems" :key="index" :to="`/settings/${tab.url}`"> 
					{{tab.name}}
				</v-tab>
			</v-tabs>
		</v-flex>

		<v-flex xs12>
			<nuxt-child />
		</v-flex>
	</v-layout>
</template>

<script>
export default {
	async asyncData ({ req, redirect, error }) {
		try {
			// TODO: fix this...{req} not working on client
			if (req && req.url == '/settings') redirect('/settings/account');
			
		} catch (e) {
			console.log(e);
			error(e);
		}
	},
	data () {
		return {
			settingsTab: 'account',
			settingsTabItems: [
				{ name: 'account', url: 'account' },
				{ name: 'security', url: 'security' },
				{ name: 'display', url: 'display' },
				{ name: 'notifications', url: 'notifications' }
			]
		}
	}
}
</script>

<style>

</style>
