export default defineEventHandler(async (event) => {
  const { context: { params } } = event  
  if (!params?.slug)
    throw createError({ statusCode: 401, statusMessage: 'Parameter is invalid' })
  
  const builder = await pageService.getBuilderById(params.slug);

  if (!builder)
    throw createError({ statusCode: 404, statusMessage: 'Not Found' })
  return { builder }
})
