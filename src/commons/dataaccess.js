/* eslint-disable no-multi-str */
mockData: [
  {
    contact_number: 2,
    date: '2021-08-28',
    channel: 'mail',
    contact_name: 'Kent Brockman',
    country: 'Argentina',
    city: 'Olivos',
    province: 'Buenos Aires',
    sport: 'hockey',
    phone: '1100000001',
    email: 'kent.brockman@email.fake',
    references: 'internet',
    comments:
      'Se comunica Kent solicitando un presupuesto \
      para el estadio de hockey de River',
    sales: 'Romina',
    client_feedback: 'sipodjaoe8rofih oaifj oiajdoij',
  },
  {
    contact_number: 1,
    date: '2021-08-28',
    channel: 'mail',
    contact_name: 'Ken Robinson',
    country: 'Argentina',
    city: 'CABA',
    province: 'CABA',
    sport: 'football',
    phone: '1100000000',
    email: 'sir.ken.robinson@email.fake',
    references: 'internet',
    comments:
      'Se comunica el Sir Robinson solicitando un \
      presupuesto para el estadio de River Plate',
    sales: 'Javier',
    client_feedback: 'asd asd asd asda',
  },
]
export const DataAccess = {
  getCountData: async () => {
    return Promise.resolve(mockData.length)
  },
  getData: async () => {
    return Promise.resolve(mockData)
  },
  filterData: async (filter) => {
    return Promise.resolve(mockData)
  },
}
