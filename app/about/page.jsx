export default function About() {
  return (
    <section className="about">
      <header className="head">
        <h1>About Us</h1>

        <p>
          This app helps users search and explore countries around the world.
          <br />
          It uses the REST Countries API to fetch real-time country data.
          <br />
          Users can view important information such as:
        </p>

        <ul>
          <li><strong>Flags</strong></li>
          <li><strong>Population</strong></li>
          <li><strong>Capital</strong></li>
          <li><strong>Region</strong></li>
        </ul>

        <h2>API Used</h2>
        <p>
          This project uses the REST Countries API:
        </p>

        <p>
          https://restcountries.com/
        </p>

        <h2>Next.js Topics Practiced</h2>

        <ul>
          <li>Components</li>
          <li>Props</li>
          <li>JSX</li>
          <li>Routing in Next.js</li>
          <li>Dynamic Rendering</li>
          <li>Fetch API</li>
          <li>Async/Await</li>
          <li>Conditional Rendering</li>
          <li>CSS Styling</li>
          <li>Mapping Data with Array.map()</li>
          <li>Reusable Components</li>
          <li>Project Structure in Next.js</li>
        </ul>
      </header>
    </section>
  )
}