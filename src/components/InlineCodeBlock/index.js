import _ from 'lodash';
import React from 'react';
import Text from '@components/Text';
import inlineCodeBlockPropTypes from './inlineCodeBlockPropTypes';

const toText = (tnode) => {
    if (tnode.data) {
        return tnode.data;
    }

    let text = '';

    if (!tnode.children || tnode.children.length === 0) {
        return text;
    }

    for (let i = 0; i < tnode.children.length; i++) {
        text += toText(tnode.children[i]);
    }

    return text;
};

function InlineCodeBlock(props) {
    const TDefaultRenderer = props.TDefaultRenderer;
    const textStyles = _.omit(props.textStyle, 'textDecorationLine');

    return (
        <TDefaultRenderer
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props.defaultRendererProps}
        >
            <Text style={{...props.boxModelStyle, ...textStyles}}>{toText(props.defaultRendererProps.tnode)}</Text>
        </TDefaultRenderer>
    );
}

InlineCodeBlock.propTypes = inlineCodeBlockPropTypes;
InlineCodeBlock.displayName = 'InlineCodeBlock';
export default InlineCodeBlock;
