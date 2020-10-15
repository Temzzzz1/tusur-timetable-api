import http from "https";
import fs from 'fs'
import schedule from 'node-schedule';

export class Parser {

    private static url: string = "https://timetable.tusur.ru/api/v2/raspisanie_vuzov";


    /**
     * Parse timetable
     * 
     */
    public static async parseTable(): Promise<void> {

        await http.get(Parser.url, (res: any) => {
            let body: string = ""
            res.setEncoding("utf8");
            res.on("data", (data: string) => {
                body += data
            });

            res.on("end", () => {
                fs.writeFile('./dist/parser/tusur.json', body, (err: Error | null) => {
                    if (err) throw err;
                })
            })
        })
    }

    /**
     * Start parsing timetable every day
     * @param _hour hour of the day (0 - 23)
     */

    public static async start(_hour: number): Promise<void> {

        if (_hour < 0 || _hour > 23) return
        var rule = new schedule.RecurrenceRule();
        rule.hour = _hour
        schedule.scheduleJob(rule, async function () {
            try {
                Parser.parseTable()
                console.log("Timetable parsed at", _hour + ":00")
            } catch (err) {
                throw err;
            }
        })
    }

}
