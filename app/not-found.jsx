import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center min-h-[100vh] items-center px-4 text-center'>
      <h2 className='text-6xl font-bold gradient-title mb-4'>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}