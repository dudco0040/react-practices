package com.poscodx.kanbanboard.repository;

import java.util.List;
import java.util.Map;

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

	// Task: delete
	public int delete(Long no) {
		return sqlSession.delete("task.delete", no);
	}

	// Task: update
	public int update(Long no, String updateDone) {
		return sqlSession.update("task.update", Map.of("no", no, "done", updateDone));
	}

	public String selectDone(Long no) {
		return sqlSession.selectOne("task.selectDone", no);
	}
}
