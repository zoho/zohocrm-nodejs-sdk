const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class CustomizeInfo{

	notesDesc;
	showRightPanel;
	bcView;
	showHome;
	showDetailView;
	unpinRecentItem;
	keyModified = new Map();
	/**
	 * The method to get the notesDesc
	 * @returns {Boolean} A Boolean
	 */
	getNotesDesc()	{
		return this.notesDesc;

	}

	/**
	 * The method to set the value to notesDesc
	 * @param {Boolean} notesDesc A Boolean
	 */
	setNotesDesc(notesDesc)	{
		if((notesDesc != null) && (!(Object.prototype.toString.call(notesDesc) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notesDesc EXPECTED TYPE: Boolean", null, null);
		}
		this.notesDesc = notesDesc;
		this.keyModified.set("notes_desc", 1);

	}

	/**
	 * The method to get the showRightPanel
	 * @returns {String} A String
	 */
	getShowRightPanel()	{
		return this.showRightPanel;

	}

	/**
	 * The method to set the value to showRightPanel
	 * @param {String} showRightPanel A String
	 */
	setShowRightPanel(showRightPanel)	{
		if((showRightPanel != null) && (!(Object.prototype.toString.call(showRightPanel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showRightPanel EXPECTED TYPE: String", null, null);
		}
		this.showRightPanel = showRightPanel;
		this.keyModified.set("show_right_panel", 1);

	}

	/**
	 * The method to get the bcView
	 * @returns {String} A String
	 */
	getBcView()	{
		return this.bcView;

	}

	/**
	 * The method to set the value to bcView
	 * @param {String} bcView A String
	 */
	setBcView(bcView)	{
		if((bcView != null) && (!(Object.prototype.toString.call(bcView) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: bcView EXPECTED TYPE: String", null, null);
		}
		this.bcView = bcView;
		this.keyModified.set("bc_view", 1);

	}

	/**
	 * The method to get the showHome
	 * @returns {Boolean} A Boolean
	 */
	getShowHome()	{
		return this.showHome;

	}

	/**
	 * The method to set the value to showHome
	 * @param {Boolean} showHome A Boolean
	 */
	setShowHome(showHome)	{
		if((showHome != null) && (!(Object.prototype.toString.call(showHome) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showHome EXPECTED TYPE: Boolean", null, null);
		}
		this.showHome = showHome;
		this.keyModified.set("show_home", 1);

	}

	/**
	 * The method to get the showDetailView
	 * @returns {Boolean} A Boolean
	 */
	getShowDetailView()	{
		return this.showDetailView;

	}

	/**
	 * The method to set the value to showDetailView
	 * @param {Boolean} showDetailView A Boolean
	 */
	setShowDetailView(showDetailView)	{
		if((showDetailView != null) && (!(Object.prototype.toString.call(showDetailView) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: showDetailView EXPECTED TYPE: Boolean", null, null);
		}
		this.showDetailView = showDetailView;
		this.keyModified.set("show_detail_view", 1);

	}

	/**
	 * The method to get the unpinRecentItem
	 * @returns {String} A String
	 */
	getUnpinRecentItem()	{
		return this.unpinRecentItem;

	}

	/**
	 * The method to set the value to unpinRecentItem
	 * @param {String} unpinRecentItem A String
	 */
	setUnpinRecentItem(unpinRecentItem)	{
		if((unpinRecentItem != null) && (!(Object.prototype.toString.call(unpinRecentItem) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unpinRecentItem EXPECTED TYPE: String", null, null);
		}
		this.unpinRecentItem = unpinRecentItem;
		this.keyModified.set("unpin_recent_item", 1);

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
	MasterModel : CustomizeInfo,
	CustomizeInfo : CustomizeInfo
}
