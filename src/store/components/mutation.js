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
                if (item.toString()) { // 容错处理 
                    state.newId = val    // 拿出id
                    state.article = item  // 拿出对象 放到article里面用于 edit.Vue界面的渲染
                    // console.log(state.newId)
                }
            }
        }) 
    },  
    toStar(state){
        /**
         * 拿到这篇文章的id 遍历对象找出当前文章的索引 然后直接赋值
         */
        
        state.indexArticle = {}   
        this.commit("getIndexArticle")
        try {
             
            console.log(555)
            var indexs = state.indexArticle.indexs
            var index = state.indexArticle.index
            // 将拿到的位置提出来 然后直接切换是否收藏或是取消收藏
            console.log(indexs, index)
           
            var flag = state.res[indexs].pages[index]["isStar"]
            console.log(flag)
            state.res[indexs].pages[index]["isStar"] = !state.res[indexs].pages[index]["isStar"] 
           

            // 这里要重新存储一下数据到本地localStorage
        } catch (error) {
                
        }
   
    },
    getIndexArticle(state){
        var val = state.newId // 拿到这篇文章的id 遍历res原始数组 获取到它在原始数组里面的位置 
        var item = null 
        state.res.forEach((ele, indexs) => { // 遍历列表
            if (Object.prototype.toString.call(ele.pages) == "[object Array]") { // 如果列表里面的pages属性是一个数组的话
                 
                item = ele.pages.filter((el, index) => { 
                            if(el["id"].indexOf(val) != -1) {
                                state.indexArticle = {"indexs":indexs, "index":index} 
                            }
                        }
                )
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

        var date = new Date()
        var years = date.getFullYear()
        var month = date.getMonth() + 1

        var allDate = years + "/" + month

        var mIndex = "-" 
        var flagNow =  Date.now() 
        var checkNow = flagNow
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
        }else{
            // need to create a obj 
            var mObj = {
                "allDate":allDate,
                "pages":[value]
            }
            state.res.unshift(mObj) 

        }

    }
}