export interface Course {
    /** A unique identifier for the course */
    id: string;
    /** The human-friendly title of the course */
    title: string;
    /** Number of credits for the course */
    credits: number;
    /** The current status of the course */
    enrolled: boolean;
}

export interface Semester {
    /** The id of the Semester i.e. Fall 2022 */
    id: string;
    /** An array of the courses and their identifiers */
    courses: Course[];
}

export interface MultSemester {
    /** An array of the courses and their identifiers */
    semesters: Semester[];
}

export interface Plan {
    /** The id of the plan */
    id: number;
    /** An array of the Semesters and their courses */
    years: Semester[][];
}

export interface Buttons {
    buttons: JSX.Element[];
    horizontal: boolean;
}
/*
export interface ButtonData {
    hook: [
        (
            | number
            | string
            | string
            | boolean
            | object
            | JSX.Element
            | number[]
            | string[]
            | boolean[]
            | object[]
            | JSX.Element[]
        ),
        (
            arg:
                | void
                | number
                | string
                | string
                | boolean
                | object
                | JSX.Element
                | number[]
                | string[]
                | boolean[]
                | object[]
                | JSX.Element[]
        ) => void
    ];
    text: string;
}*/
