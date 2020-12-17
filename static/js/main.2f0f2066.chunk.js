(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(1),n=a.n(s),o=a(8),i=a.n(o),c=(a(14),a(3)),d=a(4),p=a(2),l=a(6),m=a(5),u=(a(15),[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}]),h=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],k=["#FF6633","#FFB399","#FF33FF","#FFFF99","#00B3E6","#E6B333","#3366E6","#999966","#99FF99","#B34D4D","#80B300","#809900","#E6B3B3","#6680B3","#66991A","#FF99E6","#CCFF1A","#FF1A66","#E6331A","#33FFCC","#66994D","#B366CC","#4D8000","#B33300","#CC80CC","#66664D","#991AFF","#E666FF","#4DB3FF","#1AB399","#E666B3","#33991A","#CC9999","#B3B31A","#00E680","#4D8066","#809980","#E6FF80","#1AFF33","#999933","#FF3380","#CCCC00","#66E64D","#4D80CC","#9900B3","#E64D66","#4DB380","#FF4D4D","#99E6E6","#6666FF"],y={backgroundColor:"whitesmoke",boxShadow:"7.5px 10px 10px blue"},C={color:"rgb(0, 255, 0)"},g={color:"red"},f={flexDirection:"row"},b={flexDirection:"row-reverse"},j=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={powerOn:!0,powerStyle:C,currentBank:u,bankState:f,displayText:"",padStyle:y,volume:50},r.handleChange=r.handleChange.bind(Object(p.a)(r)),r.changeCurrentBank=r.changeCurrentBank.bind(Object(p.a)(r)),r.powerOnOff=r.powerOnOff.bind(Object(p.a)(r)),r}return Object(d.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleChange)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleChange)}},{key:"handleChange",value:function(e){var t=this,a=50;if(void 0!=e.target.value&&(a=e.target.value,this.setState({volume:a,displayText:"Volume: "+this.state.volume})),this.state.powerOn){var r="";void 0!=e.target.attributes.keycode&&(r=e.target.attributes.keycode.value),this.state.currentBank.filter((function(a){var s=a.id.replace(/-/g," ");a.keyCode!==e.keyCode&&a.keyCode!==+r||(t.setState({displayText:s}),t.playAudio(a))}))}}},{key:"playAudio",value:function(e){var t=document.getElementById(e.keyTrigger);t.currentTime=0,t.volume=this.state.volume/100,t.play();var a=document.getElementById(e.id);a.style.backgroundColor=k[Math.floor(50*Math.random())],setTimeout((function(){a.style.backgroundColor="whitesmoke"}),500)}},{key:"powerOnOff",value:function(){this.setState({powerOn:!this.state.powerOn}),this.state.powerOn?this.setState({powerStyle:g,displayText:"Power Off"}):this.setState({powerStyle:C,displayText:"Power On"})}},{key:"changeCurrentBank",value:function(){this.state.currentBank===u?this.setState({currentBank:h,bankState:b,displayText:"Piano Kit"}):this.setState({currentBank:u,bankState:f,displayText:"Heater Kit"})}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"container-fluid container",id:"drum-machine",children:[Object(r.jsx)(O,{currentBank:this.state.currentBank,handler:this.handleChange,padStyle:this.state.padStyle,powerOn:this.state.powerOn}),Object(r.jsx)(w,{displayText:this.state.displayText,bankState:this.state.bankState,bankHandler:this.changeCurrentBank,powerSwitch:this.state.powerStyle,powerHandler:this.powerOnOff,hanleChange:this.handleChange})]})})}}]),a}(n.a.Component),O=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(r.jsx)("div",{className:"Pads",children:Object(r.jsx)("div",{className:"pad-bank",children:this.props.currentBank.map((function(t){return e.props.powerOn?Object(r.jsxs)("div",{className:"drum-pad",id:t.id,keycode:t.keyCode,onClick:e.props.handler,style:e.props.padStyle,children:[Object(r.jsx)("audio",{className:"clip",id:t.keyTrigger,src:t.url}),t.keyTrigger]},t.id):Object(r.jsxs)("div",{className:"drum-pad",id:t.id,keycode:t.keyCode,onClick:e.props.handler,style:e.props.padStyle,children:[Object(r.jsx)("audio",{className:"clip",id:t.keyTrigger,src:""}),t.keyTrigger]},t.id)}))})})}}]),a}(n.a.Component),w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"tools",children:[Object(r.jsx)("i",{className:"fa fa-power-off power",style:this.props.powerSwitch,onClick:this.props.powerHandler}),Object(r.jsx)("span",{id:"display",children:Object(r.jsx)("p",{children:this.props.displayText})}),Object(r.jsx)("div",{className:"volume",children:Object(r.jsx)("input",{type:"range",onChange:this.props.hanleChange})}),Object(r.jsxs)("div",{className:"kit-switcher",children:[Object(r.jsx)("p",{style:{color:"white"},children:"Kit Switcher"}),Object(r.jsx)("div",{className:"instruments",style:this.props.bankState,onClick:this.props.bankHandler,children:Object(r.jsx)("span",{className:"switcher"})})]})]})}}]),a}(n.a.Component),v=j,F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),r(e),s(e),n(e),o(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),F()}},[[16,1,2]]]);
//# sourceMappingURL=main.2f0f2066.chunk.js.map