import ApartmentsAndPrices from "@pages/complex.tsx/apartments-and-prices";
import Banner from "@pages/complex.tsx/banner";
import Cardinate from "@pages/complex.tsx/cardinate";
import EntranceGroup from "@pages/complex.tsx/entrance-group";

function Complex() {
  return (
    <>
      <Banner />
      <ApartmentsAndPrices />
      <EntranceGroup />
      <Cardinate />
    </>
  );
}

export default Complex;
