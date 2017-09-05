define(['jquery','template'], function ($,template) {
    //请求后台接口，调取后台数据
    $.ajax({
        type:'get',//请求方式
        url:'/api/teacher',//请求地址
        dataType:'json',//返回值类型
        success: function (data) {
            //console.log(data);
            //解析数据并且渲染页面
            var html=template('teacherTpl',{list:data.result});
            $('#teacherInfo').html(html);//讲师管理里面的数据
        }
    })
});