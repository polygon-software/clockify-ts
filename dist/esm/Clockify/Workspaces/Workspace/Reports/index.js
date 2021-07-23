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
import Summary from "./Summary";
import ClockifyAPI from "../../../../Api/ClockifyApi";
import Detailed from "./Detailed";
var Reports = (function (_super) {
    __extends(Reports, _super);
    function Reports(apiKey, workspaceId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        return _this;
    }
    Object.defineProperty(Reports.prototype, "summary", {
        get: function () {
            return new Summary(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Reports.prototype, "detailed", {
        get: function () {
            return new Detailed(this._apiKey, this.workspaceId);
        },
        enumerable: false,
        configurable: true
    });
    return Reports;
}(ClockifyAPI));
export default Reports;
//# sourceMappingURL=index.js.map