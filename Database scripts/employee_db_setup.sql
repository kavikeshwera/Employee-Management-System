-- Create the database
CREATE DATABASE EmployeeDB;
GO

USE EmployeeDB;
GO

-- Create Employee table
CREATE TABLE Employees (
    EmployeeId INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Email NVARCHAR(255) NOT NULL UNIQUE,
    Salary DECIMAL(10,2) NOT NULL,
    DepartmentId INT NULL
);
GO

-- Create Department table
CREATE TABLE Departments (
    DepartmentId INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL
);
GO

-- Add Foreign Key Constraint
ALTER TABLE Employees
ADD CONSTRAINT FK_Employee_Department FOREIGN KEY (DepartmentId)
REFERENCES Departments(DepartmentId) ON DELETE SET NULL;
GO

-- Insert Sample Data
INSERT INTO Departments (Name) VALUES ('IT'), ('HR');
INSERT INTO Employees (Name, Email, Salary, DepartmentId) 
VALUES ('John Doe', 'john.doe@example.com', 60000.00, 1),
       ('Jane Smith', 'jane.smith@example.com', 75000.00, 2);
GO
