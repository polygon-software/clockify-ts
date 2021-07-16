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
Object.defineProperty(exports, "__esModule", { value: true });
var Api_1 = require("../../../../Api");
var TimeEntry_1 = require("./TimeEntry");
var TimeEntries = (function (_super) {
    __extends(TimeEntries, _super);
    function TimeEntries(apiKey, workspaceId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        return _this;
    }
    TimeEntries.prototype.resourceSubPath = function () {
        return "/workspaces/" + this.workspaceId + "/time-entries";
    };
    TimeEntries.prototype.withId = function (timeEntryId) {
        return new TimeEntry_1.default(this._apiKey, this.workspaceId, timeEntryId);
    };
    TimeEntries.prototype.post = function (data) {
        return this.axiosPost(data, {});
    };
    return TimeEntries;
}(Api_1.default));
exports.default = TimeEntries;
//# sourceMappingURL=index.js.map