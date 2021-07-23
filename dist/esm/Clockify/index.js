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
import ClockifyAPI from "../Api/ClockifyApi";
import Users from "./Users";
import Workspace from "./Workspaces";
import Workspaces from "./Workspaces";
var Clockify = (function (_super) {
    __extends(Clockify, _super);
    function Clockify(apiKey) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspace = new Workspace(apiKey);
        return _this;
    }
    Object.defineProperty(Clockify.prototype, "user", {
        get: function () {
            return new Users(this._apiKey);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Clockify.prototype, "workspaces", {
        get: function () {
            return new Workspaces(this._apiKey);
        },
        enumerable: false,
        configurable: true
    });
    return Clockify;
}(ClockifyAPI));
export default Clockify;
//# sourceMappingURL=index.js.map