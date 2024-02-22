// pages/index.js
import {useState} from 'react';
import VideoPlayer from '../components/VideoPlayer';
import FileUploader from '../components/FileUploader';
import { useRouter } from 'next/router';

export default function Home() {
	const [videoUrl, setVideoUrl] = useState(null);

	const handleFileUpload = url => {
		setVideoUrl(url);
	};

	return (
		<div className="container mx-auto  h-screen">
			<h1 className="text-5xl font-bold py-8">Movie Censorship Interface</h1>
			{videoUrl ? (
				<VideoPlayer videoUrl={videoUrl} />
			) : (
				<FileUploader onFileUpload={handleFileUpload} />
			)}
		</div>
	);
}
