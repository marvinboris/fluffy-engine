var k=Object.defineProperty;var w=(s,i,e)=>i in s?k(s,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[i]=e;var p=(s,i,e)=>(w(s,typeof i!="symbol"?i+"":i,e),e);import{w as A,b as $,r as I,j as a,d as b,F as D}from"./app-1ba2be60.js";import{F as S,C as x,I as y}from"./index-2d9652c7.js";import{S as F}from"./index-72e95dc0.js";/* empty css                  */import{a as m}from"./roles-914b893d.js";import{a as g}from"./utility-e6bad259.js";import"./Input-6b5811e7.js";import"./index-e75d3adc.js";import"./index-6c7f4053.js";import"./Form-7c02d1d2.js";import"./index-bb759524.js";import"./Table-72362a8f.js";import"./index-034081ef.js";const H={name:"",description:"",features:[],add:!1};class j extends I.Component{constructor(){super(...arguments);p(this,"state",{...H,isMounted:!1});p(this,"resetState",()=>this.setState({...H}));p(this,"saveAddHandler",()=>g.component.saveAddHandler(this.setState.bind(this),this.props));p(this,"inputChangeHandler",e=>{const{id:h,name:c,value:v,checked:u,files:f}=e.target;if(c.includes("features")){let o=[...this.state.features];if(c.includes("id")){const[,t]=h.split("-"),r=o.find(d=>+d.id==+t);u&&!r?o.push({id:t,permissions:[]}):o=o.filter(d=>+d.id!=+t)}else if(c.includes("permissions")){const[,t,r]=h.split("-"),d=o.findIndex(N=>+N.id==+t),l=o[d];let n=[...l.permissions];const C=n.includes(r);u&&!C?n.push(r):n=n.filter(N=>N!==r),l.permissions=n,o[d]=l}return this.setState({features:o})}this.setState({[c]:f?f[0]:v})})}componentDidMount(){g.lifecycle.componentDidMount(this.props,this.setState.bind(this))}componentDidUpdate(e){g.lifecycle.componentDidUpdate("roles","role")(e,this.props,this.state,this.setState.bind(this),this.resetState)}componentWillUnmount(){this.props.reset()}render(){const{content:{cms:{pages:{backend:{pages:{roles:{form:e}}}}}},backend:{roles:{features:h=[]}}}=this.props,{name:c,description:v,features:u}=this.state,f=h.sort((t,r)=>t.name.localeCompare(r.name)).map(t=>{const r=u.find(n=>+n.id==+t.id),d=[{abbr:"c",name:e.create},{abbr:"u",name:e.update},{abbr:"d",name:e.delete}].map(n=>{const C=r&&r.permissions.includes(n.abbr);return a("div",{className:"col-lg-4",children:a(S,{children:a(x,{type:"checkbox",id:`feature-${t.id}-${n.abbr}`,checked:C,name:`features[${t.id}][permissions][${n.abbr}]`,onChange:this.inputChangeHandler,label:n.name})})},JSON.stringify(n))}),l=r!==void 0;return b("div",{children:[a(x,{type:"switch",id:`feature-${t.id}`,className:"col-12 pb-2",checked:l,name:`features[${t.id}][id]`,onChange:this.inputChangeHandler,label:a("span",{className:"text-500",children:t.name})}),l&&a("div",{className:"row",children:d})]},JSON.stringify(t))}),o=b(D,{children:[this.props.edit&&a("input",{type:"hidden",name:"_method",defaultValue:"PATCH"}),b("div",{className:"row",children:[a("div",{className:"col-lg-9",children:b("div",{className:"row",children:[a(y,{type:"text",className:"col-md-6",onChange:this.inputChangeHandler,value:c,name:"name",required:!0,label:e.name}),a(y,{type:"text",className:"col-md-6",onChange:this.inputChangeHandler,value:v,name:"description",required:!0,label:e.description}),a("div",{className:"pb-2 col-12 text-large text-700",children:e.features}),a(S,{className:"col-12",children:f})]})}),a(F,{edit:this.props.edit,saveAddHandler:this.saveAddHandler})]})]});return a(g.lifecycle.render,{className:"Roles",props:this.props,state:this.state,resource:"roles",children:o})}}const M=s=>({...s}),P=s=>({get:i=>s(m.show(i)),info:()=>s(m.info()),post:i=>s(m.post(i)),patch:(i,e)=>s(m.patch(i,e)),reset:()=>s(m.reset())}),L=A($(M,P)(j));export{L as default};
//# sourceMappingURL=Add-f25c941e.js.map
