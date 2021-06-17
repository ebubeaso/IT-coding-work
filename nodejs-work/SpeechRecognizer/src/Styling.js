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
exports.Subtitle = exports.Title = void 0;
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
