import React, {useRef} from 'react';
import {View} from 'react-native';
import {RenderHTMLSource} from 'react-native-render-html';
import useWindowDimensions from '@hooks/useWindowDimensions';
import multiFontFamily from '@styles/fontFamily/multiFontFamily';

type RenderHTMLProps = {
    /** HTML string to render */
    html: string;
};

const appendEmojiFontFamily = (wrapper: HTMLElement) => {
    wrapper.querySelectorAll<HTMLElement>('[style*="font-family"]').forEach((e) => {
        if (e.style.fontFamily.includes('Emoji')) {
            return;
        }
        e.style.fontFamily = `${e.style.fontFamily}, ${multiFontFamily.EMOJI}`;
    });
};
function RenderHTML({html}: RenderHTMLProps) {
    const {windowWidth} = useWindowDimensions();
    const htmlRef = useRef('');

    return (
        <View
            ref={(ref) => {
                if (!ref || htmlRef.current === html) {
                    return;
                }

                htmlRef.current = html;

                appendEmojiFontFamily(ref as unknown as HTMLElement);
            }}
        >
            <RenderHTMLSource
                contentWidth={windowWidth * 0.8}
                source={{html}}
            />
        </View>
    );
}

RenderHTML.displayName = 'RenderHTML';

export default RenderHTML;
