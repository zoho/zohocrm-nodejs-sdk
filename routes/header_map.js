const HeaderParamValidator = require("../utils/util/header_param_validator").HeaderParamValidator;
const SDKException = require("../core/com/zoho/crm/api/exception/sdk_exception").SDKException;
const Constants = require("../utils/util/constants").Constants;

/**
 * This class represents the HTTP header name and value.
 */
class HeaderMap{
	headerMap = new Map();

	/**
	 * This is a getter method to get the header map.
	 * @returns {Map} A Map representing the API request headers.
	 */
	get headerMap() {
		return this.headerMap;
	}

	/**
	 * The method to add the header name and value.
	 * @param {Header} header - A Header class instance.
	 * @param {object} value - An object containing the header value.
	 * @throws {SDKException}
	 */
	async add(header, value) {

		if(header == null) {
			throw new SDKException(Constants.HEADER_NULL_ERROR, Constants.HEADER_INSTANCE_NULL_ERROR);
		}
		var headerName = header.name;

		if(headerName == null) {
			throw new SDKException(Constants.HEADER_NAME_NULL_ERROR, Constants.HEADER_NAME_NULL_ERROR_MESSAGE);
		}

		if(value == null) {
			throw new SDKException(Constants.HEADER_NULL_ERROR, headerName + Constants.NULL_VALUE_ERROR_MESSAGE);
		}

		var headerClassName = header.className;
		
		if(headerClassName != null) {
			let headerParamValidator = new HeaderParamValidator();

			value = await headerParamValidator.validate(header, value);
		}

		if(this.headerMap.has(headerName) && this.headerMap.get(headerName) != null) {
			let headerValue = this.headerMap.get(headerName);

			headerValue = headerValue.concat(",", value.toString());

			this.headerMap.set(headerName, headerValue);

		}
		else {
			this.headerMap.set(headerName, value.toString());
		}
	}
}

module.exports = {
	MasterModel : HeaderMap, 
	HeaderMap : HeaderMap
}
