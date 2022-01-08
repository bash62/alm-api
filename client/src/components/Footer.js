import React from "react";

const Footer = ({
    ...otherProps
}) => {
    return (
        <footer className="bg-white ">
            <div className="w-full max-w-7xl mx-auto px-2.5 py-14 ">
                <span className="text-base">
                    COPYRIGHT 
                </span>
            </div>
        </footer>
    );
};

export default Footer;