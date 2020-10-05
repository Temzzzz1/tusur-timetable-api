import fs from 'fs'

import { IFaculty, IGroup } from "./interfaces/group.interface";
import { ITimetable } from "./interfaces/timetable.interface";
import { Exception } from "../exceptions/Exception";


export class Timetable {

    /**
     * Get a timetable by group ID
     * @param _group name of the group
     * @return JSON object
     */
    public getByGroupId(_group: string) {
        try {
            let data: string = fs.readFileSync("./dist/parser/tusur.json", "utf8")
            let table: ITimetable = JSON.parse(data)

            let faculty: IFaculty | undefined = table.faculties.find(faculty => {
                return faculty.groups.find(Group => Group.name == _group)
            })
            if (faculty) 
                return faculty.groups.find(Group => Group.name == _group)
            else throw Exception.GroupException(_group)
        } catch (err){
            if (err.code == "ENOENT")
                console.error(`TUSUR Timetable doesn't exist. You should use Parser.parseTable() or Parser.start() for everyday table parsing`)
            if (err.code == 'GE')
                console.error(err.message)
        }
    }

     /**
     * Get a timetable by faculty name
     * @param _group name of the faculty
     * @return JSON object
     */
    public getFacultyByName(_name: string) {
        try {
            let data: string = fs.readFileSync("./dist/parser/tusur.json", "utf8")
            let table: ITimetable = JSON.parse(data)

            let faculty: IFaculty | undefined = table.faculties.find(faculty => faculty.name == _name)
            if (faculty) 
                return faculty
            else throw Exception.FacultyException(_name)
        } catch (err){
            if (err.code == "ENOENT")
                console.error(`TUSUR Timetable doesn't exist. You should use Parser.parseTable() or Parser.start() for everyday table parsing`)
            if (err.code == 'FE')
                console.error(err.message)
        }
    }



}