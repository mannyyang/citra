export default defineEventHandler(async (event) => {
  const session = await authService.getSession(event)
  const { context: { params } } = event
  if (!session?.user || !params?.slug)
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })

  const { projectData, html, css, js } = await readBody<{ projectData: any[], html: string, css: string, js: string }>(event)
  if (!projectData || !html || !css || !js)
    throw createError({ statusCode: 400, statusMessage: 'Bad Request' })

  const builder = await pageService.updateBuilderById(params.slug, projectData, html, css, js)

  return { builder }
})
