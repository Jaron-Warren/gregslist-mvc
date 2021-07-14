export default class Job {
  /**
   * A new job posting
   * @param {string} title 
   * @param {string} company 
   * @param {boolean} remote 
   * @param {number} salary 
   * @param {string} jobtype 
   * @param {string} location 
   */
  constructor(title, company, remote, salary, jobtype, location) {

    this.title = title
    this.company = company
    this.remote = remote
    this.salary = salary
    this.jobtype = jobtype
    this.location = location
  }
}