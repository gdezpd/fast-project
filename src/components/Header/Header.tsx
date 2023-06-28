import React from 'react';

export const Header = () => {

    return (
        <header className="header border desktop">
            <div className="container">

                <a href="/" className="logo img-wrap">
                    <img src="https://static.biterika.team/brobooster/assets/images/logo.svg" alt="logo"/>
                </a>
                <button type="button" data-trigger="nav-popup" data-overlay className="site-icon desktop-none">
                    <img src="https://static.biterika.team/brobooster/assets/images/icons/site.svg" alt="img"/>
                </button>
                <div className="flex-row">
                    <a href="new-campaing.html" className="btn secondary">Создать кампанию</a>
                    <div className="nav-wrap">
                        <button type="button" className="btn-main ml-5 js-open-nav">
                            {/*<svg className="icon icon-medium mr-1">*/}
                            {/* */}
                            {/*    <symbol fill="none" viewBox="0 0 24 24" id="globe" xmlns="http://www.w3.org/2000/svg">*/}
                            {/*        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2"/>*/}
                            {/*        <path*/}
                            {/*            d="M17 12c0 3.192-.65 6.033-1.652 8.038C14.316 22.103 13.074 23 12 23c-1.074 0-2.316-.897-3.348-2.962C7.649 18.033 7 15.192 7 12s.65-6.033 1.652-8.038C9.684 1.897 10.926 1 12 1c1.074 0 2.316.897 3.348 2.962C16.351 5.967 17 8.808 17 12z"*/}
                            {/*            stroke="currentColor" strokeWidth="2"/>*/}
                            {/*        <path d="M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"*/}
                            {/*              strokeLinejoin="round"/>*/}
                            {/*    </symbol>*/}
                            {/*    <use xlink:href="#globe"/>*/}
                            {/*</svg>*/}
                            <span className="medium-text text-medium color-sub">Русский</span>
                        </button>
                        <div className="nav-wrapper js-nav">
                            <div className="nav js-tabs">
                                <div className="nav__wrap">
                                    <ul className="nav__head js-tabs-buttons">
                                        <li data-tab="tab-one" className="nav__head-btn active">Язык</li>
                                        <li data-tab="tab-two" className="nav__head-btn">Валюта</li>
                                    </ul>
                                    <div className="nav__content">
                                        <div className="nav__content-tab active" data-content="tab-one">
                                            <div className="nav__picker-wrap js-lang-picker">
                                                <div className="nav__top mb-15 mb-md-2">
                                                    <h4 className="sub-title mb-1 mb-md-15">Для вас</h4>
                                                    <div className="nav__row">
                                                        <button type="button" data-language="en"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-4.png"
                                     alt="flag"/>
                              </span>
                                                            <span> English </span>
                                                        </button>
                                                        <button type="button" data-language="zh"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-2.png"
                                     alt="flag"/>
                              </span>
                                                            <span> 中国人 </span>
                                                        </button>
                                                        <button type="button" data-language="es"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-3.png"
                                     alt="flag"/>
                              </span>
                                                            <span> Español </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="nav__block">
                                                    <h4 className="sub-title mb-1 mb-md-15">Все языки</h4>
                                                    <div className="nav__row">
                                                        <button type="button" data-language="ru"
                                                                className="nav__lang-btn nav__lang-btn--mob active">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-1.jpg"
                                     alt="flag"/>
                              </span>
                                                            <span>Русский</span>
                                                        </button>
                                                        <button type="button" data-language="zh"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-2.png"
                                     alt="flag"/>
                              </span>
                                                            <span> 中国人 </span>
                                                        </button>
                                                        <button type="button" data-language="es"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-3.png"
                                     alt="flag"/>
                              </span>
                                                            <span> Español </span>
                                                        </button>
                                                        <button type="button" data-language="en"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-4.png"
                                     alt="flag"/>
                              </span>
                                                            <span> English </span>
                                                        </button>
                                                        <button type="button" data-language="th"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-5.png"
                                     alt="flag"/>
                              </span>
                                                            <span> ไทย </span>
                                                        </button>
                                                        <button type="button" data-language="pt"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-6.png"
                                     alt="flag"/>
                              </span>
                                                            <span> Português </span>
                                                        </button>
                                                        <button type="button" data-language="id"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-7.png"
                                     alt="flag"/>
                              </span>
                                                            <span> Bahasa Indonesia </span>
                                                        </button>
                                                        <button type="button" data-language="vi"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-8.png"
                                     alt="flag"/>
                              </span>
                                                            <span> Tiếng Việt </span>
                                                        </button>
                                                        <button type="button" data-language="fr"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-9.png"
                                     alt="flag"/>
                              </span>
                                                            <span> Français </span>
                                                        </button>
                                                        <button type="button" data-language="hi"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-10.png"
                                     alt="flag"/>
                              </span>
                                                            <span> हिन्दी </span>
                                                        </button>
                                                        <button type="button" data-language="it"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-11.png"
                                     alt="flag"/>
                              </span>
                                                            <span> Italiano </span>
                                                        </button>
                                                        <button type="button" data-language="de"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-12.png"
                                     alt="flag"/>
                              </span>
                                                            <span> Deutsch </span>
                                                        </button>
                                                        <button type="button" data-language="tr"
                                                                className="nav__lang-btn nav__lang-btn--mob">
                              <span className="nav__lang-icon">
                                <img src="https://static.biterika.team/brobooster/assets/images/countries/flag-13.png"
                                     alt="flag"/>
                              </span>
                                                            <span> Türkçe </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="nav__content-tab" data-content="tab-two">
                                            <div className="nav__picker-wrap js-lang-picker">
                                                <div className="nav__top mb-15 mb-md-2 md-lg-15">
                                                    <h4 className="sub-title mb-1 mb-md-15">Для вас</h4>
                                                    <div className="nav__row">
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency active">
                                                            <span className="mb-05">Российский рубль</span>
                                                            <span className="small-text color-sub">RUB – ₽</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Американский доллар</span>
                                                            <span className="small-text color-sub">USD – $</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Евро</span>
                                                            <span className="small-text color-sub">EUR – €</span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="nav__block">
                                                    <h4 className="sub-title mb-1 mb-md-15">Вся валюта</h4>
                                                    <div className="nav__row">
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Российский рубль</span>
                                                            <span className="small-text color-sub">RUB – ₽</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Евро</span>
                                                            <span className="small-text color-sub">EUR – €</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Евро</span>
                                                            <span className="small-text color-sub">EUR – €</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Американский доллар</span>
                                                            <span className="small-text color-sub">USD – $</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Сингапурский доллар</span>
                                                            <span className="small-text color-sub">SGD – $S</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Сингапурский доллар</span>
                                                            <span className="small-text color-sub">SGD – $S</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Австралийский доллар</span>
                                                            <span className="small-text color-sub">AUD – A$</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Китайский юань</span>
                                                            <span className="small-text color-sub">CNY – ¥</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Китайский юань</span>
                                                            <span className="small-text color-sub">CNY – ¥</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Индонезийская рупия</span>
                                                            <span className="small-text color-sub">IDR – Rp</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Тайский бат</span>
                                                            <span className="small-text color-sub">THB – ฿</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Тайский бат</span>
                                                            <span className="small-text color-sub">THB – ฿</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Индонезийская рупия</span>
                                                            <span className="small-text color-sub">IDR – Rp</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Филипинское песо</span>
                                                            <span className="small-text color-sub">PHP – ₱</span>
                                                        </button>
                                                        <button type="button" data-currency="#"
                                                                className="nav__lang-btn nav__lang-btn--currency">
                                                            <span className="mb-05">Филипинское песо</span>
                                                            <span className="small-text color-sub">PHP – ₱</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn-main ml-4">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_445_4181)">
                                <path
                                    d="M15 7.59091V5C15 3.34315 13.6569 2 12 2H4C2.34315 2 1 3.34315 1 5V19C1 20.6569 2.34315 22 4 22H12C13.6569 22 15 20.6569 15 19V16.4091"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <line x1="8" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M23.5 11.134C24.1667 11.5189 24.1667 12.4811 23.5 12.866L20.5 14.5981C19.8333 14.983 19 14.5019 19 13.7321V10.2679C19 9.49815 19.8333 9.01702 20.5 9.40192L23.5 11.134Z"
                                    fill="currentColor"/>
                            </g>
                            <defs>
                                <clippath id="clip0_445_4181">
                                    <rect width="24" height="24" fill="white"/>
                                </clippath>
                            </defs>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

