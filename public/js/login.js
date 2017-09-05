define(['jquery','cookie'],function ($) {
    //实现登录功能
    $('#loginBtn').click(function () {
        $.ajax({
            type:'post',//请求方式
            url:'/api/login',//请求地址
//serialize这个方法值获取所有表单数据，但是这个有个前提条件就是表单里面必须有name属性，表单的name叫什么取决于接口文档。
            data:$('#loginForm').serialize(),//传递参数
            dataType:'json',//返回值类型
            success: function (data) {//成功之后的回调函数
                console.log(data);

                if(data.code==200){
                    //存储用户信息到cookie
                    //JSON.stringify这个就是把对象转换为字符串,{pash:'/'}就是把cookie存到根下面
                    $.cookie('loginInfo',JSON.stringify(data.result),{pash:'/'});
                    //登录成功
                    location.href='/main/index';
                }else {
                    alert('用户名或者密码错误');
                }
            }
        });
        return false;
    });
})