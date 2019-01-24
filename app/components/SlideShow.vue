<template>
  
  <Page class="page">
  
    <ActionBar title="Slideshow">
      <GridLayout rows="*" columns="55,2*,35" backgroundColor="transparent">
          <Label col="0" row="0" @tap="$navigateBack()" class="fa ripple" :text="'fa-arrow-left' | fonticon"/>
          <Label col="1" row="0" class="header-title" fontSize="20" text="SlideShow"/>
          <Label col="2" row="0" @tap="goToSearch()" class="fa" :text="'fa-search' | fonticon"/>
      </GridLayout>
    </ActionBar>

      <GridLayout>
        <Carousel 
          height="100%" 
          width="100%" 
          indicatorColor="#4caf50" 
          indicatorColorUnselected="#fff"
          finite="true" 
          bounce="false" 
          showIndicator="true" 
          verticalAlignment="middle" 
          android:indicatorAnimation="swap"
          @pageChanged="myChangeEvent"
          selectedPage="0"
        > 
          <CarouselItem 
            verticalAlignment="middle" 
            v-for="item in items" 
            :key="item.id"
            backgroundColor="#b3cde0"
          >
            <StackLayout>
              <Label horizontalAlignment="center" :text="item.title"></Label>
            </StackLayout>
          </CarouselItem>
        </Carousel>
      </GridLayout>
        

  </Page>
</template>

<script>

  import Search from './Search'
  
  export default {
    data() {
        return {
            items: [
              {
                id: "a",
                title: "Slide 1",
              },
              {
                id: "b",
                title: "Slide 2",
              },
              {
                id: "c",
                title: "Slide 3",
              },
              {
                id: "d",
                title: "Slide 4",
              },
            ]
        }
    },
    created() {
    },
    mounted() {
      //this.callMixin()
    },
    methods: {
      myChangeEvent(args) {
        var changeEventText = 'Page changed to index: ' + args.index;
        //alert(changeEventText);
      },
      goToSearch() {
        this.$navigateTo(Search,{animated: true, transition:{name:'slideLeft',duration: 250,curve:'easeIn'}})
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
  };
</script>
