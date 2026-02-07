Perfect 👍 here’s a **complete, clean, evaluator-ready `README.md`** you can copy-paste directly into your project root.

---

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
 ├── screenshots/
 │   ├── login.png
 │   ├── register.png
 │   ├── dashboard.png
 │   └── task-actions.png
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

### Relationships

* One user can have multiple tasks (One-to-Many)
* Email is unique for each user

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

Screenshots of the application UI are available in the `screenshots/` folder:

* Login Page
* Register Page
* Dashboard
* Task Add / Complete / Delete

