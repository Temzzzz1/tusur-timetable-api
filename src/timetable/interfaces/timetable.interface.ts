import { IFaculty } from "./group.interface";


export interface ITimetable {
    name: string,
    abbr: string,
    faculties: Array<IFaculty>
    
}