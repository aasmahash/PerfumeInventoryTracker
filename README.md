# 🌸 Perfume Inventory Tracker 🌸

An inventory tracking and restocking system for perfumes, built with a Spring Boot back-end and a React front-end. 🚀

---

## 📑 Table of Contents

1. [What It Is](#what-it-is)  
2. [Tech Stack / Languages Used](#tech-stack--languages-used)  
3. [Key Features](#key-features)  
4. [Getting Started](#getting-started)
5. [Live Demo](#live-demo)

---

## 💡 What It Is

A simple inventory application to:

- ✨ **Add, update, and delete** perfume products  
- 📊 Track **quantities** and **restock thresholds**  
- ⚠️ **Highlight** items low on stock  
- 🔄 **Trigger restock events** with a single click  
- 🗑️ **Clear restock history** to reset event logs

---

## 🛠️ Tech Stack / Languages Used

- **Back-end**:  
  - Java 
  - Java Spring Boot (REST controllers, data models, service layer)
  - H2 Database
- **Front-end**:  
  - React JS ⚛
  - React Testing Library  
  - HTML / CSS 

---

## 🚀 Key Features

- **ProductForm**  
  - 📝 Create or update products (name, SKU, quantity, restock threshold)  
  - ✅ Client-side validation via HTML5 required inputs  
- **LowStockList**  
  - 🔍 Filters products at or below their restock threshold  
  - 🎫 Displays a count badge (green if zero, red otherwise)  
  - 🖼️ Grid layout of low-stock items with “Restock” buttons  
- **RestockButton**  
  - 📩 Sends a `POST /products/{id}/restock` with a fixed amount (1 unit)  
  - 🔄 Invalidates React Query cache to refresh product list  
- **Clear History Button**  
  - 🧹 Clears all restock event logs via `DELETE /api/restockEvents`  
  - ⚡ Instantly refreshes the history view and resets counts  
- **Error handling & logging**  
  - 🚨 Catch and report server errors in the UI  
  - 🖥️ Console logs for debugging request payloads and endpoints  

---

# 🏁 Getting Started 🏁

### 1. Clone the repo
```
git clone https://github.com/your-username/perfume-inventory.git
cd perfume-inventory
```
### 2. Run Backend
```
cd backend
./mvnw spring-boot:run
```
OR
``` 
cd backend
mvn spring-boot:run
```
### 3. Run Front-end
```cd ../frontend
npm install
npm start  
```
## 🔗 Live Demo! 
At: http://localhost:3000
