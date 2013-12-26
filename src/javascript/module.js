//模块类开发
var blogModule = (function () {
    var my = {}, privateName = "博客园";

    function privateAddTopic(data) {
        // 这里是内部处理代码
    }

    my.Name = privateName;
    my.AddTopic = function (data) {
        privateAddTopic(data);
    };

    return my;
} ());

//扩展
var blogModule = (function (my) {
    my.AddPhoto = function () {
        //添加内部代码  
    };
    return my;
} (blogModule)); 

//松耦合扩展
var blogModule = (function (my) {
    // 添加一些功能
    return my;
} (blogModule || {})); 

//
(function ($, YAHOO) {
    // 这里，我们的代码就可以使用全局的jQuery对象了，YAHOO也是一样
} (jQuery, YAHOO));



// 创建一个立即调用的匿名函数表达式
// return一个变量，其中这个变量里包含你要暴露的东西
// 返回的这个变量将赋值给counter，而不是外面声明的function自身
var counter = (function () {
    var i = 0;

    return {
        get: function () {
            return i;
        },
        set: function (val) {
            i = val;
        },
        increment: function () {
            return ++i;
        }
    };
} ());

// counter是一个带有多个属性的对象，上面的代码对于属性的体现其实是方法
counter.get(); // 0
counter.set(3);
counter.increment(); // 4
counter.increment(); // 5

counter.i; // undefined 因为i不是返回对象的属性
i; // 引用错误: i 没有定义（因为i只存在于闭包）