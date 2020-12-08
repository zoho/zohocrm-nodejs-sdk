const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class BodyWrapper{

	data;
	trigger;
	process;
	duplicateCheckFields;
	wfTrigger;
	larId;
	keyModified = new Map();
	/**
	 * The method to get the data
	 * @returns {Array} An Array
	 */
	getData()	{
		return this.data;

	}

	/**
	 * The method to set the value to data
	 * @param {Array} data An Array
	 */
	setData(data)	{
		if((data != null) && (!(Object.prototype.toString.call(data) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: data EXPECTED TYPE: Array", null, null);
		}
		this.data = data;
		this.keyModified.set("data", 1);

	}

	/**
	 * The method to get the trigger
	 * @returns {Array} An Array
	 */
	getTrigger()	{
		return this.trigger;

	}

	/**
	 * The method to set the value to trigger
	 * @param {Array} trigger An Array
	 */
	setTrigger(trigger)	{
		if((trigger != null) && (!(Object.prototype.toString.call(trigger) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: trigger EXPECTED TYPE: Array", null, null);
		}
		this.trigger = trigger;
		this.keyModified.set("trigger", 1);

	}

	/**
	 * The method to get the process
	 * @returns {Array} An Array
	 */
	getProcess()	{
		return this.process;

	}

	/**
	 * The method to set the value to process
	 * @param {Array} process An Array
	 */
	setProcess(process)	{
		if((process != null) && (!(Object.prototype.toString.call(process) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: process EXPECTED TYPE: Array", null, null);
		}
		this.process = process;
		this.keyModified.set("process", 1);

	}

	/**
	 * The method to get the duplicateCheckFields
	 * @returns {Array} An Array
	 */
	getDuplicateCheckFields()	{
		return this.duplicateCheckFields;

	}

	/**
	 * The method to set the value to duplicateCheckFields
	 * @param {Array} duplicateCheckFields An Array
	 */
	setDuplicateCheckFields(duplicateCheckFields)	{
		if((duplicateCheckFields != null) && (!(Object.prototype.toString.call(duplicateCheckFields) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: duplicateCheckFields EXPECTED TYPE: Array", null, null);
		}
		this.duplicateCheckFields = duplicateCheckFields;
		this.keyModified.set("duplicate_check_fields", 1);

	}

	/**
	 * The method to get the wfTrigger
	 * @returns {String} A String
	 */
	getWfTrigger()	{
		return this.wfTrigger;

	}

	/**
	 * The method to set the value to wfTrigger
	 * @param {String} wfTrigger A String
	 */
	setWfTrigger(wfTrigger)	{
		if((wfTrigger != null) && (!(Object.prototype.toString.call(wfTrigger) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: wfTrigger EXPECTED TYPE: String", null, null);
		}
		this.wfTrigger = wfTrigger;
		this.keyModified.set("wf_trigger", 1);

	}

	/**
	 * The method to get the larId
	 * @returns {String} A String
	 */
	getLarId()	{
		return this.larId;

	}

	/**
	 * The method to set the value to larId
	 * @param {String} larId A String
	 */
	setLarId(larId)	{
		if((larId != null) && (!(Object.prototype.toString.call(larId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: larId EXPECTED TYPE: String", null, null);
		}
		this.larId = larId;
		this.keyModified.set("lar_id", 1);

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
	MasterModel : BodyWrapper,
	BodyWrapper : BodyWrapper
}
