# Card Stack

## 1. What does this do?
A stacked set of overlapping cards that fan out when hovered, using staggered `translateY` and `rotate` transforms.

## 2. How is it used?
Wrap multiple `.stack-card` elements inside a `.stack` container. Each card needs a `--i` value (0, 1, 2, 3) for stacking offset.
```html
<div class="stack">
  <div class="stack-card" style="--i: 0">Card 1</div>
  <div class="stack-card" style="--i: 1">Card 2</div>
  <div class="stack-card" style="--i: 2">Card 3</div>
</div>
```

## 3. Why is it useful?
Creates an interactive card stack where cards fan out on hover, useful for showcasing multiple items in a compact space. Uses `will-change: transform` for smooth performance. Respects `prefers-reduced-motion`.
