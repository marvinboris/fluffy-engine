import{a8 as b,p as t,aa as p,ab as g,e as v,R as N,ac as x,d as m,j as e,b as C,r as M,ae as T}from"./app-1ba2be60.js";var j=["className","listClassName","cssModule","children","tag","listTag","aria-label"],y={tag:b,listTag:b,className:t.string,listClassName:t.string,cssModule:t.object,children:t.node,"aria-label":t.string},E={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},f=function(a){var l=a.className,s=a.listClassName,c=a.cssModule,d=a.children,i=a.tag,n=a.listTag,o=a["aria-label"],B=p(a,j),P=g(v(l),c),$=g(v("breadcrumb",s),c);return N.createElement(i,x({},B,{className:P,"aria-label":o}),N.createElement(n,{className:$},d))};f.propTypes=y;f.defaultProps=E;const I=f;var _=["className","cssModule","active","tag"],L={tag:b,active:t.bool,className:t.string,cssModule:t.object},k={tag:"li"},h=function(a){var l=a.className,s=a.cssModule,c=a.active,d=a.tag,i=p(a,_),n=g(v(l,c?"active":!1,"breadcrumb-item"),s);return N.createElement(d,x({},i,{className:n,"aria-current":c?"page":void 0}))};h.propTypes=L;h.defaultProps=k;const u=h;const W=({title:r,subtitle:a,children:l,icon:s})=>m("div",{className:"UI PageTitle",children:[e("div",{className:"bold-line"}),e("div",{className:"icon",children:e("i",{className:`fas fa-${s}`})}),m("div",{className:"flex-fill",children:[e("div",{className:"title",children:r}),e("div",{children:a})]}),e("div",{children:l})]});class R extends M.Component{render(){const{items:a,main:l,icon:s,content:{cms:{pages:{general:{home:c}}}},dark:d=!1}=this.props;let i=null;return a&&(i=a.map((n,o)=>e(u,{children:e(T,{to:n.to,children:n.content})},o))),m(I,{className:"UI Breadcrumb text-gs d-none d-sm-flex",listClassName:"bg-transparent rounded-0 justify-content-end",children:[e(u,{children:m(T,{to:"/",className:"home",children:[s&&e("i",{className:`fas fa-${s}`}),c]})}),i,e(u,{active:!0,children:l})]})}}const U=r=>({...r}),q=C(U)(R);export{q as B,W as P};
//# sourceMappingURL=index-034081ef.js.map
