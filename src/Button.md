Simple `<Button />` examples:

```js
// This function triggers a visible event
function onClick(buttonNumber) {
  alert(`Clicked button number: ${buttonNumber}`);
}

<div>
  <Button className="primary" onClick={() => onClick('one')}>Click Me, I&apos;m #1!</Button>
  <span>&nbsp;</span>
  <Button className="secondary" onClick={() => onClick('two')}>Click Me Instead!</Button>
</div>
```
