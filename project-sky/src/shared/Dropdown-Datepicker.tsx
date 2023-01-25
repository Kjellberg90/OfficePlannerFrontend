import { useState } from "react";
import { format } from "date-fns";




const DropdownDatepicker = () => {

    // const [date, setDate] = useState(new Date());
    const [date, setDate] = useState("");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setDate(value);
    };


        var disDate = new Date();
        var formattedDate = format(disDate, "yyyy-MM-dd");
        console.log(formattedDate);
  



    return (
        <>
            <input type="date" defaultValue={formattedDate} />
        </>
    )
}

export default DropdownDatepicker;