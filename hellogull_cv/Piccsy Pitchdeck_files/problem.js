//external dependencies
if($ && Pitchdeck)
{
	/**
	 * 
	 */
	Pitchdeck.attach('problem',
	{
		init: function()
		{
			//set initial state
			Pitchdeck._('problem').animate(0);
		},
		
		functions:
		{
			run: function(frame)
			{
				var pref = ['','moz','webkit','o','ms'];
				
				for (var id in frame)
				{
					$(id).css(frame[id]);
				}
			},
		},
		
		animate: function(p)
		{
			var kf = Pitchdeck._('problem').keyframes;
			
			for (var i in kf)
			{
				if (i-p >= 0)
				{
					Pitchdeck._('problem').functions.run(kf[i]);
					break;
				}
			}
		},
		
		keyframes:
		{
			0:
			{
				'#problem .circle':
				{
					'-webkit-transform': 'scale(0)',
					'-moz-transform': 'scale(0)',
					'-o-transform': 'scale(0)',
					'transform': 'scale(0)'
				},
				
				'#problem .text':
				{
					opacity:0
				}
			},
			
			20:
			{
				'#problem .circle':
				{
					'-webkit-transform': 'scale(0.4)',
					'-moz-transform': 'scale(0.4)',
					'-o-transform': 'scale(0.4)',
					'transform': 'scale(0.4)'
				}
			},
			
			40:
			{
				'#problem .text-line:nth-child(even)':
				{
					opacity:0
				},
				
				'#problem .circle':
				{
					'-webkit-transform': 'scale(0.6)',
					'-moz-transform': 'scale(0.6)',
					'-o-transform': 'scale(0.6)',
					'transform': 'scale(0.6)'
				}
			},
			
			60:
			{
				
				'#problem .text-line:nth-child(odd)':
				{
					opacity:0
				},
				
				'#problem .circle':
				{
					'-webkit-transform': 'scale(0.8)',
					'-moz-transform': 'scale(0.8)',
					'-o-transform': 'scale(0.8)',
					'transform': 'scale(0.8)'
				}
			},
			
			80:
			{
				'#problem .text':
				{
					opacity:0
				},
				
				'#problem .text-line':
				{
					opacity:1
				},
				
				'#problem .circle':
				{
					'-webkit-transform': 'scale(0.9)',
					'-moz-transform': 'scale(0.9)',
					'-o-transform': 'scale(0.9)',
					'transform': 'scale(0.9)'
				}
			},
			
			100:
			{
				'#problem .text':
				{
					opacity:1
				},
				
				'#problem .circle':
				{
					'-webkit-transform': 'scale(1)',
					'-moz-transform': 'scale(1)',
					'-o-transform': 'scale(1)',
					'transform': 'scale(1)'
				}
			},
		},
		
		events:
		{

		},
		
		current_toggled: $({})
	});
}
