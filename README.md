# Chat App - Backend (Strapi)

This is the backend of the **Chat App**, built using **Strapi**. It provides APIs for user authentication, real-time messaging, and data storage. The backend is connected to a **PostgreSQL** database and deployed on **Render**.

## 🌐 Deployed Backend URL
[https://chatingapp-frontend.onrender.com](https://chatingapp-frontend.onrender.com)

Deployed Application URL


## 🚀 Frontend Repository
[Chat App - Frontend GitHub Repository](https://github.com/Hirenachhaada/chatingapp-frontend)

## 📅 Deployment Date
Deployed on **February 15, 2025**.

## ⚠️ PostgreSQL Database Limitation on Render
Render offers only **2 days of free PostgreSQL database** usage. After this period, the database may **stop working**, affecting backend functionality. You may need to switch to another database provider or upgrade your Render plan.

## 🛠️ Tech Stack
- **Strapi** (Headless CMS)
- **PostgreSQL** (Database)
- **WebSockets** (for real-time communication)
- **Render** (Hosting platform)

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chatingapp-backend.git
   cd chatingapp-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:
   ```env
   DATABASE_CLIENT=postgres
   DATABASE_HOST=your_database_host
   DATABASE_PORT=5432
   DATABASE_NAME=your_database_name
   DATABASE_USERNAME=your_database_username
   DATABASE_PASSWORD=your_database_password
   DATABASE_URL=your_render_database_url
   ```
   
4. Start the Strapi backend:
   ```bash
   npm run develop
   ```

## 📌 API Endpoints
- **User Authentication**: `/auth/local` (Login), `/auth/local/register` (Signup)
- **Messaging**: `/messages`
- **User Management**: `/users`

## 📞 WebSocket Integration
The backend supports **WebSockets** for real-time messaging, ensuring smooth chat interactions.

---

🔹 Feel free to contribute or report any issues! 🚀
```
