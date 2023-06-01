import styled from "styled-components";
import { motion } from "framer-motion";
import { RiSortAsc } from "react-icons/all";

const SortDropdown = ({ handleSortChange }) => {
  return (
    <Dropdown className="dropdown dropdown-end">
      <label tabIndex={0} className="btn m-1">
        Sort
        <RiSortAsc size={18} className="ml-1" />
      </label>
      <DropdownContent
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <button onClick={() => handleSortChange({ value: "name-asc", label: "Name A-Z" })}>
            Name A-Z
          </button>
        </li>
        <li>
          <button onClick={() => handleSortChange({ value: "name-desc", label: "Name Z-A" })}>
            Name Z-A
          </button>
        </li>
      </DropdownContent>
    </Dropdown>
  );
};

const Dropdown = styled(motion.div)`
  display: flex;
  justify-content: end;
  align-items: center;
  color: white;
  position: relative;
`;

const DropdownContent = styled(motion.ul)`
  position: absolute;
  top: 100%;
`;
export default SortDropdown;
