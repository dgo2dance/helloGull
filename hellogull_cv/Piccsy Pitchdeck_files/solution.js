//external dependencies
if($ && Pitchdeck)
{
	/**
	 * 
	 */
	Pitchdeck.attach('solution',
	{
		init: function()
		{
			//set initial state
			Pitchdeck._('solution').animate(0);
			
			$('#solution .columns-container .column ul').each(function()
			{
				$('li',this).each(function(i)
				{
					var d = 0.1*i;
					$(this).css(
					{
						'-webkit-transition-delay':d+'s',
						'-moz-transition-delay':d+'s'
					});
				});
			});
		},
		
		functions:
		{
			run: function(frame)
			{	
				for (var id in frame)
				{
					$(id).css(frame[id]);
				}
			}
		},
		
		animate: function(p)
		{
			var kf = Pitchdeck._('solution').keyframes;
			
			for (var i in kf)
			{
				if (i-p >= 0)
				{
					Pitchdeck._('solution').functions.run(kf[i]);
					break;
				}
			}
		},
		
		keyframes:
		{
			0:
			{
				'.daniel':
				{
					opacity:0
				},
				
				'#solution .line':
				{
					width:0,
					height:0
				},
				
				'.bubble': 
				{
					'-webkit-transform': 'scale(0)',
					'-moz-transform': 'scale(0)',
					'-o-transform': 'scale(0)',
					'transform': 'scale(0)'
				},
				
				'#solution .columns-container .column ul li': { opacity:0 },
			},
			
			20:
			{
				'.daniel':
				{
					opacity:0.2
				},
			},
			
			40:
			{
				'.daniel':
				{
					opacity:0.7
				},
				
				'.line-top-vertical': { height:0 },
			},
			
			60:
			{
				'.daniel':
				{
					opacity:1
				},
				
				'.line-top-vertical': { height:35 },
				'.line-far-left-vertical, .line-bottom-vertical, .line-far-right-vertical': { height:0 },
				'.line-left-horizontal, .line-right-horizontal': { width:0 },
				
			},
			
			80:
			{
				'.line-top-vertical': { height:35 },
				'.line-far-left-vertical, .line-bottom-vertical, .line-far-right-vertical': { height:0 },
				'.line-left-horizontal, .line-right-horizontal': { width:339 },
				
				'.bubble': 
				{
					'-webkit-transform': 'scale(0)',
					'-moz-transform': 'scale(0)',
					'-o-transform': 'scale(0)',
					'transform': 'scale(0)',
				},
				
				'#solution .columns-container .column ul li': { opacity:0 },
			},
			
			90:
			{
				'.line-top-vertical': { height:35 },
				'.line-far-left-vertical, .line-bottom-vertical, .line-far-right-vertical': { height:47 },
				'.line-left-horizontal, .line-right-horizontal': { width:339 },
				
				'.bubble': 
				{
					'-webkit-transform': 'scale(1)',
					'-moz-transform': 'scale(1)',
					'-o-transform': 'scale(1)',
					'transform': 'scale(1)',
				},
				
				'#solution .columns-container .column ul li': { opacity:1 },
				
				'.daniel':
				{
					opacity:1
				},
			},
			
			100:
			{
				'.line-top-vertical': { height:35 },
				'.line-far-left-vertical, .line-bottom-vertical, .line-far-right-vertical': { height:47 },
				'.line-left-horizontal, .line-right-horizontal': { width:339 },
				
				'.bubble': 
				{
					'-webkit-transform': 'scale(1)',
					'-moz-transform': 'scale(1)',
					'-o-transform': 'scale(1)',
					'transform': 'scale(1)'
				},
				
				'#solution .columns-container .column ul li': { opacity:1 },
				
				'.daniel':
				{
					opacity:1
				},
			},
		},
		
		events:
		{
			'#solution .columns-container .column > ul > li':
			{
				click:
				[
					function()
					{
						$(this).toggleClass('opened');
						$('ul',this).fadeToggle(100);
					}
				]
			}
		},
	});
}
