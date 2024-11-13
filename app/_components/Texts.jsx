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
          Использовался фреймворк <span className="text-yellow">vike</span>, а
          не Next.js, потому что в нем проще и удобнее на данный момент
          реализован полный пререндеринг (SSG) с последующей гидрацией.
        </p>
        <p className="mt-4">
          Параллельное расположение сделано не через table, а через grid и ~
          селектор.
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
          куки. Пользовательские данные сохраняются в{' '}
          <span className="text-yellow">Supabase</span>. В нем используются не
          только стоковые, но и собственные функции, а также триггеры и cron
          jobs. В написании SQL помогал ChatGPT.
        </p>
        <p className="my-4">
          Регистрация возможна через e-mail+пароль (подтверждение регистрации
          при помощи бесплатного{' '}
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
          Всего на сайте 1172 отрывка. Возможна фильтрация по эпохе и автору;
          при нажатии на автора в таблице, он добавляется в фильтр (и адресную
          строку). Авторы и сами тексты имеют свой URL, из них динамически
          создается Sitemap.
        </p>
        <p className="mt-4">
          Селекторы с поиском созданы с помощью пакета{' '}
          <span className="text-yellow">react-select</span>, постепенная
          подгрузка при скроллинге реализована с{' '}
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
          Текст взят с другого сайта. Его объем очень большой, для обработки –
          перевода в другой формат, а также исправления ошибок OCR –
          использовалось множество{' '}
          <span className="text-yellow">nodejs-скриптов</span>, с которыми
          помогал ChatGPT.
        </p>
        <p className="mt-4">
          Ссылки функционируют как отдельные страницы с заглавиями, которые
          можно сохранить в закладки.
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
          Приложение было сделано, так как понадобился такой функционал.
          Полезным опытом было разобраться в незнакомом API с огромной базой
          данных (Мосбиржа). Стили полностью сделаны на{' '}
          <span className="text-yellow">Tailwind</span>.
        </p>
        <p className="mt-4">
          Смысл приложения: выяснять, какой рост/падение претерпела цена акции в
          сравнении с изменением индекса мосбиржи за тот же период; например,
          для ответов на вопросы «обогнал бы я рынок?», «было бы лучше вложиться
          в индексный фонд?».
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
          Приложением активно сам пользуюсь. Regex-замена происходит по ряду
          правил, обрабатывая ложные и правильные переносы строки. Для создания
          кастомной textarea использовался пакет react-textarea-autosize. В
          Textarea нельзя писать и редактировать текст, только вставлять и
          копировать.
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
          У меня есть гуманитарное образование, благодаря чему я приучен читать
          длинные трудные тексты и грамотно писать.
        </li>
        <li className="mt-1">
          Я люблю заметочники, использую{' '}
          <span className="text-yellow">Obsidian</span> с 2021 года. Привык все
          записывать, и это также касается кода: я постепенно создаю для себя
          библиотеку <span className="text-yellow">сниппетов</span> и пошаговых
          гайдов, описывающих алгоритм, как осуществить ту или иную логику.
        </li>
        <li className="mt-1">
          Я много изучал темы{' '}
          <span className="text-yellow">самоорганизации</span> и{' '}
          <span className="text-yellow">самообразования</span>. Привык выдавать
          самому себе задачи и выстраивать проекты, являюсь поклонником Максима
          Дорофеева (в 2021 году прошел его марафон, когда он был бесплатным).
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