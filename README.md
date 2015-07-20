# TEU

A small wrapper around Chrome's [Sync Storage API](https://developer.chrome.com/extensions/storage).

## Usage

```javascript
var store = new TEU('characters');

// Save an item
store.add('Margot');

// Remove an item at a known index
store.remove(2);

// Get all items
store.get(function(items){
  // do something;
});
```

## Methods

| Method                     |
| -------------------------- |
| `add(newItem, *callback*)` |
| `get(callback)`            |
| `remove(index, *callback*` |
