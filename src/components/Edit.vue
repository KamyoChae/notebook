<template>
    <div class="wrapper">
        <div class="cover" v-show="cover">
            <div class="box-check">
                <span>您确定要放弃编辑吗？(确定将返回首页)</span>
                <div class="check-btn"> 
                    <router-link to="/">
                        <button class="iconfont mGreen">&#xe650;</button>
                    </router-link>
                    <button class="iconfont mRed" @click="cancelCover">&#xe658;</button>
                </div>
            </div>
        </div>
        <div class="title">
            <input type="text" placeholder="请输入标题 " maxlength="20">
        </div>

        <div class="innerText">
            <textarea name="" id="" cols="30" rows="16" maxlength="1000"></textarea>
        </div>
        <div class="btn-box">
            <button class="iconfont mGreen" >&#xe650;</button>
            <button class="iconfont mRed" @click="checkCover">&#xe658;</button>
        </div>
    </div>
</template>

<script> 
export default {
    name:"Edit", 
    data:function(){
        return {
            cover: false
        }
    },
    methods:{
        checkCover(){
            // 点击取消编辑 弹出模态框
            this.cover = true
        },
        cancelCover(){
            // 模态框取消 返回继续编辑
            this.cover = false
        }, 
    }
}
</script>

<style lang="stylus" scoped>
@import '../assets/style/color.styl'
.wrapper
    position absolute
    overflow hidden
    width 100%
    height 100%
    background $mMain
    .title
        width 50%
        height 1rem
        line-height 1rem
        font-size .5rem 
        margin 1rem auto
        input 
            width 100% 
            $inputStyle()
            text-align center
    .innerText, .btn-box
        width 70% 
        margin auto 
        textarea
            width 100% 
            line-height 1.8em
            $inputStyle()
            padding-top .3rem
    .btn-box
        margin 1rem auto
        button
            $btn()
            width 2rem
        .mGreen
            background $mGreen
        .mRed
            background $mRed
        button:active
            transform scale(.8)
    .cover
        position absolute
        overflow hidden
        width 100%
        height 100%
        background rgba(0,0,0,.3)
        .box-check 
            display flex
            flex-direction column
            justify-content space-around
            width 30%
            height 15%
            padding .5rem
            margin auto 
            text-align center
            transform translateY(100%)
            background #fff
            border-radius 5px
            span 
                font-size .4rem
            .check-btn
                display flex
                justify-content space-between
                width 50%
                margin 0 auto
                button
                    $btn()
                    width 2rem
                .mGreen
                    background $mGreen
                .mRed
                    background $mRed
                
                button:active
                    transform scale(.8)
</style>
