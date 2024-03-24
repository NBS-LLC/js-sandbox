/**
 * Represents a person.
 * @class
 */
class Person {
  /**
   * @param {string} firstName
   * @param {string} lastName
   * @param {number} birthYear
   */
  constructor(firstName, lastName, birthYear) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  /**
   * Gets the full name of the person.
   * @returns {string}
   */
  getFullName() {
    return this._lastName + ", " + this._firstName;
  }

  /**
   * Returns the age of the person.
   * @return {number}
   */
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this._birthYear;
  }
}

export default Person;
