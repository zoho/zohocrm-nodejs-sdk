const fs = require("fs");
const Constants = require("../../utils/util/constants").Constants;
const got = require("got");
const Logger = require("winston");
const tunnel = require("tunnel");
const Initializer = require("../initializer").Initializer;

/**
 * This module is to make HTTP connections, trigger the requests and receive the response
 */
class APIHTTPConnector{

	url;

	requestMethod;

	headers = new Map();

	parameters = new Map();

	requestBody = {};

	contentType;

	/**
	 * This is a getter method to get the ContentType.
	 * @returns A String representing the ContentType.
	 */
	get contentType() {
		return this.contentType;
	}

	/**
	 * This is a setter method to set the ContentType.
	 * @param {string} contentType A String containing the ContentType.
	 */
	set contentType(contentType) {
		this.contentType = contentType;
	}

	/**
	 * This is a setter method to set the API URL.
	 * @param {string} url A String containing the API Request URL.
	 */
	set url(url) {
		this.url = url;
	}

	/**
	 * This is a setter method to set the API request method.
	 * @param {string} httpMethod - A String containing the API request method.
	 */
	set requestMethod(httpMethod) {
		this.requestMethod = httpMethod;
	}

	/**
	 * This is a getter method to get API request headers.
	 * @returns A Map representing the API request headers.
	 */
	get headers() {
		return this.headers;
	}

	/**
	 * This is a setter method to set API request headers.
	 * @param {Map} headers - A Map containing the API request headers.
	 */
	set headers(headers) {
		this.headers = headers;
	}

	/**
	 * This is a setter method to set the API request body.
	 * @param {object} requestBody - A Object containing the API request body.
	 */
	set requestBody(requestBody) {
		this.requestBody = requestBody;
	}

	/**
	 * This is a getter method to get API request parameters.
	 * @returns A Map representing the API request parameters.
	 */
	get params() {
		return this.parameters;
	}

	/**
	 * This is a setter method to set API request parameters.
	 * @param {Map} params - A Map containing the API request parameters.
	 */
	set params(params) {
		this.parameters = params;
	}

	/**
	 * This method to add API request param name and value.
	 * @param {string} paramName - A String containing the API request param name.
	 * @param {string} paramValue - A String containing the API request param value.
	 */
	addParam(paramName, paramValue) {
		this.parameters.set(paramName, paramValue);
	}

	/**
	 * This method to add API request header name and value.
	 * @param {string} headerName - A String containing the API request header name.
	 * @param {string} headerValue - A String containing the API request header value.
	 */
	addHeader(headerName, headerValue) {
		this.headers.set(headerName, headerValue);
	}

	/**
	 * This method makes the Zoho CRM Rest API request.
	 * @param {object} converterInstance A Converter class instance to call appendToRequest method.
	 * @returns got instance or null
	 * 
	 */
	async fireRequest(converterInstance) {
		var apiHeaders = {};
		
		var modifiedRequestBody = "";

		if(this.contentType != null) {
			this.setContentTypeHeader();
		}

		if(this.headers) {
			this.headers.forEach(function(value, key) {
				apiHeaders[key] = value;
			});
		}

		if (this.parameters != null && this.parameters.size > 0) {
            this.setQueryParams(this.parameters);
		}

		if (Array.from(Object.keys(this.requestBody)).length > 0){
			modifiedRequestBody = await converterInstance.appendToRequest(this, null);
		}

		let initializer = await Initializer.getInitializer();

		var requestDetails = {
			method : this.requestMethod,
			headers : apiHeaders,
			body : modifiedRequestBody,
			encoding: "utf8",
			allowGetBody : true,
			throwHttpErrors : false
		};

		if(initializer.requestProxy != null) {
			let requestProxy = initializer.requestProxy;

			let proxyAuthorization = null;

			if(requestProxy.user != null) {
				proxyAuthorization = requestProxy.user + ":" + requestProxy.password;
			}

			let httpTunnel = tunnel.httpOverHttp({
				proxy : {
					host : requestProxy.host,
					port : requestProxy.port,
					proxyAuth : proxyAuthorization
				}
			});

			let httpsTunnel = tunnel.httpsOverHttp({
				proxy : {
					host : requestProxy.host,
					port : requestProxy.port,
					proxyAuth : proxyAuthorization
				}
			});

			let agents = {
				http : httpTunnel,
				https : httpsTunnel
			}

			requestDetails.agent = agents;

			Logger.info(this.proxyLog(requestProxy));
		}

		Logger.info(this.toString());

		return await got(this.url, requestDetails);
	}

	toString() {
		let headers = new Map(this.headers);

		headers.set(Constants.AUTHORIZATION, Constants.CANT_DISCLOSE);

		let headerMapString = JSON.stringify(headers, (key, value) => (value instanceof Map ? [...value] : value));

		let paramMapString = JSON.stringify(this.parameters, (key, value) => (value instanceof Map ? [...value] : value));

		return Constants.REQUEST_METHOD.concat(" = ").concat(this.requestMethod).concat(" , ").concat(Constants.URL).concat(" = ").concat(this.url).concat(" , ").concat(Constants.HEADERS).concat(" = ").concat(headerMapString).concat(" , ").concat(Constants.PARAMS).concat(" = ").concat(paramMapString).concat(".");
	}

	proxyLog(requestProxy) {
		let proxyDetails = Constants.PROXY_SETTINGS.concat(Constants.PROXY_HOST).concat(requestProxy.host).concat(" , ").concat(Constants.PROXY_PORT).concat(requestProxy.port.toString());

		if(requestProxy.user != null) {
			proxyDetails = proxyDetails.concat(" , ").concat(Constants.PROXY_USER).concat(requestProxy.user);
		}

		return proxyDetails;
	}

	setQueryParams(parameters) {
		var params;

		parameters.forEach(function(value, key) {
			if (parameters.has(key)) {
            	if (params) {
                	params = params + key + '=' + encodeURI(value) + '&';
            	}
            	else {
                	params = key + '=' + encodeURI(value) + '&';
				}
        	}
		});

    	this.url = this.url + '?' + params;
	}

	setContentTypeHeader() {
		for (let url of Constants.SET_TO_CONTENT_TYPE) {
			if(this.url.includes(url)) {
				this.headers.set(Constants.CONTENT_TYPE_HEADER, this.contentType);

				return;
			}	
		}
	}

}

module.exports = {APIHTTPConnector};
