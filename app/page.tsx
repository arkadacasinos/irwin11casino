import type { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Официальный сайт Irwin Casino — играть онлайн в казино через рабочее зеркало',
  description:
    'Официальный сайт Irwin Casino — играть онлайн в казино через рабочее зеркало. Приветственный бонус новым игрокам, тысячи слотов, live-дилеры, быстрый вывод средств 24/7. Регистрация занимает минуту.',
}

export default function Page() {
  return (
    <main className="irw-shell">
      <article className="irw-article">
        <header className="irw-hero">
          <div className="irw-hero__inner">
            <p className="irw-hero__eyebrow">Irwin Casino · Официальный сайт</p>
            <h1 className="irw-hero__title">
              Irwin Casino — официальный сайт для игры онлайн
            </h1>
            <p className="irw-hero__lead">
              Играть в казино Irwin можно прямо сейчас. Регистрация занимает
              меньше минуты, а первый депозит удваивается в подарок новым
              игрокам.
            </p>
            <a className="irw-hero__cta" href="#irw-start">
              Начать играть в Irwin Casino
            </a>
          </div>
        </header>

        <section className="irw-section" id="irw-about">
          <div className="irw-section__inner">
            <h2 className="irw-section__title">
              Irwin Casino официальный сайт
            </h2>
            <p className="irw-section__body">
              Irwin Casino — это лицензированная игровая платформа, которая
              работает с 2019 года. Официальный сайт Irwin Casino предлагает
              более 3000 игр от проверенных провайдеров: NetEnt, Microgaming,
              Pragmatic Play, Evolution Gaming. Каждый слот проходит независимую
              проверку на честность, а все выплаты обрабатываются в течение
              суток. Здесь нет скрытых комиссий и мелкого шрифта — условия
              прозрачны для каждого игрока.
            </p>
          </div>
        </section>

        <section className="irw-section" id="irw-games">
          <div className="irw-section__inner">
            <h2 className="irw-section__title">
              Играть в Irwin Casino онлайн
            </h2>
            <p className="irw-section__body">
              Играть в Irwin Casino онлайн можно в любое время — платформа
              работает круглосуточно без перерывов и выходных. Слоты, рулетка,
              блэкджек, покер, баккара — каждый найдёт развлечение по душе. Для
              тех, кто ценит атмосферу настоящего зала, есть раздел с
              live-дилерами, где партии идут в режиме реального времени. Ирвин
              казино онлайн адаптировано под любые устройства: компьютер,
              планшет, смартфон.
            </p>
            <div className="irw-grid">
              <figure className="irw-tile">
                <img
                  className="irw-tile__pic"
                  src="/games/slots.png"
                  alt="Слоты в Irwin Casino"
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="irw-tile__name">Слоты</figcaption>
                <p className="irw-tile__desc">
                  Более 2000 автоматов от топовых провайдеров мира.
                </p>
              </figure>
              <figure className="irw-tile">
                <img
                  className="irw-tile__pic"
                  src="/games/live.png"
                  alt="Live-дилеры в Irwin Casino"
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="irw-tile__name">Live-казино</figcaption>
                <p className="irw-tile__desc">
                  Партии с живыми дилерами в режиме реального времени.
                </p>
              </figure>
              <figure className="irw-tile">
                <img
                  className="irw-tile__pic"
                  src="/games/table.png"
                  alt="Настольные игры в Irwin Casino"
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="irw-tile__name">Настольные игры</figcaption>
                <p className="irw-tile__desc">
                  Рулетка, блэкджек, покер и баккара на любой вкус.
                </p>
              </figure>
            </div>
          </div>
        </section>

        <section className="irw-section" id="irw-bonus">
          <div className="irw-section__inner">
            <h2 className="irw-section__title">
              Ирвин казино официальный — бонусы и акции
            </h2>
            <p className="irw-section__body">
              Ирвин казино официальный сайт радует игроков щедрыми бонусами.
              Новичкам полагается приветственный пакет: до 100 000 рублей на
              первые пять депозитов плюс 200 фриспинов на популярные слоты.
              Постоянным клиентам доступен кэшбэк до 15% каждую неделю,
              регулярные турниры с призовым фондом и программа лояльности с
              персональными привилегиями. Все бонусы отыгрываются на
              прозрачных условиях без подвоха.
            </p>
          </div>
        </section>

        <section className="irw-section" id="irw-mirror">
          <div className="irw-section__inner">
            <h2 className="irw-section__title">
              Ирвин казино зеркало рабочее
            </h2>
            <p className="irw-section__body">
              Ирвин казино зеркало рабочее — это точная копия основного сайта,
              которая помогает обойти блокировки интернет-провайдеров. Зеркало
              Irwin Casino полностью дублирует функционал официального сайта:
              те же игры, бонусы, личный кабинет и платёжные методы. Актуальные
              адреса зеркал обновляются ежедневно и публикуются в официальных
              каналах. Irwin Casino зеркало работает стабильно на всех
              устройствах и не требует установки дополнительного софта.
            </p>
          </div>
        </section>

        <section className="irw-section" id="irw-start">
          <div className="irw-section__inner">
            <h2 className="irw-section__title">
              Как начать играть в ирвин казино
            </h2>
            <ol className="irw-steps">
              <li className="irw-step">
                <span className="irw-step__num">1</span>
                <div className="irw-step__body">
                  <h3 className="irw-step__name">
                    Перейдите на официальный сайт
                  </h3>
                  <p className="irw-step__desc">
                    Откройте официальный сайт Irwin Casino или рабочее зеркало
                    из списка ниже.
                  </p>
                </div>
              </li>
              <li className="irw-step">
                <span className="irw-step__num">2</span>
                <div className="irw-step__body">
                  <h3 className="irw-step__name">Пройдите регистрацию</h3>
                  <p className="irw-step__desc">
                    Заполните короткую форму: email, пароль, валюта счёта.
                    Это занимает меньше минуты.
                  </p>
                </div>
              </li>
              <li className="irw-step">
                <span className="irw-step__num">3</span>
                <div className="irw-step__body">
                  <h3 className="irw-step__name">Пополните депозит</h3>
                  <p className="irw-step__desc">
                    Выберите удобный способ оплаты и начните играть в ирвин
                    казино онлайн.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="irw-section" id="irw-faq">
          <div className="irw-section__inner">
            <h2 className="irw-section__title">
              Частые вопросы об Irwin Casino
            </h2>
            <div className="irw-faq">
              <details className="irw-faq__item">
                <summary className="irw-faq__q">
                  Как найти рабочее зеркало Irwin Casino?
                </summary>
                <p className="irw-faq__a">
                  Актуальные адреса зеркал публикуются в официальном
                  Telegram-канале и обновляются каждый день. Irwin Casino
                  зеркало полностью повторяет функционал основного сайта.
                </p>
              </details>
              <details className="irw-faq__item">
                <summary className="irw-faq__q">
                  Irwin Casino официальный или нет?
                </summary>
                <p className="irw-faq__a">
                  Да, платформа работает по лицензии Кюрасао с 2019 года.
                  Официальный сайт Irwin Casino использует сертифицированный
                  генератор случайных чисел.
                </p>
              </details>
              <details className="irw-faq__item">
                <summary className="irw-faq__q">
                  Сколько времени занимает вывод средств?
                </summary>
                <p className="irw-faq__a">
                  Электронные кошельки — до 2 часов, банковские карты — до 24
                  часов. Ирвин казино официальный сайт не задерживает выплаты.
                </p>
              </details>
              <details className="irw-faq__item">
                <summary className="irw-faq__q">
                  Можно ли играть в ирвин казино с мобильного?
                </summary>
                <p className="irw-faq__a">
                  Да, ирвин казино онлайн работает на всех устройствах без
                  установки приложения. Сайт адаптирован под iPhone и Android.
                </p>
              </details>
            </div>
          </div>
        </section>

        <footer className="irw-foot">
          <div className="irw-foot__inner">
            <p className="irw-foot__brand">Irwin Casino · Официальный сайт</p>
            <p className="irw-foot__copy">
              © 2026 Irwin Casino. Все права защищены. Играйте ответственно.
            </p>
            <nav className="irw-foot__tags" aria-label="Поисковые теги">
              <a className="irw-tag" href="#irw-about">#irwincasino</a>
              <a className="irw-tag" href="#irw-about">#ирвинказино</a>
              <a className="irw-tag" href="#irw-about">#irwincasinoофициальный</a>
              <a className="irw-tag" href="#irw-about">#irwincasinoофициальныйсайт</a>
              <a className="irw-tag" href="#irw-mirror">#irwincasinoзеркало</a>
              <a className="irw-tag" href="#irw-about">#ирвинказиноофициальный</a>
              <a className="irw-tag" href="#irw-about">#ирвинказиноофициальныйсайт</a>
              <a className="irw-tag" href="#irw-mirror">#ирвинказинозеркало</a>
              <a className="irw-tag" href="#irw-mirror">#ирвинказинозеркалорабочее</a>
              <a className="irw-tag" href="#irw-games">#irwincasinoиграть</a>
              <a className="irw-tag" href="#irw-games">#ирвинказиноонлайн</a>
              <a className="irw-tag" href="#irw-about">#itgwinказино</a>
              <a className="irw-tag" href="#irw-games">#ирвинказиноиграть</a>
            </nav>
          </div>
        </footer>
      </article>
    </main>
  )
}
