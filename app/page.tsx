import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <ol>
        <li>
          <Link 
          href="../contact/">Contact (email)
          </Link>
        </li>
        <li>
          <Link 
          href="../mongodb/">MongoDB
          </Link>
        </li>
      </ol> 
    </main>
  )
}
