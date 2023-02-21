To launch the end-to-end tests:
- download maestro: `curl -Ls "https://get.maestro.mobile.dev" | bash`
- run fixtures end-to-end: `maestro test e2e/fixtures.yaml`

Optimization made :
- Use `memo` on FixtureCard t
- `getItemLayout` removes the need for the FlatList to manage async layout calculations.
- `useCallback` on `keyExtractor` and `renderItem`
- Optimize `FixtureCard`:
    - Basic / light components
    - Use cached optimized images with `react-native-fast-image`
    - Use memoized components: to skip re-rendering the component when its props are unchanged.

