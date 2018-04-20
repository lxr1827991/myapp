package com.park.api.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.park.api.entity.Login2;
import com.sun.mail.util.LogOutputStream;

public interface LoginDao {

	void save(@Param("model")Login2 login);
	
	void updateById(@Param("model")Login2 login);
	
	void update(@Param("model")Login2 login);
	
	
	Login2 findByAccount(@Param("val")String account);
	
	Login2 findBySessionid(@Param("val")String l);
	
	public List<Login2> findBySessionidAndToken(@Param("val")String l,@Param("token")String t) ;
	
	
	void delete(String account);
}
