// data[0].src --->"1.png"
// data[1].title --->"第二怪 草帽当锅盖"

//模拟数据Json
var data = [{
    "src": "1.png",
    "title": "第一怪 竹筒当烟袋"
}, {
    "src": "2.png",
    "title": "第二怪 草帽当锅盖"
}, {
    "src": "3.png",
    "title": "第三怪 这边下雨那边晒"
}, {
    "src": "4.png",
    "title": "第四怪 四季服装同穿戴"
}, {
    "src": "5.png",
    "title": "第五怪 火车没有汽车快"
}, {
    "src": "6.png",
    "title": "第六怪 火车不通国内通国外"
}, {
    "src": "7.png",
    "title": "第七怪 老奶爬山比猴快"
}, {
    "src": "8.png",
    "title": "第八怪 鞋子后面多一块"
}, {
    "src": "9.png",
    "title": "第九怪 脚趾四季露在外"
}, {
    "src": "10.png",
    "title": "第十怪 鸡蛋拴着卖"
}, {
    "src": "11.png",
    "title": "第十一怪 粑粑叫饵块"
}, {
    "src": "12.png",
    "title": "第十二怪 花生蚕豆数着卖"
}, {
    "src": "13.png",
    "title": "第十三怪 三个蚊子一盘菜"
}, {
    "src": "14.png",
    "title": "第十四怪 四个老鼠一麻袋"
}, {
    "src": "15.png",
    "title": "第十五怪 树上松毛扭着卖"
}, {
    "src": "16.png",
    "title": "第十六怪 姑娘叫老太"
}, {
    "src": "17.png",
    "title": "第十七怪 小和尚可以谈恋爱"
}, {
    "src": "18.png",
    "title": "第十八怪 背着娃娃谈恋爱"
}]


var waterfall = function(wrap, boxes) {
    //获取屏幕可以显示列数
    var boxWidth = boxes.eq(0).width() + 40;
    var windowWidth = $(window).width();
    var colsNumber = Math.floor(windowWidth / boxWidth);

    //设置容器的宽度
    wrap.width(boxWidth * colsNumber);

    //定义一个数组并存储每一列的高度
    var everyHeight = new Array();
    for (var i = 0; i < boxes.length; i++) {
        if (i < colsNumber) {
            everyHeight[i] = boxes.eq(i).height() + 40;

        } else {
            var minHeight = Math.min.apply(null, everyHeight);
            var minIndex = getIndex(minHeight, everyHeight);
            setStyle(boxes.eq(i), minHeight, boxes.eq(minIndex).position().left, i)
            everyHeight[minIndex] += boxes.eq(i).height() + 40;
        };
        boxes.eq(i).hover(function() {
            $(this).stop().animate({
                'opacity': '0.5'
            }, 200);
        }, function(event) {
            $(this).stop().animate({
                'opacity': '1'
            }, 100);
        });
    };
};



//获取最小列的索引
function getIndex(minHeight, everyHight) {
    for (index in everyHight) {
        if (everyHight[index] == minHeight) {
            return index;
        };
    };
};

//设置追加盒子样式
var getStarNumber = 0;

function setStyle(box, top, left, index) {
    if (getStarNumber >= index) {
        return false;
    };
    box.css({
        'position': 'absolute',
        'top': top,
        'left': left,
        'opacity': '0'
    }).stop().animate({
        'opacity': '1'
    }, 1000);
    getStarNumber = index
}

//数据请求检验
function getCheck(wrap) {
    // 获取文档高度
    var documentHeight = $(window).height();
    //获取文档向上滚动的高度
    var scrollHeight = $(window).scrollTop();
    //获取最后一个盒子所在列的总高度
    var boxes = wrap.children('div');
    var lastBoxTop = boxes.eq(boxes.length - 1).offset().top;
    var lastHeight = boxes.eq(boxes.length - 1).height() + 20;
    var lastColHeight = lastBoxTop + lastHeight;
    return documentHeight + scrollHeight >= lastColHeight ? true : false;
};


//追加盒子函数
function appendBox(wrap) {
    if (getCheck(wrap)) {
        for (i in data) {
            var innerString = '<div><img src="imgs/index-waterfall/' + data[i].src + '"><a href="http://www.imooc.com" target="_blank">' + data[i].title + '</a></div>'
            wrap.append(innerString);
        };
    } else {
        return false;
    };
    waterfall(wrap, wrap.children('div'));
};

$(document).ready(function(event) {
    var wrap = $('#wrap');
    var boxes = $('#wrap').children('div');
    waterfall(wrap, boxes);

    $(this).scroll(function(event) {
        appendBox(wrap);
    });
});

$(function(){
    $(".items__item").on('click',function(){
        $(this).addClass("items__active").siblings().removeClass("items__active");
    })

    $(".inpu1").on('focus',function(){
         $('.search').removeClass('search').addClass('search1');
    })

    $(".inpu1").on('blur',function(){
         $('.search1').removeClass('search1').addClass('search');
    })

    $(".logo").on('click', function() {
        window.open('index.html')
    });
})

