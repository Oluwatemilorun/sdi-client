<template>
	<v-layout row wrap>
		<v-flex xs12>
			<v-card>
				<v-card-title class="font-weight-medium">
					<v-layout column wrap ma-0>
						<div class="title mb-1">Update password</div>
						<div class="caption primary--text">Passwords should be at least 8 characters long</div>
					</v-layout>
				</v-card-title>
				<v-layout row wrap px-3 pb-2>
					<v-flex xs12>
						<v-text-field
							ref="old_password"
							v-model="old_password"
							outline type="password"
							label="Old password"
							:rules="[
								v => !!v || 'Old password is required',
								v => !!v && v.length <= 50 || 'First name length exceeded'
							]"
						></v-text-field>
					</v-flex>
					<v-flex xs12>
						<v-text-field
							ref="new_password"
							v-model="new_password"
							outline type="password"
							label="New password"
							:rules="[
								v => !!v || 'New password is required',
								v => !!v && v.length <= 8 || 'Password must be 8 characters long'
							]"
						></v-text-field>
					</v-flex>
					<v-flex xs12>
						<v-text-field
							ref="r_password"
							v-model="r_password"
							outline type="password"
							label="Re-type password"
							:rules="[
								v => !!v || 'Password is required',
								v => !!v && v == new_password|| 'Passwords do not match'
							]"
						></v-text-field>
					</v-flex>
				</v-layout>
			</v-card>
		</v-flex>
	</v-layout>
</template>

<script>
export default {
	data () {
		return {
			old_password: null,
			new_password: null,
			r_password: null
		}
	}
}
</script>

<style>

</style>
