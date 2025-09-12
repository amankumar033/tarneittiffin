import{j as e}from"./jsx-dev-runtime-BoglotWI.js";import{r as t,d as n}from"./strapi-ttDTYSvM.js";const m=n.div`
  padding: 2rem;
`,x=n.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;
`,N=n.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
`,a=n.th`
  background: #f6f6f9;
  padding: 0.75rem;
  text-align: left;
  font-weight: 600;
  color: #32324d;
  border-bottom: 1px solid #eaeaef;
  white-space: nowrap;
`,i=n.td`
  padding: 0.75rem;
  border-bottom: 1px solid #eaeaef;
  color: #32324d;
  max-width: 220px;
  word-wrap: break-word;
`,D=n.tr`
  transition: background-color 0.2s ease;
  &:hover { background: #f6f6f9; }
`,h=n.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-right: 0.5rem;
`;n(h)`
  background: #d02b20;
  color: white;
  &:hover { background: #b02a20; }
`;const v=n.div`
  text-align: center;
  padding: 2rem;
  color: #666687;
`,P=n.div`
  text-align: center;
  padding: 2rem;
  color: #666687;
`,k=()=>{const[l,f]=t.useState([]),[c,p]=t.useState(!0);return t.useEffect(()=>{let s=!0,r=0;const o=async()=>{try{const u=await fetch("/api/users-plans?populate=*",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${window?.strapi?.auth?.getToken?.()||""}`}});if(u.ok){const g=await u.json();if(!s)return;const d=g.data||[];f(d),r===0?r=d.length:d.length>r&&window?.strapi?.notifications?.success?.("New users plan received")}}finally{p(!1)}};o();const b=setInterval(o,1e4);return()=>{s=!1,clearInterval(b)}},[]),c?e.jsxDEV(m,{children:e.jsxDEV(v,{children:"Loading users plans..."},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:127,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:126,columnNumber:7},void 0):e.jsxDEV(m,{children:[e.jsxDEV(x,{children:"Users Plans"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:134,columnNumber:7},void 0),l.length>0?e.jsxDEV(N,{children:[e.jsxDEV("thead",{children:e.jsxDEV("tr",{children:[e.jsxDEV(a,{children:"ID"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:139,columnNumber:15},void 0),e.jsxDEV(a,{children:"Full Name"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:140,columnNumber:15},void 0),e.jsxDEV(a,{children:"Email"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:141,columnNumber:15},void 0),e.jsxDEV(a,{children:"Phone Number"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:142,columnNumber:15},void 0),e.jsxDEV(a,{children:"Plan"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:143,columnNumber:15},void 0),e.jsxDEV(a,{children:"Duration"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:144,columnNumber:15},void 0),e.jsxDEV(a,{children:"Price"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:145,columnNumber:15},void 0),e.jsxDEV(a,{children:"Additional Queries"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:146,columnNumber:15},void 0),e.jsxDEV(a,{children:"Status"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:147,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:138,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:137,columnNumber:11},void 0),e.jsxDEV("tbody",{children:l.map(s=>e.jsxDEV(D,{children:[e.jsxDEV(i,{children:s.id},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:154,columnNumber:17},void 0),e.jsxDEV(i,{children:s.full_name||s.attributes?.full_name||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:155,columnNumber:17},void 0),e.jsxDEV(i,{children:s.email||s.attributes?.email||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:156,columnNumber:17},void 0),e.jsxDEV(i,{children:s.phone_number||s.attributes?.phone_number||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:157,columnNumber:17},void 0),e.jsxDEV(i,{children:s.plan||s.attributes?.plan||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:158,columnNumber:17},void 0),e.jsxDEV(i,{children:s.duration||s.attributes?.duration||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:159,columnNumber:17},void 0),e.jsxDEV(i,{children:s.price||s.attributes?.price||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:160,columnNumber:17},void 0),e.jsxDEV(i,{children:s.additional_queries||s.attributes?.additional_queries||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:161,columnNumber:17},void 0),e.jsxDEV(i,{children:s.plan_status||s.attributes?.plan_status||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:162,columnNumber:17},void 0)]},s.id,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:153,columnNumber:15},void 0))},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:151,columnNumber:11},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:136,columnNumber:9},void 0):e.jsxDEV(P,{children:"No users plans found."},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:169,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/users-plans-dashboard/admin/src/pages/UsersPlansPage/index.jsx",lineNumber:133,columnNumber:5},void 0)};export{k as default};
