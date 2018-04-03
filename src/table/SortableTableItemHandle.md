
Simply just add the sort handle component to your table row.
It is actually a `TableItem` so it should work at the parent of the table row.

```js
<Table>
  <TableHeader>
    <SortableTableHeaderItemHandle />
    <TableHeaderItem>Name</TableHeaderItem>
    <TableHeaderItem>Email</TableHeaderItem>
  </TableHeader>
  <SortableTableBody useDragHandle>
    <TableRow>
      <SortableTableItemHandle />
      <TableItem>Jake</TableItem>
      <TableItem>jake@example.com</TableItem>
    </TableRow>
    <TableRow>
    <SortableTableItemHandle />
      <TableItem>Jaryd</TableItem>
      <TableItem>jaryd@example.com</TableItem>
    </TableRow>
  </SortableTableBody>
  <TableFooter>
    Im in the footer
  </TableFooter>
</Table>
```
