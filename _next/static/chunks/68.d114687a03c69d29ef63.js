(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"x+vK":function(e,i){const r=[{name:"SplitView",examples:[{id:"splitview",name:"Horizontal",markup:'<div class="spectrum-SplitView spectrum-SplitView--horizontal" style="height: 200px">\n  <div class="spectrum-SplitView-pane" style="width: 304px">Left</div>\n  <div class="spectrum-SplitView-splitter"></div>\n  <div class="spectrum-SplitView-pane" style="flex: 1">Right</div>\n</div>\n'},{id:"splitview-horizontal",name:"Horizontally resizable",markup:'<div class="spectrum-SplitView spectrum-SplitView--horizontal" style="height: 200px">\n  <div class="spectrum-SplitView-pane" style="width: 304px">Left</div>\n  <div class="spectrum-SplitView-splitter is-draggable">\n    <div class="spectrum-SplitView-gripper"></div>\n  </div>\n  <div class="spectrum-SplitView-pane" style="flex: 1">Right</div>\n</div>\n'},{id:"splitview-left",name:"Horizontal collapsed left",markup:'<div class="spectrum-SplitView spectrum-SplitView--horizontal" style="height: 200px">\n  <div class="spectrum-SplitView-pane" style="width: 0">Left</div>\n  <div class="spectrum-SplitView-splitter is-draggable is-collapsed-start">\n    <div class="spectrum-SplitView-gripper"></div>\n  </div>\n  <div class="spectrum-SplitView-pane" style="flex: 1">Right</div>\n</div>\n'},{id:"splitview-right",name:"Horizontal collapsed right",markup:'<div class="spectrum-SplitView spectrum-SplitView--horizontal" style="height: 200px">\n  <div class="spectrum-SplitView-pane" style="flex: 1">Left</div>\n  <div class="spectrum-SplitView-splitter is-draggable is-collapsed-end">\n    <div class="spectrum-SplitView-gripper"></div>\n  </div>\n  <div class="spectrum-SplitView-pane" style="width: 0">Right</div>\n</div>\n'},{id:"splitview-vertical",name:"Vertically resizable",markup:'<div class="spectrum-SplitView spectrum-SplitView--vertical" style="height: 200px">\n  <div class="spectrum-SplitView-pane" style="height: 50px">Left</div>\n  <div class="spectrum-SplitView-splitter is-draggable">\n    <div class="spectrum-SplitView-gripper"></div>\n  </div>\n  <div class="spectrum-SplitView-pane" style="flex: 1">Right</div>\n</div>\n'},{id:"splitview-vertical-top",name:"Vertical collapsed top",markup:'<div class="spectrum-SplitView spectrum-SplitView--vertical" style="height: 200px">\n  <div class="spectrum-SplitView-pane" style="height: 0">Left</div>\n  <div class="spectrum-SplitView-splitter is-draggable is-collapsed-start">\n    <div class="spectrum-SplitView-gripper"></div>\n  </div>\n  <div class="spectrum-SplitView-pane" style="flex: 1">Right</div>\n</div>\n'},{id:"splitview-vertical-bottom",name:"Vertical collapsed bottom",markup:'<div class="spectrum-SplitView spectrum-SplitView--vertical" style="height: 200px">\n  <div class="spectrum-SplitView-pane" style="flex: 1">Left</div>\n  <div class="spectrum-SplitView-splitter is-draggable is-collapsed-end">\n    <div class="spectrum-SplitView-gripper"></div>\n  </div>\n  <div class="spectrum-SplitView-pane" style="height: 0">Right</div>\n</div>\n'}],packageSlug:"splitview",indexCSS:".spectrum-SplitView {\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n}\n\n.spectrum-SplitView-pane {\n  height: 100%;\n}\n\n.spectrum-SplitView-gripper {\n  content: '';\n  display: block;\n  position: absolute;\n  border-style: solid;\n  border-radius: var(--spectrum-rail-gripper-border-radius, var(--spectrum-alias-border-radius-small));\n\n  top: 50%;\n  transform: translate(0, -50%);\n  left: calc((var(--spectrum-rail-gripper-width, var(--spectrum-global-dimension-static-size-50)) + 2 * var(--spectrum-rail-gripper-border-width-horizontal, 3px) - var(--spectrum-rail-handle-width, var(--spectrum-global-dimension-static-size-25))) / 2 * -1);\n  width: var(--spectrum-rail-gripper-width, var(--spectrum-global-dimension-static-size-50));\n  height: var(--spectrum-rail-gripper-height, var(--spectrum-global-dimension-static-size-200));\n  border-width: var(--spectrum-rail-gripper-border-width-vertical, 4px) var(--spectrum-rail-gripper-border-width-horizontal, 3px);\n}\n\n.spectrum-SplitView-splitter {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n\n  width: var(--spectrum-rail-handle-width, var(--spectrum-global-dimension-static-size-25));\n  height: 100%;\n  z-index: 1;\n}\n\n.spectrum-SplitView-splitter.is-collapsed-start .spectrum-SplitView-gripper:before, .spectrum-SplitView-splitter.is-collapsed-end .spectrum-SplitView-gripper:before {\n        content: '';\n        position: absolute;\n\n        top: 0;\n        left: calc(50% - var(--spectrum-rail-handle-width, var(--spectrum-global-dimension-static-size-25)) / 2);\n        width: var(--spectrum-rail-handle-width, var(--spectrum-global-dimension-static-size-25));\n        height: 100%;\n      }\n\n.spectrum-SplitView-splitter.is-collapsed-start .spectrum-SplitView-gripper {\n      left: 0;\n    }\n\n.spectrum-SplitView-splitter.is-collapsed-end .spectrum-SplitView-gripper {\n      right: 0;\n      left: auto;\n    }\n\n.spectrum-SplitView--vertical {\n  -ms-flex-direction: column;\n      flex-direction: column;\n}\n\n.spectrum-SplitView--vertical .spectrum-SplitView-pane {\n    height: auto;\n    width: 100%;\n  }\n\n.spectrum-SplitView--vertical .spectrum-SplitView-gripper {\n    top: calc((var(--spectrum-rail-gripper-width, var(--spectrum-global-dimension-static-size-50)) + 2 * var(--spectrum-rail-gripper-border-width-horizontal, 3px) - var(--spectrum-rail-handle-width, var(--spectrum-global-dimension-static-size-25))) / 2 * -1);\n\n    transform: translate(-50%, 0);\n    left: 50%;\n    width: var(--spectrum-rail-gripper-height, var(--spectrum-global-dimension-static-size-200));\n    height: var(--spectrum-rail-gripper-width, var(--spectrum-global-dimension-static-size-50));\n    border-width: var(--spectrum-rail-gripper-border-width-horizontal, 3px) var(--spectrum-rail-gripper-border-width-vertical, 4px);\n  }\n\n.spectrum-SplitView--vertical .spectrum-SplitView-splitter {\n    width: 100%;\n    height: var(--spectrum-rail-handle-width, var(--spectrum-global-dimension-static-size-25));\n  }\n\n.spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-start .spectrum-SplitView-gripper, .spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-end .spectrum-SplitView-gripper {\n        left: 50%;\n      }\n\n.spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-start .spectrum-SplitView-gripper:before, .spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-end .spectrum-SplitView-gripper:before {\n          top: calc(50% - var(--spectrum-rail-handle-width, var(--spectrum-global-dimension-static-size-25)) / 2);\n          left: 0;\n          width: 100%;\n          height: var(--spectrum-rail-handle-width, var(--spectrum-global-dimension-static-size-25));\n        }\n\n.spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-start .spectrum-SplitView-gripper {\n        top: 0;\n      }\n\n.spectrum-SplitView--vertical .spectrum-SplitView-splitter.is-collapsed-end .spectrum-SplitView-gripper {\n        top: auto;\n        bottom: 0;\n      }\n\n.spectrum-SplitView-pane {\n  background-color: var(--spectrum-rail-content-background-color, var(--spectrum-global-color-gray-100));\n}\n\n.spectrum-SplitView-splitter {\n  background-color: var(--spectrum-rail-handle-background-color, var(--spectrum-global-color-gray-300));\n}\n\n.spectrum-SplitView-gripper {\n  border-color: var(--spectrum-rail-handle-background-color, var(--spectrum-global-color-gray-300));\n}\n\n.spectrum-SplitView-gripper:before {\n    background-color: var(--spectrum-rail-handle-background-color, var(--spectrum-global-color-gray-300));\n  }\n\n.spectrum-SplitView-splitter.is-draggable:hover,\n    .spectrum-SplitView-splitter.is-draggable.is-hovered {\n      background-color: var(--spectrum-rail-handle-background-color-hover, var(--spectrum-global-color-gray-400));\n    }\n\n.spectrum-SplitView-splitter.is-draggable:hover .spectrum-SplitView-gripper, .spectrum-SplitView-splitter.is-draggable.is-hovered .spectrum-SplitView-gripper {\n        border-color: var(--spectrum-rail-handle-background-color-hover, var(--spectrum-global-color-gray-400));\n      }\n\n.spectrum-SplitView-splitter.is-draggable:hover .spectrum-SplitView-gripper:before, .spectrum-SplitView-splitter.is-draggable.is-hovered .spectrum-SplitView-gripper:before {\n          background-color: var(--spectrum-rail-handle-background-color-hover, var(--spectrum-global-color-gray-400));\n        }\n\n.spectrum-SplitView-splitter.is-draggable:active,\n    .spectrum-SplitView-splitter.is-draggable.is-active {\n      background-color: var(--spectrum-rail-handle-background-color-down, var(--spectrum-global-color-gray-800));\n    }\n\n.spectrum-SplitView-splitter.is-draggable:active .spectrum-SplitView-gripper, .spectrum-SplitView-splitter.is-draggable.is-active .spectrum-SplitView-gripper {\n        border-color: var(--spectrum-rail-handle-background-color-down, var(--spectrum-global-color-gray-800));\n      }\n\n.spectrum-SplitView-splitter.is-draggable:active .spectrum-SplitView-gripper:before, .spectrum-SplitView-splitter.is-draggable.is-active .spectrum-SplitView-gripper:before {\n          background-color: var(--spectrum-rail-handle-background-color-down, var(--spectrum-global-color-gray-800));\n        }\n\n.spectrum-SplitView-splitter.is-draggable:focus {\n      outline: none;\n    }\n\n.spectrum-SplitView-splitter.is-draggable.focus-ring {\n      background-color: var(--spectrum-alias-focus-color, var(--spectrum-global-color-blue-400));\n    }\n\n.spectrum-SplitView-splitter.is-draggable.focus-ring .spectrum-SplitView-gripper {\n        border-color: var(--spectrum-alias-focus-color, var(--spectrum-global-color-blue-400));\n        box-shadow: 0 0 0 1px var(--spectrum-alias-focus-color, var(--spectrum-global-color-blue-400));\n      }\n\n.spectrum-SplitView-splitter.is-draggable.focus-ring .spectrum-SplitView-gripper:before {\n          background-color: var(--spectrum-alias-focus-color, var(--spectrum-global-color-blue-400));\n        }\n",devDependencies:{"@spectrum-css/component-builder":"^1.0.0","@spectrum-css/vars":"^2.0.0",gulp:"^4.0.0"},packageVersion:"2.0.0",packageName:"@spectrum-css/splitview",peerCSS:""}];e.exports=r.length<=1?r[0]:r}}]);