"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[51],{4051:function(e,o,a){a.r(o),a.d(o,{default:function(){return le}});var n=a(9439),t=a(1413),r=a(2791),l=a(3044),i=a(6151),c=a(4708),s=a(9497),d=a(4942),u=a(3366),m=a(7462),p=a(8182),h=a(4419),b=a(2930),f=a(890),v=a(4036),Z=a(6934),x=a(1402),g=a(5878),k=a(1217);function y(e){return(0,k.Z)("MuiFormControlLabel",e)}var P=(0,g.Z)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error"]),j=a(6147),w=a(184),C=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","slotProps","value"],S=(0,Z.ZP)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:function(e,o){var a=e.ownerState;return[(0,d.Z)({},"& .".concat(P.label),o.label),o.root,o["labelPlacement".concat((0,v.Z)(a.labelPlacement))]]}})((function(e){var o=e.theme,a=e.ownerState;return(0,m.Z)((0,d.Z)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16},"&.".concat(P.disabled),{cursor:"default"}),"start"===a.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===a.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===a.labelPlacement&&{flexDirection:"column",marginLeft:16},(0,d.Z)({},"& .".concat(P.label),(0,d.Z)({},"&.".concat(P.disabled),{color:(o.vars||o).palette.text.disabled})))})),F=r.forwardRef((function(e,o){var a,n=(0,x.Z)({props:e,name:"MuiFormControlLabel"}),t=n.className,l=n.componentsProps,i=void 0===l?{}:l,c=n.control,s=n.disabled,d=n.disableTypography,Z=n.label,g=n.labelPlacement,k=void 0===g?"end":g,P=n.slotProps,F=void 0===P?{}:P,R=(0,u.Z)(n,C),I=(0,b.Z)(),z=s;"undefined"===typeof z&&"undefined"!==typeof c.props.disabled&&(z=c.props.disabled),"undefined"===typeof z&&I&&(z=I.disabled);var B={disabled:z};["checked","name","onChange","value","inputRef"].forEach((function(e){"undefined"===typeof c.props[e]&&"undefined"!==typeof n[e]&&(B[e]=n[e])}));var N=(0,j.Z)({props:n,muiFormControl:I,states:["error"]}),L=(0,m.Z)({},n,{disabled:z,labelPlacement:k,error:N.error}),M=function(e){var o=e.classes,a=e.disabled,n=e.labelPlacement,t=e.error,r={root:["root",a&&"disabled","labelPlacement".concat((0,v.Z)(n)),t&&"error"],label:["label",a&&"disabled"]};return(0,h.Z)(r,y,o)}(L),D=null!=(a=F.typography)?a:i.typography,E=Z;return null==E||E.type===f.Z||d||(E=(0,w.jsx)(f.Z,(0,m.Z)({component:"span"},D,{className:(0,p.Z)(M.label,null==D?void 0:D.className),children:E}))),(0,w.jsxs)(S,(0,m.Z)({className:(0,p.Z)(M.root,t),ownerState:L,ref:o},R,{children:[r.cloneElement(c,B),E]}))})),R=a(2065),I=a(8744),z=a(3701);function B(e){return(0,k.Z)("PrivateSwitchBase",e)}(0,g.Z)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var N=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],L=(0,Z.ZP)(z.Z)((function(e){var o=e.ownerState;return(0,m.Z)({padding:9,borderRadius:"50%"},"start"===o.edge&&{marginLeft:"small"===o.size?-3:-12},"end"===o.edge&&{marginRight:"small"===o.size?-3:-12})})),M=(0,Z.ZP)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),D=r.forwardRef((function(e,o){var a=e.autoFocus,t=e.checked,r=e.checkedIcon,l=e.className,i=e.defaultChecked,c=e.disabled,s=e.disableFocusRipple,d=void 0!==s&&s,f=e.edge,Z=void 0!==f&&f,x=e.icon,g=e.id,k=e.inputProps,y=e.inputRef,P=e.name,j=e.onBlur,C=e.onChange,S=e.onFocus,F=e.readOnly,R=e.required,z=e.tabIndex,D=e.type,E=e.value,O=(0,u.Z)(e,N),q=(0,I.Z)({controlled:t,default:Boolean(i),name:"SwitchBase",state:"checked"}),H=(0,n.Z)(q,2),W=H[0],T=H[1],V=(0,b.Z)(),_=c;V&&"undefined"===typeof _&&(_=V.disabled);var A="checkbox"===D||"radio"===D,Y=(0,m.Z)({},e,{checked:W,disabled:_,disableFocusRipple:d,edge:Z}),U=function(e){var o=e.classes,a=e.checked,n=e.disabled,t=e.edge,r={root:["root",a&&"checked",n&&"disabled",t&&"edge".concat((0,v.Z)(t))],input:["input"]};return(0,h.Z)(r,B,o)}(Y);return(0,w.jsxs)(L,(0,m.Z)({component:"span",className:(0,p.Z)(U.root,l),centerRipple:!0,focusRipple:!d,disabled:_,tabIndex:null,role:void 0,onFocus:function(e){S&&S(e),V&&V.onFocus&&V.onFocus(e)},onBlur:function(e){j&&j(e),V&&V.onBlur&&V.onBlur(e)},ownerState:Y,ref:o},O,{children:[(0,w.jsx)(M,(0,m.Z)({autoFocus:a,checked:t,defaultChecked:i,className:U.input,disabled:_,id:A&&g,name:P,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var o=e.target.checked;T(o),C&&C(e,o)}},readOnly:F,ref:y,required:R,ownerState:Y,tabIndex:z,type:D},"checkbox"===D&&void 0===E?{}:{value:E},k)),W?r:x]}))})),E=a(9201),O=(0,E.Z)((0,w.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),q=(0,E.Z)((0,w.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),H=(0,E.Z)((0,w.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function W(e){return(0,k.Z)("MuiCheckbox",e)}var T=(0,g.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),V=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],_=(0,Z.ZP)(D,{shouldForwardProp:function(e){return(0,Z.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,o){var a=e.ownerState;return[o.root,a.indeterminate&&o.indeterminate,"default"!==a.color&&o["color".concat((0,v.Z)(a.color))]]}})((function(e){var o,a=e.theme,n=e.ownerState;return(0,m.Z)({color:(a.vars||a).palette.text.secondary},!n.disableRipple&&{"&:hover":{backgroundColor:a.vars?"rgba(".concat("default"===n.color?a.vars.palette.action.activeChannel:a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,R.Fq)("default"===n.color?a.palette.action.active:a.palette[n.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==n.color&&(o={},(0,d.Z)(o,"&.".concat(T.checked,", &.").concat(T.indeterminate),{color:(a.vars||a).palette[n.color].main}),(0,d.Z)(o,"&.".concat(T.disabled),{color:(a.vars||a).palette.action.disabled}),o))})),A=(0,w.jsx)(q,{}),Y=(0,w.jsx)(O,{}),U=(0,w.jsx)(H,{}),G=r.forwardRef((function(e,o){var a,n,t=(0,x.Z)({props:e,name:"MuiCheckbox"}),l=t.checkedIcon,i=void 0===l?A:l,c=t.color,s=void 0===c?"primary":c,d=t.icon,b=void 0===d?Y:d,f=t.indeterminate,Z=void 0!==f&&f,g=t.indeterminateIcon,k=void 0===g?U:g,y=t.inputProps,P=t.size,j=void 0===P?"medium":P,C=t.className,S=(0,u.Z)(t,V),F=Z?k:b,R=Z?k:i,I=(0,m.Z)({},t,{color:s,indeterminate:Z,size:j}),z=function(e){var o=e.classes,a=e.indeterminate,n=e.color,t={root:["root",a&&"indeterminate","color".concat((0,v.Z)(n))]},r=(0,h.Z)(t,W,o);return(0,m.Z)({},o,r)}(I);return(0,w.jsx)(_,(0,m.Z)({type:"checkbox",inputProps:(0,m.Z)({"data-indeterminate":Z},y),icon:r.cloneElement(F,{fontSize:null!=(a=F.props.fontSize)?a:j}),checkedIcon:r.cloneElement(R,{fontSize:null!=(n=R.props.fontSize)?n:j}),ownerState:I,ref:o,className:(0,p.Z)(z.root,C)},S,{classes:z}))})),J=a(533),K=a(1889),Q=a(4554),X=a(403),$=a(1614),ee=a(7107),oe=a(7012),ae=a(9434),ne=a(9360);function te(e){return(0,w.jsxs)(f.Z,(0,t.Z)((0,t.Z)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",(0,w.jsx)(J.Z,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]}))}var re=(0,ee.Z)();function le(){var e=(0,ae.I0)(),o=(0,r.useState)(""),a=(0,n.Z)(o,2),t=a[0],d=a[1],u=(0,r.useState)(""),m=(0,n.Z)(u,2),p=m[0],h=m[1],b=function(e){var o=e.target,a=o.name,n=o.value;switch(a){case"email":return d(n);case"password":return h(n);default:return}};return(0,w.jsx)(oe.Z,{theme:re,children:(0,w.jsxs)($.Z,{component:"main",maxWidth:"xs",children:[(0,w.jsx)(c.ZP,{}),(0,w.jsxs)(Q.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,w.jsx)(l.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,w.jsx)(X.Z,{})}),(0,w.jsx)(f.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,w.jsxs)(Q.Z,{component:"form",onSubmit:function(o){o.preventDefault(),e(ne.r5.logIn({email:t,password:p})),d(""),h("")},noValidate:!0,sx:{mt:1},children:[(0,w.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:t,onChange:b,autoFocus:!0}),(0,w.jsx)(s.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:p,autoComplete:"current-password",onChange:b}),(0,w.jsx)(F,{control:(0,w.jsx)(G,{value:"remember",color:"primary"}),label:"Remember me"}),(0,w.jsx)(i.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),(0,w.jsxs)(K.ZP,{container:!0,children:[(0,w.jsx)(K.ZP,{item:!0,xs:!0,children:(0,w.jsx)(J.Z,{href:"#",variant:"body2",children:"Forgot password?"})}),(0,w.jsx)(K.ZP,{item:!0,children:(0,w.jsx)(J.Z,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),(0,w.jsx)(te,{sx:{mt:8,mb:4}})]})})}}}]);
//# sourceMappingURL=51.d8a184e4.chunk.js.map