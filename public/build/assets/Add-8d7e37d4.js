var f=Object.defineProperty;var N=(s,n,e)=>n in s?f(s,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[n]=e;var i=(s,n,e)=>(N(s,typeof n!="symbol"?n+"":n,e),e);import{w as x,b as H,r as c,j as a,d as l,F as S}from"./app-1ba2be60.js";import{S as _}from"./index-72e95dc0.js";import{I as r}from"./index-2d9652c7.js";import{a as p}from"./experiences-0e5eb074.js";import{a as o}from"./utility-e6bad259.js";import"./Input-6b5811e7.js";import"./index-e75d3adc.js";import"./index-6c7f4053.js";import"./Form-7c02d1d2.js";import"./index-bb759524.js";import"./Table-72362a8f.js";import"./index-034081ef.js";const m={title:{},company:{},description:{},start_year:"",end_year:"",translate:"en",add:!1};class A extends c.Component{constructor(){super(...arguments);i(this,"state",{...m,isMounted:!1});i(this,"resetState",()=>this.setState({...m}));i(this,"saveAddHandler",()=>o.component.saveAddHandler(this.setState.bind(this),this.props));i(this,"inputChangeHandler",e=>o.component.inputChangeHandler(this.state,this.setState.bind(this))(e))}componentDidMount(){o.lifecycle.componentDidMount(this.props,this.setState.bind(this))}componentDidUpdate(e){o.lifecycle.componentDidUpdate("experiences","experience")(e,this.props,this.state,this.setState.bind(this),this.resetState)}componentWillUnmount(){this.props.reset()}render(){const{content:{cms:{pages:{backend:{pages:{experiences:{form:e}}}}}}}=this.props,{title:h,company:b,description:u,start_year:g,end_year:y,translate:d}=this.state,v=languages.map(t=>a("option",{value:t.abbr,children:t.name},JSON.stringify(t))),C=l(S,{children:[this.props.edit&&a("input",{type:"hidden",name:"_method",defaultValue:"PATCH"}),l("div",{className:"row",children:[a("div",{className:"col-lg-9",children:a("div",{className:"row",children:languages.map(t=>l(c.Fragment,{children:[a(r,{type:"text",id:"title-"+t.abbr,className:"col-lg-6"+(t.abbr===d?"":" d-none"),onChange:this.inputChangeHandler,value:h[t.abbr],name:"title["+t.abbr+"]",required:!0,label:e.title}),a(r,{type:"text",id:"company-"+t.abbr,className:"col-lg-6"+(t.abbr===d?"":" d-none"),onChange:this.inputChangeHandler,value:b[t.abbr],name:"company["+t.abbr+"]",required:!0,label:e.company}),a(r,{type:"textarea",id:"description-"+t.abbr,className:"col-12"+(t.abbr===d?"":" d-none"),onChange:this.inputChangeHandler,value:u[t.abbr],name:"description["+t.abbr+"]",required:!0,label:e.description})]},"language-"+t.abbr))})}),a("div",{className:"col-lg-3",children:a(r,{type:"select",name:"translate",label:e.language,onChange:this.inputChangeHandler,value:d,children:v})}),a("div",{className:"col-12 mb-3",children:a("hr",{})}),a("div",{className:"col-lg-9",children:l("div",{className:"row",children:[a(r,{type:"number",className:"col-lg-6",onChange:this.inputChangeHandler,name:"start_year",value:g,required:!0,label:e.start_year}),a(r,{type:"number",className:"col-lg-6",onChange:this.inputChangeHandler,name:"end_year",value:y,required:!0,label:e.end_year})]})}),a(_,{edit:this.props.edit,saveAddHandler:this.saveAddHandler})]})]});return a(o.lifecycle.render,{className:"Experiences",props:this.props,state:this.state,resource:"experiences",children:C})}}const w=s=>({...s}),q=s=>({get:n=>s(p.show(n)),post:n=>s(p.post(n)),patch:(n,e)=>s(p.patch(n,e)),reset:()=>s(p.reset())}),V=x(H(w,q)(A));export{V as default};
//# sourceMappingURL=Add-8d7e37d4.js.map
