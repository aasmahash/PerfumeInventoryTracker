package com.yourname.perfume.service;
import com.yourname.perfume.model.Product;
import com.yourname.perfume.model.RestockEvent;
import com.yourname.perfume.repo.ProductRepository;
import com.yourname.perfume.repo.RestockEventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service

public class ProductService {
     @Autowired private ProductRepository productRepo;
  @Autowired private RestockEventRepository eventRepo;

  public List<Product> getAll() {
    return productRepo.findAll();
  }

  public Product save(Product p) {
    return productRepo.save(p);
  }

  public void delete(Long id) {
    productRepo.deleteById(id);
  }

  @Transactional
  public RestockEvent restock(Long productId, int amount) {
    Product p = productRepo.findById(productId)
      .orElseThrow(() -> new RuntimeException("Product not found"));
    p.setQuantity(p.getQuantity() + amount);
    productRepo.save(p);

    RestockEvent ev = new RestockEvent();
    ev.setProduct(p);
    ev.setTimestamp(LocalDateTime.now());
    ev.setAmount(amount);
    return eventRepo.save(ev);
  }
}
