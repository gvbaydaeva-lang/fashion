import Link from "next/link";
import { assetUrl } from "@/lib/assetUrl";

export default function ElistaLandingPage() {
  return (
    <div className="elista-root page">
      <header className="nav">
        <a className="logo" href="#top" aria-label="ELISTA FASHION SHOW">
          <span className="logo-mark">
            ELISTA
            <br />
            FASHION
            <br />
            SHOW
          </span>
          <span>elista_fashion_show</span>
        </a>
        <nav className="nav-links">
          <a href="#about">О событии</a>
          <a href="#program">Что будет</a>
          <a href="#tickets">Билет</a>
        </nav>
        <Link className="btn" href="/tickets">
          Купить билет
        </Link>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">23 мая 2026 • Элиста</div>
            <h1>
              Elista
              <br />
              Fashion
              <br />
              Show
            </h1>
            <p className="hero-subtitle">
              Первый масштабный межрегиональный fashion-показ в Калмыкии.
            </p>
            <p className="hero-text">
              Один вечер, где мода, культура, бизнес и медийность встретятся на одной
              площадке. 50+ моделей, дизайнеры из разных регионов, яркие показы и
              атмосфера события, о котором заговорят все.
            </p>
            <div className="hero-actions">
              <Link className="btn" href="/tickets">
                Купить билет
              </Link>
            </div>
          </div>

          <div className="date-panel">
            <strong>
              23
              <br />
              мая
            </strong>
            <span>
              ВК «Агро-Тег»
              <br />
              Элиста
            </span>
          </div>
        </section>

        <section id="about">
          <div className="section-label">Стирая границы</div>
          <h2>Новая fashion-история региона начинается здесь</h2>
          <p className="lead">
            ELISTA FASHION SHOW объединит дизайнеров, бренды, предпринимателей,
            бьюти-индустрию, творческие сообщества и зрителей, которые хотят стать
            частью большого культурного события.
          </p>

          <div className="grid">
            <div className="card card-video">
              <video
                src={assetUrl("/media/IMG_5690.MP4")}
                poster={assetUrl("/media/2026-05-11%2017.36.42.jpg")}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="card-video-content">
                <strong>50+</strong>
                <span>
                  моделей: дети, подростки и взрослые женщины разных возрастов и
                  параметров
                </span>
              </div>
            </div>
            <div className="card">
              <strong>Дизайнеры</strong>
              <span>локальные и приглашённые авторы из разных регионов</span>
            </div>
            <div className="card">
              <strong>Гости</strong>
              <span>медийные лица, лидеры мнений и представители бизнес-сообщества</span>
            </div>
            <div className="card">
              <strong>Show</strong>
              <span>подиум, свет, музыка, фото- и видеозоны, атмосфера большого fashion-вечера</span>
            </div>
          </div>
        </section>

        <section id="program" className="light-block">
          <div className="section-label">Что вас ждёт</div>
          <h2>Это больше, чем показ</h2>
          <p className="lead">
            Один вечер, где мода становится языком культуры, самовыражения и нового
            уровня для Калмыкии.
          </p>

          <div className="program">
            <div className="program-item">
              <h3>Модные показы</h3>
              <p>
                Коллекции локальных и приглашённых дизайнеров, новые имена, яркие
                образы и сильные визуальные решения.
              </p>
            </div>
            <div className="program-item">
              <h3>Медийная атмосфера</h3>
              <p>Фото, видео, гости, инфлюенсеры и контент, который захочется сохранить и показать.</p>
            </div>
            <div className="program-item">
              <h3>Культура региона</h3>
              <p>Событие, которое подчёркивает красоту, идентичность и творческий потенциал Калмыкии.</p>
            </div>
            <div className="program-item">
              <h3>Нетворкинг</h3>
              <p>
                Место встречи дизайнеров, брендов, предпринимателей, beauty-сферы и
                активного городского сообщества.
              </p>
            </div>
          </div>
        </section>

        <section className="headline-secret">
          <div className="section-label">Главная интрига вечера</div>
          <h2>Хедлайнер уже готовится к выходу</h2>
          <div className="secret-box">
            Имя хедлайнера пока засекречено. Но скажем одно — этот специальный гость
            точно вызовет множество эмоций и станет одним из самых обсуждаемых моментов
            вечера.
          </div>
        </section>

        <section id="place">
          <div className="section-label">Площадка</div>
          <h2>ВК «Агро-Тег» — пространство, где fashion выходит на новый уровень</h2>
          <p className="lead">
            23 мая 2026 года Элиста станет точкой притяжения для тех, кто вдохновлён
            модой, стилем, творчеством и культурой.
          </p>
        </section>

        <section id="tickets">
          <div className="section-label">Билет</div>
          <h2>Займите своё место в эпицентре событий</h2>
          <p className="lead">
            На мероприятие действует единый входной билет. Количество мест ограничено —
            лучше купить заранее.
          </p>

          <div className="ticket-single">
            <div>
              <h3>Входной билет</h3>
              <p>
                Доступ к основной программе ELISTA FASHION SHOW: показы дизайнеров,
                медийная атмосфера, фото- и видеозоны, главный хедлайнер вечера.
              </p>
            </div>
            <div className="ticket-price">
              <strong>1500 ₽</strong>
              <span>единый билет</span>
            </div>
          </div>

          <div style={{ marginTop: 28 }}>
            <Link className="btn" href="/tickets">
              Купить билет
            </Link>
          </div>
        </section>

        <section className="final">
          <div className="section-label">ELISTA FASHION SHOW 2026</div>
          <h2>Станьте частью события, о котором будет говорить город</h2>
          <p className="lead">23 мая. Элиста. ВК «Агро-Тег». Мода, масштаб и новая энергия Калмыкии.</p>
          <Link className="btn" href="/tickets">
            Купить билет
          </Link>
        </section>
      </main>

      <footer className="footer">
        <span>ELISTA FASHION SHOW</span>
        <span>23 мая 2026 • ВК «Агро-Тег»</span>
        <span>Масштаб. Бизнес. Медийность.</span>
      </footer>
    </div>
  );
}
