package com.poscodx.kanbanboard.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.poscodx.kanbanboard.vo.CardlistVo;

@Repository
public class CardlistRepository {
	@Autowired
	private SqlSession sqlSession;
	
	// select all
	public List<CardlistVo> findAll(){
		return sqlSession.selectList("cardlist.findAll");
	}
	
	// insert
	
	// update
	
	// delete
}
