'use strict';
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
exports.NavList = exports.NavLinks = exports.Ul = exports.TheHeader = exports.sharedDisplay = exports.Title = void 0;
const styled_components_1 = __importStar(require("styled-components"));
exports.Title = styled_components_1.default.h1 `
    color: maroon;
    font-family: Helvetica;
    text-align: center;
    font-size: 42pt;
`;
exports.sharedDisplay = styled_components_1.css `
    display: flex;
`;
exports.TheHeader = styled_components_1.default.header `
    ${exports.sharedDisplay}
    padding: 1%;
    flex-direction: column;
    background: linear-gradient(to right, navy, steelblue);
    width: 100%;
    margin-left: -10px;
`;
exports.Ul = styled_components_1.default.ul `
    ${exports.sharedDisplay};
`;
exports.NavLinks = styled_components_1.default.a `
    font-size: 20pt;
    text-decoration: none;
    color: whitesmoke;
`;
exports.NavList = styled_components_1.default.li `
    list-style-type: none;
    margin-right: 4%;
    color: white;
`;
