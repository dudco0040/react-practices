package com.poscodx.kanbanboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.repository.CardlistRepository;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ApiController {
	@Autowired
	private CardlistRepository cardlistRepository;

	@GetMapping("/api")
	public ResponseEntity<JsonResult> read(){
		log.info("Request[GET /api]");
		
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(cardlistRepository.findAll()));
	}
	
}
