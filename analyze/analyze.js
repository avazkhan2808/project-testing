function analyze(arr) {
	const obj = {};

	obj.average = [...arr].reduce((a, b) => a + b, 0) / arr.length;
	obj.min = Math.min(...arr);
	obj.max = Math.max(...arr);
	obj.length = arr.length;

	return obj;
}

export default analyze;

