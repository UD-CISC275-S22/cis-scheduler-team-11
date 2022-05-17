import React from "react";
import { Plan, Semester, Course } from "../interfaces/projectInterfaces";
import { Button } from "react-bootstrap";

const vertBord = [":::", ":::"];

function course2CSV(crs: Course): string[][] {
    return [
        [crs.code, crs.name.replaceAll(",", ";"), vertBord[0]],
        ["Credits:", crs.credits.replaceAll(",", ";"), vertBord[1]],
        ["Prereqs:", crs.preReq.replaceAll(",", ";"), vertBord[0]],
        ["Restrictions:", crs.restrict.replaceAll(",", ";"), vertBord[1]],
        ["Breadth", crs.breadth.replaceAll(",", ";"), vertBord[0]],
        ["Offered", crs.typ.replaceAll(",", ";"), vertBord[1]],
        ["-".repeat(15), "-".repeat(80), "-".repeat(2)]
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

function semester2CSV(sem: Semester, max: number): string[][] {
    let ret = [[sem.id.split(" ")[0], sem.id.split(" ")[1], vertBord[1]]];
    sem.courses.map((crs: Course) => (ret = ret.concat(course2CSV(crs))));
    Array(max - sem.courses.length)
        .fill(1)
        .map(() => (ret = ret.concat(blankCourse)));
    return ret;
}

function findMaxCourses(plan: Plan): number {
    return Math.max(
        ...plan.semesters.flat().map((sem: Semester) => sem.courses.length)
    );
}

function plan2CSV(plan: Plan): string[][] {
    const planSems = plan.semesters.flat();
    const numSem = planSems.length;
    const ret = [
        [
            plan.id.replaceAll(",", ";"),
            plan.start + "",
            ",".repeat(numSem * 2 - 2)
        ]
    ];
    const max = findMaxCourses(plan);
    const semesters = Array(max * 7 + 1).fill([]);
    let i = 0;
    const crsIdxArray = Array(max * 7 + 1)
        .fill(0)
        .map((n: number) => n + i++);
    planSems.map((sem: Semester) => {
        const semArray = semester2CSV(sem, max);
        crsIdxArray.map((idx: number) => {
            semesters[idx] = semesters[idx].concat(semArray[idx]);
        });
    });
    return ret.concat(semesters);
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
