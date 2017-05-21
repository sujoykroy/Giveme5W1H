/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ObjectPageHeaderRenderer","./ObjectPageLayout","./ObjectImageHelper"],function(O,a,b){"use strict";var c={};c.render=function(r,C){var p=C.getParent(),P=(p instanceof a),h=(p&&P)?p.getHeaderTitle():false,R=(p&&P)?((p instanceof a)&&p.getShowTitleInHeaderContent()):false,d=P&&p.getShowEditHeaderButton()&&C.getContent()&&C.getContent().length>0;if(d){r.write("<div ");r.writeControlData(C);r.addClass("sapUxAPObjectPageHeaderContentFlexBox");r.addClass("sapUxAPObjectPageHeaderContentDesign-"+C.getContentDesign());if(h){r.addClass('sapUxAPObjectPageContentObjectImage-'+h.getObjectImageShape());}r.writeClasses();r.write(">");}r.write("<div ");if(d){r.addClass("sapUxAPObjectPageHeaderContentCellLeft");}else{r.writeControlData(C);r.addClass("sapUxAPObjectPageHeaderContentDesign-"+C.getContentDesign());if(h){r.addClass('sapUxAPObjectPageContentObjectImage-'+h.getObjectImageShape());}}r.addClass("ui-helper-clearfix");r.addClass("sapUxAPObjectPageHeaderContent");if(!C.getVisible()){r.addClass("sapUxAPObjectPageHeaderContentHidden");}r.writeClasses();r.write(">");if(P&&p.getIsChildPage()){r.write("<div");r.addClass('sapUxAPObjectChildPage');r.writeClasses();r.write("></div>");}if(R){this._renderTitleImage(r,C,h);if(C.getContent().length==0){r.write("<span class=\"sapUxAPObjectPageHeaderContentItem\">");this._renderTitle(r,h);r.write("</span>");}}C.getContent().forEach(function(i,I){this._renderHeaderContent(i,I,r,R,h,C);},this);r.write("</div>");if(d){this._renderEditButton(r,C);r.write("</div>");}};c._renderHeaderContent=function(h,i,r,R,H,C){var d=false,e=false,l=C._getLayoutDataForControl(h),I=i===0,f=i===(C.getContent().length-1);if(l){d=l.getShowSeparatorBefore();e=l.getShowSeparatorAfter();r.write("<span ");r.addClass("sapUxAPObjectPageHeaderWidthContainer");r.addClass("sapUxAPObjectPageHeaderContentItem");r.addStyle("width",l.getWidth());r.writeStyles();if(e||d){r.addClass("sapUxAPObjectPageHeaderSeparatorContainer");}if(!l.getVisibleL()){r.addClass("sapUxAPObjectPageHeaderLayoutHiddenL");}if(!l.getVisibleM()){r.addClass("sapUxAPObjectPageHeaderLayoutHiddenM");}if(!l.getVisibleS()){r.addClass("sapUxAPObjectPageHeaderLayoutHiddenS");}r.writeClasses();r.write(">");if(d){r.write("<span class=\"sapUxAPObjectPageHeaderSeparatorBefore\"/>");}if(I&&R){this._renderTitle(r,H);}}else{if(I&&R){r.write("<span class=\"sapUxAPObjectPageHeaderContentItem\">");this._renderTitle(r,H);}else{h.addStyleClass("sapUxAPObjectPageHeaderContentItem");}}r.renderControl(h);if(e){r.write("<span class=\"sapUxAPObjectPageHeaderSeparatorAfter\"/>");}if(l||(I&&R)||f){r.write("</span>");}};c._renderTitleImage=function(r,C,h){b._renderImageAndPlaceholder(r,{oHeader:h,oObjectImage:C._getObjectImage(),oPlaceholder:C._getPlaceholder(),bIsObjectIconAlwaysVisible:false,bAddSubContainer:false,sBaseClass:'sapUxAPObjectPageHeaderContentImageContainer'});};c._renderTitle=function(r,h){O._renderObjectPageTitle(r,h,true);};c._renderEditButton=function(r,h){r.write("<div class=\"sapUxAPObjectPageHeaderContentCellRight\">");r.renderControl(h.getAggregation("_editHeaderButton"));r.write("</div>");};return c;},true);