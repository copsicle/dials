(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),i=n(8),c=n.n(i),r=n(2),l=n(3),o=n(6),j=n(5),d=n(4),u=(n(13),n(0)),h=function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Text-Container",children:[Object(u.jsxs)("span",{children:["Altitude: ",this.props.dials.alt]}),Object(u.jsxs)("span",{children:["HIS: ",this.props.dials.his]}),Object(u.jsxs)("span",{children:["ADI: ",this.props.dials.adi]})]})}}]),n}(a.a.Component),b=h,O=(n(15),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).state={},s}return Object(l.a)(n,[{key:"render",value:function(){return this.props.visual?Object(u.jsxs)("div",{className:"Button-Container",children:[Object(u.jsx)("div",{children:Object(u.jsx)("button",{disabled:!0,children:"Visual"})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:this.props.click,children:"Text"})})]}):Object(u.jsxs)("div",{className:"Button-Container",children:[Object(u.jsx)("div",{children:Object(u.jsx)("button",{onClick:this.props.click,children:"Visual"})}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{disabled:!0,children:"Text"})})]})}}]),n}(a.a.Component)),p=(n(16),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"Meter-Container",children:Object(u.jsxs)("div",{className:"Meter",children:[Object(u.jsx)("div",{className:"Spacer-Top",children:"3000"}),Object(u.jsx)("div",{className:"Spacer-Middle",children:"2000"}),Object(u.jsx)("div",{className:"Spacer-Middle",children:"1000"}),Object(u.jsx)("div",{className:"Spacer-Bottom",children:"0"}),Object(u.jsx)("div",{className:"Bar",style:{bottom:this.props.alt/30-1.5+"%"}})]})})}}]),n}(a.a.Component)),v=(n(17),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Compass-Container",children:[Object(u.jsxs)("div",{className:"Compass",style:{transform:"rotate(-".concat(this.props.his,"deg)")},children:[Object(u.jsx)("span",{children:"0"}),Object(u.jsx)("span",{children:"90"}),Object(u.jsx)("span",{children:"180"}),Object(u.jsx)("span",{children:"270"})]}),Object(u.jsx)("div",{className:"Pointer"})]})}}]),n}(s.Component)),x=v,f=(n(18),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"Horizon-Container",children:Object(u.jsx)("div",{className:"Horizon",style:{backgroundImage:"linear-gradient(blue ".concat(this.props.adi<=0?0:this.props.adi,"%, #00ff00 ").concat(this.props.adi>=0?100:parseInt(this.props.adi)+100,"%)")}})})}}]),n}(s.Component)),m=(n(19),function(t){Object(j.a)(n,t);var e=Object(d.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).state={dials:{alt:1500,his:123,adi:0},visual:!0},s.getDialData=s.getDialData.bind(Object(o.a)(s)),s}return Object(l.a)(n,[{key:"changeVisualState",value:function(t){this.setState({visual:!this.state.visual})}},{key:"getDialData",value:function(){var t=this;fetch(window.location.href+"api/data",{method:"GET"}).then((function(t){return t.json()})).then((function(e){t.setState({dials:Object.assign({},e)})})).catch((function(t){console.log(t.message)}))}},{key:"componentDidMount",value:function(){var t=this;this.getDialData(),this.interval=setInterval((function(){return t.tick()}),1e3)}},{key:"tick",value:function(){this.getDialData()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Box",children:[Object(u.jsx)(O,{visual:this.state.visual,click:this.changeVisualState.bind(this)}),this.state.visual?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(p,{alt:this.state.dials.alt}),Object(u.jsx)(x,{his:this.state.dials.his}),Object(u.jsx)(f,{adi:this.state.dials.adi})]}):Object(u.jsx)(b,{dials:this.state.dials})]})}}]),n}(a.a.Component));c.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.68c8c2b3.chunk.js.map