const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class Currency{

	roundingOption;
	precision;
	keyModified = new Map();
	/**
	 * The method to get the roundingOption
	 * @returns {String} A String
	 */
	getRoundingOption()	{
		return this.roundingOption;

	}

	/**
	 * The method to set the value to roundingOption
	 * @param {String} roundingOption A String
	 */
	setRoundingOption(roundingOption)	{
		if((roundingOption != null) && (!(Object.prototype.toString.call(roundingOption) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: roundingOption EXPECTED TYPE: String", null, null);
		}
		this.roundingOption = roundingOption;
		this.keyModified.set("rounding_option", 1);

	}

	/**
	 * The method to get the precision
	 * @returns {Integer} An Integer
	 */
	getPrecision()	{
		return this.precision;

	}

	/**
	 * The method to set the value to precision
	 * @param {Integer} precision An Integer
	 */
	setPrecision(precision)	{
		if((precision != null) && (!(Object.prototype.toString.call(precision) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: precision EXPECTED TYPE: Integer", null, null);
		}
		this.precision = precision;
		this.keyModified.set("precision", 1);

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
	MasterModel : Currency,
	Currency : Currency
}
