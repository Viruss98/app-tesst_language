<template>
  <Page class="page">
    <ActionBar>
       <GridLayout rows="*" columns="30,2*" backgroundColor="transparent">
						<Label col="0" row="0" style="padding-top:10;" @tap="$navigateBack()" class="fa ripple" :text="'fa-arrow-left' | fonticon"/>
						<SearchBar 
						col="1" row="0"
							hint="Search ..." 
							color="white" 
							textFieldHintColor="white"
							v-model="querySearch" 
							@textChange="onSearchChanged()" 
							@submit="onSearch($event)" 
							@clear="onClear()" 
						/>
				</GridLayout>
    </ActionBar>

    <StackLayout>
			<StackLayout backgroundColor="#4f617d">
				<Label>{{ querySearch }}</Label>
      	
			</StackLayout>
			<PullToRefresh @refresh="refreshList" color="#4caf50">
				<StackLayout>
					<ScrollView>
						<StackLayout>
							
						</StackLayout>
					</ScrollView>
				</StackLayout>
			</PullToRefresh>
		</StackLayout>
  </Page>
</template>
<script>
  
  export default {
    data() {
      return {
				querySearch: '',
      }
    },
    mounted() {
     
    },
    computed: {
     
    },
    methods: {
			onSearchChanged() {
				// console.log(this.querySearch)
			},
			onSearch(args) {
				// console.log(this.querySearch)
			},
			onClear() {
				// console.log(this.querySearch)
			},
			refreshList(args) {
        var pullRefresh = args.object;
        setTimeout(function() {
          pullRefresh.refreshing = false;
        }, 2000);
      },

    }
  };
</script>
<style scoped>
ActionBar {
	color: #fff;
	background-color: #4f617d;
}
</style>
