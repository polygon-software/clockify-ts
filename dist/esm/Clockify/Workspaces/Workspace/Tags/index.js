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
import ClockifyAPI from "../../../../Api/ClockifyApi";
import Tag from "./Tag";
var Tags = (function (_super) {
    __extends(Tags, _super);
    function Tags(apiKey, workspaceId) {
        var _this = _super.call(this, apiKey) || this;
        _this.workspaceId = workspaceId;
        return _this;
    }
    Tags.prototype.resourceSubPath = function () {
        return "/workspaces/".concat(this.workspaceId, "/tags");
    };
    Tags.prototype.withId = function (tagId) {
        return new Tag(this._apiKey, this.workspaceId, tagId);
    };
    Tags.prototype.get = function (query) {
        return this.axiosGet(query);
    };
    Tags.prototype.post = function (data) {
        return this.axiosPost(data, {});
    };
    return Tags;
}(ClockifyAPI));
export default Tags;
//# sourceMappingURL=index.js.map