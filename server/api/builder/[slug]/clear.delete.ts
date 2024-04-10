export default defineEventHandler(async (event) => {
  const session = await authService.getSession(event)
  const { context: { params } } = event
  if (!session?.user || !params?.slug)
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })

  await pageService.deleteBuilderById(params.slug)

  return { success: true }
})
