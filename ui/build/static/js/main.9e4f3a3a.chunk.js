(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{26:function(e,s,c){},27:function(e,s,c){},34:function(e,s,c){},35:function(e,s,c){},36:function(e,s,c){},37:function(e,s,c){},38:function(e,s,c){"use strict";c.r(s);var r=c(1),n=c.n(r),t=c(14),a=c.n(t),i=c(6),o=c(3),d=c(8),l=Object(r.createContext)({}),j=(c(26),c(19)),p=(c(27),c(0));var u=function(e){var s=e.word,c=e.searchedWord,r=e.clearOnSearch,n=e.mainPage,t=Object(o.f)();function a(){var e=document.getElementById("word-scrapper-search-input").value.trim();e&&(t.push("/search/"+e),n||c(e),r&&(document.getElementById("word-scrapper-search-input").value=""))}return Object(p.jsxs)("div",{className:"word-scrapper-input-container",children:[Object(p.jsx)("input",{id:"word-scrapper-search-input",type:"text",placeholder:s||"Search a word",onKeyDown:function(e){"Enter"===e.key&&a()}}),Object(p.jsx)(j.a,{className:"word-scrapper-search-icon",onClick:a})]})};c(34);var h=function(){return Object(p.jsx)(r.Fragment,{children:Object(p.jsxs)("div",{className:"word-scrapper-mainPage-container",children:[Object(p.jsxs)("div",{className:"word-scrapper-mainPage-head",children:[Object(p.jsxs)("h1",{children:["Word Scrapper ",Object(p.jsx)("p",{className:"word-scrapper-betaBadge",children:"BETA"})]}),Object(p.jsx)("p",{children:"Basic word information collector that makes your life easier."})]}),Object(p.jsx)("div",{className:"word-scrapper-mainPage-body",children:Object(p.jsx)(u,{mainPage:!0})})]})})},b=c(12);c(35);var x=function(e){var s,c,r,n,t=e.results,a=0,i=0;return t?0==t.length?Object(p.jsx)("div",{className:"word-scrapper-results-container",children:Object(p.jsxs)("div",{className:"spinner",children:[Object(p.jsx)("div",{className:"bounce1"}),Object(p.jsx)("div",{className:"bounce2"}),Object(p.jsx)("div",{className:"bounce3"})]})}):Object(p.jsx)("div",{className:"word-scrapper-results-container",children:Object(p.jsxs)("div",{className:"word-scrapper-results-table-container",children:[Object(p.jsxs)("div",{className:"word-scrapper-results-head",children:[Object(p.jsx)("h1",{children:(null===t||void 0===t?void 0:t.word)||"Word"}),Object(p.jsxs)("p",{children:["(",(null===t||void 0===t?void 0:t.type)||"None",")"]})]}),Object(p.jsxs)("div",{style:{marginTop:"10px"},className:"word-scrapper-results-table",children:[Object(p.jsx)("h2",{children:"Definition(s)"}),null===t||void 0===t||null===(s=t.definitions)||void 0===s?void 0:s.map((function(e){return a++,Object(p.jsxs)("p",{style:{textTransform:"capitalize"},children:[a," - ",e||"None"]})}))]}),Object(p.jsxs)("div",{className:"word-scrapper-results-table",children:[Object(p.jsx)("h2",{children:"Synonym(s)"}),Object(p.jsx)("p",{children:0==t.synonyms.length?"None":null===t||void 0===t||null===(c=t.synonyms)||void 0===c?void 0:c.join(", ")})]}),Object(p.jsxs)("div",{className:"word-scrapper-results-table",children:[Object(p.jsx)("h2",{children:"Antonym(s)"}),Object(p.jsx)("p",{children:0==t.antonyms.length?"None":null===t||void 0===t||null===(r=t.antonyms)||void 0===r?void 0:r.join(", ")})]}),Object(p.jsxs)("div",{className:"word-scrapper-results-table",children:[Object(p.jsx)("h2",{children:"Example Sentence(s)"}),null===t||void 0===t||null===(n=t.exampleSentences)||void 0===n?void 0:n.map((function(e){return i++,Object(p.jsxs)("p",{style:{textTransform:"capitalize"},children:[i," - ",e||"None"]})})),0==(null===t||void 0===t?void 0:t.exampleSentences.length)?Object(p.jsx)("p",{children:"None"}):""]})]})}):Object(p.jsx)("div",{className:"word-scrapper-results-container",children:Object(p.jsxs)("div",{className:"word-scrapper-results-notFound",children:[Object(p.jsx)("h1",{children:"Ooops!"}),Object(p.jsx)("p",{children:"It looks like we couldn't find your word on resources we use."})]})})};c(36);var O=function(){var e=Object(o.f)(),s=Object(o.g)().word,c=Object(r.useState)([]),n=Object(b.a)(c,2),t=n[0],a=n[1],l=Object(r.useState)("Loading"),j=Object(b.a)(l,2),h=j[0],O=j[1];function m(e){a([]),fetch("/api/getWord/".concat(e)).then((function(e){return e.json()})).then((function(s){if(200==s.statusCode){var c=[];s.data.results.forEach((function(e){var r=c.find((function(s){return s.type==e.partOfSpeech}));r?(r.definitions.push(e.definition),e.synonyms&&r.synonyms.push(e.synonyms),e.antonyms&&r.antonyms.push(e.antonyms),e.examples&&r.exampleSentences.push(e.examples)):c.push({word:s.data.word,type:e.partOfSpeech,definitions:[e.definition],synonyms:(null===e||void 0===e?void 0:e.synonyms)||[],antonyms:(null===e||void 0===e?void 0:e.antonyms)||[],exampleSentences:(null===e||void 0===e?void 0:e.examples)||[]})})),a(c),O(e)}else a(null),O(e)})).catch((function(s){a(null),O(e)}))}return s||e.push("/"),Object(r.useEffect)((function(){m(s)}),[]),Object(p.jsxs)("div",{className:"word-scrapper-searchPage-container",children:[Object(p.jsx)(d.a,{children:Object(p.jsxs)("title",{children:[h," - Word Scrapper"]})}),Object(p.jsxs)("div",{className:"word-scrapper-searchPage-head",children:[Object(p.jsx)(i.b,{to:"/",children:"Word Scrapper"}),Object(p.jsx)("p",{className:"word-scrapper-betaBadge",children:"BETA"}),Object(p.jsx)(u,{word:s,clearOnSearch:!0,searchedWord:m})]}),Object(p.jsx)("div",{className:"word-scrapper-searchPage-body",children:t&&t.length>0?t.map((function(e){return Object(p.jsx)(x,{results:e})})):Object(p.jsx)(x,{results:t})})]})};c(37);var m=function(){return Object(p.jsx)("div",{className:"word-scrapper-notFoundPage-container",children:Object(p.jsxs)("div",{className:"word-scrapper-notFoundPage-wrapper",children:[Object(p.jsx)("h1",{children:"404"}),Object(p.jsx)("p",{children:"We couldn't find the page your are looking for. Want to search some words?"}),Object(p.jsx)(i.b,{to:"/",children:"Head to Main Page"})]})})};var v=function(){return Object(p.jsxs)("div",{style:{backgroundImage:"url('/background.svg')"},className:"word-scrapper-wrapper",children:[Object(p.jsx)(d.a,{children:Object(p.jsx)("title",{children:"Word Scrapper"})}),Object(p.jsx)(i.a,{children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",children:Object(p.jsx)(l.Provider,{value:{},children:Object(p.jsx)(h,{})})}),Object(p.jsx)(o.a,{exact:!0,path:"/search/:word?",children:Object(p.jsx)(l.Provider,{value:{},children:Object(p.jsx)(O,{})})}),Object(p.jsx)(o.a,{exact:!0,children:Object(p.jsx)(m,{})})]})}),Object(p.jsx)("div",{className:"word-scrapper-background"})]})};a.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root"))}},[[38,1,2]]]);