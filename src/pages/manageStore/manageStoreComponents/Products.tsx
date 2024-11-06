import React from 'react';
import WhiteCard from '../../../components/WhiteCard';
import Button from '../../../components/Button';

const Products: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const anyfunction = () => {
    return 0;
  };
  
  const products = [
    { productName: "papitas", description: "30gr", amount: "$320" },
    { productName: "papitas", description: "30gr", amount: "$320" },
    { productName: "papitas", description: "30gr", amount: "$320" },
    { productName: "papitas", description: "30gr", amount: "$320" },
    { productName: "papitas", description: "30gr", amount: "$320" },
    { productName: "papitas", description: "30gr", amount: "$320" },
    { productName: "papitas", description: "30gr", amount: "$320" },
    { productName: "papitas", description: "30gr", amount: "$320" },
    { productName: "papitas", description: "30gr", amount: "$320" },
    { productName: "papitas", description: "30gr", amount: "$320" },
    { productName: "papitas", description: "30gr", amount: "$320" },
    { productName: "papitas", description: "30gr", amount: "$320" },
    { productName: "papitas", description: "30gr", amount: "$320" },
    { productName: "papitas", description: "30gr", amount: "$320" },
    { productName: "papitas", description: "30gr", amount: "$320" },
  ];

  return (
    <div>
      <WhiteCard
        title="Manage Store"
        isDarkMode={isDarkMode}
        className="h-[93vh] m-5" // Limitar la altura de WhiteCard
        children={
          <>
            {/* Contenedor de scroll para los productos */}
            <div className="w-full h-[80vh] overflow-y-auto p-5">
              {products.map((product, index) => (
                <div key={index} className={`flex border mb-2 p-4 `}>
                  <div
                    className={`w-52 h-32 bg-[#F0F1F3] }`}
                  ></div>
                  <div className="pl-2 flex flex-col w-full justify-between">
                    <div className="flex justify-between w-full">
                      <p className="font-bold text-xl">{product.productName}</p>
                      <Button
                        onClick={anyfunction}
                      >
                        eso
                      </Button>
                    </div>
                    <p className="text-lg">{product.description}</p>
                    <p className="text-lg">{product.amount}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      />
    </div>
  );
};

export default Products;
