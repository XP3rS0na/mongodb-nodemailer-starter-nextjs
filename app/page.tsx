import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <ol>
        <li>
          <Link 
          href="../components/contact/">Contact (email)
          </Link>
        </li>
        <li>
          <Link 
          href="../components/mongodb/">MongoDB
          </Link>
        </li>
      </ol> 
    </main>
  )
}
