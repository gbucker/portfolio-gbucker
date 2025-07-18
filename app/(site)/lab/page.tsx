import Image from 'next/image';

function HotSite() {
  const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  
  const backgroundImageUrl = `https://cdn.sanity.io/images/${sanityProjectId}/${sanityDataset}/1f79ee1f53f77d206603a59a8076e7fee48568fe-1280x800.png`;
  const faceImageUrl = `https://cdn.sanity.io/images/${sanityProjectId}/${sanityDataset}/58b368ed2eb5e0ee5ea9d7eac543c793278b0ae0-2896x3010.png`;

  return (
    <div className="relative items-left">
      {/* Header Section */}
      <header className="max-w-5xl lg:mx-auto lg:pl-0 lg:py-0 md:px-10 lg:h-[558px]">
        <div
          className="flex pb-8 justify-start bg-no-repeat bg-left-top h-64 md:h-96 mb-36 md:m-0 ml-5"
          style={{
            backgroundImage: `url('${backgroundImageUrl}')`,
            backgroundSize: 'contain',
          }}
        >
        </div>

        {/* Face Image Section */}
        <div className="fixed z-10 top-[60%] md:top-[558px] transform -translate-y-[70%] right-2 lg:right-[calc((100%-theme(maxWidth.5xl))/2)]">
          <Image
            src={faceImageUrl}
            alt="Gustavo Bucker"
            width={400}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Date and CTA Section */}
        <div className="relative z-20 md:z-0 bg-[#141d45] md:bg-transparent w-full flex-grow text-gray-100 md:text-[#141d45] text-left pt-10 md:p-0 md:pt-0 md:pb-10">

          <p className="pt-5 text-xl font-bold">Sábados de março (8, 15, 22,29) e abril (5, 12, 19, 26) de 2025
          <br/> das 10 às 13 horas</p>

          <div className="text-left mt-5">
            <a href="#google-form" className="bg-gray-100 text-[#141d45] md:bg-[#141d45] md:text-gray-100 object-center md:boject-left py-3 px-6 rounded-md inline-block font-bold scroll-smooth">
              Quero me arriscar!
            </a>
          </div>
        </div>
        
      </header>


      {/* Main Section */}
      <main className="relative z-20">
        {/* Content Section */}
        <div className="bg-[#141d45] w-full flex-grow text-gray-100 px-5 py-10 lg:p-10 lg:pb-20 text-left relative">
          <div className="max-w-5xl mx-auto">
            <p className="text-lg">
              Bem-vindes ao Laboratório Perigoso de Comédia, um experimento para (re)descobrir o que há de mais genuíno e engraçado em você no palco. Projetado para comediantes e estudantes de comédia, este curso é um desafio de auto-observação e um convite ao risco.
            </p>
            <p className="text-lg pt-10">
              Reuni os jogos mais desafiadores que aprendi com os Doutores da Alegria, Cristiane Paoli-Quito e na renomada École Philippe Gaulier. Adaptei essas técnicas para comediantes de stand-up e improviso, propondo uma abordagem ousada que fará você se lançar ao desconhecido, confrontar seus limites e descobrir o que realmente faz você ser engraçado.
            </p>
            <p className="text-lg pt-10">
              No Laboratório Perigoso de Comédia, o palco é um terreno de experiências, onde erros são combustíveis e o fracasso, uma ferramenta. Cada exercício desestabiliza o conforto, amplifica sua percepção e revela o cômico que emerge do risco e do momento presente.
            </p>
            <p className="text-lg pt-10">
              Se você está disponível para se abrir ao desconhecido e explorar a comédia, venha fazer parte desta experiência. O risco é alto, mas as recompensas são ainda maiores — o riso pode estar ao seu alcance.
            </p>

            {/* Google Maps */}
            {/* <p className="text-lg font-bold pt-10">
              Local:
            </p>
            <div className="w-full md:w-1/2 mt-5 bg-gray-200">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.285083072992!2d-46.64519102385397!3d-23.558202561477785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce595966c17491%3A0x82a68c36ac8e8f8d!2sQ.G.%20791!5e0!3m2!1spt-BR!2sbr!4v1728768675559!5m2!1spt-BR!2sbr"
              className="border-0 w-full max-w-5xl h-[300px]" 
              referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div> */}
          </div>
        </div>


        {/* Google Forms Section */}
        <div id="google-form" className="max-w-5xl mx-auto bg-gray-100">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf0_V5EO67z12kVOpO2FaFFOXyb8otULdTa7qcda7N-jl9pmA/viewform?embedded=true"
            className="pt-10 w-full overflow-x-hidden"
            height="2000"
          >Carregando…</iframe>
        </div>
      </main>
    </div>
  );
}

export default HotSite;