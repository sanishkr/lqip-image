import React from 'react';
import IdealImage from 'react-ideal-image';

export default () => {
	return (
		<IdealImage
			width={467}
			height={250}
			loader="image"
			threshold={5000}
			style={{
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				width: '100%',
				height: '100%',
				maxWidth: '100%',
				maxHeight: '100%',
				position: 'absolute'
			}}
			srcSet={[
				{
					width: 960,
					src:
						'https://rukminim1.flixcart.com/flap/960/960/image/31efaad41a3e4208.jpg?q=50',
					format: 'jpeg'
				},
				{
					width: 480,
					src:
						'https://rukminim1.flixcart.com/flap/480/480/image/31efaad41a3e4208.jpg?q=50',
					format: 'jpeg'
				}
			]}
			placeholder={{
				lqip:
					'https://rukminim1.flixcart.com/flap/50/50/image/31efaad41a3e4208.jpg?q=50'
			}}
			alt="an Ideal Image"
		></IdealImage>
	);
};
