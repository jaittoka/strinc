
Gen = (alpha = Gen.STR, n = [ 0 ]) ->
  L = alpha.length
    
  for v in n 
    if v < 0 or v >= L 
      throw new Error "strinc: One of the values in input array is out of alphabet."

  inc = () ->
    carry = true
    pos = 0
    while carry
      if n[pos] + 1 >= L
        n[pos] = 0
        pos++
        n.push 0 if pos >= n.length
      else
        n[pos] = n[pos] + 1
        carry = false

  make = () -> (alpha[c] for c in n).reverse().join('')
    
  () ->
    r = make()
    inc() 
    r

Gen.STR = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY"
Gen.HEX = "0123456789abcdef"
Gen.OCT = "01234567"
Gen.BIN = "01"

Gen.parse = (str, alpha = Gen.STR) ->
  n = (alpha.indexOf(i) for i in str).reverse()
  Gen alpha, n

module.exports = Gen
