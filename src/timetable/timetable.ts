import { IFaculty, IGroup } from "./interfaces/group.interface";
import fs from 'fs'
import { ITimetable } from "./interfaces/timetable.interface";
import { Exception } from "../exceptions/Exception";


export class Timetable {

    public getByGroudId(_group: string) {
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