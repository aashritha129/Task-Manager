
# 📝 Task Manager – Full Stack Web Application

## 📌 Project Overview

Task Manager is a simple full-stack web application that allows users to register, log in, and manage their daily tasks. Each user can create, view, complete, and delete their own tasks. The project demonstrates frontend–backend integration, REST API design, and database connectivity.

---

## 🚀 Features

* User registration and login
* Email uniqueness validation
* Auto login using localStorage
* Add new tasks
* View user-specific tasks
* Mark tasks as completed
* Delete tasks
* Logout functionality
* Clean and responsive UI

---

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript (Fetch API)

### Backend

* Node.js
* Express.js
* MySQL

---

## 📂 Project Structure

```
task-manager/
 ├── backend/
 │   ├── server.js
 │   ├── db.js
 │   ├── package.json
 │   └── node_modules/
 ├── frontend/
 │   ├── login.html
 │   ├── register.html
 │   ├── dashboard.html
 │   ├── login.css
 │   ├── style.css
 │   ├── login.js
 │   └── tasks.js
 └── README.md
```

---

## 🔗 API Endpoints

### Authentication

* **POST /register**
  Registers a new user

* **POST /login**
  Authenticates user credentials

### Tasks

* **POST /tasks**
  Create a new task

* **GET /tasks/:user_id**
  Fetch tasks for a specific user

* **PUT /tasks/:task_id/complete**
  Mark a task as completed

* **DELETE /tasks/:task_id**
  Delete a task

---

## 🗄️ Database Schema

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE tasks (
  task_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  title VARCHAR(255),
  status VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

### 2️⃣ Backend setup

```bash
cd backend
npm install
node server.js
```

Backend runs on:

```
http://localhost:5000
```

### 3️⃣ Database setup

* Create a MySQL database
* Run the schema SQL commands
* Update database credentials in `db.js`

### 4️⃣ Frontend setup

* Open `frontend/login.html` using Live Server or browser
* Ensure backend is running

---

## 📸 Screenshots

* Login Page
  <img width="1886" height="888" alt="Screenshot 2026-02-07 120616" src="https://github.com/user-attachments/assets/bff1070b-e291-49f9-a181-f5cd9f238dc6" />
* Register Page
  <img width="1897" height="902" alt="Screenshot 2026-02-07 120536" src="https://github.com/user-attachments/assets/a059728c-5be0-4c43-9671-aa44e333539b" />
* Dashboard
  <img width="1893" height="892" alt="Screenshot 2026-02-07 120639" src="https://github.com/user-attachments/assets/95ed44ea-8100-4d2e-b769-6b74cbefd16f" />
* Task Add / Complete / Delete
  <img width="1903" height="860" alt="Screenshot 2026-02-07 121305" src="https://github.com/user-attachments/assets/84a8877f-b6f4-4f9f-a5b8-386f7860a1da" />
  <img width="1907" height="827" alt="Screenshot 2026-02-07 121427" src="https://github.com/user-attachments/assets/e1da947e-e42c-44e9-8bfa-827062fc0103" />



