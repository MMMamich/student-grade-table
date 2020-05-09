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

      let gradeSum = 0;
      for(let i=0; i<grades.length; i++) {
          gradeSum += grades[i].grade;
      }
      const GRADE_AVG =  gradeSum / grades.length;

      this.pageHeader.updateAverage(GRADE_AVG);
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
