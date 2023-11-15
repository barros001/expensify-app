import React from 'react';
import Text from '@components/Text';
import htmlRendererPropTypes from './htmlRendererPropTypes';

function EmojiRenderer(props) {
    return <Text>{props.tnode.data}</Text>;
}

EmojiRenderer.propTypes = htmlRendererPropTypes;
EmojiRenderer.displayName = 'EmojiRenderer';

export default EmojiRenderer;
