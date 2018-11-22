<template>
    <div class="wrapper">
        <div class="cover" v-show="cover">
            <div class="box-check">
                <span>{{btnInfo}}</span>
                <div class="check-btn">  
                    <button class="iconfont mGreen" @click="sureClick">&#xe650;</button>
                    
                    <button class="iconfont mRed" @click="cancelCover">&#xe658;</button>
                </div>
            </div>
        </div>
        
        <div class="titles">
            
            <input type="text" placeholder="请输入标题 " maxlength="20" v-if="!newArticle"  v-model="title">
            <input type="text" placeholder="请输入标题 " maxlength="20" v-else v-model="title">
        </div>

        <div class="innerText">
            <textarea name="" id="" cols="30" rows="16" maxlength="1000"  v-if="!newArticle" v-model="text"></textarea>
             <textarea name="" id="" cols="30" rows="16" maxlength="1000"  v-else v-model="text"></textarea>
        </div>
        <div class="btn-box">
            <div>
                <button class="iconfont mGreen"  @click="checkCover" data-key="save">&#xe650; 保存 </button>
                <button class="iconfont mRed" @click="checkCover" data-key="cancle">&#xe658; 取消 </button>
            </div>
            <div>
                <span class="time" v-if="!newArticle">{{article.date}} - {{article.week}}</span>
                <span class="time" v-else>{{stateTime.time}} - {{stateTime.week}}</span>
            </div>
            <div>
                <button class="iconfont mYellow font-larg" @click="checkCover" data-key="unstar" v-if="isStar">1&#xe601;</button>
                <button class="iconfont mYellow font-larg" @click="checkCover" data-key="star" v-else>2&#xe600;</button>
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
            article:"",
            information:"收藏",
            active: true, 
            newArticle:true,
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
    watch:{
        isStar(){
            return this.article.isStar
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
                                this.saveFn()
                             //   this.$store.commit("addNewItem")
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
        saveFn(){
            
            var obj = this.createObj()
            if(!obj){
                alert("error:title or text cant be null!")
                return
            }else{
                this.$store.commit("addNewItem", obj)
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
            console.log(this.$store.state.stateTime)
            this.date = this.stateTime.time
            this.week = this.stateTime.week
             
            this.id = Date.now()  
        }, 
        createObj(){
            var that = this  
            
            if(this.title == "" || this.text == ""){
                return false 
            }else{
                var obj = {
                    "id": that.id,
                    "date": that.date,
                    "week": that.week,
                    "state": that.state,
                    "complete": false,
                    "uncomplete": true,
                    "isStar": false,
                    "title": that.title,
                    "text": that.text
                }   
                return obj
            }

        },
        sureClick(){

            this.$router.push("/")
        }
    },
    mounted() { 
        this.stateTime = this.$store.state.stateTime  // stateTime 默认值为  
        
        try {  
            console.log("enter try")
            // 从系统拿数据 没有传数据就执行初始化
            // 放到这里没输出 控制台什么也没有  
            
            this.editInit()
            console.log(this.$store.state)
            this.article = this.$store.state.article[0]
            
            console.log(this.article)
 
             
            if(this.article){ 
                this.title = this.article.title
                this.text = this.article.text 
                this.newArticle = false
                
            }
            
        } catch (error) { 
            console.log("enter catch")
            this.editInit()
        } 
    }, 
    destroyed() {
        this.newArticle = true 
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
    .titles
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
