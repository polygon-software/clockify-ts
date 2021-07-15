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
var Api_1 = require("../../Api");
var Workspaces = (function (_super) {
    __extends(Workspaces, _super);
    function Workspaces(apiKey) {
        var _this = _super.call(this, apiKey) || this;
        _this.query = { id: undefined };
        return _this;
    }
    Workspaces.prototype.setDefaultId = function (workspaceId) {
        this.query.id = workspaceId;
        return this;
    };
    Workspaces.prototype.withId = function (temporaryWorkspaceId) {
        this.query.id = temporaryWorkspaceId;
        return this;
    };
    Workspaces.prototype.fetch = function () {
        return this.axiosGet();
    };
    Workspaces.prototype.resourceSubPath = function () {
        var base = this.concatResourcePaths(_super.prototype.resourceSubPath.call(this), "/workspaces");
        if (this.query.id) {
            return base + "/" + this.query.id;
        }
    };
    return Workspaces;
}(Api_1.default));
exports.default = Workspaces;
//# sourceMappingURL=index.js.map
