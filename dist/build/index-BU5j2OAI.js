import{j as e}from"./jsx-dev-runtime-BoglotWI.js";import{r as f,d as n}from"./strapi-ttDTYSvM.js";const x=n.div`
  padding: 2rem;
`,N=n.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: white;
`,P=n.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
`,d=n.th`
  background: #f6f6f9;
  padding: 0.75rem;
  text-align: left;
  font-weight: 600;
  color: #32324d;
  border-bottom: 1px solid #eaeaef;
  white-space: nowrap;
  font-size: 1rem;
`,t=n.td`
  padding: 0.75rem;
  border-bottom: 1px solid #eaeaef;
  color: #32324d;
  max-width: 200px;
  word-wrap: break-word;
  font-size: 1rem;
`,V=n.tr`
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #f6f6f9;
  }
`,v=n.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-right: 0.5rem;
`;n(v)`
  background: #d02b20;
  color: white;
  
  &:hover {
    background: #b02a20;
  }
`;const U=n(v)`
  background: #4945ff;
  color: white;
  
  &:hover {
    background: #3a36e6;
  }
`,w=n.div`
  text-align: center;
  padding: 2rem;
  color: #666687;
`,A=n.div`
  text-align: center;
  padding: 2rem;
  color: #666687;
`,S=n.div`
  overflow-x: auto;
  margin-top: 1rem;
`,y=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,_=n.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  max-width: 1200px;
  width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,z=n.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666687;
  
  &:hover {
    color: #32324d;
  }
`,D=n.div`
  margin-bottom: 1.5rem;
`,h=n.h3`
  color: #32324d;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`,a=n.div`
  color: #666687;
  padding: 0.5rem;
  background: #f6f6f9;
  border-radius: 4px;
  word-wrap: break-word;
  font-size: 1.1rem;
`,L=n.div`
  color: #d02b20;
  padding: 1rem;
  background: #fce8e6;
  border-radius: 4px;
  margin: 1rem 0;
`,I=()=>{const[m,O]=f.useState([]),[j,T]=f.useState(!0),[r,u]=f.useState(null),[k,c]=f.useState(!1),[g,C]=f.useState([]);f.useEffect(()=>{(async()=>{const o=[];try{console.log("Fetching tiffin orders...");const s=await fetch("/api/tiffin-orders?populate=*",{method:"GET",headers:{"Content-Type":"application/json"}});if(console.log("Tiffin orders response status:",s.status),s.ok){const l=await s.json();console.log("Tiffin Orders data:",l),console.log("First order sample:",l.data?.[0]),O(l.data||[])}else console.error("Failed to fetch tiffin orders:",s.status,s.statusText),o.push(`Failed to fetch tiffin orders: ${s.status} ${s.statusText}`)}catch(s){console.error("Error fetching tiffin orders:",s),o.push(`Network error: ${s.message}`)}finally{C(o),T(!1)}})()},[]);const p=i=>i?i.toString():"N/A",E=i=>{console.log("Selected tiffin order:",i),console.log("Order date field:",i.date),console.log("Order additional_note field:",i.additional_note),console.log("All order fields:",Object.keys(i)),u(i),c(!0)},b=()=>{c(!1),u(null)};return j?e.jsxDEV(x,{children:e.jsxDEV(w,{children:"Loading tiffin orders..."},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:260,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:259,columnNumber:7},void 0):e.jsxDEV(x,{children:[e.jsxDEV(N,{children:"Tiffin Orders Dashboard"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:267,columnNumber:7},void 0),g.length>0&&e.jsxDEV("div",{children:g.map((i,o)=>e.jsxDEV(L,{children:i},o,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:272,columnNumber:13},void 0))},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:270,columnNumber:9},void 0),m.length>0?e.jsxDEV(S,{children:e.jsxDEV(P,{children:[e.jsxDEV("thead",{children:e.jsxDEV("tr",{children:[e.jsxDEV(d,{children:"Order ID"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:282,columnNumber:18},void 0),e.jsxDEV(d,{children:"Full Name"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:283,columnNumber:18},void 0),e.jsxDEV(d,{children:"Email"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:284,columnNumber:18},void 0),e.jsxDEV(d,{children:"Phone Number"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:285,columnNumber:18},void 0),e.jsxDEV(d,{children:"Address"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:286,columnNumber:18},void 0),e.jsxDEV(d,{children:"Meal Type"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:287,columnNumber:18},void 0),e.jsxDEV(d,{children:"Scheduled Date/Time"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:288,columnNumber:18},void 0),e.jsxDEV(d,{children:"Additional Notes"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:289,columnNumber:18},void 0),e.jsxDEV(d,{children:"Actions"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:290,columnNumber:18},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:281,columnNumber:30},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:280,columnNumber:13},void 0),e.jsxDEV("tbody",{children:m.map(i=>e.jsxDEV(V,{children:[e.jsxDEV(t,{children:i.id},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:296,columnNumber:20},void 0),e.jsxDEV(t,{children:i.fullname||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:297,columnNumber:20},void 0),e.jsxDEV(t,{children:i.email||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:298,columnNumber:20},void 0),e.jsxDEV(t,{children:p(i.phone_number)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:299,columnNumber:20},void 0),e.jsxDEV(t,{children:i.address||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:300,columnNumber:20},void 0),e.jsxDEV(t,{children:i.meal_type||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:301,columnNumber:20},void 0),e.jsxDEV(t,{children:i.date?new Date(i.date).toLocaleString():i.attributes?.date?new Date(i.attributes.date).toLocaleString():"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:302,columnNumber:20},void 0),e.jsxDEV(t,{children:i.additional_note||i.attributes?.additional_note||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:310,columnNumber:20},void 0),e.jsxDEV(t,{children:e.jsxDEV(U,{onClick:()=>E(i),children:"View"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:314,columnNumber:22},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:313,columnNumber:20},void 0)]},i.id,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:295,columnNumber:18},void 0))},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:293,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:279,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:278,columnNumber:9},void 0):e.jsxDEV(A,{children:"No tiffin orders found."},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:325,columnNumber:9},void 0),k&&r&&e.jsxDEV(y,{onClick:b,children:e.jsxDEV(_,{onClick:i=>i.stopPropagation(),children:[e.jsxDEV(z,{onClick:b,children:"×"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:331,columnNumber:13},void 0),e.jsxDEV(N,{children:["Tiffin Order Details - #",r.id]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:332,columnNumber:13},void 0),e.jsxDEV(D,{children:[e.jsxDEV(h,{children:"Customer Information"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:335,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Full Name:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:337,columnNumber:17},void 0)," ",r.fullname||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:336,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Email:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:340,columnNumber:17},void 0)," ",r.email||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:339,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Phone Number:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:343,columnNumber:17},void 0)," ",p(r.phone_number)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:342,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Address:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:346,columnNumber:17},void 0)," ",r.address||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:345,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:334,columnNumber:13},void 0),e.jsxDEV(D,{children:[e.jsxDEV(h,{children:"Order Information"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:351,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Order ID:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:353,columnNumber:18},void 0)," ",r.id]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:352,columnNumber:30},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Meal Type:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:356,columnNumber:18},void 0)," ",r.meal_type||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:355,columnNumber:16},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Scheduled Date/Time:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:359,columnNumber:18},void 0)," ",r.date?new Date(r.date).toLocaleString():r.attributes?.date?new Date(r.attributes.date).toLocaleString():"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:358,columnNumber:16},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Additional Notes:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:367,columnNumber:18},void 0)," ",r.additional_note||r.attributes?.additional_note||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:366,columnNumber:16},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Created At:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:370,columnNumber:18},void 0)," ",r.createdAt?new Date(r.createdAt).toLocaleString():"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:369,columnNumber:16},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Published At:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:376,columnNumber:18},void 0)," ",r.publishedAt?new Date(r.publishedAt).toLocaleString():"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:375,columnNumber:16},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:350,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:330,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:329,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:266,columnNumber:5},void 0)};export{I as default};
