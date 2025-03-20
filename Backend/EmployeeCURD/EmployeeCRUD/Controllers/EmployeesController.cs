using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmployeeCRUD.Data;
using EmployeeCRUD.Models;

namespace EmployeeCRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private EmployeeContext context;

        public EmployeeController(EmployeeContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var employees = context.Employees.ToList();
            return Ok(employees);
        }

        [HttpGet("id")]
        public IActionResult Get(int id)
        {
            var employee = context.Employees.Find(id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        [HttpPost]
        public IActionResult Post(Employee employee)
        {
            context.Employees.Add(employee);
            context.SaveChanges();
            return StatusCode(StatusCodes.Status201Created);
        }

        [HttpPut("id")]
        public IActionResult Put(int id, Employee employee)
        {
            var emp = context.Employees.Find(id);
            if (emp == null)
            {
                return NotFound();
            }
            emp.Name = employee.Name;
            emp.Email = employee.Email;
            emp.Department = employee.Department;
            context.SaveChanges();
            return Ok(emp);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var employee = context.Employees.Find(id);
            if (employee == null)
            {
                return NotFound();
            }
            context.Employees.Remove(employee);
            context.SaveChanges();
            return Ok();
        }
    }
}