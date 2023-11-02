// ==UserScript==
// @name        youtube
// @namespace   Violentmonkey Scripts
// @match       *://www.youtube.com/*
// @grant       GM_addStyle
// @version     1.0
// @author      mercalus
// @description 2023-10-30 11:28:47
// ==/UserScript==

// must install youtube dislikes ff extension first

// get rid of dumb super radii
GM_addStyle(".yt-spec-button-shape-next--size-m {border-radius: 4px !important;}");
GM_addStyle("* {border-radius: 4px !important;}");

// auto styling before node is created
GM_addStyle("#ryd-bar {background-color: green !important;}");
GM_addStyle("#ryd-bar-container {background-color: red !important;}");

// become member go away
GM_addStyle("#sponsor-button {display: none !important;}");

//GM_addStyle("ytd-smartimation {visibility: hidden !important;}");
