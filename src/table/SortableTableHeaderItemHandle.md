Simple example

```js
<Table>
  <TableHeader>
    <TableHeaderItem>
      <SortableTableHeaderItem sortBy="name" sortRules={{name: 'asc'}}>
        Name
      </SortableTableHeaderItem>
    </TableHeaderItem>
    <TableHeaderItem>
      <SortableTableHeaderItem sortBy="email" sortRules={{name: 'asc'}}>
        Email
      </SortableTableHeaderItem>
    </TableHeaderItem>
  </TableHeader>
  <SortableTableBody useDragHandle>
    <TableRow>
      <TableItem>Jake</TableItem>
      <TableItem>jake@example.com</TableItem>
    </TableRow>
    <TableRow>
      <TableItem>Jaryd</TableItem>
      <TableItem>jaryd@example.com</TableItem>
    </TableRow>
  </SortableTableBody>
  <TableFooter>
    Im in the footer
  </TableFooter>
</Table>
```
