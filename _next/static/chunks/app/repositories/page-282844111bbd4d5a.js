(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{32185:function(e,r,s){Promise.resolve().then(s.bind(s,25218)),Promise.resolve().then(s.bind(s,82591)),Promise.resolve().then(s.bind(s,47322)),Promise.resolve().then(s.bind(s,51407)),Promise.resolve().then(s.bind(s,30154))},37496:function(e,r,s){"use strict";var t=s(23963);r.Z=void 0;var n=t(s(19118)),i=s(57437);r.Z=(0,n.default)((0,i.jsx)("path",{d:"M9.41 15.59 8 17l-4-4 4-4 1.41 1.41L7.83 12c1.51-.33 3.73.08 5.17 1.36V6.83l-1.59 1.59L10 7l4-4 4 4-1.41 1.41L15 6.83V21h-2v-4c-.73-2.58-3.07-3.47-5.17-3z"}),"ForkLeft")},47322:function(e,r,s){"use strict";s.d(r,{default:function(){return C}});var t=s(57437),n=s(66883),i=s(61064),o=s(98292),l=s(91368),a=s(82342),c=s(16463),d=s(29039),h=()=>{let e=(0,c.useSearchParams)(),r=null==e?void 0:e.get("offset"),s=null==e?void 0:e.get("limit"),t=r&&Number(r)||1,n=s&&Number(s)||o.oA.qV,{data:i,isLoading:h,error:u}=(0,d.ZP)("".concat(l.H.GH_REPOSITORIES,"?per_page=").concat(n,"&page=").concat(t||1),a.Z);return{repositories:i,offset:t,limit:n,isLoading:h,error:u}},u=s(94250),x=s(9528),m=(0,x.Z)((0,t.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility"),j=(0,x.Z)((0,t.jsx)("path",{d:"M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20zm-6 8h-4v-2h4zm0-4h-4v-2h4z"}),"BugReport"),p=(0,x.Z)((0,t.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),Z=s(37496),f=s(33037),y=s(7999),v=s(83719),g=s(63742),b=s(39581),P=s(44376),w=s(36640),S=s(22599),I=s.n(S);function z(e){let{created_at:r,description:s,html_url:n,language:o,forks:l,name:a,stargazers_count:c,watchers:d,open_issues:h}=e;return(0,t.jsx)(f.ZP,{item:!0,xs:12,sm:6,lg:4,children:(0,t.jsxs)(y.Z,{width:"100%",height:"100%",boxShadow:3,overflow:"hidden",borderRadius:"0.5rem",display:"flex",children:[(0,t.jsxs)(y.Z,{bgcolor:"var(--gray-100)",p:"0.25rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"column",children:[(0,t.jsx)(v.Z,{variant:"caption",color:"var(--gray-600)",children:r?r.slice(0,10):"dd-mm-yyyy"}),(0,t.jsx)(i.Z,{style:{fontSize:"5rem",color:"var(--gray-400)"}}),(0,t.jsx)(g.Z,{icon:(0,t.jsx)(u.Z,{}),label:o||"N/A",variant:"outlined",color:"secondary",size:"small"})]}),(0,t.jsx)(w.Z,{sx:{height:"100%"},target:"_blank",href:n,children:(0,t.jsxs)(y.Z,{width:"100%",height:"100%",py:"0.25rem",px:"0.5rem",display:"flex",flexDirection:"column",justifyContent:"space-between",children:[(0,t.jsxs)(y.Z,{children:[(0,t.jsx)(v.Z,{variant:"subtitle1",children:a||"N/A"}),(0,t.jsx)(v.Z,{variant:"caption",color:"var(--gray-500)",children:s?I().truncate(s,{length:150,omission:"...",separator:" "}):"N/A"})]}),(0,t.jsxs)(y.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",borderTop:"1px solid var(--gray-100)",children:[(0,t.jsx)(P.Z,{startIcon:(0,t.jsx)(m,{}),size:"small",color:"secondary",children:d}),(0,t.jsx)(P.Z,{startIcon:(0,t.jsx)(Z.Z,{}),size:"small",color:"secondary",children:l}),(0,t.jsx)(P.Z,{startIcon:(0,t.jsx)(j,{}),size:"small",color:"secondary",children:h}),(0,t.jsx)(P.Z,{startIcon:(0,t.jsx)(p,{}),size:"small",color:"secondary",children:c})]})]})})]})},a)}var C=()=>{let{repositories:e,isLoading:r,error:s,limit:o}=h();return s?(0,t.jsx)(n.Z,{error:s}):r?(0,t.jsx)(f.ZP,{container:!0,spacing:2,children:Array(o).fill(",").map((e,r)=>(0,t.jsx)(f.ZP,{item:!0,xs:12,sm:6,lg:4,children:(0,t.jsxs)(y.Z,{width:"100%",height:"100%",boxShadow:3,overflow:"hidden",borderRadius:"0.5rem",display:"flex",children:[(0,t.jsxs)(y.Z,{bgcolor:"var(--gray-100)",p:"0.25rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"column",children:[(0,t.jsx)(v.Z,{variant:"caption",color:"var(--gray-600)",children:"dd-mm-yyyy"}),(0,t.jsx)(i.Z,{style:{fontSize:"5rem",color:"var(--gray-400)"}}),(0,t.jsx)(y.Z,{children:(0,t.jsx)(g.Z,{icon:(0,t.jsx)(u.Z,{}),label:"N/A",variant:"outlined",color:"secondary",size:"small"})})]}),(0,t.jsxs)(y.Z,{width:"100%",height:"100%",py:"0.25rem",px:"0.5rem",display:"flex",flexDirection:"column",justifyContent:"space-between",children:[(0,t.jsx)(y.Z,{children:Array(6).fill(",").map((e,r)=>(0,t.jsx)(b.Z,{sx:{bgcolor:"var(--gray-300)"},variant:"text"},"i-".concat(r)))}),(0,t.jsxs)(y.Z,{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",borderTop:"1px solid var(--gray-100)",children:[(0,t.jsx)(P.Z,{startIcon:(0,t.jsx)(m,{}),size:"small",color:"secondary",children:"0"}),(0,t.jsx)(P.Z,{startIcon:(0,t.jsx)(Z.Z,{}),size:"small",color:"secondary",children:"0"}),(0,t.jsx)(P.Z,{startIcon:(0,t.jsx)(j,{}),size:"small",color:"secondary",children:"0"}),(0,t.jsx)(P.Z,{startIcon:(0,t.jsx)(p,{}),size:"small",color:"secondary",children:"0"})]})]})]})},"-".concat(r)))}):e?(0,t.jsx)(f.ZP,{container:!0,spacing:2,children:null==e?void 0:e.map(z)}):(0,t.jsx)(t.Fragment,{})}},51407:function(e,r,s){"use strict";s.d(r,{default:function(){return h}});var t=s(57437),n=s(36756),i=s(66883),o=s(25319),l=s(98292),a=s(7999),c=s(16463),d=s(2265);function h(){let{gh_profile:e,isLoading:r,error:s}=(0,o.Z)(),h=(0,c.useSearchParams)(),u=null==h?void 0:h.get("limit"),x=u&&Number(u)||l.oA.b9;return s?(0,t.jsx)(i.Z,{error:s}):r?(0,t.jsx)(a.Z,{textAlign:"center",py:"2rem",children:"Loading..."}):(0,t.jsx)(d.Suspense,{children:(0,t.jsx)(n.Z,{limit:x,count:(null==e?void 0:e.public_repos)||0})})}},36756:function(e,r,s){"use strict";s.d(r,{Z:function(){return u}});var t=s(57437),n=s(66135),i=s(74602),o=s(75997),l=s(7999),a=s(66436),c=s(21153),d=s(88929),h=s(16463);function u(e){let{count:r,limit:s}=e,u=(0,h.useRouter)(),x=(0,h.usePathname)(),{createQueryString:m}=(0,n.Z)(),j=r/s,p=Number.isInteger(j)?j:Number(j.toFixed(0))+1;return(0,t.jsx)(l.Z,{display:"flex",justifyContent:"center",py:"2rem",children:(0,t.jsx)(d.Z,{spacing:2,children:(0,t.jsx)(a.Z,{color:"primary",count:p,onChange:(e,r)=>{u.push(x+"?"+m("offset",String(r)))},renderItem:e=>(0,t.jsx)(c.Z,{sx:{color:"var(--gray-700)"},components:{previous:i.Z,next:o.Z},...e})})})})}},66883:function(e,r,s){"use strict";var t=s(57437),n=s(68165),i=s(88929);r.Z=e=>{let{error:r}=e;return(0,t.jsx)(i.Z,{sx:{width:"100%",mb:"2rem"},spacing:2,children:(0,t.jsx)(n.Z,{severity:"error",children:(null==r?void 0:r.message)||"Sorry, there was an error with fetching data. Please try again later!"})})}},66135:function(e,r,s){"use strict";var t=s(16463),n=s(2265);r.Z=()=>{let e=(0,t.useSearchParams)();return{createQueryString:(0,n.useCallback)((r,s)=>{let t=new URLSearchParams(null==e?void 0:e.toString());return t.set(r,s),t.toString()},[e])}}},25319:function(e,r,s){"use strict";var t=s(91368),n=s(82342),i=s(29039);r.Z=()=>{let{data:e,isLoading:r,error:s}=(0,i.ZP)(t.H.GH_PROFILE,n.Z);return{gh_profile:e,isLoading:r,error:s}}},91368:function(e,r,s){"use strict";s.d(r,{H:function(){return t}});let t={PROJECTS:"/storage/projects.json",PROJECT:"/storage/projects/",GH_REPOSITORIES:"https://api.github.com/users/MuhammadMinhaj/repos",GH_PROFILE:"https://api.github.com/users/MuhammadMinhaj",SV_REPUTATIONS:"https://api.stackexchange.com/2.3/users/13464821?order=desc&sort=reputation&site=stackoverflow"}},82342:function(e,r){"use strict";r.Z=e=>fetch(e).then(e=>e.json())},98292:function(e){"use strict";e.exports=JSON.parse('{"oA":{"b9":6,"qV":9,"Lg":6},"_I":"all"}')}},function(e){e.O(0,[866,360,760,37,208,149,878,154,971,23,744],function(){return e(e.s=32185)}),_N_E=e.O()}]);