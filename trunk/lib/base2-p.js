var base2={name:"base2",version:"1.0 (beta 1)",exports:"Base, Package, Abstract, Module, Enumerable, Map, Collection, RegGrp, "+"assert, assertArity, assertType, assignID, base, copy, detect, extend, "+"forEach, format, instanceOf, match, rescape, slice, trim, typeOf, "+"I, K, Undefined, Null, True, False, bind, delegate, flip, not, partial, unbind",global:this,detect:new function(_){var global=_;var jscript/*@cc_on=@_jscript_version@*/;var java=_.java?true:false;if(_.navigator){var element=document.createElement("span");var userAgent=navigator.platform+" "+navigator.userAgent.replace(/([a-z])[\s\/](\d)/gi,"$1$2");if(!jscript)userAgent=userAgent.replace(/MSIE[\d.]+/,"");java&=navigator.javaEnabled();}return function(a){var r=false;var b=a.charAt(0)=="!";if(b)a=a.slice(1);if(a.charAt(0)=="("){try{eval("r=!!"+a);}catch(error){}}else{r=new RegExp("("+a+")","i").test(userAgent);}return!!(b^r);};}(this)};new function(_){var _0="var global=base2.global;function base(o,a){return o.base.apply(o,a)};";eval(_0);var detect=base2.detect;var Undefined=K(),Null=K(null),True=K(true),False=K(false);var _1=/%([1-9])/g;var _2=/^\s\s*/;var _3=/\s\s*$/;var _4=/([\/()[\]{}|*+-.,^$?\\])/g;var _5=/eval/.test(detect)?/\bbase\s*\(/:/.*/;var _6=["constructor","toString","valueOf"];var _7=detect("(jscript)")?new RegExp("^"+rescape(isNaN).replace(/isNaN/,"\\w+")+"$"):{test:False};var _8=1;var _9=Array.prototype.slice;var slice=Array.slice||function(a){return _9.apply(a,_9.call(arguments,1));};_10();var _11=function(a,b){base2.__prototyping=true;var c=new this;extend(c,a);delete base2.__prototyping;var d=c.constructor;function _12(){if(!base2.__prototyping){if(this.constructor==arguments.callee||this.__constructing){this.__constructing=true;d.apply(this,arguments);delete this.__constructing;}else{return extend(arguments[0],c);}}return this;};c.constructor=_12;for(var i in Base)_12[i]=this[i];_12.toString=K(String(d));_12.ancestor=this;_12.base=Undefined;_12.init=Undefined;extend(_12,b);_12.prototype=c;_12.init();return _12;};var Base=_11.call(Object,{constructor:function(){if(arguments.length>0){this.extend(arguments[0]);}},base:function(){},extend:delegate(extend)},Base={ancestorOf:delegate(_13),extend:_11,forEach:delegate(_10),implement:function(a){if(typeof a=="function"){if(_13(Base,a)){a(this.prototype);}}else{extend(this.prototype,a);}return this;}});var Package=Base.extend({constructor:function(d,e){this.extend(e);if(this.init)this.init();if(this.name!="base2"){if(!this.parent)this.parent=base2;this.parent.addName(this.name,this);this.namespace=format("var %1=%2;",this.name,String(this).slice(1,-1));}var f=/[^\s,]+/g;if(d){d.imports=Array2.reduce(this.imports.match(f),function(a,b){eval("var ns=base2."+b);assert(ns,format("Package not found: '%1'.",b));return a+=ns.namespace;},_0+base2.namespace+JavaScript.namespace);d.exports=Array2.reduce(this.exports.match(f),function(a,b){var c=this.name+"."+b;this.namespace+="var "+b+"="+c+";";return a+="if(!"+c+")"+c+"="+b+";";},"",this)}},exports:"",imports:"",name:"",namespace:"",parent:null,addName:function(a,b){if(!this[a]){this[a]=b;this.exports+=", "+a;this.namespace+=format("var %1=%2.%1;",a,this.name)}},addPackage:function(a){this.addName(a,new Package(null,{name:a,parent:this}));},toString:function(){return format("[%1]",this.parent?String(this.parent).slice(1,-1)+"."+this.name:this.name);}});var Abstract=Base.extend({constructor:function(){throw new TypeError("Class cannot be instantiated.");}});var Module=Abstract.extend(null,{extend:function(a,b){var c=this.base();_14(c,this);c.implement(a);extend(c,b);c.init();return c;},implement:function(d){var e=this;if(typeof d=="function"){e.base(d);if(_13(Module,d)){_14(e,d)}}else{var f={};_10(Object,d,function(b,c){if(c.charAt(0)=="@"){if(detect(c.slice(1))){forEach(b,arguments.callee);}}else if(!Module[c]&&typeof b=="function"&&b.call){function _15(){var a=_9.call(arguments);a.unshift(this);return e[c].apply(e,a);};_15.__base=_5.test(b);f[c]=_15}});extend(e.prototype,f);extend(e,d);}return e;}});function _14(a,b){for(var c in b){var method=b[c];if(!Module[c]&&typeof method=="function"&&method.call){a[c]=method;}}};var Enumerable=Module.extend({every:function(c,d,e){var f=true;try{this.forEach(c,function(a,b){f=d.call(e,a,b,c);if(!f)throw StopIteration;})}catch(error){if(error!=StopIteration)throw error;}return!!f;},filter:function(d,e,f){var i=0;return this.reduce(d,function(a,b,c){if(e.call(f,b,c,d)){a[i++]=b;}return a;},[])},invoke:function(b,c){var d=_9.call(arguments,2);return this.map(b,(typeof c=="function")?function(a){return(a==null)?undefined:c.apply(a,d);}:function(a){return(a==null)?undefined:a[c].apply(a,d);});},map:function(c,d,e){var f=[],i=0;this.forEach(c,function(a,b){f[i++]=d.call(e,a,b,c);});return f;},pluck:function(b,c){return this.map(b,function(a){return(a==null)?undefined:a[c];});},reduce:function(c,d,e,f){var g=arguments.length>2;this.forEach(c,function(a,b){if(g){e=d.call(f,e,a,b,c);}else{e=a;g=true;}});return e},some:function(a,b,c){return!this.every(a,not(b),c);}},{forEach:forEach});var _16="#";var Map=Base.extend({constructor:function(a){this.merge(a);},copy:delegate(copy),forEach:function(a,b){for(var c in this)if(c.charAt(0)==_16){a.call(b,this[c],c.slice(1),this);}},get:function(a){return this[_16+a]},getKeys:function(){return this.map(flip(I));},getValues:function(){return this.map(I);},has:function(a){/*@cc_on@*//*@if(@_jscript_version<5.5)return $Legacy.has(this,_16+a);@else@*/return _16+a in this;/*@end@*/},merge:function(b){var c=flip(this.put);forEach(arguments,function(a){forEach(a,c,this);},this);return this},remove:function(a){delete this[_16+a];},put:function(a,b){if(arguments.length==1)b=a;this[_16+a]=b;},size:function(){var a=0;for(var b in this)if(b.charAt(0)==_16)a++;return a;},union:function(a){return this.merge.apply(this.copy(),arguments);}});Map.implement(Enumerable);var _17="~";var Collection=Map.extend({constructor:function(a){this[_17]=new Array2;this.base(a);},add:function(a,b){assert(!this.has(a),"Duplicate key '"+a+"'.");this.put.apply(this,arguments);},copy:function(){var a=this.base();a[_17]=this[_17].copy();return a;},forEach:function(a,b){var c=this[_17];var d=c.length;for(var i=0;i<d;i++){a.call(b,this[_16+c[i]],c[i],this);}},getAt:function(a){if(a<0)a+=this[_17].length;var b=this[_17][a];return(b===undefined)?undefined:this[_16+b]},getKeys:function(){return this[_17].concat();},indexOf:function(a){return this[_17].indexOf(String(a));},insertAt:function(a,b,c){assert(Math.abs(a)<this[_17].length,"Index out of bounds.");assert(!this.has(b),"Duplicate key '"+b+"'.");this[_17].insertAt(a,String(b));this.put.apply(this,_9.call(arguments,1));},item:Undefined,put:function(a,b){if(arguments.length==1)b=a;if(!this.has(a)){this[_17].push(String(a));}var c=this.constructor;if(c.Item&&!instanceOf(b,c.Item)){b=c.create.apply(c,arguments);}this[_16+a]=b;},putAt:function(a,b){assert(Math.abs(a)<this[_17].length,"Index out of bounds.");arguments[0]=this[_17].item(a);this.put.apply(this,arguments)},remove:function(a){if(this.has(a)){this[_17].remove(String(a));delete this[_16+a];}},removeAt:function(a){this[_17].removeAt(a);delete this[_16+key];},reverse:function(){this[_17].reverse();return this;},size:function(){return this[_17].length},sort:function(c){if(c){var d=this;this[_17].sort(function(a,b){return c(d[_16+a],d[_16+b],a,b);})}else this[_17].sort();return this;},toString:function(){return String(this[_17]);}},{Item:null,init:function(){this.prototype.item=this.prototype.getAt;},create:function(a,b){return this.Item?new this.Item(a,b):b;},extend:function(a,b){var c=this.base(a);c.create=this.create;extend(c,b);if(!c.Item){c.Item=this.Item;}else if(typeof c.Item!="function"){c.Item=(this.Item||Base).extend(c.Item);}c.init();return c}});var _18=/\\(\d+)/g,_19=/\\./g,_20=/\(\?[:=!]|\[[^\]]+\]/g,_21=/\(/g,_22=/\$(\d+)/,_23=/^\$\d+$/;var RegGrp=Collection.extend({constructor:function(a,b){this.base(a);if(typeof b=="string"){this.global=/g/.test(b);this.ignoreCase=/i/.test(b)}},global:true,ignoreCase:false,exec:function(h,j){var k=(this.global?"g":"")+(this.ignoreCase?"i":"");h=String(h)+"";if(arguments.length==1){var l=this;var m=this[_17];j=function(a){if(a){var b,c=1,i=0;while((b=l[_16+m[i++]])){var d=c+b.length+1;if(arguments[c]){var e=b.replacement;switch(typeof e){case"function":var f=_9.call(arguments,c,d);var g=arguments[arguments.length-2];return e.apply(l,f.concat(g,h));case"number":return arguments[c+e];default:return e}}c=d}}return""}}return h.replace(new RegExp(this,k),j);},insertAt:function(a,b,c){if(instanceOf(b,RegExp)){arguments[1]=b.source;}return base(this,arguments)},test:function(a){return this.exec(a)!=a;},toString:function(){var e=0;return"("+this.map(function(c){var d=String(c).replace(_18,function(a,b){return"\\"+(1+Number(b)+e);});e+=c.length+1;return d;}).join(")|(")+")";}},{IGNORE:"$0",init:function(){forEach("add,get,has,put,remove".split(","),function(b){_24(this,b,function(a){if(instanceOf(a,RegExp)){arguments[0]=a.source;}return base(this,arguments)})},this.prototype)},Item:{constructor:function(a,b){if(typeof b=="number")b=String(b);else if(b==null)b="";if(typeof b=="string"&&_22.test(b)){if(_23.test(b)){b=parseInt(b.slice(1));}else{var Q=/'/.test(b.replace(/\\./g,""))?'"':"'";b=b.replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\$(\d+)/g,Q+"+(arguments[$1]||"+Q+Q+")+"+Q);b=new Function("return "+Q+b.replace(/(['"])\1\+(.*)\+\1\1$/,"$1")+Q);}}this.length=RegGrp.count(a);this.replacement=b;this.toString=K(String(a))},length:0,replacement:""},count:function(a){a=String(a).replace(_19,"").replace(_20,"");return match(a,_21).length;}});var JavaScript={name:"JavaScript",version:base2.version,exports:"Array2, Date2, String2",namespace:"",bind:function(c){forEach(this.exports.match(/\w+/g),function(a){var b=a.slice(0,-1);extend(c[b],this[a]);this[a](c[b].prototype)},this);return this}};if((new Date).getYear()>1900){Date.prototype.getYear=function(){return this.getFullYear()-1900;};Date.prototype.setYear=function(a){return this.setFullYear(a+1900);};}Function.prototype.prototype={};if("".replace(/^/,K("$$"))=="$"){extend(String.prototype,"replace",function(a,b){if(typeof b=="function"){var c=b;b=function(){return String(c.apply(null,arguments)).split("$").join("$$");};}return this.base(a,b)})}var Array2=_25(Array,Array,"concat,join,pop,push,reverse,shift,slice,sort,splice,unshift",[Enumerable,{combine:function(d,e){if(!e)e=d;return this.reduce(d,function(a,b,c){a[b]=e[c];return a;},{})},contains:function(a,b){return this.indexOf(a,b)!=-1;},copy:function(a){var b=_9.call(a);if(!b.swap)this(b);return b;},flatten:function(c){var d=0;return this.reduce(c,function(a,b){if(this.like(b)){this.reduce(b,arguments.callee,a,this);}else{a[d++]=b;}return a;},[],this)},forEach:_26,indexOf:function(a,b,c){var d=a.length;if(c==null){c=0;}else if(c<0){c=Math.max(0,d+c);}for(var i=c;i<d;i++){if(a[i]===b)return i;}return-1;},insertAt:function(a,b,c){this.splice(a,b,0,c);return c;},item:function(a,b){if(b<0)b+=a.length;return a[b];},lastIndexOf:function(a,b,c){var d=a.length;if(c==null){c=d-1;}else if(from<0){c=Math.max(0,d+c);}for(var i=c;i>=0;i--){if(a[i]===b)return i;}return-1;},map:function(c,d,e){var f=[];this.forEach(c,function(a,b){f[b]=d.call(e,a,b,c);});return f;},remove:function(a,b){var c=this.indexOf(a,b);if(c!=-1)this.removeAt(a,c);return b;},removeAt:function(a,b){return this.splice(a,b,1);},swap:function(a,b,c){if(b<0)b+=a.length;if(c<0)c+=a.length;var d=a[b];a[b]=a[c];a[c]=d;return a}}]);Array2.reduce=Enumerable.reduce;Array2.like=function(a){return!!(a&&typeof a=="object"&&typeof a.length=="number");};var _27=/^((-\d+|\d{4,})(-(\d{2})(-(\d{2}))?)?)?T((\d{2})(:(\d{2})(:(\d{2})(\.(\d{1,3})(\d)?\d*)?)?)?)?(([+-])(\d{2})(:(\d{2}))?|Z)?$/;var _28={FullYear:2,Month:4,Date:6,Hours:8,Minutes:10,Seconds:12,Milliseconds:14};var _29={Hectomicroseconds:15,UTC:16,Sign:17,Hours:18,Minutes:20};var _30=/(((00)?:0+)?:0+)?\.0+$/;var _31=/(T[0-9:.]+)$/;var Date2=_25(Date,function(a,b,c,h,m,s,d){switch(arguments.length){case 0:return new Date;case 1:return new Date(a);default:return new Date(a,b,arguments.length==2?1:c,h||0,m||0,s||0,d||0)}},"",[{toISOString:function(c){var d="####-##-##T##:##:##.###";for(var e in _28){d=d.replace(/#+/,function(a){var b=c["getUTC"+e]();if(e=="Month")b++;return("000"+b).slice(-a.length);});}return d.replace(_30,"").replace(_31,"$1Z");}}]);Date2.now=function(){return(new Date).valueOf();};Date2.parse=function(a,b){if(arguments.length>1){assertType(b,"number","defaultDate should be of type 'number'.")}var c=String(a).match(_27);if(c){if(c[_28.Month])c[_28.Month]--;if(c[_29.Hectomicroseconds]>=5)c[_28.Milliseconds]++;var d=new Date(b||0);var e=c[_29.UTC]||c[_29.Hours]?"UTC":"";for(var f in _28){var value=c[_28[f]];if(!value)continue;d["set"+e+f](value);if(d["get"+e+f]()!=c[_28[f]]){return NaN}}if(c[_29.Hours]){var g=Number(c[_29.Sign]+c[_29.Hours]);var h=Number(c[_29.Sign]+(c[_29.Minutes]||0));d.setUTCMinutes(d.getUTCMinutes()+(g*60)+h);}return d.valueOf();}else{return Date.parse(a)}};var String2=_25(String,function(a){return new String(arguments.length==0?"":a);},"charAt,charCodeAt,concat,indexOf,lastIndexOf,match,replace,search,slice,split,substr,substring,toLowerCase,toUpperCase",[{trim:trim}]);function _25(c,d,e,f){var g=Module.extend();forEach(e.match(/\w+/g),function(a){g[a]=unbind(c.prototype[a]);});forEach(f,g.implement,g);var h=function(){return g(this.constructor==g?d.apply(null,arguments):arguments[0]);};h.prototype=g.prototype;forEach(g,function(a,b){if(c[b]){g[b]=c[b];delete g.prototype[b];}h[b]=g[b];});h.ancestor=Object;delete h.extend;if(c!=Array)delete h.forEach;return h;};function extend(a,b){if(a&&b){if(arguments.length>2){var c=b;b={};b[c]=arguments[2];}var d=(typeof b=="function"?Function:Object).prototype;var i=_6.length,c;if(base2.__prototyping){while(c=_6[--i]){var f=b[c];if(f!=d[c]){if(_5.test(f)){_24(a,c,f)}else{a[c]=f;}}}}for(c in b){if(d[c]===undefined){var f=b[c];if(c.charAt(0)=="@"){if(detect(c.slice(1)))arguments.callee(a,f);continue;}var h=a[c];if(h&&typeof f=="function"){if(f!=h&&(!h.method||!_13(f,h))){if(f.__base||_5.test(f)){_24(a,c,f);}else{a[c]=f;}}}else{a[c]=f;}}}}return a;};function _13(a,b){while(b){if(!b.ancestor)return false;b=b.ancestor;if(b==a)return true}return false};function _24(c,d,e){var f=c[d];function _32(){var a=this.base;this.base=f;var b=e.apply(this,arguments);this.base=a;return b};_32.ancestor=f;_32.method=e;_32.toString=function(){return String(e);};c[d]=_32;};if(typeof StopIteration=="undefined"){StopIteration=new Error("StopIteration");}function forEach(a,b,c,d){if(a==null)return;if(!d){if(typeof a=="function"&&a.call){d=Function;}else if(typeof a.forEach=="function"&&a.forEach!=arguments.callee){a.forEach(b,c);return;}else if(typeof a.length=="number"){_26(a,b,c);return;}}_10(d||Object,a,b,c)};function _26(a,b,c){if(a==null)return;var d=a.length,i;if(typeof a=="string"){for(i=0;i<d;i++){b.call(c,a.charAt(i),i,a);}}else{for(i=0;i<d;i++){/*@cc_on@*//*@if(@_jscript_version<5.2)if($Legacy.has(a,i))@else@*/if(i in a)/*@end@*/b.call(c,a[i],i,a);}}};function _10(g,h,j,k){var l=function(){this.i=1};l.prototype={i:1};var m=0;for(var i in new l)m++;_10=(m>1)?function(a,b,c,d){var e={};for(var f in b){if(!e[f]&&a.prototype[f]===undefined){e[f]=true;c.call(d,b[f],f,b)}}}:function(a,b,c,d){for(var e in b){if(a.prototype[e]===undefined){c.call(d,b[e],e,b);}}};_10(g,h,j,k)};function typeOf(a){var b=typeof a;switch(b){case"object":return a===null?"null":typeof a.call=="function"||_7.test(a)?"function":b;case"function":return typeof a.call=="function"?b:"object";default:return b;}};function instanceOf(a,b){if(typeof b!="function"){throw new TypeError("Invalid 'instanceOf' operand.");}if(a==null)return false;/*@cc_on@*//*@if(@_jscript_version<5.1)if($Legacy.instanceOf(a,b))return true;@else@*/if(a instanceof b)return true;/*@end@*/if(Base.ancestorOf==b.ancestorOf)return false;var c=a.constructor;if(typeof c!="function"){return typeOf(a)==typeof b.prototype.valueOf();}if(Base.ancestorOf==c.ancestorOf)return b==Object;switch(b){case Array:return!!(typeof a=="object"&&a.join&&a.splice);case Function:return typeOf(a)=="function";case RegExp:return typeof c.$1=="string";case Date:return!!a.getTimezoneOffset;case String:case Number:case Boolean:return typeof a==typeof b.prototype.valueOf();case Object:return true}return false};function assert(a,b,c){if(!a){throw new(c||Error)(b||"Assertion failed.");}};function assertArity(a,b,c){if(b==null)b=a.callee.length;if(a.length<b){throw new SyntaxError(c||"Not enough arguments.");}};function assertType(a,b,c){if(b&&(typeof b=="function"?!instanceOf(a,b):typeof a!=b)){throw new TypeError(c||"Invalid type.");}};function assignID(a){if(!a.base2ID)a.base2ID="b2_"+_8++;return a.base2ID;};function copy(a){var b=function(){};b.prototype=a;return new b;};function format(c){var d=arguments;var e=new RegExp("%([1-"+arguments.length+"])","g");return String(c).replace(e,function(a,b){return b<d.length?d[b]:a;})};function match(a,b){return String(a).match(b)||[];};function rescape(a){return String(a).replace(_4,"\\$1");};function trim(a){return String(a).replace(_2,"").replace(_3,"");};function I(i){return i};function K(k){return function(){return k;};};function bind(a,b){var c=_9.call(arguments,2);return function(){return a.apply(b,c.concat(_9.call(arguments)));};};function delegate(b,c){return function(){var a=_9.call(arguments);a.unshift(this);return b.apply(c,a)}};function flip(a){return function(){return a.apply(this,Array2.swap(arguments,0,1));};};function not(a){return function(){return!a.apply(this,arguments);};};function partial(a){var b=_9.call(arguments,1);return function(){return a.apply(context,b.concat(_9.call(arguments)));};};function unbind(b){return function(a){return b.apply(a,_9.call(arguments,1));};};base2=new Package(this,base2);eval(this.exports);base2.extend=extend;forEach(Enumerable,function(a,b){if(!Module[b])base2.addName(b,bind(a,Enumerable));});JavaScript=new Package(this,JavaScript);eval(this.exports)};