package com.noyan.demo.student;

import com.noyan.demo.exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
//import javax.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("students")
public class StudentController {

    private final StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getAllStudents() {
//        throw new ApiRequestException("Oops can't get all students with custom exception");
        return studentService.getAllStudents();
    }

    @GetMapping(path = "{studentId}/courses")
    public List<StudentCourse> getAllCoursesForStudent(@PathVariable("studentId") UUID studentId) {
        return studentService.getAllCoursesForStudent(studentId);
    }

    @PostMapping
    public void addNewStudent(@RequestBody Student student) {
        studentService.addNewStudent(student);
    }
}
