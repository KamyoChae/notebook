<template> 
    <div class="wrapper">
        <div class="time-month" v-for="(items, indexs) in this.$store.state.rederArr" :key="items.allDate">
            <div class="time-box" v-if="items.pages.length">
                <i class="iconfont">&#xe665;</i>
                <i>{{items.allDate}}</i>
            </div>
            
            <router-link to="/Edit"
                v-for="(item, index) in items.pages" 
                :key="item.id"
            >
                <div class="list-item" @click="checkLink(item.id)">
                    <div class="item-data">
                        <span>{{item.date}}</span>
                        <span>{{item.week}}</span>
                        <span>当前状态</span>
                        <span>{{item.state}}</span>
                    </div>
                    <p>{{item.title}}</p>
                    <div class="delete-box" >
                        <i class="iconfont starIcon" @click.prevent="clickStar(index, indexs)"   v-if="item.isStar">&#xe601;</i>
                        <i class="iconfont starIcon" @click.prevent="clickStar(index, indexs)"   v-else>&#xe600;</i>
                        <i class="iconfont" @click.prevent="deleteItem(index, indexs)">&#xe658;</i>
                    </div>
                </div>
            </router-link>
        </div>
    </div> 
</template>

<script>
export default {
    name:'HomeList',
    data:function(){
        return{ 
        }
        
    },
    methods:{

        /**
         * 这里用两个index
         * 第一个 index 代表列表的索引
         * 第二个indexs 多了个s 代表日期 
         */
        clickStar(index, indexs){
            var isStar = this.$store.state.res[indexs].pages[index].isStar 
            this.$store.state.res[indexs].pages[index].isStar = !isStar 
            this.$store.commit("setStorage")
        },
        deleteItem(index, indexs){
            var pages = this.$store.state.res[indexs].pages 
            pages.splice(index, 1) 
            this.$store.commit("setStorage")
        },

        checkLink(val){ // 拿到该列表的唯一标识符 id
            this.$store.commit("clickArticle", val) 
        },
        getStorage(){
            var data = localStorage.getItem("notBook")  
            this.$store.state.res = JSON.parse(data)
        },
         
    },
   
    mounted() {
        var storage = localStorage.getItem("notBook")
       
        if(!storage){ 
            // console.log("进入初始化阶段...")
            var res = [
                        {
                        "allDate": "2018/09",
                        "pages": [{
                            "id": "20154619",
                            "date": "2018/10/02",
                            "week": "星期三",
                            "state": "执行中",
                            "complete": false,
                            "uncomplete": true,
                            "isStar": true,
                            "title": "嘿！这是一个神奇的记事本",
                            "text": "嘿！你好呀！这是一个神奇的记事本，你可以在这里记录一些将来的事情，比如接下来要做什么、明天要做什么，也可以把它当日记来用，写一写心事，或是记一记各种千奇百怪的经历...总之，在这里的数据都是存储在你的浏览器上面的，除非是你手动删除了浏览器的数据或是卸载了这个浏览器，你写的东西才会消失，所以啊，在这里你大可放心去写东西"
                        }]
                    }]
            this.$store.state.res = res
            this.$store.state.rederArr = res
        }else{
            // console.log("本地有存储...读取")
            this.getStorage()
            this.$store.state.rederArr = this.$store.state.res
        }
    },

}
</script>
<style lang="stylus" scoped>

@import '../../assets/style/color.styl'

.wrapper
    position absolute
    box-sizing border-box
    width 100% 
    min-height 100%
    padding-bottom 20% 
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
            div:hover
                border-right-color #25a4bb
                color #25a4bb
            p
                flex-grow 1
                text-align center
                font-weight 200
                font-size .6rem 
                text-overflow ellipsis
                white-space nowrap                
                overflow hidden
                transition all .2s
            p:hover
                z-index 10
                transform scale(1.02)
            .delete-box
                border-right-width 5px
            .delete-box i
                cursor pointer
                margin auto
            .delete-box .starIcon
                    color $mYellow
                    font-size .6rem
            .delete-box i:hover
                    color $mRed
            .delete-box i:active
                    transform scale(.8)

</style>


