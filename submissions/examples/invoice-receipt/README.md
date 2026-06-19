# Invoice Receipt

A dark-themed invoice receipt component with staggered row entrance animations and a pulsing "Paid" status badge.

## Description

Demonstrates EaseMotion's animation capabilities in a practical billing document layout. Table rows slide in sequentially using CSS custom property delays, and the paid badge features a subtle pulse ring effect.

## Usage

```html
<link rel="stylesheet" href="../../easemotion.css" />
<link rel="stylesheet" href="style.css" />

<div class="ease-invoice">
  <table class="ease-invoice-table">
    <tr class="ease-invoice-row ease-row-enter" style="--ease-row-delay: 0s;">
      …
    </tr>
  </table>
  <span class="ease-status-paid">Paid</span>
</div>
```

## Customization

| Variable | Default | Description |
|---|---|---|
| `--ease-row-delay` | `0s` | Stagger delay per row |

- Adjust delays to speed up or slow down the row cascade.
- Replace `#7c5bfe` with any accent color for the logo and labels.
- Modify `#4ade80` to change the paid badge color.

## Tech Stack

- EaseMotion CSS
- HTML5
- CSS3 (custom properties, keyframe animations)
