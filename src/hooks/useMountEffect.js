import {useEffect} from 'react';

/**
 * A hook that executes an effect only when a component is first rendered
 *
 * @param {Function} effect
 */
export default function useMountEffect(effect) {
    // dependencies are empty as we only want to run the effect once
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
}
