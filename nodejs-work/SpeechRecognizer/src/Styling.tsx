import styled, {css} from 'styled-components';

// These are variables that have CSS values multiple components will use
const textAlignment = css`
    text-align: center;
`;
const fontFamily = css`
    font-family: Helvetica;
`;
const mainTextColor = css`
    color: maroon;
`;

export const Title = styled.h1`
    ${textAlignment};
    ${fontFamily};
    font-size: 44pt;
    ${mainTextColor};
`;
export const Subtitle = styled.h2`
    ${textAlignment};
    ${fontFamily};
    font-size: 30pt;
    ${mainTextColor}
`;