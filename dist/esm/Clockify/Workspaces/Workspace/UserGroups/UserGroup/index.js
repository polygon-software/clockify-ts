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
import ClockifyAPI from "../../../../../Api/ClockifyApi";
import Users from "./Users";
var UserGroup = (function (_super) {
    __extends(UserGroup, _super);
    function UserGroup(apiKey, workspaceId, userGroupId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        _this.userGroupId = userGroupId;
        return _this;
    }
    UserGroup.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/user-groups/").concat(this.userGroupId);
    };
    Object.defineProperty(UserGroup.prototype, "users", {
        get: function () {
            return new Users(this._apiKey, this.workspaceId, this.userGroupId);
        },
        enumerable: false,
        configurable: true
    });
    UserGroup.prototype.put = function (data) {
        return this.axiosPut(data, {});
    };
    UserGroup.prototype.delete = function () {
        return this.axiosDelete({});
    };
    return UserGroup;
}(ClockifyAPI));
export default UserGroup;
//# sourceMappingURL=index.js.map