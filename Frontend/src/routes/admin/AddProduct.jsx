import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import {
  GiLoincloth,
  GiPayMoney,
  GiReceiveMoney,
  //   GiCloudUpload,
} from "react-icons/gi";
import { toast } from "react-toastify";
import { db, storage } from "../../config/firebase";
import { IoCloudUploadSharp } from "react-icons/io5";
import { addDoc, collection } from "firebase/firestore";

const Addproducts = () => {
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState({
    title: "",
    description: "",
    category: "",
    rating: null,
    isNew: null,
    oldPrice: "",
    price: "",
    photo: null,
  });

  const handleChange = (e) => {
    setProducts({ ...products, [e.target.name]: e.target.value });
  };

  // function pour uploader l'image
  const uploadImage = (e) => {
    setLoading(true);
    // stocker l'image dans une variable
    const imageFile = e.target.files[0];

    // creer un reference pour le storage
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);

    // importer l'image
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    // suivre l'avancée du téléversement
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        toast.error(error.message);
        setLoading(false);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          // stocker l'url de l'image dans la state
          setProducts({ ...products, photo: downloadURL });
          // setUrlImage(downloadURL);
          const nameFile = uploadTask.snapshot.ref.name;
          toast.success(`${nameFile} uploaded successfully`);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        });
      }
    );
  };

  // supprimer l'image dans le storage
  const deleteImage = () => {
    const storageRef = ref(storage, `${products.photo}`);

    deleteObject(storageRef)
      .then(() => {
        toast.warning("Image supprimée avec succès");
        setProducts({ ...products, photo: null });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // sauvegarder les informations dans la base de données
  async function saveItem(data) {
    const itemsCollectionRef = collection(db, "products");

    try {
      await addDoc(itemsCollectionRef, data);
      toast.success("Item Added Successfully 😊");
      setProducts({
        title: "",
        description: "",
        category: "",
        rating: null,
        isNew: null,
        oldPrice: "",
        price: "",
        photo: null,
      });
    } catch (error) {
      toast.error(error);
    }
  }

  // soumettre le formulaire
  function handleSubmit(e) {
    e.preventDefault();
    // validation des champs du formulaire
    if (
      !products.title ||
      !products.description ||
      !products.category ||
      !products.rating ||
      !products.isNew ||
      !products.oldPrice ||
      !products.price ||
      !products.photo
    ) {
      toast.warning("Required fields can't be empty");
    } else {
      // sauvegarder les données dans le fireStore
      const data = { ...products };
      //   fonction pour sauvegarder les données dans le fireStore
      saveItem(data);
    }
  }

  return (
    <div className="w-full mt-[5vh] md:mt-[15vh] mb-10 flex flex-col items-center justify-center">
      <form
        className="w-full md:w-[500px] shadow-lg p-4 md:p-10 rounded-xl border border-slate-200 space-y-5"
        onClick={(e) => handleSubmit(e)}
      >
        <h1 className="text-center font-[600] text-2xl ">Add New Item</h1>

        <div className="flex items-center w-full gap-1 border-b border-slate-300">
          <GiLoincloth className="text-xl" />
          <input
            value={products.title}
            onChange={(e) => handleChange(e)}
            placeholder="products's Title"
            className="p-1 rounded placeholder:text-lg focus:outline-none"
            type="text"
          />
        </div>

        <div className="flex items-center gap-1">
          <textarea
            value={products.description}
            onChange={(e) => handleChange(e)}
            placeholder="Description"
            rows={4}
            className="w-full p-1 border rounded focus:outline-none border-slate-300"
          ></textarea>
        </div>

        <div className="flex justify-between gap-6">
          <select
            className="flex-1 p-2 bg-gray-100 rounded shadow focus:outline-none "
            onChange={(e) => handleChange(e)}
          >
            <option value="">Category </option>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kids">Kids</option>
          </select>

          <select
            className="flex-1 p-2 bg-gray-100 rounded shadow focus:outline-none"
            onChange={(e) => handleChange(e)}
          >
            <option value="">Rating </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <select
            className="flex-1 p-2 bg-gray-100 rounded shadow focus:outline-none"
            onChange={(e) => handleChange(e)}
          >
            <option value="">Is New </option>
            <option value="no">False</option>
            <option value="yes">True</option>
          </select>
        </div>

        <div className="flex justify-between gap-10">
          <div className="flex items-center gap-1 border-b border-slate-300">
            <GiPayMoney className="text-xl" />
            <input
              value={products.oldPrice}
              className="w-full focus:outline-none"
              type="number"
              placeholder="Old Price"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex items-center gap-1 border-b border-slate-300">
            <GiReceiveMoney className="text-xl" />
            <input
              value={products.price}
              onChange={(e) => handleChange(e)}
              className="w-full focus:outline-none"
              type="number"
              placeholder="Price"
            />
          </div>
        </div>

        <div className="flex h-[300px] items-center justify-center w-full border-2 border-black border-dashed bg-slate-200 cursor-pointer">
          {products.photo === null && (
            <label htmlFor="photo" className="flex h-full">
              <div className="flex flex-col items-center justify-center cursor-pointer">
                <p className="text-xl">Uplaod Your Photo</p>
                <IoCloudUploadSharp size={30} />
              </div>
              <input
                type="file"
                id="photo"
                name="photo"
                value={products.photo}
                className="hidden w-full h-full p-1 mt-1 border rounded-md outline-none"
                placeholder="Enter your email address"
                onChange={(e) => uploadImage(e)}
              />
            </label>
          )}

          {products.photo && !loading && (
            <div className="relative w-full h-full rounded-full">
              <img
                src={products.photo}
                alt="photo"
                className="object-cover w-full h-full rounded-full"
              />
              <span
                className="absolute flex items-center justify-center w-8 h-8 text-white bg-red-500 rounded-full cursor-pointer bottom-2 right-2"
                onClick={deleteImage}
              >
                <MdDelete size={20} />
              </span>
            </div>
          )}

          {products.photo && loading && (
            <img
              src={Animation}
              alt="animation"
              className="w-[100px] h-[100px]"
            />
          )}
        </div>

        <div className="flex justify-end">
          <input
            type="submit"
            value={"Save"}
            className="px-12 py-2 text-lg font-semibold text-white transition-all duration-300 border-none rounded-lg cursor-pointer bg-emerald-500 hover:bg-emerald-600 "
          />
        </div>
      </form>
    </div>
  );
};

export default Addproducts;
