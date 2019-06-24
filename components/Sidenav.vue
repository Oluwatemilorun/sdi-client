<template>
	<div>
		<v-navigation-drawer v-model="$store.state.drawer.toggle" width="280px" fixed app>
			<v-img :aspect-ratio="16/9" :src="bg000">
				<v-layout pa-2 column fill-height class="lightbox white--text">
					<v-spacer></v-spacer>
					<v-flex shrink>
						<v-avatar
							size="52"
							color="primary lighten-3"
							class="mb-2"
						>
							<!-- <img src="src" alt=""> -->
							<v-icon color="accent">mdi-account</v-icon>
						</v-avatar>
						<div class="subheading font-weight-bold truncate">Jonathan Lee</div>
						<div class="caption">RSG/00/1111</div>
					</v-flex>
				</v-layout>
			</v-img>

			<v-list>
				<v-list-tile v-for="(item, i) in drawerItems" :key="i" :to="item.url" router>
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title v-text="item.title"/>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
import bg000 from '~/assets/img/bg/000.jpg';

export default {
	name: 'Sidenav',
	data () {
		return {
			bg000,
			drawerItems: [
				{ title: 'overview', url: '/', icon: 'mdi-home' },
				{ title: 'projects', url: '/projects', icon: 'mdi-server' },
				{ title: 'stuffs', url: '/stuffs', icon: 'mdi-locker' },
			]
		}
	}
}
</script>

<style>
.lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }
</style>
