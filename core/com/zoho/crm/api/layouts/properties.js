const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class Properties{

	reorderRows;
	tooltip;
	maximumRows;
	keyModified = new Map();
	/**
	 * The method to get the reorderRows
	 * @returns {Boolean} A Boolean
	 */
	getReorderRows()	{
		return this.reorderRows;

	}

	/**
	 * The method to set the value to reorderRows
	 * @param {Boolean} reorderRows A Boolean
	 */
	setReorderRows(reorderRows)	{
		if((reorderRows != null) && (!(Object.prototype.toString.call(reorderRows) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reorderRows EXPECTED TYPE: Boolean", null, null);
		}
		this.reorderRows = reorderRows;
		this.keyModified.set("reorder_rows", 1);

	}

	/**
	 * The method to get the tooltip
	 * @returns {ToolTip} An instance of ToolTip
	 */
	getTooltip()	{
		return this.tooltip;

	}

	/**
	 * The method to set the value to tooltip
	 * @param {ToolTip} tooltip An instance of ToolTip
	 */
	setTooltip(tooltip)	{
		const ToolTip = require("../fields/tool_tip").MasterModel;
		if((tooltip != null) && (!(tooltip instanceof ToolTip)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tooltip EXPECTED TYPE: ToolTip", null, null);
		}
		this.tooltip = tooltip;
		this.keyModified.set("tooltip", 1);

	}

	/**
	 * The method to get the maximumRows
	 * @returns {Integer} An Integer
	 */
	getMaximumRows()	{
		return this.maximumRows;

	}

	/**
	 * The method to set the value to maximumRows
	 * @param {Integer} maximumRows An Integer
	 */
	setMaximumRows(maximumRows)	{
		if((maximumRows != null) && (!(Object.prototype.toString.call(maximumRows) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: maximumRows EXPECTED TYPE: Integer", null, null);
		}
		this.maximumRows = maximumRows;
		this.keyModified.set("maximum_rows", 1);

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
	MasterModel : Properties,
	Properties : Properties
}
