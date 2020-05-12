class GradeForm {
    constructor(formElement){
        this.formElement  = formElement;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formElement.addEventListener('submit', this.handleSubmit);
    }
    onSubmit(createGrade){
        this.createGrade = createGrade;
    }
    handleSubmit(event){
      event.preventDefault();
      const FORM_INFO = new FormData(event.target);

      const FORM_NAME   = FORM_INFO.get("name");
      const FORM_COURSE = FORM_INFO.get("course");
      const FORM_GRADE  = FORM_INFO.get("grade");

      this.createGrade(FORM_NAME, FORM_COURSE, FORM_GRADE);

      event.target.reset();
    }
}
