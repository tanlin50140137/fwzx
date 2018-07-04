<?php
header('content-type:text/html;charset=utf-8');
/**
 * 所有模块必须写在函数里
 * */
#主页面 , Ready to start work (准备开始工作)
function index()
{
	#公共文件内容
	include 'subject/'.getThemeDir().'/common.php';
	
	require 'subject/'.getThemeDir().'/template/'.__FUNCTION__.'.html';
}
#注册
function reset_u()
{
	#公共文件内容
	include 'subject/'.getThemeDir().'/common.php';
	
	require 'subject/'.getThemeDir().'/template/'.__FUNCTION__.'.html';
}
#后台框架
function adminfrom()
{
	#公共文件内容
	include 'subject/'.getThemeDir().'/common.php';
	
	require 'subject/'.getThemeDir().'/template/'.__FUNCTION__.'.html';
}
#菜单栏
function menu()
{
	#公共文件内容
	include 'subject/'.getThemeDir().'/common.php';
	
	require 'subject/'.getThemeDir().'/template/'.__FUNCTION__.'.html';
}
#后台首页面
function adminindex()
{
	#公共文件内容
	include 'subject/'.getThemeDir().'/common.php';
	
	require 'subject/'.getThemeDir().'/template/'.__FUNCTION__.'.html';
}
#获取KEY
function getkey()
{
	#公共文件内容
	include 'subject/'.getThemeDir().'/common.php';
	
	require 'subject/'.getThemeDir().'/template/'.__FUNCTION__.'.html';
}
#绑定域名
function geturl()
{
	#公共文件内容
	include 'subject/'.getThemeDir().'/common.php';
	
	require 'subject/'.getThemeDir().'/template/'.__FUNCTION__.'.html';
}
#添值服务
function getpay()
{
	#公共文件内容
	include 'subject/'.getThemeDir().'/common.php';
	
	require 'subject/'.getThemeDir().'/template/'.__FUNCTION__.'.html';
}
#帮助中心
function gethelp()
{
	#公共文件内容
	include 'subject/'.getThemeDir().'/common.php';
	
	require 'subject/'.getThemeDir().'/template/'.__FUNCTION__.'.html';
}
###############################################################################################
#获取key
function GetOpenId()
{
	$f = $_POST['flag'];
	switch ($f)
	{
		case 1:
			$keys = date('YmdHis').mt_rand(100000,999999);
		break;
		case 2:
			$keys = md5(uniqid('',microtime(true)));
		break;
	}
	echo $keys;
}
#注销用户
function log_on()
{
	#注销用户信息
	
	//............................
	
	#返回用户登录
	header("location:".apth_url(''));
}