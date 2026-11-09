#!/usr/bin/env python3
"""Generate the Virgil app icons from the public-domain Vatican bust.

The medallion is a Roman coin: an engraved duotone portrait of Virgil in a
bronze ring, with the inscription P · VERGILIVS · MARO. It is rasterised with
Pillow and also wrapped in an SVG (with an embedded PNG) for the favicon and
the header mark.

Run:  python3 scripts/generate-icons.py   (requires Pillow)
"""
import base64
import math
import os

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "public", "art", "virgil-bust.jpg")
OUT = os.path.join(ROOT, "public", "icons")
FONT_PATH = os.path.join(ROOT, "scripts", "fonts", "Cinzel-600.ttf")
os.makedirs(OUT, exist_ok=True)

# Palette of the medallion
PATINA = (26, 47, 38)
PATINA_DEEP = (8, 14, 11)
BRONZE = (178, 140, 76)
BRONZE_DIM = (118, 90, 47)
CREAM = (241, 229, 200)

# The crop is tuned to the Vatican bust: head and shoulders, face in the
# upper-middle of the coin. (The source is 960 x 1412.)
CROP = (60, 0, 940, 880)


def duotone(image, contrast=1.08):
    grey = ImageOps.grayscale(image)
    grey = ImageOps.autocontrast(grey, cutoff=1)
    grey = ImageEnhance.Contrast(grey).enhance(contrast)
    stops = [
        (0.00, (10, 17, 13)),
        (0.30, (37, 58, 46)),
        (0.62, (137, 108, 58)),
        (1.00, (244, 233, 205)),
    ]
    lut = []
    for i in range(256):
        t = i / 255
        for (p0, c0), (p1, c1) in zip(stops, stops[1:]):
            if t <= p1:
                k = (t - p0) / (p1 - p0)
                lut.append(tuple(round(c0[j] + (c1[j] - c0[j]) * k) for j in range(3)))
                break
    out = Image.new("RGB", grey.size)
    out.putdata([lut[v] for v in grey.getdata()])
    return out


def arc_text(draw, text, center, radius, font, fill, start_deg, end_deg, tracking=0.0):
    """Draw text clockwise along an arc, each glyph tangent to the circle."""
    cx, cy = center
    widths = [draw.textlength(ch, font=font) for ch in text]
    total = sum(widths) + tracking * (len(text) - 1)
    a0, a1 = math.radians(start_deg), math.radians(end_deg)
    acc = 0.0
    for ch, width in zip(text, widths):
        mid = a0 + (acc + width / 2) / total * (a1 - a0)
        x = cx + radius * math.cos(mid)
        y = cy + radius * math.sin(mid)
        pad = int(font.size * 0.8)
        cell = Image.new("RGBA", (int(width) + pad * 2, font.size * 2 + pad * 2), (0, 0, 0, 0))
        cd = ImageDraw.Draw(cell)
        cd.text((cell.width / 2, cell.height / 2), ch, font=font, fill=fill + (255,), anchor="mm")
        cell = cell.rotate(-(math.degrees(mid) + 90), resample=Image.BICUBIC, expand=False)
        draw._image.paste(cell, (int(x - cell.width / 2), int(y - cell.height / 2)), cell)
        acc += width + tracking


def make(size, maskable=False):
    scale = 2
    S = size * scale
    img = Image.new("RGB", (S, S), PATINA_DEEP)

    # Radial patina ground
    px = img.load()
    cx = cy = S / 2
    maxd = (cx * cx + cy * cy) ** 0.5
    for y in range(S):
        for x in range(S):
            d = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5 / maxd
            t = min(1.0, d)
            px[x, y] = tuple(
                int(PATINA[j] + (PATINA_DEEP[j] - PATINA[j]) * t ** 0.8) for j in range(3)
            )

    # A whisper of grain, like hammered bronze
    noise = Image.effect_noise((S, S), 16).convert("RGB")
    img = Image.blend(img, noise, 0.010)
    draw = ImageDraw.Draw(img)

    # Engraved portrait. The ring is deliberately kept below the inscription:
    # text band 0.377–0.417 of the coin, portrait ring at 0.320 (top 0.185).
    bust = Image.open(SRC).convert("RGB").crop(CROP)
    d = int(S * 0.640)
    bust = duotone(bust.resize((d, d), Image.LANCZOS)).filter(
        ImageFilter.GaussianBlur(S * 0.0015)
    )
    mask = Image.new("L", (d, d), 0)
    md = ImageDraw.Draw(mask)
    pad = int(d * 0.012)
    md.ellipse([pad, pad, d - pad, d - pad], fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(S * 0.006))
    pcx, pcy = S // 2, int(S * 0.505)
    img.paste(bust, (pcx - d // 2, pcy - d // 2), mask)
    draw = ImageDraw.Draw(img)

    # Portrait rings: cream hairline, bronze band, dark outer hairline
    for ratio, colour, width in [
        (0.312, CREAM + (90,), 0.002),
        (0.320, BRONZE, 0.006),
        (0.330, BRONZE_DIM, 0.002),
    ]:
        r = int(S * ratio)
        draw.ellipse(
            [pcx - r * 1.0, pcy - r * 1.0, pcx + r * 1.0, pcy + r * 1.0],
            outline=colour,
            width=max(1, int(S * width)),
        )

    # Outer frame
    for ratio, colour, width in [
        (0.470, BRONZE, 0.006),
        (0.452, BRONZE_DIM, 0.002),
        (0.440, BRONZE_DIM, 0.0015),
    ]:
        r = int(S * ratio)
        draw.ellipse(
            [S / 2 - r, S / 2 - r, S / 2 + r, S / 2 + r],
            outline=colour,
            width=max(1, int(S * width)),
        )

    # Beaded border
    for i in range(72):
        a = 2 * math.pi * i / 72
        r1, r2 = S * 0.424, S * 0.440
        draw.line(
            [
                S / 2 + r1 * math.cos(a),
                S / 2 + r1 * math.sin(a),
                S / 2 + r2 * math.cos(a),
                S / 2 + r2 * math.sin(a),
            ],
            fill=BRONZE_DIM + (140,),
            width=max(1, int(S * 0.0018)),
        )

    # Inscription
    font = ImageFont.truetype(FONT_PATH, int(S * 0.040))
    arc_text(
        draw,
        "P · VERGILIVS · MARO",
        (S / 2, S / 2),
        S * 0.397,
        font,
        BRONZE,
        -152,
        -28,
        tracking=S * 0.004,
    )

    # Bottom legend
    small = ImageFont.truetype(FONT_PATH, int(S * 0.028))
    label = "MANTVA"
    tw = draw.textlength(label, font=small)
    draw.text((S / 2 - tw / 2, S * 0.915), label, font=small, fill=CREAM + (215,))
    for x in (S / 2 - tw / 2 - S * 0.034, S / 2 + tw / 2 + S * 0.034):
        draw.regular_polygon((x, S * 0.931, S * 0.006), 4, rotation=0, fill=BRONZE + (210,))

    if maskable:
        inner = img.resize((int(S * 0.82), int(S * 0.82)), Image.LANCZOS)
        base = Image.new("RGB", (S, S), PATINA_DEEP)
        base.paste(inner, ((S - inner.width) // 2, (S - inner.height) // 2))
        img = base

    return img.resize((size, size), Image.LANCZOS)


def svg_wrapper(png_path, svg_path, size):
    data = base64.b64encode(open(png_path, "rb").read()).decode("ascii")
    svg = (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" '
        f'width="{size}" height="{size}" role="img" aria-label="Virgil">\n'
        f'  <image href="data:image/png;base64,{data}" width="{size}" height="{size}"/>\n'
        "</svg>\n"
    )
    with open(svg_path, "w", encoding="utf-8") as handle:
        handle.write(svg)


if __name__ == "__main__":
    for size, name, maskable in [
        (64, "favicon-64.png", False),
        (192, "icon-192.png", False),
        (512, "icon-512.png", False),
        (512, "icon-maskable-512.png", True),
        (180, "apple-touch-icon.png", False),
    ]:
        icon = make(size, maskable=maskable).quantize(colors=128)
        icon.save(os.path.join(OUT, name), optimize=True)
        print("wrote", os.path.join(OUT, name))

    # A small embedded copy for the SVG mark / favicon (keeps the file light).
    small = make(144).quantize(colors=128)
    small_path = os.path.join(OUT, ".medallion-144.png")
    small.save(small_path, optimize=True)
    svg_wrapper(small_path, os.path.join(OUT, "virgil-medallion.svg"), 256)
    svg_wrapper(small_path, os.path.join(ROOT, "public", "favicon.svg"), 256)
    os.remove(small_path)
    print("wrote", os.path.join(OUT, "virgil-medallion.svg"), "and public/favicon.svg")
