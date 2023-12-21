import { CardLeftPain } from "@/components/Molecule/CardLeftPain/CardLeftPain";
import { clientPainInformation } from "./data_mock";
import { CardRightPain } from "@/components/Molecule/CardRightPain/CardRightPain";

export const PainSection = () => {
  return (
    <section className="bg-primary-blue">
      <div className="bg-dark-gray-transparent">
        <h1 className="font-bold text-base uppercase text-white text-center px-4">
          Se você está aqui,{" "}
          <strong className="text-gray-600">
            significa que você está escolhendo
          </strong>{" "}
          solucionar:
        </h1>
      </div>
      <div>
        <div className="flex flex-col gap-4 py-8 px-4">
          {clientPainInformation.map((item) => {
            if (item.id % 2 === 0) {
              return (
                <CardRightPain
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  title={item.title}
                />
              );
            } else {
              return (
                <CardLeftPain
                  key={item.id}
                  id={item.id}
                  description={item.description}
                  title={item.title}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};
