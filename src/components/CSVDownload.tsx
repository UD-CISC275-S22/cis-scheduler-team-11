import React from "react";
import { Plan, Semester, Course } from "../interfaces/projectInterfaces";
import { Button } from "react-bootstrap";

const vertBord = [":::", ":::"];
const horzBord = "_";
const yearBord = "~";

function course2CSV(crs: Course): string[][] {
    return [
        [crs.code, crs.name.replaceAll(",", ";"), vertBord[0]],
        ["Credits:", crs.credits.replaceAll(",", ";"), vertBord[1]],
        ["Prereqs:", crs.preReq.replaceAll(",", ";"), vertBord[0]],
        ["Restrictions:", crs.restrict.replaceAll(",", ";"), vertBord[1]],
        ["Breadth", crs.breadth.replaceAll(",", ";"), vertBord[0]],
        ["Offered", crs.typ.replaceAll(",", ";"), vertBord[1]],
        [horzBord.repeat(15), horzBord.repeat(80), horzBord.repeat(2)]
    ];
}

const blankCourse = [
    [",", ""],
    [",", ""],
    [",", ""],
    [",", ""],
    [",", ""],
    [",", ""],
    [",", ""]
];

const len = blankCourse.length;

function semester2CSV(sem: Semester, max: number): string[][] {
    let ret = [[sem.id.split(" ")[0], "", vertBord[1]]];
    sem.courses.map((crs: Course) => (ret = ret.concat(course2CSV(crs))));
    Array(max - sem.courses.length)
        .fill(1)
        .map(() => (ret = ret.concat(blankCourse)));
    return ret.concat([
        [yearBord.repeat(15), yearBord.repeat(80), yearBord.repeat(2)]
    ]);
}

function findMaxCourses(year: Semester[]): number {
    return Math.max(...year.map((sem: Semester) => sem.courses.length));
}

function year2CSV(year: Semester[], max: number): string[][] {
    let ret = [[year[0].id.split(" ")[1], "", vertBord[1]]];
    const extras = 2;
    const courses = Array(max * len + extras).fill([]);
    let i = 0;
    const crsIdxArray = Array(max * len + extras)
        .fill(0)
        .map((n: number) => n + i++);
    year.map((sem: Semester) => {
        const crsArray = semester2CSV(sem, max);
        crsIdxArray.map((idx: number) => {
            courses[idx] = courses[idx].concat(crsArray[idx]);
        });
    });
    ret = ret.concat(courses);
    return ret;
}

function plan2CSV(plan: Plan): string[][] {
    let ret = [
        [plan.id.replaceAll(",", ";"), plan.start + "", ",".repeat(4 * 2 - 2)]
    ];
    plan.semesters.map((year: Semester[]) => {
        const max = findMaxCourses(year);
        const extras = 3;
        const semesters = Array(max * len + extras).fill([]);
        let i = 0;
        const semIdxArray = Array(max * len + extras)
            .fill(0)
            .map((n: number) => n + i++);
        const semArray = year2CSV(year, max);
        semIdxArray.map((idx: number) => {
            semesters[idx] = semesters[idx].concat(semArray[idx]);
        });
        ret = ret.concat(semesters);
    });
    return ret;
}

function click(plan: Plan) {
    const csvContent =
        "data:text/csv;charset=utf-8," + plan2CSV(plan).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
        "download",
        "my_plan_" + plan.id.replace(" ", "_") + ".csv"
    );
    document.body.appendChild(link); // Required for FF
    link.click();
}
export function CSVDownload({ plan }: { plan: Plan }): JSX.Element {
    if (plan.id != "Plan Name") {
        if (plan.semesters.flat().length > 0) {
            if (
                Math.max(
                    ...plan.semesters
                        .flat()
                        .map((sem: Semester) => sem.courses.length)
                )
            ) {
                return (
                    <Button
                        style={{
                            backgroundColor: "#fbdb32",
                            color: "black",
                            border: "2px solid white"
                        }}
                        onClick={() => click(plan)}
                    >
                        {" "}
                        Download your Plan!
                    </Button>
                );
            } else {
                return (
                    <span>
                        You do not have enough courses to download your plan
                    </span>
                );
            }
        } else {
            return (
                <span>
                    You do not have enough semesters to download your plan
                </span>
            );
        }
    } else {
        return <span>You need to make a plan before you can download it</span>;
    }
}
