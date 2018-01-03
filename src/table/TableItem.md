Table items allow you to adjust the row column size, how important that item is,
the alignment of the row column, and if the text should trail off in an ellipsis.  
These can be placed directly inside a `<TableRow>` component OR be nested under
a `<TableGroup>` component.  For best results, the structure and options under
your `<TableRow>` component should be *exactly* the same as the `<TableHeader>`.

```js
<Table>
  <TableHeader>
    <TableGroup>
      <TableHeaderItem size="small" align="right">Name</TableHeaderItem>
      <TableHeaderItem size="small" align="center" important>Email</TableHeaderItem>
    </TableGroup>
    <TableHeaderItem size="exsmall" unimportant>Age</TableHeaderItem>
    <TableHeaderItem size="large">Notes</TableHeaderItem>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableGroup>
        <TableItem size="small" align="right">Jake</TableItem>
        <TableItem size="small" align="center" important ellipsis>jake@example.com</TableItem>
      </TableGroup>
      <TableItem size="exsmall" unimportant>23</TableItem>
      <TableItem size="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableItem>
    </TableRow>
    <TableRow>
      <TableGroup>
        <TableItem size="small" align="right">John</TableItem>
        <TableItem size="small" align="center" important ellipsis>john@example.com</TableItem>
      </TableGroup>
      <TableItem size="exsmall" unimportant>25</TableItem>
      <TableItem size="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</TableItem>
    </TableRow>
  </TableBody>
</Table>
```
