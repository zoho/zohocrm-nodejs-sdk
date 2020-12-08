const Record = require("./record").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class LineItemProduct extends Record{

	/**
	 * The method to get the productCode
	 * @returns {String} A String
	 */
	getProductCode()	{
		return this.getKeyValue("Product_Code");

	}

	/**
	 * The method to set the value to productCode
	 * @param {String} productCode A String
	 */
	setProductCode(productCode)	{
		if((productCode != null) && (!(Object.prototype.toString.call(productCode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: productCode EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Product_Code", productCode);

	}

	/**
	 * The method to get the currency
	 * @returns {String} A String
	 */
	getCurrency()	{
		return this.getKeyValue("Currency");

	}

	/**
	 * The method to set the value to currency
	 * @param {String} currency A String
	 */
	setCurrency(currency)	{
		if((currency != null) && (!(Object.prototype.toString.call(currency) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currency EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Currency", currency);

	}

	/**
	 * The method to get the name
	 * @returns {String} A String
	 */
	getName()	{
		return this.getKeyValue("name");

	}

	/**
	 * The method to set the value to name
	 * @param {String} name A String
	 */
	setName(name)	{
		if((name != null) && (!(Object.prototype.toString.call(name) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: name EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("name", name);

	}

}
module.exports = {
	MasterModel : LineItemProduct,
	LineItemProduct : LineItemProduct
}
