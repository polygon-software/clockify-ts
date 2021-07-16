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
var http_status_codes_1 = require("http-status-codes");
var ClockifyError = (function (_super) {
    __extends(ClockifyError, _super);
    function ClockifyError(error) {
        var _this = this;
        var message = "";
        if (error.response) {
            var statusCode = error.response.status;
            message = "Response Error[" + statusCode + "]: " + http_status_codes_1.getReasonPhrase(statusCode) + ". Message: " + error.response.data.message + ". Resource: " + error.response.data.path;
        }
        else if (error.request) {
            message = "Response Error: " + JSON.stringify(error.request);
        }
        else {
            message = "Error: " + error.message;
        }
        _this = _super.call(this, message) || this;
        return _this;
    }
    return ClockifyError;
}(Error));
exports.default = ClockifyError;
//# sourceMappingURL=index.js.map