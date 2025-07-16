package com.yourname.perfume.controller;

import com.yourname.perfume.model.Product;
import com.yourname.perfume.model.RestockEvent;
import com.yourname.perfume.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ProductController {
    @Autowired private ProductService svc;

    // Products
    @GetMapping("/products")
    public List<Product> all() {
      return svc.getAll();
    }

    @PostMapping("/products")
    public Product create(@RequestBody Product p) {
      return svc.save(p);
    }

    @PutMapping("/products/{id}")
    public Product update(@PathVariable Long id, @RequestBody Product p) {
      p.setId(id);
      return svc.save(p);
    }

    @DeleteMapping("/products/{id}")
    public void delete(@PathVariable Long id) {
      svc.delete(id);
    }

    @PostMapping("/products/{id}/restock")
    public RestockEvent restock(
      @PathVariable Long id,
      @RequestBody Map<String, Integer> body) {
      return svc.restock(id, body.get("amount"));
    }
}
