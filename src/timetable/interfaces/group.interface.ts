import { ILesson } from "./lesson.interface";

export interface IFaculty {
    name: string,
    groups: Array<IGroup>
}

export interface IGroup {
    name: string,
    lessons: Array<ILesson>
}