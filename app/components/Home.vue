<template>
    <Page>
        <ActionBar>
            <GridLayout width="100%" columns="auto, *">
                <Label text="MENU" col="0"/>
                <Label class="title" text="Welcome to NativeScript-Vue!"  col="1"/>
            </GridLayout>
        </ActionBar>
        <StackLayout>
            <Label>Home</Label>
        </StackLayout>
        
    </Page>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<style scoped>
    
</style>
