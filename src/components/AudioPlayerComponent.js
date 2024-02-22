import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const AudioPlayerComponent = ({audioUrl}) => {
	return (
		<div className="w-full h-[80vh] flex items-center justify-center">
			<AudioPlayer
				autoPlay
				src={audioUrl}
				onPlay={e => console.log('onPlay')}
			/>
		</div>
	);
};

export default AudioPlayerComponent;
