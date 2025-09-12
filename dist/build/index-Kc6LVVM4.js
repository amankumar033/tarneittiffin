import{j as e}from"./jsx-dev-runtime-DE2wkveb.js";import{r as u,d as s}from"./strapi-n3s6vALn.js";const l=s.div`
  padding: 2rem;
  max-width: 1500px;
  margin: 0 auto;
`,j=s.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2rem;
  font-weight: 600;
`,k=s.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,d=s.th`
  background: #f6f6f9;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: #32324d;
  font-size: 1.1rem;
  border-bottom: 1px solid #e9ecef;
`,t=s.td`
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
  font-size: 1rem;
  color: #32324d;
`,C=s.tr`
  &:hover {
    background-color: #f8f9fa;
    cursor: pointer;
  }
`,P=s.div`
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
`,V=s.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,O=s.button`
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
`,U=s.div`
  margin-bottom: 2rem;
`,A=s.h3`
  font-size: 1.5rem;
  color: #32324d;
  margin-bottom: 1rem;
  font-weight: 600;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 0.5rem;
`,a=s.div`
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #32324d;
`,x=s.button`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s;
`,w=s(x)`
  background: #007bff;
  color: white;
  &:hover {
    background: #0056b3;
  }
`,S=s(x)`
  background: #dc3545;
  color: white;
  &:hover {
    background: #c82333;
  }
`,z=s.div`
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: #666;
`,M=s.div`
  background: #f8d7da;
  color: #721c24;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  border: 1px solid #f5c6cb;
`,_=()=>{const[m,c]=u.useState([]),[n,f]=u.useState(null),[N,g]=u.useState(!1),[D,b]=u.useState(!0),[p,h]=u.useState(null);u.useEffect(()=>{E()},[]);const E=async()=>{try{b(!0);const i=await fetch("/api/enquiries?populate=*");if(!i.ok)throw new Error("Failed to fetch enquiries");const r=await i.json();console.log("Fetched enquiries data:",r),c(r.data||[])}catch(i){h(i.message)}finally{b(!1)}},y=i=>{console.log("Selected Enquiry:",i),console.log("All Enquiry Keys:",Object.keys(i)),console.log("Enquiry Attributes:",i.attributes),f(i),g(!0)},o=()=>{g(!1),f(null)},v=async i=>{if(window.confirm("Are you sure you want to delete this enquiry?"))try{(await fetch(`/api/enquiries/${i}`,{method:"DELETE"})).ok?(c(m.filter(q=>q.id!==i)),n&&n.id===i&&o()):alert("Failed to delete enquiry")}catch(r){alert("Error deleting enquiry: "+r.message)}};return D?e.jsxDEV(l,{children:e.jsxDEV(z,{children:"Loading enquiries..."},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:216,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:215,columnNumber:7},void 0):p?e.jsxDEV(l,{children:e.jsxDEV(M,{children:["Error: ",p]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:224,columnNumber:9},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:223,columnNumber:7},void 0):e.jsxDEV(l,{children:[e.jsxDEV(j,{children:"Enquiry Dashboard"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:231,columnNumber:7},void 0),e.jsxDEV(k,{children:[e.jsxDEV("thead",{children:e.jsxDEV("tr",{children:[e.jsxDEV(d,{children:"Name"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:236,columnNumber:13},void 0),e.jsxDEV(d,{children:"Email"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:237,columnNumber:13},void 0),e.jsxDEV(d,{children:"Phone Number"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:238,columnNumber:13},void 0),e.jsxDEV(d,{children:"Service Interest"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:239,columnNumber:13},void 0),e.jsxDEV(d,{children:"Message"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:240,columnNumber:13},void 0),e.jsxDEV(d,{children:"Enquiry Status"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:241,columnNumber:13},void 0),e.jsxDEV(d,{children:"Created At"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:242,columnNumber:13},void 0),e.jsxDEV(d,{children:"Actions"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:243,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:235,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:234,columnNumber:9},void 0),e.jsxDEV("tbody",{children:m.map(i=>{const r=i.attributes||i;return e.jsxDEV(C,{children:[e.jsxDEV(t,{children:r.name||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:251,columnNumber:17},void 0),e.jsxDEV(t,{children:r.email||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:252,columnNumber:17},void 0),e.jsxDEV(t,{children:r.phone_number||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:253,columnNumber:17},void 0),e.jsxDEV(t,{children:r.service_interest||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:254,columnNumber:17},void 0),e.jsxDEV(t,{children:r.message?r.message.length>50?r.message.substring(0,50)+"...":r.message:"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:255,columnNumber:17},void 0),e.jsxDEV(t,{children:r.enquiry_status||"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:263,columnNumber:17},void 0),e.jsxDEV(t,{children:r.createdAt?new Date(r.createdAt).toLocaleDateString():"N/A"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:264,columnNumber:17},void 0),e.jsxDEV(t,{children:[e.jsxDEV(w,{onClick:()=>y(i),children:"View"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:271,columnNumber:19},void 0),e.jsxDEV(S,{onClick:()=>v(i.id),children:"Delete"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:274,columnNumber:19},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:270,columnNumber:17},void 0)]},i.id,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:250,columnNumber:15},void 0)})},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:246,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:233,columnNumber:7},void 0),N&&n&&e.jsxDEV(P,{onClick:o,children:e.jsxDEV(V,{onClick:i=>i.stopPropagation(),children:[e.jsxDEV(O,{onClick:o,children:"×"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:287,columnNumber:13},void 0),e.jsxDEV(U,{children:[e.jsxDEV(A,{children:"Enquiry Information"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:290,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Enquiry ID:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:293,columnNumber:17},void 0)," ",n.id]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:292,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Name:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:296,columnNumber:17},void 0)," ",n.attributes?.name||n.name||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:295,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Email:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:299,columnNumber:17},void 0)," ",n.attributes?.email||n.email||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:298,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Phone Number:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:302,columnNumber:17},void 0)," ",n.attributes?.phone_number||n.phone_number||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:301,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Service Interest:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:305,columnNumber:17},void 0)," ",n.attributes?.service_interest||n.service_interest||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:304,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Message:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:308,columnNumber:17},void 0)," ",n.attributes?.message||n.message||"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:307,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Created At:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:311,columnNumber:17},void 0)," ",n.attributes?.createdAt||n.createdAt?new Date(n.attributes?.createdAt||n.createdAt).toLocaleString():"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:310,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Updated At:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:317,columnNumber:17},void 0)," ",n.attributes?.updatedAt||n.updatedAt?new Date(n.attributes?.updatedAt||n.updatedAt).toLocaleString():"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:316,columnNumber:15},void 0),e.jsxDEV(a,{children:[e.jsxDEV("strong",{children:"Published At:"},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:323,columnNumber:17},void 0)," ",n.attributes?.publishedAt||n.publishedAt?new Date(n.attributes?.publishedAt||n.publishedAt).toLocaleString():"N/A"]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:322,columnNumber:15},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:289,columnNumber:13},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:286,columnNumber:11},void 0)},void 0,!1,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:285,columnNumber:9},void 0)]},void 0,!0,{fileName:"C:/Users/amann/OneDrive/Desktop/tarneittiffin/src/plugins/enquiry-dashboard/admin/src/pages/EnquiryPage/index.jsx",lineNumber:230,columnNumber:5},void 0)};export{_ as default};
