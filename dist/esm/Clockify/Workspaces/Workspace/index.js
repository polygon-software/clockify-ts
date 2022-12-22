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
import ClockifyAPI from "../../../Api/ClockifyApi";
import Users from "./Users";
import Clients from "./Clients";
import Projects from "./Projects";
import Tags from "./Tags";
import CustomFields from "./CustomFields";
import TimeEntries from "./TimeEntries";
import UserGroups from "./UserGroups";
import Reports from "./Reports";
import Requests from "./Requests";
var Workspace = (function (_super) {
    __extends(Workspace, _super);
    function Workspace(apiKey, workspaceId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        return _this;
    }
    Workspace.prototype.resourceSubPath = function () {
        return "/workspaces/" + this.workspaceId;
    };
    Object.defineProperty(Workspace.prototype, "clients", {
        get: function () {
            return new Clients(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "customFields", {
        get: function () {
            return new CustomFields(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "projects", {
        get: function () {
            return new Projects(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "tags", {
        get: function () {
            return new Tags(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "timeEntries", {
        get: function () {
            return new TimeEntries(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "userGroups", {
        get: function () {
            return new UserGroups(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "users", {
        get: function () {
            return new Users(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "reports", {
        get: function () {
            return new Reports(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "requests", {
        get: function () {
            return new Requests(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    return Workspace;
}(ClockifyAPI));
export default Workspace;
//# sourceMappingURL=index.js.map