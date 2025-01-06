import React from 'react'
import { Field } from '../../../components/ui/field'

function QuoteMenu({setModalData, modalData}) {
  const [quoteData, setQuoteData] = React.useState({body:""});
    React.useEffect(()=>{
        setModalData(`\n> ${quoteData.body}\n`)
      }, [quoteData])
  return (
    <div className="cardStack">
          <Field
            className="cardField"
            label="Quote"
            helperText="Type you Quote here."
          >
            <textarea
            value={quoteData.body}
            onChange={(e)=>setQuoteData({...quoteData, body:e.target.value})}
              style={{ height: "100px"}}
              className="cardInput"
              placeholder={"Do Good, Be Good."}
            />
          </Field>
        </div>
  )
}

export default QuoteMenu
