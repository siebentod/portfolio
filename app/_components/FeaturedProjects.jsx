'use client';

import Button from './Button';
import Modal from './Modal';
import Carousel from './Carousel';
import Screenshot from './Screenshot';
import { useState } from 'react';
import { IoOpenOutline } from 'react-icons/io5';
import { IoLogoGithub } from 'react-icons/io5';

function FeaturedProjects() {
  const [openedModal, setOpenedModal] = useState(false);
  const onModalOpen = (site) => {
    setOpenedModal(site);
  };
  const closeModal = () => setOpenedModal(false);

  return (
    <>
      <Modal
        openedModal={openedModal}
        setOpenedModal={setOpenedModal}
        closeModal={closeModal}
      />
      <section
        // className="w-full py-12 md:py-24 lg:py-32 bg-muted snap-start"
        className="w-full py-14 bg-muted snap-start"
        id="projects"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            {/* <p className="max-w-[900px] text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of my recent web development projects.
              </p> */}
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 pt-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img src="/apoliteia.ico" className="h-[16px] mr-1" />
                Apoliteia
              </h3>
              <Carousel>
                <Screenshot onModalOpen={onModalOpen} src="/apoliteia1.png" />
                <Screenshot onModalOpen={onModalOpen} src="/apoliteia2.png" />
                <Screenshot onModalOpen={onModalOpen} src="/apoliteia3.png" />
              </Carousel>
              <p className="text-zinc-600 my-2 flex-1">
                Библиотека параллельных текстов. Сфера использования – учебная и
                исследовательская работа. Весь текст на одной странице для
                простого и быстрого поиска.
              </p>
              <div className="my-1">
                <Button onClick={() => onModalOpen('apoliteia')} type="primary">
                  Технические детали
                </Button>
                <Button
                  href="https://apoliteia.ru"
                  type="secondary"
                  className="ml-1.5"
                >
                  На сайт <IoOpenOutline className="ml-0.5" />
                </Button>
                <Button
                  href="https://github.com/siebentod/apoliteia"
                  type="secondary"
                  className="ml-1.5"
                >
                  Github <IoLogoGithub className="ml-0.5" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img src="/nivritti.ico" className="h-[16px] mr-1" />
                Nivritti
              </h3>
              <Carousel>
                <Screenshot onModalOpen={onModalOpen} src="/nivritti1.png" />
                <Screenshot onModalOpen={onModalOpen} src="/nivritti2.png" />
                <Screenshot onModalOpen={onModalOpen} src="/nivritti3.png" />
              </Carousel>
              <p className="text-zinc-600 my-2 flex-1">
                Минималистичное приложение для медитации/практик
                «осознанности»/etc с авторизацией (e-mail и OAuth), сохранением
                данных в supabase, отображением разноформатной статистики.
              </p>
              <div className="my-1">
                <Button onClick={() => onModalOpen('nivritti')} type="primary">
                  Технические детали
                </Button>
                <Button
                  href="https://nivritti.vercel.app/"
                  type="secondary"
                  className="ml-1.5"
                >
                  На сайт <IoOpenOutline className="ml-0.5" />
                </Button>
                <Button
                  href="https://github.com/siebentod/nivritti"
                  type="secondary"
                  className="ml-1.5"
                >
                  Github <IoLogoGithub className="ml-0.5" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img
                  src="/extracts.ico"
                  className="h-[16px] mr-1 border border-zinc-300 rounded-full"
                />
                Отрывки из философских текстов
              </h3>
              <Carousel>
                <Screenshot onModalOpen={onModalOpen} src="/extracts1.png" />
                <Screenshot onModalOpen={onModalOpen} src="/extracts2.png" />
              </Carousel>
              <p className="text-zinc-600 my-2 flex-1">
                Большая антология отрывков с возможностью поиска и фильтрации.
                Тексты в модальных окнах, которые также функционируют как
                отдельные страницы.
              </p>
              <div className="my-1">
                <Button onClick={() => onModalOpen('extracts')} type="primary">
                  Технические детали
                </Button>
                <Button
                  href="https://philosophy-extracts.vercel.app/"
                  type="secondary"
                  className="ml-1.5"
                >
                  На сайт <IoOpenOutline className="ml-0.5" />
                </Button>
                <Button
                  href="https://github.com/siebentod/philosophy-extracts"
                  type="secondary"
                  className="ml-1.5"
                >
                  Github <IoLogoGithub className="ml-0.5" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img src="/rigveda.ico" className="h-[16px] mr-1" />
                Гимны Ригведы
              </h3>
              <Carousel>
                <Screenshot onModalOpen={onModalOpen} src="/rigveda1.png" />
                <Screenshot onModalOpen={onModalOpen} src="/rigveda2.png" />
              </Carousel>
              <p className="text-zinc-600 my-2 flex-1">
                Все гимны Ригведы в формате псевдо базы данных (js-объект со
                всеми текстами) с возможностью поиска по ней.
              </p>
              <div className="my-1">
                <Button onClick={() => onModalOpen('rigveda')} type="primary">
                  Технические детали
                </Button>
                <Button
                  href="https://rigveda-hymns.vercel.app/"
                  type="secondary"
                  className="ml-1.5"
                >
                  На сайт <IoOpenOutline className="ml-0.5" />
                </Button>
                <Button
                  href="https://github.com/siebentod/rigveda"
                  type="secondary"
                  className="ml-1.5"
                >
                  Github <IoLogoGithub className="ml-0.5" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img src="/birzha.ico" className="h-[16px] mr-1" />
                Birzha
              </h3>
              <Carousel>
                <Screenshot onModalOpen={onModalOpen} src="/birzha1.png" />
                <Screenshot onModalOpen={onModalOpen} src="/birzha2.png" />
              </Carousel>
              <p className="text-zinc-600 my-2 flex-1">
                Минималистичное приложение, которое позволяет узнать разницу цен
                тикера (акции, фонда, облигации) на бирже между двумя выбранными
                датами.
              </p>
              <div className="my-1">
                <Button onClick={() => onModalOpen('birzha')} type="primary">
                  Технические детали
                </Button>
                <Button
                  href="https://birzha.vercel.app/"
                  type="secondary"
                  className="ml-1.5"
                >
                  На сайт <IoOpenOutline className="ml-0.5" />
                </Button>
                <Button
                  href="https://github.com/siebentod/birzha"
                  type="secondary"
                  className="ml-1.5"
                >
                  Github <IoLogoGithub className="ml-0.5" />
                </Button>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img src="/pdf.ico" className="h-[16px] mr-1" />
                Clean Copy From PDF
              </h3>
              <Carousel>
                <Screenshot onModalOpen={onModalOpen} src="/pdf1.png" />
                <Screenshot onModalOpen={onModalOpen} src="/pdf2.png" />
                <Screenshot onModalOpen={onModalOpen} src="/pdf3.png" />
              </Carousel>
              <p className="text-zinc-600 my-2 flex-1">
                Простая утилита для удаления лишних абзацев из текста,
                скопированного из PDF. Существует в виде Desktop приложения,
                созданного при помощи Tauri.
              </p>
              <div className="my-1">
                <Button onClick={() => onModalOpen('pdf')} type="primary">
                  Технические детали
                </Button>
                <Button
                  href="https://clean-copy-from-pdf.vercel.app/"
                  type="secondary"
                  className="ml-1.5"
                >
                  На сайт <IoOpenOutline className="ml-0.5" />
                </Button>
                <Button
                  href="https://github.com/siebentod/clean-copy-from-pdf"
                  type="secondary"
                  className="ml-1.5"
                >
                  Github <IoLogoGithub className="ml-0.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedProjects;