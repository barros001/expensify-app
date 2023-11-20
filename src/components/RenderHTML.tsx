import React from 'react';
import {RenderHTMLSource} from 'react-native-render-html';
import useWindowDimensions from '@hooks/useWindowDimensions';
import CONST from '@src/CONST';

type RenderHTMLProps = {
    /** HTML string to render */
    html: string;
};

const wrapEmojis = (html: string): string => {
    let wrappedHtml = html;

    const emojis = [...new Set(html.match(CONST.REGEX.EMOJIS))];
    if (emojis) {
        emojis.forEach((emoji) => {
            wrappedHtml = html.replaceAll(emoji, `<emoji>${emoji}</emoji>`);
        });
    }

    return wrappedHtml;
};
// We are using the explicit composite architecture for performance gains.
// Configuration for RenderHTML is handled in a top-level component providing
// context to RenderHTMLSource components. See https://git.io/JRcZb
// The provider is available at src/components/HTMLEngineProvider/
function RenderHTML({html}: RenderHTMLProps) {
    const {windowWidth} = useWindowDimensions();
    return (
        <RenderHTMLSource
            contentWidth={windowWidth * 0.8}
            source={{html: wrapEmojis(html)}}
        />
    );
}

RenderHTML.displayName = 'RenderHTML';

export default RenderHTML;
