"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembershipTypeEnum = exports.MembershipStatusEnum = void 0;
var MembershipStatusEnum;
(function (MembershipStatusEnum) {
    MembershipStatusEnum["pending"] = "PENDING";
    MembershipStatusEnum["active"] = "ACTIVE";
    MembershipStatusEnum["declined"] = "DECLINED";
    MembershipStatusEnum["inactive"] = "INACTIVE";
})(MembershipStatusEnum = exports.MembershipStatusEnum || (exports.MembershipStatusEnum = {}));
var MembershipTypeEnum;
(function (MembershipTypeEnum) {
    MembershipTypeEnum["workspace"] = "WORKSPACE";
    MembershipTypeEnum["project"] = "PROJECT";
    MembershipTypeEnum["usergroup"] = "USERGROUP";
    MembershipTypeEnum["all"] = "ALL";
})(MembershipTypeEnum = exports.MembershipTypeEnum || (exports.MembershipTypeEnum = {}));
//# sourceMappingURL=MembershipType.js.map