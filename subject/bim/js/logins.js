/**
 * @TanLin
 * @logins-vi2017-7-3
 */
var strArr = new Array();
	strArr[0] = '*请输入帐号*';
	strArr[1] = '*请输入密码*';
	
function Logins(){
	var u = $("[name='user']").val();
	var p = $("[name='pwd']").val();
	
	if( u == '' )
	{
		$(".tishiinfo:eq(0)").text(strArr[0]);
		$("[name='user']").focus();
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
	$("[name='user']").blur(function(){
		if( $("[name='user']").val() != '' )
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