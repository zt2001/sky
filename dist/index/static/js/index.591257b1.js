!function(g){function o(o){for(var m,s,n=o[0],i=o[1],r=o[2],c=0,C=[];c<n.length;c++)s=n[c],t[s]&&C.push(t[s][0]),t[s]=0;for(m in i)Object.prototype.hasOwnProperty.call(i,m)&&(g[m]=i[m]);for(a&&a(o);C.length;)C.shift()();return e.push.apply(e,r||[]),p()}function p(){for(var g,o=0;o<e.length;o++){for(var p=e[o],m=!0,n=1;n<p.length;n++){var i=p[n];0!==t[i]&&(m=!1)}m&&(e.splice(o--,1),g=s(s.s=p[0]))}return g}var m={},t={0:0},e=[];function s(o){if(m[o])return m[o].exports;var p=m[o]={i:o,l:!1,exports:{}};return g[o].call(p.exports,p,p.exports,s),p.l=!0,p.exports}s.m=g,s.c=m,s.d=function(g,o,p){s.o(g,o)||Object.defineProperty(g,o,{enumerable:!0,get:p})},s.r=function(g){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})},s.t=function(g,o){if(1&o&&(g=s(g)),8&o)return g;if(4&o&&"object"===typeof g&&g&&g.__esModule)return g;var p=Object.create(null);if(s.r(p),Object.defineProperty(p,"default",{enumerable:!0,value:g}),2&o&&"string"!=typeof g)for(var m in g)s.d(p,m,function(o){return g[o]}.bind(null,m));return p},s.n=function(g){var o=g&&g.__esModule?function(){return g.default}:function(){return g};return s.d(o,"a",o),o},s.o=function(g,o){return Object.prototype.hasOwnProperty.call(g,o)},s.p="./";var n=window.webpackJsonp=window.webpackJsonp||[],i=n.push.bind(n);n.push=o,n=n.slice();for(var r=0;r<n.length;r++)o(n[r]);var a=i;e.push([63,1]),p()}({112:function(g,o,p){"use strict";var m=p(25);p.n(m).a},113:function(g,o,p){"use strict";var m=p(26);p.n(m).a},114:function(g,o,p){"use strict";var m=p(27);p.n(m).a},115:function(g,o,p){"use strict";p.r(o);var m=p(39),t=p(62),e={name:"Item",props:["type"]},s=(p(112),p(10)),n=Object(s.a)(e,function(){var g=this.$createElement,o=this._self._c||g;return o("transition",{attrs:{appear:"",name:"fade"}},[o("div",{staticClass:"btn-shape"},["muti"===this.type||"cicle"===this.type?o("div",{staticClass:"shape cicle"}):this._e(),"muti"===this.type||"rect"===this.type?o("div",{staticClass:"shape rect"}):this._e()])])},[],!1,null,null,null).exports,i=p(17),r=p.n(i);document.querySelector("body").addEventListener("click",function(){r.a.start()},!1);var a={C2:"a49.mp3",D2:"a50.mp3",E2:"a51.mp3",F2:"a52.mp3",G2:"a53.mp3",A2:"a54.mp3",B2:"a55.mp3",C3:"a56.mp3",D3:"a57.mp3",E3:"a48.mp3",F3:"a81.mp3",G3:"a87.mp3",A3:"a69.mp3",B3:"a82.mp3",C4:"a84.mp3",D4:"a89.mp3",E4:"a85.mp3",F4:"a73.mp3",G4:"a79.mp3",A4:"a80.mp3",B4:"a65.mp3",C5:"a83.mp3",D5:"a68.mp3",E5:"a70.mp3",F5:"a71.mp3",G5:"a72.mp3",A5:"a74.mp3",B5:"a75.mp3",C6:"a76.mp3",D6:"a90.mp3",E6:"a88.mp3",F6:"a67.mp3",G6:"a86.mp3",A6:"a66.mp3",B6:"a78.mp3",C7:"a77.mp3","C#2":"b49.mp3","D#2":"b50.mp3","F#2":"b52.mp3","G#2":"b53.mp3","A#2":"b54.mp3","C#3":"b56.mp3","D#3":"b57.mp3","F#3":"b81.mp3","G#3":"b87.mp3","A#3":"b69.mp3","C#4":"b84.mp3","D#4":"b89.mp3","F#4":"b73.mp3","G#4":"b79.mp3","A#4":"b80.mp3","C#5":"b83.mp3","D#5":"b68.mp3","F#5":"b71.mp3","G#5":"b72.mp3","A#5":"b74.mp3","C#6":"b76.mp3","D#6":"b90.mp3","F#6":"b67.mp3","G#6":"b86.mp3","A#6":"b66.mp3"},c={minify:!1,ext:".[mp3|ogg]",baseUrl:"./static/media/",list:["bass-electric","bassoon","cello","clarinet","contrabass","flute","french-horn","guitar-acoustic","guitar-electric","guitar-nylon","harmonium","harp","organ","piano","saxophone","trombone","trumpet","tuba","violin","xylophone"],onload:null,setExt:function(g){var o;for(o=0;o<=this.list.length-1;o++)for(var p in this[this.list[o]])this[this.list[o]][p]=this[this.list[o]][p].replace(this.ext,g);return this.ext=g,console.log("sample extensions set to "+this.ext)},load:function(g){var o,p,m;if((o=g||{}).instruments=o.instruments||this.list,o.baseUrl=o.baseUrl||this.baseUrl,o.onload=o.onload||this.onload,o.ext&&(o.ext!=this.ext&&this.setExt(o.ext),o.ext=this.ext),p={},Array.isArray(o.instruments)){for(m=0;m<=o.instruments.length-1;m++){var t=this[o.instruments[m]];if(!0===this.minify||!0===o.minify){var e=1;Object.keys(t).length>=17&&(e=2),Object.keys(t).length>=33&&(e=4),Object.keys(t).length>=49&&(e=6);var s=Object.keys(t).filter(function(g,o){return o%e!=0});s.forEach(function(g){delete t[g]})}p[o.instruments[m]]=new r.a.Sampler(t,{baseUrl:o.baseUrl+o.instruments[m]+"/",onload:o.onload})}return p}return t=this[o.instruments],!0!==this.minify&&!0!==o.minify||(e=1,Object.keys(t).length>=17&&(e=2),Object.keys(t).length>=33&&(e=4),Object.keys(t).length>=49&&(e=6),(s=Object.keys(t).filter(function(g,o){return o%e!=0})).forEach(function(g){delete t[g]})),new r.a.Sampler(t,{baseUrl:o.baseUrl+o.instruments+"/",onload:o.onload})},"bass-electric":{"A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]","A#4":"As4.[mp3|ogg]","A#5":"As5.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]","C#5":"Cs5.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",E5:"E5.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]",G5:"G5.[mp3|ogg]"},bassoon:{A3:"A3.[mp3|ogg]",C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",E3:"E3.[mp3|ogg]",G1:"G1.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",A1:"A1.[mp3|ogg]",A2:"A2.[mp3|ogg]"},cello:{E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#3":"Gs3.[mp3|ogg]","G#4":"Gs4.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]","A#4":"As4.[mp3|ogg]",B2:"B2.[mp3|ogg]",B3:"B3.[mp3|ogg]",B4:"B4.[mp3|ogg]",C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]",E2:"E2.[mp3|ogg]"},clarinet:{D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]",D5:"D5.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]","A#4":"As4.[mp3|ogg]",D2:"D2.[mp3|ogg]"},contrabass:{C1:"C1.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]",D1:"D1.[mp3|ogg]",E1:"E1.[mp3|ogg]",E2:"E2.[mp3|ogg]","F#0":"Fs0.[mp3|ogg]","F#1":"Fs1.[mp3|ogg]",G0:"G0.[mp3|ogg]","G#1":"Gs1.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]",A1:"A1.[mp3|ogg]","A#0":"As0.[mp3|ogg]",B2:"B2.[mp3|ogg]"},flute:{A5:"A5.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",E5:"E5.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]"},"french-horn":{D2:"D2.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]",F2:"F2.[mp3|ogg]",F4:"F4.[mp3|ogg]",G1:"G1.[mp3|ogg]",A0:"A0.[mp3|ogg]",A2:"A2.[mp3|ogg]",C1:"C1.[mp3|ogg]",C3:"C3.[mp3|ogg]"},"guitar-acoustic":{F3:"F3.[mp3|ogg]","F#1":"Fs1.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]",G1:"G1.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]","G#1":"Gs1.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#3":"Gs3.[mp3|ogg]",A1:"A1.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]","A#1":"As1.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]",B1:"B1.[mp3|ogg]",B2:"B2.[mp3|ogg]",B3:"B3.[mp3|ogg]",C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]",D1:"D1.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]",E1:"E1.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",F1:"F1.[mp3|ogg]",F2:"F2.[mp3|ogg]"},"guitar-electric":{"D#3":"Ds3.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]","D#5":"Ds5.[mp3|ogg]",E2:"E2.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]",A5:"A5.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]"},"guitar-nylon":{"F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]",G3:"G3.[mp3|ogg]",G5:"G3.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#4":"Gs4.[mp3|ogg]","G#5":"Gs5.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]",A5:"A5.[mp3|ogg]","A#5":"As5.[mp3|ogg]",B1:"B1.[mp3|ogg]",B2:"B2.[mp3|ogg]",B3:"B3.[mp3|ogg]",B4:"B4.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]","C#5":"Cs5.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D5:"D5.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",E5:"E5.[mp3|ogg]"},harmonium:{C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]","C#5":"Cs5.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]",D5:"D5.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#3":"Gs3.[mp3|ogg]","G#4":"Gs4.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]","A#4":"As4.[mp3|ogg]"},harp:{C5:"C5.[mp3|ogg]",D2:"D2.[mp3|ogg]",D4:"D4.[mp3|ogg]",D6:"D6.[mp3|ogg]",D7:"D7.[mp3|ogg]",E1:"E1.[mp3|ogg]",E3:"E3.[mp3|ogg]",E5:"E5.[mp3|ogg]",F2:"F2.[mp3|ogg]",F4:"F4.[mp3|ogg]",F6:"F6.[mp3|ogg]",F7:"F7.[mp3|ogg]",G1:"G1.[mp3|ogg]",G3:"G3.[mp3|ogg]",G5:"G5.[mp3|ogg]",A2:"A2.[mp3|ogg]",A4:"A4.[mp3|ogg]",A6:"A6.[mp3|ogg]",B1:"B1.[mp3|ogg]",B3:"B3.[mp3|ogg]",B5:"B5.[mp3|ogg]",B6:"B6.[mp3|ogg]",C3:"C3.[mp3|ogg]"},organ:{C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]","D#4":"Ds4.[mp3|ogg]","D#5":"Ds5.[mp3|ogg]","F#1":"Fs1.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]","F#5":"Fs5.[mp3|ogg]",A1:"A1.[mp3|ogg]",A2:"A2.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]",A5:"A5.[mp3|ogg]",C1:"C1.[mp3|ogg]",C2:"C2.[mp3|ogg]"},piano:{A2:a.A2,A3:a.A3,A4:a.A4,A5:a.A5,A6:a.A6,"A#3":a["A#3"],"A#4":a["A#4"],"A#5":a["A#5"],"A#6":a["A#6"],B2:a.B2,B3:a.B3,B4:a.B4,B5:a.B5,B6:a.B6,C2:a.C2,C3:a.C3,C4:a.C4,C5:a.C5,C6:a.C6,C7:a.C7,"C#2":a["C#2"],"C#3":a["C#3"],"C#4":a["C#4"],"C#5":a["C#5"],"C#6":a["C#6"],D0:a.D0,D1:a.D1,D2:a.D2,D3:a.D3,D4:a.D4,D5:a.D5,D6:a.D6,"D#2":a["D#2"],"D#3":a["D#3"],"D#4":a["D#4"],"D#5":a["D#5"],"D#6":a["D#6"],E2:a.E2,E3:a.E3,E4:a.E4,E5:a.E5,E6:a.E6,F2:a.F2,F3:a.F3,F4:a.F4,F5:a.F5,F6:a.F6,"F#2":a["F#2"],"F#3":a["F#3"],"F#4":a["F#4"],"F#5":a["F#5"],"F#6":a["F#6"],G2:a.G2,G3:a.G3,G4:a.G4,G5:a.G5,G6:a.G6,"G#2":a["G#2"],"G#3":a["G#3"],"G#4":a["G#4"],"G#5":a["G#5"],"G#6":a["G#6"]},saxophone:{"D#4":"Ds4.[mp3|ogg]",E2:"E2.[mp3|ogg]",E3:"E3.[mp3|ogg]",E4:"E4.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]","F#2":"Fs2.[mp3|ogg]","F#3":"Fs3.[mp3|ogg]","F#4":"Fs4.[mp3|ogg]",G2:"G2.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","G#3":"Gs3.[mp3|ogg]","G#4":"Gs4.[mp3|ogg]",A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]","A#2":"As2.[mp3|ogg]","A#3":"As3.[mp3|ogg]",B2:"B2.[mp3|ogg]",B3:"B3.[mp3|ogg]",C3:"C3.[mp3|ogg]",C4:"C4.[mp3|ogg]","C#2":"Cs2.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]","C#4":"Cs4.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]"},trombone:{"A#2":"As2.[mp3|ogg]",C2:"C2.[mp3|ogg]",C3:"C3.[mp3|ogg]","C#1":"Cs1.[mp3|ogg]","C#3":"Cs3.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]","D#2":"Ds2.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]",F1:"F1.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]","G#1":"Gs1.[mp3|ogg]","G#2":"Gs2.[mp3|ogg]","A#0":"As0.[mp3|ogg]","A#1":"As1.[mp3|ogg]"},trumpet:{C5:"C5.[mp3|ogg]",D4:"D4.[mp3|ogg]","D#3":"Ds3.[mp3|ogg]",F2:"F2.[mp3|ogg]",F3:"F3.[mp3|ogg]",F4:"F4.[mp3|ogg]",G3:"G3.[mp3|ogg]",A2:"A2.[mp3|ogg]",A4:"A4.[mp3|ogg]","A#3":"As3.[mp3|ogg]",C3:"C3.[mp3|ogg]"},tuba:{"A#1":"As1.[mp3|ogg]","A#2":"As2.[mp3|ogg]",D2:"D2.[mp3|ogg]",D3:"D3.[mp3|ogg]","D#1":"Ds1.[mp3|ogg]",F0:"F0.[mp3|ogg]",F1:"F1.[mp3|ogg]",F2:"F2.[mp3|ogg]","A#0":"As0.[mp3|ogg]"},violin:{A3:"A3.[mp3|ogg]",A4:"A4.[mp3|ogg]",A5:"A5.[mp3|ogg]",A6:"A6.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]",C7:"C7.[mp3|ogg]",E4:"E4.[mp3|ogg]",E5:"E5.[mp3|ogg]",E6:"E6.[mp3|ogg]",G4:"G4.[mp3|ogg]",G5:"G5.[mp3|ogg]",G6:"G6.[mp3|ogg]"},xylophone:{C7:"C7.[mp3|ogg]",G3:"G3.[mp3|ogg]",G4:"G4.[mp3|ogg]",G5:"G5.[mp3|ogg]",G6:"G6.[mp3|ogg]",C4:"C4.[mp3|ogg]",C5:"C5.[mp3|ogg]",C6:"C6.[mp3|ogg]"}},C={total:15,tone:4,shapes:["muti","rect","cicle"],notes:["C","D","E","F","G","A","B"]};function l(g){var o=g.total,p=g.tone,m=g.notes,e=g.shapes,s=e.splice(0,1)[0],n=e.length,i=m.length,r=p-1;return Object(t.a)(Array(o)).map(function(g,o){var p=o%i==0?s:e[o%n],t=m[o%i];return t===m[0]&&r++,{shape:p,note:t+r,index:o}})}var A={name:"Keyboard",components:{Item:n},data:function(){return{hasTouchEvt:!1,list:l(C)}},created:function(){console.log("Init keyboard"),console.table(l(C))},mounted:function(){this.synth=c.load({instruments:"piano"}).toMaster()},methods:{play:function(g){this.synth.triggerAttackRelease(g,"1n")},tap:function(g,o){var p="touchstart"===o.type;if(p&&(this.hasTouchEvt=!0),!this.hasTouchEvt||p){var m=this.$refs["k_".concat(g.index)][0];m.classList.add("item--active"),setTimeout(function(){return m.classList.remove("item--active")},150),console.log(p?"tap":"click",g.note),this.play(g.note)}},sss:function(){console.log("move")}}},u=(p(113),Object(s.a)(A,function(){var g=this,o=g.$createElement,p=g._self._c||o;return p("div",{staticClass:"keyboard"},[p("ul",{staticClass:"container",on:{touchmove:g.sss}},g._l(g.list,function(o){return p("li",{ref:"k_"+o.index,refInFor:!0,staticClass:"item",on:{click:function(p){return g.tap(o,p)},touchstart:function(p){return p.stopPropagation(),g.tap(o,p)}}},[p("div",{staticClass:"item__content"},[p("Item",{attrs:{type:o.shape}})],1)])}),0),p("div",{staticClass:"pipline"})])},[],!1,null,null,null).exports),D=p(61),F={name:"app",components:{Keyboard:u},data:function(){return{innerHeight:0,innerWidth:0,version:D.version}},created:function(){this.fixOrientation(),window.addEventListener("resize",this.fixOrientation.bind(this),!1)},mounted:function(){},methods:{fixOrientation:function(){var g=screen.msOrientation||screen.mozOrientation||(screen.orientation||{}).type;"portrait-secondary"===g||"portrait-primary"===g?this.forceLandscape():this.autoOrientation()},forceLandscape:function(){this.innerHeight=window.innerWidth,this.innerWidth=window.innerHeight,console.log("force landscape")},autoOrientation:function(){var g=[window.innerHeight,window.innerWidth].sort();this.innerHeight=g[0],this.innerWidth=g[1],console.log("auto orientation")}}},G=(p(114),Object(s.a)(F,function(){var g=this.$createElement,o=this._self._c||g;return o("div",{style:{height:this.innerHeight+"px",width:this.innerWidth+"px"},attrs:{id:"app"}},[o("Keyboard"),o("span",{staticClass:"version"},[this._v("v"+this._s(this.version))])],1)},[],!1,null,null,null).exports);m.a.config.productionTip=!1,new m.a({render:function(g){return g(G)}}).$mount("#app")},25:function(g,o,p){},26:function(g,o,p){},27:function(g,o,p){},61:function(g){g.exports=JSON.parse('{"name":"sky-piano","version":"0.1.0","private":true,"author":"Vincent Lee <vv314@foxmail.com>","scripts":{"build":"marax build","test":"marax test","dev":"marax dev"},"dependencies":{"tone":"^13.4.9","vue":"^2.6.10"},"devDependencies":{"@mara/x":"^2.3.3","vue-template-compiler":"^2.6.10"},"eslintConfig":{"extends":"eslint-config-sinamfe"}}')},63:function(g,o,p){p(64),g.exports=p(115)}});