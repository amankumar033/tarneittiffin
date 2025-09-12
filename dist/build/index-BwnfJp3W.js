import{j as e}from"./jsx-dev-runtime-DE2wkveb.js";import{r as o,d as r}from"./strapi-n3s6vALn.js";const N=r.div`
  padding: 2rem;
`,D=r.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: white;
`,V=r.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 0.875rem;
`,d=r.th`
  background: #f6f6f9;
  padding: 0.75rem;
  text-align: left;
  font-weight: 600;
  color: #32324d;
  border-bottom: 1px solid #eaeaef;
  white-space: nowrap;
  font-size: 1rem;
`,t=r.td`
  padding: 0.75rem;
  border-bottom: 1px solid #eaeaef;
  color: #32324d;
  max-width: 200px;
  word-wrap: break-word;
  font-size: 1rem;
`,U=r.tr`
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #f6f6f9;
  }
`,v=r.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  margin-right: 0.5rem;
`,w=r(v)`
  background: #d02b20;
  color: white;
  
  &:hover {
    background: #b02a20;
  }
`,A=r(v)`
  background: #4945ff;
  color: white;
  
  &:hover {
    background: #3a36e6;
  }
`,y=r.div`
  text-align: center;
  padding: 2rem;
  color: #666687;
`,S=r.div`
  text-align: center;
  padding: 2rem;
  color: #666687;
`,_=r.div`
  overflow-x: auto;
  margin-top: 1rem;
`,L=r.div`
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
`,z=r.div`
  background: white;
  border-radius: 8px;
  padding: 2rem;
  max-width: 1200px;
  width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,F=r.button`
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
`,h=r.div`
  margin-bottom: 1.5rem;
`,O=r.h3`
  color: #32324d;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`,f=r.div`
  color: #666687;
  padding: 0.5rem;
  background: #f6f6f9;
  border-radius: 4px;
  word-wrap: break-word;
  font-size: 1.1rem;
`,M=r.div`
  color: #d02b20;
  padding: 1rem;
  background: #fce8e6;
  border-radius: 4px;
  margin: 1rem 0;
`,I=()=>{const[l,g]=o.useState([]),[j,T]=o.useState(!0),[n,m]=o.useState(null),[k,u]=o.useState(!1),[p,E]=o.useState([]);o.useEffect(()=>{(async()=>{const a=[];try{console.log("Fetching tiffin orders...");const s=await fetch("/api/tiffin-orders?populate=*",{method:"GET",headers:{"Content-Type":"application/json"}});if(console.log("Tiffin orders response status:",s.status),s.ok){const c=await s.json();console.log("Tiffin Orders data:",c),console.log("First order sample:",c.data?.[0]),g(c.data||[])}else console.error("Failed to fetch tiffin orders:",s.status,s.statusText),a.push(`Failed to fetch tiffin orders: ${s.status} ${s.statusText}`)}catch(s){console.error("Error fetching tiffin orders:",s),a.push(`Network error: ${s.message}`)}finally{E(a),T(!1)}})()},[]);const b=i=>i?i.toString():"N/A",C=i=>{console.log("Selected tiffin order:",i),console.log("Order date field:",i.date),console.log("Order additional_note field:",i.additional_note),console.log("All order fields:",Object.keys(i)),m(i),u(!0)},P=async i=>{if(window.confirm("Are you sure you want to delete this tiffin order? This action cannot be undone."))try{const a=await fetch(`/api/tiffin-orders/${i}`,{method:"DELETE",headers:{"Content-Type":"application/json"}});a.ok?(console.log("Tiffin order deleted successfully"),g(l.filter(s=>s.id!==i)),n&&n.id===i&&(u(!1),m(null))):(console.error("Failed to delete tiffin order:",a.status,a.statusText),alert("Failed to delete tiffin order. Please try again."))}catch(a){console.error("Error deleting tiffin order:",a),alert("Error deleting tiffin order. Please try again.")}},x=()=>{u(!1),m(null)};return j?e.jsxDEV(N,{children:e.jsxDEV(y,{children:"Loading tiffin orders..."},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:260,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:259,columnNumber:7},void 0):e.jsxDEV(N,{children:[e.jsxDEV(D,{children:"Tiffin Orders Dashboard"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:267,columnNumber:7},void 0),p.length>0&&e.jsxDEV("div",{children:p.map((i,a)=>e.jsxDEV(M,{children:i},a,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:272,columnNumber:13},void 0))},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:270,columnNumber:9},void 0),l.length>0?e.jsxDEV(_,{children:e.jsxDEV(V,{children:[e.jsxDEV("thead",{children:e.jsxDEV("tr",{children:[e.jsxDEV(d,{children:"Order ID"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:282,columnNumber:18},void 0),e.jsxDEV(d,{children:"Full Name"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:283,columnNumber:18},void 0),e.jsxDEV(d,{children:"Email"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:284,columnNumber:18},void 0),e.jsxDEV(d,{children:"Phone Number"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:285,columnNumber:18},void 0),e.jsxDEV(d,{children:"Address"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:286,columnNumber:18},void 0),e.jsxDEV(d,{children:"Meal Type"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:287,columnNumber:18},void 0),e.jsxDEV(d,{children:"Order Status"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:288,columnNumber:18},void 0),e.jsxDEV(d,{children:"Scheduled Date/Time"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:289,columnNumber:18},void 0),e.jsxDEV(d,{children:"Additional Notes"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:290,columnNumber:18},void 0),e.jsxDEV(d,{children:"Actions"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:291,columnNumber:18},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:281,columnNumber:30},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:280,columnNumber:13},void 0),e.jsxDEV("tbody",{children:l.map(i=>e.jsxDEV(U,{children:[e.jsxDEV(t,{children:i.id},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:297,columnNumber:20},void 0),e.jsxDEV(t,{children:i.fullname||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:298,columnNumber:20},void 0),e.jsxDEV(t,{children:i.email||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:299,columnNumber:20},void 0),e.jsxDEV(t,{children:b(i.phone_number)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:300,columnNumber:20},void 0),e.jsxDEV(t,{children:i.address||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:301,columnNumber:20},void 0),e.jsxDEV(t,{children:i.meal_type||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:302,columnNumber:20},void 0),e.jsxDEV(t,{children:i.order_status||"-"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:303,columnNumber:20},void 0),e.jsxDEV(t,{children:i.date?new Date(i.date).toLocaleString():i.attributes?.date?new Date(i.attributes.date).toLocaleString():"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:304,columnNumber:20},void 0),e.jsxDEV(t,{children:i.additional_note||i.attributes?.additional_note||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:312,columnNumber:20},void 0),e.jsxDEV(t,{children:[e.jsxDEV(A,{onClick:()=>C(i),children:"View"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:316,columnNumber:22},void 0),e.jsxDEV(w,{onClick:()=>P(i.id),children:"Delete"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:319,columnNumber:22},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:315,columnNumber:20},void 0)]},i.id,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:296,columnNumber:18},void 0))},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:294,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:279,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:278,columnNumber:9},void 0):e.jsxDEV(S,{children:"No tiffin orders found."},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:329,columnNumber:9},void 0),k&&n&&e.jsxDEV(L,{onClick:x,children:e.jsxDEV(z,{onClick:i=>i.stopPropagation(),children:[e.jsxDEV(F,{onClick:x,children:"×"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:335,columnNumber:13},void 0),e.jsxDEV(D,{children:["Tiffin Order Details - #",n.id]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:336,columnNumber:13},void 0),e.jsxDEV(h,{children:[e.jsxDEV(O,{children:"Customer Information"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:339,columnNumber:15},void 0),e.jsxDEV(f,{children:[e.jsxDEV("strong",{children:"Full Name:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:341,columnNumber:17},void 0)," ",n.fullname||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:340,columnNumber:15},void 0),e.jsxDEV(f,{children:[e.jsxDEV("strong",{children:"Email:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:344,columnNumber:17},void 0)," ",n.email||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:343,columnNumber:15},void 0),e.jsxDEV(f,{children:[e.jsxDEV("strong",{children:"Phone Number:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:347,columnNumber:17},void 0)," ",b(n.phone_number)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:346,columnNumber:15},void 0),e.jsxDEV(f,{children:[e.jsxDEV("strong",{children:"Address:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:350,columnNumber:17},void 0)," ",n.address||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:349,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:338,columnNumber:13},void 0),e.jsxDEV(h,{children:[e.jsxDEV(O,{children:"Order Information"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:355,columnNumber:15},void 0),e.jsxDEV(f,{children:[e.jsxDEV("strong",{children:"Order ID:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:357,columnNumber:18},void 0)," ",n.id]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:356,columnNumber:30},void 0),e.jsxDEV(f,{children:[e.jsxDEV("strong",{children:"Meal Type:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:360,columnNumber:18},void 0)," ",n.meal_type||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:359,columnNumber:16},void 0),e.jsxDEV(f,{children:[e.jsxDEV("strong",{children:"Scheduled Date/Time:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:363,columnNumber:18},void 0)," ",n.date?new Date(n.date).toLocaleString():n.attributes?.date?new Date(n.attributes.date).toLocaleString():"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:362,columnNumber:16},void 0),e.jsxDEV(f,{children:[e.jsxDEV("strong",{children:"Additional Notes:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:371,columnNumber:18},void 0)," ",n.additional_note||n.attributes?.additional_note||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:370,columnNumber:16},void 0),e.jsxDEV(f,{children:[e.jsxDEV("strong",{children:"Created At:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:374,columnNumber:18},void 0)," ",n.createdAt?new Date(n.createdAt).toLocaleString():"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:373,columnNumber:16},void 0),e.jsxDEV(f,{children:[e.jsxDEV("strong",{children:"Published At:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:380,columnNumber:18},void 0)," ",n.publishedAt?new Date(n.publishedAt).toLocaleString():"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:379,columnNumber:16},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:354,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:334,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:333,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/tiffin-orders-dashboard/admin/src/pages/TiffinOrdersPage/index.jsx",lineNumber:266,columnNumber:5},void 0)};export{I as default};
