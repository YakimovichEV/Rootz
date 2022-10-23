import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

import { Button } from ".";

export const Search: React.FC = () => {
    return (
        <div className="search centered">
            <FaMapMarkerAlt
                color="#666666"
                width={14}
                height={20}
                className="search__icon"
            />
            <input
                name="search"
                placeholder="Find the place to help"
                className="search__input"
            />
            <Button
                type="button"
                buttonSize="button-sm"
                buttonStyle="button"
                className="search__button"
            >
                search
            </Button>
        </div>
    );
};
