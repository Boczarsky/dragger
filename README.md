# dragger
Makes element draggable by handle<br>
Example html element:
```HTML
<div class="draggable">
  <div class="handle"></div>
  <div class="content">
    Place to insert content
  </div>
</div>
```
\*draggable should have 'position: absolute'<br>
To make element draggable you must create instance of Dragger class<br>
```ES6
const dragger = new Dragger()
```
then you must add handle which will be used to move element<br>
```ES6
dragger.addHandle(handleElement)
```
to add multiple handles use<br>
```ES6
dragger.addMultipleHandles(handleElements)
```
