<template>
	<v-app>
		<Sidenav />
		<Toolbar />
		
		<v-content>
			<v-container>
				<nuxt/>
			</v-container>
		</v-content>
		
	</v-app>
</template>

<script>

import Sidenav from '~/components/Sidenav';
import Toolbar from '~/components/Toolbar';

export default {
	components: {
		Sidenav,
		Toolbar
	},
	data() {
		return {
			
		};
	}
};
</script>
