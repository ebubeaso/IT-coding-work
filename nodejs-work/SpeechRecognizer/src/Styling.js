"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = exports.SpeakButton = exports.Paragraph = exports.TheHeader = exports.Subtitle = exports.Title = void 0;
const styled_components_1 = __importStar(require("styled-components"));
// These are variables that have CSS values multiple components will use
const textAlignment = styled_components_1.css `
    text-align: center;
`;
const fontFamily = styled_components_1.css `
    font-family: Helvetica;
`;
const mainTextColor = styled_components_1.css `
    color: maroon;
`;
const flexDisplay = styled_components_1.css `
    display: flex;
`;
exports.Title = styled_components_1.default.h1 `
    ${textAlignment};
    ${fontFamily};
    font-size: 44pt;
    ${mainTextColor};
`;
exports.Subtitle = styled_components_1.default.h2 `
    ${textAlignment};
    ${fontFamily};
    font-size: 30pt;
    ${mainTextColor}
`;
exports.TheHeader = styled_components_1.default.header `
    padding: 1%;
    ${flexDisplay};
    flex-direction: column;
    width:100%;
    margin-left: -10px;
    background: linear-gradient(to left, navy, steelblue);
`;
exports.Paragraph = styled_components_1.default.p `
    ${fontFamily};
    ${mainTextColor};
    font-size: 16pt;
    margin: 1% 0%;
    text-align: center;
`;
exports.SpeakButton = styled_components_1.default.button `
    background-color: darkcyan;
    color: white;
    border: 2px solid white;
    border-radius: 20px;
    font-size: 18pt;
    padding: 1%;
    margin: 1% 45%;
`;
exports.Response = styled_components_1.default.p `
    ${fontFamily};
    ${mainTextColor};
    font-size: 16pt;
    margin: 1% 15%;
`;
