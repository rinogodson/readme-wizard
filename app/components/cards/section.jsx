import React from 'react'
import { Input } from '@chakra-ui/react'
import { Field } from '../../../components/ui/field'

function SectionMenu({setModalData, modalData}) {
  const [sectionData, setSectionData] = React.useState({heading: "", body: ""})
  React.useEffect(()=>{
    setModalData(`\n# ${sectionData.heading}\n${sectionData.body}\n`)
  }, [sectionData])
  return (
    <div className='cardStack'>
          <Field className="cardField" label="Heading" required helperText="Give the Heading of the section">
            <Input value={sectionData.heading} onChange={(e)=>setSectionData({...sectionData, heading: e.target.value})} className='cardInput' placeholder='README Wizard'/>
          </Field>
    
          <Field className="cardField" label="Content" helperText="The body of the section">
            <textarea value={sectionData.body} onChange={(e)=>setSectionData({...sectionData, body: e.target.value})} style={{height:"100px"}} className='cardInput' placeholder='README Wizard is a cool and amazing project!'/>
          </Field>
        </div>
  )
}

export default SectionMenu
