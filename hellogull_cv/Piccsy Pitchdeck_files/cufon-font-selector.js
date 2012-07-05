Selector = {
	
	run: function()
	{	
		
		require(Selector.fonts,function()
		{
			for(var font in Selector.selectors)
			{
				for (var i in Selector.selectors[font])
				{
					Cufon.replace(Selector.selectors[font][i],{fontFamily:font});
				}
			}
		});
	},
	
	fonts:
	[
		'libs/HelveticaNeueBld_700.font',
		'libs/HelveticaNeueReg_400.font',
		'libs/Univers_100.font'
	],
	
	selectors:
	{
		'HelveticaNeueBld':
		[
			'.content-title-description h2'
		],
		
		'HelveticaNeueReg':
		[
			
			'h1.text-logo-with-heart'
		],
		
		'Univers':
		[
			
			'.stat span.number'
		]
	}
	
};
