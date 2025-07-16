package com.yourname.perfume.repo;

import com.yourname.perfume.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {}
