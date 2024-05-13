import { createDirectus, rest, uploadFiles } from '@directus/sdk';

const {
  public: {
    directus
  }
} = useRuntimeConfig();
const client = createDirectus(directus.url).with(rest());

class FileService {
  // TODO: return response so that grapesjs can display the uploaded files
  async upload(bufferFiles: {
    buffer: Buffer;
    name?: string;
    filename?: string;
    type?: string;
  }[]) {
    const pendingUploads = bufferFiles.map(async file => {
      const title = file.filename || '';
      const blob = new Blob(
        [file.buffer],
        { type: file.type })
      const fileName = file.filename;

      const formData = new FormData();
      formData.append('title', title);
      formData.append('file', blob, fileName);

      return await client.request(uploadFiles(formData));
    });

    return await Promise.all(pendingUploads);
  }
}

export const fileService = new FileService()
