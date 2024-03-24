import Person from "./Person.js";
import assert from "node:assert/strict";

describe("Person", () => {
  it("can get full name", () => {
    const person = new Person("Nick", "Derevjanik", 1982);
    assert.equal(person.getFullName(), "Derevjanik, Nick");
  });

  it("can get age", () => {
    const person = new Person("Nick", "Derevjanik", 1982);
    assert.equal(person.getAge(), 42);
  });
});
