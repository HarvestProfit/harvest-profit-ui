
Simply just add the sort handle component to your table row.
It is actually a `TableItem` so it should work at the parent of the table row.

```js
import Table from './Table'
import TableHeader from './TableHeader'
import TableHeaderItem from './TableHeaderItem'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableItem from './TableItem'
import TableFooter from './TableFooter'
import SortableTableBody from './SortableTableBody'
import SortableTableHeaderItemHandle from './SortableTableHeaderItemHandle'
import SortableTableItemHandle from './SortableTableItemHandle'
;

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
