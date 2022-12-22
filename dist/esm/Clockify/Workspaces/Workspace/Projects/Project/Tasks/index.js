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
import Task from "./Task";
var Tasks = (function (_super) {
    __extends(Tasks, _super);
    function Tasks(apiKey, workspaceId, projectId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        _this.projectId = projectId;
        return _this;
    }
    Tasks.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/projects/").concat(this.projectId, "/tasks");
    };
    Tasks.prototype.withId = function (taskId) {
        return new Task(this._apiKey, this.workspaceId, this.projectId, taskId);
    };
    Tasks.prototype.get = function (query) {
        if (query === void 0) { query = {}; }
        return this.axiosGet(query);
    };
    Tasks.prototype.post = function (data) {
        return this.axiosPost(data, {});
    };
    return Tasks;
}(ClockifyAPI));
export default Tasks;
//# sourceMappingURL=index.js.map