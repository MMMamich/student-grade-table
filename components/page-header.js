class PageHeader {
  constructor(headerElement){
    this.headerElement = headerElement;
  }
  updateAverage(newAverage){
    this.headerElement = document.querySelector('.grade');
    this.headerElement.append(newAverage);
  }
}
