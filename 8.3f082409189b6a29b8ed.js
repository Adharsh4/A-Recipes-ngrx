(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ZPmh:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),i=u("pMnS"),o=u("4BU0"),r=u("gIcY"),s=u("Ip0R"),a=u("9rNa"),b=u("sPvp"),c=function(){function l(l){this.store=l,this.editMode=!1}return l.prototype.ngOnInit=function(){var l=this;this.subscription=this.store.select("shoppingList").subscribe(function(n){n.editedIngredientIndex>-1?(l.editMode=!0,l.editedItem=n.editedIngredient,l.slForm.setValue({name:l.editedItem.name,amount:l.editedItem.amount})):l.editMode=!1})},l.prototype.onSubmit=function(l){var n=l.value,u=new a.a(n.name,n.amount);this.store.dispatch(this.editMode?new b.l(u):new b.c(u)),this.editMode=!1,l.reset()},l.prototype.onClear=function(){this.slForm.reset(),this.editMode=!1,this.store.dispatch(new b.j)},l.prototype.onDelete=function(){this.store.dispatch(new b.f),this.onClear()},l.prototype.ngOnDestroy=function(){this.subscription.unsubscribe(),this.store.dispatch(new b.j)},l}(),d=u("yGQT"),p=t.pb({encapsulation:0,styles:[[""]],data:{}});function g(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"button",[["class","btn btn-danger"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onDelete()&&t),t},null,null)),(l()(),t.Ib(-1,null,["Delete"]))],null,null)}function m(l){return t.Kb(0,[t.Gb(671088640,1,{slForm:0}),(l()(),t.rb(1,0,null,null,39,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,38,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.rb(3,0,null,null,37,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,i=l.component;return"submit"===n&&(e=!1!==t.Cb(l,5).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Cb(l,5).onReset()&&e),"ngSubmit"===n&&(e=!1!==i.onSubmit(t.Cb(l,5))&&e),e},null,null)),t.qb(4,16384,null,0,r.D,[],null,null),t.qb(5,4210688,[[1,4],["f",4]],0,r.t,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Fb(2048,null,r.b,null,[r.t]),t.qb(7,16384,null,0,r.s,[[4,r.b]],null,null),(l()(),t.rb(8,0,null,null,24,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,10,"div",[["class","col-sm-5 form-group"]],null,null,null,null,null)),(l()(),t.rb(10,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Name"])),(l()(),t.rb(12,0,null,null,7,"input",[["class","form-control"],["id","name"],["name","name"],["ngModel",""],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Cb(l,13)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,13).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,13)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,13)._compositionEnd(u.target.value)&&e),e},null,null)),t.qb(13,16384,null,0,r.c,[t.D,t.k,[2,r.a]],null,null),t.qb(14,16384,null,0,r.y,[],{required:[0,"required"]},null),t.Fb(1024,null,r.o,function(l){return[l]},[r.y]),t.Fb(1024,null,r.p,function(l){return[l]},[r.c]),t.qb(17,671744,null,0,r.u,[[2,r.b],[6,r.o],[8,null],[6,r.p]],{name:[0,"name"],model:[1,"model"]},null),t.Fb(2048,null,r.q,null,[r.u]),t.qb(19,16384,null,0,r.r,[[4,r.q]],null,null),(l()(),t.rb(20,0,null,null,12,"div",[["class","col-sm-2 form-group"]],null,null,null,null,null)),(l()(),t.rb(21,0,null,null,1,"label",[["for","amount"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Amount"])),(l()(),t.rb(23,0,null,null,9,"input",[["class","form-control"],["id","amount"],["name","amount"],["ngModel",""],["pattern","^[1-9]+[0-9]*$"],["required",""],["type","number"]],[[1,"required",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Cb(l,24)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,24).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,24)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,24)._compositionEnd(u.target.value)&&e),"change"===n&&(e=!1!==t.Cb(l,25).onChange(u.target.value)&&e),"input"===n&&(e=!1!==t.Cb(l,25).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,25).onTouched()&&e),e},null,null)),t.qb(24,16384,null,0,r.c,[t.D,t.k,[2,r.a]],null,null),t.qb(25,16384,null,0,r.v,[t.D,t.k],null,null),t.qb(26,16384,null,0,r.y,[],{required:[0,"required"]},null),t.qb(27,540672,null,0,r.w,[],{pattern:[0,"pattern"]},null),t.Fb(1024,null,r.o,function(l,n){return[l,n]},[r.y,r.w]),t.Fb(1024,null,r.p,function(l,n){return[l,n]},[r.c,r.v]),t.qb(30,671744,null,0,r.u,[[2,r.b],[6,r.o],[8,null],[6,r.p]],{name:[0,"name"],model:[1,"model"]},null),t.Fb(2048,null,r.q,null,[r.u]),t.qb(32,16384,null,0,r.r,[[4,r.q]],null,null),(l()(),t.rb(33,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(34,0,null,null,6,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),t.rb(35,0,null,null,1,"button",[["class","btn btn-success"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),t.Ib(36,null,["",""])),(l()(),t.gb(16777216,null,null,1,null,g)),t.qb(38,16384,null,0,s.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.rb(39,0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onClear()&&t),t},null,null)),(l()(),t.Ib(-1,null,["Clear"]))],function(l,n){var u=n.component;l(n,14,0,""),l(n,17,0,"name",""),l(n,26,0,""),l(n,27,0,"^[1-9]+[0-9]*$"),l(n,30,0,"amount",""),l(n,38,0,u.editMode)},function(l,n){var u=n.component;l(n,3,0,t.Cb(n,7).ngClassUntouched,t.Cb(n,7).ngClassTouched,t.Cb(n,7).ngClassPristine,t.Cb(n,7).ngClassDirty,t.Cb(n,7).ngClassValid,t.Cb(n,7).ngClassInvalid,t.Cb(n,7).ngClassPending),l(n,12,0,t.Cb(n,14).required?"":null,t.Cb(n,19).ngClassUntouched,t.Cb(n,19).ngClassTouched,t.Cb(n,19).ngClassPristine,t.Cb(n,19).ngClassDirty,t.Cb(n,19).ngClassValid,t.Cb(n,19).ngClassInvalid,t.Cb(n,19).ngClassPending),l(n,23,0,t.Cb(n,26).required?"":null,t.Cb(n,27).pattern?t.Cb(n,27).pattern:null,t.Cb(n,32).ngClassUntouched,t.Cb(n,32).ngClassTouched,t.Cb(n,32).ngClassPristine,t.Cb(n,32).ngClassDirty,t.Cb(n,32).ngClassValid,t.Cb(n,32).ngClassInvalid,t.Cb(n,32).ngClassPending),l(n,35,0,!t.Cb(n,5).valid),l(n,36,0,u.editMode?"Update":"Add")})}var C=u("7F1V"),h=function(){function l(l,n){this.loggingService=l,this.store=n}return l.prototype.ngOnInit=function(){this.ingredients=this.store.select("shoppingList"),this.loggingService.printLog("Hello from ShoppingListComponent ngOnInit!")},l.prototype.onEditItem=function(l){this.store.dispatch(new b.i(l))},l.prototype.ngOnDestroy=function(){},l}(),f=t.pb({encapsulation:0,styles:[[""]],data:{}});function v(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"a",[["class","list-group-item"],["style","cursor: pointer"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onEditItem(l.context.index)&&t),t},null,null)),(l()(),t.Ib(1,null,[" "," (",") "]))],null,function(l,n){l(n,1,0,n.context.$implicit.name,n.context.$implicit.amount)})}function y(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,7,"div",[["class","col-xs-10"]],null,null,null,null,null)),(l()(),t.rb(2,0,null,null,1,"app-shopping-edit",[],null,null,null,m,p)),t.qb(3,245760,null,0,c,[d.m],null,null),(l()(),t.rb(4,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.rb(5,0,null,null,3,"ul",[["class","list-group"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,2,null,v)),t.qb(7,278528,null,0,s.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),t.Eb(131072,s.b,[t.h])],function(l,n){var u=n.component;l(n,3,0),l(n,7,0,t.Jb(n,7,0,t.Cb(n,8).transform(u.ingredients)).ingredients)},null)}function q(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-shopping-list",[],null,null,null,y,f)),t.qb(1,245760,null,0,h,[C.a,d.m],null,null)],function(l,n){l(n,1,0)},null)}var I=t.nb("app-shopping-list",h,q,{},{},[]),w=u("ZYCi"),B=u("PCNd");u.d(n,"ShoppingListModuleNgFactory",function(){return F});var F=t.ob(e,[],function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[i.a,o.a,I]],[3,t.j],t.x]),t.Bb(4608,r.B,r.B,[]),t.Bb(4608,s.l,s.k,[t.u,[2,s.r]]),t.Bb(4608,C.a,C.a,[]),t.Bb(1073742336,r.A,r.A,[]),t.Bb(1073742336,r.m,r.m,[]),t.Bb(1073742336,w.s,w.s,[[2,w.y],[2,w.o]]),t.Bb(1073742336,s.c,s.c,[]),t.Bb(1073742336,B.a,B.a,[]),t.Bb(1073742336,e,e,[]),t.Bb(1024,w.m,function(){return[[{path:"",component:h}]]},[])])})}}]);