import { MdDelete } from "react-icons/md";

const SummaryTable = ({value,date,handleDelete}) => {
    console.log(value);

    return (
        <>
           
            <tr className="text-dark text-center">
                <th scope="row" className="px-1 py-2 md:px-6 md:py-4 font-medium  whitespace-nowrap ">
                   <span className="bg-warning px-2.5 py-2  md:px-5 rounded-2xl md:py-2 capitalize"> {value.title ? `${value.title}` : "no expences added yet"}</span>
                </th>
                <td className="px-1 py-2 md:px-6 md:py-4 text-xl font-semibold  ">
                   <span>{value.addExpencesmoney? `$${value.addExpencesmoney}` : "$0"}</span>
                </td>
                <td className="px-1 py-2 md:px-6 md:py-4 text-xl font-semibold">
                    <span className="capitalize">{date ? date : "- "}</span>
                </td>
                <td className="px-1 py-2 md:px-6 md:py-4">
                  <button onClick={() => handleDelete(value.title)} className="bg-warning rounded-lg shadow-2xl active:scale-95 transition-all duration-200 ease-linear shadow-[#111] px-1 py-0.5 text-white text-3xl "><MdDelete/></button>
                </td>
            </tr>
           
        </>
    );
};

export default SummaryTable;