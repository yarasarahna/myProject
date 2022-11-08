import React from "react";
import './link-area.css';
import Input from "../input/input.component";

const LinkArea = () => {

    return (
        <div>
            <form className="container ">
                <Input
                    name="link"
                    label="please enter a valid url "

                ></Input>
                <button type="submit">Search</button>

            </form>
        </div>
    )
};
export default LinkArea;