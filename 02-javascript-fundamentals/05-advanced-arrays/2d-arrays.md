# Research on Rotating an Array

## Initial: 3x3 array

```
[a, b, c]
[d, e, f]
[g, h, i]
```

## Goal: Rotate Array

```
[c, f, i]
[b, e, h]
[a, d, g]
```

---

### Note 1: Array Transposed

```
[a, d, g]
[b, e, h]
[c, f, i]
```

### Note 2: Array w/ each row reversed

```
[c, b, a]
[f, e, d]
[i, h, g]
```

### Note 3: Array w/ each row reversed then transposed

```
[c, f, i]
[b, e, h]
[a, d, g]
```

Success! This is now a rotated array.
