<template>
	<v-layout row wrap>
		<v-flex xs12>
			<v-card>
				<v-card-title class="font-weight-medium">
					<v-layout column wrap ma-0>
						<div class="title mb-1">User information</div>
						<!-- <div class="caption primary--text">Certificates should be in *.jpg or *.png format</div> -->
					</v-layout>
				</v-card-title>
				<v-layout row wrap px-3 pb-2>
					<v-flex xs12>
						<v-text-field
							ref="first_name"
							v-model="first_name"
							outline counter="50"
							label="First Name"
							:rules="[
								v => !!v || 'First name is required',
								v => !!v && v.length <= 50 || 'First name length exceeded'
							]"
						></v-text-field>
					</v-flex>
					<v-flex xs12>
						<v-text-field
							ref="middle_name"
							v-model="middle_name"
							outline counter="50"
							label="Middle Name"
							:rules="[
								v => !!v || 'Middle name is required',
								v => !!v && v.length <= 50 || 'Middle name length exceeded'
							]"
						></v-text-field>
					</v-flex>
					<v-flex xs12>
						<v-text-field
							ref="last_name"
							v-model="last_name"
							outline counter="50"
							label="Last Name"
							:rules="[
								v => !!v || 'First name is required',
								v => !!v && v.length <= 50 || 'Last name length exceeded'
							]"
						></v-text-field>
					</v-flex>
				</v-layout>
			</v-card>
		</v-flex>

		<v-flex xs12>
			<v-card>
				<v-card-title class="font-weight-medium">
					<v-layout column wrap ma-0>
						<div class="title mb-1">User contact details</div>
						<!-- <div class="caption primary--text">Certificates should be in *.jpg or *.png format</div> -->
					</v-layout>
				</v-card-title>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
export default {
	async asyncData ({ error }) {
		try {
			
			return {
				first_name: ''
			};
		} catch (e) {
			
		}
	},
	data () {
		return {
			first_name: null,
			middle_name: null,
			last_name: null
		}
	}
}
</script>

<style>

</style>
