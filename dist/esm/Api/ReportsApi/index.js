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
import axios from "axios";
import ClockifyAPI from "../ClockifyApi";
var ReportsApi = (function (_super) {
    __extends(ReportsApi, _super);
    function ReportsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReportsApi.prototype.clockifyApiInstance = function (apiKey) {
        return axios.create({
            baseURL: "https://reports.api.clockify.me/v1",
            headers: {
                'content-type': 'application/json',
                'X-Api-Key': apiKey,
            },
        });
    };
    return ReportsApi;
}(ClockifyAPI));
export default ReportsApi;
//# sourceMappingURL=index.js.map