const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class FileDetails{

	extn;
	isPreviewAvailable;
	downloadUrl;
	deleteUrl;
	entityId;
	mode;
	originalSizeByte;
	previewUrl;
	fileName;
	fileId;
	attachmentId;
	fileSize;
	creatorId;
	linkDocs;
	delete1;
	keyModified = new Map();
	/**
	 * The method to get the extn
	 * @returns {String} A String
	 */
	getExtn()	{
		return this.extn;

	}

	/**
	 * The method to set the value to extn
	 * @param {String} extn A String
	 */
	setExtn(extn)	{
		if((extn != null) && (!(Object.prototype.toString.call(extn) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: extn EXPECTED TYPE: String", null, null);
		}
		this.extn = extn;
		this.keyModified.set("extn", 1);

	}

	/**
	 * The method to get the isPreviewAvailable
	 * @returns {Boolean} A Boolean
	 */
	getIsPreviewAvailable()	{
		return this.isPreviewAvailable;

	}

	/**
	 * The method to set the value to isPreviewAvailable
	 * @param {Boolean} isPreviewAvailable A Boolean
	 */
	setIsPreviewAvailable(isPreviewAvailable)	{
		if((isPreviewAvailable != null) && (!(Object.prototype.toString.call(isPreviewAvailable) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: isPreviewAvailable EXPECTED TYPE: Boolean", null, null);
		}
		this.isPreviewAvailable = isPreviewAvailable;
		this.keyModified.set("is_Preview_Available", 1);

	}

	/**
	 * The method to get the downloadUrl
	 * @returns {String} A String
	 */
	getDownloadUrl()	{
		return this.downloadUrl;

	}

	/**
	 * The method to set the value to downloadUrl
	 * @param {String} downloadUrl A String
	 */
	setDownloadUrl(downloadUrl)	{
		if((downloadUrl != null) && (!(Object.prototype.toString.call(downloadUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: downloadUrl EXPECTED TYPE: String", null, null);
		}
		this.downloadUrl = downloadUrl;
		this.keyModified.set("download_Url", 1);

	}

	/**
	 * The method to get the deleteUrl
	 * @returns {String} A String
	 */
	getDeleteUrl()	{
		return this.deleteUrl;

	}

	/**
	 * The method to set the value to deleteUrl
	 * @param {String} deleteUrl A String
	 */
	setDeleteUrl(deleteUrl)	{
		if((deleteUrl != null) && (!(Object.prototype.toString.call(deleteUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deleteUrl EXPECTED TYPE: String", null, null);
		}
		this.deleteUrl = deleteUrl;
		this.keyModified.set("delete_Url", 1);

	}

	/**
	 * The method to get the entityId
	 * @returns {String} A String
	 */
	getEntityId()	{
		return this.entityId;

	}

	/**
	 * The method to set the value to entityId
	 * @param {String} entityId A String
	 */
	setEntityId(entityId)	{
		if((entityId != null) && (!(Object.prototype.toString.call(entityId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: entityId EXPECTED TYPE: String", null, null);
		}
		this.entityId = entityId;
		this.keyModified.set("entity_Id", 1);

	}

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
	 * The method to get the originalSizeByte
	 * @returns {String} A String
	 */
	getOriginalSizeByte()	{
		return this.originalSizeByte;

	}

	/**
	 * The method to set the value to originalSizeByte
	 * @param {String} originalSizeByte A String
	 */
	setOriginalSizeByte(originalSizeByte)	{
		if((originalSizeByte != null) && (!(Object.prototype.toString.call(originalSizeByte) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: originalSizeByte EXPECTED TYPE: String", null, null);
		}
		this.originalSizeByte = originalSizeByte;
		this.keyModified.set("original_Size_Byte", 1);

	}

	/**
	 * The method to get the previewUrl
	 * @returns {String} A String
	 */
	getPreviewUrl()	{
		return this.previewUrl;

	}

	/**
	 * The method to set the value to previewUrl
	 * @param {String} previewUrl A String
	 */
	setPreviewUrl(previewUrl)	{
		if((previewUrl != null) && (!(Object.prototype.toString.call(previewUrl) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: previewUrl EXPECTED TYPE: String", null, null);
		}
		this.previewUrl = previewUrl;
		this.keyModified.set("preview_Url", 1);

	}

	/**
	 * The method to get the fileName
	 * @returns {String} A String
	 */
	getFileName()	{
		return this.fileName;

	}

	/**
	 * The method to set the value to fileName
	 * @param {String} fileName A String
	 */
	setFileName(fileName)	{
		if((fileName != null) && (!(Object.prototype.toString.call(fileName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileName EXPECTED TYPE: String", null, null);
		}
		this.fileName = fileName;
		this.keyModified.set("file_Name", 1);

	}

	/**
	 * The method to get the fileId
	 * @returns {String} A String
	 */
	getFileId()	{
		return this.fileId;

	}

	/**
	 * The method to set the value to fileId
	 * @param {String} fileId A String
	 */
	setFileId(fileId)	{
		if((fileId != null) && (!(Object.prototype.toString.call(fileId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileId EXPECTED TYPE: String", null, null);
		}
		this.fileId = fileId;
		this.keyModified.set("file_Id", 1);

	}

	/**
	 * The method to get the attachmentId
	 * @returns {String} A String
	 */
	getAttachmentId()	{
		return this.attachmentId;

	}

	/**
	 * The method to set the value to attachmentId
	 * @param {String} attachmentId A String
	 */
	setAttachmentId(attachmentId)	{
		if((attachmentId != null) && (!(Object.prototype.toString.call(attachmentId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: attachmentId EXPECTED TYPE: String", null, null);
		}
		this.attachmentId = attachmentId;
		this.keyModified.set("attachment_Id", 1);

	}

	/**
	 * The method to get the fileSize
	 * @returns {String} A String
	 */
	getFileSize()	{
		return this.fileSize;

	}

	/**
	 * The method to set the value to fileSize
	 * @param {String} fileSize A String
	 */
	setFileSize(fileSize)	{
		if((fileSize != null) && (!(Object.prototype.toString.call(fileSize) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fileSize EXPECTED TYPE: String", null, null);
		}
		this.fileSize = fileSize;
		this.keyModified.set("file_Size", 1);

	}

	/**
	 * The method to get the creatorId
	 * @returns {String} A String
	 */
	getCreatorId()	{
		return this.creatorId;

	}

	/**
	 * The method to set the value to creatorId
	 * @param {String} creatorId A String
	 */
	setCreatorId(creatorId)	{
		if((creatorId != null) && (!(Object.prototype.toString.call(creatorId) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: creatorId EXPECTED TYPE: String", null, null);
		}
		this.creatorId = creatorId;
		this.keyModified.set("creator_Id", 1);

	}

	/**
	 * The method to get the linkDocs
	 * @returns {Integer} An Integer
	 */
	getLinkDocs()	{
		return this.linkDocs;

	}

	/**
	 * The method to set the value to linkDocs
	 * @param {Integer} linkDocs An Integer
	 */
	setLinkDocs(linkDocs)	{
		if((linkDocs != null) && (!(Object.prototype.toString.call(linkDocs) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: linkDocs EXPECTED TYPE: Integer", null, null);
		}
		this.linkDocs = linkDocs;
		this.keyModified.set("link_Docs", 1);

	}

	/**
	 * The method to get the delete
	 * @returns {String} A String
	 */
	getDelete()	{
		return this.delete1;

	}

	/**
	 * The method to set the value to delete
	 * @param {String} delete1 A String
	 */
	setDelete(delete1)	{
		if((delete1 != null) && (!(Object.prototype.toString.call(delete1) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: delete1 EXPECTED TYPE: String", null, null);
		}
		this.delete1 = delete1;
		this.keyModified.set("_delete", 1);

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
	MasterModel : FileDetails,
	FileDetails : FileDetails
}
