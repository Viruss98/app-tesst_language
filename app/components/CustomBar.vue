<template>
   <GridLayout rows="*" columns="55,2*,35" backgroundColor="transparent">
        <Label col="0" row="0" @tap="$navigateBack()" class="fa ripple" :text="'fa-arrow-left' | fonticon"/>
        <Label col="1" row="0" class="header-title" fontSize="20" :text="titleBar"/>
        <Label col="2" row="0" @tap="gotoSearch()" class="fa" :text="'fa-search' | fonticon"/>
    </GridLayout>
</template>

<script>
  import Search from './Search'

  export default {
    props: {
      titleBar: {},
      back: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      gotoSearch() {
        this.$navigateTo(Search,{animated: true, transition:{name:'slideLeft',duration: 250,curve:'easeIn'}})
      }
    }
  }
</script>
