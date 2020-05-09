class GradeTable {
  constructor(tableElement){
      this.tableElement = tableElement;
  }
  updateGrades(grades){
    let updateTableElement = this.tableElement.querySelector('tbody');
    updateTableElement.textContent = "";

    for(let i=0; i < grades.length; i++) {
      let tr   = document.createElement('tr');

      let tdName   = document.createElement('td');
      let tdCourse = document.createElement('td');
      let tdGrade  = document.createElement('td');

      tdName.textContent   = grades[i].name;
      tdCourse.textContent = grades[i].course;
      tdGrade.textContent  = grades[i].grade;

      tr.append(tdName, tdCourse, tdGrade);

      updateTableElement.append(tr);
    }
  }
}
