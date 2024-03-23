const Person = require("./Person.js");

describe("Person", () => {
  test("can get full name", () => {
    const person = new Person("Nick", "Derevjanik", 1982);
    expect(person.getFullName()).toBe("Derevjanik, Nick");
  });

  test("can get age", () => {
    const person = new Person("Nick", "Derevjanik", 1982);
    expect(person.getAge()).toBe(42);
  });
});
