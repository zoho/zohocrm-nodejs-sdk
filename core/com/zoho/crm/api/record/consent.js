const Record = require("./record").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class Consent extends Record{

	/**
	 * The method to get the owner
	 * @returns {User} An instance of User
	 */
	getOwner()	{
		return this.getKeyValue("Owner");

	}

	/**
	 * The method to set the value to owner
	 * @param {User} owner An instance of User
	 */
	setOwner(owner)	{
		const User = require("../users/user").MasterModel;
		if((owner != null) && (!(owner instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: owner EXPECTED TYPE: User", null, null);
		}
		this.addKeyValue("Owner", owner);

	}

	/**
	 * The method to get the contactThroughEmail
	 * @returns {Boolean} A Boolean
	 */
	getContactThroughEmail()	{
		return this.getKeyValue("Contact_Through_Email");

	}

	/**
	 * The method to set the value to contactThroughEmail
	 * @param {Boolean} contactThroughEmail A Boolean
	 */
	setContactThroughEmail(contactThroughEmail)	{
		if((contactThroughEmail != null) && (!(Object.prototype.toString.call(contactThroughEmail) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contactThroughEmail EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("Contact_Through_Email", contactThroughEmail);

	}

	/**
	 * The method to get the contactThroughSocial
	 * @returns {Boolean} A Boolean
	 */
	getContactThroughSocial()	{
		return this.getKeyValue("Contact_Through_Social");

	}

	/**
	 * The method to set the value to contactThroughSocial
	 * @param {Boolean} contactThroughSocial A Boolean
	 */
	setContactThroughSocial(contactThroughSocial)	{
		if((contactThroughSocial != null) && (!(Object.prototype.toString.call(contactThroughSocial) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contactThroughSocial EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("Contact_Through_Social", contactThroughSocial);

	}

	/**
	 * The method to get the contactThroughSurvey
	 * @returns {Boolean} A Boolean
	 */
	getContactThroughSurvey()	{
		return this.getKeyValue("Contact_Through_Survey");

	}

	/**
	 * The method to set the value to contactThroughSurvey
	 * @param {Boolean} contactThroughSurvey A Boolean
	 */
	setContactThroughSurvey(contactThroughSurvey)	{
		if((contactThroughSurvey != null) && (!(Object.prototype.toString.call(contactThroughSurvey) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contactThroughSurvey EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("Contact_Through_Survey", contactThroughSurvey);

	}

	/**
	 * The method to get the contactThroughPhone
	 * @returns {Boolean} A Boolean
	 */
	getContactThroughPhone()	{
		return this.getKeyValue("Contact_Through_Phone");

	}

	/**
	 * The method to set the value to contactThroughPhone
	 * @param {Boolean} contactThroughPhone A Boolean
	 */
	setContactThroughPhone(contactThroughPhone)	{
		if((contactThroughPhone != null) && (!(Object.prototype.toString.call(contactThroughPhone) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contactThroughPhone EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("Contact_Through_Phone", contactThroughPhone);

	}

	/**
	 * The method to get the mailSentTime
	 * @returns {Date} An instance of Date
	 */
	getMailSentTime()	{
		return this.getKeyValue("Mail_Sent_Time");

	}

	/**
	 * The method to set the value to mailSentTime
	 * @param {Date} mailSentTime An instance of Date
	 */
	setMailSentTime(mailSentTime)	{
		if((mailSentTime != null) && (!(mailSentTime instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mailSentTime EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("Mail_Sent_Time", mailSentTime);

	}

	/**
	 * The method to get the consentDate
	 * @returns {Date} An instance of Date
	 */
	getConsentDate()	{
		return this.getKeyValue("Consent_Date");

	}

	/**
	 * The method to set the value to consentDate
	 * @param {Date} consentDate An instance of Date
	 */
	setConsentDate(consentDate)	{
		if((consentDate != null) && (!(consentDate instanceof Date)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentDate EXPECTED TYPE: Date", null, null);
		}
		this.addKeyValue("Consent_Date", consentDate);

	}

	/**
	 * The method to get the consentRemarks
	 * @returns {String} A String
	 */
	getConsentRemarks()	{
		return this.getKeyValue("Consent_Remarks");

	}

	/**
	 * The method to set the value to consentRemarks
	 * @param {String} consentRemarks A String
	 */
	setConsentRemarks(consentRemarks)	{
		if((consentRemarks != null) && (!(Object.prototype.toString.call(consentRemarks) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentRemarks EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Consent_Remarks", consentRemarks);

	}

	/**
	 * The method to get the consentThrough
	 * @returns {String} A String
	 */
	getConsentThrough()	{
		return this.getKeyValue("Consent_Through");

	}

	/**
	 * The method to set the value to consentThrough
	 * @param {String} consentThrough A String
	 */
	setConsentThrough(consentThrough)	{
		if((consentThrough != null) && (!(Object.prototype.toString.call(consentThrough) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: consentThrough EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Consent_Through", consentThrough);

	}

	/**
	 * The method to get the dataProcessingBasis
	 * @returns {String} A String
	 */
	getDataProcessingBasis()	{
		return this.getKeyValue("Data_Processing_Basis");

	}

	/**
	 * The method to set the value to dataProcessingBasis
	 * @param {String} dataProcessingBasis A String
	 */
	setDataProcessingBasis(dataProcessingBasis)	{
		if((dataProcessingBasis != null) && (!(Object.prototype.toString.call(dataProcessingBasis) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataProcessingBasis EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("Data_Processing_Basis", dataProcessingBasis);

	}

}
module.exports = {
	MasterModel : Consent,
	Consent : Consent
}
