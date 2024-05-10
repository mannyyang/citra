import { authentication, createDirectus, readCollection, readCollections, readItems, rest, uploadFiles } from '@directus/sdk';

export default defineNuxtPlugin(async (nuxtApp) => {
    const config = nuxtApp.$config;

    const directus = createDirectus(config.public.directus.url).with(authentication()).with(rest());

    const res = await directus.login(config.public.directus.email, config.public.directus.password)

    return {
        provide: { directus, uploadFiles, readItems, readCollections, readCollection, isAuthenticated: res ? true : false },
    };
});