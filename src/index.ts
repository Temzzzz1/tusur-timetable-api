import { Exception } from "./exceptions/Exception";
import { Parser } from "./parser/Parser"
import { Timetable } from "./timetable/timetable"

export {
    Parser,
    Timetable
}

const tt = new Timetable()

Parser.start(1);

tt.getByGroudId("429-1")