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
  
  if(balance){
    return balance;
  }else{
    setBalanceLocal(60000000)
    return 60000000;
  }
}

const setBalanceLocal = balance=>{
  localStorage.setItem("balance",balance)
}

export {getItem,setItem,getBalance,setBalanceLocal}