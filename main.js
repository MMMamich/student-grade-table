const HEADER      = document.querySelector('.grade');
const PAGE_HEADER = new PageHeader(HEADER);

const TABLE       = document.querySelector('table');
const GRADE_TABLE = new GradeTable(TABLE);

const GRADES = new App(GRADE_TABLE, PAGE_HEADER);
GRADES.start();
