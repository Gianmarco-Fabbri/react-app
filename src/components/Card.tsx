import React from "react";

interface CardProps {
    title: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
    return (
        <div className="border rounded shadow-md p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div>{children}</div>
        </div>
    );
};

export default Card;
