# ConnectionDetails Component

The ConnectionDetails component is used to display detailed information about a selected connection. It uses a mock API to simulate the data that would be retrieved from a real-world scenario. The component also includes a search feature that allows the user to filter the displayed connections by name or username.

# The component uses the following hooks:

- useState to manage the state of the connection data and the search query
- useEffect to fetch the data when the component is initially rendered and to update the data

when the search query changes

- useDebounce custom hook to debounce the search query
