import { LECTURES_DATA } from '@/shared/api/materials';
import { Document } from '@/entities/Document';
import { createDownloadLink } from '@/shared/lib/utils/createDownloadLink';

export const LecturesPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-foreground text-3xl font-bold">Дәрістер</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {LECTURES_DATA.map((lecture) => (
          <Document
            key={lecture.id}
            title={lecture.title}
            fileUrl={lecture.fileUrl}
            onClick={() => createDownloadLink(lecture.fileUrl, lecture.title)}
          />
        ))}
      </div>
    </div>
  );
};
