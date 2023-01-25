import { useEffect, useState } from "react";
import { format } from "date-fns";

const DropdownDatepicker = () => {

    const [date, setDate] = useState("");

    var today = new Date();
    var formattedDate = format(today, "yyyy-MM-dd");
    useEffect(() => {
        setDate(formattedDate);
    }, [formattedDate])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setDate(value);
        console.log(value);
    };

    return (
        <>
            <input type="date" defaultValue={formattedDate} onChange={handleChange} />
        </>
    )
}

export default DropdownDatepicker;