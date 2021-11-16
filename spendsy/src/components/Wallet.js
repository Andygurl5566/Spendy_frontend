import {useEffect, useState} from 'react'

function Wallet({wallets:{bills, cost, category}}) {

  

  return (
    <div>
      <table>
        <tr>
          <th>Bill</th>
          <th>Cost</th>
          <th>Category</th>
        </tr>

      </table>
    </div>
  )
}

export default Wallet