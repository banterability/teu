(function(){
  var TEU = function(prefix) {
    var add, get, remove, save;

    if (prefix == null) {
      prefix = "";
    }

    get = function(cb) {
      chrome.storage.sync.get(prefix, function(results) {
        cb(results[prefix]);
      });
    };

    add = function(newItem, cb) {
      get(function(items) {
        var items = items || [];
        items.push(newItem);
        save(items, cb);
      });
    };

    save = function(items, cb) {
      var output = {};
      output[prefix] = items;
      chrome.storage.sync.set(output, cb);
    };

    remove = function(index, cb) {
      if (!index) {
        throw new Error("Must specify index");
      }
      get(function(items) {
        items.splice(index, 1);
        save(items, cb);
      });
    };

    return {
      get: get,
      add: add,
      remove: remove
    };
  };

  window.TEU = TEU;
})();
