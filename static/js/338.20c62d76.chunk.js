"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[338],{2338:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(5744),i=t(6382),a=t(1686),s=t.n(a),o=t(9434),c=t(3634),l=function(e){return e.contacts.contacts.items},d=function(e){return e.contacts.contacts.isLoading},u=function(e){var n=l(e),t=function(e){return e.contacts.filter}(e);return n.filter((function(e){return e.name.toLowerCase().includes(t)}))},m=t(3329);var x=function(){var e=(0,o.I0)(),n=(0,o.v9)(l),t=r.Z.createTheme();return(0,m.jsxs)(r.Z.ThemeProvider,{theme:t,children:[(0,m.jsx)(r.Z.Typography,{variant:"h5",textAlign:"center",children:"Add contact"}),(0,m.jsxs)(r.Z.Container,{component:"main",maxWidth:"xs",children:[(0,m.jsx)(r.Z.CssBaseline,{}),(0,m.jsx)(r.Z.Box,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:(0,m.jsxs)(r.Z.Box,{component:"form",noValidate:!0,onSubmit:function(t){t.preventDefault();var r=t.target.elements.name.value;if(n.find((function(e){return e.name===r})))return s().Notify.warning('Name "'+r+'" already exists in the phone book'),void t.target.reset();var a=t.target.elements.number.value,o={id:(0,i.x0)(),name:r,number:a};e((0,c.uK)(o)),t.target.reset()},sx:{mt:3},children:[(0,m.jsxs)(r.Z.Grid,{container:!0,spacing:2,children:[(0,m.jsx)(r.Z.Grid,{item:!0,xs:12,children:(0,m.jsx)(r.Z.TextField,{required:!0,fullWidth:!0,id:"name",type:"text",name:"name",label:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",autoComplete:"email"})}),(0,m.jsx)(r.Z.Grid,{item:!0,xs:12,children:(0,m.jsx)(r.Z.TextField,{required:!0,fullWidth:!0,id:"tel",type:"tel",name:"number",label:"Phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",autoComplete:"new-password"})})]}),(0,m.jsx)(r.Z.Button,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add"})]})})]})]})};var h=function(e){var n=e.name,t=e.number,i=e.id,a=(0,o.I0)();return(0,m.jsx)(r.Z.Box,{sx:{display:"flex",flexWrap:"wrap","& > :not(style)":{m:1,height:128,padding:2}},children:(0,m.jsxs)(r.Z.Paper,{elevation:6,children:[(0,m.jsx)(r.Z.Typography,{component:"h1",variant:"h5",align:"center",children:n}),(0,m.jsx)(r.Z.Typography,{component:"p",align:"center",children:t}),(0,m.jsx)(r.Z.Button,{variant:"outlined",onClick:function(){a((0,c.GK)(i))},children:"Delete"})]})})};var p=function(){var e=(0,o.v9)(u);return(0,m.jsx)(r.Z.Grid,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:e.map((function(e){var n=e.name,t=e.id,r=e.number;return(0,m.jsx)(h,{id:t,number:r,name:n},t)}))})},f=t(4808);var j=function(){var e=(0,o.I0)();return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(r.Z.Box,{mt:3,children:(0,m.jsx)(r.Z.TextField,{fullWidth:!0,id:"filter",type:"text",name:"filter",label:"Find contacts",onChange:function(n){e((0,f.T)(n.target.value.toLowerCase().trim()))}})})})},v=t(2791);function Z(){var e=(0,o.I0)(),n=(0,o.v9)(d);return(0,v.useEffect)((function(){e((0,c.yF)())}),[e]),(0,m.jsx)("div",{children:(0,m.jsx)(r.Z.Box,{sx:{flexGrow:1},children:(0,m.jsxs)(r.Z.Grid,{container:!0,spacing:2,columns:16,children:[(0,m.jsxs)(r.Z.Grid,{item:!0,xs:5,children:[(0,m.jsx)(x,{}),(0,m.jsx)(j,{})]}),(0,m.jsxs)(r.Z.Grid,{item:!0,xs:8,children:[(0,m.jsx)(p,{}),n&&(0,m.jsx)("p",{children:"Loading..."})]})]})})})}}}]);
//# sourceMappingURL=338.20c62d76.chunk.js.map