
export default defineEventHandler(async (event) => {
  const multiPartData = await readMultipartFormData(event);
  // get list of files from request
  const files = multiPartData ? multiPartData.map(file => {
    return {
      buffer: file.data,
      name: file.name,
      filename: file.filename,
      type: file.type,
    };
  }) : []

  return await fileService.upload(files)
})
