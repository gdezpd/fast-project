"use client"
import React, {useState} from 'react';
import Sidebar from "@/components/Sidebar";
import {DataType} from "@/app/page";

type FilteredTabProps = {
    campaignsData: DataType[]
}
export const FilteredTab = ({campaignsData}: FilteredTabProps) => {

    const [filteredCompany, setFilteredCompany] = useState(campaignsData)
    const [tab, setTab] = useState<string>('all')
    const arrayTab = [{dataTab: 'all', title: 'Все'}, {dataTab: '1', title: 'В работе'}, {
        dataTab: '2',
        title: 'Ожидают начала'
    }, {dataTab: '3', title: 'Приостановлены'}, {dataTab: '4', title: 'На модерации'}, {
        dataTab: '5',
        title: 'Завершенные'
    },]

    const onClickHandler = (e) => {
        switch (e.target.attributes[0].value) {
            case '1':
                setFilteredCompany(campaignsData.filter(el => el.state === 'in_progress'))
                setTab('1')
                break
            case '2':
                setFilteredCompany(campaignsData.filter(el => el.state === 'waiting_start'))
                setTab('2')
                break
            case '3':
                setFilteredCompany(campaignsData.filter(el => el.state === 'paused'))
                setTab('3')
                break
            case '4':
                setFilteredCompany(campaignsData.filter(el => el.state === 'moderation'))
                setTab('4')
                break
            case '5':
                setFilteredCompany(campaignsData.filter(el => el.state === 'completed'))
                setTab('5')
                break
            default:
                setFilteredCompany(campaignsData)
                setTab('all')
                break
        }
    }

    return (
        <div className="container flex-column flex-auto">
            <div className="lk-wrapper full">
                <Sidebar/>
                <div className="lk-content flex-column flex-auto">
                    <div className="section-head">
                        <h1 className="section-title mr-25 js-title">Кампании</h1>
                        <a href="new-campaing.html" className="btn-main desktop-none ml-auto">
                            <svg className="icon icon-medium">
                                {/*<use xlink:href="#add-24"></use>*/}
                            </svg>
                        </a>
                    </div>
                    <div className="filter-tabs js-tabs mt-2 mt-lg-25">
                        <div className="filter-tabs__scroll scroll-none">
                            <ul className="filter-tabs__header flex-auto js-tabs-buttons mb-15 mb-md-2 mb-lg-25">
                                {
                                    arrayTab.map(el => {
                                        const activeClass = el.dataTab === tab ? 'filter-tabs__btn-circle active' : 'filter-tabs__btn-circle'
                                        return <li data-tab={el.dataTab} className={activeClass}
                                                   onClick={onClickHandler}>{el.title}
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="table">
                            <div className="table__md-wrap">
                                <div className="table__head table__head--col-8 is-tablet mb-15 mb-lg-2">
                                    <div className="table__row">
                                        <div className="table__col">
                                            <span className="small-xl-text color-sub">Кампания</span>
                                        </div>
                                        <div className="table__col widescreen-lg">
                                            <span className="small-xl-text color-sub">Креативы</span>
                                        </div>
                                        <div className="table__col widescreen-lg">
                                            <span className="small-xl-text color-sub">Место проведения</span>
                                        </div>
                                        <div className="table__col">
                                            <span className="small-xl-text color-sub">Локации</span>
                                        </div>
                                        <div className="table__col">
                                            <span className="small-xl-text color-sub">Транспорт</span>
                                        </div>
                                        <div className="table__col">
                                            <span className="small-xl-text color-sub">Показ</span>
                                        </div>
                                        <div className="table__col">
                                            <span className="small-xl-text color-sub">Бюджет</span>
                                        </div>
                                        <div className="table__col"></div>
                                    </div>
                                </div>


                                <div className="table__body filter-tabs__content">

                                    {
                                        filteredCompany.map((el) => {
                                            return (
                                                <div key={el.id} className="filter-tabs__item active"
                                                     data-content="1">
                                                    <div className="card card--col-8">
                                                        <div className="card__wrap xxl-center">
                                                            <div className="card__col first flex-column">
                                                                <h5 className="medium-text">{el.title}</h5>
                                                                <ul className="info-list mb-1 mb-lg-15">
                                                                    <li className="info-list__item">
                                                                                <span
                                                                                    className="sub-text">ID {el.id}</span>
                                                                    </li>
                                                                    <li className="info-list__item">
                                                                    <span
                                                                        className="sub-text">12 янв 2023 в 14:45</span>
                                                                    </li>
                                                                </ul>
                                                                <div className="flex-column md-reverse">
                                                                    <div className="status small success">
                                  <span className="info-icon img-wrap mr-05">
                                    <img
                                        src="https://static.biterika.team/brobooster/assets/images/icons/dot-success.svg"
                                        alt=""/>
                                  </span>
                                                                        <span
                                                                            className="small-text">{el.state}</span>
                                                                    </div>
                                                                    <p className="medium-text widescreen-lg-none mt-1 mt-md-0 mb-md-1">Индонезия,
                                                                        Бали</p>
                                                                </div>
                                                            </div>
                                                            <div className="card__col second widescreen-lg">
                                                                <p className="medium-text">{el.city}</p>
                                                            </div>
                                                            <div className="card__cols-block mt-1 mt-md-0">
                                                                <div className="card__row four">
                                                                    <div
                                                                        className="card__row-col flex-column">
                                                                    <span
                                                                        className="small-text tablet-none">Локации</span>
                                                                        <span
                                                                            className="medium-text">{el.locations}</span>
                                                                    </div>
                                                                    <div
                                                                        className="card__row-col flex-column">
                                                                    <span
                                                                        className="small-text tablet-none">Транспорт</span>
                                                                        <span
                                                                            className="medium-text">{el.transports}</span>
                                                                    </div>
                                                                    <div
                                                                        className="card__row-col flex-column">
                                                                    <span
                                                                        className="small-text tablet-none">Показ</span>
                                                                        <span
                                                                            className="medium-text">{el.display} ч</span>
                                                                    </div>
                                                                    <div
                                                                        className="card__row-col flex-column">
                                                                    <span
                                                                        className="small-text tablet-none">Бюджет</span>
                                                                        <span
                                                                            className="medium-text">{el.budget}$</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card__col third flex-auto">
                                                                <div className="card__img-wrap">
                                                                    {
                                                                        el.photos.map((el, i) => {
                                                                            return (
                                                                                !i ? <div key={i}
                                                                                          className="card__sm-img card__icon-wrap img-cover">
                                                                                    <img
                                                                                        src={el}
                                                                                        alt="card"/>
                                                                                    <span
                                                                                        className="card__icon fixed">
                                    <span className="small-icon img-wrap">
                                      <img src="https://static.biterika.team/brobooster/assets/images/icons/camera.svg"
                                           alt=""/>
                                    </span>
                                  </span>
                                                                                </div> : <div key={i}
                                                                                              className="card__sm-img img-cover">
                                                                                    <img
                                                                                        src={el}
                                                                                        alt="card"/>
                                                                                </div>

                                                                            )
                                                                        })
                                                                    }


                                                                </div>
                                                                <div className="card__audio flex-row mt-1">
                                <span className="small-icon img-wrap mr-05">
                                  <img src="https://static.biterika.team/brobooster/assets/images/icons/sound.svg"
                                       alt="sound"/>
                                </span>
                                                                    <span
                                                                        className="small-text">Аудио дорожка</span>
                                                                </div>
                                                            </div>

                                                            <div className="card__details-col fixed">
                                                                <div className="menu-wrap js-menu-wrap">
                                                                    <button type="button"
                                                                            className="btn-more second js-menu-btn">
                                                                        <svg className="icon icon-small">
                                                                            {/*<use xlink:href="#more-16"></use>*/}
                                                                        </svg>
                                                                    </button>
                                                                    <div
                                                                        className="menu menu--right js-menu-list">
                                                                        <div className="menu__wrap">
                                                                            <ul>
                                                                                <li><a
                                                                                    href="campaing-edit.html"
                                                                                    className="menu__btn">Изменить</a>
                                                                                </li>
                                                                                <li>
                                                                                    <button type="button"
                                                                                            className="menu__btn">Дублировать
                                                                                    </button>
                                                                                </li>
                                                                                <li><a href="support.html"
                                                                                       className="menu__btn">Перейти
                                                                                    в
                                                                                    поддержку</a></li>
                                                                                <li>
                                                                                    <button type="button"
                                                                                            className="menu__btn">Удалить
                                                                                    </button>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <a href="campaing-page.html"
                                                                   className="btn-more second ml-3 ml-lg-4">
                                                                    <svg className="icon icon-small">
                                                                        {/*<use xlink:href="#arrow-right-16"></use>*/}
                                                                    </svg>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilteredTab;
