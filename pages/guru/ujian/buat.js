import React from "react";
import { useForm } from "react-hook-form";
import PilihanGanda from "../../../components/Guru/Buat/PilihanGanda";
import SoalSection from "../../../components/Guru/Buat/SoalSection";
import Nav from "../../../components/Navigation/Nav";

function Page() {
  const { register: data, handleSubmit, unregister: deleteData } = useForm();
  const onSubmit = (values) => console.log(values);
  return (
    <>
      <Nav />
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <SoalSection data={data} deleteData={deleteData} />
        </section>
        <button>Tes</button>
      </form>
    </>
  );
}

export default Page;
