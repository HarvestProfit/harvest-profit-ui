Every modal is made up of modal sections.  You can define 3 different types of sections:

* `main` - A larger section
* `subsection` - A smaller section
* `default` - The default section, it is sized in between main and subsection.

Usually a modal will consist of no more than 2 sections.  For a simple modal, use just the default section
```js
initialState = { isOpen: false };

<div>
  <button onClick={() => setState({ isOpen: true })}>Open Me!</button>
  <Modal isOpen={state.isOpen} toggle={() => setState({ isOpen: false })}>
    <ModalSection>
      <h1>Default section</h1>
    </ModalSection>
  </Modal>
</div>
```

For more complex modals, use main and sub sections.  Use a smaller modal size to fit all the sections on the screen.
```js
initialState = { isOpen: false };

<div>
  <button onClick={() => setState({ isOpen: true })}>Open Me!</button>
  <Modal small isOpen={state.isOpen} toggle={() => setState({ isOpen: false })}>
    <ModalSection main>
      <h1>Main section</h1>
    </ModalSection>
    <ModalSection subsection>
      <h1>Sub section</h1>
    </ModalSection>
    <ModalSection subsection>
      <h1>Sub section</h1>
    </ModalSection>
  </Modal>
</div>
```

You can change colors of the subsections as well by providing the `colored` option
```js
initialState = { isOpen: false };

<div>
  <button onClick={() => setState({ isOpen: true })}>Open Me!</button>
  <Modal small isOpen={state.isOpen} toggle={() => setState({ isOpen: false })}>
    <ModalSection main>
      <h1>Main section</h1>
      <ModalFooter>
        <Button float color onClick={() => alert('Clicked!')}>Footer Button</Button>
      </ModalFooter>
    </ModalSection>
    <ModalSection subsection>
      <h1>Sub section</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </ModalSection>
    <ModalSection subsection colored>
      <h1>Sub section</h1>
    </ModalSection>
  </Modal>
</div>
```
