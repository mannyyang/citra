# syntax=docker/dockerfile:1.4
# This is used specifically for railway
FROM directus/directus:10
USER root
RUN corepack enable \
&& corepack prepare pnpm@9 --activate \
&& chown node:node /directus
EXPOSE 8055
USER node
CMD : \
&& node /directus/cli.js bootstrap \
&& node /directus/cli.js start;
