import analyze from './analyze';

test('[5, 10, 15]', () => {
	expect(analyze([5, 10, 15])).toStrictEqual({
		average: 10,
		min: 5,
		max: 15,
		length: 3,
	});
});
