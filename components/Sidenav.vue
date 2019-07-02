<template>
	<div>
		<v-navigation-drawer v-model="$store.state.drawer.toggle" width="270px" fixed app>
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
						<v-layout row wrap align-center>
							<v-flex>
								<div class="subheading font-weight-bold truncate">Jonathan Lee</div>
								<div class="caption">RSG/00/1111</div>
							</v-flex>
							<v-flex shrink>
								<v-tooltip right>
									<v-btn slot="activator" flat icon small color="white">
										<v-icon small>mdi-settings</v-icon>
									</v-btn>
									<span>User settings</span>
								</v-tooltip>
							</v-flex>
						</v-layout>
					</v-flex>
				</v-layout>
			</v-img>

			<v-list subheader dense>
				<v-subheader>General</v-subheader>
				<v-list-tile v-for="(item, i) in generalDrawerItems" :key="i" :to="item.url" router>
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title v-text="item.title" class="text-capitalize"/>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>

			<v-divider></v-divider>

			<v-list subheader dense>
				<v-subheader>Adminstrative</v-subheader>
				<v-list-tile v-for="(item, i) in adminstrativeDrawerItems" :key="i" :to="item.url" router>
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title v-text="item.title" class="text-capitalize"/>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>

			<v-divider></v-divider>

			<v-list subheader dense>
				<v-subheader>Extras</v-subheader>
				<v-list-tile v-for="(item, i) in extraDrawerItems" :key="i" :to="item.url" router>
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title v-text="item.title" class="text-capitalize"/>
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
			generalDrawerItems: [
				{ title: 'overview', url: '/', icon: 'mdi-home' },
				{ title: 'assignments', url: '/assginments', icon: 'mdi-notebook' },
				{ title: 'projects', url: '/projects', icon: 'mdi-server' },
				{ title: 'stuffs', url: '/stuffs', icon: 'mdi-locker' },
			],
			adminstrativeDrawerItems: [
				{ title: 'users', url: '/users', icon: 'mdi-account-multiple' },
				{ title: 'supervisors', url: '/supervisors', icon: 'mdi-teach' },
			],
			extraDrawerItems: [
				{ title: 'settings', url: '/settings', icon: 'mdi-settings' },
				{ title: 'help & feedback', url: '/help', icon: 'mdi-help-circle' }
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
