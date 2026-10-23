# Expo Go 58: a Fast Refresh full reload fails with "Cannot find native module 'ExpoAsset'"

A fresh `create-expo-app` project (SDK 58), unchanged except for `repro/run.sh`.

## Steps

1. `npm install`, then `npx expo start` and open the app in Expo Go on iOS.
2. Run `./repro/run.sh`. It makes one save that Fast Refresh can't apply in place: it adds `export const answer = 42;` to `src/app/index.tsx`. Fast Refresh falls back to a full reload.

The reload doesn't come up. The app shows a red screen, and the dev server logs:

```
iOS  ERROR  Unhandled JS Exception: [runtime not ready]: Error: Cannot find native module 'ExpoAsset'
 WARN  No native ExponentConstants module found, are you sure the expo-constants's module is linked properly?
 ERROR  [runtime not ready]: Error: Cannot find native module 'ExpoAsset'
 ERROR  [runtime not ready]: Invariant Violation: "main" has not been registered.
```

After that the app no longer receives updates. Pressing Reload on the red screen, or relaunching Expo Go, loads the same project correctly.

`./repro/run.sh layout` does the same with `export const unstable_settings = { anchor: 'index' };` in `src/app/_layout.tsx`.
