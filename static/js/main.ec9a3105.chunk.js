(this["webpackJsonpcrossword-app"]=this["webpackJsonpcrossword-app"]||[]).push([[0],{42:function(e,o,r){},43:function(e,o,r){},55:function(e,o,r){},57:function(e,o,r){"use strict";r.r(o);var n=r(0),a=r.n(n),c=r(18),l=r.n(c),t=(r(42),r(3)),s=(r(43),r(10)),i=r(1);var u=function(){return document.title="Crosswords",Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAyZJREFUeJzt3UFqFFEYRtE/4lxIZ+oKHLkmt+U63IFztyGYJuAC4iCTEPQa2mdXqnPOsAuKj8Cli+rAmwEAAABehKu49mFm3p9rCGzs68z8fPphBfJ5Zj79tznwsnycmW9PP3yzwRDYDYFAEAgEgUAQCASBQBAIBIFAEAgEgUB4u+g+9zNzXHSvFQ5xzdbT1daLtCqQ48zcLLrXCvdxzdbT1daL5BELgkAgCASCQCAIBIJAIAgEgkAgCASCQCAIBIJAIAgEgkAgCASCQCAIBIJAIAgEgkAgCASCQCAIBIJAIAgEgkAgCASCQCAIBIJAIAgEgkAgCASCQCCsOoLtMPs5nstWns03CASBQBAIBIFAEAgEgUBY9Zp3T+5n5rj1iEcOcc3W09XWZ3uNgRxn5mbrEY/U7xy2nm7J70cesSAIBIJAIAgEgkAgCASCQCAIBIJAIAgEgkAgCASCQCAIBIJAIAgEgkAgCASCQCAIBIJAIAgEgkAgCASCQCAIBIJAIAgEgkAgCASCQCAIBIJAIAgEwms8gu0wi47nOgNbN+YbBIJAIAgEgkAgCASCQCC8xte8/D+3Ww945Hpmrv71JqsCuZ2Zm0X3WqHex+9p6968pL/r3cy8+9ebeMSCIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAirjmC7nocjr/ZgT1v35pKOk5uZdYFczYLz4M5kT1vZmEcsCAKBIBAIAoEgEAir3mLdz8xx0b1WuJ6Ht1W/s6etMzO35xryDH/benFWBXKcmZtF91rhbv78KndPW2f2tfXieMSCIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAgCgSAQCAKBIBAIAoEgEAirjmA7zMPZf3uwp60z+9p6cXyDQBAIBIFAEAgEgUAQCASBQBAIBIFAEAiE+leTLzPz41xDYGPftx4AAAAAAKf5BZdWPQDXagBWAAAAAElFTkSuQmCC",className:"App-logo",alt:"logo"}),Object(i.jsxs)("p",{children:[Object(i.jsx)(s.Link,{to:"puzzle/1",className:"App-link",children:"Puzzle 1: Singapore Pools"})," (12/9/21)",Object(i.jsx)("br",{})]})]})})},w=r(27),d=r(28),h=r(36),g=r(35),A=r(2),f=r.p+"static/media/back.80f03fd6.png",p=r(6),b=a.a.createContext({focused:!1,selectedDirection:null,selectedNumber:null}),m=a.a.createContext({cellSize:0,cellPadding:0,cellInner:0,cellHalf:0,fontSize:0});function S(e){var o=e.cellData,r=e.onClick,a=e.focus,c=e.highlight,l=Object(n.useContext)(m),t=l.cellSize,s=l.cellPadding,u=l.cellInner,w=l.cellHalf,d=l.fontSize,h=Object(n.useContext)(p.a),g=h.cellBackground,A=h.cellBorder,f=h.textColor,b=h.numberColor,S=h.focusBackground,O=h.highlightBackground,C=Object(n.useCallback)((function(e){e.preventDefault(),r&&r(o)}),[o,r]),E=o.row,j=o.col,I=o.guess,v=o.number,y=j*t,k=E*t;return Object(i.jsxs)("g",{onClick:C,style:{cursor:"default",fontSize:"".concat(d,"px")},children:[Object(i.jsx)("rect",{x:y+s,y:k+s,width:u,height:u,fill:a?S:c?O:g,stroke:A,strokeWidth:t/50}),v&&Object(i.jsx)("text",{x:y+4*s,y:k+4*s,textAnchor:"start",dominantBaseline:"hanging",style:{fontSize:"50%",fill:b},children:v}),Object(i.jsx)("text",{x:y+w,y:k+w+1,textAnchor:"middle",dominantBaseline:"middle",style:{fill:f},children:I})]})}S.defaultProps={focus:!1,highlight:!1,onClick:null};var O,C=r(9),E=r(37),j=r(13),I=["direction","number","children","correct"],v=p.c.div.attrs((function(e){return{className:"clue".concat(e.correct?" correct":"")}}))(O||(O=Object(j.a)(["\n  cursor: default;\n  background-color: ",";\n  color: ",";\n"])),(function(e){return e.highlight?e.highlightBackground:"transparent"}),(function(e){return e.highlight?"black":"white"}));function y(e){var o=e.direction,r=e.number,a=e.children,c=e.correct,l=Object(E.a)(e,I),t=Object(n.useContext)(p.a).highlightBackground,s=Object(n.useContext)(b),u=s.focused,w=s.selectedDirection,d=s.selectedNumber,h=s.onClueSelected,g=Object(n.useCallback)((function(e){e.preventDefault(),h&&h(o,r)}),[o,r,h]);return Object(i.jsxs)(v,Object(C.a)(Object(C.a)({highlightBackground:t,highlight:u&&o===w&&r===d,correct:c},l),{},{onClick:g,"aria-label":"clue-".concat(r,"-").concat(o),children:[r,": ",a]}))}function k(e){var o=e.direction,r=e.clues;return Object(i.jsxs)("div",{className:"direction",children:[Object(i.jsx)("h3",{className:"header",children:o.toUpperCase()}),r.map((function(e){var r=e.number,n=e.clue,a=e.correct;return Object(i.jsx)(y,{direction:o,number:r,correct:a,children:n},r)}))]})}y.defaultProps={children:void 0,correct:void 0},k.defaultProps={};var B=r(11),T=r(24),N=r(17),P={across:{primary:"col",orthogonal:"row"},down:{primary:"row",orthogonal:"col"}},x=Object.keys(P);function L(e){return"across"===e}function R(e){return L(e)?"down":"across"}function _(e,o){var r,n=P[o],a=0,c=0;return Object.entries(e[o]).forEach((function(e){var o=Object(A.a)(e,2),r=(o[0],o[1]),l=r[n.primary]+r.answer.length-1;l>a&&(a=l);var t=r[n.orthogonal];t>c&&(c=t)})),r={},Object(N.a)(r,n.primary,a),Object(N.a)(r,n.orthogonal,c),r}var M,D,H,z={used:!1,number:null,answer:"",guess:"",locked:!1,across:null,down:null};function F(e,o,r,n){var a=P[n];Object.entries(r[n]).forEach((function(r){for(var c=Object(A.a)(r,2),l=c[0],t=c[1],s=t.row,i=t.col,u=t.clue,w=t.answer,d=0;d<w.length;d++){var h=s+("row"===a.primary?d:0),g=i+("col"===a.primary?d:0),f=e[h][g];f.used=!0,f.answer=w[d],f[n]=l,0===d&&(f.number=l)}o[n].push({number:l,clue:u})})),o[n].sort(G)}function U(e){var o=_(e,"across"),r=_(e,"down"),n=Math.max.apply(Math,Object(T.a)(Object.values(o)).concat(Object(T.a)(Object.values(r))))+1,a=function(e){for(var o=Array(e),r=0;r<e;r++){o[r]=Array(e);for(var n=0;n<e;n++)o[r][n]=Object(C.a)(Object(C.a)({},z),{},{row:r,col:n})}return o}(n),c={across:[],down:[]};return F(a,c,e,"across"),F(a,c,e,"down"),{size:n,gridData:a,clues:c}}function G(e,o){return Number.parseInt(e.number,10)-Number.parseInt(o.number,10)}function K(e,o){var r=window.localStorage;if(r){var n=r.getItem(o);if(n)!function(e,o){Object.entries(o).forEach((function(o){var r=Object(A.a)(o,2),n=r[0],a=r[1],c=n.split("_"),l=Object(A.a)(c,2),t=l[0],s=l[1];t<=e.length-1&&s<=e[0].length-1&&(e[t][s].guess=a)}))}(e,JSON.parse(n).guesses)}}var W={columnBreakpoint:"768px",gridBackground:"rgb(0,0,0)",cellBackground:"rgb(255,255,255)",cellBorder:"rgb(0,0,0)",textColor:"rgb(0,0,0)",numberColor:"rgba(0,0,0, 0.25)",focusBackground:"rgb(255,255,0)",highlightBackground:"rgb(255,255,204)"},J=p.c.div.attrs((function(e){return{className:"crossword".concat(e.correct?" correct":"")}}))(M||(M=Object(j.a)(["\n  margin: 0;\n  padding: 0;\n  border: 0;\n  /* position: relative; */\n  /* width: 40%; */\n  display: flex;\n  flex-direction: row;\n\n  @media (max-width: ",") {\n    flex-direction: column;\n  }\n"])),(function(e){return e.theme.columnBreakpoint})),Y=p.c.div.attrs((function(e){return{className:"grid"}}))(D||(D=Object(j.a)(["\n  /* position: relative; */\n  min-width: 20rem;\n  max-width: 60rem; /* Should the size matter? */\n  width: auto;\n  flex: 2 1 50%;\n"]))),Q=p.c.div.attrs((function(e){return{className:"clues"}}))(H||(H=Object(j.a)(["\n  padding: 0 1em;\n  flex: 1 2 25%;\n\n  @media (max-width: ",") {\n    margin-top: 2em;\n  }\n\n  .direction {\n    margin-bottom: 2em;\n    /* padding: 0 1em;\n    flex: 1 1 20%; */\n\n    .header {\n      margin-top: 0;\n      margin-bottom: 0.5em;\n    }\n\n    div {\n      margin-top: 0.5em;\n    }\n  }\n"])),(function(e){return e.theme.columnBreakpoint})),V=a.a.forwardRef((function(e,o){var r=e.data,a=e.onCorrect,c=e.onLoadedCorrect,l=e.onCrosswordCorrect,t=e.onCellChange,s=e.useStorage,u=e.puzzleName,w=e.theme,d=Object(n.useState)(null),h=Object(A.a)(d,2),g=h[0],f=h[1],O=Object(n.useState)(null),E=Object(A.a)(O,2),j=E[0],I=E[1],v=Object(n.useState)(null),y=Object(A.a)(v,2),T=y[0],N=y[1],P=Object(n.useState)(!1),_=Object(A.a)(P,2),M=_[0],D=_[1],H=Object(n.useState)(0),z=Object(A.a)(H,2),F=z[0],G=z[1],V=Object(n.useState)(0),X=Object(A.a)(V,2),Z=X[0],q=X[1],$=Object(n.useState)("across"),ee=Object(A.a)($,2),oe=ee[0],re=ee[1],ne=Object(n.useState)("1"),ae=Object(A.a)(ne,2),ce=ae[0],le=ae[1],te=Object(n.useState)(null),se=Object(A.a)(te,2),ie=se[0],ue=se[1],we=Object(n.useState)([]),de=Object(A.a)(we,2),he=de[0],ge=de[1],Ae=Object(n.useState)(!1),fe=Object(A.a)(Ae,2),pe=fe[0],be=fe[1],me=Object(n.useRef)(),Se=Object(n.useContext)(p.a),Oe=Object(n.useCallback)((function(e,o){return e>=0&&e<g&&o>=0&&o<g?j[e][o]:{row:e,col:o,used:!1,outOfBounds:!0}}),[g,j]),Ce=Object(n.useCallback)((function(e,o,r){var n=Oe(e,o);n.used&&n.guess!==r&&(I(Object(B.a)((function(n){n[e][o].guess=r}))),ge(Object(B.a)((function(r){r.push({row:e,col:o})}))),t&&t(e,o,r))}),[Oe,t]),Ee=Object(n.useCallback)((function(e,o,r){a&&a(e,o,r)}),[a]),je=Object(n.useCallback)((function(e,o){var n=Oe(e,o);x.forEach((function(e){var o=L(e),a=n[e];if(a){var c=r[e][a],l=n.guess===n.answer;if(l)for(var t=0;t<c.answer.length;t++){if(Oe(c.row+(o?0:t),c.col+(o?t:0)).guess!==c.answer[t]){l=!1;break}}N(Object(B.a)((function(o){o[e].find((function(e){return e.number===a})).correct=l}))),l&&Ee(e,a,c.answer)}}))}),[Oe]);Object(n.useEffect)((function(){0!==he.length&&(he.forEach((function(e){var o=e.row,r=e.col;return je(o,r)})),ge([]))}),[he,je]),Object(n.useEffect)((function(){be(T&&x.every((function(e){return T[e].every((function(e){return e.correct}))})))}),[T]),Object(n.useEffect)((function(){l&&l(pe)}),[pe,l]);var Ie=Object(n.useCallback)((function(){me.current&&(me.current.focus(),D(!0))}),[]),ve=Object(n.useCallback)((function(e,o,r){var n=null!==r&&void 0!==r?r:oe,a=Oe(e,o);return!!a.used&&(a[n]||(n=R(n)),G(e),q(o),re(n),le(a[n]),a)}),[Oe]),ye=Object(n.useCallback)((function(e,o){var r;return 0!==e&&0===o?r="down":0===e&&0!==o&&(r="across"),ve(F+e,Z+o,r)}),[F,Z,ve]),ke=Object(n.useCallback)((function(){var e=L(oe);ye(e?0:1,e?1:0)}),[oe,ye]),Be=Object(n.useCallback)((function(){var e=L(oe);ye(e?0:-1,e?-1:0)}),[oe,ye]),Te=Object(n.useCallback)((function(e){Ce(F,Z,e.toUpperCase()),ke()}),[F,Z,Ce,ke]),Ne=Object(n.useCallback)((function(e){if(!(e.ctrlKey||e.altKey||e.metaKey)){var o=!0,n=e.key;switch(n){case"ArrowUp":ye(-1,0);break;case"ArrowDown":ye(1,0);break;case"ArrowLeft":ye(0,-1);break;case"ArrowRight":ye(0,1);break;case" ":case"Tab":var a=R(oe),c=Oe(F,Z);c[a]&&(re(a),le(c[a]));break;case"Backspace":case"Delete":Ce(F,Z,""),"Backspace"===n&&Be();break;case"Home":case"End":var l=r[oe][ce],t=l.answer.length,s=l.row,i=l.col;if("End"===n)L(oe)?i+=t-1:s+=t-1;ve(s,i);break;default:if(1!==n.length){o=!1;break}Te(n)}o&&e.preventDefault()}}),[r,F,Z,oe,ce,Oe,Ce,ye]),Pe=Object(n.useCallback)((function(e){e.preventDefault(),ue(e.target.value)}),[]);Object(n.useEffect)((function(){ie&&(Te(ie[0]),ue(1===ie.length?null:ie.substring(1)))}),[ie,Te]),Object(n.useEffect)((function(){var e,o=U(r),n=o.size,a=o.gridData,l=o.clues;s&&(K(a,u),(e=function(e,o){var r=[];return x.forEach((function(n){var a=L(n);Object.entries(e[n]).forEach((function(e){for(var c=Object(A.a)(e,2),l=c[0],t=c[1],s=t.row,i=t.col,u=!0,w=0;w<t.answer.length;w++){var d=a?i+w:i;if(o[a?s:s+w][d].guess!==t.answer[w]){u=!1;break}}u&&r.push([n,l,t.answer])}))})),r}(r,a)).forEach((function(e){var o=Object(A.a)(e,2),r=o[0],n=o[1];l[r].find((function(e){return e.number===n})).correct=!0}))),f(n),I(a),N(l),G(0),q(0),re("across"),le("1"),ue(null),e&&e.length>0&&c&&c(e)}),[r,c,s]),Object(n.useEffect)((function(){null!==j&&s&&function(e,o){var r=window.localStorage;if(r){var n=function(e){return e.reduce((function(e,o,r){return o.reduce((function(e,o,n){return""!==o.guess&&(e["".concat(r,"_").concat(n)]=o.guess),e}),e)}),{})}(e),a={date:Date.now(),guesses:n};r.setItem(o,JSON.stringify(a))}}(j,u)}),[j,s]);var xe=Object(n.useCallback)((function(e){var o=e.row,r=e.col,n=R(oe);G(o),q(r);var a=oe;(!e[oe]||M&&o===F&&r===Z&&e[n])&&(re(n),a=n),le(e[a]),Ie()}),[M,F,Z,oe,Ie]),Le=Object(n.useCallback)((function(e){var o=R(oe),r=Oe(F,Z),n=oe;M&&r[o]&&(re(o),n=o),le(r[n]),Ie()}),[oe,F,Z,Oe,Ie]),Re=Object(n.useCallback)((function(e,o){var n=r[e][o];ve(n.row,n.col,e),Ie()}),[r,ve,Ie]);Object(n.useImperativeHandle)(o,(function(){return{focus:function(){Ie()},reset:function(){var e;I(Object(B.a)((function(e){e.forEach((function(e){e.forEach((function(e){e.used&&(e.guess="")}))}))}))),N(Object(B.a)((function(e){x.forEach((function(o){e[o].forEach((function(e){delete e.correct}))}))}))),s&&(e=u,window.localStorage&&window.localStorage.removeItem(e))},fillAllAnswers:function(){if(I(Object(B.a)((function(e){e.forEach((function(e){e.forEach((function(e){e.used&&(e.guess=e.answer)}))}))}))),N(Object(B.a)((function(e){x.forEach((function(o){e[o].forEach((function(e){e.correct=!0}))}))}))),c){var e=[];x.forEach((function(o){Object.entries(r[o]).forEach((function(r){var n=Object(A.a)(r,2),a=n[0],c=n[1];e.push([o,a,c.answer])}))})),c(e)}},isCrosswordCorrect:function(){return pe}}}),[r,c,s,Ie,pe]);var _e=100/g,Me=_e-.25,De=_e/2,He=.7*Me,ze={focused:M,selectedDirection:oe,selectedNumber:ce,onClueSelected:Re},Fe=Object(C.a)(Object(C.a)(Object(C.a)({},W),Se),w),Ue=[];return j&&j.forEach((function(e,o){e.forEach((function(e,r){e.used&&Ue.push(Object(i.jsx)(S,{cellData:e,focus:M&&o===F&&r===Z,highlight:M&&ce&&e[oe]===ce,onClick:xe},"R".concat(o,"C").concat(r)))}))})),Object(i.jsx)(b.Provider,{value:ze,children:Object(i.jsx)(m.Provider,{value:{cellSize:_e,cellPadding:.125,cellInner:Me,cellHalf:De,fontSize:He},children:Object(i.jsx)(p.b,{theme:Fe,children:Object(i.jsxs)(J,{correct:pe,children:[Object(i.jsx)(Y,{children:Object(i.jsxs)("div",{style:{margin:0,padding:0,position:"relative"},children:[Object(i.jsxs)("svg",{viewBox:"0 0 100 100",children:[Object(i.jsx)("rect",{x:0,y:0,width:100,height:100,fill:Fe.gridBackground}),Ue]}),Object(i.jsx)("input",{ref:me,"aria-label":"crossword-input",type:"text",onClick:Le,onKeyDown:Ne,onChange:Pe,value:"",autoComplete:"off",spellCheck:"false",autoCorrect:"off",style:{position:"absolute",top:"calc(".concat(F*_e*.995,"% + 2px)"),left:"calc(".concat(Z*_e,"% + 2px)"),width:"calc(".concat(_e,"% - 4px)"),height:"calc(".concat(_e,"% - 4px)"),fontSize:"".concat(6*He,"px"),textAlign:"center",textAnchor:"middle",backgroundColor:"transparent",caretColor:"transparent",margin:0,padding:0,border:0,cursor:"default"}})]})}),Object(i.jsx)(Q,{children:T&&Object(i.jsx)(k,{direction:"across",clues:T.across},"across")}),Object(i.jsx)(Q,{children:T&&Object(i.jsx)(k,{direction:"down",clues:T.down},"down")})]})})})})}));V.displayName="Crossword",V.defaultProps={theme:null,useStorage:!0,puzzleName:"guesses",onCorrect:null,onLoadedCorrect:null,onCrosswordCorrect:null,onCellChange:null};var X=V,Z={1:{puzzleName:"Pool day",data:{across:{1:{clue:"Region that includes Singapore and Australia",answer:"APAC",row:0,col:0},5:{clue:"Fearless fighter turned Singapore citizen",answer:"JETLI",row:0,col:5},10:{clue:"Maori culture",answer:"TIKI",row:0,col:11},14:{clue:"Kee ____ (slang)",answer:"CHIU",row:1,col:0},15:{clue:"Singapore financial centre with vast liquid assets?",answer:"OCEAN",row:1,col:5},16:{clue:"American band whose name also means 'life' in Hebrew",answer:"HAIM",row:1,col:11},17:{clue:"Local influencer that went up against MOM",answer:"JADE",row:2,col:0},18:{clue:"Our 3rd PM, _____ our 1st PM",answer:"SONOF",row:2,col:5},19:{clue:"Like fine wine",answer:"AGED",row:2,col:11},20:{clue:"A girl's school that appears in the Singapore flag?",answer:"CRESCENT",row:3,col:0},22:{clue:"JC at the forefront of innovation?",answer:"INNOVA",row:3,col:9},24:{clue:"Gains access with an EZ-link card",answer:"TAPS",row:4,col:3},25:{clue:"Malay child",answer:"ANAK",row:4,col:8},26:{clue:"Local thin-skinned delight",answer:"POPIAH",row:5,col:0},29:{clue:"Particle production",answer:"EMISSION",row:5,col:7},33:{clue:"Running shoes brand",answer:"ASICS",row:6,col:0},34:{clue:"One-star restaurant located along Keong Saik Road",answer:"META",row:6,col:7},35:{clue:"UN agency that monitors the Earth's atmosphere",answer:"WMO",row:6,col:12},36:{clue:"Sudden pull",answer:"YANK",row:7,col:0},37:{clue:"Official substitute",answer:"PROXY",row:7,col:5},39:{clue:"Jessica ____ (actress married to Justin Timberlake)",answer:"BIEL",row:7,col:11},40:{clue:"Some teenagers in black",answer:"EMO",row:8,col:0},41:{clue:"An institution with 11 Singaporean schools",answer:"CHIJ",row:8,col:4},42:{clue:"Protrude out",answer:"BULGE",row:8,col:10},43:{clue:"Hari ________ (Singapore holiday)",answer:"RAYAHAJI",row:9,col:0},45:{clue:"DBS settlement method",answer:"PAYLAH",row:9,col:9},46:{clue:"An order passing down, in short",answer:"DESC",row:10,col:3},47:{clue:"What one might say at the end of the week",answer:"TGIF",row:10,col:8},48:{clue:"Grocery supplies during lockdown announcements",answer:"NOMORE",row:11,col:0},51:{clue:"Annoyance for tinnitus patients",answer:"EARTONES",row:11,col:7},55:{clue:"What we do for healthcare workers",answer:"CLAP",row:12,col:0},56:{clue:"Ra's al Ghul's daughter",answer:"TALIA",row:12,col:5},58:{clue:"Pakistani language",answer:"URDU",row:12,col:11},59:{clue:"Fog in the Cloud Forest",answer:"MIST",row:13,col:0},60:{clue:"It _____ meant to be",answer:"WASNT",row:13,col:5},61:{clue:"Keppel platforms",answer:"RIGS",row:13,col:11},62:{clue:"Objects found along HDB corridors",answer:"POTS",row:14,col:0},63:{clue:"Speak pompously, say at an event",answer:"ORATE",row:14,col:5},64:{clue:"Cinematic franchise of Batman vs Superman",answer:"DCEU",row:14,col:11}},down:{1:{clue:"Pre-uni institution not at it's full potential?",answer:"ACJC",row:0,col:0},2:{clue:"First half of a medicine shop",answer:"PHAR",row:0,col:1},3:{clue:"Government helper",answer:"AIDE",row:0,col:2},4:{clue:"Equipment for some pool games",answer:"CUESTICK",row:0,col:3},5:{clue:"Big winner in Singapore pools?",answer:"JOSEPH",row:0,col:5},6:{clue:"Class about curves, in short",answer:"ECONS",row:0,col:6},7:{clue:"Main structure of a pitch meeting?",answer:"TENT",row:0,col:7},8:{clue:"Wah ___ eh (slang)",answer:"LAO",row:0,col:8},9:{clue:"Some atas Singapore pools",answer:"INFINITY",row:0,col:9},10:{clue:"What courteous people might give",answer:"THANKS",row:0,col:11},11:{clue:"Famous cartoon parrot, or Shakespearean villain",answer:"IAGO",row:0,col:12},12:{clue:"Capital of Ukraine",answer:"KIEV",row:0,col:13},13:{clue:"Stat board involved in digital tech",answer:"IMDA",row:0,col:14},21:{clue:"Stat board located at the airport",answer:"CAAS",row:3,col:4},23:{clue:"Agency for moonwalking",answer:"NASA",row:3,col:10},25:{clue:"A luxury credit card in Singapore",answer:"AMEX",row:4,col:8},26:{clue:"Person scanning a QR code at the cashier",answer:"PAYER",row:5,col:0},27:{clue:"9/11 mastermind",answer:"OSAMA",row:5,col:1},28:{clue:"Relating to the Philippines",answer:"PINOY",row:5,col:2},29:{clue:"A face or an eggplant, say",answer:"EMOJI",row:5,col:7},30:{clue:'"_____ survive" (song)',answer:"IWILL",row:5,col:12},31:{clue:"Greek finale?",answer:"OMEGA",row:5,col:13},32:{clue:"A Singlish expression of doubt",answer:"NOLEH",row:5,col:14},37:{clue:"Period of heightened alert in Singapore",answer:"PHASETWO",row:7,col:5},38:{clue:"The pre-uni institution of Singapore's oldest school",answer:"RIJC",row:7,col:6},39:{clue:"Singapore Pools activity",answer:"BUYFOURD",row:7,col:11},41:{clue:"An endearing term referring to a tutor",answer:"CHER",row:8,col:4},42:{clue:"Fish enticement",answer:"BAIT",row:8,col:10},44:{clue:"Takes as one's own",answer:"ADOPTS",row:9,col:3},45:{clue:"Put a label that recommends an adult's presence",answer:"PGRATE",row:9,col:9},47:{clue:"What social media can do to reputations during General Elections",answer:"TAINT",row:10,col:8},48:{clue:"Political best-performing loser, in Singapore",answer:"NCMP",row:11,col:0},49:{clue:"Partner to aglio in a pasta dish",answer:"OLIO",row:11,col:1},50:{clue:"Half-____",answer:"MAST",row:11,col:2},51:{clue:"A very cool princess?",answer:"ELSA",row:11,col:7},52:{clue:"Exclusive Singapore collectible that comes in blue or pink",answer:"NRIC",row:11,col:12},53:{clue:"Slight advantage",answer:"EDGE",row:11,col:13},54:{clue:"Teh whitener",answer:"SUSU",row:11,col:14},57:{clue:"Post-project debrief, in short",answer:"AAR",row:12,col:6}}}},729:{puzzleName:"Transmutation",data:{across:{1:{clue:"Hate strongly",answer:"ABHOR",row:0,col:0},6:{clue:"Macho guy from an 80s cartoon",answer:"HEMAN",row:0,col:6},11:{clue:"Sydney's state, in short",answer:"NSW",row:0,col:12},14:{clue:"Famous ringbearer",answer:"FRODO",row:1,col:0},15:{clue:"_____poly (economics)",answer:"OLIGO",row:1,col:6},16:{clue:"Boat propulsion tool",answer:"OAR",row:1,col:12},17:{clue:"* Ability of King Midas (which can be applied to the answers of the other starred clues)",answer:"GOLDENTOUCH",row:2,col:0},19:{clue:"US spy agency",answer:"CIA",row:2,col:12},20:{clue:"To be ready, for the road ahead",answer:"ALLSET",row:3,col:1},21:{clue:"Some large bedside tablets?",answer:"IPADS",row:3,col:10},23:{clue:"New age event, in short?",answer:"BDAY",row:4,col:0},24:{clue:"On-demand solutions employed by SAF?",answer:"RESERVISTS",row:4,col:5},28:{clue:"Barbie lover",answer:"KEN",row:5,col:0},29:{clue:"Magical tooth collector",answer:"FAIRY",row:5,col:5},30:{clue:"Nike product",answer:"SHOE",row:5,col:11},31:{clue:"What some restless Singaporeans wanted the government to do, during May 2020",answer:"ENDCB",row:6,col:0},34:{clue:"Highly-skilled",answer:"ADEPT",row:6,col:7},36:{clue:"* Performance for a small settlement? (see 17-across)",answer:"VILLAGESHOW",row:7,col:2},40:{clue:"Green fruit found at FairPrice",answer:"GUAVA",row:8,col:3},41:{clue:"Opposite of outsourced, in short",answer:"INHSE",row:8,col:10},44:{clue:"American film rating organisation",answer:"MPAA",row:9,col:0},47:{clue:"Person credited in a footnote",answer:"CITEE",row:9,col:5},50:{clue:"___tiao (Singapore snack)",answer:"YOU",row:9,col:12},51:{clue:"* Rescue agents (see 17-across)",answer:"RETRIEVERS",row:10,col:0},53:{clue:"Taiwanese laptop company",answer:"ASUS",row:10,col:11},54:{clue:"Spicy dance performance?",answer:"SALSA",row:11,col:0},55:{clue:"Emergency vessel commonly used in science fiction, in short",answer:"ESCPOD",row:11,col:8},57:{clue:"The 'Phua Chu Kang COVID-19 rap' campaign for example, in short",answer:"PSA",row:12,col:0},58:{clue:"* An irrational concern about long distances? (see 17-across)",answer:"MILECOMPLEX",row:12,col:4},63:{clue:"CPF scheme that insures against home losses",answer:"HPS",row:13,col:0},64:{clue:"Empowering juice stores?",answer:"BOOST",row:13,col:4},65:{clue:"Ending to cyto- or ecto-",answer:"PLASM",row:13,col:10},66:{clue:"Common breakfast grain",answer:"OAT",row:14,col:0},67:{clue:"Nasal discharges, informally",answer:"SNOTS",row:14,col:4},68:{clue:"A royal title used in Central and South Asia",answer:"BEGUM",row:14,col:10}},down:{1:{clue:"Country of Taliban, in short",answer:"AFG",row:0,col:0},2:{clue:"Make wider",answer:"BROADEN",row:0,col:1},3:{clue:"Singapore district that is also the name of a local TV series",answer:"HOLLANDV",row:0,col:2},4:{clue:"In a fishy manner",answer:"ODDLY",row:0,col:3},5:{clue:"Mess that's a little fishy?",answer:"ROES",row:0,col:4},6:{clue:"A coffeeshop drink for a cold day",answer:"HOTTEA",row:0,col:6},7:{clue:"What chess grandmasters get high on?",answer:"ELO",row:0,col:7},8:{clue:"A pair of this equates to an Orchard attraction",answer:"MIU",row:0,col:8},9:{clue:"Legal representative of the Singapore government, in short",answer:"AGC",row:0,col:9},10:{clue:"A negative but positive outcome of an STD test",answer:"NOHIV",row:0,col:10},11:{clue:"PayNow's proposition",answer:"NOCASH",row:0,col:12},12:{clue:"Told",answer:"SAIDTO",row:0,col:13},13:{clue:"Fishy species found along Singapore shores",answer:"WRASSE",row:0,col:14},18:{clue:"Reduce in power, especially in video games",answer:"NERF",row:2,col:5},22:{clue:"Moving component of an engine",answer:"PISTON",row:3,col:11},23:{clue:"Animal crossing supporter in Singapore?",answer:"BKE",row:4,col:0},25:{clue:"Boarding area of our national carrier",answer:"SIAGATE",row:4,col:7},26:{clue:"Our planet, to a German",answer:"ERDE",row:4,col:8},27:{clue:"Grains of some breads or whiskys",answer:"RYES",row:4,col:9},32:{clue:"Thick smoking items",answer:"CIGARS",row:6,col:3},33:{clue:"___ Jaz Cafe (popular bar near Bugis)",answer:"BLU",row:6,col:4},35:{clue:"Symbol of a famous mathematical ratio, also related to 17-across",answer:"PHI",row:6,col:10},37:{clue:"Security detail of 30-across",answer:"LACE",row:7,col:5},38:{clue:"Tel ____ (city)",answer:"AVIV",row:7,col:6},39:{clue:"Complaint you might hear in a LAN shop, due to poor internet connection",answer:"WHYSOLAG",row:7,col:12},42:{clue:"A Japanese affirmation",answer:"SOUDESU",row:8,col:13},43:{clue:"What Britain is no longer, after Brexit",answer:"EUS",row:8,col:14},44:{clue:"Vietnamese restaurant chain that appears in Vivocity",answer:"MRSPHO",row:9,col:0},45:{clue:"Relaxing bath with small round vegetables",answer:"PEASPA",row:9,col:1},46:{clue:'"Finally!"',answer:"ATLAST",row:9,col:2},48:{clue:"Puts up new buildings in CBD, say",answer:"ERECTS",row:9,col:8},49:{clue:"Petrol station brand",answer:"ESSO",row:9,col:9},52:{clue:"Poetic units",answer:"IAMBS",row:10,col:4},53:{clue:"Orchard product that moved to Newton?",answer:"APPLE",row:10,col:11},56:{clue:"Location of an NSF's initial medical checkup",answer:"CMPB",row:11,col:10},59:{clue:"Orchard installation isn't free of charge?",answer:"ION",row:12,col:5},60:{clue:"Bathroom in Bath",answer:"LOO",row:12,col:6},61:{clue:"Timezone exactly half a day behind Singapore",answer:"EST",row:12,col:7},62:{clue:"Little Chinese girl, in short",answer:"XMM",row:12,col:14}}}},911:{puzzleName:"Ping",data:{across:{1:{clue:"Cooking injury",answer:"SCALD",row:0,col:0},6:{clue:"London stock market index",answer:"FTSE",row:0,col:6},10:{clue:"Certificate for a noob driver in Singapore",answer:"PDL",row:0,col:12},13:{clue:"Completely consume",answer:"EATUP",row:1,col:0},14:{clue:"Tiny t-rex parts",answer:"ARMS",row:1,col:6},15:{clue:"Lowest point in SAF?",answer:"BASE",row:1,col:11},16:{clue:"* In",answer:"PROPIANIST",row:2,col:0},18:{clue:"Playing fee",answer:"ANTE",row:2,col:11},19:{clue:"Hairdresser guy's partner?",answer:"TONI",row:3,col:0},20:{clue:"Organisational leaders skilled at double-entry? (see 41-down)",answer:"CFOS",row:3,col:5},21:{clue:"Themed karaoke bar in Singapore",answer:"KSTAR",row:3,col:10},22:{clue:"Japanese superior",answer:"SENPAI",row:4,col:1},24:{clue:"Singapore note manager?",answer:"MAS",row:4,col:9},25:{clue:"* Sticks",answer:"RICEHOLDERS",row:5,col:4},31:{clue:"Without citizenship",answer:"ALIEN",row:6,col:0},35:{clue:"* E",answer:"RESERVES",row:6,col:7},36:{clue:"Grain-grinder",answer:"MILL",row:7,col:0},37:{clue:"Place for food or games",answer:"COURT",row:7,col:5},39:{clue:"Indonesian money",answer:"UANG",row:7,col:11},40:{clue:"* A Singaporean's extra guarantee? (which can be applied to the other starred clues)",answer:"PLUSCHOP",row:8,col:0},42:{clue:"Phrase that triggers 'Are too!'",answer:"AMNOT",row:8,col:10},43:{clue:"* Chop",answer:"MOVEFASTNOW",row:9,col:0},46:{clue:"Took top prize",answer:"WON",row:10,col:3},47:{clue:"Majority of the planet",answer:"OCEANS",row:10,col:8},51:{clue:"Popular Singapore street that used to be a hotspot for transvestites",answer:"BUGIS",row:11,col:0},54:{clue:"Drink pairing with 54-down",answer:"KOPI",row:11,col:6},56:{clue:"Common part of a Malay girl names in Singapore",answer:"SITI",row:11,col:11},58:{clue:"Budget hotel chain that can be found at 51-across",answer:"IBIS",row:12,col:0},59:{clue:"What NTUC labels their products with?",answer:"FAIRPRICES",row:12,col:5},61:{clue:"Object found on the bathroom floor",answer:"TILE",row:13,col:0},62:{clue:"Rock climbing move, that is also a measure for force",answer:"DYNO",row:13,col:5},63:{clue:"How Singaporeans endure",answer:"TAHAN",row:13,col:10},64:{clue:"Comedy showcase that Elon Musk appeared in",answer:"SNL",row:14,col:0},65:{clue:"First-place creatures in the Chinese zodiac race",answer:"RATS",row:14,col:5},66:{clue:"Prepared to propose",answer:"KNELT",row:14,col:10}},down:{1:{clue:"Month of Singapore's Teacher's day, in short",answer:"SEPT",row:0,col:0},2:{clue:"A way to describe Tesla's underlying computer software",answer:"CAROS",row:0,col:1},3:{clue:"Make amends",answer:"ATONE",row:0,col:2},4:{clue:"Could be a flower or professor",answer:"LUPIN",row:0,col:3},5:{clue:"Printing measurement, in short",answer:"DPI",row:0,col:4},6:{clue:"Fifty Shades of Grey, to Twilight, in short",answer:"FANFIC",row:0,col:6},7:{clue:"The Powerpuff Girls or Charlie's Angels, say",answer:"TRIO",row:0,col:7},8:{clue:"First Singaporean all girl's school, in short",answer:"SMSS",row:0,col:8},9:{clue:"Uncertain amount, in short",answer:"EST",row:0,col:9},10:{clue:"Laboured breath",answer:"PANT",row:0,col:12},11:{clue:"Stat board that provides technical support for national security",answer:"DSTA",row:0,col:13},12:{clue:"Stare creepily",answer:"LEER",row:0,col:14},15:{clue:"Deep instrument?",answer:"BASSDRUM",row:1,col:11},17:{clue:"Healthy berry",answer:"ACAI",row:2,col:5},21:{clue:"Kailan",answer:"KALE",row:3,col:10},23:{clue:"To indicate 'as needed' on a medical prescription, in short",answer:"PRN",row:4,col:4},24:{clue:"Keyword in The Guinness Book of Records",answer:"MOST",row:4,col:9},26:{clue:"Spew lava",answer:"ERUPT",row:5,col:7},27:{clue:"2013 Oscar-winning film about a human-robot relationship",answer:"HER",row:5,col:8},28:{clue:"Dear ____ Hansen (2021 film based on an award-winning musical)",answer:"EVAN",row:5,col:12},29:{clue:"Typical first task for a new BTO, in short",answer:"RENO",row:5,col:13},30:{clue:"2nd-highest spec rank in SAF, in short",answer:"SSGT",row:5,col:14},31:{clue:"Toggle on a 12-hour clock",answer:"AMPM",row:6,col:0},32:{clue:"Stitch's best friend",answer:"LILO",row:6,col:1},33:{clue:"____ U (on a Sweethearts candy)",answer:"ILUV",row:6,col:2},34:{clue:"Rarely used alternative to 'if not'",answer:"ELSEWISE",row:6,col:3},37:{clue:"Kit that can be found at home?",answer:"CHAN",row:7,col:5},38:{clue:"No remaining supply at a store, in short",answer:"OOS",row:7,col:6},41:{clue:"Organisational leaders skilled at double-entry? (see 20-across)",answer:"CFOS",row:8,col:4},42:{clue:"Reverence",answer:"AWE",row:8,col:10},44:{clue:"A way to describe amateur leagues",answer:"NOPROS",row:9,col:8},45:{clue:"Student's volunteering trip to Vietnam, say",answer:"OCIP",row:9,col:9},48:{clue:"Member of our continent",answer:"ASIAN",row:10,col:11},49:{clue:"Special area",answer:"NICHE",row:10,col:12},50:{clue:"Take the wrong way?",answer:"STEAL",row:10,col:13},51:{clue:"Basic pieces of information",answer:"BITS",row:11,col:0},52:{clue:"One of Singapore's islands, whose name means 'granite'",answer:"UBIN",row:11,col:1},53:{clue:"Underwater breathing equipment?",answer:"GILL",row:11,col:2},54:{clue:"Green on bread that isn't mould",answer:"KAYA",row:11,col:6},55:{clue:"Smear with oil",answer:"OINT",row:11,col:7},57:{clue:"Is not shortened?",answer:"ISNT",row:11,col:14},59:{clue:"US president that held the longest tenure, in short",answer:"FDR",row:12,col:5},60:{clue:"Positioning technique more accurate than GPS",answer:"RTK",row:12,col:10}}}},917:{puzzleName:"Startup expansion",data:{across:{1:{clue:"Last name of Singaporean billionaire that owns a football team",answer:"LIM",row:0,col:0},4:{clue:"Singapore tourist attraction featured in 'Crazy Rich Asians', in short",answer:"GBTB",row:0,col:5},8:{clue:"Indian equivalent of zodiac sign",answer:"RASHI",row:0,col:10},13:{clue:'"____ happens.."',answer:"ITSO",row:1,col:0},15:{clue:"Hawaiian island, or Dwayne Johnson in Moana",answer:"MAUI",row:1,col:5},16:{clue:"Pulut _____ (Singapore dessert)",answer:"HITAM",row:1,col:10},17:{clue:"Closet muggers?",answer:"SECRETLABOURERS",row:2,col:0},20:{clue:"Spanish snacks",answer:"TAPAS",row:3,col:0},21:{clue:"Wedding photography tool",answer:"DSLR",row:3,col:6},22:{clue:"Tiger in Singapore?",answer:"BEER",row:3,col:11},23:{clue:"Last name of Singapore's longest serving opposition MP",answer:"LOW",row:4,col:3},25:{clue:"Like the White Walkers, from Game of Thrones",answer:"ICEARMY",row:4,col:8},27:{clue:"Cargo unloader's directive?",answer:"GRABPAYLOADS",row:5,col:0},32:{clue:"34-across found on a mountain",answer:"RAM",row:6,col:0},33:{clue:"Flowery support?",answer:"STEM",row:6,col:4},34:{clue:"Beauty's beholder?",answer:"BEAST",row:6,col:10},38:{clue:"Rigorous battalion-level assessment in SAF",answer:"ATEC",row:7,col:0},40:{clue:"Harmful type of relationship",answer:"TOXIC",row:7,col:5},43:{clue:"Chinese prefix",answer:"SINO",row:7,col:11},44:{clue:"Common advice to NSFs during tough trainings",answer:"MANUP",row:8,col:0},46:{clue:"Political family of Singapore",answer:"LEES",row:8,col:7},48:{clue:"2006 Time magazine's Person of the Year",answer:"YOU",row:8,col:12},49:{clue:"Cashier's escape route?",answer:"SHOPBACKDOOR",row:9,col:3},53:{clue:"Artificial learning style?",answer:"MACHINE",row:10,col:0},56:{clue:"Insurance company with a tower at Robinson's Road",answer:"AIA",row:10,col:9},57:{clue:"Not home",answer:"AWAY",row:11,col:0},58:{clue:"First Singapore hospital named after a person, in short",answer:"TTSH",row:11,col:5},61:{clue:"Spinning tales",answer:"LYING",row:11,col:10},65:{clue:"Graffiti artist that doesn't get caught?",answer:"NINJAVANDALISER",row:12,col:0},68:{clue:"_____ia (European country)",answer:"ESTON",row:13,col:0},69:{clue:"Chem class locations",answer:"LABS",row:13,col:6},70:{clue:"NRIC component",answer:"NAME",row:13,col:11},71:{clue:"_____ Ghaut (Singapore location)",answer:"DHOBY",row:14,col:0},72:{clue:"Software package commonly used for statistical analysis",answer:"SPSS",row:14,col:6},73:{clue:"Impress",answer:"WOW",row:14,col:12}},down:{1:{clue:"Common feature of a clickbait article",answer:"LIST",row:0,col:0},2:{clue:"Lesser-known LiHo competitor",answer:"ITEA",row:0,col:1},3:{clue:"Building usually found alongside 60-across",answer:"MSCP",row:0,col:2},4:{clue:"Standard time",answer:"GMT",row:0,col:5},5:{clue:"Like NSFs, hairwise",answer:"BALD",row:0,col:6},6:{clue:"Singapore's westernmost point",answer:"TUAS",row:0,col:7},7:{clue:"Book's beginning?",answer:"BIBLIO",row:0,col:8},8:{clue:"Tanjong ___ (Singapore location)",answer:"RHU",row:0,col:10},9:{clue:"Military facilities in Paya Lebar and Tengah",answer:"AIRBASES",row:0,col:11},10:{clue:"Guide on the road",answer:"STEER",row:0,col:12},11:{clue:"Collection of wives",answer:"HAREM",row:0,col:13},12:{clue:"Texter's apology",answer:"IMSRY",row:0,col:14},14:{clue:"Toothbrush brand",answer:"ORALB",row:1,col:3},18:{clue:"Employee benefit plans that provide share-ownership",answer:"ESOPS",row:2,col:4},19:{clue:"Penguin-hunter",answer:"ORCA",row:2,col:9},24:{clue:"Measure of power",answer:"WATT",row:4,col:5},26:{clue:"Stat board responsible for growing Singapore as a business hub",answer:"EDB",row:4,col:10},27:{clue:"Measure of carbs",answer:"GRAM",row:5,col:0},28:{clue:"Pro-____ (proportion)",answer:"RATA",row:5,col:1},29:{clue:"Prayer's conclusion",answer:"AMEN",row:5,col:2},30:{clue:"Last name of former MP that lost his seat in 2011, against the team led by 23-across",answer:"YEO",row:5,col:6},31:{clue:"Initials that come after 'Crystal Jade'",answer:"LMXLB",row:5,col:7},35:{clue:"Singaporean expression of displeasure, which became an official dictionary term in 2021",answer:"AIYO",row:6,col:12},36:{clue:"Reddit's alien mascot",answer:"SNOO",row:6,col:13},37:{clue:"Explore Singapore with a duck?",answer:"TOUR",row:6,col:14},39:{clue:"Professional sofa tester?",answer:"CUSHYJOB",row:7,col:3},41:{clue:"Global organisation promoting clean energy transition, that Singapore is part of",answer:"IEA",row:7,col:8},42:{clue:"Singapore's agreement with India that's often a public controversy",answer:"CECA",row:7,col:9},45:{clue:"Greek F",answer:"PHI",row:8,col:4},47:{clue:"Result of practice",answer:"SKILL",row:8,col:10},50:{clue:"Where you can find '5' or 'U'?",answer:"ONTV",row:9,col:5},51:{clue:"Flowery support, along the aisle",answer:"PETALS",row:9,col:6},52:{clue:'"A _____ the life of.."',answer:"DAYIN",row:9,col:11},53:{clue:"Like the Merlion, hairwise",answer:"MANED",row:10,col:0},54:{clue:"Make-_____ foundation",answer:"AWISH",row:10,col:1},55:{clue:"Dialect origin of 'dabao', in short",answer:"CANTO",row:10,col:2},59:{clue:"Like Singapore's general election, in 2020",answer:"SNAP",row:11,col:7},60:{clue:"Homes of most Singaporeans",answer:"HDBS",row:11,col:8},62:{clue:'"Vidi"',answer:"ISAW",row:11,col:12},63:{clue:"Lost fish?",answer:"NEMO",row:11,col:13},64:{clue:"Multiplied",answer:"GREW",row:11,col:14},66:{clue:"None in particular",answer:"ANY",row:12,col:4},67:{clue:"Idiot",answer:"ASS",row:12,col:9}}}}},q=r(32),$=(r(55),r(56),function(){return Object(i.jsx)(q.a,{trigger:Object(i.jsx)("font",{className:"App-link",children:"How to read clues"}),modal:!0,nested:!0,children:function(e){return Object(i.jsxs)("div",{className:"modal",children:[Object(i.jsx)("div",{className:"header",children:" How to read clues "}),Object(i.jsxs)("div",{className:"content",children:[" ","1) Answers will always follow the form of the clue (eg. singular/plural, past/present)",Object(i.jsx)("br",{}),'2) "in short" in a clue means that the answer is abbreviated (eg. tablespoon = tbsp)',Object(i.jsx)("br",{}),'3) "say" in a clue means as an example',Object(i.jsx)("br",{}),"4) A question mark at the end of a clue implies some wordplay is involved"]})]})}})}),ee=r(33),oe=r.n(ee),re=function(){return Object(i.jsx)(oe.a,{numberOfPieces:700})};var ne=function(e){Object(h.a)(r,e);var o=Object(g.a)(r);function r(){return Object(w.a)(this,r),o.apply(this,arguments)}return Object(d.a)(r,[{key:"render",value:function(){return this.props.isCorrect?Object(i.jsxs)("span",{style:{color:"#0BC175"},children:[Object(i.jsx)(re,{}),"Crossword complete!"]}):Object(i.jsx)("span",{style:{color:"#FE6E61"},children:"Crossword incomplete"})}}]),r}(a.a.Component),ae=function(e){var o=e.match.params.id,r=a.a.useState(!1),n=Object(A.a)(r,2),c=n[0],l=n[1];return document.title="Puzzle "+o+": "+Z[o].puzzleName,Object(i.jsxs)("div",{className:"App-left",children:[Object(i.jsx)(s.Link,{to:"/",className:"App-link",children:Object(i.jsx)("img",{src:f,width:"10",height:"10"})}),"\xa0\xa0",Object(i.jsx)("span",{children:"Back"}),"\xa0\xa0",Object(i.jsx)($,{}),Object(i.jsx)("h2",{children:"Puzzle "+o+": "+Z[o].puzzleName}),Object(i.jsx)(ne,{isCorrect:c}),Object(i.jsx)("div",{children:Object(i.jsx)(p.b,{theme:{gridBackground:"#282c34",textColor:"#222D43",focusBackground:"#FAD988",highlightBackground:"#FFEAB5"},children:Object(i.jsx)(X,{data:Z[o].data,puzzleName:Z[o].puzzleName,onCrosswordCorrect:function(e){l(e)}})})})]})};var ce=function(){return Object(i.jsxs)(t.g,{children:[Object(i.jsx)(t.d,{exact:!0,path:"/",component:u}),Object(i.jsx)(t.d,{path:"/puzzle/:id",component:ae})]})},le=r(34),te=r.n(le);l.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(s.HashRouter,{children:Object(i.jsx)(te.a,{id:"UA-206870903-1",children:Object(i.jsx)(ce,{})})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.ec9a3105.chunk.js.map