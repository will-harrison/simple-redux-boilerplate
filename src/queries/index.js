const r = require('rethinkdbdash')({ servers: [{ host: '107.170.201.130', port: '28015', db: 'metacog' }]})

function shuffleSkus(count) {
  const skus = r
    .table('item')
    .sample(100)
    ('sku')
    .run()
    .then(results => {
      return results
    }
    )
}


const queries = shuffleSkus