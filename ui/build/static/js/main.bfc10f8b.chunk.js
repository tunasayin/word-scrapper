(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{26:function(e,s,n){},27:function(e,s,n){},34:function(e,s,n){},35:function(e,s,n){},36:function(e,s,n){},37:function(e,s,n){},38:function(e,s,n){"use strict";n.r(s);var c=n(1),r=n.n(c),t=n(12),a=n.n(t),i=n(6),o=n(3),d=n(13),l=Object(c.createContext)({}),j=(n(26),n(19)),p=(n(27),n(0));var u=function(e){var s=e.word,n=e.searchedWord,c=e.mainPage,r=Object(o.f)();function t(){var e=document.getElementById("word-scrapper-search-input").value.trim();e&&(r.push("/search/"+e),c||n(e))}return Object(p.jsxs)("div",{className:"word-scrapper-input-container",children:[Object(p.jsx)("input",{id:"word-scrapper-search-input",type:"text",placeholder:s||"Search a word",onKeyDown:function(e){"Enter"===e.key&&t()}}),Object(p.jsx)(j.a,{className:"word-scrapper-search-icon",onClick:t})]})};n(34);var h=function(){return Object(p.jsx)(c.Fragment,{children:Object(p.jsxs)("div",{className:"word-scrapper-mainPage-container",children:[Object(p.jsxs)("div",{className:"word-scrapper-mainPage-head",children:[Object(p.jsx)("h1",{children:"Word Scrapper"}),Object(p.jsx)("p",{children:"Basic word information collector that makes your life easier."})]}),Object(p.jsx)("div",{className:"word-scrapper-mainPage-body",children:Object(p.jsx)(u,{mainPage:!0})})]})})},b=n(18);n(35);var x=function(e){var s,n,c,r,t=e.results,a=0,i=0;return t?Object(p.jsx)("div",{className:"word-scrapper-results-container",children:Object(p.jsxs)("div",{className:"word-scrapper-results-table-container",children:[Object(p.jsxs)("div",{className:"word-scrapper-results-head",children:[Object(p.jsx)("h1",{children:(null===t||void 0===t?void 0:t.word)||"Word"}),Object(p.jsxs)("p",{children:["(",(null===t||void 0===t?void 0:t.type)||"None",")"]})]}),Object(p.jsxs)("div",{style:{marginTop:"10px"},className:"word-scrapper-results-table",children:[Object(p.jsx)("h2",{children:"Definition(s)"}),null===t||void 0===t||null===(s=t.definitions)||void 0===s?void 0:s.map((function(e){return a++,Object(p.jsxs)("p",{style:{textTransform:"capitalize"},children:[a," - ",e||"None"]})}))]}),Object(p.jsxs)("div",{className:"word-scrapper-results-table",children:[Object(p.jsx)("h2",{children:"Synonym(s)"}),Object(p.jsx)("p",{children:0==t.synonyms.length?"None":null===t||void 0===t||null===(n=t.synonyms)||void 0===n?void 0:n.join(", ")})]}),Object(p.jsxs)("div",{className:"word-scrapper-results-table",children:[Object(p.jsx)("h2",{children:"Antonym(s)"}),Object(p.jsx)("p",{children:0==t.antonyms.length?"None":null===t||void 0===t||null===(c=t.antonyms)||void 0===c?void 0:c.join(", ")})]}),Object(p.jsxs)("div",{className:"word-scrapper-results-table",children:[Object(p.jsx)("h2",{children:"Example Sentence(s)"}),null===t||void 0===t||null===(r=t.exampleSentences)||void 0===r?void 0:r.map((function(e){return i++,Object(p.jsxs)("p",{style:{textTransform:"capitalize"},children:[i," - ",e||"None"]})}))]})]})}):Object(p.jsx)("div",{className:"word-scrapper-results-container",children:Object(p.jsxs)("div",{className:"spinner",children:[Object(p.jsx)("div",{className:"bounce1"}),Object(p.jsx)("div",{className:"bounce2"}),Object(p.jsx)("div",{className:"bounce3"})]})})};n(36);var m=function(){var e=Object(o.f)(),s=Object(o.g)().word,n=Object(c.useState)([]),r=Object(b.a)(n,2),t=r[0],a=r[1];function i(e){fetch("/api/getWord/".concat(e)).then((function(e){return e.json()})).then((function(e){if(200==e.statusCode){var s=[];e.data.results.forEach((function(n){var c=s.find((function(e){return e.type==n.partOfSpeech}));c?(c.definitions.push(n.definition),n.synonyms&&c.synonyms.push(n.synonyms),n.antonyms&&c.antonyms.push(n.antonyms),n.examples&&c.exampleSentences.push(n.examples)):s.push({word:e.data.word,type:n.partOfSpeech,definitions:[n.definition],synonyms:(null===n||void 0===n?void 0:n.synonyms)||[],antonyms:(null===n||void 0===n?void 0:n.antonyms)||[],exampleSentences:(null===n||void 0===n?void 0:n.examples)||[]})})),a(s)}}))}return s||e.push("/"),Object(c.useEffect)((function(){i(s)}),[]),Object(p.jsxs)("div",{className:"word-scrapper-searchPage-container",children:[Object(p.jsxs)("div",{className:"word-scrapper-searchPage-head",children:[Object(p.jsx)("h1",{children:"Word Scrapper"}),Object(p.jsx)(u,{word:s,searchedWord:i})]}),Object(p.jsx)("div",{className:"word-scrapper-searchPage-body",children:t.map((function(e){return Object(p.jsx)(x,{results:e})}))})]})};n(37);var O=function(){return Object(p.jsx)("div",{className:"word-scrapper-notFoundPage-container",children:Object(p.jsxs)("div",{className:"word-scrapper-notFoundPage-wrapper",children:[Object(p.jsx)("h1",{children:"404"}),Object(p.jsx)("p",{children:"We couldn't find the page your are looking for. Want to search some words?"}),Object(p.jsx)(i.b,{to:"/",children:"Head to Main Page"})]})})};var v=function(){return Object(p.jsxs)("div",{style:{backgroundImage:"url('/background.svg')"},className:"word-scrapper-wrapper",children:[Object(p.jsx)(d.a,{children:Object(p.jsx)("title",{children:"Word Scrapper"})}),Object(p.jsx)(i.a,{children:Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/",children:Object(p.jsx)(l.Provider,{value:{},children:Object(p.jsx)(h,{})})}),Object(p.jsx)(o.a,{exact:!0,path:"/search/:word?",children:Object(p.jsx)(l.Provider,{value:{},children:Object(p.jsx)(m,{})})}),Object(p.jsx)(o.a,{exact:!0,children:Object(p.jsx)(O,{})})]})}),Object(p.jsx)("div",{className:"word-scrapper-background"})]})};a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root"))}},[[38,1,2]]]);