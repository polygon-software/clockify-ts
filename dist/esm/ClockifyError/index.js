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
import { getReasonPhrase } from "http-status-codes";
var ClockifyError = (function (_super) {
    __extends(ClockifyError, _super);
    function ClockifyError(error) {
        var _a;
        var message;
        var requestMethod = (_a = error.config.method) === null || _a === void 0 ? void 0 : _a.toUpperCase();
        if (error.response) {
            var statusCode = error.response.status;
            message = "Response Error[".concat(requestMethod, ":").concat(statusCode, "]: ").concat(getReasonPhrase(statusCode), ". Message: ").concat(error.response.data.message, ". Resource: ").concat(error.response.data.path);
        }
        else if (error.request) {
            message = "Response Error[".concat(requestMethod, "]: ").concat(JSON.stringify(error.request));
        }
        else {
            message = "Error: ".concat(error.message);
        }
        return _super.call(this, message) || this;
    }
    return ClockifyError;
}(Error));
export default ClockifyError;
//# sourceMappingURL=index.js.map