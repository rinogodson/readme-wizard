import React from 'react'
import { Input } from '@chakra-ui/react'
import { Field } from '../../../components/ui/field'

function LinkMenu({setModalData, modalData}) {
  const [linkData, setLinkData] = React.useState({link: "", title: ""})
  function formatLink(url) {
    // Check if the URL already contains a protocol (http or https)
    if (!/^https?:\/\//i.test(url)) {
        // If no protocol, add 'https://www.' before the domain
        url = 'https://www.' + url;
    }
    return url;
}
  React.useEffect(()=>{
      setModalData(`\n[${linkData.title}](${formatLink(linkData.link)})\n`)
    })
  return (
    <div>
      <div className='cardStack'>
            <Field className="cardField" label="Link Text" required helperText="The text that is showed in the file.">
              <Input value={linkData.title} onChange={(e)=>setLinkData({...linkData, title: e.target.value})} className='cardInput' placeholder='Visit Google'/>
            </Field>
      
            <Field className="cardField" label="Link" required helperText="The link to be redirected to.">
              <Input value={linkData.link} onChange={(e)=>setLinkData({...linkData, link: e.target.value})} className='cardInput' placeholder='https://google.com'/>
            </Field>
          </div>
    </div>
  )
}

export default LinkMenu
