(function(e){function t(t){for(var r,s,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function s(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-2d216214":"7163b552","chunk-2d216257":"256ee085","chunk-65665c7d":"f592c7fb"}[e]+".js"}function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}a[e]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/gamedir/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09e7":function(e,t,n){"use strict";n("cad4")},"0ea3":function(e,t,n){},"333e":function(e,t,n){e.exports=n.p+"img/loading.250998d4.svg"},5298:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("fb6a"),n("d3b7"),n("25f0");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("user-msg",{directives:[{name:"show",rawName:"v-show",value:e.userMsgStr,expression:"userMsgStr"}],attrs:{msgStr:e.userMsgStr}}),n("app-header"),n("router-view")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"app-header"},[n("router-link",{attrs:{to:"/items"}},[n("div",{staticClass:"logo"},[n("p",[e._v("Game"),n("span",[e._v("dir")]),e._v("⚙️")])])]),n("nav",{staticClass:"nav"},[n("router-link",{attrs:{to:"/items"}},[e._v("Items")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1)],1)},o=[],c=n("2877"),l={},u=Object(c["a"])(l,s,o,!1,null,null,null),m=u.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-msg"},[n("p",[e._v("You have just viewd:"+e._s(e.msgStr))])])},p=[],h={props:["msgStr"]},g=h,f=Object(c["a"])(g,d,p,!1,null,null,null),v=f.exports,w={components:{AppHeader:m,UserMsg:v},computed:{userMsgStr:function(){return this.$store.getters.userMsg}}},y=w,b=Object(c["a"])(y,a,i,!1,null,null,null),x=b.exports,_=n("8c4f"),k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",{staticClass:"about"},[e._v("Welcome to Gamedir⚙️")]),n("p",{staticClass:"about-text"},[e._v(" One of the best stores on the Web, We have the latest PC games on sale with a great price. Explore a long list of PC games, We guarantee 100% security and authentic Copies of each and every PC game in our store. Cheers and Enjoy Gaming! 🤜 🤛 ")])])}],S={},j=Object(c["a"])(S,k,I,!1,null,null,null),O=j.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("cart",{attrs:{cart:e.shoppingCart,total:e.totalAmount}}),e.items?n("item-filter",{attrs:{genresForDisplay:e.genresForDisplay},on:{filtered:e.setFilter}}):e._e(),e.selectedItem?n("item-details",{attrs:{item:e.item}}):e._e(),n("item-list",{attrs:{items:e.itemsToShow},on:{remove:e.removeItem}})],1)},R=[],M=n("1da1"),T=(n("d81d"),n("6062"),n("3ca3"),n("ddb0"),n("96cf"),n("c740"),n("7db0"),{load:A,save:P});function A(e){var t=localStorage.getItem(e);return JSON.parse(t)}function P(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}var N=n("2909"),B=(n("a434"),n("159b"),n("99af"),{storeToStorage:E,loadFromStorage:W,getRandomInt:D,getRandomId:$,makeLorem:F});function E(e,t){localStorage.setItem(e,JSON.stringify(t)||null)}function W(e){var t=localStorage.getItem(e);return t?JSON.parse(t):void 0}function $(){var e=Date.now().toString(16),t=D(1e3,9999).toString(16),n=D(1e3,9999).toString(16);return"".concat(n,"-").concat(e,"-").concat(t).toUpperCase()}function D(e,t){var n=e>=t?e+1:t+1,r=e<=t?e:t;return Math.floor(Math.random()*(n-r))+r}function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:120,t=["The sky","above","the port","was","the color of television","tuned","to","a dead channel",".","All","this happened","more or less",".","I","had","the story","bit by bit","from various people","and","as generally","happens","in such cases","each time","it","was","a different story",".","It","was","a pleasure","to","burn"],n="";while(e>0)e--,n+=t[Math.floor(Math.random()*t.length)]+" ";return n+=".",n}var z={query:V,get:H,delete:U,post:K,put:L,insert:Y},G="id";function V(e){var t=B.loadFromStorage(e);return t||(t=[]),Promise.resolve(t)}function H(e,t){return X.apply(this,arguments)}function X(){return X=Object(M["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V(t);case 2:return r=e.sent,e.abrupt("return",r.find((function(e){return e[G]===n})));case 4:case"end":return e.stop()}}),e)}))),X.apply(this,arguments)}function U(e,t){return q.apply(this,arguments)}function q(){return q=Object(M["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("hey",t,n),e.next=3,V(t);case 3:if(r=e.sent,a=r.findIndex((function(e){return e[G]===n})),-1!==a){e.next=7;break}throw new Error("something went wrong");case 7:return r.splice(a,1),B.storeToStorage(t,r),e.abrupt("return",Promise.resolve());case 10:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}function K(e,t){return J.apply(this,arguments)}function J(){return J=Object(M["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V(t);case 2:return r=e.sent,n[G]=B.getRandomId(),r.push(n),B.storeToStorage(t,r),e.abrupt("return",Promise.resolve(n));case 7:case"end":return e.stop()}}),e)}))),J.apply(this,arguments)}function L(e,t){return Q.apply(this,arguments)}function Q(){return Q=Object(M["a"])(regeneratorRuntime.mark((function e(t,n){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V(t);case 2:if(r=e.sent,a=r.findIndex((function(e){return e[G]===n[G]})),-1!==a){e.next=6;break}throw new Error("something went wrong");case 6:return r[a]=n,B.storeToStorage(t,r),e.abrupt("return",Promise.resolve(n));case 9:case"end":return e.stop()}}),e)}))),Q.apply(this,arguments)}function Y(e,t){return Z.apply(this,arguments)}function Z(){return Z=Object(M["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V(t);case 2:return r=e.sent,n.forEach((function(e){return e[G]=B.getRandomId()})),r.push.apply(r,Object(N["a"])(n)),B.storeToStorage(t,r),e.abrupt("return",Promise.resolve());case 7:case"end":return e.stop()}}),e)}))),Z.apply(this,arguments)}var ee="items",te={query:re,getById:le,remove:ie,get:me,setItemId:oe},ne=[{id:"i100",title:"Horizon: Zero Dawn",itemImg:"https://cdn2.unrealengine.com/egs-horizonzerodawncompleteedition-guerrilla-s2-1200x1600-371960884.jpg",price:50,desc:"Horizon Zero Dawn is a 2017 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a young hunter in a world overrun by machines, who sets out to uncover her past. The player uses ranged weapons, a spear, and stealth to combat mechanical creatures and other enemy forces. A skill tree provides the player with new abilities and bonuses. The player can explore the open world to discover locations and take on side quests. It was released for the PlayStation 4 in 2017 and Microsoft Windows in 2020.",gameplay:["https://ichef.bbci.co.uk/news/976/cpsprodpb/2A18/production/_94867701_gameplay.jpg","https://press-start.com.au/wp-content/uploads/2020/08/Horizon-Zero-Dawn-PC-Gameplay-.jpg"],video:"VNd7tpPzmzE",genre:"RPG",rating:"4/5"},{id:"i101",title:"Cyberpunk 2077",itemImg:"https://s1.gaming-cdn.com/images/products/840/orig/cyberpunk-2077-cover.jpg",price:40,desc:"Cyberpunk 2077 is a 2020 action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe. Players assume the first-person perspective of a customisable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.",gameplay:["https://www.cyberpunk.net/build/images/media/screenshots/Cyberpunk2077_Goin_to_the_top_RGB-en-68dbb224.jpg","https://assets.rockpapershotgun.com/images/2019/06/Cyberpunk-2077-abandoned_mall.jpg"],video:"LbB2rQj7Zew",genre:"RPG",rating:"4/5"},{id:"i102",title:"Red Dead Redemption 2",itemImg:"https://www.gtabase.com/igallery/4201-4300/RDR_2_Cover_PC-4213-1920.jpg",price:30,desc:"Red Dead Redemption 2 (stylized as Red Dead Redemption II) is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and is a prequel to the 2010 game Red Dead Redemption. The story is set in 1899 in a fictionalized representation of the Western, Midwestern, and Southern United States and follows outlaw Arthur Morgan, a member of the Van der Linde gang. Arthur must deal with the decline of the Wild West whilst attempting to survive against government forces, rival gangs, and other adversaries. The story also follows fellow gang member John Marston, the protagonist of Red Dead Redemption.",gameplay:["https://i.ytimg.com/vi/Ak9lA98lUx4/maxresdefault.jpg","https://cdn.vox-cdn.com/thumbor/97ZbWd7KW1QxZ3QI_tMoA023YYM=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/13329367/Red_Dead_Redemption_2_20181023004248.jpg"],video:"Dw_oH5oiUSE",genre:"RPG",rating:"5/5"},{id:"i103",title:"World of Warcraft: Shadowlands",itemImg:"https://preview.redd.it/9bx4tzvxr5w31.png?auto=webp&s=0d01d0e147f1dfd5ba91a92ebdc5016ef9b52e02",price:35,desc:"World of Warcraft: Shadowlands is the eighth expansion pack for the massively multiplayer online role-playing game (MMORPG) World of Warcraft, following Battle for Azeroth. It was announced and made available for preorder at BlizzCon on November 1, 2019. Originally scheduled for release on October 27, 2020; its release was delayed until November 23, the sixteenth anniversary of the release of the original game. The expansion opens up the Shadowlands, the realm of the dead in Warcraft lore. It features the game's first level-squish and a completely overhauled leveling system, access to the Death Knight class for the races that did not previously have access to it, Covenants in the new zones, and new dungeons and raids.",gameplay:["https://assets.hardwarezone.com/img/2020/07/shadowlands-bastion-open.jpg","https://s1.econotimes.com/assets/uploads/202001310c239e83b36c5f3ca_th_1024x0.jpg"],video:"0j9FblQUzQU",genre:"MMORPG",rating:"5/5"},{id:"i104",title:"FIFA 21",itemImg:"https://sm.ign.com/ign_in/screenshot/default/ediffc5xkacogex_czd1.jpg",price:40,desc:"FIFA 21 is a football simulation video game published by Electronic Arts as part of the FIFA series. It is the 28th installment in the FIFA series, and was released on 9 October 2020 for Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One. Enhanced versions for the PlayStation 5 and Xbox Series X and Series S were released on 3 December 2020, in addition to a version for Stadia.",gameplay:["https://cdn.mos.cms.futurecdn.net/JPCeK7znLiMYKqNUVHXc7f.jpg","https://i.gadgets360cdn.com/large/fifa_21_gameplay_small_1596457977219.jpg"],video:"Jmliox1trPQ",genre:"SPORT",rating:"5/5"},{id:"i105",title:"NBA 2K21",itemImg:"http://cdn.shopify.com/s/files/1/0526/0663/2093/products/NBA2K21-PC-COVER.jpg",price:35,desc:"NBA 2K21 is a basketball game simulation video game that was developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association (NBA). It is the 22nd installment in the NBA 2K franchise and the successor to NBA 2K20. The game was released on September 4, 2020 for Microsoft Windows, Nintendo Switch, PlayStation 4, Xbox One, and Stadia, and on November 12, 2020 for PlayStation 5 and Xbox Series X and Series S. The PS4, Switch, Xbox One, and PC released to mixed reviews, with critics criticizing the lack of originality in the gameplay, as well as microtransactions and bugs.",gameplay:["https://cdn.eteknix.com/wp-content/uploads/2020/08/1-compressed-2-1.jpg","https://www.pcinvasion.com/wp-content/uploads/2020/09/NBA-2K21-new-shooting.jpg"],video:"LUdPHjOaKrk",genre:"SPORT",rating:"4/5"},{id:"i106",title:"Call Of Duty: Modern Warfare",itemImg:"https://m.media-amazon.com/images/M/MV5BMTc3NWY2ZTMtNTNlZC00MWM2LWI5MzYtMmU1YzY0ODk5ZjQ1XkEyXkFqcGdeQXVyODA2MTkwODk@._V1_.jpg",price:40,desc:"Call of Duty: Modern Warfare is a 2019 first-person shooter video game developed by Infinity Ward and published by Activision. Serving as the sixteenth overall installment in the Call of Duty series, as well as a reboot of the Modern Warfare sub-series, it was released on October 25, 2019, for Microsoft Windows, PlayStation 4, and Xbox One. The game takes place in a realistic and modern setting. The campaign follows a CIA officer and British SAS forces as they team up with rebels from the fictional country of Urzikstan, combating together against Russian forces who have invaded the country. The game's Special Ops mode features cooperative play missions that follow up the campaign's story. The multiplayer mode supports cross-platform multiplayer and cross-platform progression for the first time in the series. It has been reworked for gameplay to be more tactical and introduces new features, such as a Realism mode that removes the HUD as well as a form of the Ground War mode that now supports 64 players.",gameplay:["https://i.ytimg.com/vi/FQh0MkdtqTs/maxresdefault.jpg","https://www.gamereactor.eu/media/grtv/62/456233_w926.jpg"],video:"XAGou4g9CVM",genre:"ACTION",rating:"5/5"},{id:"i107",title:"Overcooked! 2 ",itemImg:"https://s3.gaming-cdn.com/images/products/2705/orig/overcooked-2-cover.jpg",price:35,desc:"Overcooked 2 (stylised as Overcooked! 2) is a cooperative cooking simulation video game developed by Team17 alongside Ghost Town Games, and published by Team17. The sequel to Overcooked!, it was released for Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One on August 7, 2018. Overcooked: All You Can Eat, a compilation game that includes both Overcooked and Overcooked 2, was released for PlayStation 5 and Xbox Series X/S.[1]",gameplay:["https://i.ytimg.com/vi/JcT4DaHlcJc/maxresdefault.jpg","https://steamcdn-a.akamaihd.net/steam/apps/728880/ss_43d3b0c28fe56c8de79a9be8e97afa7d40dddf96.1920x1080.jpg"],video:"lcVISRmANIo",genre:"RPG/FUN",rating:"4/5"},{id:"i108",title:"Hitman 3",itemImg:"http://cdn.shopify.com/s/files/1/0526/0663/2093/products/HITMAN-3.jpg",price:40,desc:"Hitman 3 (stylized as HITMAN III) is a stealth game developed and published by IO Interactive for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Stadia (under the title Hitman: World of Assassination), and Nintendo Switch on 20 January 2021.It is the eighth main installment in the Hitman series and the final entry in the World of Assassination trilogy, following Hitman (2016) and Hitman 2 (2018).[3] The single-player story concludes the plot arc started in Hitman, and follows genetically-engineered assassin Agent 47 and his allies as they hunt down the leaders of Providence, the secretive organization controlling the world's affairs. Hitman 3 received positive reviews from critics.",gameplay:["https://www.gematsu.com/wp-content/uploads/2020/12/Hitman-3-First-Five-Mins_12-31-20.jpg","https://i.ytimg.com/vi/jxWjmqNVj5Q/maxresdefault.jpg"],video:"avAXhnbs69w",genre:"FPS",rating:"5/5"},{id:"i109",title:"Assassin's Creed Valhalla",itemImg:"https://image.api.playstation.com/vulcan/img/rnd/202011/0302/8jomNsyMYDoJnzFkBrr9Rit2.jpg",price:45,desc:"Assassin's Creed Valhalla is a 2020 action role-playing video game developed by Ubisoft Montreal and published by Ubisoft. It is the twelfth major installment and the twenty-second release in the Assassin's Creed series, and a successor to the 2018's Assassin's Creed Odyssey. Principally set in the years 872–878 AD, the game recounts a fictional story during the Viking invasion of Britain. The player controls Eivor, a Viking raider who becomes embroiled in the conflict between the Assassin Brotherhood and the Templar Order.",gameplay:["https://st1.bgr.in/wp-content/uploads/2020/11/Assasins-Creed-Valhalla-10.jpg","https://i.ytimg.com/vi/QTAUKW-UF7w/maxresdefault.jpg"],video:"QTAUKW-UF7w",genre:"RPG",rating:"4.5/5"},{id:"i110",title:"Mortal Kombat 11",itemImg:"https://i.pinimg.com/originals/af/99/1e/af991ed2eeb2cd29a3825c32aab981d4.jpg",price:40,desc:"Mortal Kombat 11 is a fighting game developed by NetherRealm Studios and published by Warner Bros. Interactive Entertainment. Running on a heavily modified version of Unreal Engine 3, it is the eleventh main installment in the Mortal Kombat series and a sequel to 2015's Mortal Kombat X. Announced at The Game Awards 2018, the game was released in North America and Europe on April 23, 2019 for Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One—with the exception of Europe's Switch version which was released on May 10, 2019. The game was released on the Stadia on November 19, 2019.",gameplay:["https://i.ytimg.com/vi/N8qr-qGOwYY/maxresdefault.jpg","https://i.ytimg.com/vi/QOkBRJEcOEw/maxresdefault.jpg"],video:"dBwr5CC0Ow8",genre:"FIGHTING",rating:"5/5"},{id:"i111",title:"Resident Evil: Village",itemImg:"https://www.igroshop.com/images/detailed/9/Village_box_art_m5m7-1w.jpg",price:50,desc:"Resident Evil Village is a survival horror game developed and published by Capcom. A major installment in the Resident Evil series and a narrative sequel to 2017's Resident Evil 7: Biohazard, the game follows Ethan Winters, who, after a fateful encounter with Chris Redfield, finds himself in a village filled with mutant creatures in an effort to find his kidnapped daughter. While Village maintains the series' mainstay survival horror elements, the game adopts a more action-oriented gameplay style compared to its predecessor.",gameplay:["https://cdn.mos.cms.futurecdn.net/heQvc7at4bxw3qrfVfKbhR.jpg","https://cdn.mos.cms.futurecdn.net/XDxBxjyezgcH2zMi29Gz5g.jpg"],video:"1LR8VV1OKeU",genre:"FPS",rating:"4/5"}];function re(){return ae.apply(this,arguments)}function ae(){return ae=Object(M["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(ne),e.next=3,T.load(ee);case 3:return t=e.sent,t&&t.length||(t=ne,T.save(ee,t)),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)}))),ae.apply(this,arguments)}function ie(e){return se.apply(this,arguments)}function se(){return se=Object(M["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",z.delete(ee,t));case 1:case"end":return e.stop()}}),e)}))),se.apply(this,arguments)}function oe(e,t){return ce.apply(this,arguments)}function ce(){return ce=Object(M["a"])(regeneratorRuntime.mark((function e(t,n){var r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,B.loadFromStorage(ee);case 2:return r=e.sent,a=r.findIndex((function(e){return e.id===t})),i=r[a+n].id,e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)}))),ce.apply(this,arguments)}function le(e){return ue.apply(this,arguments)}function ue(){return ue=Object(M["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ne.find((function(e){return e.id===t}));case 2:return n=e.sent,console.log("this",t),e.abrupt("return",Promise.resolve(n));case 5:case"end":return e.stop()}}),e)}))),ue.apply(this,arguments)}function me(e){return z.get(ee,e)}var de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("ul",{staticClass:"item-list"},e._l(e.items,(function(t){return n("item-preview",{key:t.id,attrs:{item:t},on:{remove:e.remove}})})),1)])},pe=[],he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"item-preview"},[n("div",[n("h3",[e._v(" "+e._s(e.item.title)+" ")]),n("router-link",{attrs:{to:"/item/"+e.item.id}},[n("img",{staticClass:"item-img-list",attrs:{src:e.item.itemImg,alt:e.item.title}})])],1),n("div",{staticClass:"item-actions"},[n("p",[e._v("$ "+e._s(e.item.price))]),n("button",{staticClass:"cta-btn"},[e._v("Buy")]),n("button",{on:{click:function(t){return e.addToCart(e.item)}}},[e._v("Add To Cart")])])])},ge=[],fe={props:["item"],data:function(){return{}},methods:{remove:function(){this.$emit("remove",this.item.id)},addToCart:function(e){this.$store.commit({type:"addToCart",item:e.title,price:e.price})}}},ve=fe,we=Object(c["a"])(ve,he,ge,!1,null,null,null),ye=we.exports,be={props:["items"],methods:{remove:function(e){this.$emit("remove",e)}},components:{ItemPreview:ye}},xe=be,_e=Object(c["a"])(xe,de,pe,!1,null,null,null),ke=_e.exports,Ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"item-filter"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.filterBy.txt,expression:"filterBy.txt"},{name:"focus",rawName:"v-focus"}],attrs:{type:"text",placeholder:"Seacrh for a game"},domProps:{value:e.filterBy.txt},on:{input:[function(t){t.target.composing||e.$set(e.filterBy,"txt",t.target.value)},e.filtered]}})])},Se=[],je=n("5530"),Oe={data:function(){return{filterBy:{txt:""}}},methods:{filtered:function(){this.$emit("filtered",Object(je["a"])({},this.filterBy))}}},Ce=Oe,Re=Object(c["a"])(Ce,Ie,Se,!1,null,null,null),Me=Re.exports,Te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("div",{staticClass:"nav-btns"},[r("button",{staticClass:"back-btn",on:{click:e.onBack}},[e._v("Back to List")]),r("div",[r("button",{staticClass:"prev-btn",on:{click:function(t){return e.changeItem(-1)}}},[e._v("Previous Item")]),r("button",{staticClass:"next-btn",on:{click:function(t){return e.changeItem(1)}}},[e._v("Next Item")])])]),e.item?r("main",{staticClass:"item-details"},[r("div",{staticClass:"item-main"},[r("img",{staticClass:"item-img",attrs:{src:e.item.itemImg,alt:""}}),r("div",{staticClass:"item-head"},[r("h1",[e._v(e._s(e.item.title))]),r("p",[e._v("Rating "+e._s(e.item.rating))]),r("p",[e._v(e._s(e.item.desc))]),r("div",[r("div",[r("transition",{attrs:{name:"modal"}},[e.isOpen?r("div",[r("div",{staticClass:"overlay",on:{click:function(t){if(t.target!==t.currentTarget)return null;e.isOpen=!1}}},[r("div",{staticClass:"modal"},[r("router-link",{attrs:{to:"/thankyou/"+e.item.title}},[r("button",{on:{click:function(t){return e.makePdf()}}},[e._v("Checkout!")])])],1)])]):e._e()]),r("button",{on:{click:function(t){e.isOpen=!e.isOpen}}},[e._v("Buy")])],1),r("p",[e._v("$ "+e._s(e.item.price))])])])]),r("h2",[e._v("Gameplay Video and Images")]),r("div",{staticClass:"item-view"},[r("iframe",{staticClass:"game-video",attrs:{width:"560",height:"200",src:"https://www.youtube.com/embed/"+e.item.video,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),r("div",{staticClass:"gameplay-gallery"},[r("div",[r("div",[r("button",{staticClass:"left-arrow",on:{click:e.prev}},[e._v("⬅️")]),r("button",{staticClass:"right-arrow",on:{click:e.next}},[e._v("➡️")])]),r("img",{staticClass:"item-gameplay",attrs:{src:e.item.gameplay[e.currentNumber%e.item.gameplay.length],alt:"gameplay"}})])])])]):r("img",{attrs:{src:n("333e")}})])},Ae=[],Pe=new r["a"],Ne=Pe,Be=n("8baf"),Ee={data:function(){return{items:null,item:null,isOpen:!1,currentNumber:0}},methods:{next:function(){this.currentNumber+=1},prev:function(){this.currentNumber-=1},makePdf:function(){var e="test",t=new Be["a"];t.text("".concat(this.item.title,"  $").concat(this.item.price," ")+(new Date).toLocaleString(),10,10),t.save(e+".pdf")},loadItems:function(){var e=this;return Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,te.query();case 2:e.items=t.sent,console.log(e.items);case 4:case"end":return t.stop()}}),t)})))()},loadItem:function(){var e=this;return Object(M["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$route.params.itemId,t.next=3,te.getById(n).then((function(t){return e.item=t}));case 3:case"end":return t.stop()}}),t)})))()},changeItem:function(e){var t=this;return Object(M["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:r=t.item.id,setTimeout(Object(M["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,te.setItemId(r,e);case 2:a=n.sent,t.$router.push("/item/"+a);case 4:case"end":return n.stop()}}),n)}))),3e3);case 2:case"end":return n.stop()}}),n)})))()},stopRotation:function(){clearTimeout(this.timer),this.timer=null},onBack:function(){Ne.$emit("visited",this.item.title),this.$store.dispatch({type:"setMsg",msgStr:this.item.title}),this.$router.push("/items")},currentImage:function(){return console.log(this.item.gameplay),this.imgs=this.item.gameplay,this.imgs=this.images}},computed:{nextItemLink:function(){return"/item/"+this.nextItemId}},created:function(){var e=this,t=this.$route.params.itemId;setTimeout(Object(M["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,te.get(t);case 2:e.item=n.sent,console.log("item",e.item);case 4:case"end":return n.stop()}}),n)}))),1e3)},watch:{"$route.params.itemId":function(e){console.log(e),this.loadItem()}},components:{}},We=Ee,$e=(n("bd26"),Object(c["a"])(We,Te,Ae,!1,null,"41520835",null)),De=$e.exports,Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"ShoppingCart"}},[n("p",[e._v("Your Cart")]),n("p",[e._v("No. of items: "+e._s(e.cart.length))]),n("p",[e._v(e._s(e.title))]),n("p",[e._v("Total: $"+e._s(e.total))])])},ze=[],Ge={components:{},props:["cart","total","title"],methods:{itemName:function(){this.$store.dispatch({type:"itemName",name:this.item.title})}},computed:{}},Ve=Ge,He=(n("09e7"),Object(c["a"])(Ve,Fe,ze,!1,null,null,null)),Xe=He.exports,Ue={data:function(){return{items:null,selectedItem:null,filterBy:null}},methods:{loadItems:function(){var e=this;return Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,te.query();case 2:e.items=t.sent,console.log(e.items);case 4:case"end":return t.stop()}}),t)})))()},selectItem:function(e){this.selectedItem=e},removeItem:function(e){var t=this;return Object(M["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,te.remove(e);case 2:t.loadItems();case 3:case"end":return n.stop()}}),n)})))()},setFilter:function(e){this.$store.commit({type:"setFilter",filterBy:e})}},created:function(){var e=this;return Object(M["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.dispatch({type:"loadItems"}),e.loadItems();case 2:case"end":return t.stop()}}),t)})))()},computed:{itemsToShow:function(){return this.$store.getters.itemsToShow},genresForDisplay:function(){var e=this.items.map((function(e){return e.genre}));return console.log(e),new Set(e)},shoppingCart:function(){return this.$store.state.cart},totalAmount:function(){return this.$store.getters.total}},components:{ItemList:ke,ItemDetails:De,ItemFilter:Me,Cart:Xe}},qe=Ue,Ke=Object(c["a"])(qe,C,R,!1,null,null,null),Je=Ke.exports,Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"main-thanks"},[n("h1",[e._v("Thanks for Purchasing "+e._s(this.$route.params.title))]),n("router-link",{attrs:{to:"/items"}},[n("p",[e._v("For More Games Click Here!")])])],1)},Qe=[],Ye={},Ze=Ye,et=Object(c["a"])(Ze,Le,Qe,!1,null,null,null),tt=et.exports;r["a"].use(_["a"]);var nt=[{path:"/about",name:"About",component:O},{path:"/items",name:"ItemList",component:Je},{path:"/item/:itemId",component:De},{path:"/thankyou/:title",component:tt}],rt=new _["a"]({mode:"history",base:"/gamedir/",routes:nt}),at=rt,it=(n("13d5"),n("2f62")),st=(n("4d63"),n("ac1f"),n("4de4"),{state:{items:null,filterBy:null},getters:{itemsToShow:function(e){var t=e.items;if(!e.filterBy)return t;var n=new RegExp(e.filterBy.txt,"i");console.log("res",n);var r=t.filter((function(e){return n.test(e.title)}));return r}},mutations:{setItems:function(e,t){e.items=t.items},setFilter:function(e,t){var n=t.filterBy;e.filterBy=n}},actions:{loadItems:function(e){return Object(M["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,te.query();case 3:r=t.sent,n({type:"setItems",items:r});case 5:case"end":return t.stop()}}),t)})))()}}});r["a"].use(it["a"]);var ot=new it["a"].Store({strict:!0,state:{userMsg:"",cart:[],images:[]},getters:{userMsg:function(e){return e.userMsg},total:function(e){return e.cart.length>0?e.cart.map((function(e){return e.price})).reduce((function(e,t){return e+t})):0},imgs:function(e){return e.images}},mutations:{setMsg:function(e,t){var n=t.msgStr;e.userMsg=n},addToCart:function(e,t){return e.cart.push(t)},imgCarousel:function(e,t){var n=t.imgs;e.images=n}},actions:{setMsg:function(e,t){var n=e.commit,r=t.msgStr;n({type:"setMsg",msgStr:r}),setTimeout((function(){n({type:"setMsg",msgStr:""})}),3e3)}},modules:{itemModule:st}});n("5298");r["a"].config.productionTip=!1,r["a"].directive("rainbow",{inserted:function(e){e.style.color="#"+Math.random().toString().slice(3,9)}}),r["a"].directive("focus",{inserted:function(e){e.focus()}}),new r["a"]({router:at,store:ot,render:function(e){return e(x)}}).$mount("#app")},bd26:function(e,t,n){"use strict";n("0ea3")},cad4:function(e,t,n){}});
//# sourceMappingURL=app.9b383c50.js.map