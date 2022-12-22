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
import CustomFields from "./CustomFields";
import Estimate from "./Estimate";
import Memberships from "./Memberships";
import Tasks from "./Tasks";
import Template from "./Template";
var Project = (function (_super) {
    __extends(Project, _super);
    function Project(apiKey, workspaceId, projectId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        _this.projectId = projectId;
        return _this;
    }
    Project.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/projects/").concat(this.projectId);
    };
    Object.defineProperty(Project.prototype, "customFields", {
        get: function () {
            return new CustomFields(this._apiKey, this.workspaceId, this.projectId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "estimate", {
        get: function () {
            return new Estimate(this._apiKey, this.workspaceId, this.projectId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "memberships", {
        get: function () {
            return new Memberships(this._apiKey, this.workspaceId, this.projectId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "tasks", {
        get: function () {
            return new Tasks(this._apiKey, this.workspaceId, this.projectId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "template", {
        get: function () {
            return new Template(this._apiKey, this.workspaceId, this.projectId);
        },
        enumerable: false,
        configurable: true
    });
    Project.prototype.get = function () {
        return this.axiosGet({});
    };
    Project.prototype.put = function (data, query) {
        if (query === void 0) { query = {}; }
        return this.axiosPut(data, query);
    };
    Project.prototype.delete = function () {
        return this.axiosDelete({});
    };
    return Project;
}(ClockifyAPI));
export default Project;
//# sourceMappingURL=index.js.map