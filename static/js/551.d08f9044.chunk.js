(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[551],{7551:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return S}});var r,o,a,i,s,u,c=t(1413),p=t(9434),l=t(45),f=t(4834),d=t(6429),x=t.n(d),h=t(4942),m=t(9439),g=t(2791),b=t(2007),v=t(168),y=t(7691),w=y.ZP.input(r||(r=(0,v.Z)(["\n  background-color: #af7b7b;\n  /* border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */\n  width: 300px;\n  padding: 10px;\n  outline: none;\n  border: none;\n\n  margin-bottom: 10px;\n"]))),j=y.ZP.label(o||(o=(0,v.Z)(["\n  font-weight: 700;\n  font-size: 20px;\n  margin-bottom: 10px;\n  color: #272424;\n"]))),Z=y.ZP.button(a||(a=(0,v.Z)(["\n  background-color: orange;\n  border: none;\n  /* border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */\n\n  color: #100f0f;\n  font-weight: 700;\n  font-size: 20px;\n  padding: 10px;\n  width: 320px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n\n  cursor: pointer;\n  &:hover,\n  &:active {\n    background-color: #a3125f;\n  }\n"]))),k=y.ZP.form(i||(i=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  /* justify-content: center; */\n  /* align-items: center; */\n"]))),C=t(2561),P=t(184);function T(n){n.onSubmitForm;var e=(0,g.useState)({name:"",number:""}),t=(0,m.Z)(e,2),r=t[0],o=t[1],a=(0,p.I0)(),i=function(n){var e=n.currentTarget,t=e.value,r=e.name;o((function(n){return(0,c.Z)((0,c.Z)({},n),{},(0,h.Z)({},r,t))}))};return(0,P.jsxs)(k,{onSubmit:function(n){n.preventDefault();var e=r.name,t=r.number;a((0,C.uK)({name:e,number:t})),o({name:"",number:""})},children:[(0,P.jsx)(j,{children:"Name"}),(0,P.jsx)(w,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:i,value:r.name}),(0,P.jsx)(j,{children:"Number"}),(0,P.jsx)(w,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:i,value:r.number}),(0,P.jsx)(Z,{type:"submit",children:"Add contact"})]})}T.propType={onSubmitForm:b.PropTypes.func.isRequired,contacts:b.PropTypes.arrayOf(b.PropTypes.shape({id:b.PropTypes.string.isRequired,name:b.PropTypes.string.isRequired,number:b.PropTypes.string.isRequired}))};var R,_,q=y.ZP.button(s||(s=(0,v.Z)(["\n  background-color: #a3125f;\n  border: none;\n  /* border-radius: 6px; */\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n\n  color: white;\n  font-weight: 700;\n  font-size: 15px;\n  padding: 10px;\n  margin-left: 15px;\n  cursor: pointer;\n  &:hover,\n  &:active {\n    background-color: orange;\n  }\n"]))),O=y.ZP.li(u||(u=(0,v.Z)(["\n  background-color: #5c0a4995;\n  color: white;\n  padding: 0px 15px 0px 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  /* flex-direction: column; */\n  width: 340px;\n  height: 60px;\n  font-weight: 500;\n  font-size: 18px;\n"]))),z=function(n){var e=n.contacts,t=n.onDeleteContact;return(0,P.jsx)(f.x,{as:"ul",display:"flex",flexWrap:"wrap",justifyContent:"center",alignContent:"flex-start",ml:45,gridGap:10,children:e.map((function(n){var e=n.id,r=n.name,o=n.number;return(0,P.jsxs)(O,{children:[r,": ",o,(0,P.jsx)(q,{type:"button",onClick:function(){return t(e)},children:"Delete"})]},e)}))})},E=y.ZP.input(R||(R=(0,v.Z)(["\n  background-color: #884f4f;\n  /* border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */\n  width: 300px;\n  padding: 10px;\n  outline: none;\n  border: none;\n  margin-top: 10px;\n"]))),A=y.ZP.label(_||(_=(0,v.Z)(["\n  font-weight: 700;\n  font-size: 20px;\n  color: #1d1a1a;\n"]))),D=function(n){var e=n.value,t=n.onChange;return(0,P.jsxs)(f.x,{as:"div",flexDirection:"column",children:[(0,P.jsxs)(A,{htmlFor:"",children:["Filter"," "]}),(0,P.jsx)(E,{type:"text",value:e,onChange:t})]})};function S(){var n=(0,p.I0)(),e=(0,p.v9)(l.kk),t=(0,p.v9)(l.xQ),r=(0,p.v9)(l.by),o=(0,p.v9)(l.zK);(0,g.useEffect)((function(){n((0,C.yF)())}),[n]);var a=e.filter((function(n){return n.name.toLowerCase().includes(o.toLowerCase())}));return(0,P.jsxs)(f.x,{as:"div",p:15,children:[(0,P.jsx)(f.x,{as:"h1",color:"white",textAlign:"center",children:"PhoneBook:"}),(0,P.jsxs)(f.x,{as:"div",display:"flex",alignItems:"center",children:[(0,P.jsxs)(f.x,{as:"div",display:"flex",flexDirection:"column",width:320,children:[(0,P.jsx)(T,{onSubmitForm:function(t){var r={id:x().generate(),name:t.name,number:t.number};e.forEach((function(n){return e.push(n.name)})),[].includes(r.name)?alert("".concat(r.name," is already in contacts.")):n((0,C.uK)((0,c.Z)({data:t},r)))},contacts:a}),(0,P.jsx)(D,{value:o,onChange:function(e){n((0,l.Qt)(e.currentTarget.value))}})]}),t&&!r&&(0,P.jsx)("b",{children:"Request in progress..."}),(0,P.jsx)(z,{contacts:a,onDeleteContact:function(e){n((0,C.GK)(e))}})]})]})}},888:function(n,e,t){"use strict";var r=t(9047);function o(){}function a(){}a.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:a,resetWarningCache:o};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6429:function(n,e,t){"use strict";n.exports=t(5274)},8857:function(n,e,t){"use strict";var r,o,a,i=t(5408),s="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function u(){a=!1}function c(n){if(n){if(n!==r){if(n.length!==s.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. You submitted "+n.length+" characters: "+n);var e=n.split("").filter((function(n,e,t){return e!==t.lastIndexOf(n)}));if(e.length)throw new Error("Custom alphabet for shortid must be "+s.length+" unique characters. These characters were not unique: "+e.join(", "));r=n,u()}}else r!==s&&(r=s,u())}function p(){return a||(a=function(){r||c(s);for(var n,e=r.split(""),t=[],o=i.nextValue();e.length>0;)o=i.nextValue(),n=Math.floor(o*e.length),t.push(e.splice(n,1)[0]);return t.join("")}())}n.exports={get:function(){return r||s},characters:function(n){return c(n),r},seed:function(n){i.seed(n),o!==n&&(u(),o=n)},lookup:function(n){return p()[n]},shuffled:p}},7098:function(n,e,t){"use strict";var r,o,a=t(2226);t(8857);n.exports=function(n){var e="",t=Math.floor(.001*(Date.now()-1567752802062));return t===o?r++:(r=0,o=t),e+=a(7),e+=a(n),r>0&&(e+=a(r)),e+=a(t)}},2226:function(n,e,t){"use strict";var r=t(8857),o=t(9139),a=t(2483);n.exports=function(n){for(var e,t=0,i="";!e;)i+=a(o,r.get(),1),e=n<Math.pow(16,t+1),t++;return i}},5274:function(n,e,t){"use strict";var r=t(8857),o=t(7098),a=t(6046),i=t(5347)||0;function s(){return o(i)}n.exports=s,n.exports.generate=s,n.exports.seed=function(e){return r.seed(e),n.exports},n.exports.worker=function(e){return i=e,n.exports},n.exports.characters=function(n){return void 0!==n&&r.characters(n),r.shuffled()},n.exports.isValid=a},6046:function(n,e,t){"use strict";var r=t(8857);n.exports=function(n){return!(!n||"string"!==typeof n||n.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(n)}},9139:function(n){"use strict";var e,t="object"===typeof window&&(window.crypto||window.msCrypto);e=t&&t.getRandomValues?function(n){return t.getRandomValues(new Uint8Array(n))}:function(n){for(var e=[],t=0;t<n;t++)e.push(Math.floor(256*Math.random()));return e},n.exports=e},5408:function(n){"use strict";var e=1;n.exports={nextValue:function(){return(e=(9301*e+49297)%233280)/233280},seed:function(n){e=n}}},5347:function(n){"use strict";n.exports=0},2483:function(n){n.exports=function(n,e,t){for(var r=(2<<Math.log(e.length-1)/Math.LN2)-1,o=-~(1.6*r*t/e.length),a="";;)for(var i=n(o),s=o;s--;)if((a+=e[i[s]&r]||"").length===+t)return a}}}]);
//# sourceMappingURL=551.d08f9044.chunk.js.map