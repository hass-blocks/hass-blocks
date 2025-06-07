BLOCKS_DIR=/config/hass-blocks

mkdir -p $BLOCKS_DIR || true

/node_modules/.bin/has-blocks load \
    --folder $BLOCKS_DIR \
    --codegenOutput $BLOCKS_DIR/.blocks
