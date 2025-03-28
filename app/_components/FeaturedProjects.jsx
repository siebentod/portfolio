'use client';

import Button from './Button';
import Modal from './Modal';
import Carousel from './Carousel';
import Screenshot from './Screenshot';
import { useState } from 'react';
import { IoOpenOutline, IoLogoGithub } from 'react-icons/io5';

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
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Мои проекты
            </h2>
            {/* <p className="max-w-[900px] text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out some of my recent web development projects.
              </p> */}
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 pt-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img src="/hospify.ico" className="h-[16px] mr-1" />
                Consilium
              </h3>
              <div className="relative">
                <Carousel>
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/consilium1.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/consilium2.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/consilium3.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/consilium4.png"
                  />
                </Carousel>
                <div className="absolute right-1.5 bottom-1.5 ">
                  <div className="rounded-full bg-zinc-800"></div>
                </div>
              </div>
              <p className="text-zinc-600 my-2 flex-1">
                Веб-портал для медицинских работников.
              </p>
              <div className="my-1 flex flex-wrap place-content-center xs:place-content-start">
                <Button
                  href=""
                  type="primary"
                  className="mb-1.5 xs:mb-0 text-gray-500"
                >
                  Технические детали
                </Button>
                <div className="flex">
                  <Button
                    href="https://hosp.consilium-online.ru"
                    type="secondary"
                    className="xs:ml-1.5 text-gray-300 hover:text-gray-300"
                  >
                    На сайт <IoOpenOutline className="ml-0.5 text-gray-300" />
                  </Button>
                  <Button
                    href=""
                    type="secondary"
                    className="ml-1.5 text-gray-300 hover:text-gray-300"
                  >
                    Github <IoLogoGithub className="ml-0.5 text-gray-300" />
                  </Button>
                </div>
              </div>
            </div>


            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img src="/hospify.ico" className="h-[16px] mr-1" />
                Hospify
              </h3>
              <div className="relative">
                <Carousel>
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/hosp-desktop.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/hosp-desktop5.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/hosp-desktop2.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/hosp-desktop3.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/hosp-desktop4.png"
                  />
                </Carousel>
                <div className="absolute right-1.5 bottom-1.5 ">
                  <div className="rounded-full bg-zinc-800"></div>
                </div>
              </div>
              <p className="text-zinc-600 my-2 flex-1">
                Приложение для медицинских работников. Реализованы запросы с
                кэшированием и ревалидацией.
              </p>
              <div className="my-1 flex flex-wrap place-content-center xs:place-content-start">
                <Button
                  href=""
                  type="primary"
                  className="mb-1.5 xs:mb-0 text-gray-500"
                >
                  Технические детали
                </Button>
                <div className="flex">
                  <Button
                    // href="https://hosp.consilium-online.ru"
                    type="secondary"
                    className="xs:ml-1.5 text-gray-300 hover:text-gray-300"
                  >
                    На сайт <IoOpenOutline className="ml-0.5 text-gray-300" />
                  </Button>
                  <Button
                    href=""
                    type="secondary"
                    className="ml-1.5 text-gray-300 hover:text-gray-300"
                  >
                    Github <IoLogoGithub className="ml-0.5 text-gray-300" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img src="/nivritti.ico" className="h-[16px] mr-1" />
                Nivritti
              </h3>
              <div className="relative">
                <Carousel>
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/nivritti-new2.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/nivritti2.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/nivritti3.png"
                  />
                </Carousel>
                <div className="absolute right-1.5 bottom-1.5 ">
                  <div className="rounded-full bg-zinc-800">
                    <img
                      src="/next-js.svg"
                      alt="Next.js Icon"
                      className="w-7 h-7"
                    />
                  </div>
                </div>
              </div>
              <p className="text-zinc-600 my-2 flex-1">
                Минималистичное приложение для медитации/успокоения с
                регистрацией (email и OAuth), сохранением данных в supabase,
                отображением статистики в виде Heatmap.
              </p>
              <div className="my-1 flex flex-wrap place-content-center xs:place-content-start">
                <Button
                  onClick={() => onModalOpen('nivritti')}
                  type="primary"
                  className="mb-1.5 xs:mb-0"
                >
                  Технические детали
                </Button>
                <div className="flex">
                  <Button
                    href="https://nivritti.vercel.app/"
                    type="secondary"
                    className="xs:ml-1.5"
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
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img src="/worldwise.ico" className="h-[16px] mr-1" />
                WorldWise.ru
              </h3>
              <div className="relative">
                <Carousel>
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/worldwise1.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/worldwise3.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/worldwise2.png"
                  />
                </Carousel>
                <div className="absolute right-1.5 bottom-1.5 ">
                  <div className="rounded-full">
                    <img
                      src="/next.svg"
                      alt="Next.js Icon"
                      className="w-7 h-7 bg-white rounded-full"
                    />
                  </div>
                </div>
              </div>
              <p className="text-zinc-600 my-2 flex-1">
                Сайт с текстами, сгенерированными Ноосферой. Есть
                репрезентирующий поиск по текстам и теги с отображением этих
                параметров в URL.
              </p>
              <div className="my-1 flex flex-wrap place-content-center xs:place-content-start">
                <Button
                  // onClick={() => onModalOpen('worldwise')}
                  type="primary"
                  className="mb-1.5 xs:mb-0 text-zinc-600"
                >
                  Технические детали
                </Button>
                <div className="flex">
                  <Button
                    href="https://worldwise.ru/"
                    type="secondary"
                    className="xs:ml-1.5"
                  >
                    На сайт <IoOpenOutline className="ml-0.5" />
                  </Button>
                  <Button
                    href=""
                    type="secondary"
                    className="ml-1.5 text-gray-300 hover:text-gray-300"
                  >
                    Github <IoLogoGithub className="ml-0.5 text-gray-300" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img src="/arktogaia.ico" className="h-[16px] mr-1" />
                Arktogaia.ru
              </h3>
              <div className="relative">
                <Carousel>
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/arktogaia1.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/arktogaia2.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/arktogaia3.png"
                  />
                </Carousel>
                <div className="absolute right-1.5 bottom-1.5 ">
                  <div className="rounded-full bg-zinc-800">
                    <img
                      src="/next-js.svg"
                      alt="Next.js Icon"
                      className="w-7 h-7"
                    />
                  </div>
                </div>
              </div>
              <p className="text-zinc-600 my-2 flex-1">
                Музей Арктогеи. Реализован полнотекстовый поиск, страницы
                работают как модальные окна.
              </p>
              <div className="my-1 flex flex-wrap place-content-center xs:place-content-start">
                <Button
                  href=""
                  type="primary"
                  className="mb-1.5 xs:mb-0 text-gray-500"
                >
                  Технические детали
                </Button>
                <div className="flex">
                  <Button
                    href="https://arktogaia.ru"
                    type="secondary"
                    className="xs:ml-1.5"
                  >
                    На сайт <IoOpenOutline className="ml-0.5" />
                  </Button>
                  <Button
                    href=""
                    type="secondary"
                    className="ml-1.5 text-gray-300 hover:text-gray-300"
                  >
                    Github <IoLogoGithub className="ml-0.5 text-gray-300" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img src="/apoliteia.ico" className="h-[16px] mr-1" />
                Apoliteia.ru
              </h3>
              <div className="relative">
                <Carousel>
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/apoliteia1.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/apoliteia3.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/apoliteia2.png"
                  />
                </Carousel>
                <div className="absolute right-1 bottom-1 ">
                  <div className="border border-slate-200 rounded-full">
                    <img
                      src="/vike.svg"
                      alt="Vike Icon"
                      className="w-7 h-7 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <p className="text-zinc-600 my-2 flex-1">
                Библиотека параллельных текстов. Сфера использования – учебная и
                исследовательская работа. Весь текст на одной странице для
                простого и быстрого поиска.
              </p>
              <div className="my-1 flex flex-wrap place-content-center md:place-content-start">
                <Button
                  onClick={() => onModalOpen('apoliteia')}
                  type="primary"
                  className="mb-1.5 xs:mb-0"
                >
                  Технические детали
                </Button>
                <div className="flex">
                  <Button
                    href="https://apoliteia.ru"
                    type="secondary"
                    className="xs:ml-1.5"
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
            </div>
            
            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img
                  src="/extracts.ico"
                  className="h-[16px] mr-1 border border-zinc-300 rounded-full"
                />
                Отрывки из философских текстов
              </h3>
              <div className="relative">
                <Carousel>
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/extracts1.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/extracts2.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/extracts3.png"
                  />
                </Carousel>
                <div className="absolute right-1.5 bottom-1.5 ">
                  <div className="rounded-full bg-zinc-800">
                    <img
                      src="/next-js.svg"
                      alt="Next.js Icon"
                      className="w-7 h-7"
                    />
                  </div>
                </div>
              </div>
              <p className="text-zinc-600 my-2 flex-1">
                Большая антология отрывков с постепенной подгрузкой по скроллу и
                полнотекстовым презентирующим поиском. Тексты в модальных окнах
                функционируют как отдельные страницы.
              </p>
              <div className="my-1 flex flex-wrap place-content-center xs:place-content-start">
                <Button
                  onClick={() => onModalOpen('extracts')}
                  type="primary"
                  className="mb-1.5 xs:mb-0"
                >
                  Технические детали
                </Button>
                <div className="flex">
                  <Button
                    href="https://philosophy-extracts.vercel.app/"
                    type="secondary"
                    className="xs:ml-1.5"
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
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img src="/lastfm.ico" className="h-[16px] mr-1" />
                Last.FM Tool /
                <img src="/birzha.ico" className="h-[16px] mr-1 ml-[7px]" />
                Birzha
              </h3>
              <div className="relative">
                <Carousel>
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/lastfm1.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/lastfm2.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/birzha1.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/birzha2.png"
                  />
                </Carousel>
                <div className="absolute right-1.5 bottom-1.5 ">
                  <div className="rounded-full bg-zinc-800">
                    <img
                      src="/next-js.svg"
                      alt="Next.js Icon"
                      className="w-7 h-7"
                    />
                  </div>
                </div>
              </div>
              <p className="text-zinc-600 my-2 flex-1">
                Два приложения, которые получают и обрабатывают данные с API.
                Для первого реализовано{' '}
                <a
                  href="https://addons.mozilla.org/en-US/firefox/addon/last-fm-get-obscure-artists/"
                  className="underline underline-offset-2 text-myred hover:text-[#4579cb]"
                >
                  дополнение для Firefox
                </a>
                . Оно также показывает данные во время загрузки и использует
                Next.js для сокрытия ключа.
              </p>
              <div className="my-1 flex flex-wrap place-content-center xs:place-content-start">
                <Button
                  onClick={() => onModalOpen('birzha')}
                  type="primary"
                  className="mb-1.5 xs:mb-0"
                >
                  Технические детали
                </Button>
                <div className="flex">
                  <Button
                    href="https://lastfm-obscure-artists.vercel.app"
                    type="secondary"
                    className="xs:ml-1.5"
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
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img src="/rigveda.ico" className="h-[16px] mr-1" />
                Rigveda-hymns.ru
              </h3>
              <div className="relative">
                <Carousel>
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/rigveda1.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/rigveda2.png"
                  />
                </Carousel>
                <div className="absolute right-1.5 bottom-1.5 ">
                  <div className="rounded-full">
                    <img
                      src="/nodejs.svg"
                      alt="Next.js Icon"
                      className="w-7 h-7"
                    />
                  </div>
                </div>
              </div>
              <p className="text-zinc-600 my-2 flex-1">
                Все гимны Ригведы в формате json/js с возможностью поиска. SPA +
                SSG без фреймворков и npm пакетов, «билдер» написан на nodejs.
              </p>
              <div className="my-1 flex flex-wrap place-content-center xs:place-content-start">
                <Button
                  onClick={() => onModalOpen('rigveda')}
                  type="primary"
                  className="mb-1.5 xs:mb-0"
                >
                  Технические детали
                </Button>
                <div className="flex">
                  <Button
                    href="https://rigveda-hymns.vercel.app/"
                    type="secondary"
                    className="xs:ml-1.5"
                  >
                    На сайт <IoOpenOutline className="ml-0.5" />
                  </Button>
                  <Button
                    href="https://github.com/siebentod/rigveda-purejs"
                    type="secondary"
                    className="ml-1.5"
                  >
                    Github <IoLogoGithub className="ml-0.5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex flex-col h-full">
              <h3 className="text-xl font-bold my-1 flex items-center">
                <img src="/pdf.ico" className="h-[16px] mr-1" />
                Clean Copy From PDF
              </h3>
              <div className="relative">
                <Carousel>
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/pdf2.png"
                  />
                  <Screenshot
                    onModalOpen={onModalOpen}
                    src="/screenshots/pdf1.png"
                  />
                </Carousel>
                <div className="absolute right-1.5 bottom-1.5 ">
                  <div className="rounded-full bg-white">
                    <img
                      src="/tauri.svg"
                      alt="Next.js Icon"
                      className="w-7 h-7 p-1.5"
                    />
                  </div>
                </div>
              </div>
              <p className="text-zinc-600 my-2 flex-1">
                Простая утилита для удаления лишних абзацев из текста,
                скопированного из PDF. Существует в виде сайта и{' '}
                <a
                  href="https://github.com/siebentod/clean-copy-from-pdf/releases/tag/initial"
                  className="underline underline-offset-2 text-myred hover:text-[#4579cb]"
                >
                  Desktop приложения
                </a>
                , созданного при помощи Tauri.
              </p>
              <div className="my-1 flex flex-wrap place-content-center xs:place-content-start">
                <Button
                  onClick={() => onModalOpen('pdf')}
                  type="primary"
                  className="mb-1.5 xs:mb-0"
                >
                  Технические детали
                </Button>
                <div className="flex">
                  <Button
                    href="https://clean-copy-from-pdf.vercel.app/"
                    type="secondary"
                    className="xs:ml-1.5"
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
        </div>
      </section>
    </>
  );
}

export default FeaturedProjects;
