import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <h1>White Swan Data Technical Assessment</h1>

      <p>Objective</p>
      <p>Requirements</p>
      <ul>
        <li>
          Implement user authentication and authorization features to restrict
          access to odds Information.
        </li>
        <li>
          Display a list of all available fixtures in a user-friendly format.
        </li>
        <li>
          When a user clicks on a fixture, navigate them to a detail screen that
          displays the odds for available bookmakers, defaulting to the most
          recent odds for each bookmaker.
        </li>
        <li>Allow the user to view the odds for different markets.</li>
        <li>
          Allow the user filter the view to see what the odds were for each
          bookmaker at a particular point in time. E.g. what were the odds at
          3pm yesterday, etc.
        </li>
        <li>If no odds exist for a bookmaker, do not display the bookmaker.</li>
        <li>
          So the user knows how fresh the odds are, allow the user to see
          timestamp for each of the odds displayed without crowding the view.
        </li>
        <li>Implement proper error handling.</li>
        <li>
          Design and style the app to provide a visually appealing and intuitive
          user interface.
        </li>
      </ul>
      <p>Bonus</p>
      <ul>
        <li>Implement server-side rendering (SSR) or static site generation (SSG) for improved performance.</li>
        <li>Create a search functionality that allows users to search for events.</li>
        <li>Implement unit tests and/or integration tests for critical components.</li>
        <li>Implement pagination or inifinite scrolling for the fixtures and odds.</li>
        <li>Add charts to show the change of odds over time.</li>
      </ul>
    </Layout>
  );
}
