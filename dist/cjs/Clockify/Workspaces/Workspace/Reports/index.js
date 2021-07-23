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
var Summary_1 = __importDefault(require("./Summary"));
var ClockifyApi_1 = __importDefault(require("../../../../Api/ClockifyApi"));
var Detailed_1 = __importDefault(require("./Detailed"));
var Reports = (function (_super) {
    __extends(Reports, _super);
    function Reports(apiKey, workspaceId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        return _this;
    }
    Object.defineProperty(Reports.prototype, "summary", {
        get: function () {
            return new Summary_1.default(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reports.prototype, "detailed", {
        get: function () {
            return new Detailed_1.default(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    return Reports;
}(ClockifyApi_1.default));
exports.default = Reports;
//# sourceMappingURL=index.js.map