define(['jquery'], function ($) {
    //工具函数
    return{
        setMenu: function (path) {
            $('.navs a[href="'+path+'"]').addClass('active');
        },
        //这个的作用就是获取URL参数当中指定的参数值
        qs: function (key) {
            //flag=123&zbc=hello例如这就是param
            //param是整个？号之后的数据,是所有的参数
            var param=location.search.substring(1);
            var result=null;
            if(param){
                var kvs=param.split('&');//分割param参数按照&符分割
                $.each(kvs, function (i,item) {//item就是其中的一项键值对
                    var kv=item.split('=');//分割param参数按照=号分割
                    if(key==kv[0]){
                      //找到对应参数
                        result=kv[1];
                        return false;//终止循环
                    }
                });
            }
            return result;
        }
    }
})