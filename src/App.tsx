import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Gap } from '@alfalab/core-components/gap';
import { List } from '@alfalab/core-components/list';
import { Select } from '@alfalab/core-components/select';
import { BaseSelectChangePayload } from '@alfalab/core-components/select/typings';
import { Typography } from '@alfalab/core-components/typography';
import { useCallback, useState } from 'react';
import img1 from './assets/p1.png';
import img2 from './assets/p2.png';
import img3 from './assets/p3.png';
import { appSt } from './style.css';
import { sendDataToGA } from './utils/events';

const OPTIONS = [
  { key: 'v1', content: 'Бесплатные онлайн-консультации семейного врача в течение всего срока программы.' },
  { key: 'v2', content: 'Оплата дорогостоящего лечения за счёт страховой, не затрагивая ваши накопления' },
];

export const App = () => {
  const [selectorValue, setSelectorValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState('');

  const submit = useCallback(() => {
    if (!selectorValue) {
      setError('Выберите вариант');
      return;
    }
    setLoading(true);
    sendDataToGA(selectorValue).then(() => {
      setLoading(false);

      (window.location as unknown as string) = 'alfabank://longread?endpoint=v1/adviser/longreads/16096';
    });
  }, [selectorValue]);

  const onSelectOption = useCallback((v: BaseSelectChangePayload) => {
    setError('');
    setSelectorValue(v.selected?.key ?? '');
  }, []);

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive tag="h1" view="large" font="system" weight="bold">
          Программа долгосрочных сбережений (ПДС)
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Накапливайте деньги с поддержкой государства
        </Typography.Text>
        <Typography.Text tag="p" view="primary-medium" weight="bold" defaultMargins={false}>
          Как это работает
        </Typography.Text>
        <List tag="ol" colorMarker="tertiary">
          <List.Item>Заключаете договор с Негосударственным Пенсионным Фондом (НПФ).</List.Item>
          <List.Item>Регулярно вносите деньги.</List.Item>
          <List.Item>Деньги инвестируются в надёжные инструменты.</List.Item>
          <List.Item>Государство добавляет к вашим средствам дополнительные выплаты и льготы.</List.Item>
        </List>

        <Typography.Text tag="p" view="primary-medium" weight="bold" defaultMargins={false}>
          Сколько можно вносить
        </Typography.Text>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Максимальная сумма взносов не ограничена. Минимальная сумма — 2000 ₽.
        </Typography.Text>
        <Typography.Text tag="p" view="primary-medium" weight="bold" defaultMargins={false}>
          На какой срок
        </Typography.Text>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Программа длится 15 лет или до достижения пенсионного возраста 60 лет у мужчин (55 лет у женщин), в зависимости от
          того, что наступит раньше.
        </Typography.Text>
        <Typography.Text tag="p" view="primary-medium" weight="bold" defaultMargins={false}>
          Какие преимущества
        </Typography.Text>

        <div className={appSt.grid}>
          <img width={80} height={80} src={img1} alt="Дополнительные выплаты от государства" />
          <div>
            <Typography.Text tag="p" view="primary-medium" weight="bold" defaultMargins={false}>
              Дополнительные выплаты от государства
            </Typography.Text>
            <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
              Софинансирование до 108 000 ₽ за первые 3 года и перевод замороженной накопительной пенсии на ваш счет ПДС.
            </Typography.Text>
          </div>
        </div>

        <div className={appSt.grid}>
          <img width={80} height={80} src={img2} alt="Дополнительные выплаты от государства" />
          <div>
            <Typography.Text tag="p" view="primary-medium" weight="bold" defaultMargins={false}>
              Льготы
            </Typography.Text>
            <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
              Возврат НДФЛ до 52 000 ₽ в год и освобождение от НДФЛ с инвестиционного дохода до 30 миллионов ₽.
            </Typography.Text>
          </div>
        </div>

        <div className={appSt.grid}>
          <img width={80} height={80} src={img3} alt="Дополнительные выплаты от государства" />
          <div>
            <Typography.Text tag="p" view="primary-medium" weight="bold" defaultMargins={false}>
              Защита накоплений
            </Typography.Text>
            <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
              Ваши средства застрахованы до 2,8 миллиона ₽. Доход от инвестиций рассчитывается ежегодно и не может быть
              отрицательным за каждый пятилетний период. Накопленные деньги можно использовать досрочно в сложных жизненных
              ситуациях, например, при потере кормильца или дорогостоящем лечении.
            </Typography.Text>
          </div>
        </div>

        <Typography.Text tag="p" view="primary-medium" weight="bold" defaultMargins={false}>
          Какой доход можно получить
        </Typography.Text>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Доходность может составлять от 26% до 41% годовых, зависит от суммы взносов и ежемесячного дохода. Помимо основных
          финансовых преимуществ вы можете выбрать один из дополнительных бонусов:
        </Typography.Text>

        <Select options={OPTIONS} placeholder="Выберите вариант" block selected={selectorValue} onChange={onSelectOption} />
      </div>
      <Gap size={96} />
      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} onClick={submit} block={true} view="primary" hint={err}>
          Перейти к оформлению
        </ButtonMobile>
      </div>
    </>
  );
};
