// ==UserScript==
// @name        gmail
// @namespace   Violentmonkey Scripts
// @match       *://mail.google.com/*
// @grant       GM_addStyle
// @version     1.0
// @author      mercalus
// @description 2023-10-30 11:28:47
// ==/UserScript==

// main window
GM_addStyle(".bkK > .nH {border: 2px solid rgba(60, 60, 60, 1) !important; border-radius: 8px !important;}");

// search bar
GM_addStyle("form.bas {background-color: rgba(200, 200, 200, .8); border: 2px solid rgba(60, 60, 60, 1) !important; border-radius: 8px !important;}");

// skriv box
GM_addStyle(".z0 > .L3 {border: 2px solid rgba(60, 60, 60, 1) !important; border-radius: 8px !important;}");

// left icons and vertical tabs, eg "Inkorgen, Skickat, .."
GM_addStyle(".TK .TO, .n6 .ah9, .CL {border-radius: 8px !important;}");

// active button
GM_addStyle(".Yb.bax {border-radius: 8px !important;}");