export default {
    res: [],
    rederArr: [], // 临时的渲染数组 
    article: [{
        "id": "201561119",
        "date": "2018/01/01",
        "week": "星期一",
        "state": "执行中",
        "complete": false,
        "uncomplete": true,
        "isStar": false,
        "title": "",
        "text": ""
    }], //存储文章数组
    stateTime:{time:"2018/01/01",week:"星期一" }, // 存储文本创建时间
    indexArticle:{}, // 用于收藏 标识 里面有两个索引 第一个是时间索引 第二个是位置索引
    newId:"", // 点击文章后更新的文章id
}