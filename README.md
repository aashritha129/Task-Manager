📝 Task Manager – Full Stack Web Application

Task Manager is a simple full-stack web application that allows users to register, log in, and manage their daily tasks. Each user can create, view, complete, and delete their own tasks. The project demonstrates frontend–backend integration, REST API design, and database connectivity.


 🚀 Features

* User registration and login
* Email uniqueness validation
* Auto login using localStorage
* Add new tasks
* View user-specific tasks
* Mark tasks as completed
* Delete tasks
* Logout functionality
* Clean and responsive UI


🛠️ Tech Stack

 Frontend

* HTML
* CSS
* JavaScript (Fetch API)

Backend

* Node.js
* Express.js
* MySQL


📂 Project Structure

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




🔗 API Endpoints

Authentication

* POST /register-Registers a new user
* POST /login-Authenticates user credentials

Tasks

* POST /tasks-Create a new task
* GET /tasks/:user_id-Fetch tasks for a specific user
* PUT /tasks/:task_id/complete-Mark a task as completed
* DELETE /tasks/:task_id-Delete a task

🗄️ Database Schema

Users Table

* Stores user account details
* Fields: user ID (primary key), name, email, password
* Email is unique for each user
* Used for user registration and login

Tasks Table

* Stores tasks created by users
* Fields: task ID (primary key), user ID (foreign key), title, status
* Each task belongs to one user
* One user can have multiple tasks


⚙️ Setup Instructions

1️⃣ Clone the repository

* git clone https://github.com/your-username/task-manager.git
* cd task-manager

2️⃣ Backend setup

* cd backend
* npm install
* node server.js

Backend runs on:

http://localhost:5000


3️⃣ Database setup

* Create a MySQL database
* Run the schema SQL commands
* Update database credentials in `db.js`

4️⃣ Frontend setup

* Open `frontend/login.html` using Live Server or browser
* Ensure backend is running


📸 Screenshots
  
* Register Page
  <img width="1897" height="902" alt="Screenshot 2026-02-07 120536" src="https://github.com/user-attachments/assets/cc00a241-ed50-443b-9722-438d20b85679" />
  
* Login Page
  <img width="1886" height="888" alt="Screenshot 2026-02-07 120616" src="https://github.com/user-attachments/assets/f855dcb8-6058-4101-b963-5c2eead0a120" />

* Dashboard
  <img width="1893" height="892" alt="Screenshot 2026-02-07 120639" src="https://github.com/user-attachments/assets/49d8fe31-8b55-42c9-9a5e-0f1ecfdc8d18" />

* Task Add / Complete / Delete
  <img width="1903" height="860" alt="Screenshot 2026-02-07 121305" src="https://github.com/user-attachments/assets/cdb12312-adb9-4e2c-b522-34ecf8cb8b1d" />
  <img width="1907" height="827" alt="Screenshot 2026-02-07 121427" src="https://github.com/user-attachments/assets/daa50683-af28-4698-aa72-e9235545f4a5" />

