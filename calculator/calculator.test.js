import Calculator from './calculator';

test('add 5 to 55', () => {
	expect(Calculator.add(5, 55)).toBe(60);
});

test('multiply 5 by 5', () => {
	expect(Calculator.multiply(5, 5)).toBe(25);
});

test('substract 25 from 123', () => {
	expect(Calculator.substract(123, 25)).toBe(98);
});

test('divide 1 by 2', () => {
	expect(Calculator.divide(1, 2)).toBe(0.5);
});
