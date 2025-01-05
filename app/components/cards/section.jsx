import React from 'react'
import { Input } from '@chakra-ui/react'
import { Field } from '../../../components/ui/field'

function SectionMenu() {
  return (
    <div className='cardStack'>
          <Field className="cardField" label="Heading" required helperText="Give the Heading of the section">
            <Input className='cardInput' placeholder='README Wizard'/>
          </Field>
    
          <Field className="cardField" label="Content" helperText="The body of the section">
            <textarea style={{height:"100px"}} className='cardInput' placeholder='README Wizard is a cool and amazing project!'/>
          </Field>
        </div>
  )
}

export default SectionMenu
