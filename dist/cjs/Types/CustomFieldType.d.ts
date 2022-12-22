export declare enum CustomFieldTypeEnum {
    text = "TXT",
    number = "NUMBER",
    dropdownSingle = "DROPDOWN_SINGLE",
    dropdownMultiple = "DROPDOWN_MULTIPLE",
    checkbox = "CHECKBOX",
    link = "LINK"
}
export declare enum CustomFieldStatusEnum {
    inactive = "INACTIVE",
    visible = "VISBLE",
    invisible = "INVISIBLE"
}
export declare enum CustomFieldProjectDefaultValuesStatusEnum {
    inactive = "INACTIVE",
    visible = "VISBLE",
    invisible = "INVISIBLE"
}
type CustomFieldType = {
    "id": string;
    "workspaceId": string;
    "name": string;
    "description": string;
    "type": CustomFieldTypeEnum;
    "placeholder": string;
    "allowedValues": Array<string>;
    "workspaceDefaultValue": string;
    "onlyAdminCanEdit": boolean;
    "status": CustomFieldStatusEnum;
    "projectDefaultValues": [
        {
            projectId: string;
            value: string;
            status: CustomFieldProjectDefaultValuesStatusEnum;
        }
    ];
};
export { CustomFieldType, };
