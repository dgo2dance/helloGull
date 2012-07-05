//external dependencies
if($ && Pitchdeck)
{
	/**
	 * 
	 */
	Pitchdeck.attach('product',
	{
		init: function()
		{
			//set initial state
			Pitchdeck._('product').animate(0);
		},
		
		functions:
		{
			run: function(frame)
			{
				for (var id in frame)
				{
					$(id).css(frame[id]);
				}
			},
		},
		
		animate: function(p)
		{
			var kf = Pitchdeck._('product').keyframes;
			
			for (var i in kf)
			{
				if (i-p >= 0)
				{
					Pitchdeck._('product').functions.run(kf[i]);
					break;
				}
			}
		},
		
		keyframes:
		{
			0:
			{
				'#product .product-container .product img':
				{
					marginBottom:'-195%'
				}
			},
			
			20:
			{
				'#product .product-container .product img':
				{
					marginBottom:'-155%'
				}
			},
			
			40:
			{
				'#product .product-container .product img':
				{
					marginBottom:'-115%'
				}
			},
			
			60:
			{
				'#product .product-container .product img':
				{
					marginBottom:'-75%'
				}
			},
			
			80:
			{
				'#product .product-container .product img':
				{
					marginBottom:'-35%'
				}
			},
			
			100:
			{
				'#product .product-container .product img':
				{
					marginBottom:0
				}
			}
		},
		
		events:
		{
			
		},
		
		current_toggled: $({})
	});
}
