(function(){"use strict";var e={4306:function(e,s,t){var a=t(5130),i=t(6768);const n={id:"app"};function r(e,s,t,a,r,l){const o=(0,i.g2)("Navbar"),c=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",n,[(0,i.bF)(o),(0,i.bF)(c)])}var l=t.p+"img/logo.dbe530e8.png";const o=e=>((0,i.Qi)("data-v-7422db7c"),e=e(),(0,i.jt)(),e),c={class:"navbar navbar-expand-lg navbar-light bg-light"},u={class:"container-fluid"},d=o((()=>(0,i.Lk)("img",{src:l,alt:"Logo",height:"40"},null,-1))),p=o((()=>(0,i.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,i.Lk)("span",{class:"navbar-toggler-icon"})],-1))),v=o((()=>(0,i.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,i.Lk)("span",{class:"navbar-toggler-icon"})],-1))),m={class:"collapse navbar-collapse",id:"navbarNav"},h={class:"navbar-nav me-auto mb-2 mb-lg-0"},b={class:"nav-item"},g={key:0,class:"nav-item"},k={class:"nav-item"},C={class:"nav-item"},f={class:"nav-item"},_={class:"navbar-nav ml-auto"},L={key:0,class:"nav-item"},S={key:1,class:"nav-item"},x={key:2,class:"nav-item"};function j(e,s,t,a,n,r){const l=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("nav",c,[(0,i.Lk)("div",u,[(0,i.bF)(l,{class:"navbar-brand",to:"/"},{default:(0,i.k6)((()=>[d])),_:1}),p,(0,i.bF)(l,{class:"navbar-brand",to:"/"},{default:(0,i.k6)((()=>[(0,i.eW)("Make Your Sandwich")])),_:1}),v,(0,i.Lk)("div",m,[(0,i.Lk)("ul",h,[(0,i.Lk)("li",b,[(0,i.bF)(l,{class:"nav-link",to:"/"},{default:(0,i.k6)((()=>[(0,i.eW)("Accueil")])),_:1})]),r.isAuthenticated?((0,i.uX)(),(0,i.CE)("li",g,[(0,i.bF)(l,{class:"nav-link",to:"/base-selection"},{default:(0,i.k6)((()=>[(0,i.eW)("Créer un Sandwich")])),_:1})])):(0,i.Q3)("",!0),(0,i.Lk)("li",k,[(0,i.bF)(l,{class:"nav-link",to:"/about-p"},{default:(0,i.k6)((()=>[(0,i.eW)("À propos")])),_:1})]),(0,i.Lk)("li",C,[(0,i.bF)(l,{class:"nav-link",to:"/contact-p"},{default:(0,i.k6)((()=>[(0,i.eW)("Contact")])),_:1})]),(0,i.Lk)("li",f,[(0,i.bF)(l,{class:"nav-link",to:"/view-orders"},{default:(0,i.k6)((()=>[(0,i.eW)("Voir Commandes")])),_:1})])]),(0,i.Lk)("ul",_,[r.isAuthenticated?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("li",L,[(0,i.bF)(l,{class:"nav-link",to:"/login-p"},{default:(0,i.k6)((()=>[(0,i.eW)("Connexion")])),_:1})])),r.isAuthenticated?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("li",S,[(0,i.bF)(l,{class:"nav-link",to:"/register-p"},{default:(0,i.k6)((()=>[(0,i.eW)("Inscription")])),_:1})])),r.isAuthenticated?((0,i.uX)(),(0,i.CE)("li",x,[(0,i.Lk)("a",{class:"nav-link",href:"#",onClick:s[0]||(s[0]=(...e)=>r.logout&&r.logout(...e))},"Déconnexion")])):(0,i.Q3)("",!0)])])])])}t(4114);var E={computed:{isAuthenticated(){return null!==localStorage.getItem("user")}},methods:{logout(){localStorage.removeItem("user"),this.$router.push("/")}}},y=t(1241);const w=(0,y.A)(E,[["render",j],["__scopeId","data-v-7422db7c"]]);var F=w,X={components:{Navbar:F}};const O=(0,y.A)(X,[["render",r]]);var P=O,I=t(1387),A=t(4232);const D={class:"home"};function Q(e,s,t,a,n,r){const l=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.Lk)("div",D,[(0,i.Lk)("h1",null,"Bienvenue "+(0,A.v_)(n.username)+" sur Make Your Sandwich !",1)]),(0,i.bF)(l,{to:"/base-selection",class:"btn btn-primary btn-lg"},{default:(0,i.k6)((()=>[(0,i.eW)("Commencez à créer votre sandwich")])),_:1})],64)}var T={data(){return{username:""}},created(){const e=JSON.parse(localStorage.getItem("user"));e&&(this.username=e.username)}};const $=(0,y.A)(T,[["render",Q],["__scopeId","data-v-605c2f76"]]);var W=$;const B=e=>((0,i.Qi)("data-v-7aa7ce55"),e=e(),(0,i.jt)(),e),V={class:"step animated fadeIn"},K=B((()=>(0,i.Lk)("h2",{class:"step-title"},"🍞 Choix de la base du pain",-1))),M={class:"form-group"},N=["onClick"],q={class:"text-center"},J=["disabled"];function U(e,s,t,a,n,r){return(0,i.uX)(),(0,i.CE)("div",V,[K,(0,i.Lk)("div",M,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.baseOptions,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.value,class:(0,A.C4)(["option",{selected:n.base===e.value}]),onClick:s=>r.selectBase(e.value)},(0,A.v_)(e.emoji)+" "+(0,A.v_)(e.label)+" - €"+(0,A.v_)(e.price.toFixed(2)),11,N)))),128))]),(0,i.Lk)("div",q,[(0,i.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>r.nextStep&&r.nextStep(...e)),class:"btn btn-primary btn-lg",disabled:!n.base},"Suivant",8,J)])])}var G={data(){return{base:"",baseOptions:[{value:"Tortilla de blé",label:"Tortilla de blé",price:1.5,emoji:"🌯"},{value:"Tortilla de maïs",label:"Tortilla de maïs",price:1.5,emoji:"🌯"},{value:"Baguette",label:"Baguette",price:2,emoji:"🥖"}]}},methods:{selectBase(e){this.base=e},nextStep(){this.$store.commit("setBase",{base:this.base,price:this.baseOptions.find((e=>e.value===this.base)).price}),this.$router.push("/protein-selection")}}};const z=(0,y.A)(G,[["render",U],["__scopeId","data-v-7aa7ce55"]]);var R=z;const H=e=>((0,i.Qi)("data-v-7a5102e0"),e=e(),(0,i.jt)(),e),Y={class:"step animated fadeIn"},Z=H((()=>(0,i.Lk)("h2",{class:"step-title"},"🍖 Choix de la viande ou des protéines",-1))),ee={class:"form-group"},se=["onClick"],te={class:"text-center"},ae=["disabled"];function ie(e,s,t,a,n,r){return(0,i.uX)(),(0,i.CE)("div",Y,[Z,(0,i.Lk)("div",ee,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.proteinOptions,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.value,class:(0,A.C4)(["option",{selected:n.selectedProteins.includes(e.value)}]),onClick:s=>r.toggleProtein(e.value)},(0,A.v_)(e.emoji)+" "+(0,A.v_)(e.label)+" - €"+(0,A.v_)(e.price.toFixed(2)),11,se)))),128))]),(0,i.Lk)("div",te,[(0,i.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>r.nextStep&&r.nextStep(...e)),class:"btn btn-primary btn-lg",disabled:0===n.selectedProteins.length},"Suivant",8,ae)])])}var ne={data(){return{selectedProteins:[],proteinOptions:[{value:"Poulet grillé",label:"Poulet grillé",price:3,emoji:"🍗"},{value:"Bœuf haché",label:"Bœuf haché",price:3.5,emoji:"🍖"},{value:"Steak",label:"Steak",price:4,emoji:"🥩"},{value:"Viande kebab",label:"Viande kebab",price:3.5,emoji:"🥙"},{value:"Merguez",label:"Merguez",price:3,emoji:"🌭"},{value:"Saucisses",label:"Saucisses",price:2.5,emoji:"🌭"},{value:"Nuggets de poulet",label:"Nuggets de poulet",price:3,emoji:"🍗"},{value:"Falafel",label:"Falafel",price:2.5,emoji:"🧆"},{value:"Tofu",label:"Tofu",price:2,emoji:"🍣"}]}},methods:{toggleProtein(e){this.selectedProteins.includes(e)?this.selectedProteins=this.selectedProteins.filter((s=>s!==e)):this.selectedProteins.push(e)},nextStep(){const e=this.selectedProteins.map((e=>{const s=this.proteinOptions.find((s=>s.value===e));return{name:s.label,price:s.price}}));this.$store.commit("setProteins",e),this.$router.push("/cheese-selection")}}};const re=(0,y.A)(ne,[["render",ie],["__scopeId","data-v-7a5102e0"]]);var le=re;const oe=e=>((0,i.Qi)("data-v-66d25275"),e=e(),(0,i.jt)(),e),ce={class:"step animated fadeIn"},ue=oe((()=>(0,i.Lk)("h2",{class:"step-title"},"🧀 Ajout de fromage",-1))),de={class:"form-group"},pe=["onClick"],ve={class:"text-center"},me=["disabled"];function he(e,s,t,a,n,r){return(0,i.uX)(),(0,i.CE)("div",ce,[ue,(0,i.Lk)("div",de,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.cheeseOptions,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.value,class:(0,A.C4)(["option",{selected:n.cheese===e.value}]),onClick:s=>r.selectCheese(e.value)},(0,A.v_)(e.emoji)+" "+(0,A.v_)(e.label)+" - €"+(0,A.v_)(e.price.toFixed(2)),11,pe)))),128))]),(0,i.Lk)("div",ve,[(0,i.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>r.nextStep&&r.nextStep(...e)),class:"btn btn-primary btn-lg",disabled:!n.cheese},"Suivant",8,me)])])}var be={data(){return{cheese:"",cheeseOptions:[{value:"Fromage râpé",label:"Fromage râpé",price:1,emoji:"🧀"},{value:"Fromage fondu",label:"Fromage fondu",price:1.2,emoji:"🧀"},{value:"Sauce fromagère",label:"Sauce fromagère",price:1.5,emoji:"🧀"}]}},methods:{selectCheese(e){this.cheese=e},nextStep(){this.$store.commit("setCheese",{cheese:this.cheese,price:this.cheeseOptions.find((e=>e.value===this.cheese)).price}),this.$router.push("/veggie-selection")}}};const ge=(0,y.A)(be,[["render",he],["__scopeId","data-v-66d25275"]]);var ke=ge;const Ce=e=>((0,i.Qi)("data-v-39ed749a"),e=e(),(0,i.jt)(),e),fe={class:"step animated fadeIn"},_e=Ce((()=>(0,i.Lk)("h2",{class:"step-title"},"🥗 Ajout de légumes et accompagnements",-1))),Le={class:"form-group"},Se=["onClick"],xe={class:"text-center"},je=["disabled"];function Ee(e,s,t,a,n,r){return(0,i.uX)(),(0,i.CE)("div",fe,[_e,(0,i.Lk)("div",Le,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.veggieOptions,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.value,class:(0,A.C4)(["option",{selected:n.selectedVeggies.includes(e.value)}]),onClick:s=>r.toggleVeggie(e.value)},(0,A.v_)(e.emoji)+" "+(0,A.v_)(e.label)+" - €"+(0,A.v_)(e.price.toFixed(2)),11,Se)))),128))]),(0,i.Lk)("div",xe,[(0,i.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>r.nextStep&&r.nextStep(...e)),class:"btn btn-primary btn-lg",disabled:0===n.selectedVeggies.length},"Suivant",8,je)])])}var ye={data(){return{selectedVeggies:[],veggieOptions:[{value:"Salade verte",label:"Salade verte",price:.5,emoji:"🥗"},{value:"Tomates en dés",label:"Tomates en dés",price:.5,emoji:"🍅"},{value:"Oignons émincés",label:"Oignons émincés",price:.3,emoji:"🧅"},{value:"Poivrons en lamelles",label:"Poivrons en lamelles",price:.4,emoji:"🌶️"},{value:"Concombre en rondelles",label:"Concombre en rondelles",price:.4,emoji:"🥒"},{value:"Carottes râpées",label:"Carottes râpées",price:.3,emoji:"🥕"},{value:"Chou blanc ou rouge émincé",label:"Chou blanc ou rouge émincé",price:.4,emoji:"🥬"},{value:"Champignons sautés",label:"Champignons sautés",price:.5,emoji:"🍄"},{value:"Cornichons en rondelles",label:"Cornichons en rondelles",price:.3,emoji:"🥒"}]}},methods:{toggleVeggie(e){this.selectedVeggies.includes(e)?this.selectedVeggies=this.selectedVeggies.filter((s=>s!==e)):this.selectedVeggies.push(e)},nextStep(){const e=this.selectedVeggies.map((e=>{const s=this.veggieOptions.find((s=>s.value===e));return{name:s.label,price:s.price}}));this.$store.commit("setVeggies",e),this.$router.push("/sauce-selection")}}};const we=(0,y.A)(ye,[["render",Ee],["__scopeId","data-v-39ed749a"]]);var Fe=we;const Xe=e=>((0,i.Qi)("data-v-3ae0cd2b"),e=e(),(0,i.jt)(),e),Oe={class:"step animated fadeIn"},Pe=Xe((()=>(0,i.Lk)("h2",{class:"step-title"},"🥫 Choix des sauces",-1))),Ie={class:"form-group"},Ae=["onClick"],De={class:"text-center"},Qe=["disabled"];function Te(e,s,t,a,n,r){return(0,i.uX)(),(0,i.CE)("div",Oe,[Pe,(0,i.Lk)("div",Ie,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.sauceOptions,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.value,class:(0,A.C4)(["option",{selected:n.selectedSauces.includes(e.value)}]),onClick:s=>r.toggleSauce(e.value)},(0,A.v_)(e.emoji)+" "+(0,A.v_)(e.label)+" - €"+(0,A.v_)(e.price.toFixed(2)),11,Ae)))),128))]),(0,i.Lk)("div",De,[(0,i.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>r.nextStep&&r.nextStep(...e)),class:"btn btn-primary btn-lg",disabled:0===n.selectedSauces.length},"Suivant",8,Qe)])])}var $e={data(){return{selectedSauces:[],sauceOptions:[{value:"Sauce blanche",label:"Sauce blanche",price:.5,emoji:"🥛"},{value:"Sauce algérienne",label:"Sauce algérienne",price:.5,emoji:"🌶️"},{value:"Sauce samouraï",label:"Sauce samouraï",price:.5,emoji:"🔥"},{value:"Sauce barbecue",label:"Sauce barbecue",price:.5,emoji:"🍖"},{value:"Ketchup",label:"Ketchup",price:.3,emoji:"🍅"},{value:"Mayonnaise",label:"Mayonnaise",price:.3,emoji:"🥚"},{value:"Sauce harissa",label:"Sauce harissa",price:.5,emoji:"🌶️"},{value:"Sauce andalouse",label:"Sauce andalouse",price:.5,emoji:"🍅"},{value:"Sauce fromage",label:"Sauce fromage",price:.5,emoji:"🧀"}]}},methods:{toggleSauce(e){this.selectedSauces.includes(e)?this.selectedSauces=this.selectedSauces.filter((s=>s!==e)):this.selectedSauces.push(e)},nextStep(){const e=this.selectedSauces.map((e=>{const s=this.sauceOptions.find((s=>s.value===e));return{name:s.label,price:s.price}}));this.$store.commit("setSauces",e),this.$router.push("/extras-selection")}}};const We=(0,y.A)($e,[["render",Te],["__scopeId","data-v-3ae0cd2b"]]);var Be=We;const Ve=e=>((0,i.Qi)("data-v-2d2deea8"),e=e(),(0,i.jt)(),e),Ke={class:"step animated fadeIn"},Me=Ve((()=>(0,i.Lk)("h2",{class:"step-title"},"🍟 Ajout d'autres ingrédients optionnels",-1))),Ne={class:"form-group"},qe=["onClick"],Je={class:"text-center"},Ue=["disabled"];function Ge(e,s,t,a,n,r){return(0,i.uX)(),(0,i.CE)("div",Ke,[Me,(0,i.Lk)("div",Ne,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.extrasOptions,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.value,class:(0,A.C4)(["option",{selected:n.selectedExtras.includes(e.value)}]),onClick:s=>r.toggleExtra(e.value)},(0,A.v_)(e.emoji)+" "+(0,A.v_)(e.label)+" - €"+(0,A.v_)(e.price.toFixed(2)),11,qe)))),128))]),(0,i.Lk)("div",Je,[(0,i.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>r.nextStep&&r.nextStep(...e)),class:"btn btn-primary btn-lg",disabled:0===n.selectedExtras.length},"Suivant",8,Ue)])])}var ze={data(){return{selectedExtras:[],extrasOptions:[{value:"Frites",label:"Frites",price:1,emoji:"🍟"},{value:"Olives",label:"Olives",price:.5,emoji:"🫒"},{value:"Jalapeños",label:"Jalapeños",price:.5,emoji:"🌶️"},{value:"Citron",label:"Citron",price:.3,emoji:"🍋"}]}},methods:{toggleExtra(e){this.selectedExtras.includes(e)?this.selectedExtras=this.selectedExtras.filter((s=>s!==e)):this.selectedExtras.push(e)},nextStep(){const e=this.selectedExtras.map((e=>{const s=this.extrasOptions.find((s=>s.value===e));return{name:s.label,price:s.price}}));this.$store.commit("setExtras",e),this.$router.push("/seasoning-selection")}}};const Re=(0,y.A)(ze,[["render",Ge],["__scopeId","data-v-2d2deea8"]]);var He=Re;const Ye=e=>((0,i.Qi)("data-v-5f11bb8e"),e=e(),(0,i.jt)(),e),Ze={class:"step animated fadeIn"},es=Ye((()=>(0,i.Lk)("h2",{class:"step-title"},"🧂 Assaisonnement et épices",-1))),ss={class:"form-group"},ts=["onClick"],as={class:"text-center"},is=["disabled"];function ns(e,s,t,a,n,r){return(0,i.uX)(),(0,i.CE)("div",Ze,[es,(0,i.Lk)("div",ss,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.seasoningOptions,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.value,class:(0,A.C4)(["option",{selected:n.selectedSeasonings.includes(e.value)}]),onClick:s=>r.toggleSeasoning(e.value)},(0,A.v_)(e.emoji)+" "+(0,A.v_)(e.label)+" - €"+(0,A.v_)(e.price.toFixed(2)),11,ts)))),128))]),(0,i.Lk)("div",as,[(0,i.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>r.nextStep&&r.nextStep(...e)),class:"btn btn-primary btn-lg",disabled:0===n.selectedSeasonings.length},"Suivant",8,is)])])}var rs={data(){return{selectedSeasonings:[],seasoningOptions:[{value:"Sel",label:"Sel",price:.1,emoji:"🧂"},{value:"Poivre",label:"Poivre",price:.1,emoji:"🌶️"},{value:"Paprika",label:"Paprika",price:.1,emoji:"🌶️"},{value:"Cumin",label:"Cumin",price:.1,emoji:"🌿"},{value:"Coriandre",label:"Coriandre",price:.1,emoji:"🌿"},{value:"Ail en poudre",label:"Ail en poudre",price:.1,emoji:"🧄"},{value:"Oignon en poudre",label:"Oignon en poudre",price:.1,emoji:"🧅"},{value:"Herbes de Provence",label:"Herbes de Provence",price:.1,emoji:"🌿"}]}},methods:{toggleSeasoning(e){this.selectedSeasonings.includes(e)?this.selectedSeasonings=this.selectedSeasonings.filter((s=>s!==e)):this.selectedSeasonings.push(e)},nextStep(){const e=this.selectedSeasonings.map((e=>{const s=this.seasoningOptions.find((s=>s.value===e));return{name:s.label,price:s.price}}));this.$store.commit("setSeasonings",e),this.$router.push("/drink-selection")}}};const ls=(0,y.A)(rs,[["render",ns],["__scopeId","data-v-5f11bb8e"]]);var os=ls;const cs=e=>((0,i.Qi)("data-v-6dd0880a"),e=e(),(0,i.jt)(),e),us={class:"step animated fadeIn"},ds=cs((()=>(0,i.Lk)("h2",{class:"step-title"},"🥤 Choix des boissons",-1))),ps={class:"form-group"},vs=["onClick"],ms={class:"text-center"},hs=["disabled"];function bs(e,s,t,a,n,r){return(0,i.uX)(),(0,i.CE)("div",us,[ds,(0,i.Lk)("div",ps,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.drinkOptions,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.value,class:(0,A.C4)(["option",{selected:n.drink===e.value}]),onClick:s=>r.selectDrink(e.value)},(0,A.v_)(e.emoji)+" "+(0,A.v_)(e.label)+" - €"+(0,A.v_)(e.price.toFixed(2)),11,vs)))),128))]),(0,i.Lk)("div",ms,[(0,i.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>r.nextStep&&r.nextStep(...e)),class:"btn btn-primary btn-lg",disabled:!n.drink},"Suivant",8,hs)])])}var gs={data(){return{drink:"",drinkOptions:[{value:"Coca-Cola",label:"Coca-Cola",price:1.5,emoji:"🥤"},{value:"Pepsi",label:"Pepsi",price:1.5,emoji:"🥤"},{value:"Sprite",label:"Sprite",price:1.5,emoji:"🥤"},{value:"Fanta",label:"Fanta",price:1.5,emoji:"🥤"},{value:"Dr. Pepper",label:"Dr. Pepper",price:1.5,emoji:"🥤"},{value:"Mountain Dew",label:"Mountain Dew",price:1.5,emoji:"🥤"},{value:"7UP",label:"7UP",price:1.5,emoji:"🥤"},{value:"Ginger Ale",label:"Ginger Ale",price:1.5,emoji:"🥤"},{value:"Root Beer",label:"Root Beer",price:1.5,emoji:"🥤"},{value:"Orangina",label:"Orangina",price:1.5,emoji:"🍊"}]}},methods:{selectDrink(e){this.drink=e},nextStep(){this.$store.commit("setDrink",{drink:this.drink,price:this.drinkOptions.find((e=>e.value===this.drink)).price}),this.$router.push("/dessert-selection")}}};const ks=(0,y.A)(gs,[["render",bs],["__scopeId","data-v-6dd0880a"]]);var Cs=ks;const fs=e=>((0,i.Qi)("data-v-06f65be1"),e=e(),(0,i.jt)(),e),_s={class:"step animated fadeIn"},Ls=fs((()=>(0,i.Lk)("h2",{class:"step-title"},"🍰 Choix des desserts",-1))),Ss={class:"form-group"},xs=["onClick"],js={class:"text-center"},Es=["disabled"];function ys(e,s,t,a,n,r){return(0,i.uX)(),(0,i.CE)("div",_s,[Ls,(0,i.Lk)("div",Ss,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.dessertOptions,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.value,class:(0,A.C4)(["option",{selected:n.dessert===e.value}]),onClick:s=>r.selectDessert(e.value)},(0,A.v_)(e.emoji)+" "+(0,A.v_)(e.label)+" - €"+(0,A.v_)(e.price.toFixed(2)),11,xs)))),128))]),(0,i.Lk)("div",js,[(0,i.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>r.nextStep&&r.nextStep(...e)),class:"btn btn-primary btn-lg",disabled:!n.dessert},"Terminer",8,Es)])])}var ws={data(){return{dessert:"",dessertOptions:[{value:"Brownies",label:"Brownies",price:2,emoji:"🍫"},{value:"Cookies",label:"Cookies",price:2,emoji:"🍪"},{value:"Muffins",label:"Muffins",price:2.5,emoji:"🧁"},{value:"Cheesecake",label:"Cheesecake",price:3,emoji:"🍰"},{value:"Tarte aux pommes",label:"Tarte aux pommes",price:3,emoji:"🍏"},{value:"Gâteau au chocolat",label:"Gâteau au chocolat",price:3,emoji:"🍫"},{value:"Beignets",label:"Beignets",price:2,emoji:"🍩"},{value:"Éclairs",label:"Éclairs",price:3,emoji:"🍰"},{value:"Tiramisu",label:"Tiramisu",price:3,emoji:"🍮"},{value:"Glace",label:"Glace",price:2.5,emoji:"🍦"}]}},methods:{selectDessert(e){this.dessert=e},nextStep(){this.$store.commit("setDessert",{dessert:this.dessert,price:this.dessertOptions.find((e=>e.value===this.dessert)).price}),this.$router.push("/final-step")}}};const Fs=(0,y.A)(ws,[["render",ys],["__scopeId","data-v-06f65be1"]]);var Xs=Fs;const Os=e=>((0,i.Qi)("data-v-4a15a978"),e=e(),(0,i.jt)(),e),Ps={class:"step animated fadeIn"},Is=Os((()=>(0,i.Lk)("h2",{class:"step-title"},"🥪 Résumé de votre commande 🥪",-1))),As={class:"summary-grid"},Ds={class:"summary-list"},Qs=Os((()=>(0,i.Lk)("strong",null,"🍞 Base:",-1))),Ts=Os((()=>(0,i.Lk)("strong",null,"🍖 Protéines:",-1))),$s={key:0},Ws=Os((()=>(0,i.Lk)("strong",null,"🧀 Fromage:",-1))),Bs=Os((()=>(0,i.Lk)("strong",null,"🥗 Légumes:",-1))),Vs=Os((()=>(0,i.Lk)("strong",null,"🥫 Sauces:",-1))),Ks=Os((()=>(0,i.Lk)("strong",null,"🍟 Extras:",-1))),Ms=Os((()=>(0,i.Lk)("strong",null,"🧂 Assaisonnement:",-1))),Ns={key:1},qs=Os((()=>(0,i.Lk)("strong",null,"🥤 Boisson:",-1))),Js={key:2},Us=Os((()=>(0,i.Lk)("strong",null,"🍰 Dessert:",-1))),Gs={class:"total"},zs={class:"text-center mt-3"},Rs={class:"text-center mt-3"};function Hs(e,s,t,a,n,r){return(0,i.uX)(),(0,i.CE)("div",Ps,[Is,(0,i.Lk)("div",As,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.sandwiches,((e,s)=>((0,i.uX)(),(0,i.CE)("div",{key:s,class:"summary-sandwich"},[(0,i.Lk)("h3",null,"🥙 Sandwich "+(0,A.v_)(s+1),1),(0,i.Lk)("ul",Ds,[(0,i.Lk)("li",null,[Qs,(0,i.eW)(" "+(0,A.v_)(e.base)+" - €"+(0,A.v_)(e.basePrice.toFixed(2)),1)]),(0,i.Lk)("li",null,[Ts,(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.proteins,((e,s)=>((0,i.uX)(),(0,i.CE)("li",{key:s},(0,A.v_)(e.quantity)+"x "+(0,A.v_)(e.name)+" - €"+(0,A.v_)((e.price*e.quantity).toFixed(2)),1)))),128))])]),e.cheese?((0,i.uX)(),(0,i.CE)("li",$s,[Ws,(0,i.eW)(" "+(0,A.v_)(e.cheese)+" - €"+(0,A.v_)(e.cheesePrice.toFixed(2)),1)])):(0,i.Q3)("",!0),(0,i.Lk)("li",null,[Bs,(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.veggies,((e,s)=>((0,i.uX)(),(0,i.CE)("li",{key:s},(0,A.v_)(e.name)+" - €"+(0,A.v_)(e.price.toFixed(2)),1)))),128))])]),(0,i.Lk)("li",null,[Vs,(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.sauces,((e,s)=>((0,i.uX)(),(0,i.CE)("li",{key:s},(0,A.v_)(e.name)+" - €"+(0,A.v_)(e.price.toFixed(2)),1)))),128))])]),(0,i.Lk)("li",null,[Ks,(0,i.Lk)("ul",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.extras,((e,s)=>((0,i.uX)(),(0,i.CE)("li",{key:s},(0,A.v_)(e.name)+" - €"+(0,A.v_)(e.price.toFixed(2)),1)))),128))])]),(0,i.Lk)("li",null,[Ms,(0,i.eW)(" "+(0,A.v_)(e.seasonings.map((e=>e.name)).join(", ")),1)]),e.drink?((0,i.uX)(),(0,i.CE)("li",Ns,[qs,(0,i.eW)(" "+(0,A.v_)(e.drink)+" - €"+(0,A.v_)(e.drinkPrice.toFixed(2)),1)])):(0,i.Q3)("",!0),e.dessert?((0,i.uX)(),(0,i.CE)("li",Js,[Us,(0,i.eW)(" "+(0,A.v_)(e.dessert)+" - €"+(0,A.v_)(e.dessertPrice.toFixed(2)),1)])):(0,i.Q3)("",!0)]),(0,i.Lk)("h4",Gs,"Total: €"+(0,A.v_)(e.total.toFixed(2)),1)])))),128))]),(0,i.Lk)("div",zs,[(0,i.Lk)("button",{onClick:s[0]||(s[0]=(...e)=>r.addAnotherSandwich&&r.addAnotherSandwich(...e)),class:"btn btn-primary btn-lg"},"Ajouter un autre sandwich")]),(0,i.Lk)("div",Rs,[(0,i.Lk)("button",{onClick:s[1]||(s[1]=(...e)=>r.submitOrder&&r.submitOrder(...e)),class:"btn btn-success btn-lg"},"Commander 🍽️")])])}var Ys=t(4373),Zs=t(782),et={computed:{...(0,Zs.aH)(["sandwiches"])},methods:{addAnotherSandwich(){this.$router.push("/base-selection")},async submitOrder(){try{const e=await Ys.A.post("http://localhost:8000/submit_order.php",{sandwiches:this.sandwiches});e.data.success?(alert("Votre commande a été passée avec succès!"),this.$store.commit("resetOrder"),this.$router.push("/")):alert("Une erreur s'est produite lors de la soumission de votre commande.")}catch(e){console.error("Erreur lors de la soumission de la commande:",e),alert("Une erreur s'est produite lors de la soumission de votre commande.")}}}};const st=(0,y.A)(et,[["render",Hs],["__scopeId","data-v-4a15a978"]]);var tt=st;const at=e=>((0,i.Qi)("data-v-45ec05b6"),e=e(),(0,i.jt)(),e),it={class:"about"},nt=at((()=>(0,i.Lk)("h2",null,"À propos",-1))),rt=at((()=>(0,i.Lk)("p",null,"Bienvenue sur Make Your Sandwich. Créez votre sandwich personnalisé en quelques étapes simples.",-1))),lt=[nt,rt];function ot(e,s,t,a,n,r){return(0,i.uX)(),(0,i.CE)("div",it,lt)}var ct={name:"AboutP"};const ut=(0,y.A)(ct,[["render",ot],["__scopeId","data-v-45ec05b6"]]);var dt=ut;const pt=e=>((0,i.Qi)("data-v-033a203c"),e=e(),(0,i.jt)(),e),vt={class:"contact"},mt=pt((()=>(0,i.Lk)("h2",null,"Contact",-1))),ht=pt((()=>(0,i.Lk)("p",null,[(0,i.eW)("Pour toute question, veuillez nous contacter à "),(0,i.Lk)("a",{href:"mailto:contact@make-your-sandwich.com"},"contact@make-your-sandwich.com"),(0,i.eW)(".")],-1))),bt=[mt,ht];function gt(e,s,t,a,n,r){return(0,i.uX)(),(0,i.CE)("div",vt,bt)}var kt={name:"ContactP"};const Ct=(0,y.A)(kt,[["render",gt],["__scopeId","data-v-033a203c"]]);var ft=Ct;const _t=e=>((0,i.Qi)("data-v-07449066"),e=e(),(0,i.jt)(),e),Lt={class:"auth-container"},St={class:"auth-card"},xt=_t((()=>(0,i.Lk)("h2",null,"Connexion",-1))),jt={class:"input-group"},Et=_t((()=>(0,i.Lk)("label",{for:"email"},"Email",-1))),yt={class:"input-group"},wt=_t((()=>(0,i.Lk)("label",{for:"password"},"Mot de passe",-1))),Ft=_t((()=>(0,i.Lk)("button",{type:"submit",class:"btn-primary"},"Se connecter",-1)));function Xt(e,s,t,n,r,l){return(0,i.uX)(),(0,i.CE)("div",Lt,[(0,i.Lk)("div",St,[xt,(0,i.Lk)("form",{onSubmit:s[2]||(s[2]=(0,a.D$)(((...e)=>l.login&&l.login(...e)),["prevent"]))},[(0,i.Lk)("div",jt,[Et,(0,i.bo)((0,i.Lk)("input",{type:"email","onUpdate:modelValue":s[0]||(s[0]=e=>r.email=e),id:"email",required:""},null,512),[[a.Jo,r.email]])]),(0,i.Lk)("div",yt,[wt,(0,i.bo)((0,i.Lk)("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=e=>r.password=e),id:"password",required:""},null,512),[[a.Jo,r.password]])]),Ft],32)])])}var Ot={data(){return{email:"",password:""}},methods:{async login(){try{const e=await Ys.A.post("http://localhost:8000/login.php",{email:this.email,password:this.password});e.data.success?(localStorage.setItem("user",JSON.stringify(e.data.user)),alert("Connexion réussie!"),this.$router.push("/")):alert("Erreur: "+e.data.message)}catch(e){console.error("Erreur lors de la connexion:",e),alert("Erreur lors de la connexion.")}}}};const Pt=(0,y.A)(Ot,[["render",Xt],["__scopeId","data-v-07449066"]]);var It=Pt;const At=e=>((0,i.Qi)("data-v-83498368"),e=e(),(0,i.jt)(),e),Dt={class:"auth-container"},Qt={class:"auth-card"},Tt=At((()=>(0,i.Lk)("h2",null,"Inscription",-1))),$t={class:"input-group"},Wt=At((()=>(0,i.Lk)("label",{for:"username"},"Nom d'utilisateur",-1))),Bt={class:"input-group"},Vt=At((()=>(0,i.Lk)("label",{for:"email"},"Email",-1))),Kt={class:"input-group"},Mt=At((()=>(0,i.Lk)("label",{for:"password"},"Mot de passe",-1))),Nt=At((()=>(0,i.Lk)("button",{type:"submit",class:"btn-primary"},"S'inscrire",-1)));function qt(e,s,t,n,r,l){return(0,i.uX)(),(0,i.CE)("div",Dt,[(0,i.Lk)("div",Qt,[Tt,(0,i.Lk)("form",{onSubmit:s[3]||(s[3]=(0,a.D$)(((...e)=>l.register&&l.register(...e)),["prevent"]))},[(0,i.Lk)("div",$t,[Wt,(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>r.username=e),id:"username",required:""},null,512),[[a.Jo,r.username]])]),(0,i.Lk)("div",Bt,[Vt,(0,i.bo)((0,i.Lk)("input",{type:"email","onUpdate:modelValue":s[1]||(s[1]=e=>r.email=e),id:"email",required:""},null,512),[[a.Jo,r.email]])]),(0,i.Lk)("div",Kt,[Mt,(0,i.bo)((0,i.Lk)("input",{type:"password","onUpdate:modelValue":s[2]||(s[2]=e=>r.password=e),id:"password",required:""},null,512),[[a.Jo,r.password]])]),Nt],32)])])}var Jt={data(){return{username:"",email:"",password:""}},methods:{async register(){try{const e=await Ys.A.post("http://localhost:8000/register.php",{username:this.username,email:this.email,password:this.password});e.data.success?(alert("Inscription réussie!"),this.$router.push("/login-p")):alert("Erreur: "+e.data.message)}catch(e){console.error("Erreur lors de l'inscription:",e),alert("Erreur lors de l'inscription.")}}}};const Ut=(0,y.A)(Jt,[["render",qt],["__scopeId","data-v-83498368"]]);var Gt=Ut;const zt=e=>((0,i.Qi)("data-v-0d8ed813"),e=e(),(0,i.jt)(),e),Rt={class:"view-orders"},Ht=zt((()=>(0,i.Lk)("h2",null,"Commandes en Cours",-1))),Yt={key:0},Zt={key:1},ea=zt((()=>(0,i.Lk)("strong",null,"Sandwich ID:",-1))),sa=zt((()=>(0,i.Lk)("strong",null,"Base:",-1))),ta={key:0},aa=zt((()=>(0,i.Lk)("strong",null,"Fromage:",-1))),ia={key:1},na=zt((()=>(0,i.Lk)("strong",null,"Boisson:",-1))),ra={key:2},la=zt((()=>(0,i.Lk)("strong",null,"Dessert:",-1))),oa=zt((()=>(0,i.Lk)("strong",null,"Total:",-1))),ca=["onClick"],ua=zt((()=>(0,i.Lk)("h2",null,"Commandes Traitées",-1))),da={key:2},pa={key:3},va=zt((()=>(0,i.Lk)("strong",null,"Sandwich ID:",-1))),ma=zt((()=>(0,i.Lk)("strong",null,"Base:",-1))),ha={key:0},ba=zt((()=>(0,i.Lk)("strong",null,"Fromage:",-1))),ga={key:1},ka=zt((()=>(0,i.Lk)("strong",null,"Boisson:",-1))),Ca={key:2},fa=zt((()=>(0,i.Lk)("strong",null,"Dessert:",-1))),_a=zt((()=>(0,i.Lk)("strong",null,"Total:",-1)));function La(e,s,t,a,n,r){return(0,i.uX)(),(0,i.CE)("div",Rt,[Ht,0===n.orders.length?((0,i.uX)(),(0,i.CE)("div",Yt,"Aucune commande disponible.")):((0,i.uX)(),(0,i.CE)("div",Zt,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.orders,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.order_id,class:"order"},[(0,i.Lk)("h3",null,"Commande #"+(0,A.v_)(e.order_id)+" par "+(0,A.v_)(e.username)+" le "+(0,A.v_)(r.formatDate(e.created_at)),1),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.sandwiches,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.sandwich_id,class:"sandwich"},[(0,i.Lk)("p",null,[ea,(0,i.eW)(" "+(0,A.v_)(e.sandwich_id),1)]),(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[sa,(0,i.eW)(" "+(0,A.v_)(e.base)+" - €"+(0,A.v_)(parseFloat(e.base_price).toFixed(2)),1)]),e.cheese?((0,i.uX)(),(0,i.CE)("li",ta,[aa,(0,i.eW)(" "+(0,A.v_)(e.cheese)+" - €"+(0,A.v_)(parseFloat(e.cheese_price).toFixed(2)),1)])):(0,i.Q3)("",!0),e.drink?((0,i.uX)(),(0,i.CE)("li",ia,[na,(0,i.eW)(" "+(0,A.v_)(e.drink)+" - €"+(0,A.v_)(parseFloat(e.drink_price).toFixed(2)),1)])):(0,i.Q3)("",!0),e.dessert?((0,i.uX)(),(0,i.CE)("li",ra,[la,(0,i.eW)(" "+(0,A.v_)(e.dessert)+" - €"+(0,A.v_)(parseFloat(e.dessert_price).toFixed(2)),1)])):(0,i.Q3)("",!0),(0,i.Lk)("li",null,[oa,(0,i.eW)(" €"+(0,A.v_)(parseFloat(e.total_price).toFixed(2)),1)])])])))),128)),(0,i.Lk)("button",{onClick:s=>r.markAsDelivered(e.order_id),class:"btn-delivered"},"Délivré",8,ca)])))),128))])),ua,0===n.processedOrders.length?((0,i.uX)(),(0,i.CE)("div",da,"Aucune commande traitée disponible.")):((0,i.uX)(),(0,i.CE)("div",pa,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(n.processedOrders,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.order_id,class:"order"},[(0,i.Lk)("h3",null,"Commande #"+(0,A.v_)(e.order_id)+" par "+(0,A.v_)(e.username)+" le "+(0,A.v_)(r.formatDate(e.created_at)),1),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.sandwiches,(e=>((0,i.uX)(),(0,i.CE)("div",{key:e.sandwich_id,class:"sandwich"},[(0,i.Lk)("p",null,[va,(0,i.eW)(" "+(0,A.v_)(e.sandwich_id),1)]),(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[ma,(0,i.eW)(" "+(0,A.v_)(e.base)+" - €"+(0,A.v_)(parseFloat(e.base_price).toFixed(2)),1)]),e.cheese?((0,i.uX)(),(0,i.CE)("li",ha,[ba,(0,i.eW)(" "+(0,A.v_)(e.cheese)+" - €"+(0,A.v_)(parseFloat(e.cheese_price).toFixed(2)),1)])):(0,i.Q3)("",!0),e.drink?((0,i.uX)(),(0,i.CE)("li",ga,[ka,(0,i.eW)(" "+(0,A.v_)(e.drink)+" - €"+(0,A.v_)(parseFloat(e.drink_price).toFixed(2)),1)])):(0,i.Q3)("",!0),e.dessert?((0,i.uX)(),(0,i.CE)("li",Ca,[fa,(0,i.eW)(" "+(0,A.v_)(e.dessert)+" - €"+(0,A.v_)(parseFloat(e.dessert_price).toFixed(2)),1)])):(0,i.Q3)("",!0),(0,i.Lk)("li",null,[_a,(0,i.eW)(" €"+(0,A.v_)(parseFloat(e.total_price).toFixed(2)),1)])])])))),128))])))),128))]))])}var Sa={data(){return{orders:[],processedOrders:[]}},created(){this.fetchOrders()},methods:{async fetchOrders(){try{const e=await Ys.A.get("http://localhost:8000/getorder.php");e.data.success?this.orders=e.data.orders:alert("Erreur lors de la récupération des commandes.")}catch(e){console.error("Erreur lors de la récupération des commandes:",e),alert("Erreur lors de la récupération des commandes.")}},async markAsDelivered(e){try{console.log(`Marking order ${e} as delivered`);const s=await Ys.A.post("http://localhost:8000/delete_order.php",{order_id:e});if(console.log("Response from server:",s.data),s.data.success){const s=this.orders.find((s=>s.order_id===e));this.processedOrders.push(s),this.orders=this.orders.filter((s=>s.order_id!==e)),alert("Commande marquée comme délivrée.")}else alert(`Erreur lors de la suppression de la commande: ${s.data.message}`)}catch(s){console.error("Erreur lors de la suppression de la commande:",s),alert("Erreur lors de la suppression de la commande.")}},formatDate(e){const s={year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit"};return new Date(e).toLocaleDateString("fr-FR",s)}}};const xa=(0,y.A)(Sa,[["render",La],["__scopeId","data-v-0d8ed813"]]);var ja=xa;const Ea=[{path:"/",component:W},{path:"/base-selection",component:R},{path:"/protein-selection",component:le},{path:"/cheese-selection",component:ke},{path:"/veggie-selection",component:Fe},{path:"/sauce-selection",component:Be},{path:"/extras-selection",component:He},{path:"/seasoning-selection",component:os},{path:"/drink-selection",component:Cs},{path:"/dessert-selection",component:Xs},{path:"/final-step",component:tt},{path:"/about-p",component:dt},{path:"/contact-p",component:ft},{path:"/login-p",component:It},{path:"/register-p",component:Gt},{path:"/view-orders",name:"ViewOrders",component:ja}],ya=(0,I.aE)({history:(0,I.LA)(),routes:Ea});var wa=ya,Fa=(0,Zs.y$)({state:{sandwiches:[],prices:{base:{"Tortilla de blé":1.5,"Tortilla de maïs":1.5,Baguette:2},proteins:{"Poulet grillé":3,"Bœuf haché":3.5,Steak:4,"Viande kebab":3.5,Merguez:3,Saucisses:2.5,"Nuggets de poulet":3,Falafel:2.5,Tofu:2},cheese:{"Fromage râpé":1,"Fromage fondu":1.2,"Sauce fromagère":1.5},veggies:{"Salade verte":.5,"Tomates en dés":.5,"Oignons émincés":.3,"Poivrons en lamelles":.4,"Concombre en rondelles":.4,"Carottes râpées":.3,"Chou blanc ou rouge émincé":.4,"Champignons sautés":.5,"Cornichons en rondelles":.3},sauces:{"Sauce blanche":.5,"Sauce algérienne":.5,"Sauce samouraï":.5,"Sauce barbecue":.5,Ketchup:.3,Mayonnaise:.3,"Sauce harissa":.5,"Sauce andalouse":.5,"Sauce fromage":.5},extras:{Frites:1,Olives:.5,"Jalapeños":.5,Citron:.3},seasonings:{Sel:.1,Poivre:.1,Paprika:.1,Cumin:.1,Coriandre:.1,"Ail en poudre":.1,"Oignon en poudre":.1,"Herbes de Provence":.1},drink:{"Coca-Cola":1.5,Pepsi:1.5,Sprite:1.5,Fanta:1.5,"Dr. Pepper":1.5,"Mountain Dew":1.5,"7UP":1.5,"Ginger Ale":1.5,"Root Beer":1.5,Orangina:1.5},dessert:{Brownies:2,Cookies:2,Muffins:2.5,Cheesecake:3,"Tarte aux pommes":3,"Gâteau au chocolat":3,Beignets:2,"Éclairs":3,Tiramisu:3,Glace:2.5}}},mutations:{setBase(e,s){e.sandwiches.push({base:s.base,basePrice:s.price,proteins:[],cheese:"",cheesePrice:0,veggies:[],sauces:[],extras:[],seasonings:[],drink:"",drinkPrice:0,dessert:"",dessertPrice:0,total:s.price})},setProteins(e,s){const t=e.sandwiches[e.sandwiches.length-1];t.proteins=s.map((e=>({name:e.name,price:e.price,quantity:1}))),t.total+=s.reduce(((e,s)=>e+s.price),0)},setCheese(e,s){const t=e.sandwiches[e.sandwiches.length-1];t.cheese=s.cheese,t.cheesePrice=s.price,t.total+=s.price},setVeggies(e,s){const t=e.sandwiches[e.sandwiches.length-1];t.veggies=s,t.total+=s.reduce(((e,s)=>e+s.price),0)},setSauces(e,s){const t=e.sandwiches[e.sandwiches.length-1];t.sauces=s,t.total+=s.reduce(((e,s)=>e+s.price),0)},setExtras(e,s){const t=e.sandwiches[e.sandwiches.length-1];t.extras=s,t.total+=s.reduce(((e,s)=>e+s.price),0)},setSeasonings(e,s){const t=e.sandwiches[e.sandwiches.length-1];t.seasonings=s,t.total+=s.reduce(((e,s)=>e+s.price),0)},setDrink(e,s){const t=e.sandwiches[e.sandwiches.length-1];t.drink=s.drink,t.drinkPrice=s.price,t.total+=s.price},setDessert(e,s){const t=e.sandwiches[e.sandwiches.length-1];t.dessert=s.dessert,t.dessertPrice=s.price,t.total+=s.price},resetOrder(e){e.sandwiches=[]}},actions:{},modules:{}});const Xa=(0,a.Ef)(P);Xa.use(wa),Xa.use(Fa),Xa.mount("#app")}},s={};function t(a){var i=s[a];if(void 0!==i)return i.exports;var n=s[a]={exports:{}};return e[a].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(s,a,i,n){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],i=e[u][1],n=e[u][2];for(var l=!0,o=0;o<a.length;o++)(!1&n||r>=n)&&Object.keys(t.O).every((function(e){return t.O[e](a[o])}))?a.splice(o--,1):(l=!1,n<r&&(r=n));if(l){e.splice(u--,1);var c=i();void 0!==c&&(s=c)}}return s}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,i,n]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var a in s)t.o(s,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:s[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e={524:0};t.O.j=function(s){return 0===e[s]};var s=function(s,a){var i,n,r=a[0],l=a[1],o=a[2],c=0;if(r.some((function(s){return 0!==e[s]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(o)var u=o(t)}for(s&&s(a);c<r.length;c++)n=r[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(u)},a=self["webpackChunkmake_your_sandwich"]=self["webpackChunkmake_your_sandwich"]||[];a.forEach(s.bind(null,0)),a.push=s.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(4306)}));a=t.O(a)})();
//# sourceMappingURL=app.1b2bfde6.js.map