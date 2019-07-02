<template>
	<v-layout row wrap>
		<v-flex xs12>
			<v-layout column wrap mb-2>
				<h3 class="title font-weight-bold">Opened Assignments</h3>
				<div class="caption primary--text">Assignments with submission dates still opened</div>
			</v-layout>
		</v-flex>
		<v-flex xs12>
			<v-layout row wrap >
				<v-flex xs12 px-0>
					<v-card>
						<v-layout row wrap py-1 px-2 align-center>
							<v-flex xs3>
								<div class="body-1 font-weight-bold text-capitalize text-truncate">Assignment topic</div>
								<div class="caption">RSG 309</div>
							</v-flex>
							<v-flex xs3>
								<div class="body-1 font-weight-bold text-capitalize text-truncate">Isaac O</div>
								<div class="caption">Supervisor</div>
							</v-flex>
							<v-flex xs3>
								<div class="layout caption mx-0 mb-1">
									<div>Submission window</div>
									<v-spacer></v-spacer>
									<div class="pl-2 caption">3 days left</div>
								</div>
								<v-progress-linear height="3px" :value="30" class="ma-0"></v-progress-linear>
							</v-flex>
							<v-flex shrink>
								<v-btn flat icon color="white" class="ma-0">
									<v-icon>mdi-dots-vertical</v-icon>
								</v-btn>
							</v-flex>
						</v-layout>
					</v-card>
				</v-flex>
			</v-layout>
		</v-flex>
		<v-flex xs12 mt-5>
			<v-layout column wrap>
				<h3 class="title font-weight-bold">Completed Assignments</h3>
				<div class="caption primary--text">Assignments closed</div>
			</v-layout>
		</v-flex>
	</v-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>
