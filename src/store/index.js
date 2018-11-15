import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        
        res : [{
            "allDate":"2018/10",
            "pages":[{
                "id": "20154512",
                "date": "2018/10/02",
                "week": "星期三",
                "state": "执行中",
                "completeState": "暂无",
                "complete":false,
                "uncomplete":true,
                "isStar":false,
                "title": "中午写一篇文章，顺便更新一下博客博客博客"
            },{
                "id": "20154513",
                "date": "2018/10/02",
                "week": "星期三",
                "state": "执行中",
                "completeState": "暂无",
                "complete":true,
                "uncomplete":true,
                "isStar":false,
                "title": "中午写一篇文章，顺便更新一下博客博客博客"
            },{
                "id": "2015422",
                "date": "2018/10/02",
                "week": "星期三",
                "state": "执行中",
                "completeState": "暂无",
                "complete":true,
                "uncomplete":true,
                "isStar":true,
                "title": "中午写一篇文章，顺便更新一下博客博客博客"
            },{
                "id": "20154612",
                "date": "2018/10/02",
                "week": "星期三",
                "state": "执行中",
                "completeState": "暂无",
                "complete":false,
                "uncomplete":true,
                "isStar":false,
                "title": "中午写一篇文章，顺便更新一下博客博客博客"
            },{
                "id": "20154619",
                "date": "2018/10/02",
                "week": "星期三",
                "state": "执行中",
                "completeState": "暂无",
                "complete":false,
                "uncomplete":true,
                "isStar":false,
                "title": "中午写一篇文章，顺便更新一下博客博客博客"
            }]
        },{
            "allDate":"2018/09",
            "pages":[{
                "id": "20154619",
                "date": "2018/10/02",
                "week": "星期三",
                "state": "执行中",
                "completeState": "暂无",
                "complete":true,
                "uncomplete":true,
                "isStar":true,
                "title": "中午写一篇文章，顺便更新一下博客博客博客"
            },{
                "id": "201561119",
                "date": "2018/10/02",
                "week": "星期三",
                "state": "执行中",
                "completeState": "暂无",
                "complete":true,
                "uncomplete":true,
                "isStar":false,
                "title": "中午写一篇文章，顺便更新一下博客博客博客"
            }]
        }],
       rederArr:[], // 渲染数组 
    },

    mutations:{
        completed(state, val){ 
            state.rederArr = []
            var item = null
            var obj = {}
            state.res.forEach(ele=>{ // 遍历列表
                if(Object.prototype.toString.call(ele.pages) == "[object Array]"){ // 如果列表里面的pages属性是一个数组的话
                   item = ele.pages.filter(el=> el[val] == true) // 遍历这个数组 将complete为true的对象存进item item就是一个数组
                   if(item){ // 容错处理 
                    obj.allDate = ele.allDate // 将遍历的对象的日期存进临时对象
                    obj.pages = item 
                   }
                }
                
                if(JSON.stringify(obj) !== "{}"){
                    state.rederArr.push(obj)
                    obj = {}
                    item = null
                }
            }) 
        },
    }
})