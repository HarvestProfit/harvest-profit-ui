```js
import Button from '../misc/Button'

import Modal from './Modal'
import ModalSection from './ModalSection'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'
;

initialState = { isOpen: false };

<div>
  <Button color onClick={() => setState({ isOpen: true })}>Open Me!</Button>
  <Modal isOpen={state.isOpen} toggle={() => setState({ isOpen: false })}>
  <ModalSection>
    <ModalHeader title="Hello There!"></ModalHeader>
    <ModalBody>
      <h4>
        Hey there!
      </h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
    </ModalBody>
    <ModalFooter>
      <Button float color onClick={() => alert('clicked me!')}>Footer Button</Button>
    </ModalFooter>
    </ModalSection>
  </Modal>
</div>
```
You can construct a completely custom modal without using the default header, body, and footer.
```js
import Button from '../misc/Button'

import Modal from './Modal'
import ModalSection from './ModalSection'
import ModalBody from './ModalBody'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'
;

initialState = { isOpen: false };

<div>
  <Button color onClick={() => setState({ isOpen: true })}>Open Me!</Button>
  <Modal isOpen={state.isOpen} toggle={() => setState({ isOpen: false })}>
    <ModalSection>
    <h1>Hello there!</h1>
    </ModalSection>
  </Modal>
</div>
```
