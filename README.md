# Not Uygulaması

Bu proje, Flask (Python web framework) ve React Native (JavaScript kütüphaneleri kullanarak mobil uygulama geliştirme) ile geliştirilmiş bir not uygulamasını içermektedir.

## Başlangıç

Projenin yerel ortamınıza başarıyla kurulumu için aşağıdaki adımları izleyin.

### Gereksinimler

- Python 3.11
- Node.js
- npm veya yarn
- Expo (React Native projeleri için)

### Kurulum

1. **Backend (Flask)**
   ```
   cd backend
   pip install -r requirements.txt
   python app.py
   ```

2. **Mobile (React Native)**
   ```
   cd react-native-note
   npm install
   npx expo start --web
   ```

#### Kullanım
* Uygulamayı başlattıktan sonra, notlarınızı ekleyebilir, düzenleyebilir ve silebilirsiniz.
* Her bir notun başlık ve içerik bilgileri bulunmaktadır.
* Uygulama, Flask tarafındaki basit bir API kullanarak notları yönetir.