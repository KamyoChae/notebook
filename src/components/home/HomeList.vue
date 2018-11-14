<template> 
    <div class="wrapper">
        <div class="time-month">
            <div class="time-box">
                <i class="iconfont">&#xe665;</i>
                <i>2018/10</i>
            </div>

            <div class="list-item">
                <div class="item-data">
                    <span>2018/10/02</span>
                    <span>星期三</span>
                    <span>当前状态</span>
                    <span>执行中</span>
                    <span>完成状态</span>
                    <span>暂无</span>
                </div>
                <p>中午写一篇文章，顺便更新一下博客</p>
                <div class="delete-box">
                    <i class="iconfont">&#xe658;</i>
                </div>            
            </div>
            <div class="list-item">
                <div class="item-data">
                    <span>2018/10/02</span>
                    <span>星期三</span>
                    <span>当前状态</span>
                    <span>执行中</span>
                    <span>完成状态</span>
                    <span>暂无</span>
                </div>
                <p>中午写一篇文章，顺便更新一下博客</p>
                <div class="delete-box">
                    <i class="iconfont">&#xe658;</i>
                </div>            
            </div>
            <div class="list-item">
                <div class="item-data">
                    <span>2018/10/02</span>
                    <span>星期三</span>
                    <span>当前状态</span>
                    <span>执行中</span>
                    <span>完成状态</span>
                    <span>暂无</span>
                </div>
                <p>中午写一篇文章，顺便更新一下博客</p>
                <div class="delete-box">
                    <i class="iconfont">&#xe658;</i>
                </div>            
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name:'HomeList',
    data:function(){
        return{

        }
    }

}
</script>
<style lang="stylus" scoped>

@import '../../assets/style/color.styl'

.wrapper
    position absolute
    width 100%
    height 100%
    background $mMain
    .time-month
        color #ccc
        width 70% 
        margin auto  
        margin-top 3rem 
        .time-box
            margin-bottom .4rem
        .time-box>i
            font-size .6rem
            margin .1rem
        .list-item
            cursor pointer
            $noSelect()
            display flex
            justify-content space-between
            align-items center 
            background $mDeep
            padding .5rem 0
            border-radius 5px
            box-shadow 0 13px 10px -10px #000
            margin-top .05rem
            div
                display flex
                width 15%
                flex-wrap wrap
                margin-left 2%
                border-right 1px solid rgba(255,255,255,.3)
                color rgba(255,255,255,.3)
                span
                    flex-basis 50%
                    margin .6em 0
            p
                flex-grow 1
                text-align center
                font-weight 200
                font-size .6rem 
            .delete-box i
                cursor pointer
                margin auto
            .delete-box i:hover
                    color #fff 
            .delete-box i:active
                    transform scale(.8)

</style>


