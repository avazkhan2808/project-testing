import cipher from './caesar';

test('Cipher "zombieeee with 1"', () => {
	expect(cipher('zombieeee', 1)).toBe('apncjffff');
});

test('Check case sensitivity', () => {
	expect(cipher('Hello World', 1)).toBe('Ifmmp Xpsme');
});

test('Check punctuation', () => {
	expect(cipher('Hello, world!', 1)).toBe('Ifmmp, xpsme!');
});
