import { DevSettings } from 'react-native';

// Off: Fast Refresh's full reload goes through DevSettings.reload() as usual.
// `./repro/patch.sh` switches it on, routing that reload to expo.reloadAppAsync().
export const ROUTE_TO_RELOAD_APP_ASYNC = false;

if (__DEV__ && ROUTE_TO_RELOAD_APP_ASYNC) {
  DevSettings.reload = (reason?: string) => {
    console.log(`[reload-patch] reloadAppAsync instead of DevSettings.reload (${reason ?? ''})`);
    (globalThis as any).expo.reloadAppAsync(reason ?? 'fast refresh');
  };
}
