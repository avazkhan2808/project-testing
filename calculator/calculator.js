const Calculator = (() => {
	const add = (a, b) => {
		return Number(a) + Number(b);
	};
	const substract = (a, b) => {
		return Number(a) - Number(b);
	};
	const multiply = (a, b) => {
		return Number(a) * Number(b);
	};
	const divide = (a, b) => {
		return Number(a) / Number(b);
	};

	return {
		add,
		substract,
		multiply,
		divide,
	};
})();

export default Calculator;
