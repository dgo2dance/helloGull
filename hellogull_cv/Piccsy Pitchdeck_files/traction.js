//external dependencies
if($ && Pitchdeck)
{
	/**
	 * 
	 */
	Pitchdeck.attach('traction',
	{
		init: function()
		{	
			
			Pitchdeck._('traction').graph_1 = new Grapher(Pitchdeck._('traction').graph_1).init().draw();
			Pitchdeck._('traction').graph_2 = new Grapher(Pitchdeck._('traction').graph_2).init().draw();
			
			//set initial state
			Pitchdeck._('traction').animate(0);
			
		},
		
		functions:
		{
			run: function(frame,p)
			{	
				for (var id in frame)
				{
					if (typeof(frame[id]) == 'object')
					{
						$(id).css(frame[id]);
					} else if (typeof(frame[id]) == 'function')
					{
						frame[id](p);
					}
				}
			}
		},
		
		animate: function(p)
		{
			var kf = Pitchdeck._('traction').keyframes;
			
			for (var i in kf)
			{
				if (i-p >= 0)
				{
					Pitchdeck._('traction').functions.run(kf[i],p);
					break;
				}
			}
		},
		
		graph_1: 
		{
			container: $('#graph-1'),
			labels:
			{
				0: 'JULY',
				3: 'OCTOBER',
				6: 'JANUARY',
				9: 'APRIL',
				12: 'JULY',
				15: 'OCTOBER',
				18: 'JANUARY',
				21: 'APRIL'
			},
			colors: ['#cc3031','#a42627'],
			data:
			[
				[98406,741280,867010,986889,743623,1148679,875318,988999,1365541,1576415,1841359,1948600,2384349,2548405,2326360,2446198,2618114,2918302,3086587,3422220,3685738],
				[78502,505186,536860,596804,441853,725780,480642,529614,712516,827511,994824,1013204,1253384,1329690,1232096,1288885,1410988,1592774,1607317,1810016,1858649]
			] 
		},
		
		graph_2: 
		{
			container: $('#graph-2'),
			labels:
			{
				0: 'JULY',
				3: 'OCTOBER',
				6: 'JANUARY',
				9: 'APRIL',
				12: 'JULY',
				15: 'OCTOBER',
				18: 'JANUARY',
				21: 'APRIL'
			},
			colors: ['#cc3031'],
			data:
			[
				[345814,2662723,3398505,4233355,4040338,5698124,5982910,5831971,8779153,9916747,12146655,12753285,14972430,16381144,15806960,18966119,20478288,22879294,26234969,26234137,30562605,30562606]
			] 
		},
		
		keyframes:
		{
			0:
			{
				'#graph-1': function(p)
				{
					Pitchdeck._('traction').graph_1.animateTo(p).animate();
				},
				
				'#graph-2': function(p)
				{
					Pitchdeck._('traction').graph_2.animateTo(p).animate();
				},
				
			},
			
			100:
			{
				'#graph-1': function(p)
				{
					Pitchdeck._('traction').graph_1.animateTo(p+20).animate();
				},
				
				'#graph-2': function(p)
				{
					Pitchdeck._('traction').graph_2.animateTo(p).animate();
				},
				
			},
			
			
		},
		
		events:
		{

		},
	});
}
