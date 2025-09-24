const getItem = ()=>{
  const cartItem = localStorage.getItem("cart");

  if (cartItem) {
    const itemsParse = JSON.parse(cartItem)
    return itemsParse;
  }else{
    localStorage.setItem("cart",JSON.stringify([]))
    return []
  }
}

const setItem = items => {
  const itemsString = JSON.stringify(items)
  localStorage.setItem("cart",itemsString)
}

const getBalance = ()=>{
  const balance = localStorage.getItem("balance");
  return  balance?JSON.parse(balance):localStorage.setItem("balance",60000000)
}

const setBalanceLocal = balance=>{
  const balanceStr = JSON.stringify(balance)
  localStorage.setItem("balance",balanceStr)
}

export {getItem,setItem,getBalance,setBalanceLocal}