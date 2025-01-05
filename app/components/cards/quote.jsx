import React from 'react'
import { Input } from '@chakra-ui/react'
import { Field } from '../../../components/ui/field'

function QuoteMenu() {
  return (
    <div className="cardStack">
          <Field
            className="cardField"
            label="Quote"
            helperText="Type you Quote here."
          >
            <textarea
              style={{ height: "100px"}}
              className="cardInput"
              placeholder={"Do Good, Be Good."}
            />
          </Field>
        </div>
  )
}

export default QuoteMenu
