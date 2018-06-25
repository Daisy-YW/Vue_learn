<template>
    <div>
        <ul>
           <li v-for="(item,id) in list" :key="id">{{id}}{{item.new}}</li>
        </ul>
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
