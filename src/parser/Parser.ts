
import http from "https";
import { resolve } from "path";
import fs from 'fs'
import schedule from 'node-schedule';


export class Parser {

    private static url: string = "https://timetable.tusur.ru/api/v2/raspisanie_vuzov";

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

    public static async start(_hour: number) {
        var rule = new schedule.RecurrenceRule();
        rule.hour = _hour
        schedule.scheduleJob(rule, async function () {

            await http.get(Parser.url, (res: any) => {
                let body: string = ""
                res.setEncoding("utf8");
                res.on("data", (data: string) => {
                    body += data
                });

                res.on("end", () => {
                    fs.writeFile('./dist/parser/tusur.json', body, (err: Error | null) => {
                        if (err) throw err;
                        console.log("Timetable parsed at", _hour + ":00")
                    })
                })
            })

        })
    }

}