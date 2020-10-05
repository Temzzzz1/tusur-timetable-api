
interface INoteByDate {
    date: string,
    note: string
}

interface ITeacher {
    name: string,
}

interface IAudience {
    name: string,
    addr: string,
    lonlat: string
}

export interface ILesson {
    subject: string,
    type: string,
    time: {
        start: string,
        end: string
    }
    date: string,
    note_by_date: Array<INoteByDate>,
    audiences: Array<IAudience>,
    teachers: Array<ITeacher>
}