import { Semester } from "./Semester";
export interface Plan {
    /** The id of the plan */
    id: number;
    /** An array of the Semesters and their courses */
    semesters: Semester[];
}
