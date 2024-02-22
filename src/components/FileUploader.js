import { useState } from 'react';
import { useRouter } from 'next/router';
import TextInput from './TextInput';

const FileUploader = ({ onFileUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      localStorage.setItem('uploadedFileUrl', fileUrl);
      onFileUpload(fileUrl);

      // Determine whether it's a video or audio file
      const isVideo = selectedFile.type.startsWith('video/');
      const isAudio = selectedFile.type.startsWith('audio/');

      // Redirect to the appropriate play page
      if (isVideo) {
        router.push('/playVideo');
      } else if (isAudio) {
        router.push('/playAudio');
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-[80%] gap-24">
      <TextInput />
      <label
        htmlFor="fileInput"
        className="bg-gradient-to-r font-bold from-green-300 via-blue-500 to-purple-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        Choose Audio or Video File
      </label>
      <input
        type="file"
        accept="video/mp4, audio/*"
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
      />
      {selectedFile && (
        <p className="mt-2">
          File selected: <span className="font-bold">{selectedFile.name}</span>
        </p>
      )}
      <button
        onClick={handleUpload}
        className="bg-gradient-to-r font-bold from-green-300 via-blue-500 to-purple-600 text-white px-4 py-2 rounded"
      >
        Upload and Play
      </button>
    </div>
  );
};

export default FileUploader;
