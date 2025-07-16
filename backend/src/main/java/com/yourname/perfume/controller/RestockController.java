
package com.yourname.perfume.controller;

import com.yourname.perfume.model.RestockEvent;
import com.yourname.perfume.repo.RestockEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/restockEvents")
public class RestockController {
  @Autowired
  private RestockEventRepository eventRepo;

  @GetMapping
  public List<RestockEvent> allRestockEvents() {
    return eventRepo.findAll();

    
  }    
  @DeleteMapping
public ResponseEntity<Void> clearHistory() {
  eventRepo.deleteAll();
  return ResponseEntity.noContent().build();
}
}
