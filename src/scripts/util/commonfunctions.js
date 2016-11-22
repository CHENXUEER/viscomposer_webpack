let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
let uuid = new Array(36);
let rnd = 0, r;

// http://www.broofa.com/Tools/Math.uuid.htm

export const generateUUID = function generateUUID(prefix = 'u') {
	for (let i = 0; i < 36; i += 1) {
		if (i == 8 || i == 13 || i == 18 || i == 23) {
			uuid[i] = '-';
		} else if (i == 14) {
			uuid[i] = '4';
		} else {
			if (rnd <= 0x02) rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
			r = rnd & 0xf;
			rnd >>= 4;
			uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
		}
	}
	return `${prefix}${uuid.join('')}`;
};

export const createSVGElement = function createSVGElement(type) {
	return document.createElementNS('http://www.w3.org/2000/svg', type);
};
