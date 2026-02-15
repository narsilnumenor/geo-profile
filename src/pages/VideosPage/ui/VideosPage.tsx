import { useState } from 'react';
import ReactPlayer from 'react-player';
import { VIDEOS_DATA } from '@/shared/api/materials';
import { Video } from '@/entities/Video';

export const VideosPage = () => {
  const [activeVideo, setActiveVideo] = useState(VIDEOS_DATA[0] || null);

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-foreground text-3xl font-bold">Бейнесабақтар</h1>

      {activeVideo && (
        <div className="bg-card ring-border w-full overflow-hidden rounded-xl shadow-lg ring-1">
          <ReactPlayer
            src={activeVideo.fileUrl}
            key={activeVideo.id}
            controls
            preload="metadata"
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: '16 / 9'
            }}
          />
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {VIDEOS_DATA.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            fileUrl={video.fileUrl}
            isActive={activeVideo?.id === video.id}
            onClick={() => setActiveVideo(video)}
          />
        ))}
      </div>
    </div>
  );
};
