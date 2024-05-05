export default defineEventHandler(async (event) => {   
    const { projectData, html, css, js } = await readBody<{ projectData: any[], html:string, css:string, js:string }>(event)
    
    if (!projectData || !html || !css)
        throw createError({ statusCode: 400, statusMessage: 'Bad Request' })
        
    const builder = await pageService.create(projectData, html, css, js); 

    return { builder }
})