import Image from 'next/image';

function HotSite() {
  return (
    <div className="relative items-left">
      {/* Header Section */}
        <header className="max-w-5xl md:mx-auto pl-5 lg:pl-0 md:py-0 md:px-10">
        <div 
          className="flex pb-8 justify-start bg-no-repeat bg-left-top h-64 md:h-96 mb-36 md:m-0"
          style={{
            backgroundImage: "url('https://cdn.sanity.io/images/p06bvv6p/production/8999fffe31e4026aa2a0e1b3ad73d754367f7994-1280x800.png')",
            backgroundSize: 'contain',
          }}
        >
        </div>

        {/* Face Image Section */}
        <div className="fixed top-[60%] transform -translate-y-[70%] z-10 right-2 md:right-[calc((100%-theme(maxWidth.5xl))/2)]">
          <Image
            src="https://cdn.sanity.io/images/p06bvv6p/production/c3b87a1136e0bf40a09710cc20042d9fca2a9d4a-2896x3010.png"
            alt="Gustavo Bucker"
            width={400}
            height={500}
            className="object-contain"
          />
        </div>
      </header>



      {/* Main Section */}
      <main className="relative z-10">
        {/* Content Section */}
        <div className="bg-[#141d45] w-full flex-grow text-gray-100 p-5 md:p-10 text-left relative mt-10">
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
            <p className="text-lg pt-10">
            Gustavo Bucker
            </p>
          </div>
        </div>
        {/* Google Forms Section */}
        <div id="google-form" className="max-w-5xl mx-auto bg-gray-100">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSdF7VOfAGFUatD_h38uS8u-yxXc74v-aJV-bawtFGfvVGZeCQ/viewform?embedded=true" 
            className="pt-10 w-full overflow-x-hidden" 
            height="2000" 
          >Carregando…</iframe>
        </div>
      </main>
    </div>
  );
}

export default HotSite;