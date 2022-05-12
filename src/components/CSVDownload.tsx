import React from "react";
import { Plan, Semester, Course } from "../interfaces/projectInterfaces";
import { Button } from "react-bootstrap";

function course2CSV(crs: Course): string[][] {
    return [
        [crs.code + ",", crs.name + ","],
        [",", crs.credits + ","],
        [",", crs.preReq + ","],
        [",", crs.restrict + ","],
        [",", crs.breadth + ","],
        [",", crs.typ + ","]
    ];
}

const blankCourse = [
    [",", ","],
    [",", ","],
    [",", ","],
    [",", ","],
    [",", ","],
    [",", ","]
];

function semester2CSV(sem: Semester, max: number): string[][] {
    const ret = [[sem.id + ",", ","]].concat(
        sem.courses.map((crs: Course) => course2CSV(crs).flat())
    );
    Array(max - sem.courses.length)
        .fill(1)
        .map(() => ret.concat(blankCourse));
    return [[sem.id + ",", ","]].concat(
        sem.courses.map((crs: Course) => course2CSV(crs).flat())
    );
}

function findMaxCourses(plan: Plan): number {
    return Math.max(
        ...plan.semesters.flat().map((sem: Semester) => sem.courses.length)
    );
}

function plan2CSV(plan: Plan): string[][] {
    const planSems = plan.semesters.flat();
    const numSem = planSems.length;
    const ret = [[plan.id + ",", plan.start + ",", ",".repeat(numSem * 2 - 2)]];
    const max = findMaxCourses(plan);
    const semesters = Array(semester2CSV(planSems[0], max).length).fill([]);
    let i = 0;
    const crsIdxArray = Array(max)
        .fill(0)
        .map((n: number) => n + i++);
    planSems.map((sem: Semester) => {
        const semArray = semester2CSV(sem, max);
        crsIdxArray.map(
            (idx: number) =>
                (semesters[idx] = semesters[idx].concat(semArray[idx]))
        );
    });
    return ret.concat(semesters);
}

function planList2CSV(plans: Plan[]): string {
    const ret = [];
    plans.map((plan: Plan) => ret.concat(plan2CSV(plan)));
    return ret.join("\n");
}

export function CSVDownload({ plans }: { plans: Plan[] }): JSX.Element {
    const csvContent = "data:text/csv;charset=utf-8," + planList2CSV(plans);
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF
    return <Button onClick={() => link.click()}> Download your Plans!</Button>;
}
