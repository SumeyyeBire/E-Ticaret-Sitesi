// ====================================
// A. ÜRÜN VERİ TİPİ TANIMI
// ====================================
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string; // Görsel yolu public klasöründen çağrılacak
    categorySlug: string;
    description: string;
    // ... Diğer alanlar
}

// ====================================
// B. MOCK ÜRÜN LİSTESİ
// Görsel yollarını public/images/ altından çağıracağımızı varsayıyoruz
// ====================================
export const MOCK_PRODUCTS: Product[] = [
    { 
        id: 101, 
        name: 'FİLİSTİN ROZET/BROŞ', 
        price: 199.99, 
        image: '/images/filistin-rozet.png', // Örn.
        categorySlug: 'aksesuar',
        description: 'Özgür Filistin davasına destek amaçlı özel tasarım rozet.',
    },
    { 
        id: 102, 
        name: 'Kırmızı Baskılı TİŞÖRT', 
        price: 249.90, 
        image: '/images/kirmizi-tisort.png',
        categorySlug: 'tisort',
        description: 'Yüksek kaliteli pamuklu kumaştan üretilmiş kırmızı baskılı tişört.',
    },
    { 
        id: 103, 
        name: 'BAMBU KAPAK 750 ML', 
        price: 470.98, 
        image: '/images/bambu-kapak.png',
        categorySlug: 'ev-ofis',
        description: 'Isıyı uzun süre koruyan, bambu kapaklı termos.',
    },
    { 
        id: 104, 
        name: 'BİR YANIM AT Hediye Seti', 
        price: 149.99, 
        image: '/images/bir-yanim-at.png',
        categorySlug: 'hediye',
        description: 'Özel hediye kutusunda at temalı defter ve kalem seti.',
    },
    // ... (Gerektiğinde daha fazla ürün eklenebilir)
];

// ====================================
// C. SLIDER VERİSİ
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
        image: '/images/slider-nar-rozet.jpg',
        title: 'Özel Koleksiyon: NAR ROZETLERİ',
        description: '750 TL ve üzeri alışverişlerinizde KARGO ÜCRETSİZ!',
        link: '/product/nar-rozet',
        ctaText: 'Hemen İncele',
    },
    // ...
];

// ====================================
// D. KATEGORİ LİSTESİ
// ====================================
export const MOCK_CATEGORIES = [
    { name: 'KIRTASİYE', slug: 'kirtasiye' },
    { name: 'EV & OFİS', slug: 'ev-ofis' },
    { name: 'AKSESUAR', slug: 'aksesuar' },
    { name: 'TİŞÖRT', slug: 'tisort' },
    // ...
];