(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{192:function(t,e,a){"use strict";a.r(e),a.d(e,"query",function(){return o});var n=a(0),r=a.n(n),i=(a(195),a(200),a(198),a(214));var o="3020974759",s=function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).state={html:"<div> Loading </div>",title:""},a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){var t=this.props.data.markdownRemark,e=t.html,a=t.frontmatter;this.setState({html:e}),this.setState({title:a.title})},o.render=function(){return r.a.createElement("div",{className:i.postContainer},r.a.createElement("h2",null,this.state.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.html}}))},n}(r.a.Component);e.default=s},194:function(t,e,a){var n;t.exports=(n=a(197))&&n.default||n},195:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(66),o=a.n(i);a.d(e,"a",function(){return o.a});a(194),a(9).default.enqueue,r.a.createContext({})},196:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},197:function(t,e,a){"use strict";a.r(e);a(23);var n=a(0),r=a.n(n),i=a(92);e.default=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(i.a,Object.assign({location:e,pageResources:a},a.json)):null}},198:function(t,e,a){"use strict";var n=a(199),r=a(0),i=a.n(r),o=a(202),s=a.n(o);function c(t){var e=t.description,a=t.lang,r=t.meta,o=t.title,c=n.data.site,l=e||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:o},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:l}].concat(r)})}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},199:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},200:function(t,e,a){"use strict";var n=a(196),r=a(0),i=a.n(r),o=a(195),s=function(t){var e=t.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};s.defaultProps={siteTitle:""};var c=s;a(201),e.a=function(t){var e=t.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}}}]);
//# sourceMappingURL=component---src-pages-posts-js-3c9aa04f931a1eb8ff67.js.map