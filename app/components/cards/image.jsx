import React from 'react'
import "./cards.css"
import { Input } from '@chakra-ui/react'
import { Field } from '../../../components/ui/field'
function ImageMenu({setModalData, modalData}) {
  const [imageData, setImageData] = React.useState({link: "", title: ""})

  React.useEffect(()=>{
    setModalData(`\n![${imageData.title}](${imageData.link})\n`)
  })
  return (
    <div className='cardStack'>
      <Field className="cardField" label="Image Link" required helperText="Paste a valid image url.">
        <Input value={imageData.link} onChange={(e)=>setImageData({...imageData, link: e.target.value})} className='cardInput' placeholder='https://site/image.png'/>
      </Field>

      <Field className="cardField" label="Title" helperText="Enter the title of the image">
        <Input value={imageData.title} onChange={(e)=>setImageData({...imageData, title: e.target.value})} className='cardInput' placeholder='Just a cool Image!'/>
      </Field>
    </div>
  )
}

export default ImageMenu
