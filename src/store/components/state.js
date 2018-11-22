export default {
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
    rederArr: [], // 临时的渲染数组 
    article: [{
        "id": "201561119",
        "date": "2018/01/01",
        "week": "星期一",
        "state": "执行中",
        "complete": true,
        "uncomplete": true,
        "isStar": false,
        "title": "",
        "text": ""
    }], //存储文章数组
    stateTime:{time:"2018/01/01",week:"星期一" }, // 存储文本创建时间
    indexArticle:{}, // 用于收藏 标识 里面有两个索引 第一个是时间索引 第二个是位置索引
    newId:"", // 点击文章后更新的文章id
}