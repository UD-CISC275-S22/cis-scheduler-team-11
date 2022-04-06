export interface Course {
    /** A unique identifier for the course */
    id: string;
    /** The human-friendly title of the course */
    title: string;
    /** Number of credits for the course */
    credits: number;
    /** The current status of the course */
    status: string;
}
