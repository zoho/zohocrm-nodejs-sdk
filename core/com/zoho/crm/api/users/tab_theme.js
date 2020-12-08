const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class TabTheme{

	fontColor;
	background;
	keyModified = new Map();
	/**
	 * The method to get the fontColor
	 * @returns {String} A String
	 */
	getFontColor()	{
		return this.fontColor;

	}

	/**
	 * The method to set the value to fontColor
	 * @param {String} fontColor A String
	 */
	setFontColor(fontColor)	{
		if((fontColor != null) && (!(Object.prototype.toString.call(fontColor) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fontColor EXPECTED TYPE: String", null, null);
		}
		this.fontColor = fontColor;
		this.keyModified.set("font_color", 1);

	}

	/**
	 * The method to get the background
	 * @returns {String} A String
	 */
	getBackground()	{
		return this.background;

	}

	/**
	 * The method to set the value to background
	 * @param {String} background A String
	 */
	setBackground(background)	{
		if((background != null) && (!(Object.prototype.toString.call(background) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: background EXPECTED TYPE: String", null, null);
		}
		this.background = background;
		this.keyModified.set("background", 1);

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
	MasterModel : TabTheme,
	TabTheme : TabTheme
}
