<template>
    <div>
        <div class="header">
            <div class="head-search">
                <div class="btn-box">
                    <button class="iconfont">&#xe650;</button>
                    <button class="iconfont">&#xe658;</button>
                    <button class="iconfont">&#xe603;</button>
                    <button class="iconfont">&#xe60e;</button>
                </div>
                <div class="search-box">
                    <input type="text" name="" id="" placeholder="搜索/标题/时间">
                    <button class="iconfont">&#xe651;</button>
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
            width 1rem
            height .6rem
            line-height .6rem
            text-align center
            color #fff
            border-radius 4px
            transition all .25s
            cursor pointer
            margin 0 .1em
        button:hover
            transform scale(1.1) 
        button:active
            transform scale(.8)
        button:nth-child(1)
            background $mGreen
        button:nth-child(2)
            background $mRed
        button:nth-child(3)
            background $mYellow
        button:nth-child(4)
            background $mBlue 
        .search-box
            display flex
            flex 1
            justify-content flex-end
            align-items center
            input 
                width 80%
                font-size .4rem
                padding .1rem .3rem
                color #fff 
                font-weight 100
                background none 
                border 1px solid #000
                border-bottom 1px solid rgba(255,255,255,.3)
                border-radius 4px
                margin-right .5rem  
 
</style>
