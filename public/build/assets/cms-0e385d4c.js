import{C as h,o as y,q as g,s as u}from"./app-1ba2be60.js";const m="/api/",f=()=>({type:h}),S=()=>({type:y}),l=t=>({type:g,...t}),i=t=>({type:u,error:t}),p=()=>async(t,a)=>{t(S());const{role:e}=a().auth;try{const o=localStorage.getItem("token"),s=await(await fetch(`${m+e}/cms`,{headers:{Authorization:o}})).json();t(l(s))}catch(o){console.log(o),t(i(o))}},j=(t,a)=>async(e,o)=>{e(S());const{role:r}=o().auth;try{const s=localStorage.getItem("token"),C=new FormData(a),c=await fetch(`${m+r}/cms/${t}`,{method:"POST",body:C,headers:{Authorization:s}}),n=await c.json();if(c.status===422)throw new Error(Object.values(n.errors).join(`
`));e(l(n))}catch(s){console.log(s),e(i(s))}};export{p as g,j as p,f as r};
//# sourceMappingURL=cms-0e385d4c.js.map
