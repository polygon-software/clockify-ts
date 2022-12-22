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
import ClockifyAPI from "../../../../../../Api/ClockifyApi";
var TimeEntries = (function (_super) {
    __extends(TimeEntries, _super);
    function TimeEntries(apiKey, workspaceId, userId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        _this.userId = userId;
        return _this;
    }
    TimeEntries.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/user/").concat(this.userId, "/time-entries");
    };
    TimeEntries.prototype.get = function (query) {
        if (query === void 0) { query = {}; }
        return this.axiosGet(query);
    };
    TimeEntries.prototype.post = function (data) {
        return this.axiosPost(data, {});
    };
    TimeEntries.prototype.patch = function (data) {
        return this.axiosPatch(data);
    };
    return TimeEntries;
}(ClockifyAPI));
export default TimeEntries;
//# sourceMappingURL=index.js.map