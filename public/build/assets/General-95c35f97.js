var w=Object.defineProperty;var S=(n,o,a)=>o in n?w(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a;var v=(n,o,a)=>(S(n,typeof o!="symbol"?o+"":o,a),a);import{w as k,b as L,r as M,u as P,j as e,d as b,L as T}from"./app-1ba2be60.js";import{F as D,E as F}from"./index-e75d3adc.js";import{F as x}from"./index-6c7f4053.js";import{P as A,B as H}from"./index-034081ef.js";import{I as f}from"./index-2d9652c7.js";import{g as O,p as j,r as I}from"./cms-0e385d4c.js";import"./Form-7c02d1d2.js";import"./Input-6b5811e7.js";const y=({sm:n})=>e("div",{className:`col-12 mb-${n?2:3}`}),J=({general:n,language:o})=>{const[a,r]=M.useState(n),d=(s,...t)=>{const l={...a};if(t.length===1)return l[t[0]]=s.target.value,r(l);const h=[];let p={...a};for(let i=0;i<t.length-1;i++){const g=t[i];p=p[g],h.push(p)}h[h.length-1][t[t.length-1]]=s.target.value;for(let i=1;i<t.length-1;i++){const g=t[t.length-1-i],m=h.length-1-i;h[m][g]=h[m+1]}l[t[0]]=h[0],r(l)},c=`${o.abbr}[general]`,u=`${o.abbr}-general`,C=["Date","Time","Home"].map(s=>e(f,{type:"text",className:"col-md-6 col-lg-4",id:`${u}-${s.toLowerCase()}`,name:`${c}[${s.toLowerCase()}]`,label:s,onChange:t=>d(t,s.toLowerCase()),value:a[s.toLowerCase()]},Math.random())),$=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((s,t)=>e(f,{type:"text",className:"col-md-6 col-lg-4",id:`${u}-date-${t}`,name:`${c}[days][]`,label:s,onChange:l=>d(l,"days",t),value:a.days[t]},Math.random())),N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((s,t)=>e(f,{type:"text",className:"col-md-6 col-lg-4",id:`${u}-months-${t}`,name:`${c}[months][]`,label:s,onChange:l=>d(l,"months",t),value:a.months[t]},Math.random()));return b("div",{className:"row",children:[C,e(y,{}),e("div",{className:"col-12",children:e("h4",{children:"Week days"})}),e(y,{sm:!0}),$,e(y,{}),e("div",{className:"col-12",children:e("h4",{children:"Months"})}),e(y,{sm:!0}),N]})};class R extends M.Component{constructor(){super(...arguments);v(this,"state",{abbr:"en",isMounted:!1});v(this,"submitHandler",async a=>{a.preventDefault(),await this.props.patch(a.target)});v(this,"inputChangeHandler",a=>{const{name:r,value:d,files:c}=a.target;this.setState({[r]:c?c[0]:d})})}static getDerivedStateFromProps(a,r){if(a.backend.cms.cms&&r.app_name===""){const{backend:{cms:{cms:{general:d}}}}=a;return P(r,{...d})}return r}async componentDidMount(){this.props.reset(),this.props.get(),this.setState({isMounted:!0})}componentWillUnmount(){this.props.reset()}render(){const{content:{cms:{pages:{backend:{components:{form:{save:a}},pages:{cms:{icon:r,title:d,general:c}}}}}},backend:{cms:{loading:u,error:C,message:$,cms:N,languages:s=[]}},auth:{role:t}}=this.props,{abbr:l}=this.state;this.state.isMounted||(document.title=`${this.props.content.cms.pages.backend.sidebar.menu.cms.general} | ${document.head.querySelector('meta[name="base-title"]').content}`);const h=e(F,{err:C}),p=s.map(m=>e("option",{value:m.abbr,children:m.name},Math.random()+JSON.stringify(m))),i=s.map(m=>e("div",{className:m.abbr===l?"":"d-none",children:e(J,{general:N.pages[m.abbr].general,language:m})},Math.random())),g=b("div",{children:[e(D,{message:$}),e("input",{type:"hidden",name:"_method",defaultValue:"PATCH"}),e("div",{className:"row",children:e("div",{className:"col-md-4",children:e(f,{type:"select",name:"abbr",label:"Lang",onChange:this.inputChangeHandler,value:l,children:p})})}),e("hr",{}),e("div",{children:i}),e("div",{style:{marginTop:40},children:b("button",{className:`btn btn-${window.APP_PRIMARY_COLOR}`,children:[a,e("i",{className:"fas fa-save"})]})})]});return b("div",{className:"Cms General",children:[e(A,{title:d,subtitle:c,icon:r,children:e(H,{main:c})}),e(T,{loading:this.state.isMounted&&u,isAuthenticated:!0,children:b("div",{className:"content",children:[h,e(x,{onSubmit:this.submitHandler,icon:r,title:c,link:`/${t}/cms`,children:g})]})})]})}}const V=n=>({...n}),_=n=>({get:()=>n(O()),patch:o=>n(j("general",o)),reset:()=>n(I())}),Q=k(L(V,_)(R));export{Q as default};
//# sourceMappingURL=General-95c35f97.js.map
