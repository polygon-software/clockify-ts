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
var Api_1 = require("../../../Api");
var Users_1 = require("./Users");
var Clients_1 = require("./Clients");
var Projects_1 = require("./Projects");
var Tags_1 = require("./Tags");
var CustomFields_1 = require("./CustomFields");
var TimeEntries_1 = require("./TimeEntries");
var UserGroups_1 = require("./UserGroups");
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
            return new Clients_1.default(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "customFields", {
        get: function () {
            return new CustomFields_1.default(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "projects", {
        get: function () {
            return new Projects_1.default(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "tags", {
        get: function () {
            return new Tags_1.default(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "timeEntries", {
        get: function () {
            return new TimeEntries_1.default(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "userGroups", {
        get: function () {
            return new UserGroups_1.default(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Workspace.prototype, "users", {
        get: function () {
            return new Users_1.default(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    return Workspace;
}(Api_1.default));
exports.default = Workspace;
//# sourceMappingURL=index.js.map