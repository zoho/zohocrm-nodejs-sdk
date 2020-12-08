const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class Section{

	displayLabel;
	sequenceNumber;
	issubformsection;
	tabTraversal;
	apiName;
	columnCount;
	name;
	generatedType;
	fields;
	properties;
	keyModified = new Map();
	/**
	 * The method to get the displayLabel
	 * @returns {String} A String
	 */
	getDisplayLabel()	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param {String} displayLabel A String
	 */
	setDisplayLabel(displayLabel)	{
		if((displayLabel != null) && (!(Object.prototype.toString.call(displayLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayLabel EXPECTED TYPE: String", null, null);
		}
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the sequenceNumber
	 * @returns {Integer} An Integer
	 */
	getSequenceNumber()	{
		return this.sequenceNumber;

	}

	/**
	 * The method to set the value to sequenceNumber
	 * @param {Integer} sequenceNumber An Integer
	 */
	setSequenceNumber(sequenceNumber)	{
		if((sequenceNumber != null) && (!(Object.prototype.toString.call(sequenceNumber) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sequenceNumber EXPECTED TYPE: Integer", null, null);
		}
		this.sequenceNumber = sequenceNumber;
		this.keyModified.set("sequence_number", 1);

	}

	/**
	 * The method to get the issubformsection
	 * @returns {Boolean} A Boolean
	 */
	getIssubformsection()	{
		return this.issubformsection;

	}

	/**
	 * The method to set the value to issubformsection
	 * @param {Boolean} issubformsection A Boolean
	 */
	setIssubformsection(issubformsection)	{
		if((issubformsection != null) && (!(Object.prototype.toString.call(issubformsection) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: issubformsection EXPECTED TYPE: Boolean", null, null);
		}
		this.issubformsection = issubformsection;
		this.keyModified.set("isSubformSection", 1);

	}

	/**
	 * The method to get the tabTraversal
	 * @returns {Integer} An Integer
	 */
	getTabTraversal()	{
		return this.tabTraversal;

	}

	/**
	 * The method to set the value to tabTraversal
	 * @param {Integer} tabTraversal An Integer
	 */
	setTabTraversal(tabTraversal)	{
		if((tabTraversal != null) && (!(Object.prototype.toString.call(tabTraversal) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tabTraversal EXPECTED TYPE: Integer", null, null);
		}
		this.tabTraversal = tabTraversal;
		this.keyModified.set("tab_traversal", 1);

	}

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
	 * The method to get the columnCount
	 * @returns {Integer} An Integer
	 */
	getColumnCount()	{
		return this.columnCount;

	}

	/**
	 * The method to set the value to columnCount
	 * @param {Integer} columnCount An Integer
	 */
	setColumnCount(columnCount)	{
		if((columnCount != null) && (!(Object.prototype.toString.call(columnCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: columnCount EXPECTED TYPE: Integer", null, null);
		}
		this.columnCount = columnCount;
		this.keyModified.set("column_count", 1);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String
	 */
	getName()	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the generatedType
	 * @returns {String} A String
	 */
	getGeneratedType()	{
		return this.generatedType;

	}

	/**
	 * The method to set the value to generatedType
	 * @param {String} generatedType A String
	 */
	setGeneratedType(generatedType)	{
		if((generatedType != null) && (!(Object.prototype.toString.call(generatedType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: generatedType EXPECTED TYPE: String", null, null);
		}
		this.generatedType = generatedType;
		this.keyModified.set("generated_type", 1);

	}

	/**
	 * The method to get the fields
	 * @returns {Array} An Array
	 */
	getFields()	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param {Array} fields An Array
	 */
	setFields(fields)	{
		if((fields != null) && (!(Object.prototype.toString.call(fields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fields EXPECTED TYPE: Array", null, null);
		}
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the properties
	 * @returns {Properties} An instance of Properties
	 */
	getProperties()	{
		return this.properties;

	}

	/**
	 * The method to set the value to properties
	 * @param {Properties} properties An instance of Properties
	 */
	setProperties(properties)	{
		const Properties = require("./properties").MasterModel;
		if((properties != null) && (!(properties instanceof Properties)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: properties EXPECTED TYPE: Properties", null, null);
		}
		this.properties = properties;
		this.keyModified.set("properties", 1);

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
	MasterModel : Section,
	Section : Section
}
