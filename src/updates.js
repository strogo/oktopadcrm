export default [
  {
    date: '2019-03-20',
    entity: 'System',
    description: 'Автонумерация документов: при создании нового документа оставьте номер пустым - при сохранении номер будет присвоен автоматически',
  },
  {
    date: '2019-03-24',
    entity: 'Cashbox',
    description: '"Касса/счет" - справочник мест хранений денежных средств. Используется в документах связанных с денежными средствами.',
  },
  {
    date: '2019-03-24',
    entity: 'Payment',
    description: '"Оплата" - документ для отражения оплат от клиентов. В одном документе можно отразить несколько оплат от разных клиентов. Также в документе можно указать счет/кассу куда поступают денежные средства',
  },
  {
    date: '2019-03-24',
    entity: 'Order',
    description: 'Отчет - "Заказы к доставке": формируется за определенный день. Выводит список заказов на день и колонку "Оплатить" в которой выводится сумма к оплате с учетом самого заказа.',
  },
  {
    date: '2019-03-26',
    entity: 'Payment',
    description: 'Сумма "Итого" рассчитывается по сумме платежей от клиентов.',
  },
  {
    date: '2019-03-26',
    entity: 'Order',
    description: 'Сумма в таблице расчитывается как кол-во * цена, при изменении количества или цены. Суммы "Итого" рассчитывается по сумме всех строк',
  },
  {
    date: '2019-03-26',
    entity: 'Expense',
    description: 'Документ "Расход" предназначен для отражения расхода денежных средств',
  },
  {
    date: '2019-03-29',
    entity: 'Order',
    description: 'В документе можно отразить оплату от клиента. Оплата может быть любой суммой - она будет учитываться при расчетах. В документе после выбора клиента можно открыть сверку расчетов.',
  },
  {
    date: '2019-03-29',
    entity: 'Cashbox',
    description: 'Отчет "Движение денег" - формируется за период и отражает остатки на начало, движения и остатки на конец в разрезе счетов/касс',
  },
  {
    date: '2019-03-29',
    entity: 'System',
    description: 'В полях выбора даты можно указать дату вручную в формате ДД.ММ.ГГГГ',
  },
  {
    date: '2019-04-05',
    entity: 'Agent app',
    description: `Свободные заказы - отображаются заказы на выбранную дату не присвоенные ни одному агенту со статуслм "Новый". Их можно взять себе нажав на заказ и кнопку "Принять заказ".
    Принятые к исполнению заказы отобажаются на странице "Мои заказы". При выполнении заказа следует указать сумму полученных денег. Если по данному заказу уже был платеж, поле с указанием суммы будет недоступно`,
  },
  {
    date: '2019-04-05',
    entity: 'Order',
    description: 'Флаг "Оплата агенту" означает что деньги не приходуются в кассу, а числятся за агентом. Оприходовать их в кассу можно в документе "Оплата" заполнив по агенту',
  },
  {
    date: '2019-04-05',
    entity: 'Payment',
    description: `Таблицу платежей можно заполнить плажами, полученными курьером в течении дня.
По кнопке "Заполнить по агенту" можно выбрать агента и нажать "Применить": таблица будет заполнена платежами полученными агентом за день даты документа.`,
  },
  {
    date: '2019-04-14',
    entity: 'Order',
    description: 'Добавлен функционал печати товарного чека',
  },
  {
    date: '2019-04-21',
    entity: 'Cashbox',
    description: 'Добавлен флаг "Доступен агенту" - счета, отмеченные этим флагом, могут быть выбраны агентом при указании оплаты от клиента',
  },
  {
    date: '2019-04-21',
    entity: 'Payment',
    description: 'При заполнении документа по агенту можно выбрать "Счет", который указал агент при указании способа оплаты. При заполнении поступления наличных это поле следует оставить пустым.',
  },
  {
    date: '2019-04-22',
    entity: 'Order',
    description: 'Отчет "Динамика заказов" позволяет увидеть количество и сумму заказов за период по дням',
  },
  {
    date: '2019-06-10',
    entity: 'System',
    description: 'Элементы меню сгруппированы по типам',
  },
  {
    date: '2019-08-30',
    entity: 'Receipt',
    description: 'Реализован учет остаток товаров. Добавлен документ Поступление и отчет Движение товаров',
  },
  {
    date: '2020-03-30',
    entity: 'System',
    description: 'Реализована возможность печати документов и отчетов через стандартный диалог печати (Ctrl+P).',
  },
  {
    date: '2020-04-19',
    entity: 'Product',
    description: 'На странице товара, при учете его остатков, отображается Карточка - отчет по всем движениям товара',
  },
  {
    date: '2020-04-19',
    entity: 'System',
    description: 'Отчет Взаиморасчеты показывает состяние расчетов по всем контрагентам',
  },
];
