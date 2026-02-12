export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-3 md:py-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src="https://cdn.poehali.dev/projects/dabd2b83-d148-4a56-86c9-f7452b019557/bucket/563c18ba-3877-4cb3-b16b-02651337b23b.jpg" alt="Логотип" className="h-16 md:h-36 w-auto" />
          </a>
          <div className="flex space-x-3 md:space-x-8 items-center">
            <a href="#collection" className="text-xs md:text-sm uppercase tracking-widest hover:text-red-600 transition-colors hidden sm:block">
              Коллекция
            </a>
            <a href="#about" className="text-xs md:text-sm uppercase tracking-widest hover:text-red-600 transition-colors hidden sm:block">
              Обо мне
            </a>
            <a href="#contact" className="text-xs md:text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
            <a href="https://t.me/+Rikgi84QYAA5MjMy" target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <div className="mb-2 md:mb-4 text-4xl md:text-6xl">着物</div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-4 md:mb-6">
              ВИНТАЖНЫЕ
              <br />
              КИМОНО
              <br />
              ИЗ ЯПОНИИ
            </h1>
            <p className="text-base md:text-xl max-w-xl">
              Эксклюзивные японские кимоно с аукционов. Каждое изделие — часть истории. Редкие находки для ценителей японской культуры и стиля.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-sm md:max-w-none aspect-square bg-red-600 rounded-full flex items-center justify-center">
              <div className="text-white text-5xl md:text-8xl font-bold">日本</div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-12 md:py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-6 mb-8 md:mb-12">
            <h2 className="text-3xl md:text-6xl font-bold tracking-tighter">КОЛЛЕКЦИЯ</h2>
            <span className="text-3xl md:text-7xl text-red-600">着物</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Project 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-3 md:mb-4 overflow-hidden relative rounded-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/dabd2b83-d148-4a56-86c9-f7452b019557/bucket/4f466856-c3da-4a77-91e6-b18132a5215b.jpg" 
                  alt="Фурисодэ эпохи Тайсё" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Фурисодэ эпохи Тайсё</h3>
              <p className="text-sm md:text-base text-neutral-400">Церемониальное кимоно 1920-х годов. Шёлк, ручная роспись, журавли и цветущая сакура</p>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-3 md:mb-4 overflow-hidden relative rounded-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/dabd2b83-d148-4a56-86c9-f7452b019557/bucket/423b206a-583b-485a-a65a-4985a885528e.jpg" 
                  alt="Томесодэ с бамбуком" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Томесодэ с бамбуком</h3>
              <p className="text-sm md:text-base text-neutral-400">Формальное кимоно 1950-х годов. Чистый шёлк, геометрический орнамент с бамбуком</p>
            </div>

            {/* Project 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-3 md:mb-4 overflow-hidden relative rounded-lg">
                <img 
                  src="https://cdn.poehali.dev/projects/dabd2b83-d148-4a56-86c9-f7452b019557/bucket/2b2dfa8f-ba2b-4402-b37a-d8a7cd088cb0.jpg" 
                  alt="Хомонги с ирисами" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Хомонги с ирисами</h3>
              <p className="text-sm md:text-base text-neutral-400">Элегантное кимоно 1960-х годов. Натуральный шёлк, вышивка золотыми нитями</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-12 md:col-span-5">
              <div className="mb-6 md:mb-8">
                <span className="text-3xl md:text-5xl text-red-600 block mb-2">私について</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">ОБО МНЕ</h2>
              </div>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 rounded-3xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/dabd2b83-d148-4a56-86c9-f7452b019557/bucket/597ca80b-3900-4fe6-b1ae-b18555076135.jpg" 
                  alt="О коллекционере" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-lg md:text-xl mb-4 md:mb-6">
                Я коллекционирую и продаю аутентичные японские кимоно, выкупая их на закрытых аукционах в Японии. Каждое изделие — это история, воплощённая в шёлке.
              </p>
              <p className="text-sm md:text-base mb-4 md:mb-6">
                Моя страсть к японской культуре началась более 20 лет назад. За это время я научилась разбираться в эпохах, техниках окрашивания и символике орнаментов. Каждое кимоно проходит строгий отбор по качеству, редкости и художественной ценности.
              </p>
              <p className="text-sm md:text-base mb-4 md:mb-6">
                В моей коллекции — фурисодэ для особых случаев, томесодэ для формальных церемоний, хомонги для элегантных приёмов. Все изделия винтажные, в идеальном состоянии, с историей и душой.
              </p>
              <p className="text-sm md:text-base mb-4 md:mb-6">
                Я специалист в области моды и стиля, и могу научить вас легко сочетать кимоно с современной модой. Винтажное кимоно не обязательно носить традиционно — оно прекрасно дополняет современный гардероб, создавая уникальные образы на стыке культур и эпох.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8 md:mt-12">
                <div>
                  <h3 className="text-xs md:text-sm uppercase tracking-widest mb-2">Специализация</h3>
                  <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                    <li>振袖 Фурисодэ</li>
                    <li>留袖 Томесодэ</li>
                    <li>訪問着 Хомонги</li>
                    <li>大正・昭和 эпохи</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs md:text-sm uppercase tracking-widest mb-2">Услуги</h3>
                  <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                    <li>Подбор кимоно</li>
                    <li>Экспертная оценка</li>
                    <li>Доставка из Японии</li>
                    <li>Консультации</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 md:mb-8">КОНТАКТЫ</h2>
              <p className="text-base md:text-xl mb-6 md:mb-8">Интересует винтажное кимоно? Напишите мне — подберу идеальное изделие из коллекции или привезу на заказ из Японии.</p>
              <div className="space-y-3 md:space-y-4">
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="w-full sm:w-24 text-xs md:text-sm uppercase tracking-widest">Telegram</span>
                  <a href="https://t.me/+Rikgi84QYAA5MjMy" target="_blank" rel="noopener noreferrer" className="hover:underline text-sm md:text-base">
                    Написать в Telegram
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="w-full sm:w-24 text-xs md:text-sm uppercase tracking-widest">География</span>
                  <span className="text-sm md:text-base">Работаю по всему миру</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm uppercase tracking-widest mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 text-sm md:text-base"
                    placeholder="Как к вам обращаться"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm uppercase tracking-widest mb-2">
                    Контакт
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 text-sm md:text-base"
                    placeholder="Email или Telegram"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm uppercase tracking-widest mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50 text-sm md:text-base"
                    placeholder="Что вас интересует?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-6 md:mt-8 px-6 md:px-8 py-2.5 md:py-3 bg-black text-white text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full sm:w-auto"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-xs md:text-sm text-center md:text-left">Коллекция винтажных кимоно из Японии</p>
          <div className="flex space-x-4 md:space-x-8">
            <a href="#" className="text-xs md:text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Instagram
            </a>
            <a href="#" className="text-xs md:text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Behance
            </a>
            <a href="#" className="text-xs md:text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}