import IcomoonReact from "icomoon-react";
import iconSet from "./selection.json";

const Icon = (props) => {
    const { color="#fff" , size = "64", icon, className = "" } = props;
    return (
        <IcomoonReact
            className={className}
            iconSet={iconSet}
            color={color}
            size={size}
            icon={icon}
        />
    );
};

export default Icon;