import { createDirectus, rest, uploadFiles } from '@directus/sdk';

const {
  public: {
    directus
  }
} = useRuntimeConfig();
const client = createDirectus(directus.url).with(rest());

class FileService {
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

      const res = await client.request(uploadFiles(formData));
    
      return {
        src: `${directus.url}/assets/${res.id}`,
        type: res.type,
        name: res.filename_download
      }
    });

    return { data: await Promise.all(pendingUploads) };
  }
}

export const fileService = new FileService()
