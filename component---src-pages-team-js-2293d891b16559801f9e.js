"use strict";(self.webpackChunkgatsby_serif_theme=self.webpackChunkgatsby_serif_theme||[]).push([[371],{4989:function(e,t,a){var m=a(7294),n=a(5444);t.Z=function(e){var t=(0,n.K2)("1302411885");return m.createElement("div",{className:"call"},m.createElement("div",{className:"call-box-top"},t.contactJson.phone&&m.createElement("div",{className:"call-phone"},m.createElement("strong",null,"Phone: ")," ",t.contactJson.phone," "),t.contactJson.email&&m.createElement("div",{className:"call-email"},m.createElement("strong",null,"Email: "),m.createElement("a",{href:"mailto:"+t.contactJson.email},t.contactJson.email))),e.showButton&&m.createElement("div",{className:"call-box-bottom"},m.createElement("a",{href:t.contactJson.contact_button_link,className:"button"},"Contact")))}},6099:function(e,t,a){a.r(t);var m=a(7294),n=a(3151),r=a(4737);a(4989);t.default=function(e){var t=e.data.team.edges,a=e.data.intro,l="intro-image "+(a.frontmatter.intro_image_absolute&&"intro-image-absolute")+" "+(a.frontmatter.intro_image_hide_on_mobile&&"intro-image-hide-mobile");return m.createElement(r.Z,{bodyClass:"page-teams"},m.createElement(n.Z,{title:"Team"}),m.createElement("div",{className:"intro"},m.createElement("div",{className:"container"},m.createElement("div",{className:"row justify-content-start"},m.createElement("div",{className:"col-12 col-md-7 col-lg-6 order-2 order-md-1"},m.createElement("div",{dangerouslySetInnerHTML:{__html:a.html}})),a.frontmatter.intro_image&&m.createElement("div",{className:"col-12 col-md-5 col-lg-6 order-1 order-md-2 position-relative"},m.createElement("img",{alt:a.frontmatter.title,className:l,src:a.frontmatter.intro_image}))))),m.createElement("div",{className:"container"},m.createElement("div",{className:"row"},t.filter((function(e){return e.node.frontmatter.promoted})).map((function(e){var t=e.node;return m.createElement("div",{key:t.id,className:"col-12 col-md-6 mb-2"},m.createElement("div",{className:"team team-summary team-summary-large"},t.frontmatter.image&&m.createElement("div",{className:"team-image"},m.createElement("img",{alt:"photo of "+t.frontmatter.title,className:"img-fluid mb-2",src:t.frontmatter.image})),m.createElement("div",{className:"team-meta"},m.createElement("h2",{className:"team-name"},t.frontmatter.title),m.createElement("p",{className:"team-description"},t.frontmatter.jobtitle),t.frontmatter.linkedin&&m.createElement("a",{target:"_blank",href:"{{ .Params.Linkedinurl }}"},"LinkedIn")),m.createElement("div",{className:"team-content"},m.createElement("p",null,t.excerpt))))}))),m.createElement("div",{className:"row pt-6 pb-6"},t.filter((function(e){return!e.node.frontmatter.promoted})).map((function(e){var t=e.node;return m.createElement("div",{key:t.id,className:"col-12 col-md-6 mb-2"},m.createElement("div",{className:"team team-summary"},t.frontmatter.image&&m.createElement("div",{className:"team-image"},m.createElement("img",{alt:"photo of "+t.frontmatter.title,className:"img-fluid mb-2",src:t.frontmatter.image})),m.createElement("div",{className:"team-meta"},m.createElement("h2",{className:"team-name"},t.frontmatter.title),m.createElement("p",{className:"team-description"},t.frontmatter.jobtitle),t.frontmatter.linkedin&&m.createElement("a",{target:"_blank",href:"{{ .Params.Linkedinurl }}"},"LinkedIn"))))})))))}}}]);
//# sourceMappingURL=component---src-pages-team-js-2293d891b16559801f9e.js.map