Nest the sortable table header item to get sorting options for the table.

The sortRules object is defined as an object where the keys are attribute and the value is the direction.
The direction is either 'asc' or 'desc'.

```js
<Table>
  <TableHeader>
    <TableHeaderItem>
      <SortableTableHeaderItem sortBy="name" onClick={(value) => alert(`sort by ${value}`)} sortRules={{}}>
        Name
      </SortableTableHeaderItem>
    </TableHeaderItem>
    <TableHeaderItem>Email</TableHeaderItem>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableItem>Jake</TableItem>
      <TableItem>jake@example.com</TableItem>
    </TableRow>
    <TableRow>
      <TableItem>Jaryd</TableItem>
      <TableItem>jaryd@example.com</TableItem>
    </TableRow>
  </TableBody>
  <TableFooter>
    Im in the footer
  </TableFooter>
</Table>
```
