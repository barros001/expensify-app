import * as DeviceCapabilities from '@libs/DeviceCapabilities';
import CONST from '@src/CONST';
import getNumberOfLines from './getNumberOfLines';
import updateNumberOfLines from './updateNumberOfLines';

type Selection = {
    start: number;
    end: number;
};

/**
 * Replace substring between selection with a text.
 */
function insertText(text: string, selection: Selection, textToInsert: string): string {
    return text.slice(0, selection.start) + textToInsert + text.slice(selection.end, text.length);
}

/**
 * Check whether we can skip trigger hotkeys on some specific devices.
 */
function canSkipTriggerHotkeys(isSmallScreenWidth: boolean, isKeyboardShown: boolean): boolean {
    // Do not trigger actions for mobileWeb or native clients that have the keyboard open
    // because for those devices, we want the return key to insert newlines rather than submit the form
    return (isSmallScreenWidth && DeviceCapabilities.canUseTouchScreen()) || isKeyboardShown;
}

function calculateTextDiff(text: string, previousText: string, cursor: number) {
    const remaining = text.slice(0, cursor);
    const suffix = text.slice(cursor, text.length);
    const previousTextWithoutSuffix = previousText.substring(0, previousText.length - suffix.length);

    let prefix = '';
    let i = 0;
    while (i < previousTextWithoutSuffix.length && previousTextWithoutSuffix[i] === remaining[i]) {
        prefix += remaining[i];
        i++;
    }

    const removed = previousText.substring(i, previousText.length - suffix.length);
    const added = text.substring(i, text.length - suffix.length);

    return {prefix, removed, added, suffix};
}

const isPreviousLetterEmoji = (text: string, index: number) => {
    const inputBeforeIndex = text.substring(0, index);

    // Use regex to find the last emoji in the text before the index
    const matches = [...inputBeforeIndex.matchAll(CONST.REGEX.EMOJI)];
    if (matches.length === 0) {
        return false;
    }

    // Check if the last match ends at the specified index
    const lastMatchEndIndex = (matches[matches.length - 1].index ?? 0) + matches[matches.length - 1][0].length;
    return lastMatchEndIndex === index;
};

function appendSpaceAfterEmoji(text: string, previousText: string, cursor: number) {
    const {added} = calculateTextDiff(text, previousText, cursor);

    if (!isPreviousLetterEmoji(added, added.length)) {
        return {text, cursor, added: false};
    }

    // add space after cursor, only if next char is not already a space
    const space = ' ';

    if (text.charAt(cursor) === space) {
        return {text, cursor: cursor + space.length, added: true};
    }

    return {text: insertText(text, {start: cursor, end: cursor}, space), cursor: cursor + space.length, added: true};
}

export {getNumberOfLines, updateNumberOfLines, insertText, canSkipTriggerHotkeys, appendSpaceAfterEmoji};
