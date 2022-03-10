//Student Data Type
//name,
//studentid,
//dob,
//classLevel,
//ExamResultId,
//AttendanceId,

class Student {
    constructor(studentId, firstname, lastname, dob, classLevel,password) {
        this.firstname = firstname,
        this.lastname=lastname,
        this.studentId = studentId,
        this.dob = dob,
        this.classLevel = classLevel,
        this.password=password

    }

}

module.exports = { Student };