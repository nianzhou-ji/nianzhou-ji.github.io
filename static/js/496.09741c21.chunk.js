"use strict";(self.webpackChunkgithub_blog=self.webpackChunkgithub_blog||[]).push([[496],{3314:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(1387);const i=function(e){return(0,r.A)(e,4)}},3496:(e,n,t)=>{t.r(n),t.d(n,{render:()=>O});var r=t(8373),i=t(6560),o=(t(9859),t(6479),t(5737)),d=(t(811),t(6278),t(7494)),a=t(62),s=t(6772),c=t(3314),l=t(8293);t(9330);function g(e){var n={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:u(e),edges:f(e)};return s.A(e.graph())||(n.value=c.A(e.graph())),n}function u(e){return l.A(e.nodes(),(function(n){var t=e.node(n),r=e.parent(n),i={v:n};return s.A(t)||(i.value=t),s.A(r)||(i.parent=r),i}))}function f(e){return l.A(e.edges(),(function(n){var t=e.edge(n),r={v:n.v,w:n.w};return s.A(n.name)||(r.name=n.name),s.A(t)||(r.value=t),r}))}var h=t(772),p=new Map,m=new Map,w=new Map,v=(0,d.K2)((()=>{m.clear(),w.clear(),p.clear()}),"clear"),R=(0,d.K2)(((e,n)=>{const t=m.get(n)||[];return d.Rm.trace("In isDescendant",n," ",e," = ",t.includes(e)),t.includes(e)}),"isDescendant"),y=(0,d.K2)(((e,n)=>{const t=m.get(n)||[];return d.Rm.info("Descendants of ",n," is ",t),d.Rm.info("Edge is ",e),e.v!==n&&e.w!==n&&(t?t.includes(e.v)||R(e.v,n)||R(e.w,n)||t.includes(e.w):(d.Rm.debug("Tilt, ",n,",not in descendants"),!1))}),"edgeInCluster"),X=(0,d.K2)(((e,n,t,r)=>{d.Rm.warn("Copying children of ",e,"root",r,"data",n.node(e),r);const i=n.children(e)||[];e!==r&&i.push(e),d.Rm.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach((i=>{if(n.children(i).length>0)X(i,n,t,r);else{const o=n.node(i);d.Rm.info("cp ",i," to ",r," with parent ",e),t.setNode(i,o),r!==n.parent(i)&&(d.Rm.warn("Setting parent",i,n.parent(i)),t.setParent(i,n.parent(i))),e!==r&&i!==e?(d.Rm.debug("Setting parent",i,e),t.setParent(i,e)):(d.Rm.info("In copy ",e,"root",r,"data",n.node(e),r),d.Rm.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==r,"node!==clusterId",i!==e));const a=n.edges(i);d.Rm.debug("Copying Edges",a),a.forEach((i=>{d.Rm.info("Edge",i);const o=n.edge(i.v,i.w,i.name);d.Rm.info("Edge data",o,r);try{y(i,r)?(d.Rm.info("Copying as ",i.v,i.w,o,i.name),t.setEdge(i.v,i.w,o,i.name),d.Rm.info("newGraph edges ",t.edges(),t.edge(t.edges()[0]))):d.Rm.info("Skipping copy of edge ",i.v,"--\x3e",i.w," rootId: ",r," clusterId:",e)}catch(a){d.Rm.error(a)}}))}d.Rm.debug("Removing node",i),n.removeNode(i)}))}),"copy"),b=(0,d.K2)(((e,n)=>{const t=n.children(e);let r=[...t];for(const i of t)w.set(i,e),r=[...r,...b(i,n)];return r}),"extractDescendants"),E=(0,d.K2)(((e,n,t)=>{const r=e.edges().filter((e=>e.v===n||e.w===n)),i=e.edges().filter((e=>e.v===t||e.w===t)),o=r.map((e=>({v:e.v===n?t:e.v,w:e.w===n?n:e.w}))),d=i.map((e=>({v:e.v,w:e.w})));return o.filter((e=>d.some((n=>e.v===n.v&&e.w===n.w))))}),"findCommonEdges"),N=(0,d.K2)(((e,n,t)=>{const r=n.children(e);if(d.Rm.trace("Searching children of id ",e,r),r.length<1)return e;let i;for(const o of r){const e=N(o,n,t),r=E(n,t,e);if(e){if(!(r.length>0))return e;i=e}}return i}),"findNonClusterChild"),C=(0,d.K2)((e=>p.has(e)&&p.get(e).externalConnections&&p.has(e)?p.get(e).id:e),"getAnchorId"),x=(0,d.K2)(((e,n)=>{if(!e||n>10)d.Rm.debug("Opting out, no graph ");else{d.Rm.debug("Opting in, graph "),e.nodes().forEach((function(n){e.children(n).length>0&&(d.Rm.warn("Cluster identified",n," Replacement id in edges: ",N(n,e,n)),m.set(n,b(n,e)),p.set(n,{id:N(n,e,n),clusterData:e.node(n)}))})),e.nodes().forEach((function(n){const t=e.children(n),r=e.edges();t.length>0?(d.Rm.debug("Cluster identified",n,m),r.forEach((e=>{R(e.v,n)^R(e.w,n)&&(d.Rm.warn("Edge: ",e," leaves cluster ",n),d.Rm.warn("Descendants of XXX ",n,": ",m.get(n)),p.get(n).externalConnections=!0)}))):d.Rm.debug("Not a cluster ",n,m)}));for(let n of p.keys()){const t=p.get(n).id,r=e.parent(t);r!==n&&p.has(r)&&!p.get(r).externalConnections&&(p.get(n).id=r)}e.edges().forEach((function(n){const t=e.edge(n);d.Rm.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(n)),d.Rm.warn("Edge "+n.v+" -> "+n.w+": "+JSON.stringify(e.edge(n)));let r=n.v,i=n.w;if(d.Rm.warn("Fix XXX",p,"ids:",n.v,n.w,"Translating: ",p.get(n.v)," --- ",p.get(n.w)),p.get(n.v)||p.get(n.w)){if(d.Rm.warn("Fixing and trying - removing XXX",n.v,n.w,n.name),r=C(n.v),i=C(n.w),e.removeEdge(n.v,n.w,n.name),r!==n.v){const i=e.parent(r);p.get(i).externalConnections=!0,t.fromCluster=n.v}if(i!==n.w){const r=e.parent(i);p.get(r).externalConnections=!0,t.toCluster=n.w}d.Rm.warn("Fix Replacing with XXX",r,i,n.name),e.setEdge(r,i,t,n.name)}})),d.Rm.warn("Adjusted Graph",g(e)),I(e,0),d.Rm.trace(p)}}),"adjustClustersAndEdges"),I=(0,d.K2)(((e,n)=>{if(d.Rm.warn("extractor - ",n,g(e),e.children("D")),n>10)return void d.Rm.error("Bailing out");let t=e.nodes(),r=!1;for(const o of t){const n=e.children(o);r=r||n.length>0}if(r){d.Rm.debug("Nodes = ",t,n);for(const r of t)if(d.Rm.debug("Extracting node",r,p,p.has(r)&&!p.get(r).externalConnections,!e.parent(r),e.node(r),e.children("D")," Depth ",n),p.has(r))if(!p.get(r).externalConnections&&e.children(r)&&e.children(r).length>0){var i;d.Rm.warn("Cluster without external connections, without a parent and with children",r,n);let t="TB"===e.graph().rankdir?"LR":"TB";null!==(i=p.get(r))&&void 0!==i&&null!==(i=i.clusterData)&&void 0!==i&&i.dir&&(t=p.get(r).clusterData.dir,d.Rm.warn("Fixing dir",p.get(r).clusterData.dir,t));const o=new h.T({multigraph:!0,compound:!0}).setGraph({rankdir:t,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));d.Rm.warn("Old graph before copy",g(e)),X(r,e,o,r),e.setNode(r,{clusterNode:!0,id:r,clusterData:p.get(r).clusterData,label:p.get(r).label,graph:o}),d.Rm.warn("New graph after copy node: (",r,")",g(o)),d.Rm.debug("Old graph after copy",g(e))}else d.Rm.warn("Cluster ** ",r," **not meeting the criteria !externalConnections:",!p.get(r).externalConnections," no parent: ",!e.parent(r)," children ",e.children(r)&&e.children(r).length>0,e.children("D"),n),d.Rm.debug(p);else d.Rm.debug("Not a cluster",r,n);t=e.nodes(),d.Rm.warn("New list of nodes",t);for(const r of t){const t=e.node(r);d.Rm.warn(" Now next level",r,t),null!==t&&void 0!==t&&t.clusterNode&&I(t.graph,n+1)}}else d.Rm.debug("Done, no node has children",e.nodes())}),"extractor"),S=(0,d.K2)(((e,n)=>{if(0===n.length)return[];let t=Object.assign([],n);return n.forEach((n=>{const r=e.children(n),i=S(e,r);t=[...t,...i]})),t}),"sorter"),D=(0,d.K2)((e=>S(e,e.children())),"sortNodesByHierarchy"),A=(0,d.K2)((async(e,n,t,s,c,l)=>{d.Rm.warn("Graph in recursive render:XAX",g(n),c);const u=n.graph().rankdir;d.Rm.trace("Dir in recursive render - dir:",u);const f=e.insert("g").attr("class","root");n.nodes()?d.Rm.info("Recursive render XXX",n.nodes()):d.Rm.info("No nodes found for",n),n.edges().length>0&&d.Rm.info("Recursive edges",n.edge(n.edges()[0]));const h=f.insert("g").attr("class","clusters"),m=f.insert("g").attr("class","edgePaths"),w=f.insert("g").attr("class","edgeLabels"),v=f.insert("g").attr("class","nodes");await Promise.all(n.nodes().map((async function(e){const r=n.node(e);if(void 0!==c){const t=JSON.parse(JSON.stringify(c.clusterData));d.Rm.trace("Setting data for parent cluster XXX\n Node.id = ",e,"\n data=",t.height,"\nParent cluster",c.height),n.setNode(c.id,t),n.parent(e)||(d.Rm.trace("Setting parent",e,c.id),n.setParent(e,c.id,t))}if(d.Rm.info("(Insert) Node XXX"+e+": "+JSON.stringify(n.node(e))),null!==r&&void 0!==r&&r.clusterNode){d.Rm.info("Cluster identified XBX",e,r.width,n.node(e));const{ranksep:o,nodesep:a}=n.graph();r.graph.setGraph({...r.graph.graph(),ranksep:o+25,nodesep:a});const c=await A(v,r.graph,t,s,n.node(e),l),g=c.elem;(0,i.lC)(r,g),r.diff=c.diff||0,d.Rm.info("New compound node after recursive render XAX",e,"width",r.width,"height",r.height),(0,i.U7)(g,r)}else n.children(e).length>0?(d.Rm.trace("Cluster - the non recursive path XBX",e,r.id,r,r.width,"Graph:",n),d.Rm.trace(N(r.id,n)),p.set(r.id,{id:N(r.id,n),node:r})):(d.Rm.trace("Node - the non recursive path XAX",e,v,n.node(e),u),await(0,i.on)(v,n.node(e),{config:l,dir:u}))})));const R=(0,d.K2)((async()=>{const e=n.edges().map((async function(e){const t=n.edge(e.v,e.w,e.name);d.Rm.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),d.Rm.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(n.edge(e))),d.Rm.info("Fix",p,"ids:",e.v,e.w,"Translating: ",p.get(e.v),p.get(e.w)),await(0,r.jP)(w,t)}));await Promise.all(e)}),"processEdges");await R(),d.Rm.info("Graph before layout:",JSON.stringify(g(n))),d.Rm.info("############################################# XXX"),d.Rm.info("###                Layout                 ### XXX"),d.Rm.info("############################################# XXX"),(0,a.Zp)(n),d.Rm.info("Graph after layout:",JSON.stringify(g(n)));let y=0,{subGraphTitleTotalMargin:X}=(0,o.O)(l);return await Promise.all(D(n).map((async function(e){const t=n.node(e);if(d.Rm.info("Position XBX => "+e+": ("+t.x,","+t.y,") width: ",t.width," height: ",t.height),null!==t&&void 0!==t&&t.clusterNode)t.y+=X,d.Rm.info("A tainted cluster node XBX1",e,t.id,t.width,t.height,t.x,t.y,n.parent(e)),p.get(t.id).node=t,(0,i.U_)(t);else if(n.children(e).length>0){var r;d.Rm.info("A pure cluster node XBX1",e,t.id,t.x,t.y,t.width,t.height,n.parent(e)),t.height+=X,n.node(t.parentId);const o=(null===t||void 0===t?void 0:t.padding)/2||0,a=(null===t||void 0===t||null===(r=t.labelBBox)||void 0===r?void 0:r.height)||0,s=a-o||0;d.Rm.debug("OffsetY",s,"labelHeight",a,"halfPadding",o),await(0,i.U)(h,t),p.get(t.id).node=t}else{const e=n.node(t.parentId);t.y+=X/2,d.Rm.info("A regular node XBX1 - using the padding",t.id,"parent",t.parentId,t.width,t.height,t.x,t.y,"offsetY",t.offsetY,"parent",e,null===e||void 0===e?void 0:e.offsetY,t),(0,i.U_)(t)}}))),n.edges().forEach((function(e){const i=n.edge(e);d.Rm.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(i),i),i.points.forEach((e=>e.y+=X/2));const o=n.node(e.v);var a=n.node(e.w);const c=(0,r.Jo)(m,i,p,t,o,a,s);(0,r.T_)(i,c)})),n.nodes().forEach((function(e){const t=n.node(e);d.Rm.info(e,t.type,t.diff),t.isGroup&&(y=t.diff)})),d.Rm.warn("Returning from recursive render XAX",f,y),{elem:f,diff:y}}),"recursiveRender"),O=(0,d.K2)((async(e,n)=>{var t,o,a,s;const c=new h.T({multigraph:!0,compound:!0}).setGraph({rankdir:e.direction,nodesep:(null===(t=e.config)||void 0===t?void 0:t.nodeSpacing)||(null===(o=e.config)||void 0===o||null===(o=o.flowchart)||void 0===o?void 0:o.nodeSpacing)||e.nodeSpacing,ranksep:(null===(a=e.config)||void 0===a?void 0:a.rankSpacing)||(null===(s=e.config)||void 0===s||null===(s=s.flowchart)||void 0===s?void 0:s.rankSpacing)||e.rankSpacing,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}})),l=n.select("g");(0,r.g0)(l,e.markers,e.type,e.diagramId),(0,i.gh)(),(0,r.IU)(),(0,i.IU)(),v(),e.nodes.forEach((e=>{c.setNode(e.id,{...e}),e.parentId&&c.setParent(e.id,e.parentId)})),d.Rm.debug("Edges:",e.edges),e.edges.forEach((e=>{if(e.start===e.end){const n=e.start,t=n+"---"+n+"---1",r=n+"---"+n+"---2",i=c.node(n);c.setNode(t,{domId:t,id:t,parentId:i.parentId,labelStyle:"",label:"",padding:0,shape:"labelRect",style:"",width:10,height:10}),c.setParent(t,i.parentId),c.setNode(r,{domId:r,id:r,parentId:i.parentId,labelStyle:"",padding:0,shape:"labelRect",label:"",style:"",width:10,height:10}),c.setParent(r,i.parentId);const o=structuredClone(e),d=structuredClone(e),a=structuredClone(e);o.label="",o.arrowTypeEnd="none",o.id=n+"-cyclic-special-1",d.arrowTypeEnd="none",d.id=n+"-cyclic-special-mid",a.label="",i.isGroup&&(o.fromCluster=n,a.toCluster=n),a.id=n+"-cyclic-special-2",c.setEdge(n,t,o,n+"-cyclic-special-0"),c.setEdge(t,r,d,n+"-cyclic-special-1"),c.setEdge(r,n,a,n+"-cyc<lic-special-2")}else c.setEdge(e.start,e.end,{...e},e.id)})),d.Rm.warn("Graph at first:",JSON.stringify(g(c))),x(c),d.Rm.warn("Graph after XAX:",JSON.stringify(g(c)));const u=(0,d.D7)();await A(l,c,e.type,e.diagramId,void 0,u)}),"render")}}]);
//# sourceMappingURL=496.09741c21.chunk.js.map