import { useState } from 'react';
import { MAPS_DATA } from '@/shared/api/materials';
import { Modal } from '@/shared/ui/Modal';
import { Image } from '@/entities/Image';
import { ZoomableImage } from '@/shared/ui/ZoomableImage';

export const MapsPage = () => {
  const [selectedMap, setSelectedMap] = useState<(typeof MAPS_DATA)[0] | null>(
    null
  );

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-foreground text-3xl font-bold">Карталар</h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {MAPS_DATA.map((map) => (
          <Image
            key={map.id}
            title={map.title}
            fileUrl={map.fileUrl}
            onClick={() => setSelectedMap(map)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedMap}
        onClose={() => setSelectedMap(null)}
        title={selectedMap?.title}
      >
        {selectedMap && (
          <div className="aspect-video max-h-[calc(90vh-100px)] w-full">
            <ZoomableImage src={selectedMap.fileUrl} alt={selectedMap.title} />
          </div>
        )}
      </Modal>
    </div>
  );
};
