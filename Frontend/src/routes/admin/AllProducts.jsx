import { TbTrashXFilled } from "react-icons/tb";


import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";


const AllProducts = ({ products, deleteProduct }) => {

    function handleClick(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id);
            }
        });
    }


    return (
        <div className="grid justify-center grid-cols-1 gap-4 px-5 py-5 md:px-10 md:grid-cols-2">
            {products &&
                products.map((product) => (
                    <div
                        key={product.id}
                        className="overflow-hidden border rounded-lg shadow"
                    >
                        <table className="w-full text-[8px] md:text-base">
                            <thead>
                                <tr className="text-[13px] uppercase p-1 text-blue-900 ">
                                    <th className="p-2">Image</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th className="p-2">Price</th>
                                    <th>Rating</th>
                                    <th className="p-2">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-t-[1.5px] border-blue-900 text-sm  capitalize font-[500]  hover:bg-slate-100 duration-300 transition-all ">
                                    <td className="h-20 w-18">
                                        <img
                                            src={product.thumbnail}
                                            className="object-cover w-full h-full"
                                        />
                                    </td>

                                    <td className="text-center">
                                        <p>{product.title.substring(0, 9)}.</p>
                                    </td>

                                    <td className="text-center">
                                        <p>{product.category}</p>
                                    </td>

                                    <td className="text-center">
                                        <p>${product.price}</p>
                                    </td>

                                    <td className="text-center">
                                        <p>{product.rating}</p>
                                    </td>
                                    <td>
                                        <TbTrashXFilled className="text-2xl text-center text-red-600 cursor-pointer ml-[20%] mx-auto"
                                            onClick={() => handleClick(product.id)}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
        </div>
    );
};

export default AllProducts;
