#!/usr/bin/env python3
"""Generate the Virgil PWA icons (PNG) with Pillow."""
import os
from PIL import Image, ImageDraw, ImageFont

OUT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "public", "icons")
os.makedirs(OUT, exist_ok=True)

SERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"

WINE = (122, 31, 43)
WINE_DEEP = (58, 14, 22)
GOLD = (200, 162, 74)
CREAM = (243, 230, 200)


def radial_bg(size):
    """Wine background with a subtle radial glow."""
    img = Image.new("RGB", (size, size), WINE)
    px = img.load()
    cx = cy = size / 2
    maxd = (cx ** 2 + cy ** 2) ** 0.5
    for y in range(size):
        for x in range(size):
            d = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5 / maxd
            t = min(d, 1.0)
            r = int(WINE[0] + (WINE_DEEP[0] - WINE[0]) * t)
            g = int(WINE[1] + (WINE_DEEP[1] - WINE[1]) * t)
            b = int(WINE[2] + (WINE_DEEP[2] - WINE[2]) * t)
            px[x, y] = (r, g, b)
    return img


def make_icon(size, maskable=False):
    scale = 4  # supersample for smooth curves
    S = size * scale
    img = radial_bg(S).convert("RGBA")
    draw = ImageDraw.Draw(img)

    pad = 0.14 * S if maskable else 0.08 * S
    inner = S - 2 * pad

    # double ring
    ring_w = max(scale, int(S * 0.012))
    draw.ellipse([pad, pad, pad + inner, pad + inner], outline=GOLD + (140,), width=ring_w)
    inner_pad = pad + 0.09 * inner
    inner2 = inner - 2 * (0.09 * inner)
    draw.ellipse(
        [inner_pad, inner_pad, inner_pad + inner2, inner_pad + inner2],
        outline=GOLD + (90,),
        width=max(1, ring_w // 2),
    )

    # laurel leaves (simple ellipses hugging the ring)
    import math
    leaf_r = S * 0.30
    for ang_deg in range(200, 341, 18):
        a = math.radians(ang_deg)
        lx = S / 2 + math.cos(a) * leaf_r
        ly = S / 2 + math.sin(a) * leaf_r
        w = S * 0.045
        h = S * 0.018
        draw.ellipse([lx - w / 2, ly - h / 2, lx + w / 2, ly + h / 2], fill=GOLD + (170,))
    for ang_deg in range(20, 161, 18):
        a = math.radians(ang_deg)
        lx = S / 2 + math.cos(a) * leaf_r
        ly = S / 2 + math.sin(a) * leaf_r
        w = S * 0.045
        h = S * 0.018
        draw.ellipse([lx - w / 2, ly - h / 2, lx + w / 2, ly + h / 2], fill=GOLD + (170,))

    # the V
    font = ImageFont.truetype(SERIF, int(S * 0.46))
    text = "V"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(
        (S / 2 - tw / 2 - bbox[0], S / 2 - th / 2 - bbox[1] - S * 0.005),
        text,
        font=font,
        fill=CREAM,
    )

    img = img.resize((size, size), Image.LANCZOS)
    return img


for size, name, mask in [
    (192, "icon-192.png", False),
    (512, "icon-512.png", False),
    (512, "icon-maskable-512.png", True),
    (180, "apple-touch-icon.png", False),
]:
    icon = make_icon(size, maskable=mask)
    icon.save(os.path.join(OUT, name))
    print("wrote", os.path.join(OUT, name))
