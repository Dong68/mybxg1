require.config({
    baseUrl:'/public/assets',
    paths:{
        jquery:'jquery/jquery.min',
        common:'../js/common',
        login:'../js/login',
        cookie:'jquery-cookie/jquery.cookie',
        template:'artTemplate/template-web',
        teacherlist:'../js/teacher-list',
        //引入bootstrap
        bootstrap:'bootstrap/js/bootstrap.min'
    },
    shim:{//shim的作用就是把非标准模块转换为标准模块
        bootstrap: {//把bootstrap转为标准模块
            deps:['jquery']
        }
    }
});