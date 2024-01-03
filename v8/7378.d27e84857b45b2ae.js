"use strict";(self.webpackChunkdocs_app=self.webpackChunkdocs_app||[]).push([[7378],{78126:(D,s,u)=>{u.r(s),u.d(s,{GuidedTourDemosModule:()=>A});var l=u(96814),m=u(96535),c=u(52787),t=u(19212),p=u(31791),T=u(12814),d=u(24549),a=u(32296);function g(e,U){1&e&&(t.TgZ(0,"h3",4),t._uU(1,"Hello world"),t.qZA())}let b=(()=>{class e{_guidedTourService;displayElement=!1;constructor(o){this._guidedTourService=o}ngOnInit(){this._guidedTourService.registerTour("abortOnTour",{useModalOverlay:!0,abortOn:[{selector:"#abort-on-demo #added-element",event:d.eQ.added}],steps:[{title:"Abort on element added",text:"Click this button to add an element which will abort the tour. ",attachTo:{element:"#abort-on-demo #add-element",on:"top"}}]})}addElement(){this.displayElement=!0}startTour(){this.displayElement=!1,this._guidedTourService.startTour("abortOnTour")}static \u0275fac=function(n){return new(n||e)(t.Y36(d.gd))};static \u0275cmp=t.Xpm({type:e,selectors:[["guided-tour-demo-abort-on"]],decls:7,vars:1,consts:[["id","abort-on-demo"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","id","add-element",3,"click"],["id","added-element",4,"ngIf"],["id","added-element"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div")(2,"button",1),t.NdJ("click",function(){return i.startTour()}),t._uU(3," Start tour "),t.qZA()(),t.TgZ(4,"button",2),t.NdJ("click",function(){return i.addElement()}),t._uU(5," Add element "),t.qZA(),t.YNc(6,g,2,0,"h3",3),t.qZA()),2&n&&(t.xp6(6),t.Q6J("ngIf",i.displayElement))},dependencies:[l.O5,a.lW],styles:["button[_ngcontent-%COMP%]{margin-bottom:1em}"]})}return e})(),v=(()=>{class e{_guidedTourService;constructor(o){this._guidedTourService=o}ngOnInit(){this._guidedTourService.registerTour("delayTour",{useModalOverlay:!0,steps:[{title:"Step 1",attachTo:{element:"#delay-demo #step-1",on:"top"}},{title:"Step 2",text:"There was a 1 sec delay before this step was displayed",attachTo:{element:"#delay-demo #step-2",on:"top"},attachToOptions:{timeBeforeShow:1e3}}]})}startTour(){this._guidedTourService.startTour("delayTour")}static \u0275fac=function(n){return new(n||e)(t.Y36(d.gd))};static \u0275cmp=t.Xpm({type:e,selectors:[["guided-tour-demo-delay"]],decls:7,vars:0,consts:[["id","delay-demo"],["mat-raised-button","","color","accent",3,"click"],["id","step-1"],["id","step-2"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return i.startTour()}),t._uU(2," Start tour "),t.qZA(),t.TgZ(3,"h3",2),t._uU(4,"Step 1"),t.qZA(),t.TgZ(5,"h3",3),t._uU(6,"Step 2"),t.qZA()())},dependencies:[a.lW],styles:["button[_ngcontent-%COMP%]{margin-bottom:1em}"]})}return e})(),h=(()=>{class e{_guidedTourService;constructor(o){this._guidedTourService=o}ngOnInit(){this._guidedTourService.registerTour("disableNextDemoTour",{useModalOverlay:!0,steps:[{id:"enable-next",title:"Enable Next Button",text:"Click this button to enable next button",attachTo:{element:"#disable-next-demo #enable-next",on:"top"}},{id:"last_step",title:"Last Step",text:"This is the final step",attachTo:{element:"#disable-next-demo #last-step",on:"top"}}]})}enableNext(){this._guidedTourService.setNextBtnDisability("enable-next",!1)}startTour(){this._guidedTourService.startTour("disableNextDemoTour"),this._guidedTourService.setNextBtnDisability("enable-next",!0)}static \u0275fac=function(n){return new(n||e)(t.Y36(d.gd))};static \u0275cmp=t.Xpm({type:e,selectors:[["guided-tour-demo-disable-next"]],decls:8,vars:0,consts:[["id","disable-next-demo"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","id","enable-next",3,"click"],["id","last-step"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div")(2,"button",1),t.NdJ("click",function(){return i.startTour()}),t._uU(3," Start tour "),t.qZA()(),t.TgZ(4,"button",2),t.NdJ("click",function(){return i.enableNext()}),t._uU(5," Enable Next "),t.qZA(),t.TgZ(6,"h3",3),t._uU(7,"Finish tour"),t.qZA()())},dependencies:[a.lW],styles:["button[_ngcontent-%COMP%]{margin-bottom:1em}"]})}return e})(),k=(()=>{class e{_guidedTourService;constructor(o){this._guidedTourService=o}ngOnInit(){this._guidedTourService.registerTour("advanceOnTour",{useModalOverlay:!0,steps:[{title:"Step 1",text:"Click on button to advance to step 2",attachTo:{element:"#advance-on-demo #advance-button",on:"top"},advanceOn:{selector:"#advance-on-demo #advance-button",event:d.eQ.click}},{title:"Step  2",text:"Step 2",attachTo:{element:"#advance-on-demo #step-2",on:"top"}}]})}startTour(){this._guidedTourService.startTour("advanceOnTour")}static \u0275fac=function(n){return new(n||e)(t.Y36(d.gd))};static \u0275cmp=t.Xpm({type:e,selectors:[["guided-tour-demo-advance-on"]],decls:8,vars:0,consts:[["id","advance-on-demo"],["mat-raised-button","","color","accent",3,"click"],["mat-raised-button","","id","advance-button"],["id","step-2"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div")(2,"button",1),t.NdJ("click",function(){return i.startTour()}),t._uU(3," Start tour "),t.qZA()(),t.TgZ(4,"button",2),t._uU(5," Click to advance to step 2 "),t.qZA(),t.TgZ(6,"h3",3),t._uU(7,"Step 2"),t.qZA()())},dependencies:[a.lW],styles:["button[_ngcontent-%COMP%]{margin-bottom:1em}"]})}return e})(),_=(()=>{class e{_guidedTourService;constructor(o){this._guidedTourService=o}ngOnInit(){this._guidedTourService.registerTour("notFoundTour",{useModalOverlay:!0,steps:[{title:"Step 1",attachTo:{element:"#not-found-demo #step-1",on:"top"}},{title:"Step  2",text:"Element this is meant to attach to does not exist",attachTo:{element:"#not-found-demo #step-2",on:"top"},attachToOptions:{retries:1,skipIfNotFound:!0}},{title:"Step 3",text:"Step 2 was not found so skipped to step 3",attachTo:{element:"#not-found-demo #step-3",on:"top"}}]})}startTour(){this._guidedTourService.startTour("notFoundTour")}static \u0275fac=function(n){return new(n||e)(t.Y36(d.gd))};static \u0275cmp=t.Xpm({type:e,selectors:[["guided-tour-demo-not-found"]],decls:8,vars:0,consts:[["id","not-found-demo"],["mat-raised-button","","color","accent",3,"click"],["id","step-1"],["id","step-3"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return i.startTour()}),t._uU(2," Start tour "),t.qZA(),t.TgZ(3,"h3",2),t._uU(4,"Step 1"),t.qZA(),t._uU(5," \u{1f47b} "),t.TgZ(6,"h3",3),t._uU(7,"Step 3"),t.qZA()())},dependencies:[a.lW],styles:["button[_ngcontent-%COMP%]{margin-bottom:1em}"]})}return e})(),S=(()=>{class e{_guidedTourService;constructor(o){this._guidedTourService=o}ngOnInit(){this._guidedTourService.registerTour("goBackTour",{useModalOverlay:!0,steps:[{id:"step-1",title:"Step 1",text:"Continue tour",attachTo:{element:"#go-back-demo #step-1",on:"top"}},{title:"Step 2",text:"Cannot go back in this step",attachTo:{element:"#go-back-demo #advance-button",on:"top"},advanceOn:{selector:"#go-back-demo #advance-button",event:d.eQ.click},advanceOnOptions:{allowGoBack:!1}},{title:"Step 3",text:"Going back in this step will send you back to step 1",attachTo:{element:"#go-back-demo #step-3",on:"top"},attachToOptions:{goBackTo:"step-1"}}]})}startTour(){this._guidedTourService.startTour("goBackTour")}static \u0275fac=function(n){return new(n||e)(t.Y36(d.gd))};static \u0275cmp=t.Xpm({type:e,selectors:[["guided-tour-demo-go-back"]],decls:9,vars:0,consts:[["id","go-back-demo"],["mat-raised-button","","color","accent",3,"click"],["id","step-1"],["mat-raised-button","","id","advance-button"],["id","step-3"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return i.startTour()}),t._uU(2," Start tour "),t.qZA(),t.TgZ(3,"h3",2),t._uU(4,"Step 1"),t.qZA(),t.TgZ(5,"button",3),t._uU(6," Click to advance to step 3 "),t.qZA(),t.TgZ(7,"h3",4),t._uU(8,"Step 3"),t.qZA()())},dependencies:[a.lW],styles:["button[_ngcontent-%COMP%]{margin-bottom:1em}"]})}return e})(),f=(()=>{class e{_guidedTourService;constructor(o){this._guidedTourService=o}ngOnInit(){this._guidedTourService.registerTour("skipCountTour",{useModalOverlay:!0,steps:[{title:"Introduction",text:"The introduction step has been removed from the count total",attachTo:{element:"#skip-count-demo #skip-intro",on:"top"},attachToOptions:{skipFromStepCount:!0}},{title:"Step 1",text:"Step 1 is the first of 2 steps to be counted in the total",attachTo:{element:"#skip-count-demo #skip-step-1",on:"top"},attachToOptions:{skipFromStepCount:!1}},{title:"Step 2",text:"Step 2 is the second of 2 steps to be counted in the total",attachTo:{element:"#skip-count-demo #skip-step-2",on:"top"}},{title:"Final",text:"The final step has been removed from the count total",attachTo:{element:"#skip-count-demo #skip-step-final",on:"top"},attachToOptions:{skipFromStepCount:!0}}]})}startTour(){this._guidedTourService.startTour("skipCountTour")}static \u0275fac=function(n){return new(n||e)(t.Y36(d.gd))};static \u0275cmp=t.Xpm({type:e,selectors:[["guided-tour-demo-skip-count"]],decls:11,vars:0,consts:[["id","skip-count-demo"],["mat-raised-button","","color","accent",3,"click"],["id","skip-intro"],["id","skip-step-1"],["id","skip-step-2"],["id","skip-step-final"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return i.startTour()}),t._uU(2," Start tour "),t.qZA(),t.TgZ(3,"h3",2),t._uU(4,"Introduction"),t.qZA(),t.TgZ(5,"h3",3),t._uU(6,"Step 1"),t.qZA(),t.TgZ(7,"h3",4),t._uU(8,"Step 2"),t.qZA(),t.TgZ(9,"h3",5),t._uU(10,"Final"),t.qZA()())},dependencies:[a.lW]})}return e})();const Z=()=>["/"];let y=(()=>{class e{_guidedTourService;constructor(o){this._guidedTourService=o}ngOnInit(){this._guidedTourService.registerTour("goBackNavigationTour",{useModalOverlay:!0,steps:[{id:"step-1",title:"Step 1",text:"Continue tour",attachTo:{element:"#go-back-navigation-demo #step-1",on:"top"}},{id:"step-2",title:"Step 2",text:"Step will navigate to the root (/)",attachTo:{element:"#go-back-navigation-demo #advance-button",on:"top"},advanceOn:{selector:"#go-back-navigation-demo #advance-button",event:d.eQ.click},advanceOnOptions:{allowGoBack:!0}},{id:"step-3",title:"Step 3",text:"Step has navigated to the home page",advanceOnOptions:{allowGoBack:!1}},{id:"step-4",title:"Step 4",text:"Click the back button (<) will navigate back to step 3 on the home page",routing:{route:"/components/guided-tour/examples"},attachTo:{element:"#go-back-navigation-demo #step-4"},scrollTo:!1}]})}startTour(){this._guidedTourService.startTour("goBackNavigationTour")}static \u0275fac=function(n){return new(n||e)(t.Y36(d.gd))};static \u0275cmp=t.Xpm({type:e,selectors:[["guided-tour-demo-go-back-navigation"]],decls:9,vars:2,consts:[["id","go-back-navigation-demo"],["mat-raised-button","","color","accent",3,"click"],["id","step-1"],["mat-raised-button","","id","advance-button",3,"routerLink"],["id","step-4"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return i.startTour()}),t._uU(2," Start tour "),t.qZA(),t.TgZ(3,"h3",2),t._uU(4,"Step 1"),t.qZA(),t.TgZ(5,"button",3),t._uU(6," Step 2, click to navigate to step 3 "),t.qZA(),t.TgZ(7,"h3",4),t._uU(8,"Step 4"),t.qZA()()),2&n&&(t.xp6(5),t.Q6J("routerLink",t.DdM(1,Z)))},dependencies:[c.rH,a.lW],styles:["button[_ngcontent-%COMP%]{margin-bottom:1em}"]})}return e})();const C=[{path:"",component:(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275cmp=t.Xpm({type:e,selectors:[["guided-tour-demo"]],decls:18,vars:18,consts:[[3,"demoId","demoTitle"]],template:function(n,i){1&n&&(t.TgZ(0,"demo-component",0),t._UZ(1,"guided-tour-demo-basic"),t.qZA(),t.TgZ(2,"demo-component",0),t._UZ(3,"guided-tour-demo-disable-next"),t.qZA(),t.TgZ(4,"demo-component",0),t._UZ(5,"guided-tour-demo-abort-on"),t.qZA(),t.TgZ(6,"demo-component",0),t._UZ(7,"guided-tour-demo-advance-on"),t.qZA(),t.TgZ(8,"demo-component",0),t._UZ(9,"guided-tour-demo-delay"),t.qZA(),t.TgZ(10,"demo-component",0),t._UZ(11,"guided-tour-demo-go-back"),t.qZA(),t.TgZ(12,"demo-component",0),t._UZ(13,"guided-tour-demo-not-found"),t.qZA(),t.TgZ(14,"demo-component",0),t._UZ(15,"guided-tour-demo-skip-count"),t.qZA(),t.TgZ(16,"demo-component",0),t._UZ(17,"guided-tour-demo-go-back-navigation"),t.qZA()),2&n&&(t.Q6J("demoId","guided-tour-demo-basic")("demoTitle","Basic"),t.xp6(2),t.Q6J("demoId","guided-tour-demo-disable-next")("demoTitle","Disable next button"),t.xp6(2),t.Q6J("demoId","guided-tour-demo-abort-on")("demoTitle","Abort on an event"),t.xp6(2),t.Q6J("demoId","guided-tour-demo-advance-on")("demoTitle","Advance on an event"),t.xp6(2),t.Q6J("demoId","guided-tour-demo-delay")("demoTitle","Step delay"),t.xp6(2),t.Q6J("demoId","guided-tour-demo-go-back")("demoTitle","Going back"),t.xp6(2),t.Q6J("demoId","guided-tour-demo-not-found")("demoTitle","Step not found"),t.xp6(2),t.Q6J("demoId","guided-tour-demo-skip-count")("demoTitle","Skip and remove step(s) from count"),t.xp6(2),t.Q6J("demoId","guided-tour-demo-go-back-navigation")("demoTitle","Going back with navigation"))},dependencies:[p.z,T.k,b,v,h,k,_,S,f,y]})}return e})()}];let x=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=t.oAB({type:e});static \u0275inj=t.cJS({imports:[c.Bz.forChild(C),c.Bz]})}return e})();var O=u(11951);let A=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=t.oAB({type:e});static \u0275inj=t.cJS({imports:[l.ez,m.l,O.f,x,a.ot]})}return e})()}}]);