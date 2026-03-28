#!/usr/bin/env python3
"""
Anka Veteriner Kliniği - Ürün Görseli Üretici
Her ürün için profesyonel, marka renkleriyle uyumlu görsel oluşturur.
"""

import os
import math
from PIL import Image, ImageDraw, ImageFont

OUT = "/Users/zariyedagasan/Desktop/batikent-anka-vet/public/images/products"
W, H = 800, 600  # 4:3 oran

# Fontlar
def get_font(size, bold=False):
    paths = [
        "/System/Library/Fonts/HelveticaNeue.ttc",
        "/System/Library/Fonts/Helvetica.ttc",
        "/Library/Fonts/Arial.ttf",
    ]
    for p in paths:
        try:
            idx = 1 if bold and p.endswith(".ttc") else 0
            return ImageFont.truetype(p, size, index=idx)
        except:
            continue
    return ImageFont.load_default()


def draw_rounded_rect(draw, xy, radius, fill):
    x0, y0, x1, y1 = xy
    draw.rectangle([x0 + radius, y0, x1 - radius, y1], fill=fill)
    draw.rectangle([x0, y0 + radius, x1, y1 - radius], fill=fill)
    draw.pieslice([x0, y0, x0 + 2*radius, y0 + 2*radius], 180, 270, fill=fill)
    draw.pieslice([x1 - 2*radius, y0, x1, y0 + 2*radius], 270, 360, fill=fill)
    draw.pieslice([x0, y1 - 2*radius, x0 + 2*radius, y1], 90, 180, fill=fill)
    draw.pieslice([x1 - 2*radius, y1 - 2*radius, x1, y1], 0, 90, fill=fill)


def lerp_color(c1, c2, t):
    return tuple(int(c1[i] + (c2[i] - c1[i]) * t) for i in range(3))


def draw_gradient(img, c1, c2, direction="vertical"):
    draw = ImageDraw.Draw(img)
    w, h = img.size
    for i in range(h if direction == "vertical" else w):
        t = i / (h if direction == "vertical" else w)
        color = lerp_color(c1, c2, t)
        if direction == "vertical":
            draw.line([(0, i), (w, i)], fill=color)
        else:
            draw.line([(i, 0), (i, h)], fill=color)


def add_alpha_circle(img, cx, cy, r, color, alpha):
    overlay = Image.new("RGBA", img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(*color, alpha))
    img.paste(Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB"))


def draw_paw(draw, cx, cy, size, color):
    """Pati izi çiz"""
    s = size
    # Ana pad
    draw.ellipse([cx - s*0.35, cy - s*0.1, cx + s*0.35, cy + s*0.45], fill=color)
    # Parmaklar
    offsets = [(-0.35, -0.3), (-0.12, -0.45), (0.12, -0.45), (0.35, -0.3)]
    for ox, oy in offsets:
        px, py = cx + s * ox, cy + s * oy
        draw.ellipse([px - s*0.13, py - s*0.13, px + s*0.13, py + s*0.13], fill=color)


def draw_heart(draw, cx, cy, size, color):
    """Kalp çiz"""
    s = size
    draw.ellipse([cx - s*0.5, cy - s*0.35, cx, cy + s*0.1], fill=color)
    draw.ellipse([cx, cy - s*0.35, cx + s*0.5, cy + s*0.1], fill=color)
    draw.polygon([(cx - s*0.5, cy), (cx, cy + s*0.55), (cx + s*0.5, cy)], fill=color)


def draw_tooth(draw, cx, cy, size, color):
    """Diş ikonu"""
    s = size
    draw.rounded_rectangle([cx-s*0.3, cy-s*0.5, cx+s*0.3, cy+s*0.15], radius=s*0.15, fill=color)
    draw.rounded_rectangle([cx-s*0.25, cy+s*0.0, cx-s*0.02, cy+s*0.5], radius=s*0.08, fill=color)
    draw.rounded_rectangle([cx+s*0.02, cy+s*0.0, cx+s*0.25, cy+s*0.5], radius=s*0.08, fill=color)


def draw_shield(draw, cx, cy, size, color):
    """Kalkan ikonu"""
    s = size
    points = [
        (cx, cy - s*0.55),
        (cx + s*0.45, cy - s*0.3),
        (cx + s*0.4, cy + s*0.15),
        (cx, cy + s*0.55),
        (cx - s*0.4, cy + s*0.15),
        (cx - s*0.45, cy - s*0.3),
    ]
    draw.polygon(points, fill=color)


def draw_bone(draw, cx, cy, size, color):
    """Kemik ikonu"""
    s = size
    draw.rounded_rectangle([cx-s*0.5, cy-s*0.1, cx+s*0.5, cy+s*0.1], radius=s*0.05, fill=color)
    for dx in [-s*0.45, s*0.45]:
        for dy in [-s*0.18, s*0.18]:
            draw.ellipse([cx+dx-s*0.12, cy+dy-s*0.12, cx+dx+s*0.12, cy+dy+s*0.12], fill=color)


def draw_plus(draw, cx, cy, size, color):
    """Artı/sağlık ikonu"""
    s = size
    t = s * 0.15
    draw.rounded_rectangle([cx-t, cy-s*0.4, cx+t, cy+s*0.4], radius=t*0.5, fill=color)
    draw.rounded_rectangle([cx-s*0.4, cy-t, cx+s*0.4, cy+t], radius=t*0.5, fill=color)


def draw_star(draw, cx, cy, size, color):
    """Yıldız ikonu"""
    s = size
    points = []
    for i in range(10):
        angle = math.radians(i * 36 - 90)
        r = s * 0.5 if i % 2 == 0 else s * 0.2
        points.append((cx + r * math.cos(angle), cy + r * math.sin(angle)))
    draw.polygon(points, fill=color)


def draw_drop(draw, cx, cy, size, color):
    """Damla ikonu"""
    s = size
    draw.ellipse([cx-s*0.3, cy-s*0.1, cx+s*0.3, cy+s*0.5], fill=color)
    draw.polygon([(cx, cy-s*0.5), (cx-s*0.3, cy+s*0.05), (cx+s*0.3, cy+s*0.05)], fill=color)


def draw_leaf(draw, cx, cy, size, color):
    """Yaprak ikonu"""
    s = size
    draw.ellipse([cx - s*0.15, cy - s*0.5, cx + s*0.45, cy + s*0.2], fill=color)
    draw.ellipse([cx - s*0.45, cy - s*0.2, cx + s*0.15, cy + s*0.5], fill=color)


def draw_dot_pattern(draw, x0, y0, x1, y1, spacing, color):
    """Nokta desen"""
    for x in range(x0, x1, spacing):
        for y in range(y0, y1, spacing):
            draw.ellipse([x-1, y-1, x+1, y+1], fill=color)


def draw_diagonal_lines(draw, x0, y0, x1, y1, spacing, color, width=1):
    """Çapraz çizgi deseni"""
    for offset in range(-max(x1,y1), max(x1,y1), spacing):
        draw.line([(x0 + offset, y0), (x1 + offset, y1)], fill=color, width=width)


def text_center(draw, text, y, font, fill):
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    draw.text(((W - tw) // 2, y), text, font=font, fill=fill)


def text_with_shadow(draw, text, y, font, fill, shadow_color, offset=2):
    bbox = draw.textbbox((0, 0), text, font=font)
    tw = bbox[2] - bbox[0]
    x = (W - tw) // 2
    draw.text((x + offset, y + offset), text, font=font, fill=shadow_color)
    draw.text((x, y), text, font=font, fill=fill)


def create_product_image(filename, config):
    img = Image.new("RGB", (W, H))
    
    # Gradient arka plan
    draw_gradient(img, config["bg1"], config["bg2"])
    draw = ImageDraw.Draw(img)
    
    # Dekoratif daireler
    accent = config.get("accent", (255, 255, 255))
    add_alpha_circle(img, 650, 80, 180, accent, 20)
    add_alpha_circle(img, 100, 500, 220, accent, 15)
    add_alpha_circle(img, 400, -50, 120, accent, 12)
    add_alpha_circle(img, 720, 450, 100, accent, 18)
    draw = ImageDraw.Draw(img)
    
    # Nokta desen (ince)
    dot_color = (*accent, )
    dot_alpha_color = lerp_color(config["bg1"], accent, 0.08)
    draw_dot_pattern(draw, 0, 0, W, H, 30, dot_alpha_color)
    
    # Çapraz çizgiler (çok ince dekoratif)
    line_color = lerp_color(config["bg1"], accent, 0.06)
    draw_diagonal_lines(draw, 0, 0, W, H, 50, line_color)
    
    # Üst bant - marka alanı
    band_color = lerp_color(config["bg1"], (0, 0, 0), 0.25)
    draw.rectangle([0, 0, W, 85], fill=band_color)
    draw.rectangle([0, 83, W, 86], fill=(*accent,))
    
    # Veteriner ikonu - sol üst
    vet_font = get_font(11, bold=True)
    draw_rounded_rect(draw, (20, 15, 55, 55), 8, accent)
    plus_color = band_color
    draw_plus(draw, 37, 35, 22, plus_color)
    draw.text((20, 58), "VET", font=vet_font, fill=accent)
    
    # Marka adı
    brand_font = get_font(30, bold=True)
    text_center(draw, config["brand"], 22, brand_font, (255, 255, 255))
    
    # Alt çizgi küçük slogan
    slogan_font = get_font(12)
    text_center(draw, config.get("brand_slogan", "Veteriner Onaylı Ürün"), 58, slogan_font, (*accent,))
    
    # Orta alan - büyük ikon
    icon_func = config.get("icon_func")
    if icon_func:
        # İkon arkası parlak daire
        add_alpha_circle(img, W//2, 260, 110, accent, 25)
        draw = ImageDraw.Draw(img)
        # İkon çerçevesi
        draw.ellipse([W//2-90, 170, W//2+90, 350], fill=lerp_color(config["bg1"], (255,255,255), 0.15))
        draw.ellipse([W//2-80, 180, W//2+80, 340], fill=lerp_color(config["bg1"], (255,255,255), 0.08))
        icon_color = lerp_color(accent, (255,255,255), 0.85)
        icon_func(draw, W//2, 260, 80, icon_color)
    
    # Ürün adı
    name_font = get_font(32, bold=True)
    name = config["name"]
    # Eğer uzunsa iki satır yap
    if len(name) > 28:
        words = name.split()
        mid = len(words) // 2
        line1 = " ".join(words[:mid])
        line2 = " ".join(words[mid:])
        text_with_shadow(draw, line1, 375, name_font, (255,255,255), (0,0,0,80), 2)
        text_with_shadow(draw, line2, 412, name_font, (255,255,255), (0,0,0,80), 2)
        desc_y = 460
    else:
        text_with_shadow(draw, name, 380, name_font, (255,255,255), (0,0,0,80), 2)
        desc_y = 425
    
    # Açıklama / tagline
    tag_font = get_font(16)
    tagline = config.get("tagline", "")
    text_center(draw, tagline, desc_y, tag_font, lerp_color(accent, (255,255,255), 0.7))
    
    # Alt bant
    draw.rectangle([0, H - 80, W, H], fill=(*accent,))
    
    # Alt bant üst çizgisi
    highlight = lerp_color(accent, (255,255,255), 0.3)
    draw.rectangle([0, H-80, W, H-77], fill=highlight)
    
    # Alt bant - kategori ve açıklama
    cat_font = get_font(14, bold=True)
    bottom_text = config.get("bottom_text", "Veteriner Hekim Onaylı Ürün")
    bbox = draw.textbbox((0, 0), bottom_text, font=cat_font)
    tw = bbox[2] - bbox[0]
    
    # Koyu metin alt bant
    text_color_bottom = lerp_color(config["bg1"], (0, 0, 0), 0.7)
    draw.text(((W - tw) // 2, H - 68), bottom_text, font=cat_font, fill=text_color_bottom)
    
    # Alt satır
    sub_font = get_font(20, bold=True)
    subtitle = config.get("subtitle", config["name"])
    bbox2 = draw.textbbox((0, 0), subtitle, font=sub_font)
    tw2 = bbox2[2] - bbox2[0]
    draw.text(((W - tw2) // 2, H - 48), subtitle, font=sub_font, fill=text_color_bottom)
    
    # Kenar dekorasyon
    draw.rectangle([0, 0, 4, H], fill=lerp_color(accent, (255,255,255), 0.5))
    draw.rectangle([W-4, 0, W, H], fill=lerp_color(accent, (255,255,255), 0.5))
    
    # Kaydet
    path = os.path.join(OUT, filename)
    img.save(path, "JPEG", quality=92)
    print(f"  ✅ {filename} ({os.path.getsize(path)//1024}KB)")


# ============================================================
# ÜRÜN TANIMLARI
# ============================================================

products = [
    {
        "file": "royal-canin-hypoallergenic.jpeg",
        "brand": "ROYAL CANIN",
        "brand_slogan": "Veterinary Nutrition Since 1968",
        "name": "Hypoallergenic",
        "tagline": "Alerji & Gıda Hassasiyeti İçin Özel Diyet",
        "bg1": (180, 15, 35),    # Koyu kırmızı
        "bg2": (120, 8, 20),
        "accent": (255, 220, 220),
        "icon_func": draw_shield,
        "bottom_text": "Kedi & Köpek İçin Hipoalerjenik Mama",
        "subtitle": "Hidrolize Protein · Hassas Sindirim",
    },
    {
        "file": "royal-canin-cardiac.jpeg",
        "brand": "ROYAL CANIN",
        "brand_slogan": "Veterinary Nutrition Since 1968",
        "name": "Cardiac",
        "tagline": "Kalp Yetmezliği İçin Düşük Sodyumlu Diyet",
        "bg1": (150, 20, 40),
        "bg2": (90, 10, 25),
        "accent": (255, 200, 210),
        "icon_func": draw_heart,
        "bottom_text": "Kalp Sağlığını Destekleyen Veteriner Diyeti",
        "subtitle": "Düşük Sodyum · Kardiyak Destek",
    },
    {
        "file": "royal-canin-dental.jpeg",
        "brand": "ROYAL CANIN",
        "brand_slogan": "Veterinary Nutrition Since 1968",
        "name": "Dental",
        "tagline": "Diş & Ağız Sağlığı İçin Özel Formül",
        "bg1": (160, 25, 45),
        "bg2": (100, 12, 28),
        "accent": (255, 215, 225),
        "icon_func": draw_tooth,
        "bottom_text": "Diş Taşı Oluşumunu Azaltan Mama",
        "subtitle": "Dental Care · Ağız Bakımı",
    },
    {
        "file": "royal-canin-neutered-satiety-balance.jpeg",
        "brand": "ROYAL CANIN",
        "brand_slogan": "Veterinary Nutrition Since 1968",
        "name": "Neutered Satiety Balance",
        "tagline": "Kısırlaştırma Sonrası Kilo Kontrol",
        "bg1": (165, 20, 40),
        "bg2": (105, 10, 22),
        "accent": (255, 210, 200),
        "icon_func": draw_star,
        "bottom_text": "Kısırlaştırılmış Kedi & Köpek İçin",
        "subtitle": "Tokluk Hissi · İdeal Kilo Kontrolü",
    },
    {
        "file": "royal-canin-recovery.jpeg",
        "brand": "ROYAL CANIN",
        "brand_slogan": "Veterinary Nutrition Since 1968",
        "name": "Recovery",
        "tagline": "Ameliyat Sonrası Yüksek Enerjili Beslenme",
        "bg1": (190, 100, 10),
        "bg2": (140, 60, 5),
        "accent": (255, 235, 200),
        "icon_func": draw_plus,
        "bottom_text": "İyileşme Sürecinde Yoğun Beslenme Desteği",
        "subtitle": "Yüksek Enerji · Hızlı İyileşme",
    },
    {
        "file": "hills-prescription-mobility.jpeg",
        "brand": "HILL'S",
        "brand_slogan": "Prescription Diet — Science Led, Vet Trusted",
        "name": "Prescription Mobility",
        "tagline": "Eklem Sorunları İçin Klinik Beslenme",
        "bg1": (10, 50, 140),
        "bg2": (5, 30, 90),
        "accent": (200, 220, 255),
        "icon_func": draw_bone,
        "bottom_text": "Eklem & Hareket Kısıtlılığı İçin",
        "subtitle": "Eklem Desteği · Hareketlilik",
    },
    {
        "file": "hills-prescription-sensitivities.jpeg",
        "brand": "HILL'S",
        "brand_slogan": "Prescription Diet — Science Led, Vet Trusted",
        "name": "Prescription Sensitivities",
        "tagline": "Gıda & Çevresel Hassasiyet İçin Özel Formül",
        "bg1": (20, 40, 120),
        "bg2": (10, 20, 80),
        "accent": (210, 215, 255),
        "icon_func": draw_leaf,
        "bottom_text": "Hassas Deri & Sindirim Sağlığı",
        "subtitle": "Deri Koruma · Sindirim Rahatlığı",
    },
    {
        "file": "hills-prescription-dental-safety.jpeg",
        "brand": "HILL'S",
        "brand_slogan": "Prescription Diet — Science Led, Vet Trusted",
        "name": "Dental & Safety",
        "tagline": "Diş Sağlığı & Güvenli Kilo Yönetimi",
        "bg1": (15, 70, 160),
        "bg2": (8, 40, 100),
        "accent": (200, 225, 255),
        "icon_func": draw_tooth,
        "bottom_text": "Diş Bakımı & Kilo Kontrolü Bir Arada",
        "subtitle": "Çift Etkili Veteriner Diyeti",
    },
    {
        "file": "ync-feline-vitacure-multivitamin.jpeg",
        "brand": "YNC",
        "brand_slogan": "Veterinary Nutraceuticals",
        "name": "Feline Vitacure",
        "tagline": "Kediler İçin Multivitamin & Resveratrol",
        "bg1": (5, 100, 70),
        "bg2": (2, 60, 45),
        "accent": (200, 255, 230),
        "icon_func": draw_star,
        "bottom_text": "Bağışıklık & Metabolik Destek",
        "subtitle": "Mikronize Resveratrol · Multivitamin",
    },
    {
        "file": "ync-lipozomal-glutatyon.jpeg",
        "brand": "YNC",
        "brand_slogan": "Veterinary Nutraceuticals",
        "name": "Lipozomal Glutatyon",
        "tagline": "Güçlü Antioksidan & Karaciğer Desteği",
        "bg1": (8, 110, 90),
        "bg2": (3, 70, 55),
        "accent": (200, 255, 240),
        "icon_func": draw_shield,
        "bottom_text": "Detoksifikasyon & Karaciğer Sağlığı",
        "subtitle": "Lipozomal Teknoloji · Güçlü Antioksidan",
    },
    {
        "file": "viyo-imune-prebiyotik.jpeg",
        "brand": "VIYO",
        "brand_slogan": "Scientifically Developed for Pets",
        "name": "Imune Prebiyotik",
        "tagline": "Bağışıklık Destekleyici Lezzetli İçecek",
        "bg1": (5, 120, 150),
        "bg2": (2, 80, 100),
        "accent": (200, 245, 255),
        "icon_func": draw_drop,
        "bottom_text": "Veteriner Hekimler Tarafından Geliştirildi",
        "subtitle": "Prebiyotik · Bağışıklık Sistemi",
    },
    {
        "file": "immunpur-skinpur-veteriner-takviye.jpeg",
        "brand": "IMMUNPUR",
        "brand_slogan": "Advanced Veterinary Supplements",
        "name": "Immunpur & Skinpur",
        "tagline": "Bağışıklık · Deri · Karaciğer · Eklem",
        "bg1": (90, 30, 180),
        "bg2": (55, 15, 120),
        "accent": (230, 210, 255),
        "icon_func": draw_plus,
        "bottom_text": "Kapsamlı Veteriner Takviye Serisi",
        "subtitle": "5'i 1 Arada Sağlık Takviyesi",
    },
    {
        "file": "dr-animal-agiz-goz-kulak-bakim.jpeg",
        "brand": "DR. ANIMAL",
        "brand_slogan": "Professional Pet Care Solutions",
        "name": "Ağız · Göz · Kulak Bakım",
        "tagline": "Günlük Hijyen İçin Pratik Bakım Seti",
        "bg1": (10, 100, 170),
        "bg2": (5, 65, 115),
        "accent": (210, 235, 255),
        "icon_func": draw_drop,
        "bottom_text": "Kedi & Köpek İçin 3'ü 1 Arada Bakım",
        "subtitle": "Bakım Solüsyonu · Günlük Hijyen",
    },
    {
        "file": "catfur-bakim-urun.jpeg",
        "brand": "CATFUR",
        "brand_slogan": "Premium Feline Care",
        "name": "Tüy Bakım & Parlaklık",
        "tagline": "Sağlıklı, Parlak ve Yumuşak Tüyler",
        "bg1": (170, 20, 85),
        "bg2": (110, 10, 55),
        "accent": (255, 210, 235),
        "icon_func": draw_paw,
        "bottom_text": "Kediler İçin Özel Tüy Bakım Formülü",
        "subtitle": "Tüy Parlaklığı · Deri Sağlığı",
    },
    {
        "file": "ingle-veteriner-urun.jpeg",
        "brand": "INGLE",
        "brand_slogan": "Trusted by Veterinarians",
        "name": "Veteriner Bakım",
        "tagline": "Profesyonel Veteriner Bakım Ürünü",
        "bg1": (55, 65, 80),
        "bg2": (35, 40, 50),
        "accent": (215, 225, 235),
        "icon_func": draw_plus,
        "bottom_text": "Hekim Önerisiyle Temin Edilebilir",
        "subtitle": "Profesyonel Kalite · Klinik Formül",
    },
]

# ============================================================
# ÜRETİM
# ============================================================

os.makedirs(OUT, exist_ok=True)
print(f"\n🎨 {len(products)} ürün görseli oluşturuluyor...\n")

for p in products:
    create_product_image(p["file"], p)

print(f"\n✅ Tüm görseller oluşturuldu: {OUT}\n")
