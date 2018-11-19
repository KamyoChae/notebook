<template>
    <div class="wrapper">
        <div class="cover" v-show="cover">
            <div class="box-check">
                <span>{{btnInfo}}</span>
                <div class="check-btn"> 
                    <router-link to="/">
                        <button class="iconfont mGreen">&#xe650;</button>
                    </router-link>
                    <button class="iconfont mRed" @click="cancelCover">&#xe658;</button>
                </div>
            </div>
        </div>
        
        <div class="title">
            
            <input type="text" placeholder="请输入标题 " maxlength="20" v-if="article.title" v-model="article.title">
            <input type="text" placeholder="请输入标题 " maxlength="20" v-else v-model="title">
        </div>

        <div class="innerText">
            <textarea name="" id="" cols="30" rows="16" maxlength="1000"  v-if="article.title" v-model="article.text"></textarea>
             <textarea name="" id="" cols="30" rows="16" maxlength="1000"  v-else v-model="text"></textarea>
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
                <button class="iconfont mYellow font-larg" @click="checkCover" data-key="unstar" v-if="article.isStar">&#xe601;</button>
                <button class="iconfont mYellow font-larg" @click="checkCover" data-key="star" v-else>&#xe600;</button>
                <button class="iconfont mGreen " @click="checkCover" data-key="complete">完成了</button>
                <button class="iconfont mRed " @click="checkCover" data-key="umcomplete">没完成</button>
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
            btnInfo:"您确定要放弃编辑吗？(确定将返回首页)",
          
            title:"", // 用于存储文章标题
            text:"", // 用于存储文章内容
            id:"",
            date:"",
            week:"",
            state:"执行中", 
            complete:false,
            uncomplete:true,
            isStar:false,
            
        }
    },
    methods:{
        checkCover(e){
            // 点击取消编辑 弹出模态框

            var state = e.target.getAttribute("data-key")   
            if(state == "star" || state == "unstar"){ 
                this.starThis() 
            }else{
                switch(state){
                    case "save":this.btnInfo = "保存成功！是否返回首页？"
                                this.$store.commit("addNewItem")
                                break
                    case "cancle":this.btnInfo = "您确定要放弃编辑吗？(确定将返回首页)"
                                break
                    case "complete":this.btnInfo = "任务完成！是否返回首页？"
                                break
                    case "umcomplete":this.btnInfo = "任务取消！是否返回首页？"
                                break
                } 
                this.cover = true
                
            }  
        },
        cancelCover(){
            // 模态框取消 返回继续编辑
            this.cover = false
        },  
        starThis(){
            this.$store.commit("toStar") 
        },
        editInit(){
            this.date = this.$store.state.stateTime.time
            this.week = this.$store.state.stateTime.week
            this.id = this.$store.state.stateTime.id 
        }
    },
    mounted() { 
        try {
            // 从系统拿数据 没有传数据就执行初始化
            // 放到这里没输出 控制台什么也没有
            this.stateTime = this.$store.state.stateTime  // stateTime 默认值为66  
            this.article = this.$store.state.article[0] 
        } catch (error) {
            this.article = {}
            this.editInit()
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
        button:hover
            transform scale(1.1)
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
