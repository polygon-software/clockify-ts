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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ClockifyApi_1 = __importDefault(require("../../Api/ClockifyApi"));
var Workspace_1 = __importDefault(require("./Workspace"));
var Workspaces = (function (_super) {
    __extends(Workspaces, _super);
    function Workspaces() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Workspaces.prototype.resourceSubPath = function () {
        return "/workspaces";
    };
    Workspaces.prototype.withId = function (workspaceId) {
        return new Workspace_1.default(this._apiKey, workspaceId);
    };
    Workspaces.prototype.get = function () {
        return this.axiosGet();
    };
    return Workspaces;
}(ClockifyApi_1.default));
exports.default = Workspaces;
//# sourceMappingURL=index.js.map