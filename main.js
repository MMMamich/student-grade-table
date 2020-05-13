const NO_GRADES   = document.querySelector('.no-grades');

const FORM        = document.querySelector('form');
const PAGE_FORM   = new GradeForm(FORM);

const HEADER      = document.querySelector('.grade');
const PAGE_HEADER = new PageHeader(HEADER);

const TABLE       = document.querySelector('table');
const PAGE_TABLE  = new GradeTable(TABLE, NO_GRADES);

const GRADES = new App(PAGE_TABLE, PAGE_HEADER, PAGE_FORM);
GRADES.start();
