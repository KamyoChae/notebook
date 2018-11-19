import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        res: [{
            "allDate": "2018/10",
            "pages": [{
                "id": "20154512",
                "date": "2018/10/02",
                "week": "星期三",
                "state": "执行中",
                "complete": false,
                "uncomplete": true,
                "isStar": false,
                "title": "中午写一c新一下博客博客博客",
                "text": "文章内容在这里..."
            }, {
                "id": "20154513",
                "date": "2018/10/02",
                "week": "星期三",
                "state": "执行中",
                "complete": true,
                "uncomplete": true,
                "isStar": false,
                "title": "中午写一b章，顺便更新一下博客博客博客",
                "text": "文章内容在这里..."
            }, {
                "id": "2015422",
                "date": "2018/10/02",
                "week": "星期三",
                "state": "执行中",
                "complete": true,
                "uncomplete": true,
                "isStar": true,
                "title": "中午写d新一下博客博客博客",
                "text": "文章内容在这里..."
            }, {
                "id": "20154612",
                "date": "2018/10/02",
                "week": "星期三",
                "state": "执行中",
                "complete": false,
                "uncomplete": true,
                "isStar": false,
                "title": "中午写一篇文章，顺便更新一下博客博客博客",
                "text": "文章内容在这里..."
            }, {
                "id": "20154619",
                "date": "2018/10/02",
                "week": "星期三",
                "state": "执行中",
                "complete": false,
                "uncomplete": true,
                "isStar": false,
                "title": "中午写一篇文章，顺便更新一下博客博客博客",
                "text": "文章内容在这里..."
            }]
        }, {
            "allDate": "2018/09",
            "pages": [{
                "id": "20154619",
                "date": "2018/10/02",
                "week": "星期三",
                "state": "执行中",
                "complete": true,
                "uncomplete": true,
                "isStar": true,
                "title": "中午写一篇文章，顺便更新一下博客博客博客",
                "text": "文章内容在这里..."
            }, {
                "id": "201561119",
                "date": "2018/10/02",
                "week": "星期三",
                "state": "执行中",
                "complete": true,
                "uncomplete": true,
                "isStar": false,
                "title": "aa新一下博客博客博客",
                "text": "文章内容在这里..."
            }]
        }],
        rederArr: [], // 渲染数组 
        article: null, //存储文章数组
        stateTime:{time:"这么机智的嘛",week:"哟" }, // 存储文本创建时间
        indexArticle:{}, // 用于收藏 标识 里面有两个索引 第一个是时间索引 第二个是位置索引
        newId:"", // 点击文章后更新的文章id
    },

    mutations: {
        filterFn(state, val) {
            state.rederArr = []
            var item = null
            var obj = {}
            state.res.forEach(ele => { // 遍历列表
                if (Object.prototype.toString.call(ele.pages) == "[object Array]") { // 如果列表里面的pages属性是一个数组的话
                   
                    if(val == "complete" || val == "isStar" || val == "uncomplete"){  // 如果点击的是已完成/未完成/收藏
                        item = ele.pages.filter(el => el[val] == true) // 遍历这个数组 将complete为true的对象存进item item就是一个数组
                    }else { // 否则就是触发了输入框
                        item = ele.pages.filter(el => el["title"].indexOf(val) !== -1) // 遍历这个数组 将complete为true的对象存进item item就是一个数组
                    }
                   
                    if (item) { // 容错处理 
                        obj.allDate = ele.allDate // 将遍历的对象的日期存进临时对象
                        obj.pages = item
                    }
                }

                if (JSON.stringify(obj) !== "{}") {
                    state.rederArr.push(obj)
                    obj = {}
                    item = null
                }
            })
        },
        
     
        showAll(state) {
            state.rederArr = state.res
        },
        clickArticle(state, val) { 
            state.article = null
            var item = null 
            state.res.forEach(ele => { // 遍历列表
                if (Object.prototype.toString.call(ele.pages) == "[object Array]") { // 如果列表里面的pages属性是一个数组的话
                    item = ele.pages.filter(el => el["id"] === val) 
                    if (item.toString()) { // 容错处理 
                        state.newId = val    // 拿出id
                        state.article = item  
                        // console.log(state.article)
                    }
                }
            }) 
        },  
        toStar(state){
            /**
             * 拿到这篇文章的id 遍历对象找出当前文章的索引 然后直接赋值
             */
            
            state.indexArticle = {}  
            try {
                
                this.getIndexArticle() 
                var indexs = state.indexArticle.indexs
                var index = state.indexArticle.index
                state.rederArr[indexs].pages[index]["isStar"] = !state.rederArr[indexs].pages[index]["isStar"] 
                
            } catch (error) {
                    
            }
       
        },
        getIndexArticle(){
            var val = state.newId
            var item = null 
            state.res.forEach((ele, indexs) => { // 遍历列表
                if (Object.prototype.toString.call(ele.pages) == "[object Array]") { // 如果列表里面的pages属性是一个数组的话
                     
                    item = ele.pages.filter((el, index) => { 
                                if(el["id"].indexOf(val) != -1) {
                                    state.indexArticle = {"indexs":indexs, "index":index}
                                    return
                                }
                            }
                    )
                }
            })  
        },

        getDate(state, val){
            state.stateTime = val
        },
    }
})