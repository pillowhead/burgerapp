(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__2z9NQ",BreadTop:"BurgerIngredient__BreadTop__2Pkwe",Seeds1:"BurgerIngredient__Seeds1__2k2x7",Seeds2:"BurgerIngredient__Seeds2__9Mret",Meat:"BurgerIngredient__Meat__1LdrR",Cheese:"BurgerIngredient__Cheese__1eqwP",Salad:"BurgerIngredient__Salad__2WBlr",Bacon:"BurgerIngredient__Bacon__2RZZH"}},,,,,,function(e,t,a){e.exports={BuildControl:"BuildControl__BuildControl__ibcUQ",Label:"BuildControl__Label__2VLnR",Less:"BuildControl__Less__3X6hg",More:"BuildControl__More__2eQpV"}},,function(e,t,a){e.exports={NavigationItem:"NavigationItem__NavigationItem__3YSjr",active:"NavigationItem__active__2GQz1"}},function(e,t,a){e.exports={BuildControls:"BuildControls__BuildControls__220uz",OrderButton:"BuildControls__OrderButton__1ScSk",enable:"BuildControls__enable__3XAWA"}},function(e,t,a){e.exports={Button:"Button__Button__ajevi",Success:"Button__Success__1DMln",Danger:"Button__Danger__18hYt"}},,,function(e,t,a){e.exports={Content:"Layout__Content__2UQcM"}},function(e,t,a){e.exports={Toolbar:"Toolbar__Toolbar__2hkfg"}},function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},function(e,t,a){e.exports={Logo:"Logo__Logo__2A07e"}},function(e,t,a){e.exports={NavigationItems:"NavigationItems__NavigationItems__3HY9i"}},function(e,t,a){e.exports={Burger:"Burger__Burger__2h2kL"}},function(e,t,a){e.exports={Modal:"Modal__Modal__cd320"}},function(e,t,a){e.exports={Backdrop:"Backdrop__Backdrop__eeZpu"}},,function(e,t,a){e.exports=a(43)},,,,,,function(e,t,a){},,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),i=(a(29),a(2)),o=a(3),s=a(5),u=a(4),d=a(6),m=function(e){return e.children},_=a(14),p=a.n(_),h=a(15),g=a.n(h),b=a(16),E=a.n(b),f=a(17),v=a.n(f),B=function(e){return r.a.createElement("div",{className:v.a.Logo},r.a.createElement("img",{src:E.a,alt:"MyBurger"}))},C=a(18),k=a.n(C),N=a(9),y=a.n(N),O=function(e){return r.a.createElement("li",{className:y.a.NavigationItem},r.a.createElement("a",{href:e.link,className:e.active?y.a.active:null},e.children))},j=function(){return r.a.createElement("ul",{className:k.a.NavigationItems},r.a.createElement(O,{link:"/",active:!0},"Burger Builder"),r.a.createElement(O,{link:"/"},"Checkout"))},w=function(e){return r.a.createElement("header",{className:g.a.Toolbar},r.a.createElement("div",null,"MENU"),r.a.createElement(B,null),r.a.createElement("nav",null,r.a.createElement(j,null)))},S=function(e){return r.a.createElement(m,null,r.a.createElement(w,null),r.a.createElement("main",{className:p.a.Content},e.children))},I=a(8),x=a(22),M=a(19),L=a.n(M),P=a(1),H=a.n(P),T=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:H.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:H.a.BreadTop},r.a.createElement("div",{className:H.a.Seeds1}),r.a.createElement("div",{className:H.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:H.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:H.a.Cheese});break;case"salad":e=r.a.createElement("div",{className:H.a.Salad});break;case"bacon":e=r.a.createElement("div",{className:H.a.Bacon});break;default:e=null}return e}}]),t}(n.Component),A=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(x.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(T,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:L.a.Burger},r.a.createElement(T,{type:"bread-top"}),t,r.a.createElement(T,{type:"bread-bottom"}))},R=a(10),Y=a.n(R),D=a(7),Q=a.n(D),W=function(e){return r.a.createElement("div",{className:Q.a.BuildControl},r.a.createElement("div",{className:Q.a.Label},e.label),r.a.createElement("button",{className:Q.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),r.a.createElement("button",{className:Q.a.More,onClick:e.added},"More"))},z=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],U=function(e){return r.a.createElement("div",{className:Y.a.BuildControls},r.a.createElement("p",null,"Current Price: ",r.a.createElement("strong",null,e.price.toFixed(2))),z.map(function(t){return r.a.createElement(W,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),r.a.createElement("button",{className:Y.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},"ORDER NOW"))},Z=a(20),F=a.n(Z),J=a(21),V=a.n(J),X=function(e){return e.show?r.a.createElement("div",{className:V.a.Backdrop,onClick:e.clicked}):null},q=function(e){return r.a.createElement(m,null,r.a.createElement(X,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:F.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},G=a(11),$=a.n(G),K=function(e){return r.a.createElement("button",{className:[$.a.Button,$.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},ee=function(e){var t=Object.keys(e.ingredients).map(function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.ingredients[t])});return r.a.createElement(m,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,r.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),r.a.createElement("p",null,"Continue to Checkout?"),r.a.createElement(K,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),r.a.createElement(K,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},te={salad:.5,cheese:.4,meat:1.3,bacon:.7},ae=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},a.addIngreadientHandler=function(e){var t=a.state.ingredients[e]+1,n=Object(I.a)({},a.state.ingredients);n[e]=t;var r=te[e],l=a.state.totalPrice+r;a.setState({totalPrice:l,ingredients:n}),a.updatePurchaseState(n)},a.removeIngredientHandler=function(e){var t=a.state.ingredients[e];if(!(t<=0)){var n=t-1,r=Object(I.a)({},a.state.ingredients);r[e]=n;var l=te[e],c=a.state.totalPrice-l;a.setState({totalPrice:c,ingredients:r}),a.updatePurchaseState(r)}},a.purchaseHandler=function(){a.setState({purchasing:!0})},a.purchaseCancelHandler=function(){a.setState({purchasing:!1})},a.purchaseContinueHandler=function(){alert("You continue!")},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).map(function(t){return e[t]}).reduce(function(e,t){return e+t},0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(I.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(m,null,r.a.createElement(q,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},r.a.createElement(ee,{ingredients:this.state.ingredients,price:this.state.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),r.a.createElement(A,{ingredients:this.state.ingredients}),r.a.createElement(U,{ingredientAdded:this.addIngreadientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchaseHandler,price:this.state.totalPrice}))}}]),t}(n.Component),ne=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(S,null,r.a.createElement(ae,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[23,2,1]]]);
//# sourceMappingURL=main.79ef8576.chunk.js.map