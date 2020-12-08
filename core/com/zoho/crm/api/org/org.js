const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class Org{

	country;
	photoId;
	city;
	description;
	mcStatus;
	gappsEnabled;
	domainName;
	translationEnabled;
	street;
	alias;
	currency;
	id;
	state;
	fax;
	employeeCount;
	zip;
	website;
	currencySymbol;
	mobile;
	currencyLocale;
	primaryZuid;
	ziaPortalId;
	timeZone;
	zgid;
	countryCode;
	licenseDetails;
	phone;
	companyName;
	privacySettings;
	primaryEmail;
	isoCode;
	keyModified = new Map();
	/**
	 * The method to get the country
	 * @returns {String} A String
	 */
	getCountry()	{
		return this.country;

	}

	/**
	 * The method to set the value to country
	 * @param {String} country A String
	 */
	setCountry(country)	{
		if((country != null) && (!(Object.prototype.toString.call(country) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: country EXPECTED TYPE: String", null, null);
		}
		this.country = country;
		this.keyModified.set("country", 1);

	}

	/**
	 * The method to get the photoId
	 * @returns {String} A String
	 */
	getPhotoId()	{
		return this.photoId;

	}

	/**
	 * The method to set the value to photoId
	 * @param {String} photoId A String
	 */
	setPhotoId(photoId)	{
		if((photoId != null) && (!(Object.prototype.toString.call(photoId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: photoId EXPECTED TYPE: String", null, null);
		}
		this.photoId = photoId;
		this.keyModified.set("photo_id", 1);

	}

	/**
	 * The method to get the city
	 * @returns {String} A String
	 */
	getCity()	{
		return this.city;

	}

	/**
	 * The method to set the value to city
	 * @param {String} city A String
	 */
	setCity(city)	{
		if((city != null) && (!(Object.prototype.toString.call(city) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: city EXPECTED TYPE: String", null, null);
		}
		this.city = city;
		this.keyModified.set("city", 1);

	}

	/**
	 * The method to get the description
	 * @returns {String} A String
	 */
	getDescription()	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param {String} description A String
	 */
	setDescription(description)	{
		if((description != null) && (!(Object.prototype.toString.call(description) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: description EXPECTED TYPE: String", null, null);
		}
		this.description = description;
		this.keyModified.set("description", 1);

	}

	/**
	 * The method to get the mcStatus
	 * @returns {Boolean} A Boolean
	 */
	getMcStatus()	{
		return this.mcStatus;

	}

	/**
	 * The method to set the value to mcStatus
	 * @param {Boolean} mcStatus A Boolean
	 */
	setMcStatus(mcStatus)	{
		if((mcStatus != null) && (!(Object.prototype.toString.call(mcStatus) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mcStatus EXPECTED TYPE: Boolean", null, null);
		}
		this.mcStatus = mcStatus;
		this.keyModified.set("mc_status", 1);

	}

	/**
	 * The method to get the gappsEnabled
	 * @returns {Boolean} A Boolean
	 */
	getGappsEnabled()	{
		return this.gappsEnabled;

	}

	/**
	 * The method to set the value to gappsEnabled
	 * @param {Boolean} gappsEnabled A Boolean
	 */
	setGappsEnabled(gappsEnabled)	{
		if((gappsEnabled != null) && (!(Object.prototype.toString.call(gappsEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: gappsEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.gappsEnabled = gappsEnabled;
		this.keyModified.set("gapps_enabled", 1);

	}

	/**
	 * The method to get the domainName
	 * @returns {String} A String
	 */
	getDomainName()	{
		return this.domainName;

	}

	/**
	 * The method to set the value to domainName
	 * @param {String} domainName A String
	 */
	setDomainName(domainName)	{
		if((domainName != null) && (!(Object.prototype.toString.call(domainName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: domainName EXPECTED TYPE: String", null, null);
		}
		this.domainName = domainName;
		this.keyModified.set("domain_name", 1);

	}

	/**
	 * The method to get the translationEnabled
	 * @returns {Boolean} A Boolean
	 */
	getTranslationEnabled()	{
		return this.translationEnabled;

	}

	/**
	 * The method to set the value to translationEnabled
	 * @param {Boolean} translationEnabled A Boolean
	 */
	setTranslationEnabled(translationEnabled)	{
		if((translationEnabled != null) && (!(Object.prototype.toString.call(translationEnabled) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: translationEnabled EXPECTED TYPE: Boolean", null, null);
		}
		this.translationEnabled = translationEnabled;
		this.keyModified.set("translation_enabled", 1);

	}

	/**
	 * The method to get the street
	 * @returns {String} A String
	 */
	getStreet()	{
		return this.street;

	}

	/**
	 * The method to set the value to street
	 * @param {String} street A String
	 */
	setStreet(street)	{
		if((street != null) && (!(Object.prototype.toString.call(street) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: street EXPECTED TYPE: String", null, null);
		}
		this.street = street;
		this.keyModified.set("street", 1);

	}

	/**
	 * The method to get the alias
	 * @returns {String} A String
	 */
	getAlias()	{
		return this.alias;

	}

	/**
	 * The method to set the value to alias
	 * @param {String} alias A String
	 */
	setAlias(alias)	{
		if((alias != null) && (!(Object.prototype.toString.call(alias) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: alias EXPECTED TYPE: String", null, null);
		}
		this.alias = alias;
		this.keyModified.set("alias", 1);

	}

	/**
	 * The method to get the currency
	 * @returns {String} A String
	 */
	getCurrency()	{
		return this.currency;

	}

	/**
	 * The method to set the value to currency
	 * @param {String} currency A String
	 */
	setCurrency(currency)	{
		if((currency != null) && (!(Object.prototype.toString.call(currency) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currency EXPECTED TYPE: String", null, null);
		}
		this.currency = currency;
		this.keyModified.set("currency", 1);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the state
	 * @returns {String} A String
	 */
	getState()	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param {String} state A String
	 */
	setState(state)	{
		if((state != null) && (!(Object.prototype.toString.call(state) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: state EXPECTED TYPE: String", null, null);
		}
		this.state = state;
		this.keyModified.set("state", 1);

	}

	/**
	 * The method to get the fax
	 * @returns {String} A String
	 */
	getFax()	{
		return this.fax;

	}

	/**
	 * The method to set the value to fax
	 * @param {String} fax A String
	 */
	setFax(fax)	{
		if((fax != null) && (!(Object.prototype.toString.call(fax) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fax EXPECTED TYPE: String", null, null);
		}
		this.fax = fax;
		this.keyModified.set("fax", 1);

	}

	/**
	 * The method to get the employeeCount
	 * @returns {String} A String
	 */
	getEmployeeCount()	{
		return this.employeeCount;

	}

	/**
	 * The method to set the value to employeeCount
	 * @param {String} employeeCount A String
	 */
	setEmployeeCount(employeeCount)	{
		if((employeeCount != null) && (!(Object.prototype.toString.call(employeeCount) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: employeeCount EXPECTED TYPE: String", null, null);
		}
		this.employeeCount = employeeCount;
		this.keyModified.set("employee_count", 1);

	}

	/**
	 * The method to get the zip
	 * @returns {String} A String
	 */
	getZip()	{
		return this.zip;

	}

	/**
	 * The method to set the value to zip
	 * @param {String} zip A String
	 */
	setZip(zip)	{
		if((zip != null) && (!(Object.prototype.toString.call(zip) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zip EXPECTED TYPE: String", null, null);
		}
		this.zip = zip;
		this.keyModified.set("zip", 1);

	}

	/**
	 * The method to get the website
	 * @returns {String} A String
	 */
	getWebsite()	{
		return this.website;

	}

	/**
	 * The method to set the value to website
	 * @param {String} website A String
	 */
	setWebsite(website)	{
		if((website != null) && (!(Object.prototype.toString.call(website) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: website EXPECTED TYPE: String", null, null);
		}
		this.website = website;
		this.keyModified.set("website", 1);

	}

	/**
	 * The method to get the currencySymbol
	 * @returns {String} A String
	 */
	getCurrencySymbol()	{
		return this.currencySymbol;

	}

	/**
	 * The method to set the value to currencySymbol
	 * @param {String} currencySymbol A String
	 */
	setCurrencySymbol(currencySymbol)	{
		if((currencySymbol != null) && (!(Object.prototype.toString.call(currencySymbol) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currencySymbol EXPECTED TYPE: String", null, null);
		}
		this.currencySymbol = currencySymbol;
		this.keyModified.set("currency_symbol", 1);

	}

	/**
	 * The method to get the mobile
	 * @returns {String} A String
	 */
	getMobile()	{
		return this.mobile;

	}

	/**
	 * The method to set the value to mobile
	 * @param {String} mobile A String
	 */
	setMobile(mobile)	{
		if((mobile != null) && (!(Object.prototype.toString.call(mobile) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mobile EXPECTED TYPE: String", null, null);
		}
		this.mobile = mobile;
		this.keyModified.set("mobile", 1);

	}

	/**
	 * The method to get the currencyLocale
	 * @returns {String} A String
	 */
	getCurrencyLocale()	{
		return this.currencyLocale;

	}

	/**
	 * The method to set the value to currencyLocale
	 * @param {String} currencyLocale A String
	 */
	setCurrencyLocale(currencyLocale)	{
		if((currencyLocale != null) && (!(Object.prototype.toString.call(currencyLocale) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currencyLocale EXPECTED TYPE: String", null, null);
		}
		this.currencyLocale = currencyLocale;
		this.keyModified.set("currency_locale", 1);

	}

	/**
	 * The method to get the primaryZuid
	 * @returns {String} A String
	 */
	getPrimaryZuid()	{
		return this.primaryZuid;

	}

	/**
	 * The method to set the value to primaryZuid
	 * @param {String} primaryZuid A String
	 */
	setPrimaryZuid(primaryZuid)	{
		if((primaryZuid != null) && (!(Object.prototype.toString.call(primaryZuid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: primaryZuid EXPECTED TYPE: String", null, null);
		}
		this.primaryZuid = primaryZuid;
		this.keyModified.set("primary_zuid", 1);

	}

	/**
	 * The method to get the ziaPortalId
	 * @returns {String} A String
	 */
	getZiaPortalId()	{
		return this.ziaPortalId;

	}

	/**
	 * The method to set the value to ziaPortalId
	 * @param {String} ziaPortalId A String
	 */
	setZiaPortalId(ziaPortalId)	{
		if((ziaPortalId != null) && (!(Object.prototype.toString.call(ziaPortalId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: ziaPortalId EXPECTED TYPE: String", null, null);
		}
		this.ziaPortalId = ziaPortalId;
		this.keyModified.set("zia_portal_id", 1);

	}

	/**
	 * The method to get the timeZone
	 * @returns {String} A String
	 */
	getTimeZone()	{
		return this.timeZone;

	}

	/**
	 * The method to set the value to timeZone
	 * @param {String} timeZone A String
	 */
	setTimeZone(timeZone)	{
		if((timeZone != null) && (!(Object.prototype.toString.call(timeZone) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: timeZone EXPECTED TYPE: String", null, null);
		}
		this.timeZone = timeZone;
		this.keyModified.set("time_zone", 1);

	}

	/**
	 * The method to get the zgid
	 * @returns {String} A String
	 */
	getZgid()	{
		return this.zgid;

	}

	/**
	 * The method to set the value to zgid
	 * @param {String} zgid A String
	 */
	setZgid(zgid)	{
		if((zgid != null) && (!(Object.prototype.toString.call(zgid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zgid EXPECTED TYPE: String", null, null);
		}
		this.zgid = zgid;
		this.keyModified.set("zgid", 1);

	}

	/**
	 * The method to get the countryCode
	 * @returns {String} A String
	 */
	getCountryCode()	{
		return this.countryCode;

	}

	/**
	 * The method to set the value to countryCode
	 * @param {String} countryCode A String
	 */
	setCountryCode(countryCode)	{
		if((countryCode != null) && (!(Object.prototype.toString.call(countryCode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: countryCode EXPECTED TYPE: String", null, null);
		}
		this.countryCode = countryCode;
		this.keyModified.set("country_code", 1);

	}

	/**
	 * The method to get the licenseDetails
	 * @returns {LicenseDetails} An instance of LicenseDetails
	 */
	getLicenseDetails()	{
		return this.licenseDetails;

	}

	/**
	 * The method to set the value to licenseDetails
	 * @param {LicenseDetails} licenseDetails An instance of LicenseDetails
	 */
	setLicenseDetails(licenseDetails)	{
		const LicenseDetails = require("./license_details").MasterModel;
		if((licenseDetails != null) && (!(licenseDetails instanceof LicenseDetails)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: licenseDetails EXPECTED TYPE: LicenseDetails", null, null);
		}
		this.licenseDetails = licenseDetails;
		this.keyModified.set("license_details", 1);

	}

	/**
	 * The method to get the phone
	 * @returns {String} A String
	 */
	getPhone()	{
		return this.phone;

	}

	/**
	 * The method to set the value to phone
	 * @param {String} phone A String
	 */
	setPhone(phone)	{
		if((phone != null) && (!(Object.prototype.toString.call(phone) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: phone EXPECTED TYPE: String", null, null);
		}
		this.phone = phone;
		this.keyModified.set("phone", 1);

	}

	/**
	 * The method to get the companyName
	 * @returns {String} A String
	 */
	getCompanyName()	{
		return this.companyName;

	}

	/**
	 * The method to set the value to companyName
	 * @param {String} companyName A String
	 */
	setCompanyName(companyName)	{
		if((companyName != null) && (!(Object.prototype.toString.call(companyName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: companyName EXPECTED TYPE: String", null, null);
		}
		this.companyName = companyName;
		this.keyModified.set("company_name", 1);

	}

	/**
	 * The method to get the privacySettings
	 * @returns {Boolean} A Boolean
	 */
	getPrivacySettings()	{
		return this.privacySettings;

	}

	/**
	 * The method to set the value to privacySettings
	 * @param {Boolean} privacySettings A Boolean
	 */
	setPrivacySettings(privacySettings)	{
		if((privacySettings != null) && (!(Object.prototype.toString.call(privacySettings) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: privacySettings EXPECTED TYPE: Boolean", null, null);
		}
		this.privacySettings = privacySettings;
		this.keyModified.set("privacy_settings", 1);

	}

	/**
	 * The method to get the primaryEmail
	 * @returns {String} A String
	 */
	getPrimaryEmail()	{
		return this.primaryEmail;

	}

	/**
	 * The method to set the value to primaryEmail
	 * @param {String} primaryEmail A String
	 */
	setPrimaryEmail(primaryEmail)	{
		if((primaryEmail != null) && (!(Object.prototype.toString.call(primaryEmail) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: primaryEmail EXPECTED TYPE: String", null, null);
		}
		this.primaryEmail = primaryEmail;
		this.keyModified.set("primary_email", 1);

	}

	/**
	 * The method to get the isoCode
	 * @returns {String} A String
	 */
	getIsoCode()	{
		return this.isoCode;

	}

	/**
	 * The method to set the value to isoCode
	 * @param {String} isoCode A String
	 */
	setIsoCode(isoCode)	{
		if((isoCode != null) && (!(Object.prototype.toString.call(isoCode) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isoCode EXPECTED TYPE: String", null, null);
		}
		this.isoCode = isoCode;
		this.keyModified.set("iso_code", 1);

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
	MasterModel : Org,
	Org : Org
}
