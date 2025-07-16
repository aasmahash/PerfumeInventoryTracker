package com.yourname.perfume.model;

import jakarta.persistence.*;

@Entity
public class Product {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private String sku;
  private int quantity;
  private int restockThreshold;

  // Standard getters and setters
  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }

  public String getName() { return name; }
  public void setName(String name) { this.name = name; }

  public String getSku() { return sku; }
  public void setSku(String sku) { this.sku = sku; }

  public int getQuantity() { return quantity; }
  public void setQuantity(int quantity) { this.quantity = quantity; }

  public int getRestockThreshold() { return restockThreshold; }
  public void setRestockThreshold(int restockThreshold) { this.restockThreshold = restockThreshold; }
}
