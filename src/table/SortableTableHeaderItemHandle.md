Simple example

```js
import Table from './Table'
import TableHeader from './TableHeader'
import TableHeaderItem from './TableHeaderItem'
import TableBody from './TableBody'
import TableRow from './TableRow'
import TableItem from './TableItem'
import TableFooter from './TableFooter'
import SortableTableBody from './SortableTableBody'
import SortableTableHeaderItem from './SortableTableHeaderItem'
import SortableTableHeaderItemHandle from './SortableTableHeaderItemHandle'
import SortableTableItemHandle from './SortableTableItemHandle'
;

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
