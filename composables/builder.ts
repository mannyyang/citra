export async function useCreateBuilder( projectData:string, html: string, css:string, js: string) {
    return $fetch('/api/builder', {
        method: 'post',
        body: {
            projectData,
            html,
            css,
            js
        },
    })
}