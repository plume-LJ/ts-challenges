var Permission;
(function (Permission) {
    Permission[Permission["Owner"] = 4096] = "Owner";
    Permission[Permission["OwnerWrite"] = 2048] = "OwnerWrite";
    Permission[Permission["OwnerExecute"] = 1024] = "OwnerExecute";
    Permission[Permission["OwnerRead"] = 512] = "OwnerRead";
    Permission[Permission["UserRead"] = 256] = "UserRead";
    Permission[Permission["UserWrite"] = 128] = "UserWrite";
    Permission[Permission["UserExecute"] = 64] = "UserExecute";
    Permission[Permission["GroupRead"] = 32] = "GroupRead";
    Permission[Permission["GroupWrite"] = 16] = "GroupWrite";
    Permission[Permission["GroupExecute"] = 8] = "GroupExecute";
    Permission[Permission["AllRead"] = 4] = "AllRead";
    Permission[Permission["AllWrite"] = 2] = "AllWrite";
    Permission[Permission["AllExecute"] = 1] = "AllExecute";
    Permission[Permission["None"] = 0] = "None";
})(Permission || (Permission = {}));
console.log(Permission.AllExecute | Permission.AllRead, Permission);
var aa = {
    '0': 'None',
    '1': 'AllExecute',
    '2': 'AllWrite',
    '4': 'AllRead',
    '8': 'GroupExecute',
    '16': 'GroupWrite',
    '32': 'GroupRead',
    '64': 'UserExecute',
    '128': 'UserWrite',
    '256': 'UserRead',
    '512': 'OwnerRead',
    '1024': 'OwnerExecute',
    '2048': 'OwnerWrite',
    '4096': 'Owner',
    Owner: 4096,
    OwnerWrite: 2048,
    OwnerExecute: 1024,
    OwnerRead: 512,
    UserRead: 256,
    UserWrite: 128,
    UserExecute: 64,
    GroupRead: 32,
    GroupWrite: 16,
    GroupExecute: 8,
    AllRead: 4,
    AllWrite: 2,
    AllExecute: 1,
    None: 0
};
