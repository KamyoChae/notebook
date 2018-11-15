<template>
    <div>
        <div class="header">
            <div class="head-search">
                <div class="btn-box">
                    <button class="iconfont mGreen" @click="complClick()">&#xe650;</button>
                    <button class="iconfont mRed" @click="unComplClick()">&#xe658;</button>
                    <button class="iconfont mYellow" @click="colleClick()">&#xe600;</button>
                    <button class="iconfont mPink" @click="showAllClick()">&#xe603;</button> 
                    <router-link to="/Edit">
                        <button class="iconfont mBlue" >&#xe60e;</button>
                    </router-link>
                </div>
                <div class="search-box">
                    <input type="text" name="" id="" placeholder="搜索/标题/时间" >
                    <button class="iconfont mRed">&#xe651;</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script> 
export default {
    name:"HomeHead", 
    data:function(){
        return {

        }
    },
    methods:{
        complClick(){
            this.$store.commit("completed", "complete") 
        },
        unComplClick(){
            this.$store.commit("completed", "uncomplete")  
        },
        colleClick(){
            this.$store.commit("completed", "isStar")  
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/style/color.styl'
.header
    z-index 10
    font-family "微软雅黑"
    position fixed
    width 100%
    height  2rem
    line-height 2rem
    background $mDeep
    box-shadow 0px 10px 10px -10px #000 
    .head-search
        display flex
        justify-content space-between 
        width 70%
        margin auto
        .btn-box 
            display inline-block 
        button
            $btn()
        button:hover
            transform scale(1.1) 
        button:active
            transform scale(.8)
        .mGreen
            background $mGreen
        .mRed
            background $mRed
        .mYellow
            margin-right .8rem
            background $mYellow
        .mBlue
            background $mBlue 
        .mPink
            background $mPink
        .search-box
            display flex
            flex 1
            justify-content flex-end
            align-items center
            input 
                width 80%
                font-size .4rem
                font-weight 100
                $inputStyle()
                margin-right .5rem  
 
</style>
