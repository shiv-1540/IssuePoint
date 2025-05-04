# 🧾 Virtual Complaint Box

A role-based web application built with **React.js** (Frontend) and **ASP.NET Core (C#)** (Backend) for submitting, tracking, and resolving complaints. The system provides distinct dashboards for Users and Admins, ensuring efficient communication and complaint resolution in institutions and organizations.

---

## 🛠 Tech Stack

| Layer       | Technology            |
|------------|------------------------|
| Frontend   | React.js, Tailwind CSS |
| Backend    | ASP.NET Core (C#)      |
| Database   | MySQL                  |
| Auth       | JWT (JSON Web Token)   |
| Storage    | Local or S3 (optional) |
| Deployment | Vercel (Frontend), Render/Azure (Backend) |

---

## 🚀 Features

### 👤 User Panel
- Register/login with JWT authentication
- Submit new complaints
- View status and admin feedback
- React to complaints (like/dislike)
- View public complaint board

### 🛡️ Admin Panel
- View and filter all complaints
- Change status (Pending, In Progress, Resolved)
- Add feedback to complaints
- Manage users
- Dashboard with analytics (optional)

---

## 📂 Project Structure

```
root/
├── backend/                    # ASP.NET Core backend
│   ├── Controllers/
│   ├── Models/
│   ├── Services/
│   ├── Data/
│   └── Program.cs
├── frontend/                   # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/virtual-complaint-box.git
cd virtual-complaint-box
```

### 2. Backend Setup (ASP.NET Core)
- Go to `/backend`
- Configure MySQL connection string in `appsettings.json`
- Run migrations if needed
- Start server:
```bash
cd backend
dotnet run
```

### 3. Frontend Setup (React)
```bash
cd frontend
npm install
npm run dev
```

---

## 📸 Screenshots

| User Panel | Admin Panel |
|------------|-------------|
| ![User](screenshots/user.png) | ![Admin](screenshots/admin.png) |

---

## 📬 Contact

For any queries or feedback, feel free to connect via [LinkedIn](https://www.linkedin.com/) or open an issue.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
