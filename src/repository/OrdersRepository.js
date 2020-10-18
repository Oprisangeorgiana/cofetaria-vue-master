import BaseRepository from './BaseRepository'

class OrdersRepository extends BaseRepository {

  constructor() {
    super('orders')
  }

  async getFinishedOrders() {
    let orders = await this.getAll()
    let response = []
    for (let order in orders) {
      if (order.finished)
        response.push(order)
    }
    return response
  }

  async getUnFinishedOrders() {
    let orders = await this.getAll()
    let response = []
    for (let order in orders) {
      if (!order.finished)
        response.push(order)
    }
    return response
  }
}

export default OrdersRepository
