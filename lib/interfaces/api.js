"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHttpEndpoint = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const httpMethods = ['get', 'path', 'put', 'post', 'delete'];
/**
 * Basic fetch method
 * @param url
 * @param options
 */
const fetch = (url, options) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, node_fetch_1.default)(url, Object.assign({ headers: {
            'Accept': 'application/json',
        } }, options));
    if (!response.ok) {
        const error = yield response.text();
        return new Error(error);
    }
    const json = yield response.json();
    return json;
});
const createHttpEndpoint = () => {
    const methods = httpMethods.reduce((memo, method) => {
        methods[method.toLowerCase()] = (url, options) => __awaiter(void 0, void 0, void 0, function* () {
            const model = yield fetch(url, Object.assign({ method }, options));
            return model;
        });
        return memo;
    }, {});
    return Object.assign({}, methods);
};
exports.createHttpEndpoint = createHttpEndpoint;
