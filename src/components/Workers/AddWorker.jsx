import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddWorker = (props) => {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredSalary, setEnteredSalary] = useState("");
  const [error, setError] = useState();

  const minimumSalary = 3000;
  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (enteredWorkerName.trim().length === 0) {
      setError({
        title: "İsim Alanı Zorunludur!",
        desc: "Lütfen bir isim giriniz",
      });
      return;
    }
    if (+enteredSalary < minimumSalary) {
      setError({
        title: "Maaş Alanı Zorunludur!",
        desc: `Lütfen ${minimumSalary} değerinden büyük bir değer giriniz`,
      });
      return;
    }
    props.setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        salary: enteredSalary,
      },
      ...prevState,
    ]);
    setEnteredSalary("");
    setEnteredWorkerName("");
  };

  const ErrorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal onConfirm={ErrorHandler} error={error} />}
      <Card className="mt-10">
        <form className="flex flex-col gap-y-2" onSubmit={addWorkerHandler}>
          <label htmlFor="name">Çalışan İsmi</label>
          <input
            type="text"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Çalışan ismi yazınız"
            id="name"
            onChange={(e) => setEnteredWorkerName(e.target.value)}
            value={enteredWorkerName}
          />
          <label htmlFor="salary">Maaş Miktarı</label>
          <input
            type="number"
            className="max-w-[40rem] w-full mx-auto border p-2"
            placeholder="Maaş bilgisi giriniz"
            id="salary"
            onChange={(e) => setEnteredSalary(e.target.value)}
            value={enteredSalary}
          />
          <Button className="mt-2" type="submit">
            Ekle
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddWorker;
