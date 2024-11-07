import Button from "./../ui/Button";
import { axiosPost, axiosUpdate } from "../../api/authApi";

const Form = ({ value }) => {
  const { search, setSearch, setApiData, apiData, data, setData } = value;

  //postdata
  const handlePostdata = async () => {
    const response = await axiosPost(data);
    if (response.status === 201) {
      setApiData([...apiData, response.data]);
    }
  };

  //edit data function
  const handleEdit = async () => {
    const response = await axiosUpdate(data.id, data);
  if (response.status === 200) {
   setApiData((prev) => {
     const updatedData = prev.map((item) => {
       if (item.id === response.data.id) {
         return response.data;
       }
       return item;
     });
     return updatedData;
   })

   //option two
  // setApiData((prev) => {
  //   return prev.map((item) => {
  //     return item.id === response.data.id ? response.data : item
  //   })
  // })
  }
  };

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit();
    handlePostdata();
    setSearch("");
    setData({id: undefined, title: "", body: "" });
  };

  //updata  data function
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full  px-5 py-3 rounded-lg bg-blue-900 "
      >
        <div className="flex  flex-col md:flex-row gap-5 md:gap-10 justify-center items-center">
          {/* search input */}
          <div>
            <input
              type="text"
              placeholder="search content"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-class"
            />
          </div>
          {/* curd operation */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-10   justify-center items-center ">
            <input
              type="text"
              placeholder="add title"
              className="input-class"
              name="title"
              value={data.title}
              onChange={handleInputChange}
            />
            <input
              value={data.body}
              onChange={handleInputChange}
              type="text"
              name="body"
              placeholder="add post"
              className="input-class"
            />
          </div>
          {/* button section */}
          <button type="submit">
            <Button value="add" color="bg-green-400" />
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
