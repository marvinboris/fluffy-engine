var c=Object.defineProperty;var d=(e,t,s)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var n=(e,t,s)=>(d(e,typeof t!="symbol"?t+"":t,s),s);import{w as u,b as f,r as l,u as x,v as h,j as p}from"./app-1ba2be60.js";import{A as k}from"./index-7f117421.js";import{a}from"./features-3b84ed28.js";import{i as g}from"./utility-e6bad259.js";import"./index-e75d3adc.js";import"./index-6c7f4053.js";import"./Form-7c02d1d2.js";import"./index-bb759524.js";import"./Table-72362a8f.js";import"./Input-6b5811e7.js";import"./index-034081ef.js";class y extends l.Component{constructor(){super(...arguments);n(this,"state",{isMounted:!1})}componentDidMount(){this.props.get(),this.setState({isMounted:!0})}componentWillUnmount(){this.props.reset()}render(){const{content:{cms:{pages:{backend:{components:{list:{action:s}},pages:{features:{form:r}}}}}},backend:{features:{features:i=[]}}}=this.props,m=i.map(o=>x(o,{created_at:h(o.created_at),action:p(k,{props:this.props,resource:"features",item:o})}));return p(g.lifecycle.render,{className:"Features",props:this.props,state:this.state,resource:"features",data:m,fields:[{name:r.name,key:"name",className:"w-100"},{name:r.prefix,key:"prefix"},{name:r.created_at,key:"created_at"},{name:s,key:"action",fixed:!0}]})}}const b=e=>({...e}),_=e=>({get:(t,s,r)=>e(a.get(t,s,r)),delete:t=>e(a.delete(t)),reset:()=>e(a.reset())}),F=u(f(b,_)(y));export{F as default};
//# sourceMappingURL=index-1a580a2e.js.map
