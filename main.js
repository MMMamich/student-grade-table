class App {
    constructor(gradeTable, pageHeader){
      this.gradeTable = gradeTable;
      this.pageHeader = pageHeader;

      this.handleGetGradesError   = this.handleGetGradesError.bind(this);
      this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    }

    handleGetGradesError(err){
      console.error(err);
    }
    handleGetGradesSuccess(grades){
      this.gradeTable.updateGrades(grades);
      this.pageHeader.updateAverage(Math.floor((grades[0].grade) + (grades[1].grade) + (grades[2].grade)) / 3)
    }
    getGrades(){
        $.ajax({
           method: "GET",
           url: 'https://sgt.lfzprototypes.com/api/grades',
           headers: { "X-Access-Token": "EIX4Pjaf"},
           success: grades => this.handleGetGradesSuccess(grades),
           error: error => this.handleGetGradesError(error)
        })
    }
    start(){
        this.getGrades();
    }
}
