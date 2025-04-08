// (Q1) 

// •Create a functional component called UserProfile that accepts props (name, email, and image URL) and renders the user’s information.
// •
// Create a parent component called UserList that renders multiple UserProfile components using an array of user data.
// •
// Use React’s render method to display the UserList component inside the root element.
// •
// Ensure proper component reusability and props usage.   CODE:

import React from "react";
import ReactDOM from "react-dom";
// UserProfile Component
const UserProfile = ({ name, email, imageUrl }) => {
return (
<div className="border p-4 rounded-lg shadow-md text-center">
<img
src={imageUrl}
alt={name}
className="w-24 h-24 rounded-full mx-auto mb-2"
/>
<h2 className="text-lg font-semibold">{name}</h2>
<p className="text-gray-600">{email}</p>
</div>
);
};
// UserList Component
const UserList = () => {
const users = [
{
name: "Alice Johnson",
email: "alice@example.com",
imageUrl: "https://via.placeholder.com/100",
},
{
name: "Bob Smith",
email: "bob@example.com",
imageUrl: "https://via.placeholder.com/100",
},
{
name: "Charlie Brown",
email: "charlie@example.com",
imageUrl: "https://via.placeholder.com/100",
},
];
return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
{users.map((user, index) => (
<UserProfile
key={index}
name={user.name}
email={user.email}
imageUrl={user.imageUrl}
/>
))}
</div>
);
};
// Rendering UserList inside the root element
ReactDOM.render(<UserList />, document.getElementById("root"));
