/**
 * @TanLin
 * @logins-vi2017-7-3
 */
var strArr = new Array();
	strArr[0] = '*请输入帐号*';
	strArr[1] = '*请输入密码*';
	strArr[2] = '*请输入手机*';
	strArr[3] = '*请输入邮箱*';
	strArr[4] = '*手机号错误*';
	strArr[5] = '*邮箱不正确*';
	
var relphone =/^0?(13|14|15|17|18)[0-9]{9}$/;
var relemail =/^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/;

function Logins(){
	var u = $("[name='users']").val();
	var p = $("[name='pwd']").val();
	
	if( u == '' )
	{
		$(".tishiinfo:eq(0)").text(strArr[0]);
		$("[name='users']").focus();
		return false;
	}	
	if( p == '' )
	{
		$(".tishiinfo:eq(1)").text(strArr[1]);
		$("[name='pwd']").focus();
		return false;
	}
	
	//验证帐号密码
	
	
}
$(function(){
	$("[name='users']").blur(function(){
		if( $("[name='users']").val() != '' )
		{	
			$(".tishiinfo:eq(0)").text('');
		}
	});
	$("[name='pwd']").blur(function(){
		if( $("[name='pwd']").val() != '' )
		{
			$(".tishiinfo:eq(1)").text('');
		}
	});
});

function reset_s()
{
	var u = $("[name='users']").val();
	var p = $("[name='pwd']").val();
	var t = $("[name='tel']").val();
	var e = $("[name='email']").val();
	
	if( u == '' )
	{
		$(".tishiinfo:eq(0)").text(strArr[0]);
		$("[name='users']").focus();
		return false;
	}	
	if( p == '' )
	{
		$(".tishiinfo:eq(1)").text(strArr[1]);
		$("[name='pwd']").focus();
		return false;
	}
	if( t == '' )
	{
		$(".tishiinfo:eq(2)").text(strArr[2]);
		$("[name='tel']").focus();
		return false;
	}
	if(!relphone.test(t))
	{
		$(".tishiinfo:eq(2)").text(strArr[4]);
		$("[name='tel']").focus();
		return false;
	}
	if( e == '' )
	{
		$(".tishiinfo:eq(3)").text(strArr[3]);
		$("[name='email']").focus();
		return false;
	}
	if(!relemail.test(e))
	{
		$(".tishiinfo:eq(3)").text(strArr[5]);
		$("[name='email']").focus();
		return false;
	}
	
	//验证帐号密码
	
}
$(function(){
	$("[name='tel']").blur(function(){
		if( $("[name='tel']").val() != '' )
		{	
			$(".tishiinfo:eq(2)").text('');
		}
	});
	$("[name='email']").blur(function(){
		if( $("[name='email']").val() != '' )
		{
			$(".tishiinfo:eq(3)").text('');
		}
	});
});