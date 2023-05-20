import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// idea: messenger chat

export default function Home() {
  return (
    <main>

      {/* first part: with whom are we chatting */}
      <header className='flex gap-4 py-2 px-4 items-center border-b border-gray-100'>    {/* class from tailwind */} 
        <div className='border rounded-full w-8 h-8 flex items-center justify-center font-semibold tracking-widest p-5'>
          PP
        </div>
        <h3 className='font-bold'>Pera Peric</h3>
        <div className='ml-auto flex gap-4 bg-gray-200 py-1 px-2 rounded-2xl'>
          <svg className='h-7 w-7 fill-blue-600 rounded-full bg-white p-1' viewBox="0 0 20 20">
						<path d="M5.114,5.726c0.169,0.168,0.442,0.168,0.611,0c0.168-0.169,0.168-0.442,0-0.61L3.893,3.282c-0.168-0.168-0.442-0.168-0.61,0c-0.169,0.169-0.169,0.442,0,0.611L5.114,5.726z M3.955,10c0-0.239-0.193-0.432-0.432-0.432H0.932C0.693,9.568,0.5,9.761,0.5,10s0.193,0.432,0.432,0.432h2.591C3.761,10.432,3.955,10.239,3.955,10 M10,3.955c0.238,0,0.432-0.193,0.432-0.432v-2.59C10.432,0.693,10.238,0.5,10,0.5S9.568,0.693,9.568,0.932v2.59C9.568,3.762,9.762,3.955,10,3.955 M14.886,5.726l1.832-1.833c0.169-0.168,0.169-0.442,0-0.611c-0.169-0.168-0.442-0.168-0.61,0l-1.833,1.833c-0.169,0.168-0.169,0.441,0,0.61C14.443,5.894,14.717,5.894,14.886,5.726 M5.114,14.274l-1.832,1.833c-0.169,0.168-0.169,0.441,0,0.61c0.168,0.169,0.442,0.169,0.61,0l1.833-1.832c0.168-0.169,0.168-0.442,0-0.611C5.557,14.106,5.283,14.106,5.114,14.274 M19.068,9.568h-2.591c-0.238,0-0.433,0.193-0.433,0.432s0.194,0.432,0.433,0.432h2.591c0.238,0,0.432-0.193,0.432-0.432S19.307,9.568,19.068,9.568 M14.886,14.274c-0.169-0.168-0.442-0.168-0.611,0c-0.169,0.169-0.169,0.442,0,0.611l1.833,1.832c0.168,0.169,0.441,0.169,0.61,0s0.169-0.442,0-0.61L14.886,14.274z M10,4.818c-2.861,0-5.182,2.32-5.182,5.182c0,2.862,2.321,5.182,5.182,5.182s5.182-2.319,5.182-5.182C15.182,7.139,12.861,4.818,10,4.818M10,14.318c-2.385,0-4.318-1.934-4.318-4.318c0-2.385,1.933-4.318,4.318-4.318c2.386,0,4.318,1.933,4.318,4.318C14.318,12.385,12.386,14.318,10,14.318 M10,16.045c-0.238,0-0.432,0.193-0.432,0.433v2.591c0,0.238,0.194,0.432,0.432,0.432s0.432-0.193,0.432-0.432v-2.591C10.432,16.238,10.238,16.045,10,16.045"></path>
					</svg>
          <svg className='h-7 w-7 fill-white rounded-full bg-black p-1' viewBox="0 0 20 20">
						<path d="M10.544,8.717l1.166-0.855l1.166,0.855l-0.467-1.399l1.012-0.778h-1.244L11.71,5.297l-0.466,1.244H10l1.011,0.778L10.544,8.717z M15.986,9.572l-0.467,1.244h-1.244l1.011,0.777l-0.467,1.4l1.167-0.855l1.165,0.855l-0.466-1.4l1.011-0.777h-1.244L15.986,9.572z M7.007,6.552c0-2.259,0.795-4.33,2.117-5.955C4.34,1.042,0.594,5.07,0.594,9.98c0,5.207,4.211,9.426,9.406,9.426c2.94,0,5.972-1.354,7.696-3.472c-0.289,0.026-0.987,0.044-1.283,0.044C11.219,15.979,7.007,11.759,7.007,6.552 M10,18.55c-4.715,0-8.551-3.845-8.551-8.57c0-3.783,2.407-6.999,5.842-8.131C6.549,3.295,6.152,4.911,6.152,6.552c0,5.368,4.125,9.788,9.365,10.245C13.972,17.893,11.973,18.55,10,18.55 M19.406,2.304h-1.71l-0.642-1.71l-0.642,1.71h-1.71l1.39,1.069l-0.642,1.924l1.604-1.176l1.604,1.176l-0.642-1.924L19.406,2.304z"></path>
					</svg>
        </div>
      </header>

      {/* chat history */}
      <section className='flex flex-col items-center py-2 px-4 messages overflow-auto'>
        <span className='text-gray-500 upp text-sm mb-2'>11:23 am</span>
        
        <p className='self-end bg-blue-600 text-white py-1 px-2 rounded-2xl mb-4'>My message</p>    {/* self for individual item*/}

        <div className='flex self-start gap-2 mb-1'>
          {/* <div className='border rounded-full w-6 h-6 flex items-center justify-center font-semibold tracking-widest p-5'>
            PP
          </div> */}
          <p className='self-center bg-gray-200 py-1 px-2 rounded-2xl font-semibold'>Zikina poruka</p>
        </div>

        {/* TODO making texts from same sender look closer (not rounding the edges that are between) */}

        <div className='flex self-start gap-2 mb-1'>
          {/* <div className='border rounded-full w-6 h-6 flex items-center justify-center font-semibold tracking-widest p-5'>
            PP
          </div> */}
          <p className='self-center bg-gray-200 py-1 px-2 rounded-2xl font-semibold'>Zikina poruka</p>
        </div>

        <div className='flex self-start gap-2 mb-1'>
          <div className='border rounded-full w-6 h-6 flex items-center justify-center font-semibold tracking-widest p-5 self-end'>
            PP
          </div>
          <p className='self-center bg-gray-200 py-1 px-2 rounded-2xl font-semibold mb-4 sm:max-w-sm md:max-:w-md'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maxime possimus quaerat eligendi distinctio magni incidunt assumenda. Numquam accusamus nisi itaque aut architecto culpa, animi ipsam expedita. Dolorum, soluta error.
          </p>
        </div>
          
        <div className='flex self-start gap-2 mb-1'>
          <div className='border rounded-full w-6 h-6 flex items-center justify-center font-semibold tracking-widest p-5 self-end'>
            PP
          </div>
          <p className='self-center bg-gray-200 py-1 px-2 rounded-2xl font-semibold mb-4 sm:max-w-sm md:max-:w-md'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maxime possimus quaerat eligendi distinctio magni incidunt assumenda. Numquam accusamus nisi itaque aut architecto culpa, animi ipsam expedita. Dolorum, soluta error.
          </p>
        </div>

        <div className='flex self-start gap-2 mb-1'>
          <div className='border rounded-full w-6 h-6 flex items-center justify-center font-semibold tracking-widest p-5 self-end'>
            PP
          </div>
          <p className='self-center bg-gray-200 py-1 px-2 rounded-2xl font-semibold mb-4 sm:max-w-sm md:max-:w-md'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maxime possimus quaerat eligendi distinctio magni incidunt assumenda. Numquam accusamus nisi itaque aut architecto culpa, animi ipsam expedita. Dolorum, soluta error.
          </p>
        </div>

        <p className='self-end bg-blue-600 text-white py-1 px-2 rounded-2xl mb-4'>Cao Ziko</p>    {/* self for individual item*/}

      </section>

      <footer className='border-t py-2 px-4 relative'>
        <input type="text" placeholder='Aa' className='bg-gray-200 rounded-2xl px-1 py-2 w-full'/>
        <svg  viewBox="0 0 20 20"
          className='h-7 w-7 fill-blue-600 rounded-full bg-white p-1 send-icon'> {/* top-3.5 right-5 */}
						<path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
			  </svg>
      </footer>
      

    </main>
  )
}
