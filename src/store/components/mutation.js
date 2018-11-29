import { stat } from "fs";

export default {
    filterFn(state, val) {
        
        state.rederArr = [] // renderArr 只是临时的渲染数组

        /**
         * 通过传入不同的值 渲染出不同的结果 
         * 将筛选出来的键值对封装到一个临时对象obj里面
         * 然后push进rederArr这个临时数组完成渲染
         */
        var item = null
        var obj = {}
        try { 
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

                    // 如果这个obj里面有值 
                    state.rederArr.push(obj)
                    obj = {}
                    item = null
                }
            })
        } catch (error) {
                
        }
    },
 
    showAll(state) {
        state.rederArr = state.res
    },
    clickArticle(state, val) { 
        state.article = null
        var item = null  
        state.res.forEach(ele => { // 遍历列表
            if (Object.prototype.toString.call(ele.pages) == "[object Array]") { // 如果列表里面的pages属性是一个数组的话
               
                item = ele.pages.filter(el => el["id"] === val) // 筛选出这个id匹配的对象
                 
                if (item.length != 0) { // 容错处理  
                    state.newId = val    // 拿出id
                    state.article = item  // 拿出对象 放到article里面用于 edit.Vue界面的渲染
                }else{
                    // console.log("没有找到id匹配的item")
                }
            }

        }) 
        this.commit("getIndexArticle", val) // 拿一下点击的这篇文章的索引
    },  
    toClickUp(state, val){
        /**
         * 拿到这篇文章的id 遍历对象找出当前文章的索引 然后直接赋值
         */
        var mId = state.newId // 拿到这篇文章的id 遍历res原始数组 获取到它在原始数组里面的位置 
        this.commit("getIndexArticle", mId)
        try {
              
            var indexs = state.indexArticle.indexs
            var index = state.indexArticle.index
            // 将拿到的位置提出来 然后直接切换是否收藏或是取消收藏
            // console.log(indexs, index) 
            if(val == "isStar"){ 
                // 如果是点击了 star
                var flag = state.res[indexs].pages[index][val] 
                state.res[indexs].pages[index][val] = !state.res[indexs].pages[index][val]
            }
            if(val == "complete"){
                state.res[indexs].pages[index][val] = true // 表示已经完成
                state.res[indexs].pages[index]["state"] = "已完成" // 表示已经完成
                state.res[indexs].pages[index]["uncomplete"] = false // 表示已经完成
            }
            if(val == "uncomplete"){
                state.res[indexs].pages[index][val] = true // 表示已经完成
                state.res[indexs].pages[index]["state"] = "未完成" // 表示未完成
                state.res[indexs].pages[index]["complete"] = false // 表示已经完成
            } 

            // 这里要重新存储一下数据到本地localStorage
            // console.log("开始存储数据")
            this.commit("setStorage")
        } catch (error) {
                
        }
   
    },
    getIndexArticle(state, val){
          
        state.indexArticle = {}    
        state.res.forEach((ele, indexs) => { // 遍历列表
            if (Object.prototype.toString.call(ele.pages) == "[object Array]") { // 如果列表里面的pages属性是一个数组的话
                
                ele.pages.filter((el, index) => {
                    try {
                        if(el["id"] == val) { 
                            state.indexArticle = {"indexs":indexs, "index":index}
                        }
                    } catch (error) {
                        
                    }
                    
                })
            }
        })
    },

    getDate(state, val){
        state.stateTime = val
    },
    addNewItem(state,value){ 

        /**
         * create full years and render a obj input to rederArr
         */
        console.log(value)
        var date = new Date()
        var years = date.getFullYear()
        var month = date.getMonth() + 1

        var allDate = years + "/" + month

        var mIndex = "-" 
        var flagNow =  Date.now() 
        var checkNow = flagNow
        try { 
            state.res.forEach((eles, indexs) => { 
                if(eles["allDate"].indexOf(allDate) != -1){ 
                    if(flagNow == checkNow){ 
                        checkNow = Date.now() 
                        mIndex = indexs  
                    } 
                } 
    
            }) 
        
            if(mIndex != "-"){ 
                // if mIndex has a index code 
            state.res[mIndex]["pages"].unshift(value)
            
            this.commit("setStorage") 
            }else{
                // need to create a obj 
                var mObj = {
                    "allDate":allDate,
                    "pages":[value]
                }
                
            // console.log("push进res")
                state.res.unshift(mObj) 
                this.commit("setStorage") 
            }
            console.log(55)
        } catch (error) {
                
        }
    },
    setStorage(state){
        console.log("正在建立存储空间。。。") 
        console.log(state.res)
        var data =  JSON.stringify(state.res) 
        localStorage.removeItem("notBook")
        localStorage.setItem("notBook",data)
    },


}