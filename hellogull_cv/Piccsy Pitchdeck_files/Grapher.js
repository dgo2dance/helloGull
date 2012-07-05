/**
 * @version 0.0.1
 * @author David Kelley
 */

Grapher = function(data)
{
	this.container = data.container;
	this.height = $(this.container).height();
	this.width = $(this.container).width();
	this.canvas = $('<canvas>');
	this.ctx = null;
	this.colors = data.colors;
	this.labels = data.labels;
	this.data = data.data;
	this.max = this.get_max_value();
	this.percent = 0;
	this.desired_percent = 0;
	
	this.font =
	{
		size:12
	}
	
	this.bottom_right = 
	{
		x: null,
		y: null
	}
	this.bottom_left = 
	{
		x: null,
		y: null
	}
	return this;
};

Grapher.prototype.init = function()
{
	$(this.container).append(this.canvas);
	$(this.canvas).attr({'width':this.width, 'height':this.height});
	this.ctx = this.canvas[0].getContext("2d");
	return this;
};

Grapher.prototype.format_number = function(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}

Grapher.prototype.animateTo = function(desired)
{
	desired = desired > 100 ? 100 : desired;
	this.desired_percent = desired;
	return this;
}

Grapher.prototype.get_max_value = function()
{
	var max = 0;
	
	for (var i in this.data)
	{
		for (var j in this.data[i])
		{
			if (this.data[i][j] > max) max = this.data[i][j];
		}
	}
	
	return max;
};

/**
 * Draw the outline for the graph and set bottom x and y
 */
Grapher.prototype.draw = function()
{
	var ctx = this.ctx;
	var l = this.labels;
	
	ctx.textBaseline = 'top';
	ctx.textAlign = 'right';
	ctx.font = this.font.size+'px sans-serif';
	ctx.fillStyle = '#222';
	
	var val = this.format_number(this.max);
	
	this.bottom_left.x = ctx.measureText(val).width+10;
	this.bottom_left.y = this.height-24;
	
	this.bottom_right.x = this.width - (ctx.measureText(l[24]).width/2) - this.bottom_left.x;
	this.bottom_right.y = this.height-24;
	
	//draw lines //TODO BLURRY?
	ctx.lineWidth = 1.0;
	ctx.beginPath();
	ctx.moveTo(this.bottom_left.x-1,0);
	ctx.lineTo(this.bottom_left.x-1,this.bottom_left.y+1);
	ctx.lineTo(this.bottom_right.x,this.bottom_right.y+1);
	ctx.stroke();
	ctx.closePath();
	
	//loop through and add vertical labels
	/*for (var i=5;i>0;i--)
	{
		var v = Math.floor(this.max/5)*i;
		var y = this.height/5*(5-i);
		ctx.fillText(this.format_number(v),this.bottom_left.x-10,y);
	}*/
	
	//loop through and add horizontal labels
	ctx.textAlign = 'left';
	var h_s = Math.floor((this.bottom_right.x-this.bottom_left.x)/this.data[0].length);
	var h_y = this.height-this.font.size;
	
	/*for (var i in l)
	{
		var l_w = Math.floor(ctx.measureText(l[i]).width/2);
		var x = this.bottom_left.x + (i*h_s - l_w);
		ctx.fillText(l[i],x,h_y);
	}*/
	
	return this;
};

Grapher.prototype.lines = function()
{
	var ctx = this.ctx;
	ctx.strokeStyle = '#d9d9d9';
	var f_h = this.font.size/2;
	
	//loop through and add vertical labels
	for (var i=5;i>0;i--)
	{
		var y = this.height/5*(5-i);
		ctx.beginPath();
		ctx.moveTo(this.bottom_left.x,y+f_h);
		ctx.lineTo(this.bottom_right.x,y+f_h);
		ctx.stroke();
		ctx.closePath();
	}
}

Grapher.prototype.animate = function()
{
	var ctx = this.ctx;
	
	ctx.clearRect(this.bottom_left.x,0,this.bottom_right.x-this.bottom_left.x,this.bottom_left.y);
	
	for (var i in this.data)
	{
		var h_s = this.bottom_right.x/this.data[i].length;
		
		ctx.fillStyle = this.colors[i];
		
		ctx.beginPath();
		ctx.moveTo(this.bottom_left.x,this.bottom_left.y);
		
		for (var j in this.data[i])
		{
			var t = this.bottom_left.y/100*((this.data[i][j] / this.max)*this.percent);
			var x = (this.bottom_left.x)+(h_s*j);
			x = x > this.bottom_right.x ? this.bottom_right.x : x;
			var y = this.bottom_left.y-t
			ctx.lineTo(x,y);
		}
		
		ctx.lineTo(this.bottom_right.x,this.bottom_right.y);
		ctx.fill();
		ctx.closePath();
	}
	
	this.lines();
	
	if (this.percent != this.desired_percent)
	{
		this.percent = this.desired_percent > this.percent ? this.percent+1 : this.percent-1;
		var obj = this;
		setTimeout(function() { obj.animate(); },10);
	}
	
	
};
