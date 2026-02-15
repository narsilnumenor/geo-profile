import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';
import { RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

type ZoomableImageProps = {
  src: string;
  alt: string;
};

export const ZoomableImage = (props: ZoomableImageProps) => {
  const { src, alt } = props;

  return (
    <TransformWrapper
      initialScale={1}
      minScale={0.5}
      maxScale={10}
      limitToBounds={true}
      doubleClick={{ mode: 'reset' }}
    >
      {({ zoomIn, zoomOut, resetTransform }) => (
        <div className="relative h-full w-full">
          <div className="absolute top-4 left-4 z-10 flex gap-2">
            <button
              onClick={() => zoomIn()}
              className="bg-card/80 text-foreground flex h-8 w-8 items-center justify-center rounded-full shadow-md backdrop-blur-md transition-transform hover:scale-110"
            >
              <ZoomIn size={16} />
            </button>
            <button
              onClick={() => zoomOut()}
              className="bg-card/80 text-foreground flex h-8 w-8 items-center justify-center rounded-full shadow-md backdrop-blur-md transition-transform hover:scale-110"
            >
              <ZoomOut size={16} />
            </button>
            <button
              onClick={() => resetTransform()}
              className="bg-card/80 text-foreground flex h-8 w-8 items-center justify-center rounded-full shadow-md backdrop-blur-md transition-transform hover:scale-110"
            >
              <RotateCcw size={16} />
            </button>
          </div>

          <TransformComponent
            wrapperStyle={{ width: '100%', height: '100%' }}
            contentStyle={{ width: '100%', height: '100%' }}
          >
            <img src={src} alt={alt} className="h-full w-full object-contain" />
          </TransformComponent>
        </div>
      )}
    </TransformWrapper>
  );
};
