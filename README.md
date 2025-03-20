# Employee Management System

## **Project Overview**
This is a full-stack web application for managing employees, departments, and projects. It consists of two backend APIs (**ASP.NET Core** & **Spring Boot**) and two frontend applications (**Angular** & **React**).

---
## **Project Structure**
```
/EmployeeManagementSystem
  ├── backend-dotnet/        # ASP.NET Core Web API (Employees)
  ├── backend-springboot/    # Spring Boot API (Departments)
  ├── frontend-angular/      # Angular UI (Employees & Departments)
  ├── frontend-react/        # React UI (Projects & Employee-Projects)
```

---
## **Tech Stack Used**

### **Backend**
- **ASP.NET Core Web API** (C#) - Employee Management
- **Spring Boot REST API** (Java) - Department Management
- **MSSQL Server** - Employee Database
- **MySQL** - Department Database

### **Frontend**
- **Angular** (TypeScript) - Employee & Department UI
- **React** (JavaScript) - Project & Employee-Project UI
- **Bootstrap & Tailwind CSS** - Styling

### **Other Tools**
- **Entity Framework Core** - ORM for .NET
- **Spring Data JPA** - ORM for Java
- **Postman** - API testing
- **Swagger UI** - API Documentation
- **Docker** - Deployment (Optional)
- **Git & GitHub** - Version control

---
## **Setup Guide**
### **1. Prerequisites**
#### Install Required Software:
| Tool | Purpose | Download |
|------|---------|----------|
| **Visual Studio 2022** | Develop ASP.NET Core API | [Download](https://visualstudio.microsoft.com/) |
| **SQL Server & SSMS** | Employee Database | [Download](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) |
| **IntelliJ IDEA / Eclipse** | Develop Spring Boot API | [Download IntelliJ](https://www.jetbrains.com/idea/) |
| **MySQL & Workbench** | Department Database | [Download](https://dev.mysql.com/downloads/installer/) |
| **Node.js & npm** | Required for Angular & React | [Download](https://nodejs.org/) |
| **Visual Studio Code** | Code editor for frontend | [Download](https://code.visualstudio.com/) |
| **Postman** | API testing | [Download](https://www.postman.com/) |
| **Git & GitHub** | Version Control | [Download](https://git-scm.com/) |

### **2. Backend Setup**
#### **ASP.NET Core API (Employees)**
1. Open **Visual Studio** and clone the `backend-dotnet` repository.
2. Install dependencies:
   ```sh
   dotnet restore
   ```
3. Configure **SQL Server** in `appsettings.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=localhost;Database=EmployeeDB;User Id=sa;Password=YourPassword;TrustServerCertificate=True;"
   }
   ```
4. Run database migrations:
   ```sh
   dotnet ef migrations add InitialCreate
   dotnet ef database update
   ```
5. Start the API:
   ```sh
   dotnet run
   ```
6. Open [http://localhost:5000/swagger](http://localhost:5000/swagger) to view the API documentation.

#### **Spring Boot API (Departments)**
1. Open **IntelliJ IDEA** and clone the `backend-springboot` repository.
2. Configure `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/DepartmentDB
   spring.datasource.username=root
   spring.datasource.password=YourPassword
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Start the Spring Boot server:
   ```sh
   mvn spring-boot:run
   ```
4. Open [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html) to view API documentation.

---
## **Frontend Setup**
#### **Angular Frontend (Employees & Departments)**
1. Open **VS Code** and clone the `frontend-angular` repository.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Angular application:
   ```sh
   ng serve --open
   ```
4. Open `http://localhost:4200/` in a browser.

#### **React Frontend (Projects & Employee-Projects)**
1. Open **VS Code** and clone the `frontend-react` repository.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React application:
   ```sh
   npm start
   ```
4. Open `http://localhost:3000/` in a browser.

---
## **Testing APIs**
Use **Postman** to test API endpoints:
- **Employees API (ASP.NET Core)** → `http://localhost:5000/api/employees`
- **Departments API (Spring Boot)** → `http://localhost:8080/api/departments`

---
## **GitHub Repository Structure**
Each backend and frontend should have its own folder:
```
/EmployeeManagementSystem
  ├── backend-dotnet/ (ASP.NET Core API)
  ├── backend-springboot/ (Spring Boot API)
  ├── frontend-angular/ (Angular UI)
  ├── frontend-react/ (React UI)
```
---
## **Author**
**Koshala Kavikeshwera**  
[GitHub Profile](https://github.com/kavikeshwera)
