(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{26:function(e,r,c){},27:function(e,r,c){},34:function(e,r,c){},35:function(e,r,c){},36:function(e,r,c){},37:function(e,r,c){},38:function(e,r,c){"use strict";c.r(r);var s=c(1),t=c.n(s),n=c(14),a=c.n(n),d=c(6),o=c(3),i=c(8),l=Object(s.createContext)({}),j=(c(26),c(19)),h=(c(27),c(0));var p=function(e){var r=e.word,c=e.searchedWord,s=e.clearOnSearch,t=e.mainPage,n=Object(o.f)();function a(){var e=document.getElementById("word-scrapper-search-input").value.trim();e&&(n.push("/search/"+e),t||c(e),s&&(document.getElementById("word-scrapper-search-input").value=""))}return Object(h.jsxs)("div",{className:"word-scrapper-input-container",children:[Object(h.jsx)("input",{id:"word-scrapper-search-input",type:"text",placeholder:r||"Search a word",onKeyDown:function(e){"Enter"===e.key&&a()}}),Object(h.jsx)(j.a,{className:"word-scrapper-search-icon",onClick:a})]})};c(34);var b=function(){return Object(h.jsx)(s.Fragment,{children:Object(h.jsxs)("div",{className:"word-scrapper-mainPage-container",children:[Object(h.jsxs)("div",{className:"word-scrapper-mainPage-head",children:[Object(h.jsx)("h1",{children:"Word Scrapper"}),Object(h.jsx)("p",{children:"Basic word information collector that makes your life easier."})]}),Object(h.jsx)("div",{className:"word-scrapper-mainPage-body",children:Object(h.jsx)(p,{mainPage:!0})})]})})},u=c(12);c(35);var x=function(e){var r,c,s,t,n,a=e.results,d=0,o=0;return a?0==a.length?Object(h.jsx)("div",{className:"word-scrapper-results-container",children:Object(h.jsxs)("div",{className:"spinner",children:[Object(h.jsx)("div",{className:"bounce1"}),Object(h.jsx)("div",{className:"bounce2"}),Object(h.jsx)("div",{className:"bounce3"})]})}):Object(h.jsx)("div",{className:"word-scrapper-results-container",children:Object(h.jsxs)("div",{className:"word-scrapper-results-table-container",children:[Object(h.jsx)("div",{className:"word-scrapper-results-head",children:Object(h.jsx)("h1",{children:(null===a||void 0===a?void 0:a.word)||"Word"})}),Object(h.jsxs)("div",{style:{marginTop:"10px"},className:"word-scrapper-results-table",children:[Object(h.jsxs)("div",{className:"word-scrapper-results-table-head",children:[Object(h.jsx)("h2",{children:"Definition(s)"}),Object(h.jsxs)("p",{children:["Fetched from",Object(h.jsx)("a",{href:"https://dictionary.cambridge.org/",children:"\xa0Cambridge Dictionary"}),"."]})]}),null===a||void 0===a||null===(r=a.definitions)||void 0===r?void 0:r.map((function(e){return d++,Object(h.jsxs)("p",{style:{textTransform:"capitalize",borderBottom:"1px solid #252525",padding:"7px"},children:[Object(h.jsx)("span",{style:{color:"white",fontWeight:"bold"},children:d}),"\xa0- ",e||"None"]})}))]}),Object(h.jsxs)("div",{className:"word-scrapper-results-table",children:[Object(h.jsxs)("div",{className:"word-scrapper-results-table-head",children:[Object(h.jsx)("h2",{children:"Synonym(s)"}),Object(h.jsxs)("p",{children:["Fetched from ",Object(h.jsx)("a",{href:"https://www.thesaurus.com/",children:"TheSaurus"}),"."]})]}),Object(h.jsx)("p",{children:0==a.synonyms.length?"None":null===a||void 0===a||null===(c=a.synonyms)||void 0===c?void 0:c.join(", ")})]}),Object(h.jsxs)("div",{className:"word-scrapper-results-table",children:[Object(h.jsxs)("div",{className:"word-scrapper-results-table-head",children:[Object(h.jsx)("h2",{children:"Antonym(s)"}),Object(h.jsxs)("p",{children:["Fetched from ",Object(h.jsx)("a",{href:"https://www.thesaurus.com/",children:"TheSaurus"}),"."]})]}),Object(h.jsx)("p",{children:0==a.antonyms.length?"None":null===a||void 0===a||null===(s=a.antonyms)||void 0===s?void 0:s.join(", ")})]}),Object(h.jsxs)("div",{className:"word-scrapper-results-table",children:[Object(h.jsxs)("div",{className:"word-scrapper-results-table-head",children:[Object(h.jsx)("h2",{children:"Word Formation(s)"}),Object(h.jsxs)("p",{children:["Fetched from ",Object(h.jsx)("a",{href:"https://www.wordhippo.com/",children:"WordHippo"}),"."]})]}),Object(h.jsx)("p",{children:0==a.wordForms.length?"None":null===a||void 0===a||null===(t=a.wordForms)||void 0===t?void 0:t.join(", ")})]}),Object(h.jsxs)("div",{className:"word-scrapper-results-table",children:[Object(h.jsxs)("div",{className:"word-scrapper-results-table-head",children:[Object(h.jsx)("h2",{children:"Example Sentence(s)"}),Object(h.jsxs)("p",{children:["Fetched from",Object(h.jsx)("a",{href:"https://dictionary.cambridge.org/",children:"\xa0Cambridge Dictionary"}),"."]})]}),null===a||void 0===a||null===(n=a.exampleSentences)||void 0===n?void 0:n.map((function(e){return o++,Object(h.jsxs)("p",{style:{borderBottom:"1px solid #252525",padding:"7px"},children:[Object(h.jsx)("span",{style:{color:"white",fontWeight:"bold"},children:o})," ","- ",e||"None"]})})),0==(null===a||void 0===a?void 0:a.exampleSentences.length)?Object(h.jsx)("p",{children:"None"}):""]})]})}):Object(h.jsx)("div",{className:"word-scrapper-results-container",children:Object(h.jsxs)("div",{className:"word-scrapper-results-notFound",children:[Object(h.jsx)("h1",{children:"Ooops!"}),Object(h.jsx)("p",{children:"It looks like we couldn't find your word on resources we use."})]})})};c(36);var O=function(){var e=Object(o.f)(),r=Object(o.g)().word,c=Object(s.useState)([]),t=Object(u.a)(c,2),n=t[0],a=t[1],l=Object(s.useState)("Loading"),j=Object(u.a)(l,2),b=j[0],O=j[1];function m(e){a([]),fetch("/api/getWord/".concat(e)).then((function(e){return e.json()})).then((function(r){if(200!==(null===r||void 0===r?void 0:r.statusCode))throw new Error("Status code is not equal to 200.");r.word=e;var c=[];r.wordForms.forEach((function(e){return c.push("".concat(e.word," (").concat(e.type,")"))})),r.wordForms=c,a([r]),O(e)})).catch((function(e){a(null),O("Not Found")}))}return r||e.push("/"),Object(s.useEffect)((function(){m(r)}),[]),Object(h.jsxs)("div",{className:"word-scrapper-searchPage-container",children:[Object(h.jsx)(i.a,{children:Object(h.jsxs)("title",{children:[b," - Word Scrapper"]})}),Object(h.jsxs)("div",{className:"word-scrapper-searchPage-head",children:[Object(h.jsx)(d.b,{to:"/",children:"Word Scrapper"}),Object(h.jsx)(p,{word:r,clearOnSearch:!0,searchedWord:m})]}),Object(h.jsx)("div",{className:"word-scrapper-searchPage-body",children:n&&n.length>0?n.map((function(e){return Object(h.jsx)(x,{results:e})})):Object(h.jsx)(x,{results:n})})]})};c(37);var m=function(){return Object(h.jsx)("div",{className:"word-scrapper-notFoundPage-container",children:Object(h.jsxs)("div",{className:"word-scrapper-notFoundPage-wrapper",children:[Object(h.jsx)("h1",{children:"404"}),Object(h.jsx)("p",{children:"We couldn't find the page your are looking for. Want to search some words?"}),Object(h.jsx)(d.b,{to:"/",children:"Head to Main Page"})]})})};var v=function(){return Object(h.jsxs)("div",{style:{backgroundImage:"url('/background.svg')"},className:"word-scrapper-wrapper",children:[Object(h.jsx)(i.a,{children:Object(h.jsx)("title",{children:"Word Scrapper"})}),Object(h.jsx)(d.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",children:Object(h.jsx)(l.Provider,{value:{},children:Object(h.jsx)(b,{})})}),Object(h.jsx)(o.a,{exact:!0,path:"/search/:word?",children:Object(h.jsx)(l.Provider,{value:{},children:Object(h.jsx)(O,{})})}),Object(h.jsx)(o.a,{exact:!0,children:Object(h.jsx)(m,{})})]})}),Object(h.jsx)("div",{className:"word-scrapper-background"})]})};a.a.render(Object(h.jsx)(t.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[38,1,2]]]);