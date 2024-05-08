import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/MoreDropdown.module.css";
import { useHistory } from "react-router";

/* This component acts as a custom Dropdown Toggle using a font-awesome ellipsis icon.*/
/* It utilizes forwardRef to pass refs from parent to child components, which is needed for positioning.*/
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault(); 
      onClick(e); 
    }}
  />
));

/* MoreDropdown component provides options to edit or delete using Dropdown from react-bootstrap.*/
export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fas fa-edit" /> {/* Edit icon */}
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fas fa-trash-alt" /> {/* Delete icon */}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

/* ProfileEditDropdown component provides options to edit user profile details.*/
export const ProfileEditDropdown = ({ id }) => {
  const history = useHistory(); 

  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)} 
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> edit profile {/* Profile edit icon and text */}
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)} 
          aria-label="edit-username"
        >
          <i className="far fa-id-card" />
          change username {/* Username edit icon and text */}
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)} 
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          change password {/* Password edit icon and text */}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};