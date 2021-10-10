import React from 'react';
import Code from '../assets/img/code.png'

function AboutContainer(props) {
  return (
    <div className="container flex flex-col lg:flex-row p-10 xl:gap-32 2xl:gap-44">
      <img src={Code} className="w-96 object-contain mx-auto" alt=""/>
      <div className="bg-gray-200 m-5 rounded-3xl p-10 w-full text-center text-gray-500">
        <p>Hobi olarak başladığım, sadece kendime ait siteler yaptığım bir alandı yazılım benim için. Sonrasında bu hobiyi meslek haline getirmem gerektiğini fark ettim. Çünkü kod yazmayı çok seviyor ve bulmaca çözmeye benzetiyordum.</p>
        <p>7 - 8 yıllık bir süreden sonra artık profesyonel anlamda işler yapmaya başladım. İlk freelance işimi aldım ve işi aldıktan sonra gerçekten mesleğimi ne kadar çok sevdiğimi tekrar anladım. Şu an Dokuz Eylül Üniversitesi'nde Mekatronik programı okumaktayım. Umarım alanımda da yazılım konusunda başarılı olurum.</p>
      </div>
    </div>
  );
}

export default AboutContainer;
