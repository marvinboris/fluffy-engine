import{b as e,r as c,d as m,j as r,aO as l,aP as i,aQ as p,aR as d}from"./app-1ba2be60.js";class C extends c.Component{render(){const{content:{cms:{pages:{frontend:{components:{form:n}}}}},loading:o,children:s,onSubmit:a}=this.props;return m("form",{className:"UI Form",onSubmit:a,children:[o&&r("div",{className:"loading",children:r("div",{children:n.loading})}),s]})}}const T=t=>({...t}),u=e(T)(C),f="/api/",w=()=>({type:l}),S=()=>({type:i}),g=t=>({type:p,...t}),h=t=>({type:d,error:t}),y=t=>async n=>{n(S());try{const o=new FormData(t),s=await fetch(`${f}contact?frontend_lang=${localStorage.getItem("frontend_lang")}`,{method:"POST",body:o}),a=await s.json();if(s.status===422)throw new Error(Object.values(a.errors).join(`
`));if(s.status!==200&&s.status!==201)throw new Error(a.error.message);n(g(a))}catch(o){console.log(o),n(h(o))}};export{u as F,y as p,w as r};
//# sourceMappingURL=contact-68afb30d.js.map
