// components/VideoPlayer.js
const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="w-full h-[75dvh]">
      <video controls className="w-full h-full mt-20">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;