import { DevSettings, Pressable, Text, View } from 'react-native';

// Two ways to ask for a reload from JS, outside Fast Refresh.
export function ReloadButtons() {
  return (
    <View style={{ flexDirection: 'row', gap: 12, padding: 12 }}>
      <Pressable accessibilityLabel="devsettings-reload" onPress={() => DevSettings.reload()}>
        <Text>DevSettings.reload()</Text>
      </Pressable>
      <Pressable
        accessibilityLabel="reload-app-async"
        onPress={() => (globalThis as any).expo.reloadAppAsync('button')}>
        <Text>expo.reloadAppAsync()</Text>
      </Pressable>
    </View>
  );
}
