
export class Exception {

    public static GroupException(group: string): Object {
        return {
            code: 'GE',
            name: "GroupError",
            message: `getByGroudId(): group ${group} not found`
        }
    }

    public static FacultyException(name: string): Object {
        return {
            code: 'FE',
            name: "FacultyException",
            message: `getFacultyByName(): faculty ${name} not found`
        }
    }
}