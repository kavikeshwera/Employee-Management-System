-- Create the database
CREATE DATABASE DepartmentDB;
USE DepartmentDB;

-- Create Department table
CREATE TABLE Departments (
    DepartmentId INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    Location VARCHAR(255) NOT NULL
);

-- Create Project table
CREATE TABLE Projects (
    ProjectId INT PRIMARY KEY AUTO_INCREMENT,
    ProjectName VARCHAR(255) NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL
);

-- Create Employee_Project Join Table
CREATE TABLE Employee_Project (
    EmployeeId INT NOT NULL,
    ProjectId INT NOT NULL,
    PRIMARY KEY (EmployeeId, ProjectId)
);

-- Insert Sample Data
INSERT INTO Departments (Name, Location) VALUES ('Finance', 'California'), ('Engineering', 'Berlin');
INSERT INTO Projects (ProjectName, StartDate, EndDate) 
VALUES ('Website Development', '2024-01-01', '2024-06-30'),
       ('Mobile App', '2024-03-01', '2024-09-30');
