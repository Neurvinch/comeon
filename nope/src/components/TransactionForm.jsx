import {useState} from 'react'

  // use params to include selected wallet etc.
const TransactionForm = () => { 
  

    const[recipient,Setrecipient] = useState('')
    const[amount,Setamount ] = useState('')
    const[error,Seterror] = useState('')
    const[IsSending,SetIsSending] = useState(false);


    const SendTransaction = async ( recipient) => {
        if(SelctedWAllet && WalletBalance > 0 && amount && recipient){
            SetIsSending(true)
            const provider = new ethers.JsonRpcProvider() // import RPC 
                  
              // creating wallet y using private key
               const Wallet =new ethers.Wallet(SelctedWAllet.privateKey,provider);
        const transaction =
        {
            to: recipient,
            value : ethers.parseUnits( amount,'ether')
        }

        try{
             const txResponse = await Wallet.SendTransaction(transaction);
             Toast.sucess(`Transaction is succesful! ${txResponse.hash}`)
                SetIsSending(false)
                console.log ('Transaction is succesful:',txResponse)
             

        }catch (error){
            console.error('Transaction failed',error);

        }

 }
 else{ 
    if(recipient == '' || amount == ''){
        Seterror('please enter the details!')
      } else if(WalletBalance< 1){
        Seterror('Not enough ETH , Get some Eth!')
      } else{
        Seterror('please select a Wallet!')
      }
      SetIsSending(false)
      setTimeout(() => { Seterror('')
        
      }, 3000)

 };


       
    }






  return (
    <div>
      
    </div>
  )
}

export default TransactionForm
