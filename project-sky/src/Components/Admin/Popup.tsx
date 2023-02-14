import { ChangeEvent } from "react";

const Popup = (props: any) => {
    return ( props.trigger ) ? ( 
        <div className="popupDiv">
            {props.children}
        </div>
    ) : <></>;
}

export default Popup;