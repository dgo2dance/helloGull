//external dependencies
if($ && Pitchdeck)
{
	/**
	 * 
	 */
	Pitchdeck.attach('team',
	{
		init: function()
		{
			//set initial state
			Pitchdeck._('team').animate(0);
		},
		
		functions:
		{
			run: function(p,frame)
			{	
				for (var id in frame)
				{
					
					if (typeof(frame[id]) == 'object')
					{
						$(id).css(frame[id]);
					} else if (typeof(frame[id]) == 'function')
					{
						frame[id](p,id);
					}
				}
			},
			
		},
		
		animate: function(p)
		{
			var kf = Pitchdeck._('team').keyframes;
			
			for (var i in kf)
			{
				if (i-p >= 0)
				{
					Pitchdeck._('team').functions.run(p,kf[i]);
					break;
				}
			}
		},
		
		keyframes:
		{	
			0:
			{
				'#team .team-member':
				{
					opacity: 0
				},
			},
			
			40:
			{
				'#team .team-member':
				{
					opacity: 0
				},
			},
			
			50:
			{
				'#team .team-member':
				{
					opacity: 0
				},
				
				'#team .team-member:nth-child(1)': { opacity:1 }
			},
			
			60:
			{
				'#team .team-member':
				{
					opacity: 0
				},
				
				'#team .team-member:nth-child(1)': { opacity:1 },
				'#team .team-member:nth-child(2)': { opacity:1 }
			},
			
			70:
			{
				'#team .team-member':
				{
					opacity: 0
				},
				
				'#team .team-member:nth-child(1)': { opacity:1 },
				'#team .team-member:nth-child(2)': { opacity:1 },
				'#team .team-member:nth-child(3)': { opacity:1 }
			},
			
			80:
			{
				'#team .team-member':
				{
					opacity: 0
				},
				
				'#team .team-member:nth-child(1)': { opacity:1 },
				'#team .team-member:nth-child(2)': { opacity:1 },
				'#team .team-member:nth-child(3)': { opacity:1 },
				'#team .team-member:nth-child(4)': { opacity:1 }
			},
			
			100:
			{
				'#team .team-member':
				{
					opacity: 0
				},
				
				'#team .team-member:nth-child(1)': { opacity:1 },
				'#team .team-member:nth-child(2)': { opacity:1 },
				'#team .team-member:nth-child(3)': { opacity:1 },
				'#team .team-member:nth-child(4)': { opacity:1 },
				'#team .team-member:nth-child(5)': { opacity:1 }
			},
		},
		
		events:
		{

		},
	});
}
