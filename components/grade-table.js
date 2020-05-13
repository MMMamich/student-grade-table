class GradeTable {
  constructor(tableElement){
      this.tableElement = tableElement;
  }
  updateGrades(grades){
    let updateTableElement = this.tableElement.querySelector('tbody');
    updateTableElement.textContent = "";

    for(let i=0; i < grades.length; i++) {
      const tr   = document.createElement('tr');

      const tdName        = document.createElement('td');
      const tdCourse      = document.createElement('td');
      const tdGrade       = document.createElement('td');

      tdName.textContent        = grades[i].name;
      tdCourse.textContent      = grades[i].course;
      tdGrade.textContent       = grades[i].grade;

      tr.append(tdName, tdCourse, tdGrade);

      updateTableElement.append(tr);
    }
  }

  renderGradeRow(data,deleteGrade){
      console.log(data.id);
      deleteGrade();
      //<button type="button" class="btn btn-danger">DELETE</button>
  }

  onDeleteClick(deleteGrade){
      this.deleteGrade = deleteGrade;
  }

}
