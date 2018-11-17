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
        <div  :class=" ['info', 'show', {topa: active}]"  >{{information}}成功</div>
        <div class="title">
            <input type="text" placeholder="请输入标题 " maxlength="20" v-model="article.title">
        </div>

        <div class="innerText">
            <textarea name="" id="" cols="30" rows="16" maxlength="1000" v-text="article.text"></textarea>
        </div>
        <div class="btn-box">
            <div>
                <button class="iconfont mGreen"  @click="checkCover" data-key="save">&#xe650; 保存 </button>
                <button class="iconfont mRed" @click="checkCover" data-key="cancle">&#xe658; 取消 </button>
            </div>
            <div>
                <span class="time" v-if="article.date">{{article.date}}</span>
                <span class="time" v-else>{{stateTime.time}} - {{stateTime.week}}</span>
            </div>
            <div>
                <button class="iconfont mYellow font-larg" @click="checkCover" data-key="unstar" v-if="article.isStar">1&#xe601;</button>
                <button class="iconfont mYellow font-larg" @click="checkCover" data-key="star" v-else>2&#xe600;</button>
                <button class="iconfont mBlue " @click="checkCover" data-key="complete">完成</button>
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
            article:{},
            information:"收藏",
            active: true, 
            cou:1,
            stateTime: "", 
        }
    },
    methods:{
        checkCover(e){
            // 点击取消编辑 弹出模态框

            var state = e.target.getAttribute("data-key")  
                console.log(state)
                if(state == "save" || state == "star" || state == "unstar"){ 
                    this.info()

                }else{
                    this.cover = true
                    
                } 
            
 
        },
        cancelCover(){
            // 模态框取消 返回继续编辑
            this.cover = false
        }, 
        info(){
            // 提示框
            
            this.cou += 1  
            if(this.cou){
            var that = this
            console.log("info") 
            this.active = Boolean(that.cou)
            }
            
        }
    },
    mounted() { 
        try {
            
            // 放到这里没输出 控制台什么也没有
            this.stateTime = this.$store.state.stateTime  // stateTime 默认值为66 
            console.log(this.stateTime)
            this.article = this.$store.state.article[0] 

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
    .info
        z-index -10
        position absolute
        top 0
        bottom 0
        right 0
        left 0
        width 30%
        height 3em
        opacity 0
        font-size 1.5em
        line-height 3em
        color #fff
        text-align center
        border-radius 5px
        background #70868e
        margin auto 
    .topa
        opacity .8
        z-index 20
    .show
        animation hidden 2s forwards
        @keyframes hidden {
            0%{
                opacity .8
                z-index 20
            }
            100%{ 
                opacity 0
                z-index -9
            }
        }
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
