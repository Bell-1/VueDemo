function checkType(params) {
	let type = typeof params;
	if (type === 'object') {
		return checkObject(params);
	} else {
		return type;
	}
}

/**
 * 区分Object和Array类型 
 * @param {Object | Array} params 
 */
function checkObject(params) {
	return Object.prototype.toString.call(params).replace(/[\[\]]/g, '').split(' ')[1].toLowerCase();
}


export default checkType;