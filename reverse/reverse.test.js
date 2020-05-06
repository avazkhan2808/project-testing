import reverse from './reverse';

test('Hello', () => {
	expect(reverse('Hello')).toBe('olleH');
});

test('How are you doing?', () => {
	expect(reverse('How are you doing?')).toBe('?gniod uoy era woH');
});
