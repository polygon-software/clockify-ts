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
import All from "./All";
import ClockifyAPI from "../../../../Api/ClockifyApi";
var Requests = (function (_super) {
    __extends(Requests, _super);
    function Requests(apiKey, workspaceId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        return _this;
    }
    Object.defineProperty(Requests.prototype, "all", {
        get: function () {
            return new All(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    return Requests;
}(ClockifyAPI));
export default Requests;
//# sourceMappingURL=index.js.map