<template>
  <Page>
    <ActionBar>
      <GridLayout rows="*" columns="55,2*,35" backgroundColor="transparent">
        <Label col="0" row="0" class="fa" :text="'fa-bars' | fonticon"/>
        <Label col="1" row="0" class="header-title" fontSize="20" text="Home"/>
        <Label col="2" row="0" class="fa" @tap="goToSearch()" :text="'fa-search' | fonticon"/>
      </GridLayout>
    </ActionBar>

    
    <TabView 
      @loaded="onTabViewLoaded" 
      tabBackgroundColor="#4f617d" 
      androidTabsPosition="bottom" 
      selectedIndex="0" 
      androidSelectedTabHighlightColor="#ffffff" 
      selectedTabTextColor="#ffffff"
    >
      <TabViewItem title="Tab 1">
          
        <PullToRefresh @refresh="refreshList" color="#4caf50">
          <StackLayout>
            <StackLayout class="p-x-16 p-y-10">
              <StackLayout>
                <Label 
                  text="NEW VIDEO"
                  verticalAlignment="center" 
                  width="100%"
                  color="#3c495e"
                  fontSize="20"
                  class="p-b-8"
                >
                </Label>
              </StackLayout>
              <ScrollView 
                orientation="horizontal"
                scrollBarIndicatorVisible="false"
              >
                <StackLayout orientation="horizontal">
                  <StackLayout class="new-video-content" @tap="goToPage(speechs.component)">
                      <Label 
                        text="ENGLISH"
                        verticalAlignment="center"
                        color="#ffffff"
                      >
                      </Label>
                  </StackLayout>
                  <StackLayout class="new-video-content" @tap="goToPage(slides.component)">
                      <Label 
                        text="JAPANESE"
                        verticalAlignment="center" 
                        color="#ffffff"
                      >
                      </Label>
                  </StackLayout>
                  <StackLayout class="new-video-content">
                      <Label 
                        text="VIETNAMESE"
                        verticalAlignment="center"
                        color="#ffffff" 
                      >
                      </Label>
                  </StackLayout>
                  <StackLayout class="new-video-content">
                      <Label 
                        text="DIFFERENT"
                        verticalAlignment="center" 
                        color="#ffffff"
                      >
                      </Label>
                  </StackLayout>
                  
                  
                </StackLayout>
              </ScrollView>
            </StackLayout>
            <StackLayout>
                <Label 
                  text="YOUR PROGRESS"
                  verticalAlignment="center" 
                  width="100%"
                  color="#3c495e"
                  fontSize="20"
                  class="p-b-8 p-x-16"
                >
                </Label>
              </StackLayout>
            <StackLayout class="p-x-16">
              <CardView radius="8" ripple="true" elevation="5" backgroundColor="#3c495e">
                <StackLayout>

                  <StackLayout horizontalAlignment="center" class="avatar-content">
                    <Label fontSize="24" class="text-center">N</Label>
                  </StackLayout>
                  <StackLayout class="p-x-8">
                    <FlexboxLayout
                      flexDirection="row"
                      flexWrap="wrap"
                      orientation="horizontal" 
                      horizontalAlignment="left" 
                      width="100%"
                    >
                      <StackLayout width="100%">
                        <Label>LISTENING: 80%</Label>
                      </StackLayout>
                      <StackLayout width="100%" class="m-b-8">
                        <Progress :value="80"  />
                      </StackLayout>
                      <StackLayout width="100%">
                        <Label>READING: 70%</Label>
                      </StackLayout>
                      <StackLayout width="100%" class="m-b-8">
                        <Progress :value="70"  />
                      </StackLayout>
                      <StackLayout width="100%">
                        <Label>WRITING: 85%</Label>
                      </StackLayout>
                      <StackLayout width="100%" class="m-b-8">
                        <Progress :value="85" />
                      </StackLayout>
                    </FlexboxLayout>
                  </StackLayout>
                  
                </StackLayout>
              
            </CardView>
            <Button class="btn btn-danger" v-if="!isLoggedIn" @tap="goToPage(greetings.component)">Dang nhap</Button>
            <Button class="btn btn-danger" v-if="isLoggedIn" @tap="logOut()">{{ authUser.account }}  Dang xuat</Button>
            
              <!-- <Button class="btn btn-danger" @tap="goToPage(speechs.component)">SpeechRecognizes</Button>
              <Button class="btn btn-danger" @tap="goToPage(slides.component)">SlideShow</Button>
              <Button class="btn btn-danger" v-if="!isLoggedIn" @tap="goToPage(greetings.component)">Dang nhap</Button>
              <Button class="btn btn-danger" v-if="isLoggedIn" @tap="logOut()">{{ authUser.account }}  Dang xuat</Button> -->
            </StackLayout>
          </StackLayout>
        </PullToRefresh>
      </TabViewItem>
      <TabViewItem title="Tab 2">
        <StackLayout>
          <Label text="Content for Tab 2" />
          <Ripple rippleColor="#fff" backgroundColor="#FF4081" borderRadius="30" horizontalAlignment="center" height="60" width="60">
            <Label text="A" class="text-center" fontSize="30" color="#fff" verticalAlignment="center" horizontalAlignment="center" textWrap="true" />
          </Ripple>
          <Ripple rippleColor="#fff" backgroundColor="#FF4081" borderRadius="30" horizontalAlignment="center" height="60" width="60">
            <Label class="fa text-center" :text="'fa-bars' | fonticon" fontSize="30" color="#fff" verticalAlignment="center" horizontalAlignment="center" textWrap="true" />
          </Ripple>
          <CheckBox fillColor="#4caf50" :checked="isChecked" @checkedChange="!isChecked" text="Check box" />
          <CheckBox fillColor="#4caf50" :checked="isChecked" @checkedChange="!isChecked" text="Check box" />
          <CheckBox fillColor="#4caf50" :checked="isChecked" @checkedChange="!isChecked" text="Check box" />
          <CheckBox fillColor="#4caf50" :checked="isChecked" @checkedChange="!isChecked" text="Check box" />
        </StackLayout>
      </TabViewItem>
      <TabViewItem title="Tab 3">
        <StackLayout class="p-16">
            <CardView radius="5" elevation="5" backgroundColor="#fff">
              <StackLayout>
                <Label text="Hello Worldw" />
                <Label text="Hello World" />
                <Label text="Hello World" />
                <Label text="Hello World" />
                <Label text="Hello World" />
                <CheckBox fillColor="#4caf50" ref="cb" :checked="isChecked" @checkedChange="changeCheckBox(this)" text="Check box" />
                <CheckBox fillColor="#4caf50" ref="cb" :checked="isChecked" @checkedChange="changeCheckBox(this)" text="Check box" />
                <CheckBox fillColor="#4caf50" ref="cb" :checked="isChecked" @checkedChange="changeCheckBox(this)" text="Check box" />
                <TextField v-model="textFieldValue" />
              </StackLayout>
              
            </CardView>
        </StackLayout>
      </TabViewItem>
    <TabViewItem title="Tab 4">
      <StackLayout backgroundColor="#3c495e">

      </StackLayout>

      
    </TabViewItem>
  </TabView>

              
  </Page>
</template>

<script>
import Search from './Search'

  export default {
    data() {
      return {
        pages: { name: 'Home', component: this.$routes.Home },
        slides: { name: 'SlideShow', component: this.$routes.SlideShow},
        speechs: { name: 'SpeechRecognize', component: this.$routes.SpeechRecognize},
        greetings: { name: 'Greeting', component: this.$routes.Greeting },
        logins: { name: 'Login', component: this.$routes.Login},
        isChecked: false,
        textFieldValue: 'Tuan Nguyen'
      }
    },
    mounted() {
      console.log('======')
    }, 
    methods: {
      onTabViewLoaded: function(args) {
          if (args.object.android) {
              args.object.android.viewPager.setSwipePageEnabled(true);
          }
      },
      goToPage (pageComponent) {
        this.$navigateTo(pageComponent,{animated: true, transition:{name:'slideRight',duration: 250,curve:'easeIn'}})
      },
      goToSearch() {
        this.$navigateTo(Search,{animated: true, transition:{name:'slideRight',duration: 250,curve:'easeIn'}})
      },
      refreshList(args) {
          var pullRefresh = args.object;
          setTimeout(function() {
          pullRefresh.refreshing = false;
          }, 2000);
      },
      logOut() {
        this.$store.dispatch('logout').then(res => {
          //this.$navigateTo(this.logins.component)
        })
      },
      changeCheckBox(obj) {
      }
    },
    computed: {
			isLoggedIn() {
				return this.$store.getters.isLoggedIn;
			},
			authUser() {
				return this.$store.getters.authUser;
			},	
		}
  }
</script>

<style scoped>
    .new-video-content {
      background: #3c495e;
	    background: linear-gradient(to right, #3c495e 0%,#4f617d 100%);
      padding: 25 20;
      margin: 0 5;
      border-radius: 8;
    }
    .avatar-content {
      border-radius: 50%;
      width: 35;
      height: 35;
      margin: 16 0;
      background-color: #4f617d;
    }
</style>
