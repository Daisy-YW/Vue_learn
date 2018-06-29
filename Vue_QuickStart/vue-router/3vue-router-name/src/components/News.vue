<template>
    <div>
        <ul>
           <li v-for="(item,id) in list" :key="id">
               <router-link :to="{ name: 'detail' , params: {id: id } }">{{id}}{{item.new}}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                list:[{
                    new:"新闻内容一"
                },{
                    new:"新闻内容二"
                },{
                    new:"新闻内容三"
                }]
            }
        }
    }

</script>
<style>

</style>
