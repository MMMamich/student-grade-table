class App {
    constructor(gradeTable, pageHeader, gradeForm){
      this.gradeTable = gradeTable;
      this.pageHeader = pageHeader;
      this.gradeForm  = gradeForm;

      this.handleGetGradesError      = this.handleGetGradesError.bind(this);
      this.handleGetGradesSuccess    = this.handleGetGradesSuccess.bind(this);
      this.handleCreateGradesError   = this.handleCreateGradesError.bind(this);
      this.handleCreateGradesSuccess = this.handleCreateGradesSuccess.bind(this);
      this.createGrade               = this.createGrade.bind(this);
    }

    createGrade(name, course, grade){
      $.ajax({
         method: "POST",
         url: 'https://sgt.lfzprototypes.com/api/grades',
         headers: { "X-Access-Token": "EIX4Pjaf"},
         data: {
           "name": name,
           "course": course,
           "grade": grade
         },
         dataType: "json",
         success: grades => this.handleCreateGradesSuccess(grades),
         error: error => this.handleCreateGradesError(error)
      })
    }

    handleCreateGradesError(err){
      console.error(err);
    }

    handleCreateGradesSuccess(){
        this.getGrades();
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
    start(createGrade){
        this.getGrades();
        this.gradeForm.onSubmit(this.createGrade);
    }
}
