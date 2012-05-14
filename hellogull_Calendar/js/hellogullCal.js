//面向对象版日历
//author:hellogull
//2012-05-08

function Calendar(obj,model,color) {

   this.newcande = document.createElement("div");
   this.newcande.className ="hellogull_calendar";
   this.model=model;
   this.color=color;
   this.newcande.innerHTML='<table><caption><a class="hellogull_prev"></a><span class="month"></span><label>,</label><span class="year">'+
   '</span><a class="hellogull_next"></a></caption><thead><tr><th title="Sunday">S</th><th title="Monday">M<th title="Tuesday">T</th>'+
   '<th title="Wednesday">W</th><th title="Thursday">T</th><th title="Friday">F</th><th title="Saturday">S</th></tr></thead><tr>'+
   '<td index="1"class="valid"></td><td index="2" class="valid"></td><td index="3" class="valid"></td><td index="4" class="valid"></td>'+
'<td index="5" class="valid"></td><td index="6" class="valid"></td><td index="7" class="valid"></td></tr><tr><td index="1" class="valid">'+
'</td><td index="2" class="valid"></td><td index="3" class="valid"></td><td index="4" class="valid"></td><td index="5" class="valid"></td>'
+'<td index="6" class="valid"></td><td index="7" class="valid"></td></tr><tr><td class="valid"></td><td class="valid"></td>'+
'<td class="valid"></td><td class="valid"></td><td class="valid"></td><td class="valid"></td><td class="valid"></td></tr><tr>'+
'<td class="valid"></td><td class="valid"></td><td class="valid"></td><td class="valid"></td><td class="valid"></td><td class="valid">'+
'</td><td class="valid"></td></tr><tr><td index="1" class="valid"></td><td index="2" class="valid"></td><td index="3" class="valid">'+
'</td><td index="4" class="valid"></td><td index="5" class="valid"></td><td index="6" class="valid"></td><td index="7" class="valid">'+
'</td></tr><tr><td index="1" class="valid"></td><td index="2" class="valid"></td><td index="3" class="valid"></td>'+
'<td index="4" class="valid"></td><td index="5" class="valid"></td><td index="6" class="valid"></td><td index="7" class="valid"></td>'+
'</tr></table>';
   obj.parentNode.appendChild(this.newcande);
   this.input = obj;
   this.hellogull=this.getByClass("hellogull_calendar",this.input.parentNode)[0];
   this.valid = this.getByClass("valid",this.hellogull);
   this.next= this.getByClass("hellogull_next",this.hellogull)[0];
   this.prev=this.getByClass("hellogull_prev",this.hellogull)[0];
   this.span=this.hellogull.getElementsByTagName("span");
   var dates = new Date();
   this.span[0].innerHTML = (this.replaceEng(dates.getMonth()+1));
   this.span[1].innerHTML = dates.getFullYear();
   this.months = this.replaceNum(this.span[0].innerHTML);
   this.years = dates.getFullYear();
   this.td=this.hellogull.getElementsByTagName("td");
   this.inputlt={L:this.input.offsetLeft,T:this.input.offsetTop,H:this.input.offsetHeight,W:this.input.offsetWidth}; 
   this.n=-1;
   this.day = false;
   var that =this;
   this.nextData();
   this.addEvent(document,"click",function(){
   that.hidden();
    })
    if(document.all){
	this.addClass(this.valid[dates.getDate()+1],"hover");
	}
	else{
	this.addClass(this.valid[dates.getDate()-1],"hover");
	}
	this.input.onclick=function(e){
	
	that.onfocusfn();
	//e.cancelBubble=true
	var e=e||event;
	that.stopBubble(e);
	};
	this.input.onblur=function(){
		that.onblurfn();
	};
    
    this.addEvent(this.prev,"click",function(e){
	that.onclicks();
	var e=e||event;
	that.stopBubble(e);
	})	
	this.addEvent(this.next,"click",function(e){
	that.onclickss();
	var e=e ||event;
	that.stopBubble(e);
	})
	};
	
	Calendar.prototype.onfocusfn=function(){
	this.input.value = "";
	if(this.color){
	this.input.style.borderColor = this.color;
	};
	this.hellogull.style.display = "block";
	this.hellogull.style.left =(this.inputlt.L+this.inputlt.W+5)+"px";
	this.hellogull.style.top = (this.inputlt.T) + "px";
	};
	Calendar.prototype.onblurfn=function(){
	this.input.style.borderColor ="";
	};
	Calendar.prototype.hidden=function(){
	this.hellogull.style.display="none";
	}
	Calendar.prototype.onclicks=function(){
	 --this.months
	if(this.months == 0){
	this.months=12;
    --this.span[1].innerHTML

	}
	this.span[0].innerHTML = this.replaceEng(this.months);
	this.prevData();
	}
	
   Calendar.prototype.onclickss = function () {
   
   ++this.months;
   if(this.months == 13){
   this.months = 1;
   ++this.span[1].innerHTML;
   }
   
   this.span[0].innerHTML = this.replaceEng(this.months);
   this.nextData();
   }
   
   Calendar.prototype.prevData = function(){
     var monthHTML = this.span[0].innerHTML;
	 var yearHTML = this.span[1].innerHTML;
	 var d = parseInt(this.getByClass("first",this.hellogull)[0].getAttribute("index"));
	 var r=7-d+2;
	 var replaceNumMonth = this.replaceNum(monthHTML);
	  for (var f = 0; f < this.td.length; f++) {
        this.td[f].className = "";
        this.td[f].innerHTML = "";
    };
    if (m == 0) {
        for (var i = r; i < ((this.getMonths(replaceNumMonth)) + r); i++) {
            this.td[41 - i + 1].className = "valid";
            this.td[41 - i + 1].innerHTML = this.getMonths(replaceNumMonth) - i + r
        };
    }
   else {
        for (var i = r; i < ((this.getMonths(replaceNumMonth)) + r); i++) {
            this.td[41 - i + 1].className = "valid";
            this.td[41 - i + 1].innerHTML = this.getMonths(replaceNumMonth) - i + r
        };
    }
   this.addClass(this.getByClass("valid", this.hellogull)[this.getByClass("valid", this.hellogull).length - 1], "last");
    this.addClass(this.getByClass("valid", this.hellogull)[0], "first");
                this.addEv()

   
   }
	
	Calendar.prototype.nextData = function () {
			if(this.day){
			var monthHTML=this.span[0].innerHTML;
			var yearHTML=this.span[1].innerHTML;
			var replaceNumMonth=this.replaceNum(monthHTML);
			this.day=parseInt(this.getByClass("last",this.hellogull)[0].getAttribute("index"))
			    for(var f=0;f<this.td.length;f++){
					 this.td[f].className=""
					 this.td[f].innerHTML = ""
				    }
				for(var i=this.day;i<(this.getMonths(replaceNumMonth)+this.day);i++){
					 this.td[i].className="valid"
					 this.td[i].innerHTML=i-this.day+1
					}
		this.addClass(this.getByClass("valid", this.hellogull)[this.getByClass("valid", this.hellogull).length - 1], "last");
		this.addClass(this.getByClass("valid", this.hellogull)[0], "first");
					
					}
				else {
				    var monthHTML = this.span[0].innerHTML;
				    var yearHTML = this.span[1].innerHTML;
				    var replaceNumMonth = this.replaceNum(monthHTML)
				    var newdata = new Date()
				newdata.setMonth((this.replaceNum(monthHTML)-1),1)

				for(var f=0;f<this.td.length;f++){
					this.td[f].className=""
					this.td[f].innerHTML = ""
				 }
				
				for(var i=newdata.getDay();i<(this.getMonths(replaceNumMonth)+newdata.getDay());i++){
					this.td[i].className="valid";
					this.td[i].innerHTML=i-newdata.getDay()+1
					 }
	this.addClass(this.getByClass("valid", this.hellogull)[this.getByClass("valid",this.hellogull).length - 1], "last");
	this.addClass(this.getByClass("valid", this.hellogull)[0], "first");
				this.day=parseInt(this.getByClass("last",this.hellogull)[0].getAttribute("index"));
				
                   };

           this.addEv()
};
Calendar.prototype.getyear = function (n) {
			if ((n%400==0) || (n%100!=0) && (n%4==0)) {
				 Year_=true
				}
			else{
				 Year_=false
				}
				return Year_;
}   

Calendar.prototype.getMonths = function (n) {
					
		if(n==1 || n==3 ||n==5 ||n==7||n==8||n==10 ||n==12 ){
			         m=31
			         }
			else if(n==2){
				if(this.getyear(this.span[1].innerHTML)){
					 m=29
					}
				 else{
					 m=28
					 }
				}
			else if(n== 4|| n==6|| n==9|| n==11){
				m=30
				}
				return m
}
 
Calendar.prototype.addEv = function () {
    var that = this;
    for (var i = 0; i < this.getByClass("valid", this.hellogull).length; i++) {
        this.addEvent(this.getByClass("valid", this.hellogull)[i], "click", function (e) {
            var e=e || event
			var evt=e.srcElement || e.target
           
			if(evt.innerHTML != ""){
				 that.getvalue(evt);
				}
				else{
					return
					}
        })
    };
}   

Calendar.prototype.getvalue = function (num) {
		 for(var j=0;j<this.valid.length;j++){
			this.addClass(this.valid[j],"valid")
			this.delClass(this.valid[j],"hover")
             };
			this.addClass(num ,"hover");
			this.input.value = this.span[1].innerHTML + this.model + this.replaceNum(this.span[0].innerHTML) + this.model + num.innerHTML;
			this.hellogull.style.display="none";
				
}
Calendar.prototype.getByClass = function (className, context) {
	context=context || document;
	if (context.getElementsByClassName) {
		return context.getElementsByClassName(className);
	}
	var nodes=context.getElementsByTagName('*'),
			ret=[];
	for (var i=0;i<nodes.length;i++) {
		if (this.hasClass(nodes[i],className)) ret.push(nodes[i]);
	}
	return ret;
}

Calendar.prototype.hasClass = function (node, className) {
	var names=node.className.split(/\s+/);
	for (var i=0;i<names.length;i++) {
		if (names[i]==className) return true;
	}
	return false;
}

Calendar.prototype.addClass = function (o, className) {
	if (!this.hasClass(o,className)) o.className += " "+className;
	return o;
}

Calendar.prototype.addEvent = function (obj, evt, fn) {
    if (obj.attachEvent) {
        obj.attachEvent("on"+evt, fn);
    }
    else {
        obj.addEventListener(evt, fn, false);
    };

}

Calendar.prototype.delEvent = function (obj, evt, fn) {
    if (obj.removeEventListener) {
        obj.removeEventListener(evt, fn, false);
        //return obj;
    }
    var fns = obj.functions || {};
    fns = fns[evt] || [];
    for (var i = 0; i < fns.length; i++) {
        if (fns[i] == fn) {
            fns.splice(i, 1);
            return obj;
        }
    }
}

Calendar.prototype.delClass=function(o,className) {
	var names=o.className.split(/\s+/);
	for (var i=0;i<names.length;i++) {
		if (names[i]==className) delete names[i];
	}
	o.className=names.join(" ");
	return o;
}

Calendar.prototype.stopBubble=function(e)  
    {  
        if (e.stopPropagation)  
            {
				e.stopPropagation() 
			}
        else {
            e.cancelBubble=true 
	      }
    }  
	
Calendar.prototype.replaceEng = function (n) {
			     switch(n){
				    case 1:
				    n='January';
				    break;
				    case 2:
				    n='February';
				    break;
				    case 3:
				    n='March';
				    break;
				    case 4:
				    n='April';
				    break;
				    case 5:
				    n='May';
				    break;
				    case 6:
				    n='June';
				    break;
				    case 7:
				    n='July';
				    break;
				    case 8:
				    n='August';
				    break;
				    case 9:
				    n='September';
				    break;
				    case 10:
				    n='October';
				    break;
				    case 11:
				    n='November';
				    break;
				    case 12:
				    n='December';
				    break;
				    }
				    return n
}


Calendar.prototype.replaceNum = function (n) {
				 switch(n){
					case 'January':
					n=1;
					break;
					case 'February':
					n=2;
					break;
					case 'March':
					n=3;
					break;
					case 'April':
					n=4;
					break;
					case 'May':
					n=5;
					break;
					case 'June':
					n=6;
					break;
					case 'July':
					n=7;
					break;
					case 'August':
					n=8;
					break;
					case 'September':
					n=9;
					break;
					case 'October':
					n=10;
					break;
					case 'November':
					n=11;
					break;
					case 'December':
					n=12;
					break;
					}
				return n
}	
	