(this["webpackJsonptest-tissini-react"]=this["webpackJsonptest-tissini-react"]||[]).push([[0],{35:function(e,s,t){},49:function(e,s,t){},53:function(e,s,t){"use strict";t.r(s);var i=t(1),a=t(8),c=t.n(a),n=t(6),r=t(14),d=t.n(r),l=t(19),o=(t(35),t(2)),j=t.n(o);function u(){j()(document).ready((function(){j()(".largeGrid").click((function(){return j()(this).find("a").addClass("active"),j()(".smallGrid a").removeClass("active"),j()(".product").addClass("large").each((function(){})),setTimeout((function(){j()(".info-large").show()}),200),setTimeout((function(){j()(".view_gallery").trigger("click")}),400),!1})),j()(".smallGrid").click((function(){return j()(this).find("a").addClass("active"),j()(".largeGrid a").removeClass("active"),j()("div.product").removeClass("large"),j()(".make3D").removeClass("animate"),j()(".info-large").fadeOut("fast"),setTimeout((function(){j()("div.flip-back").trigger("click")}),400),!1})),j()(".smallGrid").click((function(){return j()(".product").removeClass("large"),!1})),j()(".colors-large a").click((function(){return!1})),j()(".product").each((function(e,s){j()(s).find(".make3D").hover((function(){j()(this).parent().css("z-index","20"),j()(this).addClass("animate"),j()(this).find("div.carouselNext, div.carouselPrev").addClass("visible")}),(function(){j()(this).removeClass("animate"),j()(this).parent().css("z-index","1"),j()(this).find("div.carouselNext, div.carouselPrev").removeClass("visible")})),j()(s).find(".view_gallery").click((function(){j()(s).find("div.carouselNext, div.carouselPrev").removeClass("visible"),j()(s).find(".make3D").addClass("flip-10"),setTimeout((function(){j()(s).find(".make3D").removeClass("flip-10").addClass("flip90").find("div.shadow").show().fadeTo(80,1,(function(){j()(s).find(".product-front, .product-front div.shadow").hide()}))}),50),setTimeout((function(){j()(s).find(".make3D").removeClass("flip90").addClass("flip190"),j()(s).find(".product-back").show().find("div.shadow").show().fadeTo(90,0),setTimeout((function(){j()(s).find(".make3D").removeClass("flip190").addClass("flip180").find("div.shadow").hide(),setTimeout((function(){j()(s).find(".make3D").css("transition","100ms ease-out"),j()(s).find(".cx, .cy").addClass("s1"),setTimeout((function(){j()(s).find(".cx, .cy").addClass("s2")}),100),setTimeout((function(){j()(s).find(".cx, .cy").addClass("s3")}),200),j()(s).find("div.carouselNext, div.carouselPrev").addClass("visible")}),100)}),100)}),150)})),j()(s).find(".flip-back").click((function(){j()(s).find(".make3D").removeClass("flip180").addClass("flip190"),setTimeout((function(){j()(s).find(".make3D").removeClass("flip190").addClass("flip90"),j()(s).find(".product-back div.shadow").css("opacity",0).fadeTo(100,1,(function(){j()(s).find(".product-back, .product-back div.shadow").hide(),j()(s).find(".product-front, .product-front div.shadow").show()}))}),50),setTimeout((function(){j()(s).find(".make3D").removeClass("flip90").addClass("flip-10"),j()(s).find(".product-front div.shadow").show().fadeTo(100,0),setTimeout((function(){j()(s).find(".product-front div.shadow").hide(),j()(s).find(".make3D").removeClass("flip-10").css("transition","100ms ease-out"),j()(s).find(".cx, .cy").removeClass("s1 s2 s3")}),100)}),150)})),function(e){var s=j()(e).find(".carousel ul"),t=315,i=0,a=!1,c=0;j()(s).attr("rel",c),j()(s).find("li").each((function(){i+=t})),j()(s).css("width",i),j()(e).find("div.carouselNext").on("click",(function(){var e=Math.abs(parseInt(j()(s).css("left")))+t;e!==i&&!0!==a&&(j()(s).css({left:"-"+e+"px",transition:"300ms ease-out"}),a=!0,c++,j()(s).attr("rel",c),setTimeout((function(){a=!1}),300))})),j()(e).find("div.carouselPrev").on("click",(function(){var e=Math.abs(parseInt(j()(s).css("left")))-t;e<0||!0===a||(j()(s).css({left:"-"+e+"px",transition:"300ms ease-out"}),a=!0,c--,j()(s).attr("rel",c),setTimeout((function(){a=!1}),300))}))}(s)})),j()(".add-cart-large").each((function(e,s){j()(s).click((function(){var e=j()(this).parent().parent().find(".carousel-container"),s=e.find("img").eq(e.attr("rel"))[0],t=j()(s).offset(),i=j()(this).parent().find("h4").get(0).innerHTML,a=j()(this).find(".product_price").get(0).innerHTML;j()("body").append('<div class="floating-cart"></div>');var c=j()("div.floating-cart");j()("<img src='"+s.src+"' class='floating-image-large' />").appendTo(c),j()(c).css({top:t.top+"px",left:t.left+"px"}).fadeIn("slow").addClass("moveToCart"),setTimeout((function(){j()("body").addClass("MakeFloatingCart")}),800),setTimeout((function(){j()("div.floating-cart").remove(),j()("body").removeClass("MakeFloatingCart");var e="<div class='cart-item'><div class='img-wrap'><img src='"+s.src+"' alt='' /></div><span>"+i+"</span><strong>"+a+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";j()("#cart .empty").hide(),j()("#cart").append(e),j()("#checkout").fadeIn(500),j()("#cart .cart-item").last().addClass("flash").find(".delete-item").click((function(){j()(this).parent().fadeOut(300,(function(){j()(this).remove(),0===j()("#cart .cart-item").size()&&(j()("#cart .empty").fadeIn(500),j()("#checkout").fadeOut(500))}))})),setTimeout((function(){j()("#cart .cart-item").last().removeClass("flash")}),10)}),1e3)}))})),j()(".sizes a span, .categories a span").each((function(e,s){j()(s).append('<span class="x"></span><span class="y"></span>'),j()(s).parent().on("click",(function(){return j()(this).hasClass("checked")?(j()(s).find(".y").removeClass("animate"),setTimeout((function(){j()(s).find(".x").removeClass("animate")}),50),j()(this).removeClass("checked"),!1):(j()(s).find(".x").addClass("animate"),setTimeout((function(){j()(s).find(".y").addClass("animate")}),100),j()(this).addClass("checked"),!1)}))})),j()(".add_to_cart").click((function(){var e=j()(this).parent(),s=e.offset(),t=j()(e).find("img").get(0).src,i=j()(e).find(".product_name").get(0).innerHTML,a=j()(e).find(".product_price").get(0).innerHTML;j()("body").append('<div class="floating-cart"></div>');var c=j()("div.floating-cart");e.clone().appendTo(c),j()(c).css({top:s.top+"px",left:s.left+"px"}).fadeIn("slow").addClass("moveToCart"),setTimeout((function(){j()("body").addClass("MakeFloatingCart")}),800),setTimeout((function(){j()("div.floating-cart").remove(),j()("body").removeClass("MakeFloatingCart");var e="<div class='cart-item'><div class='img-wrap'><img src='"+t+"' alt='' /></div><span>"+i+"</span><strong>"+a+"</strong><div class='cart-item-border'></div><div class='delete-item'></div></div>";j()("#cart .empty").hide(),j()("#cart").append(e),j()("#checkout").fadeIn(500),j()("#cart .cart-item").last().addClass("flash").find(".delete-item").click((function(){j()(this).parent().fadeOut(300,(function(){j()(this).remove(),0===j()("#cart .cart-item").size()&&(j()("#cart .empty").fadeIn(500),j()("#checkout").fadeOut(500))}))})),setTimeout((function(){j()("#cart .cart-item").last().removeClass("flash")}),10)}),1e3)}))}))}var m=t(57),h=t(55),f=t(0);function p(){u();var e;e=JSON.parse(localStorage.getItem("user"));var s=Object(i.useState)(),t=Object(n.a)(s,2),a=t[0],c=t[1],r=function(){var e=Object(l.a)(d.a.mark((function e(){var s,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://v3.tissini.app/api/v3/categories");case 2:return s=e.sent,e.next=5,s.json();case 5:t=e.sent,c(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=Object(i.useState)(),j=Object(n.a)(o,2),p=j[0],v=j[1],b=function(){var e=Object(l.a)(d.a.mark((function e(){var s,t,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://v3.tissini.app/api/v3/categories/1/products");case 2:return s=e.sent,e.next=5,s.json();case 5:t=e.sent,i=t.products,v(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){r(),b()}),[]),Object(f.jsx)(i.Fragment,{children:Object(f.jsxs)("div",{id:"wrapper",children:[Object(f.jsx)("div",{className:"cart-icon-bottom"}),Object(f.jsx)("div",{id:"checkout",children:"CHECKOUT"}),Object(f.jsx)("div",{id:"header",children:Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:[" ",Object(f.jsx)("div",{className:"logo-tissini-2"})]}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/#",children:"Home"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/#",children:"BRANDS"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/#",children:"DESIGNERS"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/#",children:"CONTACT"})}),Object(f.jsxs)("li",{children:[" ",Object(f.jsx)(m.a,{variant:"danger",onClick:function(){localStorage.removeItem("user"),window.location.reload()},children:"logOut "})]}),Object(f.jsxs)("li",{children:["  ",Object(f.jsxs)(h.a,{bg:"info",children:["Welcome ",e.nombre]})]})]})}),Object(f.jsxs)("div",{id:"sidebar",children:[Object(f.jsx)("h3",{children:"CART"}),Object(f.jsx)("div",{id:"cart",children:Object(f.jsx)("span",{className:"empty",children:"No items in cart."})}),Object(f.jsx)("h3",{children:"CATEGORIES"}),Object(f.jsx)("div",{className:"checklist categories",children:Object(f.jsx)("ul",{children:a?a.map((function(e,s){return Object(f.jsx)("li",{children:Object(f.jsxs)("a",{href:"/#",children:[Object(f.jsx)("span",{}),e.name]})},s)})):"loading..."})})]}),Object(f.jsxs)("div",{id:"grid",children:[Object(f.jsxs)("div",{id:"grid-selector",children:[p?p.length:"loading..."," results"]}),p?p.map((function(e,s){return Object(f.jsxs)("div",{className:"product",children:[Object(f.jsxs)("div",{className:"info-large",children:[Object(f.jsx)("h4",{children:e.name}),Object(f.jsxs)("div",{className:"sku",children:["PRODUCT SKU: ",Object(f.jsx)("strong",{children:"89356"})]}),Object(f.jsx)("div",{className:"price-big",children:Object(f.jsxs)("span",{children:["$",e.price]})}),Object(f.jsx)("h3",{children:"COLORS"}),Object(f.jsx)("div",{className:"colors-large",children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/#",children:Object(f.jsx)("span",{})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/#",children:Object(f.jsx)("span",{})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/#",children:Object(f.jsx)("span",{})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"/#",children:Object(f.jsx)("span",{})})})]})}),Object(f.jsx)("h3",{children:"SIZE"}),Object(f.jsx)("div",{className:"sizes-large",children:e.variants.map((function(e){return e.size+".  "}))}),Object(f.jsx)("button",{className:"add-cart-large",children:"Add To Cart"})]}),Object(f.jsxs)("div",{className:"make3D",children:[Object(f.jsxs)("div",{className:"product-front",children:[Object(f.jsx)("div",{className:"shadow"}),Object(f.jsx)("img",{src:"https://v3.tissini.app/"+e.images[0].url,alt:""}),Object(f.jsx)("div",{className:"image_overlay"}),Object(f.jsx)("div",{className:"add_to_cart",children:"Add to cart"}),Object(f.jsx)("div",{className:"view_gallery",children:"View gallery"}),Object(f.jsx)("div",{className:"stats",children:Object(f.jsxs)("div",{className:"stats-container",children:[Object(f.jsxs)("span",{className:"product_price",children:["$",e.price]}),Object(f.jsx)("span",{className:"product_name",children:e.name}),Object(f.jsx)("p",{children:e.category.name}),Object(f.jsxs)("div",{className:"product-options",children:[Object(f.jsx)("strong",{children:"SIZES"}),Object(f.jsx)("span",{children:e.variants.map((function(e){return e.size+".  "}))}),Object(f.jsx)("strong",{children:"COLORS"}),Object(f.jsxs)("div",{className:"colors",children:[Object(f.jsx)("div",{className:"c-blue",children:Object(f.jsx)("span",{})}),Object(f.jsx)("div",{className:"c-red",children:Object(f.jsx)("span",{})}),Object(f.jsx)("div",{className:"c-white",children:Object(f.jsx)("span",{})}),Object(f.jsx)("div",{className:"c-green",children:Object(f.jsx)("span",{})})]})]})]})})]}),Object(f.jsxs)("div",{className:"product-back",children:[Object(f.jsx)("div",{className:"shadow"}),Object(f.jsxs)("div",{className:"carousel",children:[Object(f.jsx)("ul",{className:"carousel-container",children:e.images.map((function(e,s){return Object(f.jsx)("li",{children:Object(f.jsx)("img",{src:"https://v3.tissini.app/"+e.url,alt:""})},s)}))}),Object(f.jsxs)("div",{className:"arrows-perspective",children:[Object(f.jsxs)("div",{className:"carouselPrev",children:[Object(f.jsx)("div",{className:"y"}),Object(f.jsx)("div",{className:"x"})]}),Object(f.jsxs)("div",{className:"carouselNext",children:[Object(f.jsx)("div",{className:"y"}),Object(f.jsx)("div",{className:"x"})]})]})]}),Object(f.jsxs)("div",{className:"flip-back",children:[Object(f.jsx)("div",{className:"cy"}),Object(f.jsx)("div",{className:"cx"})]})]})]})]},s)})):"loading..."]})]})})}var v=t(56),b=t(10),x=t.n(b);function O(){var e={},s=function(){var s=window.location.hostname.includes("localhost")?"http://localhost:8080/api/auth":"https://test-tissini-anthony-henriquez.herokuapp.com/api/auth",t=document.querySelector("#form-login"),i=t.email,a=t.password,c={email:i.value,password:a.value};fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(s){var t=s.errors,i=s.status,a=s.msg,c=s.user,n=s.token;if(t&&x.a.fire({icon:"error",title:"Oops...",text:t[0].msg}),400===i&&x.a.fire(a,"","question"),200===i){var r=c.uid,d=c.nombre;e.token=n,e.uid=r,e.nombre=d,x.a.fire({position:"top-end",icon:"success",title:"Welcome ".concat(c.nombre).toLocaleLowerCase(),showConfirmButton:!1,timer:1500,width:"500px",height:"100px"}),localStorage.setItem("user",JSON.stringify(e)),l()}})).catch((function(e){return console.error("Error:",e)}))};Object(i.useEffect)((function(){JSON.parse(localStorage.getItem("user"))&&l()}),[]);var t=function(){var e=window.location.hostname.includes("localhost")?"http://localhost:8080/api/user":"https://test-tissini-anthony-henriquez.herokuapp.com/api/user",s=document.querySelector("#form-sign-in"),t=s.nameRegister,i=s.emailRegister,a=s.passRegister,c={nombre:t.value,email:i.value,password:a.value};fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){var s=e.errors,t=e.status,i=e.msg;s&&x.a.fire({icon:"error",title:"Oops...",text:s[0].msg}),500===t&&x.a.fire(i,"","error"),201===t&&(x.a.fire(i,"","success"),O())})).catch((function(e){return console.error("Error:",e)}))},a=Object(i.useState)(!0),c=Object(n.a)(a,2),r=c[0],d=c[1],l=function(){return d(!1)},o=function(){return Object(f.jsxs)("div",{className:"container-login",children:[Object(f.jsx)("div",{className:"body"}),Object(f.jsx)("div",{className:"grad"}),Object(f.jsx)("div",{className:"header",children:Object(f.jsx)("div",{className:"logo-tissini"})}),Object(f.jsx)("div",{className:"login",children:Object(f.jsxs)("form",{id:"form-login",children:[Object(f.jsx)("input",{type:"text",placeholder:"USERNAME",name:"email"}),Object(f.jsx)("input",{type:"password",placeholder:"PASSWORD",name:"password"}),Object(f.jsx)("input",{onClick:s,type:"button",value:"Sign In"}),Object(f.jsx)("div",{id:"my-signin2",className:"g-signin2 pt-2","data-onsuccess":"onSignIn"}),Object(f.jsx)(m.a,{variant:"link",onClick:g,children:" Sign Up"})]})})]})},j=Object(i.useState)(!1),u=Object(n.a)(j,2),h=u[0],b=u[1],O=function(){return b(!1)},g=function(){return b(!0)},N=function(){return Object(f.jsxs)(v.a,{show:h,onHide:O,centered:!0,children:[Object(f.jsxs)(v.a.Header,{className:"mx-auto",children:[Object(f.jsx)(v.a.Title,{children:Object(f.jsx)("div",{className:"logo-tissini-s"})}),Object(f.jsx)("h1",{className:"text-light",children:"SIGN UP"})]}),Object(f.jsx)(v.a.Body,{children:Object(f.jsx)("div",{className:"col-6 mx-auto",children:Object(f.jsxs)("form",{id:"form-sign-in",children:[Object(f.jsx)("div",{className:"mb-3 row",children:Object(f.jsx)("div",{className:"col-sm-10",children:Object(f.jsx)("input",{type:"text",placeholder:"NAME",className:"modal-input",name:"nameRegister"})})}),Object(f.jsx)("div",{className:"mb-3 row",children:Object(f.jsx)("div",{className:"col-sm-10",children:Object(f.jsx)("input",{type:"text",placeholder:"EMAIL",className:"modal-input",name:"emailRegister"})})}),Object(f.jsx)("div",{className:"mb-3 row",children:Object(f.jsx)("div",{className:"col-sm-10",children:Object(f.jsx)("input",{type:"password",placeholder:"PASSWORD",className:"modal-input",name:"passRegister"})})})]})})}),Object(f.jsxs)(v.a.Footer,{children:[Object(f.jsx)(m.a,{variant:"secondary",onClick:O,children:"Close"}),Object(f.jsx)(m.a,{onClick:t,type:"submit",variant:"light",children:"Sign Up"})]})]})};return Object(f.jsxs)(i.Fragment,{children:[r?Object(f.jsx)(o,{}):Object(f.jsx)(p,{}),Object(f.jsx)(N,{})]})}function g(){return Object(f.jsx)(i.Fragment,{children:Object(f.jsx)(O,{})})}t(49),t(50);var N=t(27);t.n(N).a.config();var C=document.querySelector("#root");c.a.render(Object(f.jsx)(g,{}),C)}},[[53,1,2]]]);
//# sourceMappingURL=main.94e511a7.chunk.js.map