import ProgressiveImage from 'react-progressive-image';

export default () => {
	return (
		<ProgressiveImage
			// delay={3000}
			srcSetData={{
				srcSet:
					'https://rukminim1.flixcart.com/flap/320/320/image/31efaad41a3e4208.jpg?q=50 320w, https://rukminim1.flixcart.com/flap/480/480/image/31efaad41a3e4208.jpg?q=50 700w, https://rukminim1.flixcart.com/flap/960/960/image/31efaad41a3e4208.jpg?q=50 2000w',
				sizes: '(max-width: 2000px) 100vw, 2000px'
			}}
			src="https://rukminim1.flixcart.com/flap/480/480/image/31efaad41a3e4208.jpg?q=50"
			placeholder="https://rukminim1.flixcart.com/flap/50/50/image/31efaad41a3e4208.jpg?q=50"
		>
			{(src, loading, srcSetData) => (
				<img
					style={{
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						width: '100%',
						height: '100%',
						maxWidth: '100%',
						maxHeight: '100%',
						position: 'absolute',
						// opacity: loading ? 0.5 : 1,
						// transition: 'opacity .5s linear 5s',
						filter: loading ? 'blur(15px)' : 'blur(0px)'
					}}
					srcSet={srcSetData.srcSet}
					sizes={srcSetData.sizes}
					src={src}
					alt="an image"
				/>
			)}
		</ProgressiveImage>
	);
};
