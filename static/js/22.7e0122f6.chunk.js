(this["webpackJsonpalgo-board"]=this["webpackJsonpalgo-board"]||[]).push([[22],{139:function(e,a,t){"use strict";t.r(a);var l=t(0),s=t.n(l),r=t(65),i=t(58),n=t(15),o=t(49);class c extends l.Component{render(){return s.a.createElement(n.a,null,s.a.createElement(r.a,null,s.a.createElement(i.a,null,s.a.createElement(o.a,{title:"Knapsack"},s.a.createElement("p",null,'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."')))))}}a.default=c},49:function(e,a,t){"use strict";var l=t(0),s=t.n(l),r=t(93),i=t(68),n=t(168),o=t(53),c=t.n(o),d=t(15),m=t(48);class u extends l.Component{constructor(...e){super(...e),this.state={isOption:this.props.isOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},this.cardReloadHandler=()=>{this.setState({loadCard:!0}),setInterval(()=>{this.setState({loadCard:!1})},3e3)},this.cardRemoveHandler=()=>{this.setState({cardRemove:!0})}}render(){let e,a,t,l,o="",c=[];return this.state.isOption&&(t=s.a.createElement("div",{className:"card-header-right"},s.a.createElement(r.a,{alignRight:!0,className:"btn-group card-option"},s.a.createElement(r.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},s.a.createElement("i",{className:"feather icon-more-horizontal"})),s.a.createElement(r.a.Menu,{as:"ul",className:"list-unstyled card-option"},s.a.createElement(r.a.Item,{as:"li",className:"dropdown-item",onClick:()=>{this.setState(e=>({fullCard:!e.fullCard}))}},s.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),s.a.createElement("a",{href:m.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),s.a.createElement(r.a.Item,{as:"li",className:"dropdown-item",onClick:()=>{this.setState(e=>({collapseCard:!e.collapseCard}))}},s.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),s.a.createElement("a",{href:m.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),s.a.createElement(r.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},s.a.createElement("i",{className:"feather icon-refresh-cw"}),s.a.createElement("a",{href:m.a.BLANK_LINK}," Reload ")),s.a.createElement(r.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},s.a.createElement("i",{className:"feather icon-trash"}),s.a.createElement("a",{href:m.a.BLANK_LINK}," Remove ")))))),l=s.a.createElement(i.a.Header,null,s.a.createElement(i.a.Title,{as:"h5"},this.props.title),t),this.state.fullCard&&(c=[...c,"full-card"],e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(c=[...c,"card-load"],a=s.a.createElement("div",{className:"card-loader"},s.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(c=[...c,"d-none"]),this.props.cardClass&&(c=[...c,this.props.cardClass]),o=s.a.createElement(i.a,{className:c.join(" "),style:e},l,s.a.createElement(n.a,{in:!this.state.collapseCard},s.a.createElement("div",null,s.a.createElement(i.a.Body,null,this.props.children))),a),s.a.createElement(d.a,null,o)}}a.a=c()(u)}}]);
//# sourceMappingURL=22.7e0122f6.chunk.js.map