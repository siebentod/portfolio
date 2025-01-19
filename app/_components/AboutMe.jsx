'use client';

import CopyButton from './CopyButton';
import Button from './Button';
import Modal from './Modal';
import { useState } from 'react';

function AboutMe() {
  // const [aboutChosen, setAboutChosen] = useState(education);
  const [openedModal, setOpenedModal] = useState(false);
  const buttonHandler = (el) => {
    setOpenedModal(el);
  };
  const closeModal = () => setOpenedModal(false);

  return (
    <>
      <Modal
        openedModal={openedModal}
        setOpenedModal={setOpenedModal}
        closeModal={closeModal}
      />
      <div className="bg-muted">
        <section
          className="mx-auto max-w-5xl py-14 snap-start "
          // className="w-full py-12 md:py-24 lg:py-32 bg-muted snap-start"
          id="contact"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[60ch_1fr]">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  About Me
                </h2>
                <p className="max-w-[900px] text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed mt-2">
                  Живу в Воронеже, 1998 г. рождения. Учился на ФКН, но не
                  окончил, потом окончил гуманитарное направление. Изучал
                  фронтенд по англоязычным курсам, таким как{' '}
                  <a
                    href="https://www.udemy.com/course/the-ultimate-react-course/"
                    className="text-myred hover:text-[#4579cb]"
                  >
                    Jonas Schmedtmann (React+Next)
                  </a>
                  ,{' '}
                  <a
                    href="https://www.oreilly.com/videos/react-the/9781801812603/"
                    className="text-myred hover:text-[#4579cb]"
                  >
                    Maximilian Schwarzmüller
                  </a>
                  ,{' '}
                  <a
                    href="https://www.udemy.com/course/the-complete-javascript-course/"
                    className="text-myred hover:text-[#4579cb]"
                  >
                    Jonas Schmedtmann (Javascript)
                  </a>{' '}
                  и{' '}
                  <a
                    href="https://cssdemystified.com/"
                    className="text-myred hover:text-[#4579cb]"
                  >
                    CSS Demystified
                  </a>
                  . В данный момент прохожу курс{' '}
                  <a
                    href="https://practicum.yandex.ru/backend-nodejs/"
                    className="text-myred hover:text-[#4579cb]"
                  >
                    Бэкенд на Node.js для фронтенд-разработчиков
                  </a>
                  .
                </p>
                {/* <p className="max-w-[900px] text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed mt-2"></p> */}
                <Button
                  type="primary"
                  className="mt-4 block mx-auto lg:inline-flex"
                  onClick={() => buttonHandler('aboutme')}
                >
                  Больше
                </Button>
              </div>
              <div>
                <div className="flex flex-col mx-auto mt-4 lg:mt-12 w-max">
                  <div className="flex items-center gap-1">
                    <a
                      href="https://t.me/siebentod"
                      className="inline-flex items-center gap-2 w-max text-myred hover:text-[#4579cb]"
                    >
                      <span className="icon-[logos--telegram] w-8 h-8"></span>
                      @siebentod
                    </a>
                    <CopyButton textToCopy="@siebentod" />
                  </div>
                  <div className="flex items-center mt-4 gap-1">
                    <a
                      href="mailto:siebentod@mail.ru"
                      className="inline-flex items-center gap-2 w-max text-myred hover:text-[#4579cb]"
                    >
                      <span className="icon-[fluent-emoji-flat--e-mail] w-8 h-8"></span>
                      siebentod@mail.ru
                    </a>
                    <CopyButton textToCopy="siebentod@mail.ru" />
                  </div>
                  <Button
                    href="/CV_Alexey_Mokrousov.pdf"
                    type="primary"
                    className="w-full mt-6"
                  >
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutMe;
