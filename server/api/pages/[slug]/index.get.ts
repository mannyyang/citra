export default defineEventHandler(async (event) => {
  const session = await authService.getSession(event)
  const { context: { params } } = event
  if (!session?.user || !params?.slug)
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })

  const builder = await pageService.getBuilderById(params.slug);

  if (!builder)
    throw createError({ statusCode: 404, statusMessage: 'Not Found' })

  return { builder }
})
