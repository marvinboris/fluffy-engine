var h=Object.defineProperty;var u=(s,e,t)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>(u(s,typeof e!="symbol"?e+"":e,t),t);import{w as g,b as f,r as S,d as r,F as v,j as a}from"./app-1ba2be60.js";import{S as b}from"./index-72e95dc0.js";import{I as p}from"./index-2d9652c7.js";import{a as o}from"./skills-6366f086.js";import{a as i}from"./utility-e6bad259.js";import"./Input-6b5811e7.js";import"./index-e75d3adc.js";import"./index-6c7f4053.js";import"./Form-7c02d1d2.js";import"./index-bb759524.js";import"./Table-72362a8f.js";import"./index-034081ef.js";const d={name:"",percentage:"",add:!1};class H extends S.Component{constructor(){super(...arguments);n(this,"state",{...d,isMounted:!1});n(this,"resetState",()=>this.setState({...d}));n(this,"saveAddHandler",()=>i.component.saveAddHandler(this.setState.bind(this),this.props));n(this,"inputChangeHandler",t=>i.component.inputChangeHandler(this.state,this.setState.bind(this))(t))}componentDidMount(){i.lifecycle.componentDidMount(this.props,this.setState.bind(this))}componentDidUpdate(t){i.lifecycle.componentDidUpdate("skills","skill")(t,this.props,this.state,this.setState.bind(this),this.resetState)}componentWillUnmount(){this.props.reset()}render(){const{content:{cms:{pages:{backend:{pages:{skills:{form:t}}}}}}}=this.props,{name:l,percentage:m}=this.state,c=r(v,{children:[this.props.edit&&a("input",{type:"hidden",name:"_method",defaultValue:"PATCH"}),r("div",{className:"row",children:[a("div",{className:"col-lg-9",children:r("div",{className:"row",children:[a(p,{type:"text",className:"col-md-6",onChange:this.inputChangeHandler,value:l,name:"name",required:!0,label:t.name}),a(p,{type:"number",className:"col-md-6",onChange:this.inputChangeHandler,value:m,name:"percentage",required:!0,label:t.percentage,min:0,max:100})]})}),a(b,{edit:this.props.edit,saveAddHandler:this.saveAddHandler})]})]});return a(i.lifecycle.render,{className:"Skills",props:this.props,state:this.state,resource:"skills",children:c})}}const C=s=>({...s}),x=s=>({get:e=>s(o.show(e)),post:e=>s(o.post(e)),patch:(e,t)=>s(o.patch(e,t)),reset:()=>s(o.reset())}),I=g(f(C,x)(H));export{I as default};
//# sourceMappingURL=Add-5e71d982.js.map
