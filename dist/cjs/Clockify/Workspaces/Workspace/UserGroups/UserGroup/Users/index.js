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
var User_1 = __importDefault(require("./User"));
var Users = (function (_super) {
    __extends(Users, _super);
    function Users(apiKey, workspaceId, userGroupId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        _this.userGroupId = userGroupId;
        return _this;
    }
    Users.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/user-groups/").concat(this.userGroupId, "/users");
    };
    Users.prototype.withId = function (userId) {
        return new User_1.default(this._apiKey, this.workspaceId, this.userGroupId, userId);
    };
    Users.prototype.post = function (data) {
        return this.axiosPost(data, {});
    };
    return Users;
}(ClockifyApi_1.default));
exports.default = Users;
//# sourceMappingURL=index.js.map