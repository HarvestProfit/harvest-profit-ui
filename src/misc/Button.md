Simple `<Button />` examples:

```js
// This function triggers a visible event
function onClick(buttonNumber) {
  alert(`Clicked button number: ${buttonNumber}`);
}

<div>
  <Button onClick={() => onClick('1')}>Standard Button</Button>
  <span>&nbsp;</span>
  <Button float onClick={() => onClick('2')}>Floating Button</Button>
  <span>&nbsp;</span>
  <Button color onClick={() => onClick('3')}>Colored Button</Button>
  <span>&nbsp;</span>
  <Button float color danger onClick={() => onClick('4')}>Floating Colored Danger Button</Button>
  <span>&nbsp;</span>
  <Button float onClick={() => onClick('5')}>Button <p>with a label</p></Button>
  <span>&nbsp;</span>
  <Button mono onClick={() => onClick('6')}>Mono Button <p>with a label</p></Button>
  <span>&nbsp;</span>
  <Button color mono onClick={() => onClick('7')}>Float Mono Button</Button>
  <span>&nbsp;</span>
  <Button disabled color onClick={() => onClick('8')}>Disabled</Button>
</div>
```
