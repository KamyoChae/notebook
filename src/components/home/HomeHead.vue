<template>
    <div>
        <div class="header">
            <div class="head-search">
                <div class="btn-box">
                    <button class="iconfont mGreen" @click="complClick()">&#xe650;</button>
                    <button class="iconfont mRed" @click="unComplClick()">&#xe658;</button>
                    <button class="iconfont mYellow" @click="colleClick()">&#xe600;</button>
                    <button class="iconfont mPink" @click="showAllClick()">&#xe603;</button>  
                    <button class="iconfont mBlue" @click="toEdit()">&#xe60e;</button> 
                </div>
                <div class="search-box">
                    <input type="text" name="" id="" placeholder="搜索|标题" v-model="value"> 
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
            value:""
        }
    },
    methods:{
        complClick(){
            this.$store.commit("filterFn", "complete") 
        },
        unComplClick(){
            this.$store.commit("filterFn", "uncomplete")  
        },
        colleClick(){
            this.$store.commit("filterFn", "isStar")  
        },
        showAllClick(){
            this.$store.commit("showAll") 
        },
        toEdit(){
            this.$router.push("/Edit")
            var time = this.getEditDate() 
            this.$store.commit("getDate", time)

        },

        getEditDate(){
            var date = new Date()
            var time = date.toLocaleDateString()
            var weekNative = date.getDay()
            var week = ""
            switch(weekNative){
                case 0 : week = "星期日";break;
                case 1 : week = "星期一";break;
                case 2 : week = "星期二";break;
                case 3 : week = "星期三";break;
                case 4 : week = "星期四";break;
                case 5 : week = "星期五";break;
                case 6 : week = "星期六";break;
            }
            return  {
                time:time,
                week:week
            } 
        }

    },
    watch:{
        value(newVal,oldVal){
              this.$store.commit("filterInput", newVal) 
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
 
</style>
