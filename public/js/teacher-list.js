define(['jquery','template','bootstrap'], function ($,template) {
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
            //绑定查看的点击事件
            $('.preveiw').click(function () {
                //closest()这个方法是离当前元素最近的父元素
                var tcId=$(this).closest('td').attr('data-tcId');
                //通过接口调用后台数据
                $.ajax({
                   type:'get',
                   url:'/api/teacher/view',
                    data:{tc_id:tcId},
                    dataType:'json',
                    success: function (data) {
                        //解析数据渲染页面
                        var html=template('modalTpl',data.result);
                        $('#modalInfo').html(html);
                        //显示弹出模态框
                        $('#teacherModal').modal();
                    }
                });
            });
        }
    });

});