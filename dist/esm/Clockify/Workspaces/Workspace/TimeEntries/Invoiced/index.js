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
var Invoiced = (function (_super) {
    __extends(Invoiced, _super);
    function Invoiced(apiKey, workspaceId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        return _this;
    }
    Invoiced.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/time-entries/invoiced");
    };
    Invoiced.prototype.patch = function (data) {
        return this.axiosPatch(data, {});
    };
    return Invoiced;
}(ClockifyAPI));
export default Invoiced;
//# sourceMappingURL=index.js.map