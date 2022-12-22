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
import ReportsApi from "../../../../../Api/ReportsApi";
var Summary = (function (_super) {
    __extends(Summary, _super);
    function Summary(apiKey, workspaceId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        return _this;
    }
    Summary.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/reports/summary");
    };
    Summary.prototype.post = function (data) {
        return this.axiosPost(data, {});
    };
    return Summary;
}(ReportsApi));
export default Summary;
//# sourceMappingURL=index.js.map