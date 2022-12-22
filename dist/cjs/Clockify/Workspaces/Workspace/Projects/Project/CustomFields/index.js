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
var ClockifyApi_1 = __importDefault(require("../../../../../../Api/ClockifyApi"));
var CustomField_1 = __importDefault(require("./CustomField"));
var CustomFields = (function (_super) {
    __extends(CustomFields, _super);
    function CustomFields(apiKey, workspaceId, projectId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        _this.projectId = projectId;
        return _this;
    }
    CustomFields.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/projects/").concat(this.projectId, "/custom-fields");
    };
    CustomFields.prototype.withId = function (customFieldId) {
        return new CustomField_1.default(this._apiKey, this.workspaceId, this.projectId, customFieldId);
    };
    CustomFields.prototype.get = function (query) {
        return this.axiosGet(query);
    };
    return CustomFields;
}(ClockifyApi_1.default));
exports.default = CustomFields;
//# sourceMappingURL=index.js.map