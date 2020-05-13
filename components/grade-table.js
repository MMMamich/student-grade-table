class GradeTable {
  constructor(tableElement, noGradesElement){
      this.tableElement    = tableElement;
      this.noGradesElement = noGradesElement;
  }
  updateGrades(grades){
    let updateTableElement = this.tableElement.querySelector('tbody');
    updateTableElement.textContent = "";

    grades.forEach(el => {
        updateTableElement.append(this.renderGradeRow(el, this.deleteGrade));
    })

    // grades ? grades : this.tableElement.querySelector('.d-none').classList.remove('.d-none');

  }
  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade){
    const DELETE = document.createElement('button');
    DELETE.classList.add('btn', 'btn-danger')
    DELETE.textContent = 'DELETE';

    DELETE.addEventListener('click', () => deleteGrade(data.id) );

    const GRADE_ROW  = document.createElement('tr');
    const TD_NAME    = document.createElement('td');
    const TD_COURSE  = document.createElement('td');
    const TD_GRADE   = document.createElement('td');
    const TD_BUTTON  = document.createElement('td');


    GRADE_ROW.append(TD_NAME, TD_COURSE, TD_GRADE, TD_BUTTON);
    TD_NAME.append(data.name);
    TD_COURSE.append(data.course);
    TD_GRADE.append(data.grade);
    TD_BUTTON.append(DELETE);

    return GRADE_ROW;
  }
}
