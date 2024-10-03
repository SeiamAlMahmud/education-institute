import React from 'react'
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card className='shadow-md  rounded-md'>
    <Image src='https://www.ox.ac.uk/sites/files/oxford/styles/ow_listing/s3/field/field_image_main/Full%20Uehiro%20team.%20Photo%20credit%20Rocci%20Wilkinson.jpeg?itok=P3zM8cyz' wrapped ui={false} />
    <CardContent className='p-4'>
      <CardHeader className='text-2xl'>Matthew</CardHeader>
      <CardMeta className='border-b-2 border-b-teal-200 py-2'>
        <span className='date text-[#ccc] text-lg py-2'>Joined in 2015</span>
      </CardMeta>
      <CardDescription className='py-3'>
        Matthew is a musician living in Nashville. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis in maxime aspernatur ipsum. Deserunt modi exercitationem at, pariatur eveniet nulla?
      </CardDescription>
    </CardContent>
  </Card>
)

export default CardExampleCard
