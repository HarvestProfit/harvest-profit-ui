Simple sortable table example.  To get the order to persist, you must provide a
"onSortEnd" function.

```js
import Table from './Table'
import TableHeader from './TableHeader'
import TableHeaderItem from './TableHeaderItem'
import TableRow from './TableRow'
import TableItem from './TableItem'
import TableFooter from './TableFooter'
;

<Table>
  <TableHeader>
    <TableHeaderItem>Name</TableHeaderItem>
    <TableHeaderItem>Email</TableHeaderItem>
  </TableHeader>
  <SortableTableBody>
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


To use a drag handle:

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
    <TableRow align="center">
      <SortableTableItemHandle />
      <TableItem>Jake</TableItem>
      <TableItem>jake@example.com</TableItem>
    </TableRow>
    <TableRow align="center">
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
