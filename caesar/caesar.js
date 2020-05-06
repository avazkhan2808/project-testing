function cipher(text, key) {
	let result = '';

	for (let i = 0, length = text.length; i < length; i += 1) {
		const char = text.charCodeAt(i);

		if (char >= 65 && char <= 90) {
			result += String.fromCharCode(((char - 65 + key) % 26) + 65);
		} else if (char >= 97 && char <= 122) {
			result += String.fromCharCode(((char - 97 + key) % 26) + 97);
		} else {
			result += text.charAt(i);
		}
	}

	return result;
}

export default cipher;
