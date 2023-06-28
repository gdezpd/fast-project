import React from 'react';

export const Sidebar = () => {
    return (
        <div className="lk-nav">
            <div className="lk-nav__inner">
                <div className="balance desktop mb-25">
                    <div className="balance__wrap">
                        <div className="balance__row">
                            <h4 className="base-text">Баланс</h4>
                            <button type="button" className="btn-main">
                                <svg className="icon icon-small mr-1">
                                    {/*<use xlink:href="#add"></use>*/}
                                </svg>
                                <span className="small-xl-text text-medium">Пополнить</span>
                            </button>
                        </div>
                        <div className="balance__row">
                            <span className="small-xl-text">Доступно</span>
                            <span className="small-xl-text color-success">135$</span>
                        </div>
                        <div className="balance__row">
                            <span className="small-xl-text">Зарезервировано</span>
                            <span className="small-xl-text text-medium">600$</span>
                        </div>
                    </div>
                </div>
                <ul className="lk-menu">
                    <li className="lk-menu__item">
                        <a href="campaings.html" className="page-link active new-message">
                      <span className="page-link__icon-dot">
                        <svg className="icon icon-medium page-link__icon desktop-none">
                          {/*<use xlink:href="#campaign"></use>*/}
                        </svg>
                      </span>
                            <span className="page-link__name">Кампании</span>
                            <span className="page-link__indicator ml-auto">
                        <span className="medium-text color-base mr-1">1</span>
                        <span className="page-link__indicator-dot"></span>
                      </span>
                        </a>
                    </li>
                    <li className="lk-menu__item">
                        <a href="creatives.html" className="page-link">
                            <svg className="icon icon-medium page-link__icon desktop-none">
                                {/*<use xlink:href="#picture"></use>*/}
                            </svg>
                            <span className="page-link__name">Креативы</span>
                        </a>
                    </li>
                    <li className="lk-menu__item">
                        <a href="payments.html" className="page-link">
                            <svg className="icon icon-medium page-link__icon desktop-none">
                                {/*<use xlink:href="#coin"></use>*/}
                            </svg>
                            <span className="page-link__name">Платежи</span>
                        </a>
                    </li>
                    <li className="lk-menu__item desktop-none">
                        <a href="account.html" className="page-link">
                            <svg className="icon icon-medium page-link__icon desktop-none">
                                {/*<use xlink:href="#account"></use>*/}
                            </svg>
                            <span className="page-link__name">Аккаунт</span>
                        </a>
                    </li>
                    <li className="lk-menu__item is-desktop">
                        <a href="support.html" className="page-link">
                            <span className="page-link__name">Помощь</span>
                        </a>
                    </li>
                    <li className="lk-menu__item is-desktop">
                        <a href="settings.html" className="page-link">
                            <span className="page-link__name">Настройки</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
