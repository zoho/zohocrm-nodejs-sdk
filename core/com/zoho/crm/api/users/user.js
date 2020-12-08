const Record = require("../record/record").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class User extends Record{

	/**
	 * The method to get the country
	 * @returns {String} A String
	 */
	getCountry()	{
		return this.getKeyValue("country");

	}

	/**
	 * The method to set the value to country
	 * @param {String} country A String
	 */
	setCountry(country)	{
		if((country != null) && (!(Object.prototype.toString.call(country) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: country EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("country", country);

	}

	/**
	 * The method to get the customizeInfo
	 * @returns {CustomizeInfo} An instance of CustomizeInfo
	 */
	getCustomizeInfo()	{
		return this.getKeyValue("customize_info");

	}

	/**
	 * The method to set the value to customizeInfo
	 * @param {CustomizeInfo} customizeInfo An instance of CustomizeInfo
	 */
	setCustomizeInfo(customizeInfo)	{
		const CustomizeInfo = require("./customize_info").MasterModel;
		if((customizeInfo != null) && (!(customizeInfo instanceof CustomizeInfo)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customizeInfo EXPECTED TYPE: CustomizeInfo", null, null);
		}
		this.addKeyValue("customize_info", customizeInfo);

	}

	/**
	 * The method to get the role
	 * @returns {Role} An instance of Role
	 */
	getRole()	{
		return this.getKeyValue("role");

	}

	/**
	 * The method to set the value to role
	 * @param {Role} role An instance of Role
	 */
	setRole(role)	{
		const Role = require("../roles/role").MasterModel;
		if((role != null) && (!(role instanceof Role)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: role EXPECTED TYPE: Role", null, null);
		}
		this.addKeyValue("role", role);

	}

	/**
	 * The method to get the signature
	 * @returns {String} A String
	 */
	getSignature()	{
		return this.getKeyValue("signature");

	}

	/**
	 * The method to set the value to signature
	 * @param {String} signature A String
	 */
	setSignature(signature)	{
		if((signature != null) && (!(Object.prototype.toString.call(signature) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: signature EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("signature", signature);

	}

	/**
	 * The method to get the city
	 * @returns {String} A String
	 */
	getCity()	{
		return this.getKeyValue("city");

	}

	/**
	 * The method to set the value to city
	 * @param {String} city A String
	 */
	setCity(city)	{
		if((city != null) && (!(Object.prototype.toString.call(city) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: city EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("city", city);

	}

	/**
	 * The method to get the nameFormat
	 * @returns {String} A String
	 */
	getNameFormat()	{
		return this.getKeyValue("name_format");

	}

	/**
	 * The method to set the value to nameFormat
	 * @param {String} nameFormat A String
	 */
	setNameFormat(nameFormat)	{
		if((nameFormat != null) && (!(Object.prototype.toString.call(nameFormat) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: nameFormat EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("name_format", nameFormat);

	}

	/**
	 * The method to get the personalAccount
	 * @returns {Boolean} A Boolean
	 */
	getPersonalAccount()	{
		return this.getKeyValue("personal_account");

	}

	/**
	 * The method to set the value to personalAccount
	 * @param {Boolean} personalAccount A Boolean
	 */
	setPersonalAccount(personalAccount)	{
		if((personalAccount != null) && (!(Object.prototype.toString.call(personalAccount) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: personalAccount EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("personal_account", personalAccount);

	}

	/**
	 * The method to get the defaultTabGroup
	 * @returns {String} A String
	 */
	getDefaultTabGroup()	{
		return this.getKeyValue("default_tab_group");

	}

	/**
	 * The method to set the value to defaultTabGroup
	 * @param {String} defaultTabGroup A String
	 */
	setDefaultTabGroup(defaultTabGroup)	{
		if((defaultTabGroup != null) && (!(Object.prototype.toString.call(defaultTabGroup) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultTabGroup EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("default_tab_group", defaultTabGroup);

	}

	/**
	 * The method to get the language
	 * @returns {String} A String
	 */
	getLanguage()	{
		return this.getKeyValue("language");

	}

	/**
	 * The method to set the value to language
	 * @param {String} language A String
	 */
	setLanguage(language)	{
		if((language != null) && (!(Object.prototype.toString.call(language) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: language EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("language", language);

	}

	/**
	 * The method to get the locale
	 * @returns {String} A String
	 */
	getLocale()	{
		return this.getKeyValue("locale");

	}

	/**
	 * The method to set the value to locale
	 * @param {String} locale A String
	 */
	setLocale(locale)	{
		if((locale != null) && (!(Object.prototype.toString.call(locale) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: locale EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("locale", locale);

	}

	/**
	 * The method to get the microsoft
	 * @returns {Boolean} A Boolean
	 */
	getMicrosoft()	{
		return this.getKeyValue("microsoft");

	}

	/**
	 * The method to set the value to microsoft
	 * @param {Boolean} microsoft A Boolean
	 */
	setMicrosoft(microsoft)	{
		if((microsoft != null) && (!(Object.prototype.toString.call(microsoft) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: microsoft EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("microsoft", microsoft);

	}

	/**
	 * The method to get the isonline
	 * @returns {Boolean} A Boolean
	 */
	getIsonline()	{
		return this.getKeyValue("Isonline");

	}

	/**
	 * The method to set the value to isonline
	 * @param {Boolean} isonline A Boolean
	 */
	setIsonline(isonline)	{
		if((isonline != null) && (!(Object.prototype.toString.call(isonline) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isonline EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("Isonline", isonline);

	}

	/**
	 * The method to get the street
	 * @returns {String} A String
	 */
	getStreet()	{
		return this.getKeyValue("street");

	}

	/**
	 * The method to set the value to street
	 * @param {String} street A String
	 */
	setStreet(street)	{
		if((street != null) && (!(Object.prototype.toString.call(street) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: street EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("street", street);

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
	 * The method to get the alias
	 * @returns {String} A String
	 */
	getAlias()	{
		return this.getKeyValue("alias");

	}

	/**
	 * The method to set the value to alias
	 * @param {String} alias A String
	 */
	setAlias(alias)	{
		if((alias != null) && (!(Object.prototype.toString.call(alias) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: alias EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("alias", alias);

	}

	/**
	 * The method to get the theme
	 * @returns {Theme} An instance of Theme
	 */
	getTheme()	{
		return this.getKeyValue("theme");

	}

	/**
	 * The method to set the value to theme
	 * @param {Theme} theme An instance of Theme
	 */
	setTheme(theme)	{
		const Theme = require("./theme").MasterModel;
		if((theme != null) && (!(theme instanceof Theme)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: theme EXPECTED TYPE: Theme", null, null);
		}
		this.addKeyValue("theme", theme);

	}

	/**
	 * The method to get the state
	 * @returns {String} A String
	 */
	getState()	{
		return this.getKeyValue("state");

	}

	/**
	 * The method to set the value to state
	 * @param {String} state A String
	 */
	setState(state)	{
		if((state != null) && (!(Object.prototype.toString.call(state) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: state EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("state", state);

	}

	/**
	 * The method to get the fax
	 * @returns {String} A String
	 */
	getFax()	{
		return this.getKeyValue("fax");

	}

	/**
	 * The method to set the value to fax
	 * @param {String} fax A String
	 */
	setFax(fax)	{
		if((fax != null) && (!(Object.prototype.toString.call(fax) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fax EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("fax", fax);

	}

	/**
	 * The method to get the countryLocale
	 * @returns {String} A String
	 */
	getCountryLocale()	{
		return this.getKeyValue("country_locale");

	}

	/**
	 * The method to set the value to countryLocale
	 * @param {String} countryLocale A String
	 */
	setCountryLocale(countryLocale)	{
		if((countryLocale != null) && (!(Object.prototype.toString.call(countryLocale) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: countryLocale EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("country_locale", countryLocale);

	}

	/**
	 * The method to get the firstName
	 * @returns {String} A String
	 */
	getFirstName()	{
		return this.getKeyValue("first_name");

	}

	/**
	 * The method to set the value to firstName
	 * @param {String} firstName A String
	 */
	setFirstName(firstName)	{
		if((firstName != null) && (!(Object.prototype.toString.call(firstName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: firstName EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("first_name", firstName);

	}

	/**
	 * The method to get the email
	 * @returns {String} A String
	 */
	getEmail()	{
		return this.getKeyValue("email");

	}

	/**
	 * The method to set the value to email
	 * @param {String} email A String
	 */
	setEmail(email)	{
		if((email != null) && (!(Object.prototype.toString.call(email) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: email EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("email", email);

	}

	/**
	 * The method to get the reportingTo
	 * @returns {User} An instance of User
	 */
	getReportingTo()	{
		return this.getKeyValue("Reporting_To");

	}

	/**
	 * The method to set the value to reportingTo
	 * @param {User} reportingTo An instance of User
	 */
	setReportingTo(reportingTo)	{
		if((reportingTo != null) && (!(reportingTo instanceof User)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: reportingTo EXPECTED TYPE: User", null, null);
		}
		this.addKeyValue("Reporting_To", reportingTo);

	}

	/**
	 * The method to get the decimalSeparator
	 * @returns {String} A String
	 */
	getDecimalSeparator()	{
		return this.getKeyValue("decimal_separator");

	}

	/**
	 * The method to set the value to decimalSeparator
	 * @param {String} decimalSeparator A String
	 */
	setDecimalSeparator(decimalSeparator)	{
		if((decimalSeparator != null) && (!(Object.prototype.toString.call(decimalSeparator) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalSeparator EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("decimal_separator", decimalSeparator);

	}

	/**
	 * The method to get the zip
	 * @returns {String} A String
	 */
	getZip()	{
		return this.getKeyValue("zip");

	}

	/**
	 * The method to set the value to zip
	 * @param {String} zip A String
	 */
	setZip(zip)	{
		if((zip != null) && (!(Object.prototype.toString.call(zip) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zip EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("zip", zip);

	}

	/**
	 * The method to get the website
	 * @returns {String} A String
	 */
	getWebsite()	{
		return this.getKeyValue("website");

	}

	/**
	 * The method to set the value to website
	 * @param {String} website A String
	 */
	setWebsite(website)	{
		if((website != null) && (!(Object.prototype.toString.call(website) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: website EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("website", website);

	}

	/**
	 * The method to get the timeFormat
	 * @returns {String} A String
	 */
	getTimeFormat()	{
		return this.getKeyValue("time_format");

	}

	/**
	 * The method to set the value to timeFormat
	 * @param {String} timeFormat A String
	 */
	setTimeFormat(timeFormat)	{
		if((timeFormat != null) && (!(Object.prototype.toString.call(timeFormat) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: timeFormat EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("time_format", timeFormat);

	}

	/**
	 * The method to get the offset
	 * @returns {BigInt} A BigInt
	 */
	getOffset()	{
		return this.getKeyValue("offset");

	}

	/**
	 * The method to set the value to offset
	 * @param {BigInt} offset A BigInt
	 */
	setOffset(offset)	{
		if((offset != null) && (!(Object.prototype.toString.call(offset) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: offset EXPECTED TYPE: BigInt", null, null);
		}
		this.addKeyValue("offset", offset);

	}

	/**
	 * The method to get the profile
	 * @returns {Profile} An instance of Profile
	 */
	getProfile()	{
		return this.getKeyValue("profile");

	}

	/**
	 * The method to set the value to profile
	 * @param {Profile} profile An instance of Profile
	 */
	setProfile(profile)	{
		const Profile = require("../profiles/profile").MasterModel;
		if((profile != null) && (!(profile instanceof Profile)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: profile EXPECTED TYPE: Profile", null, null);
		}
		this.addKeyValue("profile", profile);

	}

	/**
	 * The method to get the mobile
	 * @returns {String} A String
	 */
	getMobile()	{
		return this.getKeyValue("mobile");

	}

	/**
	 * The method to set the value to mobile
	 * @param {String} mobile A String
	 */
	setMobile(mobile)	{
		if((mobile != null) && (!(Object.prototype.toString.call(mobile) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mobile EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("mobile", mobile);

	}

	/**
	 * The method to get the lastName
	 * @returns {String} A String
	 */
	getLastName()	{
		return this.getKeyValue("last_name");

	}

	/**
	 * The method to set the value to lastName
	 * @param {String} lastName A String
	 */
	setLastName(lastName)	{
		if((lastName != null) && (!(Object.prototype.toString.call(lastName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lastName EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("last_name", lastName);

	}

	/**
	 * The method to get the timeZone
	 * @returns {String} A String
	 */
	getTimeZone()	{
		return this.getKeyValue("time_zone");

	}

	/**
	 * The method to set the value to timeZone
	 * @param {String} timeZone A String
	 */
	setTimeZone(timeZone)	{
		if((timeZone != null) && (!(Object.prototype.toString.call(timeZone) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: timeZone EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("time_zone", timeZone);

	}

	/**
	 * The method to get the zuid
	 * @returns {String} A String
	 */
	getZuid()	{
		return this.getKeyValue("zuid");

	}

	/**
	 * The method to set the value to zuid
	 * @param {String} zuid A String
	 */
	setZuid(zuid)	{
		if((zuid != null) && (!(Object.prototype.toString.call(zuid) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: zuid EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("zuid", zuid);

	}

	/**
	 * The method to get the confirm
	 * @returns {Boolean} A Boolean
	 */
	getConfirm()	{
		return this.getKeyValue("confirm");

	}

	/**
	 * The method to set the value to confirm
	 * @param {Boolean} confirm A Boolean
	 */
	setConfirm(confirm)	{
		if((confirm != null) && (!(Object.prototype.toString.call(confirm) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: confirm EXPECTED TYPE: Boolean", null, null);
		}
		this.addKeyValue("confirm", confirm);

	}

	/**
	 * The method to get the fullName
	 * @returns {String} A String
	 */
	getFullName()	{
		return this.getKeyValue("full_name");

	}

	/**
	 * The method to set the value to fullName
	 * @param {String} fullName A String
	 */
	setFullName(fullName)	{
		if((fullName != null) && (!(Object.prototype.toString.call(fullName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fullName EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("full_name", fullName);

	}

	/**
	 * The method to get the territories
	 * @returns {Array} An Array
	 */
	getTerritories()	{
		return this.getKeyValue("territories");

	}

	/**
	 * The method to set the value to territories
	 * @param {Array} territories An Array
	 */
	setTerritories(territories)	{
		if((territories != null) && (!(Object.prototype.toString.call(territories) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: territories EXPECTED TYPE: Array", null, null);
		}
		this.addKeyValue("territories", territories);

	}

	/**
	 * The method to get the phone
	 * @returns {String} A String
	 */
	getPhone()	{
		return this.getKeyValue("phone");

	}

	/**
	 * The method to set the value to phone
	 * @param {String} phone A String
	 */
	setPhone(phone)	{
		if((phone != null) && (!(Object.prototype.toString.call(phone) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: phone EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("phone", phone);

	}

	/**
	 * The method to get the dob
	 * @returns {String} A String
	 */
	getDob()	{
		return this.getKeyValue("dob");

	}

	/**
	 * The method to set the value to dob
	 * @param {String} dob A String
	 */
	setDob(dob)	{
		if((dob != null) && (!(Object.prototype.toString.call(dob) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dob EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("dob", dob);

	}

	/**
	 * The method to get the dateFormat
	 * @returns {String} A String
	 */
	getDateFormat()	{
		return this.getKeyValue("date_format");

	}

	/**
	 * The method to set the value to dateFormat
	 * @param {String} dateFormat A String
	 */
	setDateFormat(dateFormat)	{
		if((dateFormat != null) && (!(Object.prototype.toString.call(dateFormat) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dateFormat EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("date_format", dateFormat);

	}

	/**
	 * The method to get the status
	 * @returns {String} A String
	 */
	getStatus()	{
		return this.getKeyValue("status");

	}

	/**
	 * The method to set the value to status
	 * @param {String} status A String
	 */
	setStatus(status)	{
		if((status != null) && (!(Object.prototype.toString.call(status) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: status EXPECTED TYPE: String", null, null);
		}
		this.addKeyValue("status", status);

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
	MasterModel : User,
	User : User
}
