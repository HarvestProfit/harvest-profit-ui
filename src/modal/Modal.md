```js
initialState = { isOpen: false };

<div>
  <button onClick={() => setState({ isOpen: true })}>Open Me!</button>
  <Modal isOpen={state.isOpen} toggle={() => setState({ isOpen: false })}>
    <ModalHeader toggle={() => setState({ isOpen: false })}></ModalHeader>
    <ModalBody>
      <h1>Hello there!</h1>
    </ModalBody>
    <ModalFooter>
      Im a foot.
    </ModalFooter>
  </Modal>
</div>
```
You can construct a completely custom modal without using the default header, body, and footer.
```js
initialState = { isOpen: false };

<div>
  <button onClick={() => setState({ isOpen: true })}>Open Me!</button>
  <Modal isOpen={state.isOpen} toggle={() => setState({ isOpen: false })}>
    <h1>Hello there!</h1>
  </Modal>
</div>
```
