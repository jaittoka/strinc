(function() {
  var Strinc;

  Strinc = function(alpha, n) {
    var L, inc, make, v, _i, _len;
    if (alpha == null) {
      alpha = Strinc.STR;
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
      var pos, _results;
      pos = 0;
      _results = [];
      while (true) {
        if (n[pos] + 1 >= L) {
          n[pos++] = 0;
          if (pos >= n.length) {
            _results.push(n.push(0));
          } else {
            _results.push(void 0);
          }
        } else {
          n[pos]++;
          break;
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

  Strinc.STR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";

  Strinc.DEC = "0123456789";

  Strinc.HEX = "0123456789abcdef";

  Strinc.OCT = "01234567";

  Strinc.BIN = "01";

  Strinc.parse = function(str, alpha) {
    var i, n;
    if (alpha == null) {
      alpha = Strinc.STR;
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
    return Strinc(alpha, n);
  };

  module.exports = Strinc;

}).call(this);
