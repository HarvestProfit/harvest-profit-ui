Simple error example

```js
<Error>I am an error</Error>
```

Or add some details
```js
<Error
  color
  message="I am a detailed error"
  details="ERROR: Uh oh, something went really wrong!"
/>
```

Or define your own
```js
<Error hideIcon>
  <Column>
    <p>I am a detailed error</p>
    <small>ERROR: Uh oh, something went really wrong!</small>
  </Column>
</Error>
```
