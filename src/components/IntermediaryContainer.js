import React from 'react';
import Button from "./Button";

function IntermediaryContainer(props) {
  return (
    <section id="intermediary" className="bg-primary">
      <div className="container py-12 flex justify-between items-center">
        <span className="text-white font-bold text-lg">İhtiyacınızı en hızlı şekilde karşılayalım</span>
        <div className="w-40">
          <Button>
            İşe Al
          </Button>
        </div>
      </div>
    </section>
  );
}

export default IntermediaryContainer;
