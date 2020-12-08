const Choice = require("../../../../../../utils/util/choice").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class APIException{

	code;
	message;
	status;
	details;
	errorMessage;
	errorCode;
	xError;
	info;
	xInfo;
	httpStatus;
	keyModified = new Map();
	/**
	 * The method to get the code
	 * @returns {Choice} An instance of Choice
	 */
	getCode()	{
		return this.code;

	}

	/**
	 * The method to set the value to code
	 * @param {Choice} code An instance of Choice
	 */
	setCode(code)	{
		if((code != null) && (!(code instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: code EXPECTED TYPE: Choice", null, null);
		}
		this.code = code;
		this.keyModified.set("code", 1);

	}

	/**
	 * The method to get the message
	 * @returns {Choice} An instance of Choice
	 */
	getMessage()	{
		return this.message;

	}

	/**
	 * The method to set the value to message
	 * @param {Choice} message An instance of Choice
	 */
	setMessage(message)	{
		if((message != null) && (!(message instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: Choice", null, null);
		}
		this.message = message;
		this.keyModified.set("message", 1);

	}

	/**
	 * The method to get the status
	 * @returns {Choice} An instance of Choice
	 */
	getStatus()	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param {Choice} status An instance of Choice
	 */
	setStatus(status)	{
		if((status != null) && (!(status instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Choice", null, null);
		}
		this.status = status;
		this.keyModified.set("status", 1);

	}

	/**
	 * The method to get the details
	 * @returns {Map} A Map
	 */
	getDetails()	{
		return this.details;

	}

	/**
	 * The method to set the value to details
	 * @param {Map} details A Map
	 */
	setDetails(details)	{
		if((details != null) && (!(Object.prototype.toString.call(details) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: details EXPECTED TYPE: Map", null, null);
		}
		this.details = details;
		this.keyModified.set("details", 1);

	}

	/**
	 * The method to get the errorMessage
	 * @returns {Choice} An instance of Choice
	 */
	getErrorMessage()	{
		return this.errorMessage;

	}

	/**
	 * The method to set the value to errorMessage
	 * @param {Choice} errorMessage An instance of Choice
	 */
	setErrorMessage(errorMessage)	{
		if((errorMessage != null) && (!(errorMessage instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: errorMessage EXPECTED TYPE: Choice", null, null);
		}
		this.errorMessage = errorMessage;
		this.keyModified.set("ERROR_MESSAGE", 1);

	}

	/**
	 * The method to get the errorCode
	 * @returns {Integer} An Integer
	 */
	getErrorCode()	{
		return this.errorCode;

	}

	/**
	 * The method to set the value to errorCode
	 * @param {Integer} errorCode An Integer
	 */
	setErrorCode(errorCode)	{
		if((errorCode != null) && (!(Object.prototype.toString.call(errorCode) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: errorCode EXPECTED TYPE: Integer", null, null);
		}
		this.errorCode = errorCode;
		this.keyModified.set("ERROR_CODE", 1);

	}

	/**
	 * The method to get the xError
	 * @returns {Choice} An instance of Choice
	 */
	getXError()	{
		return this.xError;

	}

	/**
	 * The method to set the value to xError
	 * @param {Choice} xError An instance of Choice
	 */
	setXError(xError)	{
		if((xError != null) && (!(xError instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: xError EXPECTED TYPE: Choice", null, null);
		}
		this.xError = xError;
		this.keyModified.set("x-error", 1);

	}

	/**
	 * The method to get the info
	 * @returns {Choice} An instance of Choice
	 */
	getInfo()	{
		return this.info;

	}

	/**
	 * The method to set the value to info
	 * @param {Choice} info An instance of Choice
	 */
	setInfo(info)	{
		if((info != null) && (!(info instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: info EXPECTED TYPE: Choice", null, null);
		}
		this.info = info;
		this.keyModified.set("info", 1);

	}

	/**
	 * The method to get the xInfo
	 * @returns {Choice} An instance of Choice
	 */
	getXInfo()	{
		return this.xInfo;

	}

	/**
	 * The method to set the value to xInfo
	 * @param {Choice} xInfo An instance of Choice
	 */
	setXInfo(xInfo)	{
		if((xInfo != null) && (!(xInfo instanceof Choice)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: xInfo EXPECTED TYPE: Choice", null, null);
		}
		this.xInfo = xInfo;
		this.keyModified.set("x-info", 1);

	}

	/**
	 * The method to get the httpStatus
	 * @returns {String} A String
	 */
	getHttpStatus()	{
		return this.httpStatus;

	}

	/**
	 * The method to set the value to httpStatus
	 * @param {String} httpStatus A String
	 */
	setHttpStatus(httpStatus)	{
		if((httpStatus != null) && (!(Object.prototype.toString.call(httpStatus) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: httpStatus EXPECTED TYPE: String", null, null);
		}
		this.httpStatus = httpStatus;
		this.keyModified.set("http_status", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param {String} key A String
	 * @returns {Integer} An Integer
	 */
	isKeyModified(key)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param {String} key A String
	 * @param {Integer} modification An Integer
	 */
	setKeyModified(key, modification)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
		}
		this.keyModified.set(key, modification);

	}

}
module.exports = {
	MasterModel : APIException,
	APIException : APIException
}
