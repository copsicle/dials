(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),i=n(7),c=n.n(i),r=n(2),l=n(3),o=n(5),j=n(4),d=(n(12),n(0)),u=function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Text-Container",children:[Object(d.jsxs)("span",{children:["Altitude: ",this.props.dials.alt]}),Object(d.jsxs)("span",{children:["HIS: ",this.props.dials.his]}),Object(d.jsxs)("span",{children:["ADI: ",this.props.dials.adi]})]})}}]),n}(a.a.Component),h=(n(14),function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(t){var s;return Object(r.a)(this,n),(s=e.call(this,t)).state={},s}return Object(l.a)(n,[{key:"render",value:function(){return this.props.visual?Object(d.jsxs)("div",{className:"Button-Container",children:[Object(d.jsx)("div",{children:Object(d.jsx)("button",{disabled:!0,children:"Visual"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:this.props.click,children:"Text"})})]}):Object(d.jsxs)("div",{className:"Button-Container",children:[Object(d.jsx)("div",{children:Object(d.jsx)("button",{onClick:this.props.click,children:"Visual"})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{disabled:!0,children:"Text"})})]})}}]),n}(a.a.Component)),b=(n(15),function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Meter-Container",children:Object(d.jsxs)("div",{className:"Meter",children:[Object(d.jsx)("div",{className:"Spacer-Top",children:"3000"}),Object(d.jsx)("div",{className:"Spacer-Middle",children:"2000"}),Object(d.jsx)("div",{className:"Spacer-Middle",children:"1000"}),Object(d.jsx)("div",{className:"Spacer-Bottom",children:"0"}),Object(d.jsx)("div",{className:"Bar",style:{bottom:this.props.alt/30-1.5+"%"}})]})})}}]),n}(a.a.Component)),O=(n(16),function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Compass-Container",children:[Object(d.jsxs)("div",{className:"Compass",style:{transform:"rotate(-".concat(this.props.his,"deg)")},children:[Object(d.jsx)("span",{children:"0"}),Object(d.jsx)("span",{children:"90"}),Object(d.jsx)("span",{children:"180"}),Object(d.jsx)("span",{children:"270"})]}),Object(d.jsx)("div",{className:"Pointer"})]})}}]),n}(s.Component)),p=(n(17),function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"Horizon-Container",children:Object(d.jsx)("div",{className:"Horizon",style:{backgroundImage:"linear-gradient(blue ".concat(this.props.adi<=0?0:this.props.adi,"%, #00ff00 ").concat(this.props.adi>=0?100:this.props.adi+100,"%)")}})})}}]),n}(s.Component)),v=(n(18),function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={dials:{alt:0,his:0,adi:0},visual:!0},t}return Object(l.a)(n,[{key:"changeVisualState",value:function(t){this.setState({visual:!this.state.visual})}},{key:"getDialData",value:function(){var t=this;fetch(window.location.href+"api/data",{method:"GET"}).then((function(t){return t.json()})).then((function(e){t.setState({dials:Object.assign({},e)})})).catch((function(t){console.log(t.message)}))}},{key:"componentDidMount",value:function(){var t=this;this.getDialData(),this.interval=setInterval((function(){return t.tick()}),1e3)}},{key:"tick",value:function(){this.getDialData()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Box",children:[Object(d.jsx)(h,{visual:this.state.visual,click:this.changeVisualState.bind(this)}),this.state.visual?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{alt:this.state.dials.alt}),Object(d.jsx)(O,{his:this.state.dials.his}),Object(d.jsx)(p,{adi:this.state.dials.adi})]}):Object(d.jsx)(u,{dials:this.state.dials})]})}}]),n}(a.a.Component));c.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.fa96fa9a.chunk.js.map