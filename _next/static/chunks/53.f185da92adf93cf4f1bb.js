(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{cVtO:function(e,s){const n=[{name:"Miller Columns",examples:[{id:"miller-column",name:"Miller Columns (Branches Selectable)",description:"Miller columns that allow both files and folders to be selected.",markup:'<div class="spectrum-MillerColumns">\n  <div class="spectrum-MillerColumns-item">\n    <ul class="spectrum-AssetList">\n      <li class="spectrum-AssetList-item is-branch is-selectable" tabindex="0">\n        <label class="spectrum-Checkbox spectrum-AssetList-itemSelector">\n          <input type="checkbox" class="spectrum-Checkbox-input" id="checkbox-0">\n          <span class="spectrum-Checkbox-box">\n            <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">\n              <use xlink:href="#spectrum-css-icon-CheckmarkSmall" />\n            </svg>\n          </span>\n        </label>\n        <span class="spectrum-AssetList-itemLabel">File 1</span>\n        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-AssetList-itemChildIndicator" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />\n        </svg>\n      </li>\n      <li class="spectrum-AssetList-item is-branch is-selectable is-selected" tabindex="0">\n        <label class="spectrum-Checkbox spectrum-AssetList-itemSelector">\n          <input type="checkbox" class="spectrum-Checkbox-input" id="checkbox-1" checked>\n          <span class="spectrum-Checkbox-box">\n            <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">\n              <use xlink:href="#spectrum-css-icon-CheckmarkSmall" />\n            </svg>\n          </span>\n        </label>\n        <span class="spectrum-AssetList-itemLabel">File 2</span>\n        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-AssetList-itemChildIndicator" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />\n        </svg>\n      </li>\n      <li class="spectrum-AssetList-item is-branch is-selectable" tabindex="0">\n        <label class="spectrum-Checkbox spectrum-AssetList-itemSelector">\n          <input type="checkbox" class="spectrum-Checkbox-input" id="checkbox-2">\n          <span class="spectrum-Checkbox-box">\n            <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">\n              <use xlink:href="#spectrum-css-icon-CheckmarkSmall" />\n            </svg>\n          </span>\n        </label>\n        <img src="img/example-ava.jpg" class="spectrum-AssetList-itemThumbnail">\n        <span class="spectrum-AssetList-itemLabel">File 3</span>\n        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-AssetList-itemChildIndicator" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />\n        </svg>\n      </li>\n    </ul>\n  </div>\n  <div class="spectrum-MillerColumns-item">\n    <ul class="spectrum-AssetList">\n      <li class="spectrum-AssetList-item is-branch is-selectable" tabindex="0">\n        <label class="spectrum-Checkbox spectrum-AssetList-itemSelector">\n          <input type="checkbox" class="spectrum-Checkbox-input" id="checkbox-0">\n          <span class="spectrum-Checkbox-box">\n            <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">\n              <use xlink:href="#spectrum-css-icon-CheckmarkSmall" />\n            </svg>\n          </span>\n        </label>\n        <span class="spectrum-AssetList-itemLabel">File 1</span>\n        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-AssetList-itemChildIndicator" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />\n        </svg>\n      </li>\n      <li class="spectrum-AssetList-item is-selectable is-selected" tabindex="0">\n        <label class="spectrum-Checkbox spectrum-AssetList-itemSelector">\n          <input type="checkbox" class="spectrum-Checkbox-input" id="checkbox-1" checked>\n          <span class="spectrum-Checkbox-box">\n            <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">\n              <use xlink:href="#spectrum-css-icon-CheckmarkSmall" />\n            </svg>\n          </span>\n        </label>\n        <span class="spectrum-AssetList-itemLabel">File 2</span>\n        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-AssetList-itemChildIndicator" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />\n        </svg>\n      </li>\n      <li class="spectrum-AssetList-item is-selectable is-selected" tabindex="0">\n        <label class="spectrum-Checkbox spectrum-AssetList-itemSelector">\n          <input type="checkbox" class="spectrum-Checkbox-input" id="checkbox-2" checked>\n          <span class="spectrum-Checkbox-box">\n            <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">\n              <use xlink:href="#spectrum-css-icon-CheckmarkSmall" />\n            </svg>\n          </span>\n        </label>\n        <img src="img/example-ava.jpg" class="spectrum-AssetList-itemThumbnail">\n        <span class="spectrum-AssetList-itemLabel">File 3</span>\n        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-AssetList-itemChildIndicator" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />\n        </svg>\n      </li>\n    </ul>\n  </div>\n</div>\n'},{id:"miller-column",name:"Miller Columns (Files Selectable)",description:"Miller columns that only allow files to be selected.",markup:'<div class="spectrum-MillerColumns">\n  <div class="spectrum-MillerColumns-item">\n    <ul class="spectrum-AssetList">\n      <li class="spectrum-AssetList-item is-branch" tabindex="0">\n        <span class="spectrum-AssetList-itemLabel">File 1</span>\n        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-AssetList-itemChildIndicator" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />\n        </svg>\n      </li>\n      <li class="spectrum-AssetList-item" tabindex="0">\n        <span class="spectrum-AssetList-itemLabel">File 2</span>\n        <label class="spectrum-Checkbox spectrum-AssetList-itemSelector">\n          <input type="checkbox" class="spectrum-Checkbox-input" id="checkbox-1">\n          <span class="spectrum-Checkbox-box">\n            <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">\n              <use xlink:href="#spectrum-css-icon-CheckmarkSmall" />\n            </svg>\n          </span>\n        </label>\n        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-AssetList-itemChildIndicator" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />\n        </svg>\n      </li>\n      <li class="spectrum-AssetList-item is-navigated is-branch" tabindex="0">\n        <img src="img/example-ava.jpg" class="spectrum-AssetList-itemThumbnail">\n        <span class="spectrum-AssetList-itemLabel">File 3</span></span>\n\n        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-AssetList-itemChildIndicator" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />\n        </svg>\n      </li>\n    </ul>\n  </div>\n\n  <div class="spectrum-MillerColumns-item">\n    <ul class="spectrum-AssetList">\n      <li class="spectrum-AssetList-item is-branch" tabindex="0">\n        <span class="spectrum-AssetList-itemLabel">File 1</span>\n        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-AssetList-itemChildIndicator" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />\n        </svg>\n      </li>\n      <li class="spectrum-AssetList-item" tabindex="0">\n        <span class="spectrum-AssetList-itemLabel">File 2</span>\n        <label class="spectrum-Checkbox spectrum-AssetList-itemSelector">\n          <input type="checkbox" class="spectrum-Checkbox-input" id="checkbox-1">\n          <span class="spectrum-Checkbox-box">\n            <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">\n              <use xlink:href="#spectrum-css-icon-CheckmarkSmall" />\n            </svg>\n          </span>\n        </label>\n        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-AssetList-itemChildIndicator" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />\n        </svg>\n      </li>\n      <li class="spectrum-AssetList-item is-selected" tabindex="0">\n        <img src="img/example-ava.jpg" class="spectrum-AssetList-itemThumbnail">\n        <span class="spectrum-AssetList-itemLabel">File 3</span>\n        <label class="spectrum-Checkbox spectrum-AssetList-itemSelector">\n          <input type="checkbox" class="spectrum-Checkbox-input" id="checkbox-2" checked>\n          <span class="spectrum-Checkbox-box">\n            <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">\n              <use xlink:href="#spectrum-css-icon-CheckmarkSmall" />\n            </svg>\n          </span>\n        </label>\n        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-AssetList-itemChildIndicator" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />\n        </svg>\n      </li>\n    </ul>\n  </div>\n</div>\n'}],packageSlug:"miller",indexCSS:".spectrum-MillerColumns {\n  overflow-x: auto;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 8px 0;\n}\n\n.spectrum-MillerColumns-item {\n  display: inline-block;\n  width: var(--spectrum-miller-column-width, var(--spectrum-global-dimension-static-size-3400));\n  vertical-align: top;\n  outline: none;\n  margin: 0;\n  padding: 0;\n  margin-right: 8px;\n  overflow: auto;\n  height: 100%;\n}\n\n.spectrum-MillerColumns-item:first-child {\n    margin-left: 8px;\n  }\n",devDependencies:{"@spectrum-css/assetlist":"^2.0.0","@spectrum-css/checkbox":"^2.0.0","@spectrum-css/component-builder":"^1.0.0","@spectrum-css/icon":"^2.0.0","@spectrum-css/vars":"^2.0.0",gulp:"^4.0.0"},packageVersion:"2.0.0",packageName:"@spectrum-css/miller",peerCSS:".spectrum-AssetList {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n}\n\n.spectrum-AssetList-item {\n  position: relative;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  box-sizing: border-box;\n  -ms-flex-align: center;\n      align-items: center;\n\n  width: var(--spectrum-miller-column-width, var(--spectrum-global-dimension-static-size-3400));\n  height: var(--spectrum-miller-column-item-height, var(--spectrum-global-dimension-static-size-500));\n\n  padding: 0 var(--spectrum-miller-column-item-padding-right, var(--spectrum-global-dimension-static-size-200)) 0 var(--spectrum-miller-column-item-padding-left, var(--spectrum-global-dimension-static-size-200));\n  margin: 0 0 var(--spectrum-miller-column-item-margin-bottom, var(--spectrum-global-dimension-static-size-50)) 0;\n\n  border-radius: var(--spectrum-miller-column-item-border-radius, var(--spectrum-global-dimension-static-size-50));\n\n  transition: background-color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n\n  font-size: var(--spectrum-selectlist-option-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-selectlist-option-text-font-weight, var(--spectrum-global-font-weight-regular));\n  font-style: normal;\n\n  cursor: pointer;\n\n  outline: none;\n}\n\n.spectrum-AssetList-item::before {\n    content: '';\n\n    position: absolute;\n    left: 0;\n    right: 0;\n\n    height: var(--spectrum-miller-column-item-height, var(--spectrum-global-dimension-static-size-500));\n\n    background-color: transparent;\n\n    border-radius: var(--spectrum-miller-column-item-border-radius, var(--spectrum-global-dimension-static-size-50));\n  }\n\n.spectrum-AssetList-item.is-selectable .spectrum-Checkbox, .spectrum-AssetList-item.is-selected .spectrum-Checkbox, .spectrum-AssetList-item:hover .spectrum-Checkbox, .spectrum-AssetList-item:focus .spectrum-Checkbox {\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n    }\n\n.spectrum-AssetList-item.is-branch .spectrum-AssetList-itemChildIndicator {\n      display: block;\n    }\n\n.spectrum-AssetList-item .spectrum-AssetList-itemThumbnail {\n    border-style: none;\n\n    width: var(--spectrum-miller-column-thumbnail-width, var(--spectrum-global-dimension-static-size-300));\n    height: var(--spectrum-miller-column-thumbnail-height, var(--spectrum-global-dimension-static-size-300));\n    margin-left: var(--spectrum-miller-column-thumbnail-margin-left, var(--spectrum-global-dimension-static-size-100));\n    vertical-align: middle;\n  }\n\n.spectrum-AssetList-itemSelector {\n  display: none;\n  margin: 0;\n}\n\n.spectrum-AssetList-itemChildIndicator {\n  display: none;\n  transition: transform ease var(--spectrum-global-animation-duration-100, 130ms);\n}\n\n.spectrum-AssetList-itemLabel {\n  -ms-flex: 1;\n      flex: 1;\n  padding-left: var(--spectrum-miller-column-item-label-padding-left, var(--spectrum-global-dimension-static-size-100));\n\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.spectrum-AssetList-item:hover {\n    background-color: var(--spectrum-miller-column-item-background-color-hover, var(--spectrum-global-color-gray-200));\n  }\n\n.spectrum-AssetList-item:focus.focus-ring,\n    .spectrum-AssetList-item:focus.is-focused {\n      background-color: var(--spectrum-miller-column-item-background-color-hover, var(--spectrum-global-color-gray-200));\n    }\n\n.spectrum-AssetList-item:focus.focus-ring::before, .spectrum-AssetList-item:focus.is-focused::before {\n        box-shadow: 0px 0px 0px 2px var(--spectrum-alias-border-color-focus, var(--spectrum-global-color-blue-400)) inset;\n      }\n\n.spectrum-AssetList-item.is-navigated {\n    background-color: var(--spectrum-miller-column-item-background-color-down, var(--spectrum-global-color-gray-300));\n  }\n\n.spectrum-AssetList-item.is-navigated:hover,\n    .spectrum-AssetList-item.is-navigated:focus {\n      background-color: var(--spectrum-miller-column-item-background-color-down, var(--spectrum-global-color-gray-300));\n    }\n\n.spectrum-AssetList-item.is-selected {\n    background-color: var(--spectrum-miller-column-item-background-color-selected);\n  }\n\n.spectrum-AssetList-item.is-selected:hover,\n    .spectrum-AssetList-item.is-selected:focus {\n      background-color: var(--spectrum-miller-column-item-background-color-selected-hover);\n    }\n.spectrum-Checkbox {\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: start;\n      align-items: flex-start;\n\n  position: relative;\n\n  min-height: var(--spectrum-checkbox-height, var(--spectrum-global-dimension-size-400));\n  max-width: 100%;\n\n  margin-right: calc(var(--spectrum-checkbox-cursor-hit-x, var(--spectrum-global-dimension-size-100)) * 2);\n\n  vertical-align: top;\n}\n\n.spectrum-Checkbox-input {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n  overflow: visible;\n  box-sizing: border-box;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  left: calc(var(--spectrum-checkbox-cursor-hit-x, var(--spectrum-global-dimension-size-100)) * -1);\n  width: calc(100% + var(--spectrum-checkbox-cursor-hit-x, var(--spectrum-global-dimension-size-100)) * 2);;\n  height: 100%;\n\n  opacity: .0001;\n  z-index: 1;\n\n  cursor: pointer;\n}\n\n.spectrum-Checkbox-input:disabled {\n    cursor: default;\n  }\n\n.spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n    border-width: calc(var(--spectrum-checkbox-box-size, var(--spectrum-global-dimension-size-175)) / 2);\n  }\n\n.spectrum-Checkbox-input:checked + .spectrum-Checkbox-box .spectrum-Checkbox-checkmark {\n      transform: scale(1);\n      opacity: 1;\n    }\n\n.spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-box,\n  .spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n    border-width: calc(var(--spectrum-checkbox-box-size, var(--spectrum-global-dimension-size-175)) / 2);\n  }\n\n.spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-box .spectrum-Checkbox-checkmark, .spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box .spectrum-Checkbox-checkmark {\n      display: none;\n    }\n\n.spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-box .spectrum-Checkbox-partialCheckmark, .spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box .spectrum-Checkbox-partialCheckmark {\n      display: block;\n\n      transform: scale(1);\n      opacity: 1;\n    }\n\n.spectrum-Checkbox-label {\n  margin-left: var(--spectrum-checkbox-text-gap, var(--spectrum-global-dimension-size-125));\n  font-size: var(--spectrum-checkbox-text-size, var(--spectrum-alias-font-size-default));\n  font-weight: var(--spectrum-checkbox-text-font-weight, var(--spectrum-global-font-weight-regular));\n  transition: color var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n\n  margin-top: var(--spectrum-global-dimension-size-75);\n}\n\n.spectrum-Checkbox-box {\n  position: relative;\n  box-sizing: border-box;\n  width: var(--spectrum-checkbox-box-size, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-checkbox-box-size, var(--spectrum-global-dimension-size-175));\n  margin: calc((var(--spectrum-checkbox-height, var(--spectrum-global-dimension-size-400)) - var(--spectrum-checkbox-box-size, var(--spectrum-global-dimension-size-175))) / 2) 0;\n\n  -ms-flex-positive: 0;\n\n      flex-grow: 0;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n\n  border-radius: var(--spectrum-checkbox-box-border-radius, var(--spectrum-alias-border-radius-small));\n  border-width: var(--spectrum-checkbox-box-border-size, var(--spectrum-alias-border-size-thick));\n  border-style: solid;\n\n  transition: border var(--spectrum-global-animation-duration-100, 130ms) ease-in-out, box-shadow var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n}\n\n.spectrum-Checkbox-checkmark,\n.spectrum-Checkbox-partialCheckmark {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  margin-top: calc(var(--spectrum-icon-checkmark-small-height) / -2);\n  margin-left: calc(var(--spectrum-icon-checkmark-small-width) / -2);\n\n  opacity: 0;\n  transform: scale(0);\n\n  transition: opacity var(--spectrum-global-animation-duration-100, 130ms) ease-in-out, transform var(--spectrum-global-animation-duration-100, 130ms) ease-in-out;\n}\n\n.spectrum-Checkbox-partialCheckmark {\n  display: none;\n}\n\n.spectrum-Checkbox-label {\n  color: var(--spectrum-checkbox-text-color, var(--spectrum-alias-text-color));\n}\n\n.spectrum-Checkbox-box {\n  border-color: var(--spectrum-checkbox-box-border-color, var(--spectrum-global-color-gray-600));\n  background-color: var(--spectrum-checkbox-box-background-color, var(--spectrum-global-color-gray-75));\n}\n\n.spectrum-Checkbox.is-indeterminate .spectrum-Checkbox-box,\n.spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n  border-color: var(--spectrum-checkbox-box-border-color-selected, var(--spectrum-global-color-gray-700));\n}\n\n.spectrum-Checkbox:hover.is-indeterminate .spectrum-Checkbox-box,\n  .spectrum-Checkbox:hover .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n    border-color: var(--spectrum-checkbox-box-border-color-selected-hover, var(--spectrum-global-color-gray-800));\n\n  }\n\n.spectrum-Checkbox:active.is-indeterminate .spectrum-Checkbox-box,\n  .spectrum-Checkbox:active .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n    border-color: var(--spectrum-checkbox-box-border-color-selected-down, var(--spectrum-global-color-gray-900));\n\n  }\n\n.spectrum-Checkbox {\n  border-color: var(--spectrum-checkbox-box-border-color, var(--spectrum-global-color-gray-600));\n}\n\n.spectrum-Checkbox:hover .spectrum-Checkbox-box {\n      border-color: var(--spectrum-checkbox-box-border-color-hover, var(--spectrum-global-color-gray-700));\n\n      box-shadow: none;\n    }\n\n.spectrum-Checkbox:hover .spectrum-Checkbox-label {\n      color: var(--spectrum-checkbox-text-color-hover, var(--spectrum-alias-text-color-hover));\n    }\n\n.spectrum-Checkbox:active .spectrum-Checkbox-box {\n      border-color: var(--spectrum-checkbox-box-border-color-down, var(--spectrum-global-color-gray-800));\n\n    }\n\n.spectrum-Checkbox:active .spectrum-Checkbox-label {\n      color: var(--spectrum-checkbox-text-color-down, var(--spectrum-alias-text-color-down));\n    }\n\n.spectrum-Checkbox .spectrum-Checkbox-checkmark,\n  .spectrum-Checkbox .spectrum-Checkbox-partialCheckmark {\n    color: var(--spectrum-checkbox-checkmark-color, var(--spectrum-global-color-gray-75));\n  }\n\n.spectrum-Checkbox-input:disabled + .spectrum-Checkbox-box {\n    border-color: var(--spectrum-checkbox-box-border-color-disabled, var(--spectrum-global-color-gray-400)) !important;\n\n    background-color: var(--spectrum-checkbox-box-background-color-disabled, var(--spectrum-global-color-gray-75));\n  }\n\n.spectrum-Checkbox-input:disabled ~ .spectrum-Checkbox-label {\n    color: var(--spectrum-checkbox-text-color-disabled, var(--spectrum-alias-text-color-disabled));\n  }\n\n.spectrum-Checkbox-input.focus-ring + .spectrum-Checkbox-box {\n    border-color: var(--spectrum-checkbox-box-border-color-key-focus, var(--spectrum-alias-border-color-focus)) !important;\n\n    box-shadow: 0 0 0 1px var(--spectrum-checkbox-box-border-color-key-focus, var(--spectrum-alias-border-color-focus)) !important;\n  }\n\n.spectrum-Checkbox-input.focus-ring ~ .spectrum-Checkbox-label {\n    color: var(--spectrum-checkbox-text-color-key-focus, var(--spectrum-alias-text-color-key-focus)) !important;\n  }\n\n.spectrum-Checkbox--quiet.is-indeterminate .spectrum-Checkbox-box,\n  .spectrum-Checkbox--quiet .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n  border-color: var(--spectrum-checkbox-quiet-box-border-color-selected, var(--spectrum-global-color-gray-700));\n}\n\n.spectrum-Checkbox--quiet:hover.is-indeterminate .spectrum-Checkbox-box,\n  .spectrum-Checkbox--quiet:hover .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n    border-color: var(--spectrum-checkbox-quiet-box-border-color-selected-hover, var(--spectrum-global-color-gray-800));\n  }\n\n.spectrum-Checkbox--quiet:active.is-indeterminate .spectrum-Checkbox-box,\n  .spectrum-Checkbox--quiet:active .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box {\n    border-color: var(--spectrum-checkbox-quiet-box-border-color-selected-down, var(--spectrum-global-color-gray-900));\n  }\n\n.spectrum-Checkbox.is-invalid .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box,\n  .spectrum-Checkbox.is-invalid .spectrum-Checkbox-box {\n    border-color: var(--spectrum-checkbox-box-border-color-error, var(--spectrum-global-color-red-500));\n  }\n\n.spectrum-Checkbox.is-invalid .spectrum-Checkbox-label {\n    color: var(--spectrum-checkbox-text-color-error, var(--spectrum-global-color-red-600));\n  }\n\n.spectrum-Checkbox.is-invalid:hover .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box,\n    .spectrum-Checkbox.is-invalid:hover .spectrum-Checkbox-box {\n      border-color: var(--spectrum-checkbox-box-border-color-error-hover, var(--spectrum-global-color-red-600));\n    }\n\n.spectrum-Checkbox.is-invalid:hover .spectrum-Checkbox-label {\n      color: var(--spectrum-checkbox-text-color-error-hover, var(--spectrum-global-color-red-700));\n    }\n\n.spectrum-Checkbox.is-invalid:active .spectrum-Checkbox-input:checked + .spectrum-Checkbox-box,\n    .spectrum-Checkbox.is-invalid:active .spectrum-Checkbox-box {\n      border-color: var(--spectrum-checkbox-box-border-color-error-down, var(--spectrum-global-color-red-700));\n    }\n\n.spectrum-Checkbox.is-invalid:active .spectrum-Checkbox-label {\n      color: var(--spectrum-checkbox-text-color-error-down, var(--spectrum-global-color-red-700));\n    }\n.spectrum-Icon,\n.spectrum-UIIcon {\n  display: inline-block;\n  color: inherit;\n  fill: currentColor;\n  pointer-events: none;\n}\n\n.spectrum-Icon:not(:root), .spectrum-UIIcon:not(:root) {\n    overflow: hidden;\n  }\n\n.spectrum-Icon--sizeXXS,\n  .spectrum-Icon--sizeXXS img,\n  .spectrum-Icon--sizeXXS svg {\n    height: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n    width: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) / 2);\n  }\n\n.spectrum-Icon--sizeXS,\n  .spectrum-Icon--sizeXS img,\n  .spectrum-Icon--sizeXS svg {\n    height: calc(var(--spectrum-global-dimension-size-300) / 2);\n    width: calc(var(--spectrum-global-dimension-size-300) / 2);\n  }\n\n.spectrum-Icon--sizeS,\n  .spectrum-Icon--sizeS img,\n  .spectrum-Icon--sizeS svg {\n    height: var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225));\n    width: var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225));\n  }\n\n.spectrum-Icon--sizeM,\n  .spectrum-Icon--sizeM img,\n  .spectrum-Icon--sizeM svg {\n    height: var(--spectrum-global-dimension-size-300);\n    width: var(--spectrum-global-dimension-size-300);\n  }\n\n.spectrum-Icon--sizeL,\n  .spectrum-Icon--sizeL img,\n  .spectrum-Icon--sizeL svg {\n    height: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) * 2);\n    width: calc(var(--spectrum-alias-workflow-icon-size, var(--spectrum-global-dimension-size-225)) * 2);\n  }\n\n.spectrum-Icon--sizeXL,\n  .spectrum-Icon--sizeXL img,\n  .spectrum-Icon--sizeXL svg {\n    height: calc(var(--spectrum-global-dimension-size-300) * 2);\n    width: calc(var(--spectrum-global-dimension-size-300) * 2);\n  }\n\n.spectrum-Icon--sizeXXL,\n  .spectrum-Icon--sizeXXL img,\n  .spectrum-Icon--sizeXXL svg {\n    height: calc(var(--spectrum-global-dimension-size-300) * 3);\n    width: calc(var(--spectrum-global-dimension-size-300) * 3);\n  }\n\n.spectrum--medium .spectrum-UIIcon--large {\n    display: none;\n  }\n\n.spectrum--medium .spectrum-UIIcon--medium {\n    display: inline;\n  }\n\n.spectrum--large .spectrum-UIIcon--medium {\n    display: none;\n  }\n\n.spectrum--large .spectrum-UIIcon--large {\n    display: inline;\n  }\n\n.spectrum--large {\n  --ui-icon-large-display: block;\n  --ui-icon-medium-display: none;\n}\n\n.spectrum--medium {\n  --ui-icon-medium-display: block;\n  --ui-icon-large-display: none;\n}\n\n.spectrum-UIIcon--large {\n  display: var(--ui-icon-large-display);\n}\n\n.spectrum-UIIcon--medium {\n  display: var(--ui-icon-medium-display);\n}\n\n.spectrum-UIIcon-AlertMedium {\n  width: var(--spectrum-icon-alert-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-alert-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-AlertSmall {\n  width: var(--spectrum-icon-alert-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-alert-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-ArrowDownSmall {\n  width: var(--spectrum-icon-arrow-down-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-arrow-down-small-height);\n}\n\n.spectrum-UIIcon-ArrowLeftMedium {\n  width: var(--spectrum-icon-arrow-left-medium-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-arrow-left-medium-height);\n}\n\n.spectrum-UIIcon-Asterisk {\n  width: var(--spectrum-fieldlabel-asterisk-size, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-fieldlabel-asterisk-size, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-CheckmarkMedium {\n  width: var(--spectrum-icon-checkmark-medium-width);\n  height: var(--spectrum-icon-checkmark-medium-height);\n}\n\n.spectrum-UIIcon-CheckmarkSmall {\n  width: var(--spectrum-icon-checkmark-small-width);\n  height: var(--spectrum-icon-checkmark-small-height);\n}\n\n.spectrum-UIIcon-ChevronDownMedium {\n  width: var(--spectrum-icon-chevron-down-medium-width);\n  height: var(--spectrum-icon-chevron-down-medium-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-ChevronDownSmall {\n  width: var(--spectrum-icon-chevron-down-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-chevron-down-small-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-ChevronLeftLarge {\n  width: var(--spectrum-icon-chevron-left-large-width);\n  height: var(--spectrum-icon-chevron-left-large-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-ChevronLeftMedium {\n  width: var(--spectrum-icon-chevron-left-medium-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-left-medium-height);\n}\n\n.spectrum-UIIcon-ChevronRightLarge {\n  width: var(--spectrum-icon-chevron-right-large-width);\n  height: var(--spectrum-icon-chevron-right-large-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-ChevronRightMedium {\n  width: var(--spectrum-icon-chevron-right-medium-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-right-medium-height);\n}\n\n.spectrum-UIIcon-ChevronRightSmall {\n  width: var(--spectrum-icon-chevron-right-small-width, var(--spectrum-global-dimension-size-75));\n  height: var(--spectrum-icon-chevron-right-small-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-ChevronUpSmall {\n  width: var(--spectrum-icon-chevron-up-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-chevron-up-small-height, var(--spectrum-global-dimension-size-75));\n}\n\n.spectrum-UIIcon-CornerTriangle {\n  width: var(--spectrum-icon-cornertriangle-width, var(--spectrum-global-dimension-size-65));\n  height: var(--spectrum-icon-cornertriangle-height, var(--spectrum-global-dimension-size-65));\n}\n\n.spectrum-UIIcon-CrossLarge {\n  width: var(--spectrum-icon-cross-large-width);\n  height: var(--spectrum-icon-cross-large-height);\n}\n\n.spectrum-UIIcon-CrossMedium {\n  width: var(--spectrum-icon-cross-medium-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-cross-medium-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-CrossSmall {\n  width: var(--spectrum-icon-cross-small-width, var(--spectrum-global-dimension-size-100));\n  height: var(--spectrum-icon-cross-small-height, var(--spectrum-global-dimension-size-100));\n}\n\n.spectrum-UIIcon-DashSmall {\n  width: var(--spectrum-icon-dash-small-width);\n  height: var(--spectrum-icon-dash-small-height);\n}\n\n.spectrum-UIIcon-DoubleGripper {\n  width: var(--spectrum-icon-doublegripper-width, var(--spectrum-global-dimension-size-200));\n  height: var(--spectrum-icon-doublegripper-height, var(--spectrum-global-dimension-size-50));\n}\n\n.spectrum-UIIcon-FolderBreadcrumb {\n  width: var(--spectrum-icon-folderbreadcrumb-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-folderbreadcrumb-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-HelpMedium {\n  width: var(--spectrum-icon-info-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-info-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-HelpSmall {\n  width: var(--spectrum-icon-info-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-info-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-InfoMedium {\n  width: var(--spectrum-icon-info-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-info-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-InfoSmall {\n  width: var(--spectrum-icon-info-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-info-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-Magnifier {\n  width: var(--spectrum-icon-magnifier-width, var(--spectrum-global-dimension-size-200));\n  height: var(--spectrum-icon-magnifier-height, var(--spectrum-global-dimension-size-200));\n}\n\n.spectrum-UIIcon-SkipLeft {\n  width: var(--spectrum-icon-skip-left-width);\n  height: var(--spectrum-icon-skip-left-height);\n}\n\n.spectrum-UIIcon-SkipRight {\n  width: var(--spectrum-icon-skip-right-width);\n  height: var(--spectrum-icon-skip-right-height);\n}\n\n.spectrum-UIIcon-Star {\n  width: var(--spectrum-icon-star-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-star-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-StarOutline {\n  width: var(--spectrum-icon-star-outline-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-star-outline-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-SuccessMedium {\n  width: var(--spectrum-icon-success-medium-width, var(--spectrum-global-dimension-size-225));\n  height: var(--spectrum-icon-success-medium-height, var(--spectrum-global-dimension-size-225));\n}\n\n.spectrum-UIIcon-SuccessSmall {\n  width: var(--spectrum-icon-success-small-width, var(--spectrum-global-dimension-size-175));\n  height: var(--spectrum-icon-success-small-height, var(--spectrum-global-dimension-size-175));\n}\n\n.spectrum-UIIcon-TripleGripper {\n  width: var(--spectrum-icon-triplegripper-width);\n  height: var(--spectrum-icon-triplegripper-height, var(--spectrum-global-dimension-size-85));\n}\n"}];e.exports=n.length<=1?n[0]:n}}]);