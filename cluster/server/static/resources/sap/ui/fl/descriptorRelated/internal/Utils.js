/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(function(){"use strict";var U=function(){};U.prototype.getNameAndNameSpace=function(i,r){return{"fileName":"manifest","namespace":"apps/"+r+"/changes/"+i+"/"};};U.prototype.checkEntityPropertyChange=function(p){this.checkParameterAndType(p,"entityPropertyChange","object");this.checkParameterAndType(p.entityPropertyChange,"propertyPath","string");this.checkParameterAndType(p.entityPropertyChange,"operation","string");if(jQuery.inArray(p.entityPropertyChange.operation,['INSERT','UPDATE','UPSERT','DELETE'])<0){throw new Error("Parameter \"entityPropertyChange.operation\" needs to be one of 'INSERT', 'UPDATE', 'UPSERT', 'DELETE'");}if(p.entityPropertyChange.propertyValue===undefined&&p.entityPropertyChange.operation!=='DELETE'){throw new Error("No parameter \"entityPropertyChange.propertyValue\" provided");}};U.prototype.checkParameterAndType=function(p,P,t){if(t==="array"){if(p===undefined||p[P]===undefined||!Array.isArray(p[P])){throw new Error("No parameter \""+P+"\" of type "+t+" provided");}}else{if(p===undefined||p[P]===undefined||typeof p[P]!==t){throw new Error("No parameter \""+P+"\" of type "+t+" provided");}}};U.prototype.checkTexts=function(t){if(t!==undefined&&typeof t!=="object"){throw new Error("Wrong format for provided \"texts\" parameter");}};U.prototype.checkTransportRequest=function(t){if(!/^[A-Z0-9]{1,20}$/.test(t)){throw new Error("Wrong format for provided \"sTransportRequest\" parameter");}};U.prototype.checkPackage=function(p){if(!/^[A-Z0-9/_]{1,30}$/.test(p)){throw new Error("Wrong format for provided \"sPackage\" parameter");}};return new U();},true);