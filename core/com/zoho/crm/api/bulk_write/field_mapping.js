const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class FieldMapping{

	apiName;
	index;
	format;
	findBy;
	defaultValue;
	module;
	keyModified = new Map();
	/**
	 * The method to get the apiName
	 * @returns {String} A String
	 */
	getAPIName()	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param {String} apiName A String
	 */
	setAPIName(apiName)	{
		if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
		}
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the index
	 * @returns {Integer} An Integer
	 */
	getIndex()	{
		return this.index;

	}

	/**
	 * The method to set the value to index
	 * @param {Integer} index An Integer
	 */
	setIndex(index)	{
		if((index != null) && (!(Object.prototype.toString.call(index) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: index EXPECTED TYPE: Integer", null, null);
		}
		this.index = index;
		this.keyModified.set("index", 1);

	}

	/**
	 * The method to get the format
	 * @returns {String} A String
	 */
	getFormat()	{
		return this.format;

	}

	/**
	 * The method to set the value to format
	 * @param {String} format A String
	 */
	setFormat(format)	{
		if((format != null) && (!(Object.prototype.toString.call(format) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: format EXPECTED TYPE: String", null, null);
		}
		this.format = format;
		this.keyModified.set("format", 1);

	}

	/**
	 * The method to get the findBy
	 * @returns {String} A String
	 */
	getFindBy()	{
		return this.findBy;

	}

	/**
	 * The method to set the value to findBy
	 * @param {String} findBy A String
	 */
	setFindBy(findBy)	{
		if((findBy != null) && (!(Object.prototype.toString.call(findBy) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: findBy EXPECTED TYPE: String", null, null);
		}
		this.findBy = findBy;
		this.keyModified.set("find_by", 1);

	}

	/**
	 * The method to get the defaultValue
	 * @returns {Map} A Map
	 */
	getDefaultValue()	{
		return this.defaultValue;

	}

	/**
	 * The method to set the value to defaultValue
	 * @param {Map} defaultValue A Map
	 */
	setDefaultValue(defaultValue)	{
		if((defaultValue != null) && (!(Object.prototype.toString.call(defaultValue) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultValue EXPECTED TYPE: Map", null, null);
		}
		this.defaultValue = defaultValue;
		this.keyModified.set("default_value", 1);

	}

	/**
	 * The method to get the module
	 * @returns {String} A String
	 */
	getModule()	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param {String} module A String
	 */
	setModule(module)	{
		if((module != null) && (!(Object.prototype.toString.call(module) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: module EXPECTED TYPE: String", null, null);
		}
		this.module = module;
		this.keyModified.set("module", 1);

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
	MasterModel : FieldMapping,
	FieldMapping : FieldMapping
}
