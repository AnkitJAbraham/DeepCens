import { useRouter } from 'next/router';
import VideoPlayer from '../components/VideoPlayer';

const PlayVideo = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  const videoUrl = localStorage.getItem('uploadedFileUrl') || '';

  return (
    <div className="container mx-auto my-8 relative">
      <h1 className="text-3xl font-semibold mb-4">Video Player</h1>
      <VideoPlayer videoUrl={videoUrl} />
      <button
        onClick={handleBack}
        className="bg-gradient-to-r font-bold from-green-300 via-blue-500 to-purple-600 text-white px-4 py-2 rounded absolute top-4 right-4"
      >
        Back to Home
      </button>
    </div>
  );
};

export default PlayVideo;
