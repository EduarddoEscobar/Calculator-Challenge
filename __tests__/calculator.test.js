const calculator = require('../index');

describe("Calculator Tests", () => {
    describe("Addition works", () => {
        test("2 plus 2 equals 4", () => {
            expect(calculator.add(2, 2)).toBe(4);
        })

        test("2 plus 2 does not equal 5", () => {
            expect(calculator.add(2, 2)).not.toBe(5);
        })
    })

    describe("Subtraction works", () => {
        test("2 minus 2 equals 0", () => {
            expect(calculator.subtract(2, 2)).toBe(0);
        })

        test("3 minus 5 equals -2", () => {
            expect(calculator.subtract(3, 5)).toBe(-2);
        })
    })

    describe("Multiplication works", () => {
        test("5 times 5 equals 25", () => {
            expect(calculator.multiply(5, 5)).toBe(25);
        })

        test("5 times 0 equals 0", () => {
            expect(calculator.multiply(5, 0)).toBe(0);
        })
    })

    describe("Division works", () => {
        test("5 divide 5 equals 1", () => {
            expect(calculator.divide(5, 5)).toBe(1);
        })

        test("25 divide 2 equals 12.5", () => {
            expect(calculator.divide(25, 2)).toBe(12.5);
        })

        test("5 times 0 equals 0", () => {
            expect(calculator.divide(5, 0)).toBe(0);
        })
    })

    describe("MathGod Obtained", () => {
        test("Are you god?", () => {
            expect(calculator.mathGod("8 * 4 / 2 + 6 - 3")).toBe(19);
        })
    })
})