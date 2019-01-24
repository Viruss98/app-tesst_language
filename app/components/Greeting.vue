<template>
  <Page class="page" actionBarHidden="true">
  <ActionBar class="action-bar" title="Login"/>
	<!-- backgroundColor="rgba(60,73,94,1)" -->
    <!-- <StackLayout
		backgroundColor="rgba(60,73,94,1)"
		orientation="horizontal" 
		horizontalAlignment="center" 
		verticalAlignment="center"
		width="100%"
		height="100%"
		class="bg-color"
    >

      <ScrollView backgroundColor="rgba(0,0,0,0.1)">
				<StackLayout
					orientation="vertical" 
					horizontalAlignment="center" 
					verticalAlignment="center"
					width="100%"
				> -->
					<!-- <StackLayout>
						<Image style="width:200px;" src="~/assets/images/NativeScript-Vue.png"></Image>
					</StackLayout>
					<StackLayout class="form m-8">
						<StackLayout class="m-t-30" backgroundColor="#4f617d" style="border-radius:5;">
							<Label class="h2 greeting-title text-center p-t-10 p-b-6" color="white">Welcome to App Name</Label>
							<Label color="gray" class="text-center p-b-10">Login or Review to get started</Label>
							<Ripple rippleColor="rgba(0,0,0,0.1)">
								<Label class="btn-greeting text-center">DANG NHAP</Label>
							</Ripple>
							<StackLayout class="hr-light m-x-8"></StackLayout>
							<Ripple rippleColor="rgba(0,0,0,0.1)">
								<Label class="btn-greeting text-center" style="border-radius:5;">REVIEW</Label>
							</Ripple>

						</StackLayout>
                        
					</StackLayout> -->
					<FlexboxLayout 
						flexDirection="column" 
						backgroundColor="rgba(60,73,94,1)"
						orientation="horizontal" 
						horizontalAlignment="center" 
						verticalAlignment="center"
						width="100%"
						height="100%"
						class="bg-color"
					>
						<StackLayout height="65%"
							class="brand-logo" 
							horizontalAlignment="center" 
							verticalAlignment="center">
							<Image style="width:200px;" src="~/assets/images/NativeScript-Vue.png"></Image>
						</StackLayout>
						<StackLayout style="border-radius:5;" alignSelf="flex-end" class="form m-8 hello-content" height="35%" backgroundColor="#4f617d">
							<StackLayout class="m-t-15" style="border-radius:5;" backgroundColor="#4f617d" width="100%">
								<FlexboxLayout
									flexDirection="row"
									flexWrap="wrap"
									orientation="horizontal" 
									width="100%"
									height="100%"
								>
									<Label width="100%" class="h2 greeting-title text-center p-b-6" color="white">Welcome to App Name</Label>
									<Label color="gray" width="100%" class="text-center p-b-20">Login or Review to get started</Label>
									<Ripple width="100%" rippleColor="rgba(0,0,0,0.1)" @tap="goToLogin(logins.component)" v-if="!isGettingStorage">
										<Label class="btn-greeting text-center">{{ authUser ? 'HOME' : 'DANG NHAP' }}</Label>
									</Ripple>
									<StackLayout class="p-x-5" v-if="!isGettingStorage">
										<StackLayout class="hr-light"></StackLayout>
									</StackLayout>
									<StackLayout width="100%" class="p-x-5 p-t-10" v-if="isGettingStorage">
										<ActivityIndicator busy="true"  color="#fff" />
									</StackLayout>
									
									<Ripple width="100%" alignSelf="flex-end" rippleColor="rgba(0,0,0,0.1)" @tap="goToReview(slides.component)" v-if="!isGettingStorage">
										<Label class="btn-greeting text-center" style="border-radius:5;">REVIEW</Label>
									</Ripple>
								</FlexboxLayout>
									
							</StackLayout>
						</StackLayout>
					</FlexboxLayout>
				<!-- </StackLayout>
			</ScrollView>
    </StackLayout> -->
  </Page>
</template>

<script>
	import Login from './Login'
	import SlideShow from './SlideShow'
	import App from './App'
	require( "nativescript-orientation" );

  export default {
    data() {
			return {
				slides: { name: 'SlideShow', component: this.$routes.SlideShow},
				logins: { name: 'Login', component: this.$routes.Login },
				isGettingStorage: true
			}
    },
    created() {
			setTimeout(function () {
				this.loadStorageLogin()	
			}.bind(this))
    },
    mounted() {

    },
    methods: {
			
      goToLogin(pageComponent) {
				if (this.authUser) {
					this.$navigateTo(App,{animated: true, transition:{name:'slideLeft',duration: 250,curve:'easeIn'}})
				} else {
					this.$navigateTo(Login,{animated: true, transition:{name:'slideLeft',duration: 250,curve:'easeIn'}})
				}
			},
			goToReview(pageComponent) {
				this.$navigateTo(SlideShow,{animated: true, transition:{name:'slideLeft',duration: 250,curve:'easeIn'}})
			}
		},
		computed: {
			isLoggedIn() {
				return this.$store.getters.isLoggedIn;
			},
			authUser() {
				return this.$store.getters.authUser;
			},
		},
		
  };
</script>
<style scoped>
</style>
