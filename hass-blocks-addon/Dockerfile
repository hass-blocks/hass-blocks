ARG BUILD_TYPE=addon

ARG BUILD_FROM

FROM $BUILD_FROM as build_addon

FROM $BUILD_FROM as build_local
WORKDIR /addon

ONBUILD COPY ./.env /addon/.env

FROM build_${BUILD_TYPE}

RUN \
    apk add --no-cache \
    nodejs \
    pnpm

COPY ./package.json /addon/package.json
RUN pnpm install
COPY ./config.yaml /addon/config.yaml
COPY ./src/app /addon/src/app
COPY ./styles.css /addon/styles.css
COPY ./react-router.config.ts /addon/react-router.config.ts
COPY ./build-tsconfigs/tsconfig.json /addon/tsconfig.json
COPY ./build-tsconfigs/tsconfig.app.json /addon/tsconfig.app.json
COPY ./build-tsconfigs/tsconfig.node.json /addon/tsconfig.node.json
COPY ./vite.config.ts /addon/vite.config.ts
RUN pnpm run build:frontend
COPY ./src/node /addon/src/node
COPY ./run.sh /addon/run.sh

RUN chmod 755 /addon/run.sh

CMD [ "/addon/run.sh" ]
