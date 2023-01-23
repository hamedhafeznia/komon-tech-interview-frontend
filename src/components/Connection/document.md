# Connection Component

The Connection component is a functional component that allows a user to interact with a single connection. It accepts an object of type IConnection and two functions, onEdit and onDelete, as props. The component uses the useState hook to manage its internal state, including whether or not the connection is being edited and whether or not the connection details are visible.

# Props

- connection
  An object of type IConnection that represents a single connection. The component will use the properties of this object to display the connection's name, username, and platform.

- onEdit
  A function that accepts an object of type IConnection as its argument. This function will be called when the user clicks the "Edit" button, allowing them to make changes to the connection.

- onDelete
  A function that accepts a string as its argument. This function will be called when the user clicks the "Delete" button, allowing them to remove the connection from the list.

# State

- isEditing
  A boolean value that determines whether or not the connection is in editing mode. If true, the component will display an input form that allows the user to make changes to the connection's name, username, and platform.

- showConnectionDetail
  A boolean value that determines whether or not the connection details are visible. If true, the component will render the ConnectionDetails component, allowing the user to view more information about the connection.

- name
  A string that represents the name of the connection. This value is used as the value of the input element when the user is editing the connection's name.

- username
  A string that represents the username of the connection. This value is used as the value of the input element when the user is editing the connection's username.

- platform
  A string that represents the platform of the connection. This value is used as the value of the input element when the user is editing the connection's platform.
