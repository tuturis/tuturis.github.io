(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return d});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(155),u=n.n(c),l=n(150),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement(l.a,{location:this.props.location,title:this.props.data.site.siteMetadata.title},i.a.createElement("h1",null,"About me"),i.a.createElement("p",null,"I’m software developer by trade, curious, responsible, smart, idea and process driven good human being. And entrepreneur wanna be."),i.a.createElement("p",null,"You can find out more on links below"),i.a.createElement(u.a,{script:[{src:"//platform.linkedin.com/in.js",type:"text/javascript"}]}),i.a.createElement(u.a,null,i.a.createElement("script",{type:"IN/MemberProfile","data-id":"http://www.linkedin.com/in/arturassotnicenko","data-format":"inline","data-related":"false"})),i.a.createElement(u.a,null,i.a.createElement("script",{src:"https://unpkg.com/github-card@1.2.1/dist/widget.js"})),i.a.createElement("div",{class:"github-widget","data-username":"chillerfx"}))},t}(i.a.Component);t.default=s;var d="3998836533"},146:function(e,t,n){"use strict";n.d(t,"a",function(){return u}),n.d(t,"b",function(){return l});var a=n(153),r=n.n(a),o=n(154),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a);var u=c.rhythm,l=c.scale},147:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(145),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(148),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},148:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},149:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(48),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},150:function(e,t,n){"use strict";var a=n(7),r=n.n(a),o=n(0),i=n.n(o),c=n(147),u=(n(33),n(151),n(152),n(146)),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.title;return"/"===t.pathname?i.a.createElement("h1",{style:Object.assign({},Object(u.b)(1.5),{marginBottom:Object(u.a)(1.5),marginTop:0})},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(u.a)(-1)}},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n))},t}(i.a.Component),s=function(e){return i.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},i.a.createElement(c.Link,{to:e.to},e.children))},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.title,a=e.children;return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},i.a.createElement("header",{style:{marginBottom:"1.5rem"}},i.a.createElement("ul",{style:{listStyle:"none",float:"right"}},i.a.createElement(s,{to:"/"},"Blog"),i.a.createElement(s,{to:"/about/"},"About"),i.a.createElement(s,{to:"/contact/"},"Contact"))),i.a.createElement(l,{title:n,location:t}),a)},t}(i.a.Component);t.a=d}}]);
//# sourceMappingURL=component---src-pages-about-js-5f54995e72943f532844.js.map