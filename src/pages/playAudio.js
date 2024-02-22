import { useRouter } from 'next/router';
import AudioPlayer from '../components/AudioPlayerComponent';
import AudioPlayerComponent from '../components/AudioPlayerComponent';

const PlayAudio = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push('/');
  };

  const audioUrl = localStorage.getItem('uploadedFileUrl') || '';

  return (
    <div className="container mx-auto my-8 relative">
      <h1 className="text-3xl font-semibold mb-4">Audio Player</h1>
      <AudioPlayerComponent audioUrl={audioUrl} />
      <button
        onClick={handleBack}
        className="bg-gradient-to-r font-bold from-green-300 via-blue-500 to-purple-600 text-white px-4 py-2 rounded absolute top-4 right-4"
      >
        Back to Home
      </button>
    </div>
  );
};

export default PlayAudio;
 