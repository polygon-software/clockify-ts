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
import TimeEntries from "./TimeEntries";
var User = (function (_super) {
    __extends(User, _super);
    function User(apiKey, workspaceId, userId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        _this.userId = userId;
        return _this;
    }
    Object.defineProperty(User.prototype, "timeEntries", {
        get: function () {
            return new TimeEntries(this._apiKey, this.workspaceId, this.userId);
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/users/").concat(this.userId);
    };
    User.prototype.put = function (data) {
        return this.axiosPut(data, {});
    };
    User.prototype.delete = function () {
        return this.axiosDelete({});
    };
    return User;
}(ClockifyAPI));
export default User;
//# sourceMappingURL=index.js.map