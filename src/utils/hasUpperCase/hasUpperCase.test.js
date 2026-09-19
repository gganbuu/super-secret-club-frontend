import { hasUpperCase } from "./hasUpperCase"

describe("testing hasUpperCase", () => {
    test("testing 'dog' false", () => {
        expect(hasUpperCase('dog')).toBeFalsy()
    })
    test("testing 'Dog' true", () => {
        expect(hasUpperCase('Dog')).toBeTruthy()
    })
})