import React from "react";
import { render, screen } from "@testing-library/react";
import { ClassPicker } from "./ClassPicker";
import { Semester } from "../interfaces/projectInterfaces";

// describe("ClassPicker tests", () => {
//     beforeEach(() => {
//         render(<ClassPicker />);
//     });
//     test("There is a Add Course Button", () => {
//         const addCourseButton = screen.getByRole("button", {
//             name: /Add Course/i
//         });
//         expect(addCourseButton).toBeInTheDocument();
//     });
//     /* test("There is an Edit Button", () => {
//         const editButton = screen.getByRole("button", {
//             name: /edit/i
//         });
//         expect(editButton).toBeInTheDocument();
//     }); */
//     test("There is an Clear Courses Button", () => {
//         const editButton = screen.getByRole("button", {
//             name: /clear courses/i
//         });
//         expect(editButton).toBeInTheDocument();
//     });
//     /* test("There is a Delete Button", () => {
//         const editButton = screen.getByRole("button", {
//             name: /delete/i
//         });
//         expect(editButton).toBeInTheDocument();
//     }); */
//     test("Add Courses Title is Present", () => {
//         const linkElement = screen.getByText(/Add Course/i);
//         expect(linkElement).toBeInTheDocument();
//     });
//     test("Select Course is Present", () => {
//         const linkElement = screen.getByText(/Select Course/i);
//         expect(linkElement).toBeInTheDocument();
//     });
//     test("Course list area is Present", () => {
//         const linkElement = screen.getByText(/Courses:/i);
//         expect(linkElement).toBeInTheDocument();
//     });
//     test("Course form label is present", () => {
//         const linkElement = screen.getByLabelText(/course/i);
//         expect(linkElement).toBeInTheDocument();
//     });
// });
