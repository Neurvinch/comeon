import {useState} from 'react'

const PhraseBox = () => {

    const [isPhraseHidden, setIsPhraseHidden] = useState(false);
    const [copied, setCopied] = useState(false)

    const handlecopy  =  () => {
        setCopied(true)
        navigator.clipboard.writeText()
        setTimeout(() => setCopied(false) , 2000);
            
       
    }
  return (
    <p>
        <span className= { ` ${ isPhraseAHidden? 'hidden' : 'phrase'}`}>
            <strong> SeedPhrase:</strong>
          <span  className='hidephrase'  onClick={() => {
            SetIsPhraseHidden(true)
          }}> HIDE</span>
          <span className='copy-phrase'  onClick={() => {
           handlecopy(seedphrase) 
          }}> {copied? 'copied': 'copy'}</span>



        </span>
      
    </p>
  )
}

export default PhraseBox
