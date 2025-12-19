'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Teşekkürler! ${email} adresinize bilgilendirme göndereceğiz.`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI-ULU
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Ana Sayfa</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">Hakkımızda</a>
            <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition">Çözümlerimiz</a>
            <a href="#technology" className="text-gray-700 hover:text-blue-600 transition">Teknoloji</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">İletişim</a>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
            İletişime Geç
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
            🚀 Yapay Zeka ile Geleceği Şekillendiriyoruz
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            AI-ULU
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            İşletmelerin dijital dönüşümünü yapay zeka ile hızlandıran, yenilikçi ve ölçeklenebilir çözümler sunuyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
              Demo İsteyin
            </button>
            <button className="bg-white text-gray-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all">
              Daha Fazla Bilgi
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">%95</div>
              <div className="text-gray-600">Doğruluk Oranı</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">10x</div>
              <div className="text-gray-600">Daha Hızlı İşlem</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="text-4xl font-bold text-pink-600 mb-2">%70</div>
              <div className="text-gray-600">Maliyet Tasarrufu</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Biz Kimiz?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              AI-ULU, yapay zeka teknolojilerini kullanarak işletmelere değer katan yenilikçi çözümler geliştiren bir startup ekibidir.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Misyonumuz</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Yapay zeka teknolojilerini erişilebilir kılarak, işletmelerin operasyonel verimliliğini artırmak ve rekabet avantajı sağlamak. Her ölçekteki şirketin AI gücünden faydalanabilmesini hedefliyoruz.
              </p>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Vizyonumuz</h3>
              <p className="text-gray-600 leading-relaxed">
                Türkiye ve bölgede yapay zeka çözümlerinde lider bir platform olmak, inovasyon ve teknoloji odaklı bir ekosistem yaratmak.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl text-white">
                <div className="text-3xl mb-2">🎯</div>
                <h4 className="font-bold mb-2">Odaklanma</h4>
                <p className="text-sm text-blue-100">Müşteri ihtiyaçlarına özel çözümler</p>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl text-white">
                <div className="text-3xl mb-2">💡</div>
                <h4 className="font-bold mb-2">İnovasyon</h4>
                <p className="text-sm text-purple-100">Sürekli gelişim ve yenilik</p>
              </div>
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-8 rounded-2xl text-white">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-bold mb-2">İşbirliği</h4>
                <p className="text-sm text-pink-100">Güçlü partnerlik anlayışı</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-8 rounded-2xl text-white">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-bold mb-2">Hız</h4>
                <p className="text-sm text-indigo-100">Hızlı ve etkin uygulama</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Çözümlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İşletmenizin dijital dönüşümünü hızlandıracak AI tabanlı çözümler
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Akıllı Chatbot</h3>
              <p className="text-gray-600 mb-4">
                Müşteri hizmetlerinizi 7/24 otomatikleştirin. Doğal dil işleme ile anlayan ve öğrenen chatbot sistemleri.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>✓ Çok dilli destek</li>
                <li>✓ Öğrenen AI modeli</li>
                <li>✓ Entegrasyon desteği</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Veri Analizi</h3>
              <p className="text-gray-600 mb-4">
                Büyük veri setlerinizi AI ile analiz edin. Öngörücü modeller ile geleceği tahmin edin ve strateji geliştirin.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>✓ Gerçek zamanlı analiz</li>
                <li>✓ Tahminsel modelleme</li>
                <li>✓ Görselleştirme araçları</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Görüntü İşleme</h3>
              <p className="text-gray-600 mb-4">
                Görüntü ve video analizi ile kalite kontrol, nesne tanıma ve otomatik etiketleme yapın.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>✓ Nesne tespiti</li>
                <li>✓ Yüz tanıma</li>
                <li>✓ Kalite kontrol</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">NLP Çözümleri</h3>
              <p className="text-gray-600 mb-4">
                Metin analizi, duygu analizi ve otomatik içerik üretimi ile iş süreçlerinizi optimize edin.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>✓ Duygu analizi</li>
                <li>✓ İçerik üretimi</li>
                <li>✓ Metin sınıflandırma</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Tahmin Modelleri</h3>
              <p className="text-gray-600 mb-4">
                Satış tahmini, talep öngörüsü ve risk analizi için özelleştirilmiş machine learning modelleri.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>✓ Satış tahmini</li>
                <li>✓ Risk analizi</li>
                <li>✓ Talep öngörüsü</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Özel Çözümler</h3>
              <p className="text-gray-600 mb-4">
                İşletmenizin özel ihtiyaçlarına yönelik, sıfırdan tasarlanmış yapay zeka çözümleri geliştiriyoruz.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>✓ Özelleştirilebilir</li>
                <li>✓ Ölçeklenebilir</li>
                <li>✓ Entegre edilebilir</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Teknoloji Yığınımız</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En güncel ve güçlü AI teknolojileri ile çözümler geliştiriyoruz
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="font-bold text-gray-800 mb-2">Deep Learning</h4>
              <p className="text-sm text-gray-600">TensorFlow, PyTorch</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">💬</div>
              <h4 className="font-bold text-gray-800 mb-2">NLP</h4>
              <p className="text-sm text-gray-600">Transformers, BERT, GPT</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">👁️</div>
              <h4 className="font-bold text-gray-800 mb-2">Computer Vision</h4>
              <p className="text-sm text-gray-600">OpenCV, YOLO</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl text-center">
              <div className="text-4xl mb-3">☁️</div>
              <h4 className="font-bold text-gray-800 mb-2">Cloud AI</h4>
              <p className="text-sm text-gray-600">AWS, Azure, GCP</p>
            </div>
          </div>

          {/* Process */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12">Çalışma Sürecimiz</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h4 className="font-bold mb-2">Keşif</h4>
                <p className="text-sm text-gray-600">İhtiyaç analizi ve proje planı</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h4 className="font-bold mb-2">Tasarım</h4>
                <p className="text-sm text-gray-600">Model mimarisi ve veri hazırlama</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h4 className="font-bold mb-2">Geliştirme</h4>
                <p className="text-sm text-gray-600">Model eğitimi ve optimizasyon</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                <h4 className="font-bold mb-2">Dağıtım</h4>
                <p className="text-sm text-gray-600">Entegrasyon ve sürekli destek</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Müşteri Görüşleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              İşbirliği yaptığımız şirketlerin bizim hakkımızda söyledikleri
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                "AI-ULU sayesinde müşteri hizmetlerimizde %80 verimlilik artışı sağladık. Ekip çok profesyonel ve çözüm odaklı."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold">Mehmet Yılmaz</div>
                  <div className="text-sm text-gray-500">CEO, TechCorp</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                "Veri analizi çözümleri ile iş süreçlerimizi optimize ettik. Sonuçlar beklentilerimizin çok üzerinde."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold">Ayşe Demir</div>
                  <div className="text-sm text-gray-500">CTO, DataFlow</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-6 italic">
                "Görüntü işleme çözümü ile kalite kontrolümüzü tamamen otomatikleştirdik. Mükemmel bir çalışma!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-400 rounded-full mr-4"></div>
                <div>
                  <div className="font-bold">Can Öztürk</div>
                  <div className="text-sm text-gray-500">Direktör, Manufacturing Inc</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">İletişime Geçin</h2>
            <p className="text-xl text-gray-600">
              Projeleriniz için bizimle iletişime geçin, size özel çözümler geliştirelim
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Ad Soyad"
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 outline-none transition"
                  required
                />
                <input
                  type="email"
                  placeholder="E-posta"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 outline-none transition"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Şirket"
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 outline-none transition"
              />
              <input
                type="tel"
                placeholder="Telefon"
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 outline-none transition"
              />
              <textarea
                placeholder="Mesajınız"
                rows={5}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-600 outline-none transition resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Gönder
              </button>
            </form>
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">📧</div>
                <div className="font-semibold mb-1">E-posta</div>
                <div className="text-sm text-gray-600">info@ai-ulu.com</div>
              </div>
              <div>
                <div className="text-3xl mb-2">📞</div>
                <div className="font-semibold mb-1">Telefon</div>
                <div className="text-sm text-gray-600">+90 (212) 123 45 67</div>
              </div>
              <div>
                <div className="text-3xl mb-2">📍</div>
                <div className="font-semibold mb-1">Adres</div>
                <div className="text-sm text-gray-600">İstanbul, Türkiye</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-ULU
              </h3>
              <p className="text-gray-400 text-sm">
                Yapay zeka ile geleceği birlikte inşa ediyoruz.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Şirket</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-white transition">Kariyer</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Basın</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Çözümler</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#solutions" className="hover:text-white transition">Chatbot</a></li>
                <li><a href="#solutions" className="hover:text-white transition">Veri Analizi</a></li>
                <li><a href="#solutions" className="hover:text-white transition">Görüntü İşleme</a></li>
                <li><a href="#solutions" className="hover:text-white transition">NLP</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Destek</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#contact" className="hover:text-white transition">İletişim</a></li>
                <li><a href="#" className="hover:text-white transition">Dokümantasyon</a></li>
                <li><a href="#" className="hover:text-white transition">SSS</a></li>
                <li><a href="#" className="hover:text-white transition">Gizlilik</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 AI-ULU. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
