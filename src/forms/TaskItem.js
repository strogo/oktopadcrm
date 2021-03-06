import { Elements } from 'katejs/lib/client';
import moment from 'moment';

export default Form => class TaskItem extends Form {
  constructor(args) {
    super(args);

    const topRow = {
      type: Elements.GRID,
      elements: [
        {
          ...this.elements.cut('title'),
          cols: 7,
        },
        {
          ...this.elements.cut('date'),
          title: 'On date',
          cols: 3,
        },
        {
          ...this.elements.cut('done'),
          cols: 2,
        },
      ],
    };
    this.elements.unshift(topRow);
    this.actions.find(item => item.id === '__Close').onClick = () => this.close();
    this.actions.find(item => item.id === '__OK').onClick = () => this.ok();

    this.elements.cut('contact'); // temp remove contact
  }
  afterInit() {
    if (super.afterInit) {
      super.afterInit();
    }
    if (!this.uuid) {
      this.content.deal.value = this.app.vars.currentDeal;
      this.content.user.value = this.app.user;
      this.content.date.value = moment();
      this.content.client.value = this.app.vars.currentClient;
    }
  }
  close() {
    window.history.back();
  }
  async ok() {
    await this.save();
    this.close();
  }
}
