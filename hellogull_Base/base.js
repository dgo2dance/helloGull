
  /*
  *  base 层代码
  *  hellogull
  */
  
   var GLOBAL = {};
   GLOBAL.namespace = function(str){
     var arr=str.split("."),  o=GLOBAL;
	 for(i=(arr[0]=="GLOBAL") ? 1:0; i<arr.length; i++) {
	 o[arr[i]]=o[arr[i]] || {};
	 o=o[arr[i]];
	 }
	 }
   
    //DOM相关
	GLOBAL.namespace("Dom");
	GLOBAL.Dom.getNextNode=function(node){
	node=typeof node=="string" ? document.getElementById(node) : node;
	var nextNode = node.nextSibling;
	if(!nextNode) return null;
	if(!document.all){
	while(true){
	if(nextNode.nodeType == 1){
	break;
	}else {
	if(nextNode.nextSibling){
	nextNode=nextNode.nextSibling;
	}else{
     break;
	}
	}
	}
	}
	return nextNode;
	};
	
	GLOBAL.Dom.setOpacity = function(node,level){
	node = typeof node=="string" ? document.getElementById(node) : node;
    if(document.all){
     node.style.filter = 'alpha(opacity=' + level +')';
     }	else {
	 node.style.opacity = level/100;
	 }
	}
   
    GLOBAL.Dom.get= function(node){
    node = typeof node=="string" ? document.getElementById(node) : node;
    return node; 
	}
	
	GLOBAL.Dom.getElementByClassName = function (str, root,tag) {
	if(root) {
	 root = typeof root =="string" ? document.getElementById(root) : root;
	} else {
	root =document.body;
	}
	tag= tag || "*";
	var els = root.getElementTagName(tag),  arr=[];
	for(var i=0; n=els.length; i<n; i++){
	for(var j=0, k=els[i].className.split(" "),l=k.length; j<l; j++){
	if(k[j] == str){
	arr.push(els[i]);
	break;
	}
	}
	}
	return arr;
	}
	
	//Event相关
	GLOBAL.namespace("Event");
	GLOBAL.Event.getEventTarget= function(e){
	e= window.event || e;
	return e.srcElement || e.target;
	}else {
	  e.stopPropagation();
	}
   }
    GLOBAL.Event.on= function(node,eventType,handler){
	node = typeof node=="string" ? document.getElementById(node) : node;
    if(document.all){
	node.attachEvent("on"+eventType,handler);
	}else{
	node.addEventListener(eventType,handler,false);
	}
	}
	
	//Lang相关
    GLOBAL.namespace("Lang");
	GLOBAL.Lang.trim = function(ostr){
	retrun ostr.replace(/^\s+|\s=$/g,"");
	}
	GLOBAL.Lang.isNumber=function(s){
	return !isNan(s);
	}
	GLOBAL.Lang.extend = function(subClass,superClass){
	var F=function(){};
	F.prototype= superClass.prototype;
	subClass.prototype=new F();
	subClass.prototype.constructor=subClass;
	subClass.superClass=superClass.prototype;
	if(superClass.prototype.constructor==Object.prototype.constructor){
	superClass.prototype.constructor=superClass;
	}
	}
