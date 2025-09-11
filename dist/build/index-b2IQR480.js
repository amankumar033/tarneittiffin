import{j as e}from"./jsx-dev-runtime-BGxj6ILN.js";import{r as o,d as i}from"./strapi-GOec8IU8.js";const c=i.div`
  padding: 2rem;
`,N=i.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #32324d;
`,D=i.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
`,n=i.th`
  background: #f6f6f9;
  padding: 0.75rem;
  text-align: left;
  font-weight: 600;
  color: #32324d;
  border-bottom: 1px solid #eaeaef;
  white-space: nowrap;
`,a=i.td`
  padding: 0.75rem;
  border-bottom: 1px solid #eaeaef;
  color: #32324d;
  max-width: 220px;
  word-wrap: break-word;
`,h=i.tr`
  transition: background-color 0.2s ease;
  &:hover { background: #f6f6f9; }
`,v=i.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-right: 0.5rem;
`,P=i(v)`
  background: #d02b20;
  color: white;
  &:hover { background: #b02a20; }
`,j=i.div`
  text-align: center;
  padding: 2rem;
  color: #666687;
`,U=i.div`
  text-align: center;
  padding: 2rem;
  color: #666687;
`,C=()=>{const[u,m]=o.useState([]),[p,b]=o.useState(!0);o.useEffect(()=>{let s=!0,r=0;const d=async()=>{try{const f=await fetch("/api/users-plans?populate=*",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${window?.strapi?.auth?.getToken?.()||""}`}});if(f.ok){const x=await f.json();if(!s)return;const l=x.data||[];m(l),r===0?r=l.length:l.length>r&&window?.strapi?.notifications?.success?.("New users plan received")}}finally{b(!1)}};d();const t=setInterval(d,1e4);return()=>{s=!1,clearInterval(t)}},[]);const g=async s=>{if(window.confirm("Delete this user plan?"))try{(await fetch(`/api/users-plans/${s}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${window?.strapi?.auth?.getToken?.()||""}`}})).ok?m(d=>d.filter(t=>t.id!==s)):alert("Failed to delete")}catch{alert("Error deleting")}};return p?e.jsxDEV(c,{children:e.jsxDEV(j,{children:"Loading users plans..."},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:127,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:126,columnNumber:7},void 0):e.jsxDEV(c,{children:[e.jsxDEV(N,{children:"Users Plans"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:134,columnNumber:7},void 0),u.length>0?e.jsxDEV(D,{children:[e.jsxDEV("thead",{children:e.jsxDEV("tr",{children:[e.jsxDEV(n,{children:"ID"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:139,columnNumber:15},void 0),e.jsxDEV(n,{children:"Full Name"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:140,columnNumber:15},void 0),e.jsxDEV(n,{children:"Email"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:141,columnNumber:15},void 0),e.jsxDEV(n,{children:"Phone Number"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:142,columnNumber:15},void 0),e.jsxDEV(n,{children:"Plan"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:143,columnNumber:15},void 0),e.jsxDEV(n,{children:"Duration"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:144,columnNumber:15},void 0),e.jsxDEV(n,{children:"Price"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:145,columnNumber:15},void 0),e.jsxDEV(n,{children:"Additional Queries"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:146,columnNumber:15},void 0),e.jsxDEV(n,{children:"Status"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:147,columnNumber:15},void 0),e.jsxDEV(n,{children:"Actions"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:148,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:138,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:137,columnNumber:11},void 0),e.jsxDEV("tbody",{children:u.map(s=>e.jsxDEV(h,{children:[e.jsxDEV(a,{children:s.id},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:154,columnNumber:17},void 0),e.jsxDEV(a,{children:s.full_name||s.attributes?.full_name||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:155,columnNumber:17},void 0),e.jsxDEV(a,{children:s.email||s.attributes?.email||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:156,columnNumber:17},void 0),e.jsxDEV(a,{children:s.phone_number||s.attributes?.phone_number||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:157,columnNumber:17},void 0),e.jsxDEV(a,{children:s.plan||s.attributes?.plan||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:158,columnNumber:17},void 0),e.jsxDEV(a,{children:s.duration||s.attributes?.duration||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:159,columnNumber:17},void 0),e.jsxDEV(a,{children:s.price||s.attributes?.price||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:160,columnNumber:17},void 0),e.jsxDEV(a,{children:s.additional_queries||s.attributes?.additional_queries||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:161,columnNumber:17},void 0),e.jsxDEV(a,{children:s.plan_status||s.attributes?.plan_status||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:162,columnNumber:17},void 0),e.jsxDEV(a,{children:e.jsxDEV(P,{onClick:()=>g(s.id),children:"Delete"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:164,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:163,columnNumber:17},void 0)]},s.id,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:153,columnNumber:15},void 0))},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:151,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:136,columnNumber:9},void 0):e.jsxDEV(U,{children:"No users plans found."},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:171,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:133,columnNumber:5},void 0)};export{C as default};
