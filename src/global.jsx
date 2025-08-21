import { Head } from "minista"


export default (props) => {
  const { chlidren } = props

  const navItems = [
    {href: '/', label: 'Home' },
    {href: '/about', label: 'About' },
    {href: '/news', label: 'News' },
  ]

  return (
    <>
      <Head>
        <title
          htmlAttributes={{ lang: 'en' }}
        > Minista App | Home</title>
      </Head>

    <header>
        <nav>
          <ul>
            {navItems.map(({href, label}, index) => (
                <li key={index}>
                  <a href={href}> {label} </a>
                </li>
            ))}
        </ul>
      </nav>
    </header>

    <main>{chlidren}</main>
    <footer>Footer</footer>
    </>
  )
}
