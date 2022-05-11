import { MouseEventHandler } from "react";

export interface Course {
    /** A unique identifier for the course */
    code: string;
    /** The human-friendly title of the course */
    name: string;
    /** Number of credits for the course */
    descr: string;
    /** The current status of the course */
    credits: string;
    preReq: string;
    restrict: string;
    breadth: string;
    typ: string;
    uid: number;
}

export interface Semester {
    /** The id of the Semester i.e. Fall 2022 */
    id: string;
    /** An array of the courses and their identifiers */
    courses: Course[];
}

export interface Plan {
    start: number;
    /** The id of the plan */
    id: string;
    /** An array of the Semesters and their courses */
    semesters: Semester[][];
}

export interface Plan {
    start: number;
    /** The id of the plan */
    id: string;
    /** An array of the Semesters and their courses */
    semesters: Semester[][];
}

export interface Buttons {
    buttons: ButtonProps[];
    horizontal: boolean;
}

export interface Plans {
    plans: Plan[];
}

export interface ButtonProps {
    variant?: string;
    size?: "sm" | "lg" | undefined;
    text: string;
    click: MouseEventHandler<HTMLButtonElement>;
}
