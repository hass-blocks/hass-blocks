BLOCKS_DIR=/config/hass-blocks
BIN_DIR=/addon/node_modules/.bin

$BIN_DIR/hass-blocks load \
    --folder $BLOCKS_DIR \
    --websocketHost 0.0.0.0 \
    --websocketPort 8080 & \

$BIN_DIR/vite-node \
    /src/node/serve-frontend.ts \
    /addon/build/client
