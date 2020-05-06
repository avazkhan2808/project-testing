import capitalize from './capitalize';

test('Capitalize hello world', () => {
	expect(capitalize('hello world')).toBe('Hello world');
});

test('test empty string', () => {
	expect(capitalize('')).toBe('');
});

test('test types other than string', () => {
	expect(capitalize({})).toBe('');
});
