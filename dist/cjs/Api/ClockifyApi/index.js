"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var qs_1 = require("qs");
var axios_1 = __importDefault(require("axios"));
var ClockifyError_1 = __importDefault(require("../../ClockifyError"));
var paramsSerializer = function (params) { return (0, qs_1.stringify)(params, {
    arrayFormat: "repeat",
    serializeDate: function (d) { return d.toISOString(); },
}); };
var ClockifyAPI = (function () {
    function ClockifyAPI(apiKey) {
        this._apiKey = apiKey;
        this._api = this.clockifyApiInstance(apiKey);
    }
    ClockifyAPI.prototype.resourceSubPath = function () {
        return "";
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
    ClockifyAPI.prototype.axiosGet = function (query) {
        if (query === void 0) { query = {}; }
        return this._api.get(this.resourceSubPath(), { params: query, paramsSerializer: paramsSerializer })
            .then(function (res) { return res.data; })
            .catch(function (err) { throw new ClockifyError_1.default(err); });
    };
    ClockifyAPI.prototype.axiosPost = function (data, query) {
        if (data === void 0) { data = {}; }
        if (query === void 0) { query = {}; }
        return this._api.post(this.resourceSubPath(), data, { params: query, paramsSerializer: paramsSerializer })
            .then(function (res) { return res.data; })
            .catch(function (err) { throw new ClockifyError_1.default(err); });
    };
    ClockifyAPI.prototype.axiosPut = function (data, query) {
        if (data === void 0) { data = {}; }
        if (query === void 0) { query = {}; }
        return this._api.put(this.resourceSubPath(), data, { params: query, paramsSerializer: paramsSerializer })
            .then(function (res) { return res.data; })
            .catch(function (err) { throw new ClockifyError_1.default(err); });
    };
    ClockifyAPI.prototype.axiosPatch = function (data, query) {
        if (data === void 0) { data = {}; }
        if (query === void 0) { query = {}; }
        return this._api.patch(this.resourceSubPath(), data, { params: query, paramsSerializer: paramsSerializer })
            .then(function (res) { return res.data; })
            .catch(function (err) { throw new ClockifyError_1.default(err); });
    };
    ClockifyAPI.prototype.axiosDelete = function (query) {
        if (query === void 0) { query = {}; }
        return this._api.delete(this.resourceSubPath(), { params: query, paramsSerializer: paramsSerializer })
            .then(function (res) { return res.data; })
            .catch(function (err) { throw new ClockifyError_1.default(err); });
    };
    return ClockifyAPI;
}());
exports.default = ClockifyAPI;
//# sourceMappingURL=index.js.map