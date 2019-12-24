(this["webpackJsonpweather-app-herolo"]=this["webpackJsonpweather-app-herolo"]||[]).push([[0],{59:function(e,t,a){e.exports=a(84)},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),i=a.n(r),c=a(27),s=a(36),l=a(47),u=(a(68),a(25)),h=a(15),p=a(32),g=a(33),d=a(38),m=(a(69),a(70),function(e){var t=e.onRouteChange;return o.a.createElement("nav",null,o.a.createElement("h3",null,"Herolo Weather Task"),o.a.createElement("ul",null,o.a.createElement("li",{onClick:function(){return t("home")}},"HOME"),o.a.createElement("li",{onClick:function(){return t("favorites")}},"FAVORITES")))}),v=function(e){var t=e.onButtonClick;return o.a.createElement("label",{className:"switch"},o.a.createElement("input",{type:"checkbox",onClick:t}),o.a.createElement("span",{className:"slider round"}))},f=(a(71),a(120)),E=a(121),y=function(e){var t=e.onSearchChange,a=e.searchOutputs,n=e.setLocation;return o.a.createElement("div",{id:"search-con"},o.a.createElement(E.a,{id:"combo-box-demo",options:a,getOptionLabel:function(e){return e.LocalizedName+", "+e.Country.LocalizedName},onChange:function(e,t){return n(t)},style:{width:"50%"},renderInput:function(e){return o.a.createElement(f.a,Object.assign({},e,{label:"Choose your location",variant:"outlined",fullWidth:!0,onChange:t}))}}))},C=(a(72),a(73),function(e){var t=e.day,a=e.date,n=e.minTemp,r=e.maxTemp,i=e.tempUnit,c=e.icon;return c=c.toString().length<2?"0"+c:c,o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"date"},o.a.createElement("h4",null,t),o.a.createElement("h4",null,a)),o.a.createElement("img",{alt:"icon",src:"https://developer.accuweather.com/sites/default/files/".concat(c,"-s.png")}),o.a.createElement("h4",null,r,"\xb0/",n,"\xb0 ",i))}),F=(a(74),function(e){var t=e.fiveDayForcast;return o.a.createElement("div",{id:"daylist"},t.DailyForecasts.map((function(e,t){return o.a.createElement(C,{key:t,minTemp:Math.round(e.Temperature.Minimum.Value),maxTemp:Math.round(e.Temperature.Maximum.Value),tempUnit:e.Temperature.Maximum.Unit,icon:e.Day.Icon,day:new Date(1e3*e.EpochDate).toString().slice(0,3),date:new Date(1e3*e.EpochDate).toString().slice(4,15)})})))}),T=a(30),O=a(49),S=function(e){var t,a,n=e.currentConditions,r=e.fiveDayForcast,i=e.location,c=e.toggleUnit,s=e.isCelsius,l=e.onFavoriteClick;return t=e.isFavorite?{opacity:1}:{opacity:.4},(a=n.length?n[0].WeatherIcon:null)&&(a=a.toString().length<2?"0"+a:a),n.length?o.a.createElement("div",{id:"CurrentWeather-con"},o.a.createElement("div",{id:"header"},o.a.createElement("h3",null,i.LocalizedName,", ",i.Country.LocalizedName),o.a.createElement("div",{id:"right-box-header"},o.a.createElement("div",{onClick:l},o.a.createElement(T.a,{icon:O.a,size:"2x",style:t,className:"highlight"})),o.a.createElement("h3",{className:"toggle-unit",onClick:function(){return c(!s)}},s?"C":"F"))),o.a.createElement("img",{alt:"icon",src:"https://developer.accuweather.com/sites/default/files/".concat(a,"-s.png")}),o.a.createElement("h1",null,n[0].WeatherText),s?o.a.createElement("h4",null,Math.round(n[0].Temperature.Metric.Value),"\xb0 Celsius"):o.a.createElement("h4",null,Math.round(n[0].Temperature.Imperial.Value),"\xb0 Fahrenheit"),o.a.createElement("div",{id:"five-day-con"},o.a.createElement("h4",null,r.Headline.Text),o.a.createElement(F,{fiveDayForcast:r}))):o.a.createElement("h1",null,"loading")},A=function(e){var t=e.onSearchChange,a=e.searchOutputs,n=e.setLocation,r=e.currentConditions,i=e.fiveDayForcast,c=e.location,s=e.toggleUnit,l=e.isCelsius,u=e.onFavoriteClick,h=e.isFavorite;return o.a.createElement("div",null,o.a.createElement(y,{onSearchChange:t,searchOutputs:a,setLocation:n}),o.a.createElement(S,{currentConditions:r,location:c,fiveDayForcast:i,toggleUnit:s,isCelsius:l,onFavoriteClick:u,isFavorite:h}))},N=(a(77),function(e){var t=e.id,a=e.name,n=e.country,r=e.weatherText,i=e.icon,c=e.temp,s=e.isCelsius,l=e.onFavCardClick;return i=i.toString().length<2?"0"+i:i,o.a.createElement("div",{id:"fav-card",onClick:function(){return l({Key:t,LocalizedName:a,Country:{LocalizedName:n}})}},o.a.createElement("div",{className:"card"},o.a.createElement("h4",null,a,", ",n),s?o.a.createElement("h4",null,Math.round(c.Metric.Value),"\xb0 Celsius"):o.a.createElement("h4",null,Math.round(c.Imperial.Value),"\xb0 Fahrenheit"),o.a.createElement("img",{alt:"icon",src:"https://developer.accuweather.com/sites/default/files/".concat(i,"-s.png")}),o.a.createElement("h4",null,r)))}),_=(a(78),function(e){var t=e.favorites,a=e.isCelsius,n=e.onFavCardClick;return o.a.createElement("div",{id:"favlist"},t.map((function(e){return o.a.createElement(N,{id:e.id,key:e.id,name:e.name,country:e.country,weatherText:e.weatherText,icon:e.icon,temp:e.temp,isCelsius:a,onFavCardClick:n})})))}),k=(a(79),function(e){var t=e.favorites,a=e.toggleUnit,n=e.isCelsius,r=e.onFavCardClick;return o.a.createElement("div",null,o.a.createElement("div",{id:"fav-con"},o.a.createElement("h1",null,"Your Favorites Places"),o.a.createElement("h3",{className:"toggle-unit",onClick:function(){return a(!n)}},n?"C":"F")),o.a.createElement("div",{id:"five-day-con"},o.a.createElement(_,{favorites:t,isCelsius:n,onFavCardClick:r})))}),R=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(g.a)(t).call(this,e))).state={hasError:!1},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Someting went wrong"):this.props.children}}]),t}(n.Component),b=(a(80),a(42)),D=function(){return o.a.createElement("div",{id:"footer"},o.a.createElement("div",{id:"social"},o.a.createElement("a",{href:"https://github.com/yonis9",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(T.a,{icon:b.a,size:"2x"})),o.a.createElement("a",{href:"https://www.linkedin.com/in/yonisisso/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(T.a,{icon:b.b,size:"2x"}))))},I=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).getGeolocation=function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(a.requestGeolocation)},a.requestGeolocation=function(e){var t=e.coords.latitude,n=e.coords.longitude;fetch("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat("O2GFMOo9jRKxPEMJ4BbzguAoeTVNAmz1","&q=").concat(t,",").concat(n)).then((function(e){return e.json()})).then((function(e){a.props.setLocation(e)}))},a.handleFavorite=function(){if(localStorage.getItem("favorites")){var e=JSON.parse(localStorage.getItem("favorites"));Number.isInteger(a.checkIfFavorite(e,a.props.location.Key))?a.props.toggleFavorite(!0):a.props.toggleFavorite(!1)}},a.checkIfFavorite=function(e,t){for(var a=0;a<e.length;a++)if(t===e[a].Key)return a;return!1},a.onButtonClick=function(){a.props.lightBackground?(document.getElementsByTagName("body")[0].style.backgroundColor="#333",document.getElementsByTagName("body")[0].style.color="#f2f2f2"):(document.getElementsByTagName("body")[0].style.backgroundColor="#f2f2f2",document.getElementsByTagName("body")[0].style.color="#333"),a.props.toggleDayNight(!a.props.lightBackground)},a.onFavoriteClick=function(){if(a.props.isFavorite){var e=JSON.parse(localStorage.getItem("favorites")),t=a.checkIfFavorite(e,a.props.location.Key);e.splice(t,1),localStorage.setItem("favorites",JSON.stringify(e)),a.props.toggleFavorite(!1)}else{var n=localStorage.getItem("favorites");n?((n=JSON.parse(n)).push(a.props.location),localStorage.setItem("favorites",JSON.stringify(n))):localStorage.setItem("favorites",JSON.stringify([a.props.location])),a.props.toggleFavorite(!0)}},a.onFavCardClick=function(e){a.props.setLocation(e),a.props.onRouteChange("home")},a}return Object(d.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.getForcast(this.props.location.Key,this.props.isCelsius),this.handleFavorite(),this.getGeolocation()}},{key:"componentDidUpdate",value:function(e,t){e.location.Key!==this.props.location.Key&&(this.props.getForcast(this.props.location.Key,this.props.isCelsius),this.handleFavorite()),e.isCelsius!==this.props.isCelsius&&this.props.getForcast(this.props.location.Key,this.props.isCelsius),this.props.favorites.length&&!JSON.parse(localStorage.getItem("favorites"))&&(this.props.toggleFavorite(!1),this.props.getFavoritesData([])),e.route!==this.props.route&&"favorites"===this.props.route&&this.props.getFavoritesData(JSON.parse(localStorage.getItem("favorites")))}},{key:"render",value:function(){var e=this.props,t=e.toggleUnit,a=e.isCelsius,n=e.searchOutputs,r=e.onSearchChange,i=e.location,c=e.setLocation,s=e.fiveDayForcast,l=e.currentConditions,u=e.isFavorite,h=e.favorites,p=e.onRouteChange,g=e.route;return o.a.createElement("div",{className:"App"},o.a.createElement(m,{onRouteChange:p}),o.a.createElement(R,null,o.a.createElement(v,{onButtonClick:this.onButtonClick}),"home"===g?o.a.createElement(A,{onSearchChange:r,searchOutputs:n,setLocation:c,fiveDayForcast:s,currentConditions:l,location:i,toggleUnit:t,isCelsius:a,onFavoriteClick:this.onFavoriteClick,isFavorite:u}):o.a.createElement(k,{favorites:h,toggleUnit:t,isCelsius:a,onFavCardClick:this.onFavCardClick}),o.a.createElement(D,null)))}}]),t}(n.Component),U=Object(s.b)((function(e){return{isCelsius:e.changeUnit.isCelsius,searchOutputs:e.requestSearchOutputs.searchOutputs,location:e.changeLocation.location,currentConditions:e.requestForcast.currentConditions,fiveDayForcast:e.requestForcast.fiveDayForcast,isFavorite:e.toggleFavorite.isFavorite,favorites:e.requestFavoritesData.favorites,route:e.changeRoute.route,lightBackground:e.toggleDayNight.lightBackground}}),(function(e){return{toggleUnit:function(t){return e({type:"CHANGE_UNIT",payload:t})},onSearchChange:function(t){return e((a=t.target.value,function(e){e({type:"REQUEST_SEARCH_PENDING"}),fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat("O2GFMOo9jRKxPEMJ4BbzguAoeTVNAmz1","&q=").concat(a,"&language=en-us")).then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_SEARCH_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_SEARCH_FAILED",payload:t})}))}));var a},setLocation:function(t){return e({type:"CHANGE_LOCATION",payload:t})},getForcast:function(t,a){return e(function(e,t){return function(a){a({type:"REQUEST_FORCAST_PENDING"}),fetch("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat("O2GFMOo9jRKxPEMJ4BbzguAoeTVNAmz1","&details=false&metric=").concat(t)).then((function(e){return e.json()})).then((function(t){fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e,"?apikey=").concat("O2GFMOo9jRKxPEMJ4BbzguAoeTVNAmz1")).then((function(e){return e.json()})).then((function(e){return a({type:"REQUEST_FORCAST_SUCCESS",payload:{fiveDayForcast:t,currentConditions:e}})}))})).catch((function(e){return a({type:"REQUEST_FORCAST_FAILED",payload:e})}))}}(t,a))},toggleFavorite:function(t){return e(function(e){return{type:"TOGGLE_FAVORITE",payload:e}}(t))},getFavoritesData:function(t){return e(function(e){return function(t){e&&(e.length?function(){t({type:"REQUEST_FAVORITE_DATA_PENDING"});for(var a=[],n=function(n){fetch("https://dataservice.accuweather.com/currentconditions/v1/".concat(e[n].Key,"?apikey=O2GFMOo9jRKxPEMJ4BbzguAoeTVNAmz1")).then((function(e){return e.json()})).then((function(o){a.push({id:e[n].Key,name:e[n].LocalizedName,country:e[n].Country.LocalizedName,weatherText:o[0].WeatherText,icon:o[0].WeatherIcon,temp:o[0].Temperature}),n===e.length-1&&t({type:"REQUEST_FAVORITE_DATA_SUCCESS",payload:a})})).catch((function(e){return t({type:"REQUEST_FAVORITE_DATA_FAILED",payload:e})}))},o=0;o<e.length;o++)n(o)}():t({type:"REQUEST_FAVORITE_DATA_EMPTY",payload:[]}))}}(t))},onRouteChange:function(t){return e(function(e){return{type:"CHANGE_ROUTE",payload:e}}(t))},toggleDayNight:function(t){return e(function(e){return{type:"TOGGLE_DAY_NIGHT",payload:e}}(t))}}}))(I),j={route:"home"},w={location:{Version:1,Key:"215854",Type:"City",Rank:31,LocalizedName:"Tel Aviv",Country:{ID:"IL",LocalizedName:"Israel"},AdministrativeArea:{ID:"TA",LocalizedName:"Tel Aviv"}}},L={isCelsius:!0},G={searchOutputs:[]},M={fiveDayForcast:{},currentConditions:[]},z={isFavorite:!1},P={favorites:[]},x={lightBackground:!0};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(81).config();var V=Object(c.c)({changeUnit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_UNIT":return Object.assign({},e,{isCelsius:t.payload});default:return e}},requestSearchOutputs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_SEARCH_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_SEARCH_SUCCESS":return Object.assign({},e,{searchOutputs:t.payload,isPending:!1});case"REQUEST_SEARCH_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}},changeLocation:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_LOCATION":return Object.assign({},e,{location:t.payload});default:return e}},requestForcast:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_FORCAST_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_FORCAST_SUCCESS":return Object.assign({},e,{fiveDayForcast:t.payload.fiveDayForcast,currentConditions:t.payload.currentConditions,isPending:!1});case"REQUEST_FORCAST_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}},toggleFavorite:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"TOGGLE_FAVORITE":return Object.assign({},e,{isFavorite:t.payload});default:return e}},requestFavoritesData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_FAVORITE_DATA_EMPTY":return Object.assign({},e,{favorites:t.payload});case"REQUEST_FAVORITE_DATA_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_FAVORITE_DATA_SUCCESS":return Object.assign({},e,{favorites:t.payload,isPending:!1});case"REQUEST_FAVORITE_DATA_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}},changeRoute:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_ROUTE":return Object.assign({},e,{route:t.payload});default:return e}},toggleDayNight:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"TOGGLE_DAY_NIGHT":return Object.assign({},e,{lightBackground:t.payload});default:return e}}}),B=Object(c.d)(V,Object(c.a)(l.a));i.a.render(o.a.createElement(s.a,{store:B},o.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[59,1,2]]]);
//# sourceMappingURL=main.2a194bff.chunk.js.map