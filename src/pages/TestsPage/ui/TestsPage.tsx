import { TESTS_DATA } from '@/shared/api/materials';
import { Document } from '@/entities/Document';
import { createDownloadLink } from '@/shared/lib/utils/createDownloadLink';

export const TestsPage = () => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-foreground text-3xl font-bold">Тестер</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {TESTS_DATA.map((test) => (
          <Document
            key={test.id}
            title={test.title}
            fileUrl={test.fileUrl}
            onClick={() => createDownloadLink(test.fileUrl, test.title)}
          />
        ))}
      </div>
    </div>
  );
};
