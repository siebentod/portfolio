import Button from './Button';

// exprot const TextEducation => {
//   return ()
// }

export const TextApoliteia = ({ url, closeModal }) => {
  return (
    <>
      <div className="text-white m-5">
        <p>
          Сайт появился очень давно и изначально представлял собой чистый
          HTML+CSS. React понадобился для шаблонизации текстов (сейчас их 41
          шт). Страницы реализованы через типизированные объекты с данными при
          помощи Typescript.
        </p>
        <p className="mt-4">
          Был выбран фреймворк <span className="text-yellow">vike</span>, а не
          Next.js, потому что в нем проще и удобнее на тот момент был реализован
          полный пререндеринг (SSG) с последующей гидрацией.
        </p>
        <p className="mt-4">
          Параллельное расположение сделано не через table, а через grid и ~
          селектор. Используется глобальный state менеджер Zustand для
          синхронизации окна выбора перевода, хедера и выбранного текста.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Button type="secondary" href={url}>
          Перейти на сайт
        </Button>
        <Button type="primary" onClick={closeModal}>
          Назад
        </Button>
      </div>
    </>
  );
};

export const TextNivritti = ({ url, closeModal }) => {
  return (
    <>
      <div className="text-white m-5">
        <p>
          Приложением можно пользоваться без регистрации, данные сохраняются в
          куки. Пользовательские данные же сохраняются в{' '}
          <span className="text-yellow">Supabase</span>. В нем используются не
          только стоковые, но и собственные функции, а также триггеры и cron
          jobs. В написании SQL помогал ChatGPT.
        </p>
        <p className="my-4">
          Регистрация возможна через email+пароль (подтверждение регистрации при
          помощи бесплатного{' '}
          <span className="text-yellow">SMTP-сервиса Brevo</span>) и{' '}
          <span className="text-yellow">OAuth</span> Google и Github.
        </p>
        <p>
          <span className="text-yellow">Next.js</span> используется для более
          удобной интеграции с Supabase, для формы регистрации используется
          пакет <span className="text-yellow">react-hook-form</span>.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Button type="secondary" href={url}>
          Перейти на сайт
        </Button>
        <Button type="primary" onClick={closeModal}>
          Назад
        </Button>
      </div>
    </>
  );
};

export const TextExtracts = ({ url, closeModal }) => {
  return (
    <>
      <div className="text-white m-5">
        <p>
          Всего на сайте 1172 отрывка. Возможна фильтрация по эпохе и автору.
          При нажатии на автора в таблице, он добавляется в фильтр и адресную
          строку. Авторы и сами тексты имеют свой URL, из них динамически
          создается Sitemap, SSG реализовано через{' '}
          <span className="text-yellow">Next.js</span>.
        </p>
        <p className="mt-4">
          Изначально использовался пакет react-select, потом он был заменен{' '}
          <span className="text-yellow">кастомным селектором</span> с кнопкой
          очищения. Постепенная подгрузка при скроллинге реализована с{' '}
          <span className="text-yellow">react-intersection-observer</span>.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Button type="secondary" href={url}>
          Перейти на сайт
        </Button>
        <Button type="primary" onClick={closeModal}>
          Назад
        </Button>
      </div>
    </>
  );
};

export const TextRigveda = ({ url, closeModal }) => {
  return (
    <>
      <div className="text-white m-5">
        <p>
          "Pure JS" проект. Не используется{' '}
          <span className="text-yellow">никаких npm пакетов</span>, несложный
          билдер написан собственноручно.
        </p>
        <p className="mt-4">
          При прямом заходе на какую-либо страницу (из 1028) открывается ее
          сгенерированный html. При нажатии на ссылку на странице работает как
          SPA.
        </p>
        <p className="mt-4">
          Предыдущая версии сайта:{' '}
          <a
            href="https://github.com/siebentod/rigveda-nextjs"
            className="underline"
          >
            Next.js
          </a>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Button type="secondary" href={url}>
          Перейти на сайт
        </Button>
        <Button type="primary" onClick={closeModal}>
          Назад
        </Button>
      </div>
    </>
  );
};

export const TextBirzha = ({ url, closeModal }) => {
  return (
    <>
      <div className="text-white m-5">
        <p>
          Первое приложение сделано для поиска незнакомых и малоизвестных
          музыкальных исполнителей. Возможны разные варианты сортировки и
          фильтрация по тегам, широкая кастомизация запроса.
        </p>
        <p className="mt-4">
          Второе позволяет узнать разницу цен тикера (акции, фонда, облигации)
          на Мосбирже между двумя выбранными датами. Например, для ответа на
          вопросы «обогнал бы я рынок?», «было бы лучше вложиться в индексный
          фонд?».
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Button type="secondary" href={url}>
          Перейти на сайт
        </Button>
        <Button type="primary" onClick={closeModal}>
          Назад
        </Button>
      </div>
    </>
  );
};

export const TextPDF = ({ url, closeModal }) => {
  return (
    <>
      <div className="text-white m-5">
        <p>
          Regex-замена происходит по ряду правил, обрабатывая ложные и сохраняя
          правильные переносы строки. Для создания кастомной textarea
          использовался пакет react-textarea-autosize. В Textarea нельзя писать
          и редактировать текст, только вставлять и копировать.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        <Button type="secondary" href={url}>
          Перейти на сайт
        </Button>
        <Button type="primary" onClick={closeModal}>
          Назад
        </Button>
      </div>
    </>
  );
};

export const AboutMe = ({ closeModal }) => {
  return (
    <>
      <div className="text-white m-5">
        <li>
          У меня есть философское образование, благодаря чему я приучен читать
          длинные трудные тексты и грамотно писать.
        </li>
        <li className="mt-1">
          Активно работаю с заметками, использую{' '}
          <span className="text-yellow">Obsidian</span> с 2021 года. Делаю для
          себя код-сниппеты и пошаговые гайды.
        </li>
        <li className="mt-1">
          Углубленно изучал темы{' '}
          <span className="text-yellow">самоорганизации</span> и{' '}
          <span className="text-yellow">самообразования</span>. Умею выстраивать
          проекты и выдавать себе задачи, поклонник Максима Дорофеева (в 2021
          году прошел его марафон).
        </li>
      </div>
      <div className="grid mt-4">
        <Button type="secondary" onClick={closeModal}>
          Назад
        </Button>
      </div>
    </>
  );
};
