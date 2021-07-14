export default class House {
  /**
   * A new house posting
   * @param {number} year 
   * @param {number} sqfeet 
   * @param {number} lotsize 
   * @param {*} utilities 
   * @param {boolean} permenantfoundation 
   * @param {number} price 
   */
  constructor(year, sqfeet, lotsize, utilities, permenantfoundation, price) {
    this.year = year
    this.sqfeet = sqfeet
    this.lotsize = lotsize
    this.utilities = utilities
    this.permenantfoundation = permenantfoundation
    this.price = price
  }
}