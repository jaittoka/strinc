(function() {
  var Gen;

  Gen = function(alpha, n) {
    var L, inc, make, v, _i, _len;
    if (alpha == null) {
      alpha = Gen.STR;
    }
    if (n == null) {
      n = [0];
    }
    L = alpha.length;
    for (_i = 0, _len = n.length; _i < _len; _i++) {
      v = n[_i];
      if (v < 0 || v >= L) {
        throw new Error("strinc: One of the values in input array is out of alphabet.");
      }
    }
    inc = function() {
      var carry, pos, _results;
      carry = true;
      pos = 0;
      _results = [];
      while (carry) {
        if (n[pos] + 1 >= L) {
          n[pos] = 0;
          pos++;
          if (pos >= n.length) {
            _results.push(n.push(0));
          } else {
            _results.push(void 0);
          }
        } else {
          n[pos] = n[pos] + 1;
          _results.push(carry = false);
        }
      }
      return _results;
    };
    make = function() {
      var c;
      return ((function() {
        var _j, _len1, _results;
        _results = [];
        for (_j = 0, _len1 = n.length; _j < _len1; _j++) {
          c = n[_j];
          _results.push(alpha[c]);
        }
        return _results;
      })()).reverse().join('');
    };
    return function() {
      var r;
      r = make();
      inc();
      return r;
    };
  };

  Gen.STR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";

  Gen.HEX = "0123456789abcdef";

  Gen.OCT = "01234567";

  Gen.BIN = "01";

  Gen.parse = function(str, alpha) {
    var i, n;
    if (alpha == null) {
      alpha = Gen.STR;
    }
    n = ((function() {
      var _i, _len, _results;
      _results = [];
      for (_i = 0, _len = str.length; _i < _len; _i++) {
        i = str[_i];
        _results.push(alpha.indexOf(i));
      }
      return _results;
    })()).reverse();
    return Gen(alpha, n);
  };

  module.exports = Gen;

}).call(this);
