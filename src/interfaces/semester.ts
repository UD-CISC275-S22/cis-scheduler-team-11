import { Course } from "./course";
export interface Semester {
    /** The id of the Semester i.e. Fall 2022 */
    id: string;
    /** An array of the courses and their identifiers */
    courses: Course[];
}
