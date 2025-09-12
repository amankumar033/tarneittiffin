import{j as e}from"./jsx-dev-runtime-BoglotWI.js";import{r as u,d as i}from"./strapi-ttDTYSvM.js";const o=i.div`
  padding: 2rem;
  max-width: 1500px;
  margin: 0 auto;
`,y=i.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2rem;
  font-weight: 600;
`,q=i.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,d=i.th`
  background: #f6f6f9;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #32324d;
  font-size: 1.1rem;
  border-bottom: 1px solid #e9ecef;
`,t=i.td`
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  font-size: 1rem;
  color: #32324d;
`,j=i.tr`
  &:hover {
    background-color: #f8f9fa;
    cursor: pointer;
  }
`,k=i.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,C=i.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,P=i.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  &:hover {
    color: #333;
  }
`,V=i.div`
  margin-bottom: 2rem;
`,O=i.h3`
  font-size: 1.5rem;
  color: #32324d;
  margin-bottom: 1rem;
  font-weight: 600;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 0.5rem;
`,a=i.div`
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #32324d;
`,b=i.button`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;
`,U=i(b)`
  background: #007bff;
  color: white;
  &:hover {
    background: #0056b3;
  }
`;i(b)`
  background: #dc3545;
  color: white;
  &:hover {
    background: #c82333;
  }
`;const A=i.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
`,w=i.div`
  background: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 1px solid #f5c6cb;
`,M=()=>{const[p,x]=u.useState([]),[n,l]=u.useState(null),[N,m]=u.useState(!1),[D,c]=u.useState(!0),[f,h]=u.useState(null);u.useEffect(()=>{E()},[]);const E=async()=>{try{c(!0);const r=await fetch("/api/enquiries?populate=*");if(!r.ok)throw new Error("Failed to fetch enquiries");const s=await r.json();console.log("Fetched enquiries data:",s),x(s.data||[])}catch(r){h(r.message)}finally{c(!1)}},v=r=>{console.log("Selected Enquiry:",r),console.log("All Enquiry Keys:",Object.keys(r)),console.log("Enquiry Attributes:",r.attributes),l(r),m(!0)},g=()=>{m(!1),l(null)};return D?e.jsxDEV(o,{children:e.jsxDEV(A,{children:"Loading enquiries..."},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:216,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:215,columnNumber:7},void 0):f?e.jsxDEV(o,{children:e.jsxDEV(w,{children:["Error: ",f]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:224,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:223,columnNumber:7},void 0):e.jsxDEV(o,{children:[e.jsxDEV(y,{children:"Enquiry Dashboard"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:231,columnNumber:7},void 0),e.jsxDEV(q,{children:[e.jsxDEV("thead",{children:e.jsxDEV("tr",{children:[e.jsxDEV(d,{children:"Name"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:236,columnNumber:13},void 0),e.jsxDEV(d,{children:"Email"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:237,columnNumber:13},void 0),e.jsxDEV(d,{children:"Phone Number"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:238,columnNumber:13},void 0),e.jsxDEV(d,{children:"Service Interest"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:239,columnNumber:13},void 0),e.jsxDEV(d,{children:"Message"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:240,columnNumber:13},void 0),e.jsxDEV(d,{children:"Created At"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:241,columnNumber:13},void 0),e.jsxDEV(d,{children:"Actions"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:242,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:235,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:234,columnNumber:9},void 0),e.jsxDEV("tbody",{children:p.map(r=>{const s=r.attributes||r;return e.jsxDEV(j,{children:[e.jsxDEV(t,{children:s.name||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:250,columnNumber:17},void 0),e.jsxDEV(t,{children:s.email||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:251,columnNumber:17},void 0),e.jsxDEV(t,{children:s.phone_number||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:252,columnNumber:17},void 0),e.jsxDEV(t,{children:s.service_interest||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:253,columnNumber:17},void 0),e.jsxDEV(t,{children:s.message?s.message.length>50?s.message.substring(0,50)+"...":s.message:"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:254,columnNumber:17},void 0),e.jsxDEV(t,{children:s.createdAt?new Date(s.createdAt).toLocaleDateString():"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:262,columnNumber:17},void 0),e.jsxDEV(t,{children:e.jsxDEV(U,{onClick:()=>v(r),children:"View"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:269,columnNumber:19},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:268,columnNumber:17},void 0)]},r.id,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:249,columnNumber:15},void 0)})},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:245,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:233,columnNumber:7},void 0),N&&n&&e.jsxDEV(k,{onClick:g,children:e.jsxDEV(C,{onClick:r=>r.stopPropagation(),children:[e.jsxDEV(P,{onClick:g,children:"×"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:283,columnNumber:13},void 0),e.jsxDEV(V,{children:[e.jsxDEV(O,{children:"Enquiry Information"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:286,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Enquiry ID:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:289,columnNumber:17},void 0)," ",n.id]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:288,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Name:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:292,columnNumber:17},void 0)," ",n.attributes?.name||n.name||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:291,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Email:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:295,columnNumber:17},void 0)," ",n.attributes?.email||n.email||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:294,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Phone Number:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:298,columnNumber:17},void 0)," ",n.attributes?.phone_number||n.phone_number||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:297,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Service Interest:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:301,columnNumber:17},void 0)," ",n.attributes?.service_interest||n.service_interest||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:300,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Message:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:304,columnNumber:17},void 0)," ",n.attributes?.message||n.message||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:303,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Created At:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:307,columnNumber:17},void 0)," ",n.attributes?.createdAt||n.createdAt?new Date(n.attributes?.createdAt||n.createdAt).toLocaleString():"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:306,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Updated At:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:313,columnNumber:17},void 0)," ",n.attributes?.updatedAt||n.updatedAt?new Date(n.attributes?.updatedAt||n.updatedAt).toLocaleString():"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:312,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Published At:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:319,columnNumber:17},void 0)," ",n.attributes?.publishedAt||n.publishedAt?new Date(n.attributes?.publishedAt||n.publishedAt).toLocaleString():"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:318,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:285,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:282,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:281,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:230,columnNumber:5},void 0)};export{M as default};
