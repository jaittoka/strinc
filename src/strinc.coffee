
Strinc = (alpha = Strinc.STR, n = [ 0 ]) ->
  L = alpha.length
    
  for v in n 
    if v < 0 or v >= L 
      throw new Error "strinc: One of the values in input array is out of alphabet."

  inc = () ->
    pos = 0
    loop
      if n[pos] + 1 >= L
        n[pos++] = 0
        n.push 0 if pos >= n.length
      else
        n[pos]++
        break

  make = () -> (alpha[c] for c in n).reverse().join('')
    
  () ->
    r = make()
    inc() 
    r

Strinc.STR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY"
Strinc.DEC = "0123456789"
Strinc.HEX = "0123456789abcdef"
Strinc.OCT = "01234567"
Strinc.BIN = "01"

Strinc.parse = (str, alpha = Strinc.STR) ->
  n = (alpha.indexOf(i) for i in str).reverse()
  Strinc alpha, n

module.exports = Strinc
