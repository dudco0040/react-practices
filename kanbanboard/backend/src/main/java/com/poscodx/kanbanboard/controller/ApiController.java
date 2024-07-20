package com.poscodx.kanbanboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.repository.CardlistRepository;
import com.poscodx.kanbanboard.repository.TaskRepository;
import com.poscodx.kanbanboard.vo.CardlistVo;
import com.poscodx.kanbanboard.vo.TaskVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ApiController {
	@Autowired
	private CardlistRepository cardlistRepository;
	
	@Autowired
	private TaskRepository taskRepository;

	// Card & Task R
	@GetMapping("/api")
	public ResponseEntity<JsonResult> read() {
		log.info("Request[GET /api]");
		List<CardlistVo> cardlist = cardlistRepository.findCard();
		
		System.out.println("====cardlist======");
		System.out.println(cardlist);
		
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(cardlist));
	}
	
	// Task R
	@GetMapping("/api/{cardNo}")
	public ResponseEntity<JsonResult> read2(@PathVariable("cardNo") Long cardNo) {
		log.info("Request[GET /api]");
		System.out.println("*** " + cardNo);
		List<TaskVo> tasklist = taskRepository.findTask(cardNo);
		
		System.out.println("====tasklist======");
		System.out.println(tasklist);
		
		
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(tasklist));
	}
	
	
	// Task C
	@PostMapping("/api")
	public ResponseEntity<JsonResult> create(@RequestBody TaskVo vo){
		log.info("Request[POST /api]:" + vo);
		
		taskRepository.insert(vo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
	
	@DeleteMapping("/api/{no}")
	public ResponseEntity<JsonResult> delete(@PathVariable("no") Long no) {
		log.info("Request[DELETE /api]:" + no);
		
		taskRepository.delete(no);
		
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(no));
	}
}
