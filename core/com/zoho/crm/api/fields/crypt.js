const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class Crypt{

	mode;
	column;
	encfldids;
	notify;
	table;
	status;
	keyModified = new Map();
	/**
	 * The method to get the mode
	 * @returns {String} A String
	 */
	getMode()	{
		return this.mode;

	}

	/**
	 * The method to set the value to mode
	 * @param {String} mode A String
	 */
	setMode(mode)	{
		if((mode != null) && (!(Object.prototype.toString.call(mode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mode EXPECTED TYPE: String", null, null);
		}
		this.mode = mode;
		this.keyModified.set("mode", 1);

	}

	/**
	 * The method to get the column
	 * @returns {String} A String
	 */
	getColumn()	{
		return this.column;

	}

	/**
	 * The method to set the value to column
	 * @param {String} column A String
	 */
	setColumn(column)	{
		if((column != null) && (!(Object.prototype.toString.call(column) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: column EXPECTED TYPE: String", null, null);
		}
		this.column = column;
		this.keyModified.set("column", 1);

	}

	/**
	 * The method to get the encfldids
	 * @returns {Array} An Array
	 */
	getEncfldids()	{
		return this.encfldids;

	}

	/**
	 * The method to set the value to encfldids
	 * @param {Array} encfldids An Array
	 */
	setEncfldids(encfldids)	{
		if((encfldids != null) && (!(Object.prototype.toString.call(encfldids) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: encfldids EXPECTED TYPE: Array", null, null);
		}
		this.encfldids = encfldids;
		this.keyModified.set("encFldIds", 1);

	}

	/**
	 * The method to get the notify
	 * @returns {String} A String
	 */
	getNotify()	{
		return this.notify;

	}

	/**
	 * The method to set the value to notify
	 * @param {String} notify A String
	 */
	setNotify(notify)	{
		if((notify != null) && (!(Object.prototype.toString.call(notify) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notify EXPECTED TYPE: String", null, null);
		}
		this.notify = notify;
		this.keyModified.set("notify", 1);

	}

	/**
	 * The method to get the table
	 * @returns {String} A String
	 */
	getTable()	{
		return this.table;

	}

	/**
	 * The method to set the value to table
	 * @param {String} table A String
	 */
	setTable(table)	{
		if((table != null) && (!(Object.prototype.toString.call(table) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: table EXPECTED TYPE: String", null, null);
		}
		this.table = table;
		this.keyModified.set("table", 1);

	}

	/**
	 * The method to get the status
	 * @returns {Integer} An Integer
	 */
	getStatus()	{
		return this.status;

	}

	/**
	 * The method to set the value to status
	 * @param {Integer} status An Integer
	 */
	setStatus(status)	{
		if((status != null) && (!(Object.prototype.toString.call(status) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: Integer", null, null);
		}
		this.status = status;
		this.keyModified.set("status", 1);

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
	MasterModel : Crypt,
	Crypt : Crypt
}
