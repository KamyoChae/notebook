<template>
    <div>
        <HomeHead />
        <HomeList />
    </div>
</template>

<script>
import HomeHead from './home/HomeHead'
import HomeList from './home/HomeList'
export default {
    name:"Home",
    components:{
        HomeHead,
        HomeList,
    },
    data:function(){
        return {

        }
    }
}
</script>

