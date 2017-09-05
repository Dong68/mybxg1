define(['jquery','template','cookie'],function ($,template) {
	//NProgress.start();
	//NProgress.done();
	//这三行代码是控制左侧导航菜单的折叠和展开
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	//实现退出功能
	$('#logoutBtn').click(function () {
		$.ajax({
			type:'post',//请求方式
			url:'/api/logout',//请求地址
//serialize这个方法值获取所有表单数据，但是这个有个前提条件就是表单里面必须有name属性，表单的name叫什么取决于接口文档。
			dataType:'json',//返回值类型
			success: function (data) {//成功之后的回调函数
				console.log(data);
				if(data.code==200){
					//退出成功
					location.href='/main/login';
				}
			}
		});
		return false;
	});
	//验证是否登录
	var seesionId= $.cookie('PHPSESSID');
	//意思就是如果不存在sessionId并且没有/main/login这个地址
	if(!seesionId&&location.pathname!='/main/login'){
		location.href='/main/login';
	}
	//获取用户登录信息,并填充页面
	//JSON.parse把字符串专为对象
	var cookie=$.cookie('loginInfo');
	var loginInfo= cookie?JSON.parse(cookie):{};
	//console.log(loginInfo);
	//$('.profile img').attr('src',loginInfo.tc_avatar);
	//$('.profile h4').attr('src',loginInfo.tc_name);
	var tpl='<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
	var html=template.render(tpl,loginInfo);
	$('#profileId').html(html);

});

