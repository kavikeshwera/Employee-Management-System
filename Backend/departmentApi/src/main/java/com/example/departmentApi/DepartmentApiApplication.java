package com.example.departmentApi;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@OpenAPIDefinition(
    info = @Info(
        title = "Department API",
        version = "1.0",
        description = "API documentation for Department Management System"
    )
)
@SpringBootApplication
public class DepartmentApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(DepartmentApiApplication.class, args);
	}

}
