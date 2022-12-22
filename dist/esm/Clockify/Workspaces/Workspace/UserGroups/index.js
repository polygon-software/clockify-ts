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
import ClockifyAPI from "../../../../Api/ClockifyApi";
import UserGroup from "./UserGroup";
var UserGroups = (function (_super) {
    __extends(UserGroups, _super);
    function UserGroups(apiKey, workspaceId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        return _this;
    }
    UserGroups.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/user-groups");
    };
    UserGroups.prototype.withId = function (userGroupId) {
        return new UserGroup(this._apiKey, this.workspaceId, userGroupId);
    };
    UserGroups.prototype.get = function (query) {
        return this.axiosGet(query);
    };
    UserGroups.prototype.post = function (data) {
        return this.axiosPost(data);
    };
    return UserGroups;
}(ClockifyAPI));
export default UserGroups;
//# sourceMappingURL=index.js.map