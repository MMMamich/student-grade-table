const TABLE       = document.querySelector('table');
const GRADE_TABLE = new GradeTable(TABLE);

const GRADES = new App(GRADE_TABLE);
GRADES.start();
