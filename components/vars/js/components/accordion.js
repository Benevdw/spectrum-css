const darkest = require('../darkest.js');
const staticAliases = require('../staticAliases.js');
const large = require('../large.js');
const fontGlobals = require('../fontGlobals.js');
exports["border-color"] = darkest["gray-300"];
exports["icon-color"] = darkest["gray-600"];
exports["text-color"] = darkest["gray-700"];
exports["icon-color-hover"] = darkest["gray-800"];
exports["text-color-hover"] = darkest["gray-900"];
exports["background-color-hover"] = darkest["gray-200"];
exports["icon-color-down"] = darkest["gray-800"];
exports["text-color-down"] = darkest["gray-900"];
exports["item-border-size-key-focus"] = "2px";
exports["item-border-left-size-key-focus"] = staticAliases["border-size-thick"];
exports["border-left-color-key-focus"] = darkest["border-color-focus"];
exports["item-border-left-color-key-focus"] = darkest["border-color-focus"];
exports["icon-color-key-focus"] = darkest["gray-800"];
exports["text-color-key-focus"] = darkest["gray-900"];
exports["icon-color-disabled"] = darkest["gray-400"];
exports["text-color-disabled"] = darkest["gray-500"];
exports["item-height"] = "40px";
exports["item-padding"] = "16px";
exports["item-padding-x"] = large["size-225"];
exports["item-border-size"] = staticAliases["border-size-thin"];
exports["icon-spacing"] = "16px";
exports["icon-gap"] = large["size-100"];
exports["icon-width"] = large["size-75"];
exports["icon-height"] = large["size-125"];
exports["item-title-text-size"] = large["font-size-50"];
exports["item-title-tracking"] = fontGlobals["letter-spacing-medium"];
exports["item-content-padding"] = large["size-200"];