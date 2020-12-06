package com.noyan.demo.student;

import com.fasterxml.jackson.annotation.JsonProperty;

//import javax.validation.constraints.NotBlank;
//import javax.validation.constraints.NotNull;

import java.util.UUID;

public class Student {

    private final UUID studentId;
    private final String firstName;
    private final String lastName;
    private final String email;
    private final Gender gender;

    public Student(
            @JsonProperty("studentId") UUID studentId,

//            @NotBlank
            @JsonProperty("firstName") String firstName,

//            @NotBlank
            @JsonProperty("lastName") String lastName,

//            @NotBlank
            @JsonProperty("email") String email,

//            @NotNull
            @JsonProperty("gender") Gender gender
    ) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
    }

    public UUID getStudentId() {
        return studentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public Gender getGender() {
        return gender;
    }

    @Override
    public String toString() {
        return "Student{" +
                "studentId=" + studentId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", gender=" + gender +
                '}';
    }

    enum Gender {
        MALE, FEMALE
    }
}
