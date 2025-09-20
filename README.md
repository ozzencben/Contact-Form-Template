# Contact Form Project

This is a **Contact Form** project built with **React** (frontend) and **Express.js + MongoDB** (backend).  
It allows users to send their name, email, and message through a simple form.  
Messages are saved in a MongoDB database, and the frontend provides real-time feedback on success or error states.

---

## 🚀 Features
- Responsive contact form with validation  
- Backend API built with Express.js  
- MongoDB integration for message storage  
- Loading, success, and error states on frontend  
- Clean and modern UI with CSS styling  

---

## 🛠️ Tech Stack
- **Frontend:** React, Axios, CSS  
- **Backend:** Node.js, Express.js, MongoDB  
- **Other Tools:** dotenv, morgan, helmet, cors  

---

## 📂 Project Structure
```
/contact-form-frontend
  ├── src/
  │   ├── components/
  │   │   └── ContactForm.jsx
  │   ├── api/
  │   │   └── api.js
  │   └── App.js
/contact-form-backend
  ├── models/
  │   └── Contact.js
  ├── routes/
  │   └── ContactRoutes.js
  ├── config/
  │   └── db.js
  └── server.js
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/contact-form.git
cd contact-form
```

### 2. Backend Setup
```bash
cd contact-form-backend
npm install
```
Create a `.env` file:
```
PORT=5000
MONGO_URI=your-mongodb-uri
```

Run the backend:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd contact-form-frontend
npm install
npm start
```

---

## 📬 API Endpoint

- **POST /api/contacts** → Save a new contact message  
  Request body example:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I would like to work with you!"
  }
  ```

---

## 👤 Author
- **Name:** Özenç Dönmezer  
- **Email:** ozzencben@gmail.com  
- **LinkedIn:** [Özenç Dönmezer](https://www.linkedin.com/in/%C3%B6zen%C3%A7-d%C3%B6nmezer-769125357/)  

---

## 📄 License
This project is licensed under the MIT License.
