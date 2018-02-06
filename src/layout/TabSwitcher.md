Example:

```js
initialState = { tab: 1 };
<TabSwitcher>
  <TabSwitcherItem
    tab={1}
    value={state.tab}
    onClick={(tab) => setState({ tab })}
  >
    Tab 1
  </TabSwitcherItem>
  <TabSwitcherItem
    tab={2}
    value={state.tab}
    onClick={(tab) => setState({ tab })}
  >
    Tab 2
  </TabSwitcherItem>
</TabSwitcher>
```

Or as a row

```js
initialState = { tab: 1 };

<TabSwitcher>
  <Row fill>
    <TabSwitcherItem
      tab={1}
      value={state.tab}
      onClick={(tab) => setState({ tab })}
    >
      Tab 1
    </TabSwitcherItem>
    <TabSwitcherItem
      tab={2}
      value={state.tab}
      onClick={(tab) => setState({ tab })}
    >
      Tab 2
    </TabSwitcherItem>
  </Row>
</TabSwitcher>

```
