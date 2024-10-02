
import ActionAreaCard  from '../Homepage/ActionAreaCard/ActionAreaCard'; // Import the Card component
import { ListWithIcon } from '../Homepage/ListWithIcon/ListWithIcon';

export default function BlogsView() {
  return (
    <>
    <div className='flex flex-col xl:flex-row justify-center items-start my-5 gap-6 mx-auto'>
        <div>
            <h2 className='text-left my-3 text-xl font-bold border-b-2 border-b-pink-400 w-52 hover:w-72 transition-all mb-5'>News</h2>
        <div className='flex-wrap flex mx-auto gap-6 justify-center xl:flex-nowrap'>
            <ActionAreaCard />
            <ActionAreaCard />
            <ActionAreaCard />
        </div>
        </div>
        <div className='flex flex-col mx-auto w-[90%] xl:w-1/2'>
        <h2 className='text-left my-3 text-xl font-bold border-b-2 border-b-pink-400 mb-6 pb-1'>Notice</h2>
        <ListWithIcon />
        </div>
    </div>
    </>
  )
}