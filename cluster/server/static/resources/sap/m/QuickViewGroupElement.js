/*
 * ! UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./library','sap/ui/core/Element','./QuickViewGroupElementType','./Link','./Text','sap/ui/core/CustomData'],function(q,l,E,G,L,T,C){"use strict";var a=E.extend("sap.m.QuickViewGroupElement",{metadata:{library:"sap.m",properties:{visible:{type:"boolean",group:"Appearance",defaultValue:true},label:{type:"string",group:"Misc",defaultValue:""},value:{type:"string",group:"Misc",defaultValue:""},url:{type:"string",group:"Misc",defaultValue:""},target:{type:"string",group:"Misc",defaultValue:"_blank"},type:{type:"sap.m.QuickViewGroupElementType",group:"Misc",defaultValue:G.text},pageLinkId:{type:"string",group:"Misc",defaultValue:""},emailSubject:{type:"string",group:"Misc",defaultValue:""}}}});a.prototype._getGroupElementValue=function(Q){if(!this.getValue()){return null;}switch(this.getType()){case G.email:var h="mailto:"+this.getValue();var s=this.getEmailSubject();if(s){h+='?subject='+s;}return new L({href:h,text:this.getValue()});case G.phone:case G.mobile:return new L({href:"tel:"+this.getValue(),text:this.getValue()});case G.link:return new L({href:this.getUrl(),text:this.getValue(),target:this.getTarget()});case G.pageLink:var b=this.getPageLinkId();if(Q){b=Q+'-'+b;}return new L({href:"#",text:this.getValue(),customData:[new C({key:"pageNumber",value:b})]});default:return new T({text:this.getValue()});}};a.prototype.setProperty=function(){E.prototype.setProperty.apply(this,arguments);var g=this.getParent();if(!g){return;}var p=g.getParent();if(p){p._updatePage();}};return a;},true);
