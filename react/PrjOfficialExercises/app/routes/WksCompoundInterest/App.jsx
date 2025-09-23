import useFormula from "./Formula";
import { useState } from "react";

function Calculater({ enter }) {
  const year = useFormula(enter.principal, enter.rate);

  return <h1>You need {year} to get your money double!</h1>;
}

export default function CompoundInterest() {
  const [principal, setPrincipal] = useState();
  const [rate, setRate] = useState();

  return (
    <>
      <h1>Compound Interest Calculater</h1>
      <hr />
      <h2>Please Enter a your principal: </h2>
      <input
        type="number"
        placeholder="e.g. 1000"
        value={principal}
        // 设置state 暂时储存数据
        onChange={(e) => setPrincipal(parseInt(e.target.value) || 0)}
        required
      />
      <br />

      <h2>Please Enter a percentage: </h2>
      <input
        type="number"
        placeholder="e.g. 6"
        value={rate}
        //  设置 state 暂时储存数据
        onChange={(e) => setRate(parseInt(e.target.value))}
        required
      />
      <br />

      {/* 把所有信息包成一个对象传进useFormula */}
      <Calculater
        enter={{
          rate,
          principal,
        }}
      ></Calculater>
    </>
  );
}
