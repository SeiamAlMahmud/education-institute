
import ActionAreaCard  from '../Homepage/ActionAreaCard/ActionAreaCard'; // Import the Card component

export default function BlogsView() {
  return (
    <>
    <div className='flex flex-col md:flex-row justify-center items-center my-5 gap-6 mx-auto'>
        <div>
            <h2 className='text-left my-3 text-xl'>News</h2>
        <div className='flex-wrap flex mx-auto gap-6 justify-center md:flex-nowrap'>
            <ActionAreaCard />
            <ActionAreaCard />
            <ActionAreaCard />
        </div>
        </div>
        <div>
        <h2 className='text-left my-3 text-xl'>Event</h2>
        </div>
    </div>
    </>
  )
}