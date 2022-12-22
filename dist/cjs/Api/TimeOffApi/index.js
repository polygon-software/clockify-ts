"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var ClockifyApi_1 = __importDefault(require("../ClockifyApi"));
var TimeOffApi = (function (_super) {
    __extends(TimeOffApi, _super);
    function TimeOffApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeOffApi.prototype.clockifyApiInstance = function (apiKey) {
        return axios_1.default.create({
            baseURL: "https://pto.api.clockify.me/v1",
            headers: {
                'content-type': 'application/json',
                'X-Api-Key': apiKey,
            },
        });
    };
    return TimeOffApi;
}(ClockifyApi_1.default));
exports.default = TimeOffApi;
//# sourceMappingURL=index.js.map