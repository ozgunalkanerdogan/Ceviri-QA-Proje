# Çeviri Uygulaması QA Projesi

## 📌 Proje Hakkında
Bu proje, [Translate App Toolkit](https://meryemozkan1.github.io/Translate-App-Toolkit/) web sitesi için kapsamlı kalite güvence (QA) testleri içermektedir.
Cypress kullanılarak otomasyon testleri yazılmıştır.

## 🚀 Kurulum

1. Repoyu klonla:
git clone https://github.com/ozgunalkanerdogan/Ceviri-QA-Proje.git

2. Bağımlılıkları yükle:
npm install

3. Testleri çalıştır:
npx cypress open

## 📁 Proje Yapısı
cypress/
├── e2e/          # Test dosyaları
└── support/      # Yardımcı fonksiyonlar

## 🛠️ Kullanılan Araçlar

| Araç | Amaç |
|------|------|
| Cypress | Otomasyon testleri |
| Postman | API testleri |
| BrowserStack | Cross browser & cross device testleri |
| Chrome DevTools | Performans & network analizi |

## 📋 Manuel Testler

| Test Türü | Açıklama |
|-----------|----------|
| Exploratory Testing | Keşif bazlı hata tespiti |
| Form Validation | Hatalı/eksik girişlerin manuel kontrolü |
| UI/UX Kontrolü | Görsel tutarlılık ve kullanıcı deneyimi |
| Cross Browser | Firefox, Chrome, Safari üzerinde manuel kontrol |
| Cross Device | Mobil, tablet ve masaüstü uyumluluk kontrolü |

## ✅ Test Kapsamı

- **Form Validation** — zorunlu alanlar, hatalı girişler, hata mesajları
- **Performans** — sayfa yüklenme süreleri, yanıt süreleri
- **API** — endpoint kontrolleri, response doğrulama, status kodları
- **UI/UX** — görsel tutarlılık, kullanıcı akışları, elementlerin doğru görünümü
- **Cross Device & Browser** — farklı ekran boyutları ve tarayıcılarda uyumluluk
- **Security** — XSS, yetkisiz erişim denemeleri
- **Functional** — temel iş akışlarının doğru çalışması

## 👤 Yazar
Özgün Alkan Erdoğan
