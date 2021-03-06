const DataCenter = require("./data_center").DataCenter;

/**
 * This class represents the properties of Zoho CRM in EU Domain.
 * @extends DataCenter
 */
class EUDataCenter extends DataCenter{

	static _PRODUCTION;

	static _SANDBOX;

	static _DEVELOPER;

	/**
     * This method represents the Zoho CRM Production environment in EU domain
     * @returns {Environment} An instance of Environment
     */
	static PRODUCTION(){
		if(EUDataCenter._PRODUCTION  == null){
            EUDataCenter._PRODUCTION = DataCenter.setEnvironment("https://www.zohoapis.eu", new EUDataCenter().getIamUrl(), new EUDataCenter().getFileUploadUrl());
		}
		
        return EUDataCenter._PRODUCTION;
	};

	/**
     *  This method represents the Zoho CRM Sandbox environment in EU domain
     * @returns {Environment} An instance of Environment
     */
	static SANDBOX(){
		if(EUDataCenter._SANDBOX == null){
            EUDataCenter._SANDBOX = DataCenter.setEnvironment("https://sandbox.zohoapis.eu", new EUDataCenter().getIamUrl(), new EUDataCenter().getFileUploadUrl());
		}
		
        return EUDataCenter._SANDBOX;
	};

	/**
     * This method represents the Zoho CRM Developer environment in EU domain
     * @returns {Environment} An instance of Environment
     */
	static DEVELOPER(){
		if(EUDataCenter._DEVELOPER == null){
            EUDataCenter._DEVELOPER = DataCenter.setEnvironment("https://developer.zohoapis.eu", new EUDataCenter().getIamUrl(), new EUDataCenter().getFileUploadUrl());
		}
		
        return EUDataCenter._DEVELOPER;
	};

	getIamUrl(){
		return "https://accounts.zoho.eu/oauth/v2/token";
	}

	getFileUploadUrl(){
        return "https://content.zohoapis.eu"
    }
}
module.exports = {EUDataCenter}