import { Parser } from "./parser/Parser"
import { Timetable } from "./timetable/timetable"

export {
    Parser,

}

const tt = new Timetable()
let test: any = tt.getFacultyByName("Радиоконструкторский факультет")
console.log(test)