BLOCKS_DIR=/config/hass-blocks
BIN_DIR=/addon/node_modules/.bin

mkdir -p $BLOCKS_DIR || true

$BIN_DIR/has-blocks load \
    --folder $BLOCKS_DIR \
    --codegenOutput $BLOCKS_DIR/.blocks & \
    --websocketHost 0.0.0.0
    --websocketPort 8080

$BIN_DIR/vite-node \
    /src/node/serve-frontend.ts \
    /addon/build/client
