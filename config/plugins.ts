export default {
  'schemas-to-ts': {
    enabled: true,
    config: {
      commonInterfacesFolderName: "schemas-to-ts",
      verboseLogs: false,
      alwaysAddEnumSuffix: false
    }
  },
  'public-permissions': {
    enabled: true,
    config: {
      verbose: true,
      actions: {
        "*": ["find", "findOne"],
      },
      plugins: {
        "users-permissions.auth": ["callback", "connect", "register"],
        "users-permissions.permissions": [],
        "users-permissions.role": [],
        "users-permissions.user": ["me"],
      },
    },
  },
}