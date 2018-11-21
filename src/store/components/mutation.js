export default {
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
        
        this.commit("getIndexArticle")
        try {
             
            console.log(555)
            var indexs = state.indexArticle.indexs
            var index = state.indexArticle.index
            console.log(index, indexs)
           
            var flag = state.rederArr[indexs].pages[index]["isStar"]
            console.log(flag)
            state.rederArr[indexs].pages[index]["isStar"] = !state.rederArr[indexs].pages[index]["isStar"] 
            
        } catch (error) {
                
        }
   
    },
    getIndexArticle(state){
        var val = state.newId 
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
           state.res[mIndex]["pages"].push(value)  
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