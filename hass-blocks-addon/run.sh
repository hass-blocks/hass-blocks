#!/usr/bin/with-contenv bashio

BLOCKS_DIR=/config/hass-blocks
BIN_DIR=/addon/node_modules/.bin
mkdir -p $BLOCKS_DIR
cd $BLOCKS_DIR

if [ -f /addon/.env ]; then
    cp /addon/.env $BLOCKS_DIR
fi

$BIN_DIR/hass-blocks load \
    --folder $BLOCKS_DIR \
    --websocketHost 0.0.0.0 \
    --websocketPort 8080 & \

node \
    /addon/src/node/serve-frontend.ts \
    /addon/dist/client
