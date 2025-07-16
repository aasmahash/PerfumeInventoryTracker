package com.yourname.perfume.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class RestockEvent {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn(name = "product_id", nullable = false)
  private Product product;

  private LocalDateTime timestamp;
  private int amount;

  // Getters and setters
  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }

  public Product getProduct() { return product; }
  public void setProduct(Product product) { this.product = product; }

  public LocalDateTime getTimestamp() { return timestamp; }
  public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }

  public int getAmount() { return amount; }
  public void setAmount(int amount) { this.amount = amount; }
}
