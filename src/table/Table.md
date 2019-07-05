Simple table example:

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
    <TableHeaderItem>Name</TableHeaderItem>
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
