"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var ClockifyAPI = (function () {
    function ClockifyAPI(apiKey) {
        this._apiKey = apiKey;
        this._api = this.clockifyApiInstance(apiKey);
        this.query = {};
    }
    ClockifyAPI.prototype.resetQuery = function () {
        var _this = this;
        Object.keys(this.query).forEach(function (key) {
            _this.query[key] = undefined;
        });
    };
    ClockifyAPI.prototype.resourceSubPath = function () {
        return "";
    };
    ClockifyAPI.prototype.concatResourcePaths = function (path, subpath) {
        return "" + path + subpath;
    };
    ClockifyAPI.prototype.clockifyApiInstance = function (apiKey) {
        return axios_1.default.create({
            baseURL: "https://api.clockify.me/api/v1",
            headers: {
                'content-type': 'application/json',
                'X-Api-Key': apiKey,
            },
        });
    };
    ClockifyAPI.prototype.get = function (params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        var uri = this.resourceSubPath();
        console.log(uri);
        return this._api.get(uri, { params: params })
            .then(function (res) { return res.data; })
            .then(function (data) {
            _this.resetQuery();
            return data;
        });
    };
    ClockifyAPI.prototype.post = function (data, params) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (params === void 0) { params = {}; }
        return this._api.post(this.resourceSubPath(), { data: data, params: params })
            .then(function (res) { return res.data; })
            .then(function (data) {
            _this.resetQuery();
            return data;
        });
    };
    return ClockifyAPI;
}());
exports.default = ClockifyAPI;
//# sourceMappingURL=index.js.map