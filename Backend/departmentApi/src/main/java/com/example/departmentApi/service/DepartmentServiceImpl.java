package com.example.departmentApi.service;

import com.example.departmentApi.entity.Department;
import com.example.departmentApi.exception.ResourceNotFoundException;
import com.example.departmentApi.repository.DepartmentRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentRepository departmentRepository;

    public DepartmentServiceImpl(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @Override
    public Department createDepartment(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    @Override
    public Department getDepartmentById(Long id) {
        return departmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + id));
    }

    @Override
    public Department updateDepartment(Long id, Department department) {
        Department existingDepartment = getDepartmentById(id);
        existingDepartment.setName(department.getName());
        existingDepartment.setLocation(department.getLocation());
        return departmentRepository.save(existingDepartment);
    }

    @Override
    public void deleteDepartment(Long id) {
        Department department = getDepartmentById(id);
        departmentRepository.delete(department);
    }
}
