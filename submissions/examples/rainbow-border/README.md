# Rainbow Animated Border

## 1. What does this do?
An element with a rainbow-animated border using `border-image: linear-gradient()` and `filter: hue-rotate()`.

## 2. How is it used?
Add the `.rainbow-card` class to any element. The border cycles through rainbow colors continuously. Use `.rainbow-thick` for a thicker border.
```html
<div class="rainbow-card">Content</div>
```

## 3. Why is it useful?
Creates a vibrant, animated rainbow border with minimal CSS. The `border-image` approach works cleanly with rounded corners. Respects `prefers-reduced-motion` and shows a static gradient border when motion is reduced.
