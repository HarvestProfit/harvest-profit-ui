Table groups provide tables with the ability to collapse down into a more condensed
version of itself.  For example, take the following table and reduce your screen size.

```js
<Table>
  <TableHeader>
    <TableHeaderItem size="small">Name</TableHeaderItem>
    <TableHeaderItem size="small">Email</TableHeaderItem>
    <TableHeaderItem size="exsmall">Age</TableHeaderItem>
    <TableHeaderItem size="exsmall">Birthday</TableHeaderItem>
    <TableHeaderItem size="large">Notes</TableHeaderItem>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableItem size="small">Jake</TableItem>
      <TableItem size="small">jake@example.com</TableItem>
      <TableItem size="exsmall">23</TableItem>
      <TableItem size="exsmall">1/1/1994</TableItem>
      <TableItem size="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </TableItem>
    </TableRow>
    <TableRow>
      <TableItem size="small">John</TableItem>
      <TableItem size="small">john@example.com</TableItem>
      <TableItem size="exsmall">25</TableItem>
      <TableItem size="exsmall">1/1/1992</TableItem>
      <TableItem size="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </TableItem>
    </TableRow>
  </TableBody>
</Table>
```

Now do the same with this table.

```js
<Table>
  <TableHeader>
    <TableGroup>
      <TableHeaderItem size="small">Name</TableHeaderItem>
      <TableHeaderItem size="small">Email</TableHeaderItem>
    </TableGroup>
    <TableGroup>
      <TableHeaderItem size="exsmall">Age</TableHeaderItem>
      <TableHeaderItem size="exsmall">Birthday</TableHeaderItem>
    </TableGroup>
    <TableHeaderItem size="large">Notes</TableHeaderItem>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableGroup>
        <TableItem size="small">Jake</TableItem>
        <TableItem size="small">jake@example.com</TableItem>
      </TableGroup>
      <TableGroup>
        <TableItem size="exsmall">23</TableItem>
        <TableItem size="exsmall">1/1/1994</TableItem>
      </TableGroup>
      <TableItem size="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </TableItem>
    </TableRow>
    <TableRow>
      <TableGroup>
        <TableItem size="small">John</TableItem>
        <TableItem size="small">john@example.com</TableItem>
      </TableGroup>
      <TableGroup>
        <TableItem size="exsmall">25</TableItem>
        <TableItem size="exsmall">1/1/1992</TableItem>
      </TableGroup>
      <TableItem size="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </TableItem>
    </TableRow>
  </TableBody>
</Table>
```

We can make that condensed column smaller as well using the *condensedSize* option
as well as play with the alignment.  We can even tell it to break at different times.

```js
<Table>
  <TableHeader>
    <TableGroup group="2" condensedSize="small" align="right">
      <TableHeaderItem size="small">Name</TableHeaderItem>
      <TableHeaderItem size="small">Email</TableHeaderItem>
    </TableGroup>
    <TableGroup condensedSize="exsmall">
      <TableHeaderItem size="exsmall">Age</TableHeaderItem>
      <TableHeaderItem size="exsmall">Birthday</TableHeaderItem>
    </TableGroup>
    <TableHeaderItem size="large">Notes</TableHeaderItem>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableGroup group="2" condensedSize="small" align="right">
        <TableItem size="small">Jake</TableItem>
        <TableItem size="small">jake@example.com</TableItem>
      </TableGroup>
      <TableGroup condensedSize="exsmall">
        <TableItem size="exsmall">23</TableItem>
        <TableItem size="exsmall">1/1/1994</TableItem>
      </TableGroup>
      <TableItem size="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </TableItem>
    </TableRow>
    <TableRow>
      <TableGroup group="2" condensedSize="small" align="right">
        <TableItem size="small">John</TableItem>
        <TableItem size="small">john@example.com</TableItem>
      </TableGroup>
      <TableGroup condensedSize="exsmall">
        <TableItem size="exsmall">25</TableItem>
        <TableItem size="exsmall">1/1/1992</TableItem>
      </TableGroup>
      <TableItem size="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </TableItem>
    </TableRow>
  </TableBody>
</Table>
```
