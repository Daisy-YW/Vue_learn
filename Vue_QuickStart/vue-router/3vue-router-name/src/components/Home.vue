<template>
    <div>
        <h1>Home</h1>
        <p>{{msg}}</p>
        <div>
            <router-link to="/home/news">新闻列表</router-link>
            <router-link to="/home/message">信息列表</router-link>
            <router-view></router-view>
        </div>
    </div>
  
</template>
<script>
    export default{
        data:function(){
            return{
                msg:"Hello,vue-router nest"
            }
        }
    }
</script>
<style>

</style>
