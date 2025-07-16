package com.yourname.perfume.repo;

import com.yourname.perfume.model.RestockEvent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestockEventRepository extends JpaRepository<RestockEvent, Long> {}
