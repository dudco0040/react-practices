package com.poscodx.kanbanboard.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.poscodx.kanbanboard.vo.TaskVo;

@Repository
public class TaskRepository {
	@Autowired
	private SqlSession sqlSession;
	
	
	// Task: select
	public List<TaskVo> findTask(Long cardNo) {
		return sqlSession.selectList("task.findAll", cardNo);
	}
	
	// Task: insert
	public int insert(TaskVo vo) {
		return sqlSession.insert("task.insert", vo);
	}


	
	// update
	
	// delete
}
