/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './payaescuela';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import11 from 'ionic-angular/components/navbar/navbar';
import * as import12 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import13 from 'ionic-angular/components/button/button';
import * as import14 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import17 from '@angular/core/src/linker/query_list';
import * as import18 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import19 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import20 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import21 from 'ionic-angular/components/content/content';
import * as import22 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import23 from '../../node_modules/ionic-angular/components/card/card.ngfactory';
import * as import24 from 'ionic-angular/config/config';
import * as import25 from '@angular/core/src/linker/element_ref';
import * as import26 from 'ionic-angular/navigation/view-controller';
import * as import27 from 'ionic-angular/components/app/app';
import * as import28 from 'ionic-angular/components/menu/menu-controller';
import * as import29 from 'ionic-angular/components/toolbar/toolbar';
import * as import30 from 'ionic-angular/platform/platform';
import * as import31 from 'ionic-angular/platform/dom-controller';
import * as import32 from 'ionic-angular/platform/keyboard';
import * as import33 from '@angular/core/src/zone/ng_zone';
import * as import34 from 'ionic-angular/components/tabs/tabs';
import * as import35 from 'ionic-angular/components/icon/icon';
import * as import36 from 'ionic-angular/components/menu/menu-toggle';
import * as import37 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import38 from 'ionic-angular/components/card/card';
export class Wrapper_PayaescuelaPage {
  /*private*/ _eventHandler:Function;
  context:import0.PayaescuelaPage;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.PayaescuelaPage(p0,p1);
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_PayaescuelaPage_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_PayaescuelaPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.PayaescuelaPage>;
  _PayaescuelaPage_0_3:Wrapper_PayaescuelaPage;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PayaescuelaPage_Host0,renderType_PayaescuelaPage_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'page-payaescuela',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_PayaescuelaPage0(this.viewUtils,this,0,this._el_0);
    this._PayaescuelaPage_0_3 = new Wrapper_PayaescuelaPage(this.injectorGet(import8.NavController,this.parentIndex),this.injectorGet(import9.NavParams,this.parentIndex));
    this.compView_0.create(this._PayaescuelaPage_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._PayaescuelaPage_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PayaescuelaPage) && (0 === requestNodeIndex))) { return this._PayaescuelaPage_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PayaescuelaPage_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PayaescuelaPageNgFactory:import7.ComponentFactory<import0.PayaescuelaPage> = new import7.ComponentFactory<import0.PayaescuelaPage>('page-payaescuela',View_PayaescuelaPage_Host0,import0.PayaescuelaPage);
const styles_PayaescuelaPage:any[] = ([] as any[]);
var renderType_PayaescuelaPage:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_PayaescuelaPage,{});
export class View_PayaescuelaPage0 extends import1.AppView<import0.PayaescuelaPage> {
  _el_0:any;
  _Header_0_3:import10.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  compView_2:import1.AppView<import11.Navbar>;
  _Navbar_2_3:import12.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  compView_4:import1.AppView<import13.Button>;
  _Button_4_3:import14.Wrapper_Button;
  _MenuToggle_4_4:import15.Wrapper_MenuToggle;
  _ToolbarItem_4_5:import16.Wrapper_ToolbarItem;
  _query_Button_4_0:import17.QueryList<any>;
  _text_5:any;
  _el_6:any;
  _Icon_6_3:import18.Wrapper_Icon;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  compView_9:import1.AppView<import19.ToolbarTitle>;
  _ToolbarTitle_9_3:import20.Wrapper_ToolbarTitle;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  compView_14:import1.AppView<import21.Content>;
  _Content_14_3:import22.Wrapper_Content;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _Card_17_3:import23.Wrapper_Card;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _el_27:any;
  _text_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PayaescuelaPage0,renderType_PayaescuelaPage,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'ion-header',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._Header_0_3 = new import10.Wrapper_Header(this.parentView.injectorGet(import24.Config,this.parentIndex),new import25.ElementRef(this._el_0),this.renderer,this.parentView.injectorGet(import26.ViewController,this.parentIndex,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'ion-navbar',new import3.InlineArray2(2,'class','toolbar'),(null as any));
    this.compView_2 = new import12.View_Navbar0(this.viewUtils,this,2,this._el_2);
    this._Navbar_2_3 = new import12.Wrapper_Navbar(this.parentView.injectorGet(import27.App,this.parentIndex),this.parentView.injectorGet(import26.ViewController,this.parentIndex,(null as any)),this.parentView.injectorGet(import8.NavController,this.parentIndex,(null as any)),this.parentView.injectorGet(import24.Config,this.parentIndex),new import25.ElementRef(this._el_2),this.renderer);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,(null as any),'button',new import3.InlineArray4(4,'ion-button','','menuToggle',''),(null as any));
    this.compView_4 = new import14.View_Button0(this.viewUtils,this,4,this._el_4);
    this._Button_4_3 = new import14.Wrapper_Button('',this.parentView.injectorGet(import24.Config,this.parentIndex),new import25.ElementRef(this._el_4),this.renderer);
    this._MenuToggle_4_4 = new import15.Wrapper_MenuToggle(this.parentView.injectorGet(import28.MenuController,this.parentIndex),this.parentView.injectorGet(import26.ViewController,this.parentIndex,(null as any)),this._Button_4_3.context,this._Navbar_2_3.context);
    this._ToolbarItem_4_5 = new import16.Wrapper_ToolbarItem(this.parentView.injectorGet(import24.Config,this.parentIndex),new import25.ElementRef(this._el_4),this.renderer,this.parentView.injectorGet(import29.Toolbar,this.parentIndex,(null as any)),this._Navbar_2_3.context);
    this._query_Button_4_0 = new import17.QueryList<any>();
    this._text_5 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,(null as any),'ion-icon',new import3.InlineArray4(4,'name','menu','role','img'),(null as any));
    this._Icon_6_3 = new import18.Wrapper_Icon(this.parentView.injectorGet(import24.Config,this.parentIndex),new import25.ElementRef(this._el_6),this.renderer);
    this._text_7 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_4.create(this._Button_4_3.context);
    this._text_8 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,(null as any),'ion-title',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_9 = new import20.View_ToolbarTitle0(this.viewUtils,this,9,this._el_9);
    this._ToolbarTitle_9_3 = new import20.Wrapper_ToolbarTitle(this.parentView.injectorGet(import24.Config,this.parentIndex),new import25.ElementRef(this._el_9),this.renderer,this.parentView.injectorGet(import29.Toolbar,this.parentIndex,(null as any)),this._Navbar_2_3.context);
    this._text_10 = this.renderer.createText((null as any),'Payaescuela',(null as any));
    this.compView_9.create(this._ToolbarTitle_9_3.context);
    this._text_11 = this.renderer.createText((null as any),'\n  ',(null as any));
    this.compView_2.create(this._Navbar_2_3.context);
    this._text_12 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_13 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,parentRenderNode,'ion-content',new import3.InlineArray2(2,'padding',''),(null as any));
    this.compView_14 = new import22.View_Content0(this.viewUtils,this,14,this._el_14);
    this._Content_14_3 = new import22.Wrapper_Content(this.parentView.injectorGet(import24.Config,this.parentIndex),this.parentView.injectorGet(import30.Platform,this.parentIndex),this.parentView.injectorGet(import31.DomController,this.parentIndex),new import25.ElementRef(this._el_14),this.renderer,this.parentView.injectorGet(import27.App,this.parentIndex),this.parentView.injectorGet(import32.Keyboard,this.parentIndex),this.parentView.injectorGet(import33.NgZone,this.parentIndex),this.parentView.injectorGet(import26.ViewController,this.parentIndex,(null as any)),this.parentView.injectorGet(import34.Tabs,this.parentIndex,(null as any)));
    this._text_15 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._text_16 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,(null as any),'ion-card',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._Card_17_3 = new import23.Wrapper_Card(this.parentView.injectorGet(import24.Config,this.parentIndex),new import25.ElementRef(this._el_17),this.renderer);
    this._text_18 = this.renderer.createText(this._el_17,'\n    ',(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_17,'img',new import3.InlineArray2(2,'src','assets/img/card-saopaolo.png'),(null as any));
    this._text_20 = this.renderer.createText(this._el_17,'\n    ',(null as any));
    this._text_21 = this.renderer.createText(this._el_17,'\n    ',(null as any));
    this._text_22 = this.renderer.createText(this._el_17,'\n  ',(null as any));
    this._text_23 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._text_24 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','video-container'),(null as any));
    this._text_26 = this.renderer.createText(this._el_25,'\n      ',(null as any));
    this._el_27 = import3.createRenderElement(this.renderer,this._el_25,'iframe',new import3.InlineArray8(8,'allowfullscreen','','frameboarder','0','src','https://www.youtube.com/embed/x1hSFnjKCZ0','width','100%'),(null as any));
    this._text_28 = this.renderer.createText(this._el_25,'\n  ',(null as any));
    this._text_29 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_30 = import3.createRenderElement(this.renderer,(null as any),'p',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_31 = this.renderer.createText(this._el_30,'\n      The most popular industrial group ever, and largely\n      responsible for bringing the music to a mass audience.\n  ',(null as any));
    this._text_32 = this.renderer.createText((null as any),'\n',(null as any));
    this.compView_14.create(this._Content_14_3.context);
    this._text_33 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_4,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_4));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._text_32,
      this._text_33
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import35.Icon) && (6 === requestNodeIndex))) { return this._Icon_6_3.context; }
    if (((token === import13.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Button_4_3.context; }
    if (((token === import36.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MenuToggle_4_4.context; }
    if (((token === import37.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._ToolbarItem_4_5.context; }
    if (((token === import19.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._ToolbarTitle_9_3.context; }
    if (((token === import11.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._Navbar_2_3.context; }
    if (((token === import29.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._Header_0_3.context; }
    if (((token === import38.Card) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._Card_17_3.context; }
    if (((token === import21.Content) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 32)))) { return this._Content_14_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._Navbar_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    if (this._Button_4_3.ngDoCheck(this,this._el_4,throwOnChange)) { this.compView_4.markAsCheckOnce(); }
    const currVal_4_1_0:any = '';
    this._MenuToggle_4_4.check_menuToggle(currVal_4_1_0,throwOnChange,false);
    this._MenuToggle_4_4.ngDoCheck(this,this._el_4,throwOnChange);
    this._ToolbarItem_4_5.ngDoCheck(this,this._el_4,throwOnChange);
    const currVal_6_0_0:any = 'menu';
    this._Icon_6_3.check_name(currVal_6_0_0,throwOnChange,false);
    this._Icon_6_3.ngDoCheck(this,this._el_6,throwOnChange);
    if (this._ToolbarTitle_9_3.ngDoCheck(this,this._el_9,throwOnChange)) { this.compView_9.markAsCheckOnce(); }
    if (this._Content_14_3.ngDoCheck(this,this._el_14,throwOnChange)) { this.compView_14.markAsCheckOnce(); }
    this._Card_17_3.ngDoCheck(this,this._el_17,throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_4_0.dirty) {
        this._query_Button_4_0.reset([this._Button_4_3.context]);
        this._ToolbarItem_4_5.context._buttons = this._query_Button_4_0;
        this._query_Button_4_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Button_4_3.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._MenuToggle_4_4.context.ngAfterContentInit(); }
    }
    this._Navbar_2_3.checkHost(this,this.compView_2,this._el_2,throwOnChange);
    this._MenuToggle_4_4.checkHost(this,this.compView_4,this._el_4,throwOnChange);
    this._Icon_6_3.checkHost(this,this,this._el_6,throwOnChange);
    this._Content_14_3.checkHost(this,this.compView_14,this._el_14,throwOnChange);
    this.compView_2.detectChanges(throwOnChange);
    this.compView_4.detectChanges(throwOnChange);
    this.compView_9.detectChanges(throwOnChange);
    this.compView_14.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
    this.compView_4.destroy();
    this.compView_9.destroy();
    this.compView_14.destroy();
    this._Icon_6_3.ngOnDestroy();
    this._Content_14_3.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 2) && (ngContentIndex == 0))) { cb(this._el_4,ctx); }
    if (((nodeIndex == 2) && (ngContentIndex == 1))) {  }
    if (((nodeIndex == 2) && (ngContentIndex == 2))) {  }
    if (((nodeIndex == 2) && (ngContentIndex == 3))) {
      cb(this._text_3,ctx);
      cb(this._text_8,ctx);
      cb(this._el_9,ctx);
      cb(this._text_11,ctx);
    }
    if (((nodeIndex == 4) && (ngContentIndex == 0))) {
      cb(this._text_5,ctx);
      cb(this._el_6,ctx);
      cb(this._text_7,ctx);
    }
    if (((nodeIndex == 9) && (ngContentIndex == 0))) { cb(this._text_10,ctx); }
    if (((nodeIndex == 14) && (ngContentIndex == 0))) {  }
    if (((nodeIndex == 14) && (ngContentIndex == 1))) {
      cb(this._text_15,ctx);
      cb(this._text_16,ctx);
      cb(this._el_17,ctx);
      cb(this._text_23,ctx);
      cb(this._text_24,ctx);
      cb(this._el_25,ctx);
      cb(this._text_29,ctx);
      cb(this._el_30,ctx);
      cb(this._text_32,ctx);
    }
    if (((nodeIndex == 14) && (ngContentIndex == 2))) {  }
  }
  handleEvent_4(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._MenuToggle_4_4.handleEvent(eventName,$event) && result);
    return result;
  }
}