const Choice = require("../../../../../../utils/util/choice").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class File{

	status;
	name;
	addedCount;
	skippedCount;
	updatedCount;
	totalCount;
	keyModified = new Map();
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
	 * The method to get the addedCount
	 * @returns {Integer} An Integer
	 */
	getAddedCount()	{
		return this.addedCount;

	}

	/**
	 * The method to set the value to addedCount
	 * @param {Integer} addedCount An Integer
	 */
	setAddedCount(addedCount)	{
		if((addedCount != null) && (!(Object.prototype.toString.call(addedCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: addedCount EXPECTED TYPE: Integer", null, null);
		}
		this.addedCount = addedCount;
		this.keyModified.set("added_count", 1);

	}

	/**
	 * The method to get the skippedCount
	 * @returns {Integer} An Integer
	 */
	getSkippedCount()	{
		return this.skippedCount;

	}

	/**
	 * The method to set the value to skippedCount
	 * @param {Integer} skippedCount An Integer
	 */
	setSkippedCount(skippedCount)	{
		if((skippedCount != null) && (!(Object.prototype.toString.call(skippedCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: skippedCount EXPECTED TYPE: Integer", null, null);
		}
		this.skippedCount = skippedCount;
		this.keyModified.set("skipped_count", 1);

	}

	/**
	 * The method to get the updatedCount
	 * @returns {Integer} An Integer
	 */
	getUpdatedCount()	{
		return this.updatedCount;

	}

	/**
	 * The method to set the value to updatedCount
	 * @param {Integer} updatedCount An Integer
	 */
	setUpdatedCount(updatedCount)	{
		if((updatedCount != null) && (!(Object.prototype.toString.call(updatedCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: updatedCount EXPECTED TYPE: Integer", null, null);
		}
		this.updatedCount = updatedCount;
		this.keyModified.set("updated_count", 1);

	}

	/**
	 * The method to get the totalCount
	 * @returns {Integer} An Integer
	 */
	getTotalCount()	{
		return this.totalCount;

	}

	/**
	 * The method to set the value to totalCount
	 * @param {Integer} totalCount An Integer
	 */
	setTotalCount(totalCount)	{
		if((totalCount != null) && (!(Object.prototype.toString.call(totalCount) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: totalCount EXPECTED TYPE: Integer", null, null);
		}
		this.totalCount = totalCount;
		this.keyModified.set("total_count", 1);

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
	MasterModel : File,
	File : File
}
