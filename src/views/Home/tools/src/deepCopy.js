import checkType from './checkType.js';
/**
 * 深拷贝
 * @param {*} source 拷贝源数据
 */
function deepCopy(source) {
	let target;
	let type = checkType(source);
	switch (type) {
		case "object":
			target = copyObject(source);
			break;
		case "array":
			target = copyArray(source);
			break;
		default:
			target = source;
			break;
	}

	return target;
}

/**
 * 拷贝数组
 * @param {Array} source 源数据
 * @param {Array} target 目标
 */
function copyArray(source, target = []) {
	for (let v of source) {
		target.push(deepCopy(v));
	}
	return target;
}
/**
 * 拷贝对象
 * @param {Object} source 源数据
 * @param {Object} target 目标
 */
function copyObject(source, target = {}) {
	for (let [k, v] of Object.entries(source)) {
		target[k] = deepCopy(v);
	}
	return target;
}

export default deepCopy;