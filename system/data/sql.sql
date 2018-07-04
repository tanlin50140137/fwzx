create database if not exists htx_baidu default character set 'utf8';

drop table if exists htx_admin;
create table htx_admin(
	id int(10) unsigned not null auto_increment primary key comment '主键',
	users   varchar(255) not null default '' comment '登录帐号',
	pwd     varchar(255) not null default '' comment '登录密码',
	tel     varchar(255) not null default '' comment '手机-注册',
	email   varchar(255) not null default '' comment '邮箱-注册',
	p_pay   varchar(255) not null default '' comment '当前支付金额',
	h_pay   varchar(255) not null default '' comment '历时金额',
	t_pay   varchar(255) not null default '' comment '当前可用金额',
	ky_date varchar(255) not null default '' comment '可用天数',
	pay_time  int(11) unsigned not null default 0 comment '续费时间',
	dqy_time  int(11) unsigned not null default 0 comment '到期时间',
	tzy_time  int(11) unsigned not null default 0 comment '通知时间',
	publitime int(11) unsigned not null default 0 comment '注册时间',
	state tinyint(10) unsigned not null default 0 comment '状态,0=正常,1=禁止',
	key key_users(users),
	key key_publitime(publitime),
	key key_state(state)
)ENGINE=MyISAM DEFAULT CHARSET='utf8';

