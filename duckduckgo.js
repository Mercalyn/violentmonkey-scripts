// ==UserScript==
// @name        duckduckgo
// @namespace   Violentmonkey Scripts
// @match       *://duckduckgo.com/*
// @grant       GM_addStyle
// @version     1.0
// @author      mercalus
// @description get rid of sidebar
// ==/UserScript==

GM_addStyle(".badge-link {display: none !important;}");