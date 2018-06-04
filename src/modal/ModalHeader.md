Modal Header with toggle button, title, and subtitle.
```js
initialState = { isOpen: false };

<div>
  <button onClick={() => setState({ isOpen: true })}>Open Me!</button>
  <Modal isOpen={state.isOpen} toggle={() => setState({ isOpen: false })}>
    <ModalSection>
      <ModalHeader
        title="Title says hello"
        subtitle="Subtitle says hello"
      ></ModalHeader>
      <ModalBody>
        <h1>Hello there!</h1>
      </ModalBody>
    </ModalSection>
  </Modal>
</div>
```

Modal Header with custom children (Notice how the title and subtitle are ignored).
```js
initialState = { isOpen: false };

<div>
  <button onClick={() => setState({ isOpen: true })}>Open Me!</button>
  <Modal isOpen={state.isOpen} toggle={() => setState({ isOpen: false })}>
    <ModalSection>
      <ModalHeader
        title="Title says hello"
        subtitle="Subtitle says hello"
      >
        <p>Random text</p>
        <hr />
        <p>More text</p>
      </ModalHeader>
      <ModalBody>
        <h1>Hello there!</h1>
      </ModalBody>
    </ModalSection>
  </Modal>
</div>
```
