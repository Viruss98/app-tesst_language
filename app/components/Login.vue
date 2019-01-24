<template>
  <Page class="page" actionBarHidden="true">
  <ActionBar title="Login"/>
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
		<GridLayout verticalAlignment="center" class="p-x-16 actionbar-login" height="10%" rows="*" columns="55,2*,35" backgroundColor="transparent">
			<Label verticalAlignment="center" @tap="$navigateBack()" col="0" row="0" color="white" class="fa " :text="'fa-arrow-left' | fonticon"/>
			<Image style="height:50px" horizontalAlignment="center" verticalAlignment="center" col="1" row="0" src="~/assets/images/NativeScript-Vue.png"></Image>
		</GridLayout>
		<StackLayout style="border-radius:5;" alignSelf="flex-end" class="form m-8 p-x-2 login-content" height="90%" backgroundColor="#4f617d">
			<FlexboxLayout
			flexDirection="row"
				flexWrap="wrap"
				orientation="horizontal" 
				horizontalAlignment="center" 
				verticalAlignment="center"
				width="100%"
				height="100%"
			>
				<StackLayout 	horizontalAlignment="center" borderRadius="5" 
				verticalAlignment="center" class="login-welcome-back">
					<Label fontSize="20" class="h2 greeting-title text-center p-b-6" color="white">Welcome back!</Label>
					<Label class="text-center label p-b-20" color="gray" fontSize="14">Login your account to get started</Label>
				</StackLayout>
				<StackLayout class="login-content-back" horizontalAlignment="left">
					<StackLayout class="input-field">
						<Label text="Account" class="label m-b-5" />
						<TextField class="input login-input" autocorrect="false" v-model="account"/>
						<StackLayout class="hr-light"></StackLayout>
					</StackLayout>
					<StackLayout class="input-field">
						<Label text="Password" class="label m-b-5" />
						<TextField class="input login-input" autocorrect="false" secure="true" v-model="password" />
						<StackLayout class="hr-light"></StackLayout>
					</StackLayout>
					<StackLayout class="input-field" @tap="forgetPassword()">
						<Label text="Quen mat khau?" class="label" />
					</StackLayout>
					
				</StackLayout>
				
				<StackLayout width="100%" alignSelf="flex-end" class="p-x-2 p-b-5" >
					<StackLayout width="100%" class="show-loading" v-if="isLogining">
						<ActivityIndicator busy="true" color="#fff" />
					</StackLayout>
					<Ripple rippleColor="rgba(0,0,0,0.1)" borderRadius="5" @tap="login()" v-if="!isLogining">
						<Label class="btn-login-content text-center" style="border-radius:5;">DANG NHAP</Label>
					</Ripple>
					
				</StackLayout>
			</FlexboxLayout>
			
		</StackLayout>
	</FlexboxLayout>
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
      <ScrollView>
			<StackLayout
				orientation="vertical" 
				horizontalAlignment="center" 
				verticalAlignment="center"
				width="100%"
			>
					<StackLayout> -->
						<!-- backgroundColor="rgba(0,0,0,0.1)" -->
						<!-- <Image style="width:200px;" src="~/assets/images/NativeScript-Vue.png"></Image> -->
						<!-- <Label class="h1 text-center">App Nameee </Label> -->
					<!-- </StackLayout>
					<StackLayout>
						<Label class="h1 text-center font-weight-bold" color="#53ba82">App Nameee </Label>
					</StackLayout>
					<StackLayout class="form m-16" > -->

						<!-- Option 1: An input with no label, and a bottom border -->
						<!-- <StackLayout class="input-field">
							<TextField hint="Option 1" class="input" />
							<StackLayout class="hr-light"></StackLayout>
						</StackLayout> -->

						<!-- Option 2: An input with a label on top, and a bottom border -->
						<!-- <StackLayout class="input-field">
							<Label text="Option 2" class="label font-weight-bold m-b-5" />
							<TextField class="input" />
							<StackLayout class="hr-light"></StackLayout>
						</StackLayout> -->

						<!-- Option 3: An label and input—positioned side by side -->
						<!-- <GridLayout class="input-field input-sides" rows="auto, auto" columns="*,*">
							<Label text="Option 3" class="label font-weight-bold" row="0" col="0" />
							<TextField class="input right" row="0" col="1" />
							<StackLayout class="hr-light" row="1" colSpan="2"></StackLayout>
						</GridLayout> -->

						<!-- Option 4: An input with a simple border and no label -->
						<!-- <TextField hint="Option 4" class="input input-border" /> -->

						<!-- Option 5: An input with a rounded border and no label -->
						<!-- <StackLayout>
							<TextField hint="Account" v-model="account" autocorrect="false" class="input input-rounded m-t-10 login-input" />
						</StackLayout>
						<StackLayout>
							<TextField secure="true" v-model="password" hint="Password" autocorrect="false" style="" class="input input-rounded m-t-12 login-input" />
						</StackLayout>
						<StackLayout class="m-t-10">
							<CheckBox fillColor="#4caf50" color="#53ba82" :checked="isChecked" @checkedChange="!isChecked" text="Remember me" />
						</StackLayout>
						<StackLayout class="m-t-30 show-loading" v-if="isLogining">
							<ActivityIndicator busy="true" color="#fff" />
						</StackLayout>
						<StackLayout class="m-t-30" v-if="!isLogining">
							<Ripple rippleColor="rgba(0,0,0,0.1)" borderRadius="30">
								<Button class="btn-login" @tap="login()">Dang Nhap</Button>
							</Ripple>
						</StackLayout>
						

						<StackLayout class="p-12">
							<Ripple @tap="forgetPassword()" rippleColor="rgba(0,0,0,0.1)" borderRadius="30" height="30">
								<Label text="Forget Password ?" class="text-center forget-password" fontSize="15" color="#53ba82" textWrap="true" />
							</Ripple>
						</StackLayout>
					</StackLayout>

				</StackLayout>
				
			</ScrollView>
    </StackLayout> -->
  </Page>
</template>

<script>
	import App from './App'
	require( "nativescript-orientation" );
	import * as axios from 'axios';
	//import * as email from "nativescript-email";
	// import * as phone from "nativescript-phone";


  export default {
    data() {
			return {
				account: '',
				password: '',
				isChecked: true,
				isLogining: false,
			}
    },
    created() {
             
    },
    mounted() {
			this.getConnectivity()
			this.loadLoginCres()	
			//this.getUserSessions()		
    },
    methods: {
      forgetPassword() {
				//alert('ok')
				//getting email to reset?
				//this.ckeckEmailAvailable()
			},
			ckeckEmailAvailable() {

			},
			sentEmail() {
				email.compose({
					subject: "Test Nativescript-Email",
					body: "Hello <strong>Tuan Nguyen</strong> from NS-VUE :)",
					to: ['ductuan98tb@gmail.com'],
					// cc: ['ccperson@somewhere.com'],
					// bcc: ['eddy@combidesk.com', 'eddy@x-services.nl'],
					// attachments: [
					// 	{
					// 			fileName: 'arrow1.png',
					// 			path: 'base64://iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHGlET1QAAAACAAAAAAAAABQAAAAoAAAAFAAAABQAAAB5EsHiAAAAAEVJREFUSA1iYKAimDhxYjwIU9FIBgaQgZMmTfoPwlOmTJGniuHIhlLNxaOGwiNqNEypkwlGk9RokoIUfaM5ijo5Clh9AAAAAP//ksWFvgAAAEFJREFUY5g4cWL8pEmT/oMwiM1ATTBqONbQHA2W0WDBGgJYBUdTy2iwYA0BrILDI7VMmTJFHqv3yBUEBQsIg/QDAJNpcv6v+k1ZAAAAAElFTkSuQmCC',
					// 			mimeType: 'image/png'
					// 	},
					// 	{
					// 			fileName: 'telerik-logo.png',
					// 			path: logoPath,
					// 			mimeType: 'image/png'
					// }]
			}).then(function(res) {
				console.log(res);
			}, function(err) {
					console.log("Error send email: " + err);
				});
			},
			getUserSessions() {
				axios.get('https://dean48.herokuapp.com/api/users/get-user-session',
					{
						params: {
							email: 'nguyenductuan98tb@gmail.com',
							page: 0
						}
					}
				).then(response => {
					console.log(response)
				}).catch(err => {
					console.log(err.response)
				}).finally(call => {
				})
			},
			login() {
				if (this.account == '' || this.password == '') {
					let errText = '';
					if (this.account == '') {
						errText = 'Please  enter account';
					} else if (this.password == '') {
						errText = 'Please  enter password';
					}
					this.showSnackBar(errText, '#fff', '#f44336')
				} else if (this.account && this.password) {
					//DO LOGIN
					this.isLogining = true
					//setTimeout(function () {
						//this.$router.push('/home')
					//}.bind(this))
					this.$store.dispatch('login', {
						account: this.account,
						password: this.password,
					}).then(res => {
						this.isLogining = false
						this.$navigateTo(App,{clearHistory: true, animated: true, transition:{name:'slideLeft',duration: 250,curve:'easeIn'}});
					})
				}
			}
		},
  };
</script>
<style scoped>
	.btn-login-content {
		background-color: #53ba82;
		color: #fff;
		padding: 19;
	}
	.landscape .actionbar-login {
		max-height:40;
		min-height: 40;
	}
	.login-welcome-back {
		width: 100%;
	}
	.login-content-back {
		width: 100%;
		margin-top: -50;
	}
	.landscape .login-welcome-back {
		width: 250;
		max-width: 250;
	}
	.landscape .login-content-back {
		width: 350;
		min-width: 300;
		margin-top: 0;
		padding-top: 20;
	}
		
</style>
