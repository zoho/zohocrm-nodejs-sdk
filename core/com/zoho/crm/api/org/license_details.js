const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class LicenseDetails{

	paidExpiry;
	usersLicensePurchased;
	trialType;
	trialExpiry;
	paid;
	paidType;
	keyModified = new Map();
	/**
	 * The method to get the paidExpiry
	 * @returns {Date} An instance of Date
	 */
	getPaidExpiry()	{
		return this.paidExpiry;

	}

	/**
	 * The method to set the value to paidExpiry
	 * @param {Date} paidExpiry An instance of Date
	 */
	setPaidExpiry(paidExpiry)	{
		if((paidExpiry != null) && (!(paidExpiry instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paidExpiry EXPECTED TYPE: Date", null, null);
		}
		this.paidExpiry = paidExpiry;
		this.keyModified.set("paid_expiry", 1);

	}

	/**
	 * The method to get the usersLicensePurchased
	 * @returns {BigInt} A BigInt
	 */
	getUsersLicensePurchased()	{
		return this.usersLicensePurchased;

	}

	/**
	 * The method to set the value to usersLicensePurchased
	 * @param {BigInt} usersLicensePurchased A BigInt
	 */
	setUsersLicensePurchased(usersLicensePurchased)	{
		if((usersLicensePurchased != null) && (!(Object.prototype.toString.call(usersLicensePurchased) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: usersLicensePurchased EXPECTED TYPE: BigInt", null, null);
		}
		this.usersLicensePurchased = usersLicensePurchased;
		this.keyModified.set("users_license_purchased", 1);

	}

	/**
	 * The method to get the trialType
	 * @returns {String} A String
	 */
	getTrialType()	{
		return this.trialType;

	}

	/**
	 * The method to set the value to trialType
	 * @param {String} trialType A String
	 */
	setTrialType(trialType)	{
		if((trialType != null) && (!(Object.prototype.toString.call(trialType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: trialType EXPECTED TYPE: String", null, null);
		}
		this.trialType = trialType;
		this.keyModified.set("trial_type", 1);

	}

	/**
	 * The method to get the trialExpiry
	 * @returns {String} A String
	 */
	getTrialExpiry()	{
		return this.trialExpiry;

	}

	/**
	 * The method to set the value to trialExpiry
	 * @param {String} trialExpiry A String
	 */
	setTrialExpiry(trialExpiry)	{
		if((trialExpiry != null) && (!(Object.prototype.toString.call(trialExpiry) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: trialExpiry EXPECTED TYPE: String", null, null);
		}
		this.trialExpiry = trialExpiry;
		this.keyModified.set("trial_expiry", 1);

	}

	/**
	 * The method to get the paid
	 * @returns {Boolean} A Boolean
	 */
	getPaid()	{
		return this.paid;

	}

	/**
	 * The method to set the value to paid
	 * @param {Boolean} paid A Boolean
	 */
	setPaid(paid)	{
		if((paid != null) && (!(Object.prototype.toString.call(paid) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paid EXPECTED TYPE: Boolean", null, null);
		}
		this.paid = paid;
		this.keyModified.set("paid", 1);

	}

	/**
	 * The method to get the paidType
	 * @returns {String} A String
	 */
	getPaidType()	{
		return this.paidType;

	}

	/**
	 * The method to set the value to paidType
	 * @param {String} paidType A String
	 */
	setPaidType(paidType)	{
		if((paidType != null) && (!(Object.prototype.toString.call(paidType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paidType EXPECTED TYPE: String", null, null);
		}
		this.paidType = paidType;
		this.keyModified.set("paid_type", 1);

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
	MasterModel : LicenseDetails,
	LicenseDetails : LicenseDetails
}
