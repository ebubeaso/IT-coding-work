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
const flexDisplay = css`
    display: flex;
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
export const TheHeader = styled.header`
    padding: 1%;
    ${flexDisplay};
    flex-direction: column;
    width:100%;
    margin-left: -10px;
    background: linear-gradient(to left, navy, steelblue);
`;
export const Paragraph = styled.p`
    ${fontFamily};
    ${mainTextColor};
    font-size: 16pt;
    margin: 1% 0%;
    text-align: center;
`;
export const SpeakButton = styled.button`
    background-color: darkcyan;
    color: white;
    border: 2px solid white;
    border-radius: 20px;
    font-size: 18pt;
    padding: 1%;
    margin: 1% 45%;
`;
export const Response = styled.p`
    ${fontFamily};
    ${mainTextColor};
    font-size: 24pt;
    margin: 1% 35%;
`;
