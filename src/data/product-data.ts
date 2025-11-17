// src/data/product-data.ts

// ====================================
// A. ÜRÜN VERİ TİPİ TANIMI
// ====================================
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string; // public/images altından çağrılacak yol
    categorySlug: string;
    description: string;
}

// ====================================
// B. MOCK ÜRÜN LİSTESİ (Yüklediğiniz Görsellere Göre Genişletildi)
// ====================================
export const MOCK_PRODUCTS: Product[] = [
    { 
        id: 101, 
        name: 'ÖZGÜR FİLİSTİN ROZET/BROŞ', 
        price: 199.99, 
        image: '/images/filistin-rozet.png', 
        categorySlug: 'aksesuar',
        description: 'Özgür Filistin davasına destek amaçlı özel tasarım rozet.',
    },
    { 
        id: 102, 
        name: 'ÇİÇEK SPIRALLI DEFTER', 
        price: 149.99, 
        image: '/images/cicek-spiralli.png',
        categorySlug: 'kirtasiye',
        description: 'Pembe renkli, çiçek desenli, spiralli şık defter.',
    },
    { 
        id: 103, 
        name: 'BAMBU KAPAK 750 ML TERMOS', 
        price: 470.98, 
        // Termos için Seyahat/Ofis/Ev ürünleri görselini kullanıyoruz
        image: '/images/seyehat-ofis-ev-urunleri.png',
        categorySlug: 'ev-ofis',
        description: 'Isıyı uzun süre koruyan, bambu kapaklı termos. Seyahat ve ofis için ideal.',
    },
    { 
        id: 104, 
        name: 'BİR YANIM AT Hediye Seti', 
        price: 149.99, 
        image: '/images/bir-yanım-at.png',
        categorySlug: 'hediye',
        description: 'Özel hediye kutusunda at temalı defter ve kalem seti.',
    },
    { 
        id: 105, 
        name: 'AVOKADO DEFTER', 
        price: 79.99, 
        image: '/images/avakado-defter.png',
        categorySlug: 'kirtasiye',
        description: 'Bir Yanım Üşengeç Bir Avokado temalı defter.',
    },
    { 
        id: 106, 
        name: 'AKSA ROZET (ANLAM TAŞIYAN)', 
        price: 149.00, 
        image: '/images/anlam-tasıyan-aksesuarlar.png',
        categorySlug: 'aksesuar',
        description: 'Anlam taşıyan Aksa motifli rozet.',
    },
    { 
        id: 107, 
        name: 'CEP SECCADE', 
        price: 129.00, 
        image: '/images/cep-seccade.png',
        categorySlug: 'seccade',
        description: 'Yeryüzünün bize mescid kılınması temalı, kolay taşınabilir cep seccadesi.',
    },
    { 
        id: 108, 
        name: 'ÇOCUK ÜRÜNLERİ-ROKET SECCADE', 
        price: 299.00, 
        image: '/images/cocuk-urunleri.png',
        categorySlug: 'cocuk',
        description: 'Roket temalı çocuk seccade/oyun matı koleksiyonu.',
    },
    { 
        id: 109, 
        name: 'BİR YANIM DEVE Seti', 
        price: 129.99, 
        image: '/images/bir-yanım-deve.png',
        categorySlug: 'hediye',
        description: 'Deve temalı, doğal ipliklerle hazırlanmış hediye seti.',
    },
];

// ====================================
// C. SLIDER VERİSİ (Yüklediğiniz Slider Görsellerine Göre)
// ====================================
export interface Slide {
    image: string;
    title: string;
    description: string;
    link: string;
    ctaText: string;
}

export const MOCK_SLIDES: Slide[] = [
    {
        // NAR ROZETİ GÖRSELİNİ KULLANIYORUZ
        image: '/images/nar-rozet-broş.png',
        title: 'ÖZEL KOLEKSİYON: NAR ROZET/BROŞ',
        description: '750 TL ve üzeri alışverişlerinizde KARGO ÜCRETSİZ.',
        link: '/product/nar-rozet',
        ctaText: 'Hemen İNCELE',
    },
    {
        // HADİSENE GÖRSELİNİ KULLANIYORUZ
        image: '/images/hadisene.png',
        title: 'merakla beklediğin o oyun...',
        description: 'hadisene ne duruyorsun hemen İNCELE',
        link: '/product/hadisene-oyunu',
        ctaText: 'İNCELE',
    },
    {
        // KARPUZ KOLYE GÖRSELİNİ KULLANIYORUZ
        image: '/images/karpuz-kolye.png',
        title: 'YENİ KARPUZ KOLYE',
        description: '750 TL ve üzeri alışverişlerinizde KARGO ÜCRETSİZ.',
        link: '/product/karpuz-kolye',
        ctaText: 'hemen incele',
    },
];

// ====================================
// D. KATEGORİ LİSTESİ (Menüdeki linklerle eşleşmeli)
// ====================================
export const MOCK_CATEGORIES = [
    { name: 'ÖNE ÇIKANLAR', slug: 'one-cikanlar' },
    { name: 'FIRSAT', slug: 'firsat' },
    { name: 'FİLİSTİN ÜRÜNLERİ', slug: 'filistin-urunleri' },
    { name: 'KIRTASİYE', slug: 'kirtasiye' },
    { name: 'EV & OFİS', slug: 'ev-ofis' },
    { name: 'AKSESUAR', slug: 'aksesuar' },
    { name: 'SECCADE', slug: 'seccade' },
    { name: 'ÇANTA', slug: 'canta' },
    { name: 'TİŞÖRT', slug: 'tisort' },
    { name: 'ÇOCUK', slug: 'cocuk' },
    { name: 'HAKKIMIZDA', slug: 'hakkimizda' },
    { name: 'İLETİŞİM', slug: 'iletisim' },
    { name: 'İHH', slug: 'ihh' },
];