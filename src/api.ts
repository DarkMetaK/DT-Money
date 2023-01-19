interface ITransactions {
  id: number
  description: string
  type: string
  category: string
  price: number
  createdAt: string
}

const transactions = [
  {
    id: 1,
    description: 'Desenvolvimento de site',
    type: 'income',
    category: 'Venda',
    price: 8000,
    createdAt: '2023-01-07T20:51:21.578Z',
  },
  {
    id: 2,
    description: 'Computador',
    type: 'income',
    category: 'Venda',
    price: 5400,
    createdAt: '2023-01-08T18:51:21.578Z',
  },
  {
    id: 3,
    description: 'Aluguel do apartamento',
    type: 'outcome',
    category: 'Casa',
    price: 1200,
    createdAt: '2023-01-10T10:51:21.578Z',
  },
  {
    id: 4,
    description: 'Hamburguer',
    type: 'outcome',
    category: 'Alimentação',
    price: 59,
    createdAt: '2023-01-14T14:51:21.578Z',
  },
  {
    id: 5,
    description: 'Desenvolvimento de site',
    type: 'income',
    category: 'Venda',
    price: 12000,
    createdAt: '2023-01-15T20:51:21.578Z',
  },
]

export async function apiGetTransactions(
  query?: string,
): Promise<ITransactions[]> {
  if (query) {
    const newArray = transactions.filter(
      (item) =>
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()),
    )

    return await new Promise((resolve) => {
      setTimeout(() => {
        return resolve(newArray.sort((a, b) => b.id - a.id))
      }, 1000)
    })
  }

  return await new Promise((resolve) => {
    setTimeout(() => {
      return resolve(transactions.sort((a, b) => b.id - a.id))
    }, 1000)
  })
}

export async function apiSetNewTransaction(
  data: ITransactions,
): Promise<ITransactions> {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
  transactions.push(data)
  return data
}
