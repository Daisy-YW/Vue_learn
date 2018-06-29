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
                    new:"信息列表内容一"
                },{
                    new:"信息列表内容二"
                },{
                    new:"信息列表内容三"
                }]
            }
        }
    }

</script>
<style>

</style>
