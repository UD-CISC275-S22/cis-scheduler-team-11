/*export interface CourseOLD {
    /** A unique identifier for the course */ /*
    id: string;
    /** The human-friendly title of the course */ /*
    title: string;
    /** Number of credits for the course */ /*
    credits: number;
    /** The current status of the course */ /*
    enrolled: boolean;
}*/

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
    buttons: JSX.Element[];
    horizontal: boolean;
}

export interface Plans {
    plans: Plan[];
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
