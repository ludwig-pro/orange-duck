To launch the end-to-end tests:
- download maestro: `curl -Ls "https://get.maestro.mobile.dev" | bash`
- run fixtures end-to-end: `maestro test e2e/fixtures.yaml`

Optimization made :
- `getItemLayout` removes the need for the FlatList to manage async layout calculations.
- `useCallback` on `keyExtractor` and `renderItem`
- Optimize `FixtureCard`:
    - Basic/light components
    - Use cached optimized images with `react-native-fast-image`
    - Use memoized component: to skip re-rendering the component when its props are unchanged.

To go further:
- Enable Hermes

