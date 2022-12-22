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
import ClockifyAPI from "../../../../../../../Api/ClockifyApi";
var Task = (function (_super) {
    __extends(Task, _super);
    function Task(apiKey, workspaceId, projectId, taskId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        _this.projectId = projectId;
        _this.taskId = taskId;
        return _this;
    }
    Task.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/projects/").concat(this.projectId, "/tasks/").concat(this.taskId);
    };
    Task.prototype.get = function () {
        return this.axiosGet({});
    };
    Task.prototype.put = function (data) {
        return this.axiosPut(data, {});
    };
    Task.prototype.delete = function () {
        return this.axiosDelete({});
    };
    return Task;
}(ClockifyAPI));
export default Task;
//# sourceMappingURL=index.js.map