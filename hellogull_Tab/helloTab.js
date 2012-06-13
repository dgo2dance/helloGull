		/*
		*面向对象版选项卡
		*/

    
	   var GLOBAL = {};
	   GLOBAL.namespace = function(str){
		 var arr=str.split("."),  o=GLOBAL;
		 for(i=(arr[0]=="GLOBAL") ? 1:0; i<arr.length; i++) {
		 o[arr[i]]=o[arr[i]] || {};
		 o=o[arr[i]];
		 }
		 }
		 
		 //Dom
		GLOBAL.namespace("Dom");
		
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
		
		GLOBAL.Dom.addClass= function(node,str){
		if(!new RegExp("(^|\\s+)"+str).test(node.className)){
		node.className=node.className+" "+str;
		}
		}
		GLOBAL.Dom.removeClass=function(node,str){
		node.className=node.className.replace(new RegExp("(^|\\s+)"+str)，"");
		}
		
		//Event
		GLOBAL.namespace("Event");
		
		GLOBAL.Event.on=function(node,eventType,handler,scope){
		node=typeof node=="string" ? document.getElementById(node) : node;
		scope=scope || node;
		if(document.all){
		node.attachEvent("on"+eventType,function(){
		   handler.apply(scope,arguments)
		  });
		} else {
		node.addEventListener(eventType,function(){
		 handler.apply(scope,arguments)
		},false);
		}
		}
		
		function Tab(config){
		this._root=config.root;
		this._currentClass=config.currentClass;
		var trigger = config.trigger || "click";
		this._handler=config.handler;
		var autoPlay=config.autoPlay;
		var playTime=config.playTime || 3000;
		this._tabMenus=GLOBAL.Dom.getElementByClassName("J_tab-menu",this._root);
		this._tabContents=GLOBAL.Dom.getElementByClassName("J_tab-content",this._root);
		this.currentIndex=0;
		var This=this;
		if(autoPlay){
		 setInterval(function(){This._autoHandler()},playTime);
		}
		for(var i=0; i<this._tabMenus.length;i++){
		this._tabMenus[i]._index=i;
		GLOBAL.Event.on(this._tabMenus[i],trigger,function(){
		This.showItem(this._index);
		this.currentIndex=this._index;
		});
		}
		}
		
		Tab.prototype={
		showItem:function(n){
		for(var i=0; i<this._tabContents.length;i++){
		this._tabContents[i].style.display="none";
		}
		this._tabContents[n].style.display="block";
		if(this._currentClass){
		var currentMenu=GLOBAL.Dom.getElementByClassName(this._currentClass,this._root)[0];
		if(currentMenu){
		            GLOBAL.Dom.removeClass(currentMenu,this._currentClass);
		                }
					GLOBAL.Dom.addClass(this._tabContents[n],this._currentClass);
		}
		if(this._handler){
		this._handler(n);
		}
		},
		_autoHandler:function(){
		this.currentIndex++;
		if(this.currentIndex >=this._tabMenus.length){
		this.currentIndex=0;
		}
		this.showItem(this._currentClass);
		}
		}
		var tabs=GLOBAL.Dom.getElementByClassName("J_tab");
		new Tab({root:tab[0],trigger:"mouseover"});
		new Tab({root:tabs[1],currentClass:"tabcurrentMenu",autoPlay:true,playTime:5000});
		new Tab({root:tabs[2],currentClass:"tabcurrentMenu2",trigger:"mouseover",handler:function(index){alert("您激活的是第"+(index+1)+"个标签”}});
		
		