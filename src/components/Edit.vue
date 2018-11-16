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
            <input type="text" placeholder="请输入标题 " maxlength="20" v-model="article.title">
        </div>

        <div class="innerText">
            <textarea name="" id="" cols="30" rows="16" maxlength="1000" v-text="article.text"></textarea>
        </div>
        <div class="btn-box">
            <div>
                <button class="iconfont mGreen" >&#xe650;<span>保存</span></button>
                <button class="iconfont mRed" @click="checkCover">&#xe658;<span>取消</span></button>
            </div>
            <div>
                <span class="time">2018/10/10 - 星期三</span>
            </div>
            <div>
                <button class="iconfont mYellow font-larg" @click="checkCover">&#xe600;</button>
                <button class="iconfont mBlue " @click="checkCover">完成</button>
            </div>
        </div>
    </div>
</template>

<script> 
export default {
    name:"Edit", 
    data:function(){
        return { 
            cover: false,
            article:[]
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
    },
    mounted() {
        try {
            this.article = this.$store.state.article[0]
            console.log(this.$store.state.article[0])
        } catch (error) {
            
        }
    },
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
        opacity .9
        margin 1rem auto
        input 
            width 100% 
            $inputStyle()
            text-align center
            letter-spacing .1em
    .innerText, .btn-box
        width 70% 
        margin auto 
        textarea
            box-sizing border-box
            width 100% 
            line-height 1.8em
            font-size .32rem
            $inputStyle()
            letter-spacing .1em
            opacity .9
            padding-top .3rem
    .btn-box
        display flex
        justify-content space-between 
        margin 1rem auto
        .time
            $inputStyle()
            $btn()
            $noSelect()
        .font-larg
            font-size 1.5em
        button
            $btn()
            width 2rem
            span
                margin-left .5em
        .mGreen
            background $mGreen
        .mRed
            background $mRed
        .mYellow 
            background $mYellow
        .mBlue
            background $mBlue
        button:active
            transform scale(.8)

    .cover
        z-index 20
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
