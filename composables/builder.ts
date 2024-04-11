export async function useCreateBuilder( projectData:string, html: string, css:string, js: string) {
    return await $fetch('/api/builder', {
        method: 'post',
        body: {
            projectData,
            html,
            css,
            js
        },
    })
}

export async function usePreviewBuilder(id: string) {
    return await $fetch(`/api/builder/${id}`)
}