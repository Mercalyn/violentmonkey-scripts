// ==UserScript==
// @name        wells fargo
// @namespace   Violentmonkey Scripts
// @match       https://connect.secure.wellsfargo.com/accounts/*
// @grant       GM_addStyle
// @version     1.0
// @author      mercalus
// @description 2023-10-30 11:28:47
// ==/UserScript==

// get rid of promotions
GM_addStyle(".WellsFargoDeals__deals-tile-wrapper___EjLde {display: none !important;}");
GM_addStyle(".WellsFargoDeals__desktop___dj1AU {display: none !important;}");